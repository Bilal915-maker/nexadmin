import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { roundedRect, slab, glassPlate, bendY, mat, capsule, disc } from './lib.js';
import {
  makeDisplayTexture, makeLensTexture, makeFlashTexture, makeKnitTexture,
  makeMeshBump, makeSwirlTexture, makeDotsTexture,
} from './textures.js';
import { makeLens } from './phone.js';

// Toutes les cotes sont en centimètres (dimensions publiques arrondies).

/* ── iPad Pro 13 pouces ─────────────────────────────────────────────────── */
export function createIPad(renderer) {
  const W = 21.55, H = 28.16, D = 0.51, R = 1.9;
  const g = new THREE.Group();
  const alu = mat.metal(0x3b3c40, 0.38);
  g.add(new THREE.Mesh(slab(W, H, D, R, { bevel: 0.1 }), alu));

  const gw = W - 0.16, gh = H - 0.16;
  const tex = makeDisplayTexture(renderer, gw, gh, { bezel: 0.62, radius: R - 0.08, kind: 'ipad' });
  const front = new THREE.Mesh(glassPlate(gw, gh, R - 0.08, { thick: 0.01, bevel: 0.02 }), mat.screen(tex));
  front.position.z = D / 2 - 0.02;
  g.add(front);

  // Module photo arrière
  const bx = W / 2 - 1.95, by = H / 2 - 1.95, back = -D / 2;
  const bump = new THREE.Mesh(slab(2.7, 2.7, 0.16, 0.8, { bevel: 0.06 }), mat.metal(0x2a2b2e, 0.22));
  bump.position.set(bx, by, back);
  g.add(bump);
  const lens = makeLens({ titaniumPolished: mat.metal(0x9c9ca0, 0.15), black: mat.matteBlack() }, makeLensTexture(renderer));
  lens.scale.setScalar(0.62);
  lens.rotation.y = Math.PI;
  lens.position.set(bx + 0.55, by + 0.55, back - 0.08);
  g.add(lens);
  g.add(disc(0.22, new THREE.MeshPhysicalMaterial({ map: makeFlashTexture(renderer), roughness: 0.35, clearcoat: 1 }), [bx - 0.6, by + 0.6, back - 0.081], { facing: 'back' }));
  g.add(disc(0.25, mat.glassBlack(), [bx - 0.55, by - 0.55, back - 0.081], { facing: 'back' }));

  // Smart Connector
  for (let i = -1; i <= 1; i++) g.add(disc(0.07, mat.metal(0x8a8a8a, 0.2), [i * 0.35, -H / 2 + 1.3, back - 0.002], { facing: 'back', seg: 24 }));

  // Boutons + USB‑C
  g.add(capsule(alu, 1.6, 0.11, [W / 2 - 3.2, H / 2 - 0.01, 0], { axis: 'x', squash: 0.5 }));
  g.add(capsule(alu, 1.2, 0.11, [W / 2 - 0.01, H / 2 - 4, 0], { squash: 0.5 }));
  g.add(capsule(alu, 1.2, 0.11, [W / 2 - 0.01, H / 2 - 5.7, 0], { squash: 0.5 }));
  g.add(capsule(mat.glassBlack(), 0.6, 0.1, [0, -H / 2 + 0.05, 0], { axis: 'x', squash: 0.6 }));
  return g;
}

/* ── MacBook Pro 14 pouces ──────────────────────────────────────────────── */
export function createMacBook(renderer) {
  const W = 31.26, Dp = 22.12, baseT = 0.95;
  const g = new THREE.Group();
  const alu = mat.metal(0x323337, 0.36);

  const base = new THREE.Mesh(slab(W, Dp, baseT, 0.85, { bevel: 0.2 }), alu);
  base.rotation.x = -Math.PI / 2;
  g.add(base);
  const top = baseT / 2;

  // Clavier
  const kbW = 27.6, kbD = 11.4, kbZ = -Dp / 2 + 1.5 + kbD / 2;
  const well = new THREE.Mesh(new THREE.PlaneGeometry(kbW, kbD), new THREE.MeshPhysicalMaterial({ color: 0x0d0d0f, roughness: 0.7 }));
  well.rotation.x = -Math.PI / 2;
  well.position.set(0, top + 0.004, kbZ);
  g.add(well);

  const rows = [
    [1.5, ...Array(12).fill(1), 1],
    [...Array(13).fill(1), 1.5],
    [1.5, ...Array(13).fill(1)],
    [1.75, ...Array(11).fill(1), 1.75],
    [2.25, ...Array(10).fill(1), 2.25],
    [1, 1, 1, 1.25, 5, 1.25, 1, 1, 1, 1],
  ];
  const pitch = (kbW - 0.8) / 14.5, gap = 0.22;
  const keyCount = rows.reduce((n, r) => n + r.length, 0);
  const keys = new THREE.InstancedMesh(
    new RoundedBoxGeometry(1, 0.1, 1, 2, 0.04),
    new THREE.MeshPhysicalMaterial({ color: 0x111113, roughness: 0.45, clearcoat: 0.2 }),
    keyCount,
  );
  const dummy = new THREE.Object3D();
  let k = 0, z = kbZ - kbD / 2 + 0.45;
  rows.forEach((row, ri) => {
    const depth = (ri === 0 ? 0.55 : 1) * pitch - gap;
    let x = -kbW / 2 + 0.4;
    for (const w of row) {
      dummy.position.set(x + (w * pitch) / 2, top + 0.06, z + depth / 2);
      dummy.scale.set(w * pitch - gap, 1, depth);
      dummy.updateMatrix();
      keys.setMatrixAt(k++, dummy.matrix);
      x += w * pitch;
    }
    z += depth + gap;
  });
  g.add(keys);

  // Haut-parleurs
  const dots = makeDotsTexture(renderer, 6, 48);
  for (const side of [-1, 1]) {
    const grill = new THREE.Mesh(new THREE.PlaneGeometry(1.1, kbD), new THREE.MeshBasicMaterial({ color: 0x050505, alphaMap: dots, transparent: true }));
    grill.rotation.x = -Math.PI / 2;
    grill.position.set(side * (kbW / 2 + 0.9), top + 0.003, kbZ);
    g.add(grill);
  }

  // Trackpad
  const pad = new THREE.Mesh(new THREE.ShapeGeometry(roundedRect(15.0, 9.4, 0.5), 24), mat.metal(0x36373b, 0.2));
  pad.rotation.x = -Math.PI / 2;
  pad.position.set(0, top + 0.003, Dp / 2 - 1.2 - 4.7);
  g.add(pad);

  // Ports latéraux
  const portMat = mat.glassBlack();
  [[-1, -4.5, 0.75], [-1, -2.2, 0.5], [-1, -0.9, 0.5], [1, -3.2, 0.9], [1, -1.2, 1.1], [1, 0.6, 0.5]].forEach(([side, zz, len]) => {
    const p = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, len, 4, 16), portMat);
    p.rotation.x = Math.PI / 2;
    p.scale.set(0.5, 1, 1);
    p.position.set(side * (W / 2 - 0.02), 0, zz);
    g.add(p);
  });

  // Écran (charnière ouverte ~110°)
  const pivot = new THREE.Group();
  pivot.position.set(0, top, -Dp / 2 + 0.3);
  pivot.rotation.x = -0.33;
  g.add(pivot);
  const lid = new THREE.Mesh(slab(W, Dp, 0.6, 0.85, { bevel: 0.15 }), alu);
  lid.position.set(0, Dp / 2 + 0.05, 0);
  pivot.add(lid);
  const sw = W - 0.25, sh = Dp - 0.25;
  const tex = makeDisplayTexture(renderer, sw, sh, { bezel: 0.6, radius: 0.75, kind: 'mac', notch: true });
  const screen = new THREE.Mesh(glassPlate(sw, sh, 0.75, { thick: 0.01, bevel: 0.02 }), mat.screen(tex));
  screen.position.set(0, Dp / 2 + 0.05, 0.28);
  pivot.add(screen);
  const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, W - 5, 32), new THREE.MeshPhysicalMaterial({ color: 0x0c0c0d, roughness: 0.4 }));
  hinge.rotation.z = Math.PI / 2;
  pivot.add(hinge);
  return g;
}

/* ── iMac 24 pouces ─────────────────────────────────────────────────────── */
export function createIMac(renderer) {
  const W = 54.7, PH = 40, T = 1.15, chinH = 7;
  const g = new THREE.Group();
  const deep = mat.metal(0x3d6db0, 0.38), pale = mat.metal(0xc7d8ec, 0.34);
  g.add(new THREE.Mesh(slab(W, PH, T, 1.0, { bevel: 0.3 }), deep));

  const gw = W - 0.5, gh = PH - chinH - 0.25;
  const tex = makeDisplayTexture(renderer, gw, gh, { bezel: 1.15, radius: 0.75, kind: 'imac', bezelColor: '#f1f1ef' });
  const glass = new THREE.Mesh(glassPlate(gw, gh, 0.75, { thick: 0.01, bevel: 0.02 }), mat.screen(tex));
  glass.position.set(0, PH / 2 - 0.25 - gh / 2, T / 2 - 0.02);
  g.add(glass);
  const chin = new THREE.Mesh(slab(W - 0.5, chinH, 0.06, 0.75, { bevel: 0.02 }), pale);
  chin.position.set(0, -PH / 2 + 0.25 + chinH / 2, T / 2);
  g.add(chin);

  // Pied
  const neck = new THREE.Mesh(slab(15, 23.7, 0.45, 0.4, { bevel: 0.1 }), deep);
  neck.rotation.x = 0.19;
  neck.position.set(0, -14.65, -T / 2 - 2.7);
  g.add(neck);
  const foot = new THREE.Mesh(slab(15, 14, 0.45, 1.0, { bevel: 0.1 }), deep);
  foot.rotation.x = -Math.PI / 2;
  foot.position.set(0, -26.5, -1.8);
  g.add(foot);
  return g;
}

/* ── Apple Watch (45 mm) ────────────────────────────────────────────────── */
class LoopCurve extends THREE.Curve {
  constructor(ry, rz, zc) { super(); this.ry = ry; this.rz = rz; this.zc = zc; }
  getPoint(t, target = new THREE.Vector3()) {
    const a = t * Math.PI * 2;
    return target.set(0, this.ry * Math.sin(a), this.zc + this.rz * Math.cos(a));
  }
}

export function createWatch(renderer) {
  const W = 3.8, H = 4.5, D = 0.78, R = 1.05;
  const g = new THREE.Group();
  const alu = mat.metal(0x2b2d33, 0.3);
  g.add(new THREE.Mesh(slab(W, H, D, R, { bevel: 0.22, segments: 10 }), alu));

  const gw = W - 0.16, gh = H - 0.16;
  const tex = makeDisplayTexture(renderer, gw, gh, { bezel: 0.26, radius: R - 0.08, kind: 'watch' });
  const glass = new THREE.Mesh(glassPlate(gw, gh, R - 0.08, { thick: 0.02, bevel: 0.12 }), mat.screen(tex));
  glass.position.z = D / 2 - 0.08;
  g.add(glass);

  // Capteur arrière
  const theta = 0.75;
  const sensor = new THREE.Mesh(new THREE.SphereGeometry(1.6, 48, 16, 0, Math.PI * 2, 0, theta), mat.glassBlack());
  sensor.rotation.x = -Math.PI / 2;
  sensor.scale.set(1, 0.25, 1);
  sensor.position.z = -D / 2 + 0.02 + 1.6 * Math.cos(theta) * 0.25;
  g.add(sensor);

  // Couronne Digitale crantée + bouton latéral
  const crown = new THREE.Group();
  crown.position.set(W / 2 + 0.1, 0.9, 0);
  const crownBody = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.26, 48), alu);
  crownBody.rotation.z = Math.PI / 2;
  crown.add(crownBody);
  const ridgeGeo = new THREE.BoxGeometry(0.24, 0.03, 0.045);
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2;
    const r = new THREE.Mesh(ridgeGeo, alu);
    r.position.set(0.01, Math.cos(a) * 0.3, Math.sin(a) * 0.3);
    r.rotation.x = a;
    crown.add(r);
  }
  g.add(crown);
  g.add(capsule(alu, 0.9, 0.11, [W / 2 - 0.02, -0.6, 0], { squash: 0.5 }));

  // Bracelet Sport (boucle fermée derrière le boîtier)
  const curve = new LoopCurve(3.4, 2.5, -2.5);
  const bandGeo = new THREE.ExtrudeGeometry(roundedRect(2.2, 0.3, 0.12), { steps: 220, bevelEnabled: false, extrudePath: curve });
  const band = new THREE.Mesh(bandGeo, new THREE.MeshPhysicalMaterial({ color: 0x1d2639, roughness: 0.55, clearcoat: 0.15 }));
  g.add(band);
  return g;
}

/* ── AirPods Pro ────────────────────────────────────────────────────────── */
export function createAirPods(renderer) {
  const g = new THREE.Group();
  const white = mat.plastic(0xf3f3f1, 0.22);
  const W = 6.06, H = 4.52, T = 2.17, rr = 1.0;

  g.add(new THREE.Mesh(new RoundedBoxGeometry(W, H, T, 8, rr), white));
  // Ligne d'ouverture du couvercle
  const lineY = H / 2 - 1.0;
  const pts = roundedRect(W + 0.01, T + 0.01, rr, 0.45).getSpacedPoints(160).map((p) => new THREE.Vector3(p.x, lineY, p.y));
  const seam = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 320, 0.012, 6, true), new THREE.MeshBasicMaterial({ color: 0x9a9a9a }));
  g.add(seam);
  // Témoin lumineux
  g.add(disc(0.055, new THREE.MeshBasicMaterial({ color: 0x5dff7a }), [0, 0.15, T / 2 + 0.004], { seg: 24 }));
  // USB‑C + haut-parleur
  g.add(capsule(mat.glassBlack(), 0.5, 0.09, [0, -H / 2 + 0.03, 0], { axis: 'x', squash: 0.6 }));
  for (let i = 0; i < 4; i++) {
    const h = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.02, 12), mat.matteBlack());
    h.position.set(-1.4 - i * 0.14, -H / 2 + 0.005, 0);
    g.add(h);
  }

  // Écouteurs
  const tipMat = new THREE.MeshPhysicalMaterial({ color: 0xdcdcda, roughness: 0.85, sheen: 0.4, sheenColor: 0xffffff });
  for (const side of [-1, 1]) {
    const bud = new THREE.Group();
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.95, 48, 32), white);
    head.scale.set(1, 0.85, 0.9);
    bud.add(head);
    const stem = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 2.0, 8, 24), white);
    stem.position.set(side * 0.25, -1.55, 0.1);
    stem.rotation.z = side * 0.15;
    bud.add(stem);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.06, 24), mat.metal(0xcfcfd1, 0.15));
    cap.position.set(side * 0.43, -2.83, 0.1);
    cap.rotation.z = side * 0.15;
    bud.add(cap);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.62, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), tipMat);
    tip.rotation.z = side * Math.PI / 2;
    tip.position.set(-side * 0.7, 0.1, 0);
    bud.add(tip);
    const vent = disc(0.16, mat.matteBlack(), [side * 0.2, 0.25, 0.86], { seg: 24 });
    vent.scale.set(1, 0.55, 1);
    bud.add(vent);
    bud.position.set(side * 4.6, 0.6, 1.6);
    bud.rotation.y = -side * 0.5;
    g.add(bud);
  }
  return g;
}

/* ── Apple Vision Pro ───────────────────────────────────────────────────── */
export function createVisionPro(renderer) {
  const g = new THREE.Group();
  const R = 11;
  const alu = mat.metal(0xc9c9cb, 0.24);

  const frameGeo = slab(17.2, 8.0, 3.0, 3.4, { bevel: 0.55, segments: 10 });
  g.add(new THREE.Mesh(bendY(frameGeo, R), alu));

  const glassGeo = glassPlate(16.5, 7.3, 3.05, { thick: 0.05, bevel: 0.32 });
  glassGeo.translate(0, 0, 1.36);
  g.add(new THREE.Mesh(bendY(glassGeo, R), mat.glassBlack({ iridescence: 0.5, iridescenceIOR: 1.4, envMapIntensity: 1.6 })));

  const sealGeo = slab(15.8, 7.0, 2.6, 3.0, { bevel: 0.8, segments: 8 });
  sealGeo.translate(0, 0, -2.3);
  g.add(new THREE.Mesh(bendY(sealGeo, R), new THREE.MeshPhysicalMaterial({ map: makeKnitTexture(renderer, '#4a4b50', [6, 3]), roughness: 1, sheen: 0.5, sheenColor: 0xffffff })));

  // Bandeau Solo Knit
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-8.0, 0, -2.4), new THREE.Vector3(-9.2, 0, -6), new THREE.Vector3(-7.6, 0, -11),
    new THREE.Vector3(0, 0, -14), new THREE.Vector3(7.6, 0, -11), new THREE.Vector3(9.2, 0, -6), new THREE.Vector3(8.0, 0, -2.4),
  ]);
  const bandGeo = new THREE.ExtrudeGeometry(roundedRect(3.8, 0.6, 0.28), { steps: 160, bevelEnabled: false, extrudePath: path });
  g.add(new THREE.Mesh(bandGeo, new THREE.MeshPhysicalMaterial({ map: makeKnitTexture(renderer, '#3c3d42', [24, 2]), roughness: 1, sheen: 0.6, sheenColor: 0xd0d0d0 })));

  // Sangles audio
  const strapMat = mat.plastic(0xe6e6e4, 0.4);
  for (const side of [-1, 1]) {
    const strap = new THREE.Mesh(new RoundedBoxGeometry(0.75, 1.3, 3.4, 4, 0.3), strapMat);
    strap.position.set(side * 7.95, 0.2, -2.6);
    strap.rotation.y = side * 0.25;
    g.add(strap);
  }
  // Couronne Digitale + bouton supérieur
  const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.35, 40), alu);
  crown.position.set(6.3, 4.05, -0.6);
  g.add(crown);
  const topBtn = capsule(alu, 1.1, 0.16, [-6.1, 4.0, -0.6], { axis: 'x', squash: 0.6 });
  g.add(topBtn);
  return g;
}

/* ── HomePod mini ───────────────────────────────────────────────────────── */
export function createHomePod(renderer) {
  const g = new THREE.Group();
  const r = 4.9, a = 1.15, flat = 0.86;
  const yEnd = r * Math.sin(a) * flat, xEnd = r * Math.cos(a);
  const pts = [new THREE.Vector2(0, -yEnd)];
  for (let i = 0; i <= 48; i++) {
    const t = -a + (2 * a * i) / 48;
    pts.push(new THREE.Vector2(r * Math.cos(t), r * Math.sin(t) * flat));
  }
  pts.push(new THREE.Vector2(0, yEnd));
  const bump = makeMeshBump(renderer);
  bump.repeat.set(90, 40);
  const fabric = new THREE.MeshPhysicalMaterial({ color: 0x2f3034, roughness: 0.95, bumpMap: bump, bumpScale: 1.2, sheen: 0.4, sheenColor: 0x9a9aa0 });
  g.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 128), fabric));

  const touch = new THREE.Mesh(new THREE.CircleGeometry(xEnd * 0.96, 64), new THREE.MeshPhysicalMaterial({
    color: 0x000000, emissive: 0xffffff, emissiveMap: makeSwirlTexture(renderer), emissiveIntensity: 0.9, roughness: 0.08, clearcoat: 1,
  }));
  touch.rotation.x = -Math.PI / 2;
  touch.position.y = yEnd + 0.01;
  g.add(touch);

  const cable = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0, -yEnd + 0.4, -xEnd), new THREE.Vector3(0, -yEnd - 0.1, -4.6), new THREE.Vector3(0.8, -yEnd - 0.15, -7)]), 64, 0.18, 12),
    mat.plastic(0x2a2a2d, 0.6),
  );
  g.add(cable);
  return g;
}

/* ── AirTag ─────────────────────────────────────────────────────────────── */
export function createAirTag() {
  const g = new THREE.Group();
  const front = [[0, 0], [1.6, 0], [1.45, 0.2], [1.1, 0.33], [0.6, 0.4], [0, 0.42]];
  const backP = [[0, -0.38], [0.9, -0.36], [1.4, -0.28], [1.58, -0.12], [1.6, 0]];
  const toV = (arr) => arr.map(([x, y]) => new THREE.Vector2(x, y));
  const dome = new THREE.Mesh(new THREE.LatheGeometry(toV(front.slice(1)), 96), mat.plastic(0xf6f6f4, 0.12, { clearcoat: 1, clearcoatRoughness: 0.05 }));
  const steel = new THREE.Mesh(new THREE.LatheGeometry(toV(backP), 96), mat.metal(0xd9d9db, 0.08));
  const seam = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.012, 8, 128), new THREE.MeshBasicMaterial({ color: 0x555555 }));
  seam.rotation.x = Math.PI / 2;
  for (const m of [dome, steel, seam]) {
    g.add(m);
  }
  g.rotation.x = Math.PI / 2;
  const wrap = new THREE.Group();
  wrap.add(g);
  return wrap;
}
