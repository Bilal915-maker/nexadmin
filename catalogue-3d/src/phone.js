import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeScreenTexture, makeLensTexture, makeFlashTexture, makeFrostTexture } from './textures.js';

// Dimensions réelles iPhone 15 Pro : 146,6 × 70,6 × 8,25 mm  →  1 unité = 10 mm
export const DIM = { W: 7.06, H: 14.66, D: 0.825, R: 1.15 };

const BEVEL_T = 0.2;   // épaisseur de l'arrondi du cadre (bords contourés)
const BEVEL_S = 0.13;  // débord de l'arrondi
const BUMP = { size: 3.62, radius: 0.95, x: 0, y: 0 };
BUMP.x = DIM.W / 2 - 0.3 - BUMP.size / 2;
BUMP.y = DIM.H / 2 - 0.3 - BUMP.size / 2;

// Points d'intérêt (repère local du téléphone) utilisés par les plans caméra
export const ANCHORS = {
  center: [0, 0, 0],
  cameras: [BUMP.x, BUMP.y, -0.5],
  action: [-DIM.W / 2, 4.2, 0],
  volume: [-DIM.W / 2, 2.6, 0],
  sideButton: [DIM.W / 2, 2.8, 0],
  bottom: [0, -DIM.H / 2 + 0.1, 0],
  screen: [0, 0.5, 0.4],
};

/** Rectangle à coins "squircle" (courbure continue, comme le design Apple). */
function roundedRect(w, h, r, k = 0.3) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.bezierCurveTo(x + w - r * k, y, x + w, y + r * k, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.bezierCurveTo(x + w, y + h - r * k, x + w - r * k, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.bezierCurveTo(x + r * k, y + h, x, y + h - r * k, x, y + h - r);
  s.lineTo(x, y + r);
  s.bezierCurveTo(x, y + r * k, x + r * k, y, x + r, y);
  return s;
}

/** UV planaires 0..1 calculées à partir des positions XY. */
function planarUV(geo, w, h) {
  const pos = geo.attributes.position;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = pos.getX(i) / w + 0.5;
    uv[i * 2 + 1] = pos.getY(i) / h + 0.5;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

/** Fusionne les sommets pour des normales lisses (ExtrudeGeometry est facettée par défaut). */
function smooth(geo) {
  geo.deleteAttribute('normal');
  const merged = mergeVertices(geo, 1e-4);
  merged.computeVertexNormals();
  return merged;
}

function materials(renderer) {
  const titanium = new THREE.MeshPhysicalMaterial({
    color: 0xaca79e, metalness: 1, roughness: 0.3,
    clearcoat: 0.2, clearcoatRoughness: 0.25, envMapIntensity: 1.15,
  });
  const titaniumPolished = titanium.clone();
  titaniumPolished.roughness = 0.16;
  titaniumPolished.color.set(0xa7a299);

  const backGlass = new THREE.MeshPhysicalMaterial({
    color: 0xadaaa3, metalness: 0, roughness: 0.62,
    roughnessMap: makeFrostTexture(renderer),
    clearcoat: 0.35, clearcoatRoughness: 0.55, sheen: 0.3, sheenColor: 0xffffff,
  });
  const bumpGlass = backGlass.clone();
  bumpGlass.roughness = 0.28;
  bumpGlass.roughnessMap = null;
  bumpGlass.clearcoat = 0.8;
  bumpGlass.clearcoatRoughness = 0.12;

  const black = new THREE.MeshPhysicalMaterial({ color: 0x050506, roughness: 0.45, metalness: 0 });
  const blackGloss = new THREE.MeshPhysicalMaterial({ color: 0x020203, roughness: 0.08, clearcoat: 1, clearcoatRoughness: 0.03 });
  const antenna = new THREE.MeshPhysicalMaterial({ color: 0x55534f, roughness: 0.5, metalness: 0.1 });

  return { titanium, titaniumPolished, backGlass, bumpGlass, black, blackGloss, antenna };
}

export function makeLens(mat, lensTex) {
  const g = new THREE.Group();

  // Bague titane usinée (profil tourné)
  const profile = [
    [0.6, 0.0], [0.82, 0.0], [0.82, 0.13], [0.805, 0.18],
    [0.77, 0.21], [0.67, 0.215], [0.625, 0.19], [0.6, 0.13],
  ].map(([r, y]) => new THREE.Vector2(r, y));
  const ring = new THREE.Mesh(new THREE.LatheGeometry(profile, 96), mat.titaniumPolished);
  ring.rotation.x = Math.PI / 2;
  g.add(ring);

  // Fût intérieur noir
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.2, 64, 1, true), mat.black);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.z = 0.1;
  g.add(barrel);

  // Verre saphir avec éléments optiques et traitement iridescent
  const glass = new THREE.Mesh(
    new THREE.CircleGeometry(0.6, 64),
    new THREE.MeshPhysicalMaterial({
      map: lensTex, color: 0xffffff, roughness: 0.03, metalness: 0.1,
      clearcoat: 1, clearcoatRoughness: 0.02,
      iridescence: 0.9, iridescenceIOR: 1.7, iridescenceThicknessRange: [180, 520],
      envMapIntensity: 1.4,
    }),
  );
  glass.position.z = 0.15;
  g.add(glass);

  // Dôme de verre transparent : capte les reflets courbes du studio
  const theta = Math.asin(0.58 / 0.9);
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(0.9, 64, 24, 0, Math.PI * 2, 0, theta),
    new THREE.MeshPhysicalMaterial({
      color: 0x000000, transparent: true, opacity: 0.35, roughness: 0, metalness: 0,
      clearcoat: 1, clearcoatRoughness: 0, envMapIntensity: 2.2, depthWrite: false,
    }),
  );
  dome.rotation.x = Math.PI / 2;
  dome.scale.set(1, 0.22, 1);
  dome.position.z = 0.15 - 0.9 * Math.cos(theta) * 0.22;
  g.add(dome);

  return g;
}

export function createPhone(renderer) {
  const { W, H, D, R } = DIM;
  const mat = materials(renderer);
  const phone = new THREE.Group();
  phone.name = 'iPhone15Pro';

  // ── Cadre titane : extrusion à bords arrondis ───────────────────────────
  const depth = D - 2 * BEVEL_T;
  let frameGeo = new THREE.ExtrudeGeometry(roundedRect(W - 2 * BEVEL_S, H - 2 * BEVEL_S, R - BEVEL_S), {
    depth, bevelEnabled: true, bevelThickness: BEVEL_T, bevelSize: BEVEL_S,
    bevelSegments: 12, curveSegments: 40,
  });
  frameGeo.translate(0, 0, -depth / 2);
  frameGeo.deleteAttribute('uv');
  frameGeo = smooth(frameGeo);
  const frame = new THREE.Mesh(frameGeo, mat.titanium);
  phone.add(frame);

  // ── Verres avant / arrière (bord 2.5D légèrement arrondi) ─────────────
  const gw = W - 2 * BEVEL_S - 0.1;
  const gh = H - 2 * BEVEL_S - 0.1;
  const gr = R - BEVEL_S - 0.05;
  const makeGlassGeo = () => {
    const g = new THREE.ExtrudeGeometry(roundedRect(gw, gh, gr), {
      depth: 0.02, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03,
      bevelSegments: 4, curveSegments: 40,
    });
    planarUV(g, gw + 0.06, gh + 0.06);
    return smooth(g);
  };

  const screenTex = makeScreenTexture(renderer, gw + 0.06, gh + 0.06, 0.17, gr + 0.03);
  const screenMat = new THREE.MeshPhysicalMaterial({
    color: 0x000000, emissive: 0xffffff, emissiveMap: screenTex, emissiveIntensity: 1.05,
    roughness: 0.06, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.03, envMapIntensity: 0.45,
  });
  const front = new THREE.Mesh(makeGlassGeo(), screenMat);
  front.position.z = D / 2 - 0.035;
  phone.add(front);

  const back = new THREE.Mesh(makeGlassGeo(), mat.backGlass);
  back.rotation.y = Math.PI;
  back.position.z = -D / 2 + 0.035;
  phone.add(back);

  // ── Plateau photo ───────────────────────────────────────────────────────
  const bumpGeo = smooth(new THREE.ExtrudeGeometry(
    roundedRect(BUMP.size - 0.12, BUMP.size - 0.12, BUMP.radius - 0.06, 0.35),
    { depth: 0.05, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 6, curveSegments: 32 },
  ));
  const bump = new THREE.Mesh(bumpGeo, mat.bumpGlass);
  bump.rotation.y = Math.PI;
  bump.position.set(BUMP.x, BUMP.y, -D / 2 + 0.0);
  phone.add(bump);

  const bumpTop = -D / 2 - 0.11;
  const lensTex = makeLensTexture(renderer);
  const o = 0.88;
  const lensPositions = [
    [BUMP.x + o, BUMP.y + o], // grand-angle 48 Mpx
    [BUMP.x + o, BUMP.y - o], // ultra grand-angle
    [BUMP.x - o, BUMP.y],     // téléobjectif 3×
  ];
  for (const [x, y] of lensPositions) {
    const lens = makeLens(mat, lensTex);
    lens.rotation.y = Math.PI;
    lens.position.set(x, y, bumpTop);
    phone.add(lens);
  }

  const addDisc = (r, material, x, y, lift = 0.004) => {
    const m = new THREE.Mesh(new THREE.CircleGeometry(r, 48), material);
    m.rotation.y = Math.PI;
    m.position.set(x, y, bumpTop - lift);
    phone.add(m);
    return m;
  };
  // Flash True Tone
  addDisc(0.27, mat.titaniumPolished, BUMP.x - 0.95, BUMP.y + 1.2, 0.002);
  addDisc(0.235, new THREE.MeshPhysicalMaterial({ map: makeFlashTexture(renderer), roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.05 }), BUMP.x - 0.95, BUMP.y + 1.2);
  // Scanner LiDAR
  addDisc(0.27, mat.titaniumPolished, BUMP.x - 0.95, BUMP.y - 1.2, 0.002);
  addDisc(0.235, new THREE.MeshPhysicalMaterial({ color: 0x0a0812, roughness: 0.05, clearcoat: 1, iridescence: 1, iridescenceIOR: 1.5 }), BUMP.x - 0.95, BUMP.y - 1.2);
  // Micro
  addDisc(0.05, mat.black, BUMP.x - 0.05, BUMP.y + 1.48);

  // ── Boutons ─────────────────────────────────────────────────────────────
  const button = (len, side, y) => {
    const b = new THREE.Mesh(new THREE.CapsuleGeometry(0.135, len, 8, 32), mat.titanium);
    b.scale.set(0.45, 1, 1);
    b.position.set(side * (W / 2 - 0.012), y, 0);
    phone.add(b);
    return b;
  };
  button(1.7, 1, 2.8);    // bouton latéral
  button(0.48, -1, 4.2);  // bouton Action
  button(0.95, -1, 3.0);  // volume +
  button(0.95, -1, 1.75); // volume −

  // ── Bandes d'antenne ────────────────────────────────────────────────────
  const bandZ = depth + 0.1;
  for (const [x, y, vertical] of [
    [W / 2, 6.25, true], [W / 2, -6.25, true], [-W / 2, 6.25, true], [-W / 2, -6.25, true],
    [-2.3, H / 2, false], [2.3, -H / 2, false],
  ]) {
    const geo = vertical ? new THREE.BoxGeometry(0.012, 0.07, bandZ) : new THREE.BoxGeometry(0.07, 0.012, bandZ);
    const m = new THREE.Mesh(geo, mat.antenna);
    m.position.set(vertical ? x - Math.sign(x) * 0.004 : x, vertical ? y : y - Math.sign(y) * 0.004, 0);
    phone.add(m);
  }

  // ── Bas : USB‑C, haut-parleur, micros, vis ─────────────────────────────
  const usb = new THREE.Mesh(new THREE.CapsuleGeometry(0.105, 0.62, 6, 32), mat.blackGloss);
  usb.rotation.z = Math.PI / 2;
  usb.position.set(0, -H / 2 + 0.085, 0);
  phone.add(usb);
  const holeGeo = new THREE.CylinderGeometry(0.042, 0.042, 0.03, 16);
  for (let i = 0; i < 7; i++) {
    for (const side of [-1, 1]) {
      const h = new THREE.Mesh(holeGeo, mat.black);
      h.position.set(side * (1.05 + i * 0.19), -H / 2 + 0.008, 0);
      phone.add(h);
    }
  }
  const screwGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.03, 24);
  for (const side of [-1, 1]) {
    const s = new THREE.Mesh(screwGeo, mat.titaniumPolished);
    s.position.set(side * 0.62, -H / 2 + 0.006, 0);
    phone.add(s);
  }

  phone.traverse((o) => {
    if (o.isMesh) o.castShadow = true;
  });

  return phone;
}
