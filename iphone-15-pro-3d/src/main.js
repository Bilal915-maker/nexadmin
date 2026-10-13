import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createPhone } from './phone.js';
import { createStudio, FLOOR_Y } from './studio.js';
import {
  CAPTIONS, DURATION, HOME, PRESETS,
  clonePose, lerpPose, nearestAngle, sampleTimeline,
} from './timeline.js';

const $ = (s) => document.querySelector(s);
const canvas = $('#scene');
const isTouch = matchMedia('(pointer: coarse)').matches;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Rendu ────────────────────────────────────────────────────────────────
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
} catch (e) {
  $('#loader').innerHTML = '<p>WebGL n’est pas disponible sur ce navigateur.</p>';
  throw e;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, isTouch ? 1.75 : 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 400);
const studio = createStudio(renderer, scene);
const phone = createPhone(renderer);
scene.add(phone);

// ── Post-production : profondeur de champ + bloom léger ────────────────────
// Cible de rendu multi-échantillonnée (MSAA ×4) : arêtes du titane nettes malgré la post-prod
const rt = new THREE.WebGLRenderTarget(1, 1, { samples: 4, type: THREE.HalfFloatType });
const composer = new EffectComposer(renderer, rt);
composer.addPass(new RenderPass(scene, camera));
const bokeh = new BokehPass(scene, camera, { focus: 40, aperture: 0.0006, maxblur: 0.012 });
composer.addPass(bokeh);
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.22, 0.55, 0.88);
composer.addPass(bloom);
composer.addPass(new OutputPass());

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  bloom.resolution.set(w / 2, h / 2);
}
window.addEventListener('resize', resize);
resize();

// ── Application d'une pose à la scène ───────────────────────────────────────
const tmp = new THREE.Vector3();
const lastPose = clonePose(HOME);

function applyPose(pose, time) {
  phone.rotation.set(pose.rotX, pose.rotY, 0, 'YXZ');
  phone.position.y = reducedMotion ? 0 : Math.sin(time * 0.55) * 0.08; // léger flottement
  phone.updateMatrixWorld();
  tmp.fromArray(pose.target).applyMatrix4(phone.matrixWorld);

  // Sur écran portrait, les gros plans reculent pour garder le sujet entier
  const closeFit = Math.max(1, 0.8 / camera.aspect);
  const heroFit = Math.max(1, 0.66 / camera.aspect);
  const d = pose.dist * (heroFit + (closeFit - heroFit) * pose.close);

  const ce = Math.cos(pose.el);
  camera.position.set(
    tmp.x + d * ce * Math.sin(pose.az),
    Math.max(FLOOR_Y + 0.6, tmp.y + d * Math.sin(pose.el)),
    tmp.z + d * ce * Math.cos(pose.az),
  );
  camera.lookAt(tmp);

  // Cadrage décalé à droite sur écran large : laisse respirer les légendes
  const w = window.innerWidth, h = window.innerHeight;
  if (camera.aspect > 1.1 && pose.close > 0.01) camera.setViewOffset(w, h, -w * 0.14 * pose.close, 0, w, h);
  else camera.clearViewOffset();

  bokeh.uniforms.focus.value = camera.position.distanceTo(tmp);
  bokeh.uniforms.aperture.value = pose.aperture;
  studio.update(camera, tmp);
  Object.assign(lastPose, clonePose(pose));
}

// ── Modes : film / interactif ───────────────────────────────────────────────
const state = {
  mode: reducedMotion ? 'interactive' : 'film',
  filmTime: 0,
  blendFrom: null,
  blend: 1,
};

const inter = {
  cur: clonePose(HOME),
  goal: clonePose(HOME),
  velY: 0,
  velX: 0,
  lastInput: 0,
  pointer: new THREE.Vector2(),
  parallax: new THREE.Vector2(),
};

const ui = {
  modeButtons: document.querySelectorAll('[data-mode]'),
  presets: $('#presets'),
  hint: $('#hint'),
  caption: $('#caption'),
  capTitle: $('#cap-title'),
  capSub: $('#cap-sub'),
  progress: $('#progress span'),
  progressWrap: $('#progress'),
};

function setMode(mode) {
  if (mode === state.mode) return;
  state.mode = mode;
  if (mode === 'film') {
    state.filmTime = 0;
    state.blendFrom = clonePose(lastPose);
    state.blend = 0;
  } else {
    inter.cur = clonePose(lastPose);
    inter.goal = clonePose(HOME);
    inter.goal.rotY = nearestAngle(HOME.rotY, lastPose.rotY);
    inter.velX = inter.velY = 0;
    inter.lastInput = performance.now();
    setActivePreset('overview');
  }
  syncUI();
}

function syncUI() {
  const film = state.mode === 'film';
  ui.modeButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === state.mode)));
  ui.presets.hidden = film;
  ui.hint.hidden = film;
  ui.progressWrap.hidden = !film;
  if (!film) ui.caption.classList.remove('show');
  document.body.dataset.mode = state.mode;
}

function setActivePreset(name) {
  ui.presets.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.preset === name)));
}

function goPreset(name) {
  const p = PRESETS[name];
  if (!p) return;
  inter.goal = clonePose(p);
  inter.goal.rotY = nearestAngle(p.rotY, inter.cur.rotY);
  inter.velX = inter.velY = 0;
  inter.lastInput = performance.now();
  setActivePreset(name);
}

ui.modeButtons.forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)));
ui.presets.addEventListener('click', (e) => {
  const b = e.target.closest('[data-preset]');
  if (b) goPreset(b.dataset.preset);
});

// ── Entrées : glisser (souris/tactile), molette, pincement, survol ─────────
const pointers = new Map();
let pinchStart = 0, pinchDist = 0, lastMove = 0;

canvas.addEventListener('pointerdown', (e) => {
  if (state.mode === 'film') setMode('interactive');
  canvas.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  inter.velX = inter.velY = 0;
  inter.lastInput = performance.now();
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    pinchStart = Math.hypot(a.x - b.x, a.y - b.y);
    pinchDist = inter.goal.dist;
  }
  document.body.classList.add('dragging');
});

canvas.addEventListener('pointermove', (e) => {
  inter.pointer.set((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
  const p = pointers.get(e.pointerId);
  if (!p || state.mode !== 'interactive') return;
  const now = performance.now();
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  p.x = e.clientX;
  p.y = e.clientY;

  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    const dist = Math.hypot(a.x - b.x, a.y - b.y);
    inter.goal.dist = THREE.MathUtils.clamp(pinchDist * (pinchStart / dist), 7, 55);
    return;
  }
  const sens = 6 / Math.min(window.innerWidth, 900);
  inter.goal.rotY += dx * sens;
  inter.goal.rotX = THREE.MathUtils.clamp(inter.goal.rotX + dy * sens * 0.6, -1.1, 1.1);
  const dt = Math.max(1, now - lastMove) / 1000;
  inter.velY = THREE.MathUtils.lerp(inter.velY, (dx * sens) / dt, 0.4);
  inter.velX = THREE.MathUtils.lerp(inter.velX, (dy * sens * 0.6) / dt, 0.4);
  lastMove = now;
  inter.lastInput = now;
  setActivePreset(null);
});

const endPointer = (e) => {
  pointers.delete(e.pointerId);
  if (performance.now() - lastMove > 80) inter.velX = inter.velY = 0;
  if (pointers.size === 0) document.body.classList.remove('dragging');
};
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);
canvas.addEventListener('pointerleave', () => inter.pointer.set(0, 0));
canvas.addEventListener('dblclick', () => goPreset('overview'));

canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (state.mode === 'film') setMode('interactive');
  inter.goal.dist = THREE.MathUtils.clamp(inter.goal.dist * Math.exp(e.deltaY * 0.0012), 7, 55);
  inter.lastInput = performance.now();
}, { passive: false });

window.addEventListener('keydown', (e) => {
  if (e.key === ' ' && e.target === document.body) {
    e.preventDefault();
    setMode(state.mode === 'film' ? 'interactive' : 'film');
  }
  if (state.mode !== 'interactive') return;
  if (e.key === 'ArrowLeft') inter.goal.rotY -= 0.35;
  if (e.key === 'ArrowRight') inter.goal.rotY += 0.35;
  if (e.key === 'ArrowUp') inter.goal.rotX = Math.max(-1.1, inter.goal.rotX - 0.2);
  if (e.key === 'ArrowDown') inter.goal.rotX = Math.min(1.1, inter.goal.rotX + 0.2);
  inter.lastInput = performance.now();
});

// ── Boucle d'animation ───────────────────────────────────────────────────────
const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
const easeInOut = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
const filmPose = clonePose(HOME);
const blended = clonePose(HOME);
const viewPose = clonePose(HOME);
let activeCaption = -1;
let prev = performance.now();
let started = false;

function updateCaption(t) {
  const idx = CAPTIONS.findIndex((c) => t >= c.from && t < c.to);
  if (idx === activeCaption) return;
  activeCaption = idx;
  ui.caption.classList.remove('show');
  if (idx >= 0) {
    const c = CAPTIONS[idx];
    ui.capTitle.textContent = c.title;
    ui.capSub.textContent = c.sub;
    requestAnimationFrame(() => ui.caption.classList.add('show'));
  }
}

function frame(now) {
  const dt = Math.min(0.05, (now - prev) / 1000);
  prev = now;
  const time = now / 1000;

  if (state.mode === 'film') {
    state.filmTime = (state.filmTime + dt) % DURATION;
    sampleTimeline(state.filmTime, filmPose);
    let pose = filmPose;
    if (state.blend < 1) {
      state.blend = Math.min(1, state.blend + dt / 1.8);
      const from = state.blendFrom;
      from.rotY = nearestAngle(from.rotY, filmPose.rotY);
      pose = lerpPose(from, filmPose, easeInOut(state.blend), blended);
    }
    applyPose(pose, time);
    updateCaption(state.filmTime);
    ui.progress.style.transform = `scaleX(${state.filmTime / DURATION})`;
  } else {
    const g = inter.goal, c = inter.cur;
    if (pointers.size === 0) {
      g.rotY += inter.velY * dt;
      g.rotX = THREE.MathUtils.clamp(g.rotX + inter.velX * dt, -1.1, 1.1);
      inter.velY *= Math.exp(-2.8 * dt);
      inter.velX *= Math.exp(-4 * dt);
      // Rotation automatique douce après quelques secondes d'inactivité
      if (!reducedMotion && now - inter.lastInput > 5000) g.rotY += 0.18 * dt;
    }
    for (const k of ['az', 'el', 'dist', 'rotY', 'rotX', 'aperture', 'close']) c[k] = damp(c[k], g[k], 5, dt);
    for (let i = 0; i < 3; i++) c.target[i] = damp(c.target[i], g.target[i], 4, dt);

    // Parallaxe au survol de la souris
    const px = isTouch ? 0 : inter.pointer.x, py = isTouch ? 0 : inter.pointer.y;
    inter.parallax.x = damp(inter.parallax.x, px, 3, dt);
    inter.parallax.y = damp(inter.parallax.y, py, 3, dt);
    Object.assign(viewPose, c, { target: c.target });
    viewPose.az = c.az - inter.parallax.x * 0.14;
    viewPose.el = c.el + inter.parallax.y * 0.08;
    applyPose(viewPose, time);
  }

  composer.render(dt);

  if (!started) {
    started = true;
    document.body.classList.add('ready');
  }
}

syncUI();
renderer.setAnimationLoop(() => frame(performance.now()));

// Pour le débogage / captures : window.__phone.setTime(18)
window.__phone = {
  setTime(t) { state.mode = 'film'; state.blend = 1; state.filmTime = t; syncUI(); },
  setMode,
  goPreset,
};
