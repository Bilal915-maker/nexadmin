/**
 * Primitives géométriques réutilisables pour les représentations procédurales.
 * Unité de scène : 1 = 100 mm.
 */
import * as THREE from 'three'

export const MM = 0.01

export function roundedRectShape(w: number, h: number, r: number): THREE.Shape {
  const rr = Math.max(0.0001, Math.min(r, w / 2, h / 2))
  const s = new THREE.Shape()
  const x = -w / 2
  const y = -h / 2
  s.moveTo(x + rr, y)
  s.lineTo(x + w - rr, y)
  s.quadraticCurveTo(x + w, y, x + w, y + rr)
  s.lineTo(x + w, y + h - rr)
  s.quadraticCurveTo(x + w, y + h, x + w - rr, y + h)
  s.lineTo(x + rr, y + h)
  s.quadraticCurveTo(x, y + h, x, y + h - rr)
  s.lineTo(x, y + rr)
  s.quadraticCurveTo(x, y, x + rr, y)
  return s
}

/** Dalle à coins arrondis, épaisseur selon Z, centrée. `edge` contrôle l'arrondi des chants. */
export function roundedSlab(w: number, h: number, d: number, r: number, edge = 0.3, segments = 6): THREE.BufferGeometry {
  const bevel = Math.min(d * edge, d * 0.49, r * 0.9)
  const shape = roundedRectShape(w - bevel * 2, h - bevel * 2, Math.max(r - bevel, 0.0005))
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(d - bevel * 2, 0.0001),
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: segments,
    curveSegments: 18,
  })
  geo.translate(0, 0, -(d - bevel * 2) / 2)
  geo.computeVertexNormals()
  return geo
}

export function roundedPlane(w: number, h: number, r: number): THREE.ShapeGeometry {
  return new THREE.ShapeGeometry(roundedRectShape(w, h, r), 18)
}

/** Corps de révolution lissé (enceintes, AirTag, souris…). Profil : [rayon, hauteur]. */
export function lathe(profile: [number, number][], segments = 72): THREE.LatheGeometry {
  return new THREE.LatheGeometry(
    profile.map(([r, y]) => new THREE.Vector2(r, y)),
    segments,
  )
}

export function mesh(geo: THREE.BufferGeometry, mat: THREE.Material, name?: string): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat)
  m.castShadow = true
  m.receiveShadow = true
  if (name) m.name = name
  return m
}

export function disposeObject(obj: THREE.Object3D): void {
  obj.traverse((o) => {
    const m = o as THREE.Mesh
    if (m.geometry) m.geometry.dispose()
    const mat = m.material as THREE.Material | THREE.Material[] | undefined
    if (Array.isArray(mat)) mat.forEach((x) => x.dispose())
    else if (mat) mat.dispose()
  })
}
