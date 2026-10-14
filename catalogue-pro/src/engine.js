import * as THREE from 'three';
import { buildIPhone } from './iphone3d.js';

/** Studio photo clair : softbox + strip lights pour les reflets, ombre douce au sol. */
function makeStudio(renderer, scene) {
  const env = new THREE.Scene();
  env.add(new THREE.Mesh(new THREE.BoxGeometry(80, 80, 80), new THREE.MeshBasicMaterial({ color: 0x1a1b1e, side: THREE.BackSide })));
  const panel = (w, h, k, pos, color = 0xffffff) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), side: THREE.DoubleSide }));
    m.position.set(...pos);
    m.lookAt(0, 0, 0);
    env.add(m);
  };
  panel(18, 18, 2.6, [0, 24, 4]);
  panel(3, 30, 5, [-20, 2, 8], 0xfff6ea);
  panel(3, 30, 4, [20, 2, -4], 0xeef3ff);
  panel(26, 4, 2.2, [0, 6, -24]);
  panel(16, 10, 1.4, [6, 0, 24]);
  panel(40, 40, 0.5, [0, -24, 0], 0xd8d6d2);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(env, 0.03).texture;
  pmrem.dispose();

  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(2.5, 24, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -14, right: 14, top: 14, bottom: -14, near: 1, far: 60 });
  key.shadow.radius = 18;
  key.shadow.blurSamples = 24;
  key.shadow.bias = -0.0004;
  scene.add(key, new THREE.HemisphereLight(0xffffff, 0x8a8a8a, 0.5));

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 0.13 }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  return { floor };
}

function makeRenderer(opts = {}) {
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance', ...opts });
  r.setClearColor(0x000000, 0);
  r.toneMapping = THREE.ACESFilmicToneMapping;
  r.toneMappingExposure = 1.0;
  r.shadowMap.enabled = true;
  r.shadowMap.type = THREE.VSMShadowMap;
  return r;
}

/** Normalise un objet : centré, posé, et retourne sa taille. */
function frame(object) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  object.position.sub(box.getCenter(new THREE.Vector3()));
  return size;
}

const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
const VIEWS = { front: 0.38, back: Math.PI + 0.42, side: Math.PI / 2 + 0.25 };

/**
 * Visualiseur principal (un seul canvas déplacé de page en page).
 */
export class Viewer {
  constructor() {
    const isTouch = matchMedia('(pointer: coarse)').matches;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.renderer = makeRenderer();
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, isTouch ? 1.75 : 2));
    this.canvas = this.renderer.domElement;
    this.canvas.className = 'viewer-canvas';
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(26, 1, 0.1, 300);
    this.studio = makeStudio(this.renderer, this.scene);
    this.pivot = new THREE.Group();
    this.scene.add(this.pivot);
    this.current = null;
    this.outgoing = [];
    this.yaw = VIEWS.back; this.yawGoal = VIEWS.back; this.vel = 0;
    this.tilt = 0.06; this.tiltGoal = 0.06;
    this.size = new THREE.Vector3(7, 15, 1);
    this.lastInput = 0;
    this.enter = 1;
    this.container = null;
    this.bindInput();
    new ResizeObserver(() => this.resize()).observe(document.documentElement);
    let prev = performance.now();
    this.renderer.setAnimationLoop(() => {
      const now = performance.now();
      this.tick(Math.min(0.05, (now - prev) / 1000), now);
      prev = now;
    });
  }

  mount(container) {
    this.container = container;
    container.append(this.canvas);
    this.resize();
  }

  resize() {
    if (!this.container || !this.container.isConnected) return;
    const w = this.container.clientWidth, h = this.container.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.fitCamera();
  }

  fitCamera() {
    const s = this.size;
    const vFov = THREE.MathUtils.degToRad(this.camera.fov);
    const needH = (s.y * 1.3) / (2 * Math.tan(vFov / 2));
    const needW = (Math.max(s.x, s.z) * 1.45) / (2 * Math.tan(vFov / 2) * this.camera.aspect);
    const d = Math.max(needH, needW);
    this.camera.position.set(0, s.y * 0.04, d);
    this.camera.lookAt(0, 0, 0);
    this.studio.floor.position.y = -s.y / 2 - Math.max(0.6, s.y * 0.07);
  }

  /** Affiche un objet 3D (iPhone construit ou autre produit). */
  showObject(product, { view = 'back' } = {}) {
    if (this.current) this.outgoing.push({ ...this.current, t: 1 });
    const wrap = new THREE.Group();
    wrap.add(product.group);
    this.size = frame(product.group);
    this.pivot.add(wrap);
    this.current = { ...product, wrap };
    this.enter = 0;
    this.yawGoal = VIEWS[view] ?? VIEWS.back;
    this.yaw = this.yawGoal - 0.9;
    this.vel = 0;
    this.lastInput = performance.now();
    this.fitCamera();
  }

  showIPhone(spec, colorIndex = 0, opts) {
    this.showObject(buildIPhone(spec, this.renderer, colorIndex), opts);
  }

  setColor(i) { this.current?.setColor?.(i); }
  setView(v) { this.yawGoal = nearest(VIEWS[v], this.yaw); this.vel = 0; this.lastInput = performance.now(); }

  bindInput() {
    const c = this.canvas;
    let id = null, x = 0, y = 0, t = 0;
    c.addEventListener('pointerdown', (e) => {
      id = e.pointerId; x = e.clientX; y = e.clientY; t = performance.now();
      c.setPointerCapture(id); c.classList.add('dragging'); this.vel = 0;
    });
    c.addEventListener('pointermove', (e) => {
      if (e.pointerId !== id) return;
      const now = performance.now();
      const dx = e.clientX - x, dy = e.clientY - y;
      x = e.clientX; y = e.clientY;
      const k = 6 / Math.min(innerWidth, 900);
      this.yawGoal += dx * k;
      this.tiltGoal = THREE.MathUtils.clamp(this.tiltGoal + dy * k * 0.5, -0.6, 0.6);
      this.vel = THREE.MathUtils.lerp(this.vel, (dx * k) / Math.max(0.001, (now - t) / 1000), 0.4);
      t = now; this.lastInput = now;
    });
    const end = (e) => {
      if (e.pointerId !== id) return;
      if (performance.now() - t > 90) this.vel = 0;
      id = null; c.classList.remove('dragging');
    };
    c.addEventListener('pointerup', end);
    c.addEventListener('pointercancel', end);
  }

  tick(dt, now) {
    if (!this.container || !this.container.isConnected || !this.current) return;
    this.yawGoal += this.vel * dt;
    this.vel *= Math.exp(-2.6 * dt);
    if (!this.reduced && now - this.lastInput > 4500) this.yawGoal += 0.22 * dt;
    this.tiltGoal = damp(this.tiltGoal, 0.06, 0.8, dt);
    this.yaw = damp(this.yaw, this.yawGoal, 6, dt);
    this.tilt = damp(this.tilt, this.tiltGoal, 6, dt);
    this.enter = Math.min(1, this.enter + dt / 0.9);
    const e = 1 - Math.pow(1 - this.enter, 3);
    const w = this.current.wrap;
    w.rotation.set(this.tilt, this.yaw, 0, 'YXZ');
    w.scale.setScalar(0.86 + 0.14 * e);
    w.position.y = (this.reduced ? 0 : Math.sin(now / 1600) * 0.06 * this.size.y / 15) - (1 - e) * 0.8;

    this.outgoing = this.outgoing.filter((o) => {
      o.t -= dt / 0.35;
      if (o.t <= 0) { this.pivot.remove(o.wrap); o.dispose?.(); return false; }
      o.wrap.scale.setScalar(o.t);
      return true;
    });
    this.renderer.render(this.scene, this.camera);
  }
}

function nearest(angle, ref) { return angle + Math.PI * 2 * Math.round((ref - angle) / (Math.PI * 2)); }

/**
 * Générateur de vignettes (renderer dédié, file d'attente non bloquante).
 */
export class Thumbnailer {
  constructor(size = 480) {
    this.size = size;
    this.cache = new Map();
    this.queue = [];
    this.busy = false;
  }

  ensure() {
    if (this.renderer) return;
    this.renderer = makeRenderer({ preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(this.size, this.size, false);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(24, 1, 0.1, 300);
    this.studio = makeStudio(this.renderer, this.scene);
  }

  /** Demande une vignette ; `cb(url)` est appelé quand elle est prête. */
  request(key, build, cb, { view = 'back' } = {}) {
    if (this.cache.has(key)) { cb(this.cache.get(key)); return; }
    this.queue.push({ key, build, cb, view });
    this.pump();
  }

  pump() {
    if (this.busy || !this.queue.length) return;
    this.busy = true;
    const step = () => {
      const job = this.queue.shift();
      if (!job) { this.busy = false; return; }
      if (this.cache.has(job.key)) { job.cb(this.cache.get(job.key)); setTimeout(step, 0); return; }
      this.ensure();
      const product = job.build(this.renderer);
      const size = frame(product.group);
      const wrap = new THREE.Group();
      wrap.add(product.group);
      wrap.rotation.set(0.06, VIEWS[job.view], 0, 'YXZ');
      this.scene.add(wrap);
      const vFov = THREE.MathUtils.degToRad(this.camera.fov);
      const d = (Math.max(size.y, size.x * 1.3) * 1.14) / (2 * Math.tan(vFov / 2));
      this.camera.position.set(0, size.y * 0.03, d);
      this.camera.lookAt(0, 0, 0);
      this.studio.floor.position.y = -size.y / 2 - Math.max(0.5, size.y * 0.06);
      this.renderer.render(this.scene, this.camera);
      const url = this.renderer.domElement.toDataURL('image/png');
      this.scene.remove(wrap);
      product.dispose?.();
      this.cache.set(job.key, url);
      job.cb(url);
      setTimeout(step, 16);
    };
    setTimeout(step, 0);
  }
}
