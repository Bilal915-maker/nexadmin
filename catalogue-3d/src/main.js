import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createStudio } from './studio.js';
import { PRODUCTS } from './catalog.js';

const $ = (s) => document.querySelector(s);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = matchMedia('(pointer: coarse)').matches;
const pad = (n) => String(n).padStart(2, '0');

// ── Contenu généré depuis le catalogue ─────────────────────────────────────
const total = PRODUCTS.length;
const catalogueEl = $('#catalogue');
PRODUCTS.forEach((p, i) => {
  const s = document.createElement('section');
  s.className = 'product';
  s.id = `p-${p.id}`;
  s.dataset.product = i;
  s.innerHTML = `
    <div class="copy">
      <p class="eyebrow"><span>${p.family}</span><span class="count">${pad(i + 1)} / ${pad(total)}</span></p>
      <h2>${p.name}</h2>
      <p class="tagline">${p.tagline}</p>
      <ul class="points">${p.points.map((t) => `<li>${t}</li>`).join('')}</ul>
      <p class="hint">${isTouch ? 'Glissez le produit pour le tourner' : 'Attrapez le produit pour le tourner'}</p>
    </div>`;
  catalogueEl.before(s);

  const a = document.createElement('a');
  a.href = `#p-${p.id}`;
  a.textContent = p.name.replace(/^Apple /, '');
  $('#families').append(a);

  const li = document.createElement('li');
  li.innerHTML = `<button type="button" aria-label="${p.name}"></button>`;
  li.firstChild.addEventListener('click', () => s.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' }));
  $('#rail').append(li);

  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'card';
  card.innerHTML = `<img alt="${p.name} en 3D" width="600" height="600" /><span class="fam">${p.family}</span><span class="nm">${p.name}</span>`;
  card.addEventListener('click', () => s.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' }));
  $('#grid').append(card);
});
const navLinks = [...document.querySelectorAll('#families a')];
const railDots = [...document.querySelectorAll('#rail button')];
const cardImgs = [...document.querySelectorAll('#grid img')];
const sections = [...document.querySelectorAll('[data-product]')];

// ── Rendu ──────────────────────────────────────────────────────────────────
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas: $('#scene'), antialias: true, powerPreference: 'high-performance' });
} catch (e) {
  $('#loader').innerHTML = '<p>WebGL n’est pas disponible sur ce navigateur.</p>';
  throw e;
}
const DPR = Math.min(window.devicePixelRatio, isTouch ? 1.75 : 2);
renderer.setPixelRatio(DPR);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 400);
const studio = createStudio(renderer, scene);
const ORIGIN = new THREE.Vector3();

const items = PRODUCTS.map((p) => {
  const model = p.create(renderer);
  model.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  model.position.sub(box.getCenter(new THREE.Vector3()));
  const pivot = new THREE.Group();
  pivot.add(model);
  const holder = new THREE.Group();
  holder.add(pivot);
  holder.visible = false;
  scene.add(holder);
  return { p, holder, pivot, fit: p.size / Math.max(size.x, size.y), s: 0, spin: 0, yaw: 0, vel: 0, tilt: 0 };
});

const rt = new THREE.WebGLRenderTarget(1, 1, { samples: 4, type: THREE.HalfFloatType });
const composer = new EffectComposer(renderer, rt);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0.5, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());

const view = { w: 1, h: 1, wide: true };
function resize() {
  view.w = window.innerWidth;
  view.h = window.innerHeight;
  view.wide = view.w > 760 && view.w / view.h > 1;
  camera.aspect = view.w / view.h;
  camera.updateProjectionMatrix();
  renderer.setSize(view.w, view.h, false);
  composer.setSize(view.w, view.h);
  bloom.resolution.set(view.w / 2, view.h / 2);
}
window.addEventListener('resize', resize);

function placeCamera() {
  const d = 46 * (view.wide ? 1 : Math.max(1, 0.78 / camera.aspect));
  camera.position.set(0, 1.4, d);
  camera.lookAt(ORIGIN);
  // Produit décalé à droite sur grand écran, vers le haut sur mobile
  if (view.wide) camera.setViewOffset(view.w, view.h, -view.w * 0.2, 0, view.w, view.h);
  else camera.setViewOffset(view.w, view.h, 0, view.h * 0.17, view.w, view.h);
}

// ── Vignettes du catalogue (rendues une fois, avant l'affichage) ───────────
function renderThumbnails() {
  const S = 600;
  renderer.setPixelRatio(1);
  renderer.setSize(S, S, false);
  camera.aspect = 1;
  camera.clearViewOffset();
  camera.position.set(0, 1.4, 54);
  camera.lookAt(ORIGIN);
  camera.updateProjectionMatrix();
  items.forEach((it, i) => {
    items.forEach((o) => { o.holder.visible = o === it; });
    it.holder.scale.setScalar(it.fit);
    it.pivot.rotation.set(it.p.rot[0], it.p.rot[1] + 0.35, 0, 'YXZ');
    renderer.render(scene, camera);
    cardImgs[i].src = renderer.domElement.toDataURL('image/jpeg', 0.86);
    it.holder.visible = false;
  });
  renderer.setPixelRatio(DPR);
  resize();
}

// ── Défilement → produit actif + progression ───────────────────────────────
function readScroll() {
  const mid = view.h * 0.5;
  for (const s of sections) {
    const r = s.getBoundingClientRect();
    if (r.top <= mid && r.bottom > mid) {
      return { active: +s.dataset.product, prog: (mid - r.top) / r.height, intro: !!s.dataset.intro };
    }
  }
  return { active: -1, prog: 0, intro: false };
}

let lastActive = null;
function syncUI(active) {
  if (active === lastActive) return;
  lastActive = active;
  navLinks.forEach((a, i) => a.setAttribute('aria-current', String(i === active)));
  railDots.forEach((b, i) => b.setAttribute('aria-current', String(i === active)));
  document.body.classList.toggle('on-grid', active < 0);
}

// ── Saisie : glisser pour tourner le produit actif ─────────────────────────
const stage = $('#stage');
const drag = { id: null, x: 0, y: 0, t: 0, target: null };
const pointer = new THREE.Vector2();
stage.addEventListener('pointerdown', (e) => {
  const it = items[lastActive];
  if (!it) return;
  drag.id = e.pointerId;
  drag.x = e.clientX;
  drag.y = e.clientY;
  drag.t = performance.now();
  drag.target = it;
  it.vel = 0;
  stage.setPointerCapture(e.pointerId);
  stage.classList.add('dragging');
});
stage.addEventListener('pointermove', (e) => {
  pointer.set((e.clientX / view.w) * 2 - 1, (e.clientY / view.h) * 2 - 1);
  if (e.pointerId !== drag.id || !drag.target) return;
  const now = performance.now();
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  drag.x = e.clientX;
  drag.y = e.clientY;
  const sens = 6 / Math.min(view.w, 900);
  drag.target.yaw += dx * sens;
  drag.target.tilt = THREE.MathUtils.clamp(drag.target.tilt + dy * sens * 0.5, -0.6, 0.6);
  drag.target.vel = THREE.MathUtils.lerp(drag.target.vel, (dx * sens) / Math.max(0.001, (now - drag.t) / 1000), 0.4);
  drag.t = now;
});
const endDrag = (e) => {
  if (e.pointerId !== drag.id) return;
  if (performance.now() - drag.t > 90 && drag.target) drag.target.vel = 0;
  drag.id = null;
  drag.target = null;
  stage.classList.remove('dragging');
};
stage.addEventListener('pointerup', endDrag);
stage.addEventListener('pointercancel', endDrag);
stage.addEventListener('pointerleave', () => pointer.set(0, 0));

// ── Boucle ────────────────────────────────────────────────────────────────
const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
const easeOut = (u) => 1 - Math.pow(1 - u, 3);
const parallax = new THREE.Vector2();
let prev = performance.now();
let settleNext = false;

function frame(now) {
  const dt = Math.min(0.05, (now - prev) / 1000);
  prev = now;
  const t = now / 1000;
  const { active, prog, intro } = readScroll();
  syncUI(active);

  parallax.x = damp(parallax.x, isTouch ? 0 : pointer.x, 2.5, dt);
  parallax.y = damp(parallax.y, isTouch ? 0 : pointer.y, 2.5, dt);

  // Transition séquentielle : le produit sortant disparaît avant que le suivant n'entre
  const busy = items.some((o, j) => j !== active && o.s > 0.12);
  items.forEach((it, i) => {
    const on = i === active && !busy;
    it.s = settleNext ? (i === active ? 1 : 0) : damp(it.s, on ? 1 : 0, on ? 3.2 : 9, dt);
    it.holder.visible = it.s > 0.01;
    if (!it.holder.visible) return;
    if (on) {
      const target = intro ? (prog - 1) * 0.7 : prog * it.p.spin;
      it.spin = damp(it.spin, reducedMotion ? 0 : target, 5, dt);
    }
    if (drag.target !== it) {
      it.yaw += it.vel * dt;
      it.vel *= Math.exp(-2.6 * dt);
      it.tilt = damp(it.tilt, 0, 1.5, dt);
    }
    const e = easeOut(it.s);
    it.holder.scale.setScalar(it.fit * e);
    it.holder.position.y = (1 - e) * -5 + (reducedMotion ? 0 : Math.sin(t * 0.6 + i) * 0.12);
    it.pivot.rotation.set(
      it.p.rot[0] + it.tilt + parallax.y * 0.08,
      it.p.rot[1] + it.spin + it.yaw + (1 - e) * 1.6 + parallax.x * 0.15,
      0, 'YXZ',
    );
  });

  settleNext = false;
  placeCamera();
  composer.render(dt);
  if (!document.body.classList.contains('ready')) document.body.classList.add('ready');
}

resize();
renderThumbnails();
renderer.setAnimationLoop(() => frame(performance.now()));

// Captures / tests : window.__cat.settle() termine la transition en cours
window.__cat = { settle() { settleNext = true; } };
