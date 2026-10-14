import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

/** Rectangle à coins "squircle" (courbure continue). */
export function roundedRect(w, h, r, k = 0.3) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  r = Math.min(r, w / 2, h / 2);
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

/** UV planaires 0..1 à partir des positions XY. */
export function planarUV(geo, w, h) {
  const pos = geo.attributes.position;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = pos.getX(i) / w + 0.5;
    uv[i * 2 + 1] = pos.getY(i) / h + 0.5;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

/** Normales lisses (ExtrudeGeometry est facettée par défaut). */
export function smooth(geo, keepUV = false) {
  if (!keepUV) geo.deleteAttribute('uv');
  geo.deleteAttribute('normal');
  const merged = mergeVertices(geo, 1e-4);
  merged.computeVertexNormals();
  return merged;
}

/** Bloc unibody arrondi, centré, face avant en +z. */
export function slab(w, h, d, r, { bevel, segments = 8, curve = 36, k = 0.3 } = {}) {
  const b = bevel ?? Math.min(d * 0.3, 0.25);
  const depth = Math.max(0.001, d - 2 * b);
  const g = new THREE.ExtrudeGeometry(roundedRect(w - 2 * b, h - 2 * b, Math.max(0.01, r - b), k), {
    depth, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelSegments: segments, curveSegments: curve,
  });
  g.translate(0, 0, -depth / 2);
  return smooth(g);
}

/** Plaque de verre à bord arrondi, UV 0..1 (écrans). Occupe z ∈ [-bevel, thick + bevel]. */
export function glassPlate(w, h, r, { thick = 0.02, bevel = 0.03, k = 0.3 } = {}) {
  const g = new THREE.ExtrudeGeometry(roundedRect(w - 2 * bevel, h - 2 * bevel, Math.max(0.01, r - bevel), k), {
    depth: thick, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 4, curveSegments: 36,
  });
  planarUV(g, w, h);
  return smooth(g, true);
}

/** Courbe une géométrie autour d'un axe vertical (rayon R) : visières, bandeaux. */
export function bendY(geo, R) {
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i);
    const a = x / R, rr = R + z;
    p.setXYZ(i, Math.sin(a) * rr, p.getY(i), Math.cos(a) * rr - R);
  }
  geo.computeVertexNormals();
  return geo;
}

export const mat = {
  metal: (color, roughness = 0.32, extra = {}) => new THREE.MeshPhysicalMaterial({
    color, metalness: 1, roughness, clearcoat: 0.15, clearcoatRoughness: 0.3, ...extra,
  }),
  plastic: (color, roughness = 0.3, extra = {}) => new THREE.MeshPhysicalMaterial({
    color, metalness: 0, roughness, clearcoat: 0.6, clearcoatRoughness: 0.2, ...extra,
  }),
  glassBlack: (extra = {}) => new THREE.MeshPhysicalMaterial({
    color: 0x020203, roughness: 0.05, clearcoat: 1, clearcoatRoughness: 0.03, ...extra,
  }),
  matteBlack: () => new THREE.MeshPhysicalMaterial({ color: 0x060607, roughness: 0.6 }),
  screen: (tex) => new THREE.MeshPhysicalMaterial({
    color: 0x000000, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 1.05,
    roughness: 0.06, clearcoat: 0.6, clearcoatRoughness: 0.03, envMapIntensity: 0.45,
  }),
};

/** Bouton/port en capsule aplatie. axis 'y' = vertical, 'x' = horizontal. */
export function capsule(material, len, radius, pos, { axis = 'y', squash = 0.45 } = {}) {
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(radius, len, 6, 24), material);
  m.scale.set(squash, 1, 1);
  if (axis === 'x') m.rotation.z = Math.PI / 2;
  m.position.set(...pos);
  return m;
}

export function disc(r, material, pos, { facing = 'front', seg = 48 } = {}) {
  const m = new THREE.Mesh(new THREE.CircleGeometry(r, seg), material);
  if (facing === 'back') m.rotation.y = Math.PI;
  if (facing === 'up') m.rotation.x = -Math.PI / 2;
  m.position.set(...pos);
  return m;
}
