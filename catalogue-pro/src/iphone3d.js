import * as THREE from 'three';
import { slab, glassPlate, mat, capsule } from './lib.js';
import { makePhoneScreen, makeLensTexture, makeFlashTexture, makeFrostTexture } from './textures.js';
import { makeLens } from './lens.js';

// Textures partagées par renderer (objectif, flash, verre dépoli)
const sharedByRenderer = new WeakMap();
function shared(renderer) {
  let s = sharedByRenderer.get(renderer);
  if (!s) {
    s = { lens: makeLensTexture(renderer), flash: makeFlashTexture(renderer), frost: makeFrostTexture(renderer) };
    sharedByRenderer.set(renderer, s);
  }
  return s;
}

const ROUGH = { alu: 0.34, steel: 0.09, titanium: 0.3 };
const EDGE = {
  round: (D) => ({ bT: D * 0.46, bS: Math.min(0.32, D * 0.42), segs: 12 }),
  flat: () => ({ bT: 0.045, bS: 0.045, segs: 3 }),
  contour: () => ({ bT: 0.18, bS: 0.1, segs: 10 }),
};

export function screenInches(spec) {
  const m = /([\d,]+) pouces/.exec(spec.display);
  return m ? parseFloat(m[1].replace(',', '.')) : 6.1;
}

/**
 * Construit un iPhone à partir de sa fiche. Retourne { group, setColor, dispose }.
 * Unités : centimètres (dimensions publiques / 10).
 */
export function buildIPhone(spec, renderer, colorIndex = 0) {
  const S = shared(renderer);
  const [hmm, wmm, dmm] = spec.dims || spec.dims3d;
  const H = hmm / 10, W = wmm / 10, D = dmm / 10;
  const d = spec.design;
  const R = W * d.radius;
  const g = new THREE.Group();
  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };

  // ── Matériaux (couleurs appliquées par setColor) ─────────────────────────
  const frameMat = track(new THREE.MeshPhysicalMaterial({
    metalness: 1, roughness: ROUGH[d.frame], clearcoat: d.frame === 'steel' ? 0.6 : 0.15, clearcoatRoughness: 0.2,
  }));
  const metalBody = d.back === 'alu' || d.back === 'unibody';
  const backMat = track(metalBody
    ? new THREE.MeshPhysicalMaterial({ metalness: 0.4, roughness: 0.45, clearcoat: 0.3, clearcoatRoughness: 0.35 })
    : d.back === 'matte'
      ? new THREE.MeshPhysicalMaterial({ metalness: 0, roughness: 0.6, roughnessMap: S.frost, clearcoat: 0.35, clearcoatRoughness: 0.55 })
      : new THREE.MeshPhysicalMaterial({ metalness: 0, roughness: 0.07, clearcoat: 1, clearcoatRoughness: 0.03 }));
  const bumpMat = track(new THREE.MeshPhysicalMaterial({ metalness: metalBody ? 0.4 : 0, roughness: metalBody ? 0.36 : 0.12, clearcoat: 0.9, clearcoatRoughness: 0.08 }));
  const ringMat = track(mat.metal(0x999999, 0.16));
  const darkMat = track(new THREE.MeshPhysicalMaterial({ color: 0x050506, roughness: 0.5 }));
  const lensMats = { titaniumPolished: ringMat, black: darkMat };

  // ── Châssis ──────────────────────────────────────────────────────────────
  const e = EDGE[d.edge](D);
  // Sur les modèles monocoques (aluminium), le châssis porte la couleur de la finition
  g.add(new THREE.Mesh(track(slab(W, H, D, R, { bevel: e.bT, bevelSize: e.bS, segments: e.segs, curve: 40 })), metalBody ? backMat : frameMat));

  // ── Verres ───────────────────────────────────────────────────────────────
  const inset = d.edge === 'round' ? e.bS * 0.72 : e.bS + 0.02;
  const gw = W - 2 * inset, gh = H - 2 * inset, gr = Math.max(0.2, R - inset);
  const gBevel = d.edge === 'round' ? 0.12 : 0.03;
  const plateGeo = track(glassPlate(gw, gh, gr, { thick: 0.01, bevel: gBevel }));
  const faceZ = D / 2 + 0.004 - (0.01 + gBevel);

  const screenMat = track(mat.screen(null));
  const front = new THREE.Mesh(plateGeo, screenMat);
  front.position.z = faceZ;
  g.add(front);

  let backZ = -D / 2;
  if (!metalBody) {
    const back = new THREE.Mesh(plateGeo, backMat);
    back.rotation.y = Math.PI;
    back.position.z = -faceZ;
    g.add(back);
    backZ = -D / 2 - 0.004;
  } else if (d.back === 'unibody') {
    // Fenêtre en Ceramic Shield pour la recharge sans fil
    const ph = gh * 0.6;
    const patch = new THREE.Mesh(track(glassPlate(gw - 0.5, ph, 0.7, { thick: 0.005, bevel: 0.01 })), track(new THREE.MeshPhysicalMaterial({ metalness: 0.2, roughness: 0.4, clearcoat: 0.2, clearcoatRoughness: 0.4 })));
    patch.rotation.y = Math.PI;
    patch.position.set(0, -gh / 2 + 0.35 + ph / 2, -D / 2 - 0.005);
    patch.userData.tint = true;
    g.add(patch);
  } else {
    // Bandes d'antenne sur dos aluminium
    const strip = track(new THREE.BoxGeometry(W - 2 * R * 0.5, 0.05, 0.01));
    const sMat = track(new THREE.MeshPhysicalMaterial({ color: 0x8c8c8c, roughness: 0.5, transparent: true, opacity: 0.55 }));
    for (const s of [-1, 1]) {
      const m = new THREE.Mesh(strip, sMat);
      m.position.set(0, s * (H / 2 - (d.chamfer ? 1.2 : 0.62)), -D / 2 - 0.002);
      g.add(m);
    }
  }

  // Bouton principal (modèles Touch ID en façade)
  let homeRing = null;
  if (d.front === 'home') {
    const shCm = (screenInches(spec) * 2.54 * 16) / Math.hypot(16, 9);
    const bez = (gh - shCm) / 2;
    homeRing = new THREE.Mesh(track(new THREE.TorusGeometry(Math.min(0.55, bez * 0.34), 0.03, 12, 64)), ringMat);
    homeRing.position.set(0, -gh / 2 + bez / 2, faceZ + 0.01 + gBevel + 0.002);
    g.add(homeRing);
  }

  // ── Module photo ─────────────────────────────────────────────────────────
  const P = (u, v) => [W / 2 - u, H / 2 - v];
  let camZ = backZ;
  const addBump = (cu, cv, w, h, r, depth) => {
    const b = new THREE.Mesh(track(slab(w, h, depth, r, { bevel: depth * 0.45, segments: 6, curve: 32 })), bumpMat);
    b.rotation.y = Math.PI;
    const [x, y] = P(cu, cv);
    b.position.set(x, y, backZ - depth / 2 + 0.01);
    g.add(b);
    camZ = backZ - depth + 0.01;
  };
  const addLens = (u, v, s) => {
    const l = makeLens(lensMats, S.lens);
    l.scale.setScalar(s);
    l.rotation.y = Math.PI;
    const [x, y] = P(u, v);
    l.position.set(x, y, camZ);
    l.traverse((o) => { if (o.isMesh && o.geometry) disposables.push(o.geometry); });
    g.add(l);
  };
  const addDisc = (u, v, r, material, lift = 0.004) => {
    const m = new THREE.Mesh(track(new THREE.CircleGeometry(r, 40)), material);
    m.rotation.y = Math.PI;
    const [x, y] = P(u, v);
    m.position.set(x, y, camZ - lift);
    g.add(m);
  };
  const flashMat = track(new THREE.MeshPhysicalMaterial({ map: S.flash, roughness: 0.35, clearcoat: 1 }));
  const glassBlack = track(mat.glassBlack({ iridescence: 0.6 }));
  const addFlash = (u, v, r = 0.19) => { addDisc(u, v, r * 1.18, ringMat, 0.002); addDisc(u, v, r, flashMat); };
  const addLidar = (u, v, r = 0.21) => { addDisc(u, v, r * 1.15, ringMat, 0.002); addDisc(u, v, r, glassBlack); };
  const addMic = (u, v) => addDisc(u, v, 0.045, darkMat);

  const L = d.bigLens ? 1 : 0.86;
  switch (d.cam) {
    case 'single': {
      const s = d.chamfer ? 0.4 : 0.48;
      addLens(0.9, 0.9, s); addMic(1.45, 0.9); addFlash(1.95, 0.88, 0.15);
      break;
    }
    case 'singleXR': addLens(1.05, 1.05, 0.6); addMic(1.7, 1.0); addFlash(2.1, 1.0, 0.16); break;
    case 'single16e': addLens(1.15, 1.15, 0.7); addMic(1.85, 1.1); addFlash(2.3, 1.05, 0.17); break;
    case 'dualH':
      addBump(1.55, 0.95, 2.35, 1.25, 0.62, 0.08);
      addLens(0.98, 0.95, 0.48); addLens(2.12, 0.95, 0.48); addFlash(3.05, 0.95, 0.15);
      break;
    case 'dualV':
      addBump(0.95, 1.75, 1.32, 2.8, 0.66, 0.1);
      addLens(0.95, 1.05, 0.5); addLens(0.95, 2.45, 0.5); addFlash(0.95, 1.75, 0.13);
      break;
    case 'sq2v': case 'sq2d': {
      const Q = 3.0 * Math.min(1, W / 7.15), c = 0.3 + Q / 2, o = Q * 0.235;
      addBump(c, c, Q, Q, Q * 0.25, 0.12);
      if (d.cam === 'sq2v') { addLens(c - o, c - o, 0.74 * (Q / 3)); addLens(c - o, c + o, 0.74 * (Q / 3)); addMic(c + o, c + 0.05); }
      else { addLens(c - o, c - o, 0.78 * (Q / 3)); addLens(c + o, c + o, 0.78 * (Q / 3)); addMic(c - o, c + o); }
      addFlash(c + o, c - o, 0.19);
      break;
    }
    case 'sq3': {
      const Q = d.bigLens ? 3.62 : 3.25, c = 0.3 + Q / 2, o = Q * 0.243;
      addBump(c, c, Q, Q, Q * 0.26, 0.12);
      addLens(c - o, c - o, L); addLens(c - o, c + o, L); addLens(c + o, c, L);
      addFlash(c + Q * 0.26, c - Q * 0.33, 0.21);
      if (d.lidar) addLidar(c + Q * 0.26, c + Q * 0.33); else addMic(c + Q * 0.26, c + Q * 0.33);
      break;
    }
    case 'pill2':
      addBump(1.2, 2.1, 1.8, 3.6, 0.9, 0.12);
      addLens(1.2, 1.25, 0.76); addLens(1.2, 2.95, 0.76); addFlash(2.4, 1.1, 0.19); addMic(2.4, 1.75);
      break;
    case 'plateau3': {
      addBump(W / 2, 2.4, W - 0.5, 4.3, R * 0.75, 0.15);
      const c = 2.15, o = 0.88;
      addLens(c - o, 2.4 - o, 1); addLens(c - o, 2.4 + o, 1); addLens(c + o, 2.4, 1);
      addFlash(W - 1.15, 1.6, 0.21); addLidar(W - 1.15, 3.2); addMic(W - 1.15, 2.4);
      break;
    }
    case 'plateau1':
      addBump(W / 2, 1.55, W - 0.5, 2.6, 1.0, 0.12);
      addLens(1.45, 1.55, 0.78); addFlash(2.75, 1.55, 0.19); addMic(3.4, 1.55);
      break;
    case 'duo':
      addBump(2.6, 1.3, 4.6, 2.0, 1.0, 0.12);
      addLens(1.55, 1.3, 0.72); addLens(3.65, 1.3, 0.72); addFlash(5.2, 1.3, 0.18);
      break;
    default: break;
  }

  // ── Boutons ──────────────────────────────────────────────────────────────
  const br = Math.min(0.13, D * 0.17);
  const btn = (side, fromTop, len, material = metalBody ? backMat : frameMat, squash = 0.45) => {
    g.add(capsule(material, len, br, [side * (W / 2 - 0.012), H / 2 - fromTop, 0], { squash }));
  };
  if (d.action) btn(-1, H * 0.215, H * 0.03);
  else if (d.mute) btn(-1, H * 0.2, H * 0.025);
  btn(-1, H * 0.295, H * 0.06);
  btn(-1, H * 0.38, H * 0.06);
  btn(1, H * 0.31, H * 0.11);
  if (d.control) btn(1, H * 0.64, H * 0.07, track(mat.glassBlack()), 0.22);
  if (d.hinge) {
    const hinge = new THREE.Mesh(track(new THREE.CylinderGeometry(D * 0.47, D * 0.47, H - 0.6, 32)), frameMat);
    hinge.position.set(-W / 2 + D * 0.2, 0, 0);
    g.add(hinge);
  }

  // ── Bas : port + haut-parleurs ───────────────────────────────────────────
  const usb = /USB/.test(spec.port || '');
  g.add(capsule(track(mat.glassBlack()), usb ? 0.62 : 0.48, 0.1, [0, -H / 2 + 0.07, 0], { axis: 'x', squash: 0.6 }));
  const hole = track(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 12));
  for (let i = 0; i < 6; i++) for (const s of [-1, 1]) {
    const m = new THREE.Mesh(hole, darkMat);
    m.position.set(s * (0.95 + i * 0.17) * Math.min(1, W / 7), -H / 2 + 0.008, 0);
    g.add(m);
  }

  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });

  // ── Couleur ──────────────────────────────────────────────────────────────
  let screenTex = null, current = -1;
  function setColor(i) {
    const c = spec.colors[i];
    if (!c || i === current) return;
    current = i;
    const body = new THREE.Color(c.hex);
    backMat.color.copy(body);
    bumpMat.color.copy(body);
    frameMat.color.set(c.frame || c.hex);
    ringMat.color.set(c.frame || c.hex).multiplyScalar(0.9);
    if (metalBody) backMat.roughness = c.gloss ? 0.06 : 0.45;
    g.traverse((o) => { if (o.userData.tint) o.material.color.copy(body); });
    if (homeRing) homeRing.material = ringMat;
    if (screenTex) screenTex.dispose();
    screenTex = makePhoneScreen(renderer, gw, gh, {
      radius: gr, cutout: d.front, size: d.notch || d.island || 'normal', front: c.front || 'black',
      screenIn: screenInches(spec), accent: c.hex,
    });
    screenMat.emissiveMap = screenTex;
    screenMat.needsUpdate = true;
  }
  setColor(colorIndex);

  return {
    group: g,
    setColor,
    dispose() {
      if (screenTex) screenTex.dispose();
      disposables.forEach((x) => x.dispose && x.dispose());
    },
  };
}
