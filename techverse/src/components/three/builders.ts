/**
 * Générateurs procéduraux d'appareils.
 *
 * Chaque générateur reçoit les paramètres de représentation et les dimensions
 * documentées du modèle (en mm) ; il produit une représentation schématique,
 * jamais présentée comme une reproduction exacte.
 */
import * as THREE from 'three'
import type { Dimensions, Visual } from '@/lib/catalog/types'
import { darkMaterial, finishMaterial, isLight, internalMaterial, lensGlass, neutralBand, ringMetal, screenMaterial, type Finish } from './materials'
import { disposeObject, lathe, mesh, MM, roundedPlane, roundedSlab } from './primitives'

export interface RigInput {
  visual: Visual
  dimensions: Dimensions[]
  colorHex: string
}

export type ViewName = 'front' | 'back' | 'side' | 'detail'

export interface DeviceRig {
  root: THREE.Group
  setColor(hex: string): void
  /** 0 = assemblé, 1 = décomposé / ouvert */
  setExplode(t: number): void
  explodeLabel?: string
  views: Record<ViewName, THREE.Vector3>
  detailTarget: THREE.Vector3
  dispose(): void
}

type P = Visual['params']

const num = (v: unknown, d: number) => (typeof v === 'number' && Number.isFinite(v) ? v : d)

function firstDims(dims: Dimensions[]) {
  return dims.find((d) => d.heightMm && d.widthMm) ?? dims[0] ?? {}
}

/** Gestion commune : matériaux teintés + parties animées. */
class RigBuilder {
  root = new THREE.Group()
  tinted: THREE.MeshPhysicalMaterial[] = []
  explodeFns: ((t: number) => void)[] = []
  tint(hex: string, finish: Finish) {
    const m = finishMaterial(hex, finish)
    this.tinted.push(m)
    return m
  }
  done(views: Partial<Record<ViewName, THREE.Vector3>>, detailTarget = new THREE.Vector3(), explodeLabel?: string): DeviceRig {
    const box = new THREE.Box3().setFromObject(this.root)
    const size = box.getSize(new THREE.Vector3())
    const r = Math.max(size.x, size.y, size.z)
    const defaults: Record<ViewName, THREE.Vector3> = {
      front: new THREE.Vector3(0.15 * r, 0.1 * r, 1.6 * r),
      back: new THREE.Vector3(-0.2 * r, 0.12 * r, -1.6 * r),
      side: new THREE.Vector3(1.7 * r, 0.15 * r, 0.2 * r),
      detail: new THREE.Vector3(0.4 * r, 0.3 * r, 0.9 * r),
    }
    return {
      root: this.root,
      setColor: (hex) => this.tinted.forEach((m) => m.color.set(hex)),
      setExplode: (t) => this.explodeFns.forEach((f) => f(t)),
      explodeLabel,
      views: { ...defaults, ...views },
      detailTarget,
      dispose: () => disposeObject(this.root),
    }
  }
}

// ---------------------------------------------------------------------------
// Téléphones (et iPod touch)
// ---------------------------------------------------------------------------

function lensUnit(r: number, h: number): THREE.Group {
  const g = new THREE.Group()
  const ring = mesh(new THREE.CylinderGeometry(r, r * 1.02, h, 48), ringMetal())
  ring.rotation.x = Math.PI / 2
  const glass = mesh(new THREE.CylinderGeometry(r * 0.78, r * 0.78, h * 1.02, 48), lensGlass())
  glass.rotation.x = Math.PI / 2
  g.add(ring, glass)
  return g
}

function cameraCluster(b: RigBuilder, hex: string, W: number, H: number, D: number, p: P): THREE.Group {
  const g = new THREE.Group()
  const u = W / 70 // unités relatives (téléphone de 70 mm)
  const cams = String(p.cams ?? 'single')
  const plateMat = b.tint(hex, 'glass')
  const addPlate = (w: number, h: number, r: number, x: number, y: number, depth = 0.9 * MM) => {
    const plate = mesh(roundedSlab(w * u, h * u, depth, r * u, 0.4), plateMat)
    plate.position.set(x, y, -depth / 2)
    g.add(plate)
    return depth
  }
  const addLens = (x: number, y: number, r: number, z: number) => {
    const l = lensUnit(r * u, 1.2 * MM)
    l.position.set(x, y, z - 0.6 * MM)
    g.add(l)
  }
  // Repère : vu de dos, le module photo est en haut à gauche → x positif
  const ox = W / 2 - 8 * u
  const oy = H / 2 - 8 * u
  const corner = (dx: number, dy: number) => [ox - dx * u, oy - dy * u] as const
  switch (cams) {
    case 'single-flat': {
      const [x, y] = corner(4, 3)
      addLens(x, y, 2.6, 0)
      break
    }
    case 'single':
    case 'single-flat-big': {
      const [x, y] = corner(5, 5)
      addLens(x, y, cams === 'single' ? 4 : 4.6, 0)
      break
    }
    case 'single-square': {
      const [x, y] = corner(7.5, 7.5)
      const d = addPlate(15, 15, 4.5, x, y)
      addLens(x, y, 4.6, -d)
      break
    }
    case 'dual-h': {
      const [x, y] = corner(11, 5)
      const d = addPlate(22, 10, 5, x, y)
      addLens(x + 5.3 * u, y, 3.8, -d)
      addLens(x - 5.3 * u, y, 3.8, -d)
      break
    }
    case 'dual-v': {
      const [x, y] = corner(5, 11)
      const d = addPlate(10, 22, 5, x, y)
      addLens(x, y + 5.5 * u, 3.8, -d)
      addLens(x, y - 5.5 * u, 3.8, -d)
      break
    }
    case 'dual-square':
    case 'dual-v-square': {
      const [x, y] = corner(13, 13)
      const d = addPlate(26, 26, 7, x, y)
      addLens(x + 5.5 * u, y + 5.5 * u, 5, -d)
      addLens(x + 5.5 * u, y - 5.5 * u, 5, -d)
      break
    }
    case 'dual-diag': {
      const [x, y] = corner(14, 14)
      const d = addPlate(28, 28, 8, x, y)
      addLens(x + 6 * u, y + 6 * u, 5.6, -d)
      addLens(x - 6 * u, y - 6 * u, 5.6, -d)
      break
    }
    case 'dual-v-pill': {
      const [x, y] = corner(6.5, 15)
      const d = addPlate(13, 30, 6.5, x, y)
      addLens(x, y + 7.5 * u, 5, -d)
      addLens(x, y - 7.5 * u, 5, -d)
      break
    }
    case 'triple':
    case 'triple-large': {
      const big = cams === 'triple-large'
      const s = big ? 34 : 28
      const [x, y] = corner(s / 2, s / 2)
      const d = addPlate(s, s, big ? 9 : 8, x, y, big ? 1.4 * MM : 1 * MM)
      const lr = big ? 6.6 : 5.2
      const off = big ? 7.5 : 6
      addLens(x + off * u, y + off * u, lr, -d)
      addLens(x + off * u, y - off * u, lr, -d)
      addLens(x - off * u, y, lr, -d)
      break
    }
    case 'air-plateau': {
      const d = addPlate(70 - 8, 18, 9, 0, H / 2 - 15 * u, 1.6 * MM)
      addLens(W / 2 - 16 * u, H / 2 - 15 * u, 6, -d)
      break
    }
    case 'pro-plateau': {
      const d = addPlate(70 - 2, 40, 8, 0, H / 2 - 21 * u, 1.6 * MM)
      addLens(W / 2 - 13 * u, H / 2 - 11 * u, 6.4, -d)
      addLens(W / 2 - 13 * u, H / 2 - 28 * u, 6.4, -d)
      addLens(W / 2 - 29 * u, H / 2 - 19.5 * u, 6.4, -d)
      break
    }
    default: {
      const [x, y] = corner(5, 5)
      addLens(x, y, 4, 0)
    }
  }
  g.position.z = -D / 2
  return g
}

function buildPhone(input: RigInput): DeviceRig {
  const p = input.visual.params
  const d = firstDims(input.dimensions)
  const fold = !!p.fold
  const H = (d.heightMm ?? 147) * MM
  const fullW = (d.widthMm ?? 71) * MM
  const W = fold ? fullW / 2 : fullW
  const D = (fold ? 11 : d.depthMm ?? 7.8) * MM
  const R = num(p.corner, 10) * MM
  const b = new RigBuilder()
  const hex = input.colorHex
  const frameFinish: Finish = p.frame === 'steel' ? 'steel' : p.frame === 'titanium' ? 'titanium' : 'aluminum'
  const backFinish: Finish = p.back === 'aluminum' || p.back === 'aluminum-inlay' ? frameFinish : p.back === 'matte-glass' ? 'matte-glass' : 'glass'
  const edge = p.edge === 'round' ? 0.45 : p.edge === 'contour' ? 0.3 : p.edge === 'chamfer' ? 0.18 : 0.12

  const body = mesh(roundedSlab(W, H, D * 0.72, R, edge), b.tint(hex, frameFinish), 'frame')
  const backPanel = mesh(roundedSlab(W - 0.5 * MM, H - 0.5 * MM, D * 0.16, R * 0.96, 0.4), b.tint(hex, backFinish), 'back')
  backPanel.position.z = -D * 0.36
  const frontColor = p.front === 'home' ? (isLight(hex) ? '#f2f2f2' : '#101012') : '#0a0a0c'
  const front = mesh(roundedSlab(W - 0.3 * MM, H - 0.3 * MM, D * 0.14, R * 0.97, 0.45), new THREE.MeshPhysicalMaterial({ color: frontColor, roughness: 0.08, clearcoat: 1 }), 'front')
  front.position.z = D * 0.37
  const screenInset = p.front === 'home' ? 4.5 * MM : 1.9 * MM
  const screenTop = p.front === 'home' ? 17 * (W / (70 * MM)) * MM : screenInset
  const screen = mesh(roundedPlane(W - screenInset * 2, H - screenTop * 2, p.front === 'home' ? 0.5 * MM : Math.max(R - 1.5 * MM, 1 * MM)), screenMaterial(), 'screen')
  front.add(screen)
  screen.position.z = D * 0.07 + 0.05 * MM
  if (p.front === 'notch') {
    const notch = mesh(roundedPlane(34 * (W / (70 * MM)) * MM, 5.6 * MM, 2.6 * MM), darkMaterial())
    notch.position.set(0, H / 2 - screenInset - 2 * MM, D * 0.07 + 0.08 * MM)
    front.add(notch)
  } else if (p.front === 'island') {
    const island = mesh(roundedPlane(18 * (W / (70 * MM)) * MM, 5.2 * MM, 2.6 * MM), darkMaterial())
    island.position.set(0, H / 2 - 7.2 * MM, D * 0.07 + 0.08 * MM)
    front.add(island)
  } else if (p.front === 'home') {
    const ring = mesh(new THREE.TorusGeometry(5 * MM, 0.35 * MM, 12, 48), ringMetal())
    ring.position.set(0, -H / 2 + 8.5 * (W / (70 * MM)) * MM, D * 0.07 + 0.05 * MM)
    front.add(ring)
  }

  const cams = cameraCluster(b, hex, W, H, D, p)
  const parts = new THREE.Group()
  parts.add(body, backPanel, front, cams)

  // Boutons latéraux
  const btnMat = b.tint(hex, frameFinish)
  const side = (x: number, y: number, len: number) => {
    const bt = mesh(roundedSlab(0.9 * MM, len, 2.2 * MM, 0.45 * MM, 0.4), btnMat)
    bt.position.set(x, y, 0)
    parts.add(bt)
  }
  side(W / 2 + 0.3 * MM, H * 0.18, 16 * MM)
  side(-W / 2 - 0.3 * MM, H * 0.28, 9 * MM)
  side(-W / 2 - 0.3 * MM, H * 0.16, 9 * MM)
  if (p.action) side(-W / 2 - 0.3 * MM, H * 0.38, 6 * MM)
  else side(-W / 2 - 0.3 * MM, H * 0.39, 4 * MM)
  if (p.cameraControl) {
    const cc = mesh(roundedSlab(0.6 * MM, 10 * MM, 3 * MM, 0.3 * MM, 0.4), new THREE.MeshPhysicalMaterial({ color: '#2a2b2f', metalness: 0.2, roughness: 0.1, clearcoat: 1 }))
    cc.position.set(W / 2 + 0.25 * MM, -H * 0.1, 0)
    parts.add(cc)
  }

  // Couches internes schématiques (décomposition)
  const battery = mesh(roundedSlab(W * 0.6, H * 0.5, D * 0.3, 2 * MM, 0.2), internalMaterial('#3c3e44'))
  battery.position.set(0, -H * 0.08, 0)
  battery.visible = false
  const board = mesh(roundedSlab(W * 0.3, H * 0.32, D * 0.12, 2 * MM, 0.2), internalMaterial('#1c2a3a'))
  board.position.set(W * 0.22, H * 0.3, 0)
  board.visible = false
  parts.add(battery, board)

  if (fold) {
    // Deuxième moitié (pliable) : charnière sur le bord gauche
    const hinge = new THREE.Group()
    hinge.position.x = -W / 2
    const other = mesh(roundedSlab(W, H, D * 0.9, R, edge), b.tint(hex, frameFinish))
    other.position.set(-W / 2, 0, 0)
    const innerScreen = mesh(roundedPlane(W - 2 * MM, H - 4 * MM, R * 0.8), screenMaterial())
    innerScreen.position.set(-W / 2, 0, D * 0.45 + 0.1 * MM)
    hinge.add(other, innerScreen)
    hinge.rotation.y = Math.PI * 0.98
    hinge.position.z = 0
    parts.add(hinge)
    b.explodeFns.push((t) => {
      hinge.rotation.y = Math.PI * (0.98 - 0.98 * t)
    })
  } else {
    b.explodeFns.push((t) => {
      const e = t * D * 6
      front.position.z = D * 0.37 + e * 1.6
      backPanel.position.z = -D * 0.36 - e * 1.2
      cams.position.z = -D / 2 - e * 1.6
      battery.visible = board.visible = t > 0.02
      battery.position.z = e * 0.4
      board.position.z = e * 0.8
    })
  }
  b.root.add(parts)
  const detail = new THREE.Vector3(W / 2 - 14 * MM, H / 2 - 14 * MM, -D)
  return b.done(
    {
      detail: new THREE.Vector3(W * 0.9, H * 0.55, -W * 1.3),
    },
    detail,
    fold ? 'Déplier' : 'Décomposer',
  )
}

// ---------------------------------------------------------------------------
// Tablettes
// ---------------------------------------------------------------------------

function buildTablet(input: RigInput): DeviceRig {
  const p = input.visual.params
  const d = firstDims(input.dimensions)
  const H = (d.heightMm ?? 247) * MM
  const W = (d.widthMm ?? 178) * MM
  const D = (d.depthMm ?? 6) * MM
  const R = num(p.corner, 10) * MM
  const b = new RigBuilder()
  const hex = input.colorHex
  const body = mesh(roundedSlab(W, H, D, R, 0.35), b.tint(hex, 'aluminum'), 'body')
  const bezelColor = p.home && isLight(hex) ? '#f1f1f1' : '#0b0b0d'
  const glass = mesh(roundedSlab(W - 0.4 * MM, H - 0.4 * MM, 0.6 * MM, R * 0.97, 0.45), new THREE.MeshPhysicalMaterial({ color: bezelColor, roughness: 0.06, clearcoat: 1 }))
  glass.position.z = D / 2
  const u = W / (170 * MM)
  const bezel = p.bezel === 'wide' ? 17 * u * MM : p.bezel === 'medium' ? 11 * u * MM : 7 * u * MM
  const sideB = p.bezel === 'wide' ? 12 * u * MM : bezel
  const screen = mesh(roundedPlane(W - sideB * 2, H - bezel * 2, p.bezel === 'slim' ? R * 0.6 : 1 * MM), screenMaterial())
  screen.position.z = 0.32 * MM
  glass.add(screen)
  if (p.home) {
    const ring = mesh(new THREE.TorusGeometry(5 * MM, 0.35 * MM, 12, 48), ringMetal())
    ring.position.set(0, -H / 2 + bezel / 2, 0.32 * MM)
    glass.add(ring)
  }
  const cams = new THREE.Group()
  const lensAt = (x: number, y: number, r: number) => {
    const l = lensUnit(r, 1 * MM)
    l.position.set(x, y, -D / 2 - 0.5 * MM)
    cams.add(l)
  }
  const cx = W / 2 - 12 * u * MM
  const cy = H / 2 - 12 * u * MM
  if (String(p.cams).startsWith('dual')) {
    const plate = mesh(roundedSlab(26 * u * MM, 26 * u * MM, 1 * MM, 7 * u * MM, 0.4), b.tint(hex, 'glass'))
    plate.position.set(cx - 3 * u * MM, cy - 3 * u * MM, -D / 2 - 0.5 * MM)
    cams.add(plate)
    lensAt(cx, cy, 4.6 * u * MM)
    lensAt(cx, cy - 12 * u * MM, 4.6 * u * MM)
  } else {
    lensAt(cx, cy, 4.4 * u * MM)
  }
  b.root.add(body, glass, cams)
  b.explodeFns.push((t) => {
    glass.position.z = D / 2 + t * D * 8
    cams.position.z = -t * D * 6
  })
  return b.done({}, new THREE.Vector3(cx, cy, -D), 'Décomposer')
}

// ---------------------------------------------------------------------------
// Portables Mac
// ---------------------------------------------------------------------------

function buildLaptop(input: RigInput): DeviceRig {
  const p = input.visual.params
  const d = firstDims(input.dimensions)
  const W = (d.widthMm ?? 304) * MM
  const Dp = (d.depthMm ?? 212) * MM
  const T = (d.heightMm ?? 15) * MM
  const b = new RigBuilder()
  const hex = input.colorHex
  const baseT = T * 0.55
  const lidT = Math.max(T * 0.35, 4 * MM)
  const base = mesh(roundedSlab(W, Dp, baseT, 8 * MM, 0.35), b.tint(hex, 'aluminum'), 'base')
  base.rotation.x = -Math.PI / 2
  base.position.y = baseT / 2
  // Clavier
  const kbW = W * 0.86
  const kbD = Dp * 0.42
  const kb = mesh(roundedPlane(kbW, kbD, 3 * MM), p.colorKeys ? b.tint(hex, 'plastic') : new THREE.MeshPhysicalMaterial({ color: '#141417', roughness: 0.7 }))
  kb.rotation.x = -Math.PI / 2
  kb.position.set(0, baseT + 0.05 * MM, -Dp * 0.12)
  const keyGeo = new THREE.BoxGeometry(kbW / 15 - 1.2 * MM, 0.6 * MM, kbD / 6 - 1.6 * MM)
  const keys = new THREE.InstancedMesh(keyGeo, new THREE.MeshPhysicalMaterial({ color: p.colorKeys ? '#f5f5f5' : '#1b1b1f', roughness: 0.55 }), 15 * 6)
  const mtx = new THREE.Matrix4()
  let k = 0
  for (let r = 0; r < 6; r++) for (let c = 0; c < 15; c++) {
    mtx.makeTranslation(-kbW / 2 + (c + 0.5) * (kbW / 15), baseT + 0.35 * MM, -Dp * 0.12 - kbD / 2 + (r + 0.5) * (kbD / 6))
    keys.setMatrixAt(k++, mtx)
  }
  keys.castShadow = true
  const track = mesh(roundedPlane(W * 0.42, Dp * 0.3, 4 * MM), b.tint(hex, 'glass'))
  track.rotation.x = -Math.PI / 2
  track.position.set(0, baseT + 0.04 * MM, Dp * 0.27)
  if (p.touchBar) {
    const tb = mesh(roundedPlane(kbW * 0.82, 7 * MM, 1.5 * MM), screenMaterial())
    tb.rotation.x = -Math.PI / 2
    tb.position.set(-kbW * 0.05, baseT + 0.08 * MM, -Dp * 0.12 - kbD / 2 - 6 * MM)
    b.root.add(tb)
  }
  // Écran (couvercle articulé à l'arrière)
  const lidH = Dp * 0.98
  const hinge = new THREE.Group()
  hinge.position.set(0, baseT, -Dp / 2 + 2 * MM)
  const lid = mesh(roundedSlab(W, lidH, lidT, 8 * MM, 0.35), b.tint(hex, 'aluminum'), 'lid')
  lid.position.set(0, lidH / 2, 0)
  const bezel = mesh(roundedPlane(W - 3 * MM, lidH - 3 * MM, 7 * MM), new THREE.MeshPhysicalMaterial({ color: '#0a0a0c', roughness: 0.1, clearcoat: 1 }))
  bezel.position.set(0, lidH / 2, lidT / 2 + 0.05 * MM)
  const inset = W * (p.notch ? 0.018 : 0.035)
  const screen = mesh(roundedPlane(W - inset * 2, lidH - inset * 2.4, 2 * MM), screenMaterial())
  screen.position.set(0, lidH / 2 + inset * 0.15, lidT / 2 + 0.1 * MM)
  hinge.add(lid, bezel, screen)
  if (p.notch) {
    const notch = mesh(roundedPlane(W * 0.07, inset * 1.4, 2 * MM), darkMaterial())
    notch.position.set(0, lidH - inset * 0.7, lidT / 2 + 0.15 * MM)
    hinge.add(notch)
  }
  b.root.add(base, kb, keys, track, hinge)
  const setOpen = (t: number) => {
    // t = 0 : écran ouvert (~108° par rapport à la base) ; t = 1 : écran fermé
    hinge.rotation.x = THREE.MathUtils.degToRad(-18 + t * 108)
  }
  setOpen(0)
  b.explodeFns.push(setOpen)
  b.root.position.y = -lidH * 0.35
  return b.done(
    {
      front: new THREE.Vector3(0, W * 0.45, W * 1.35),
      back: new THREE.Vector3(0, W * 0.35, -W * 1.35),
      side: new THREE.Vector3(W * 1.4, W * 0.3, W * 0.1),
      detail: new THREE.Vector3(W * 0.2, W * 0.55, W * 0.55),
    },
    new THREE.Vector3(0, 0, 0),
    'Fermer l’écran',
  )
}

// ---------------------------------------------------------------------------
// Ordinateurs de bureau, écrans, boîtiers
// ---------------------------------------------------------------------------

function buildImac(input: RigInput): DeviceRig {
  const p = input.visual.params
  const d = firstDims(input.dimensions)
  const W = (d.widthMm ?? 547) * MM
  const Htot = (d.heightMm ?? 461) * MM
  const size = num(p.size, 24)
  const panelH = W * (size === 24 ? 0.69 : 0.75)
  const thick = (size === 24 ? 11.5 : 22) * MM
  const b = new RigBuilder()
  const hex = input.colorHex
  const colorful = !!p.colorChin
  const panelMat = b.tint(hex, 'aluminum')
  const panel = mesh(roundedSlab(W, panelH, thick, 14 * MM, 0.3), panelMat)
  panel.position.y = Htot - panelH / 2
  const glass = mesh(roundedPlane(W - 1 * MM, panelH * (colorful ? 0.84 : 0.8), 12 * MM), new THREE.MeshPhysicalMaterial({ color: colorful ? '#f2f2f2' : '#0a0a0c', roughness: 0.06, clearcoat: 1 }))
  glass.position.set(0, Htot - panelH / 2 + panelH * (colorful ? 0.08 : 0.1), thick / 2 + 0.6 * MM)
  const screen = mesh(roundedPlane(W * 0.95, panelH * (colorful ? 0.78 : 0.74), 2 * MM), screenMaterial())
  screen.position.set(0, glass.position.y, thick / 2 + 1.4 * MM)
  const standMat = colorful ? b.tint(hex, 'aluminum') : finishMaterial(p.dark ? '#4a4b4f' : '#c9cbcf', 'aluminum')
  const standH = Htot - panelH + panelH * 0.35
  const stand = mesh(roundedSlab(W * 0.26, standH, 4 * MM, 3 * MM, 0.4), standMat)
  stand.position.set(0, standH / 2, -thick - 30 * MM)
  stand.rotation.x = -0.12
  const foot = mesh(roundedSlab(W * 0.26, 140 * MM, 4 * MM, 6 * MM, 0.4), standMat)
  foot.rotation.x = -Math.PI / 2
  foot.position.set(0, 2 * MM, -thick - 10 * MM)
  b.root.add(panel, glass, screen, stand, foot)
  b.root.position.y = -Htot / 2
  return b.done({ front: new THREE.Vector3(0, 0, W * 1.6), back: new THREE.Vector3(0, 0, -W * 1.6), side: new THREE.Vector3(W * 1.6, 0, 0.2) })
}

function buildDisplay(input: RigInput): DeviceRig {
  const p = input.visual.params
  const xdr = p.style === 'xdr'
  const W = (xdr ? 718 : 623) * MM
  const panelH = (xdr ? 412 : 362) * MM
  const b = new RigBuilder()
  const hex = input.colorHex
  const panel = mesh(roundedSlab(W, panelH, (xdr ? 27 : 30) * MM, 12 * MM, 0.25), b.tint(hex, 'aluminum'))
  panel.position.y = panelH / 2 + 110 * MM
  const glass = mesh(roundedPlane(W - 2 * MM, panelH - 2 * MM, 11 * MM), new THREE.MeshPhysicalMaterial({ color: '#0a0a0c', roughness: 0.05, clearcoat: 1 }))
  glass.position.set(0, panel.position.y, 15 * MM + 0.6 * MM)
  const screen = mesh(roundedPlane(W - 24 * MM, panelH - 24 * MM, 2 * MM), screenMaterial())
  screen.position.set(0, panel.position.y, 15 * MM + 1.4 * MM)
  if (xdr) {
    const holes = new THREE.InstancedMesh(new THREE.SphereGeometry(6 * MM, 12, 8), darkMaterial(), 30 * 16)
    const m4 = new THREE.Matrix4()
    let i = 0
    for (let r = 0; r < 16; r++) for (let c = 0; c < 30; c++) {
      m4.makeTranslation(-W / 2 + 30 * MM + c * ((W - 60 * MM) / 29), panel.position.y - panelH / 2 + 30 * MM + r * ((panelH - 60 * MM) / 15), -14 * MM)
      holes.setMatrixAt(i++, m4)
    }
    b.root.add(holes)
  }
  const stand = mesh(roundedSlab(W * 0.18, 300 * MM, 6 * MM, 4 * MM, 0.4), b.tint(hex, 'aluminum'))
  stand.position.set(0, 150 * MM, -60 * MM)
  stand.rotation.x = -0.1
  const foot = mesh(roundedSlab(W * 0.2, 180 * MM, 6 * MM, 8 * MM, 0.4), b.tint(hex, 'aluminum'))
  foot.rotation.x = -Math.PI / 2
  foot.position.set(0, 3 * MM, -40 * MM)
  b.root.add(panel, glass, screen, stand, foot)
  b.root.position.y = -(panelH + 110 * MM) / 2
  return b.done({ front: new THREE.Vector3(0, 0, W * 1.5), back: new THREE.Vector3(0, 0, -W * 1.5) })
}

function buildBox(input: RigInput): DeviceRig {
  const p = input.visual.params
  const d = firstDims(input.dimensions)
  const shape = String(p.shape)
  const def = shape === 'mini2024' ? [127, 50] : shape === 'studio' ? [197, 95] : shape.startsWith('tv') ? [98, 35] : [197, 36]
  const W = (d.widthMm ?? def[0]) * MM
  const Dp = (d.depthMm ?? W / MM) * MM
  const H = (d.heightMm ?? def[1]) * MM
  const b = new RigBuilder()
  const hex = input.colorHex
  const finish: Finish = shape.startsWith('tv') ? 'plastic' : 'aluminum'
  const body = mesh(roundedSlab(W, Dp, H, shape === 'mini' || shape.startsWith('tv') ? 26 * MM : 14 * MM, 0.35), b.tint(hex, finish))
  body.rotation.x = -Math.PI / 2
  body.position.y = H / 2
  b.root.add(body)
  if (shape.startsWith('tv') || shape === 'mini') {
    const top = mesh(roundedPlane(W * 0.5, Dp * 0.5, 30 * MM), new THREE.MeshPhysicalMaterial({ color: shape.startsWith('tv') ? '#0f0f12' : '#2b2c30', roughness: 0.2, clearcoat: 1 }))
    top.rotation.x = -Math.PI / 2
    top.position.y = H + 0.1 * MM
    b.root.add(top)
  }
  if (shape === 'studio' || shape === 'mini2024') {
    const port = (x: number, w: number, h: number) => {
      const pm = mesh(roundedPlane(w, h, h * 0.45), darkMaterial())
      pm.position.set(x, H * 0.45, Dp / 2 + 0.1 * MM)
      b.root.add(pm)
    }
    port(-W * 0.3, 9 * MM, 3.5 * MM)
    port(-W * 0.2, 9 * MM, 3.5 * MM)
    if (shape === 'studio') port(W * 0.25, 26 * MM, 3 * MM)
  }
  b.root.position.y = -H / 2
  const r = Math.max(W, Dp)
  return b.done({
    front: new THREE.Vector3(0, r * 0.75, r * 1.45),
    back: new THREE.Vector3(0, r * 0.6, -r * 1.45),
    side: new THREE.Vector3(r * 1.5, r * 0.5, 0.1),
    detail: new THREE.Vector3(r * 0.2, r * 1.6, 0.3 * r),
  })
}

function buildTower(input: RigInput): DeviceRig {
  const d = firstDims(input.dimensions)
  const W = (d.widthMm ?? 218) * MM
  const H = (d.heightMm ?? 529) * MM
  const Dp = (d.depthMm ?? 450) * MM
  const b = new RigBuilder()
  const hex = input.colorHex
  const body = mesh(roundedSlab(W, H, Dp, 18 * MM, 0.15), b.tint(hex, 'aluminum'))
  const holes = new THREE.InstancedMesh(new THREE.SphereGeometry(W / 26, 16, 12), new THREE.MeshPhysicalMaterial({ color: '#2a2b30', metalness: 0.7, roughness: 0.4 }), 400)
  const m4 = new THREE.Matrix4()
  let i = 0
  const step = W / 9
  for (let y = -H / 2 + step; y < H / 2 - step / 2 && i < 400; y += step * 0.86) {
    const row = Math.round((y + H) / (step * 0.86))
    for (let x = -W / 2 + step * (row % 2 ? 0.75 : 1.25); x < W / 2 - step / 2 && i < 400; x += step) {
      m4.makeTranslation(x, y, Dp / 2 + 1 * MM)
      holes.setMatrixAt(i++, m4)
    }
  }
  holes.count = i
  const handleMat = finishMaterial('#b8bac0', 'steel')
  const handle = (y: number) => {
    const h = mesh(new THREE.TorusGeometry(W * 0.42, 9 * MM, 16, 48, Math.PI), handleMat)
    h.rotation.y = Math.PI / 2
    h.position.set(0, y, 0)
    h.scale.set(1, 0.18, 2.2)
    b.root.add(h)
  }
  handle(H / 2)
  handle(-H / 2)
  b.root.add(body, holes)
  return b.done({})
}

// ---------------------------------------------------------------------------
// Apple Watch
// ---------------------------------------------------------------------------

function buildWatch(input: RigInput): DeviceRig {
  const p = input.visual.params
  const d = firstDims(input.dimensions)
  const ultra = p.shape === 'ultra'
  const H = (d.heightMm ?? num(p.size, 41)) * MM
  const W = (d.widthMm ?? H / MM * 0.86) * MM
  const D = (d.depthMm ?? 10.7) * MM
  const b = new RigBuilder()
  const hex = input.colorHex
  const caseR = (ultra ? 0.18 : 0.27) * W
  const body = mesh(roundedSlab(W, H, D, caseR, 0.42), b.tint(hex, ultra ? 'titanium' : 'aluminum'))
  const glass = mesh(roundedSlab(W - 1.2 * MM, H - 1.2 * MM, 1.4 * MM, caseR * 0.95, ultra ? 0.2 : 0.5), new THREE.MeshPhysicalMaterial({ color: '#08080a', roughness: 0.04, clearcoat: 1 }))
  glass.position.z = D / 2
  const screen = mesh(roundedPlane(W * 0.84, H * 0.86, caseR * 0.75), screenMaterial())
  screen.position.z = D / 2 + 0.75 * MM
  const crown = mesh(new THREE.CylinderGeometry(3 * MM, 3 * MM, 3 * MM, 32), ultra ? finishMaterial('#cfcfcf', 'titanium') : b.tint(hex, 'aluminum'))
  crown.rotation.z = Math.PI / 2
  crown.position.set(W / 2 + 1.2 * MM, H * 0.18, 0)
  if (ultra) {
    const action = mesh(roundedSlab(1.2 * MM, 10 * MM, 4 * MM, 0.6 * MM, 0.4), new THREE.MeshPhysicalMaterial({ color: '#d4592a', roughness: 0.4 }))
    action.position.set(-W / 2 - 0.4 * MM, H * 0.1, 0)
    b.root.add(action)
  }
  const sensor = mesh(lathe([[0, 0], [W * 0.32, 0], [W * 0.3, -1.2 * MM], [0, -1.6 * MM]]), new THREE.MeshPhysicalMaterial({ color: '#111114', roughness: 0.15, clearcoat: 1 }))
  sensor.rotation.x = Math.PI / 2
  sensor.position.z = -D / 2
  const bandMat = neutralBand()
  const band = (sign: 1 | -1) => {
    const g = new THREE.Group()
    const seg = mesh(roundedSlab(W * 0.8, H * 0.9, 2.6 * MM, 3 * MM, 0.4), bandMat)
    seg.position.set(0, sign * (H / 2 + H * 0.42), -D * 0.25)
    seg.rotation.x = sign * 0.35
    g.add(seg)
    return g
  }
  const bands = new THREE.Group()
  bands.add(band(1), band(-1))
  b.root.add(body, glass, screen, crown, sensor, bands)
  b.explodeFns.push((t) => {
    bands.position.z = -t * D * 3
    bands.scale.setScalar(1 - t * 0.2)
    glass.position.z = D / 2 + t * D * 2.4
    screen.position.z = D / 2 + 0.75 * MM + t * D * 2.4
  })
  return b.done({}, new THREE.Vector3(W / 2, H * 0.18, 0), 'Détacher le bracelet')
}

// ---------------------------------------------------------------------------
// Audio
// ---------------------------------------------------------------------------

function earbud(mat: THREE.Material, stemLen: number, pro: boolean): THREE.Group {
  const g = new THREE.Group()
  const head = mesh(new THREE.SphereGeometry(8.5 * MM, 32, 24), mat)
  head.scale.set(1, 1.1, 0.95)
  const stem = mesh(new THREE.CapsuleGeometry(2.8 * MM, stemLen * MM, 8, 24), mat)
  stem.position.set(1.5 * MM, -(stemLen / 2 + 5) * MM, -1 * MM)
  g.add(head, stem)
  if (pro) {
    const tip = mesh(new THREE.SphereGeometry(5 * MM, 24, 16), new THREE.MeshPhysicalMaterial({ color: '#e9e9e9', roughness: 0.8 }))
    tip.position.set(-6 * MM, 1 * MM, 0)
    g.add(tip)
  }
  return g
}

function buildEarbuds(input: RigInput): DeviceRig {
  const p = input.visual.params
  const b = new RigBuilder()
  const hex = input.colorHex
  const mat = b.tint(hex, 'plastic')
  if (p.wired) {
    const left = earbud(mat, 18, false)
    const right = earbud(mat, 18, false)
    left.position.set(-14 * MM, 40 * MM, 0)
    right.position.set(14 * MM, 40 * MM, 0)
    right.rotation.y = Math.PI
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-14 * MM, 12 * MM, 0),
      new THREE.Vector3(-8 * MM, -20 * MM, 4 * MM),
      new THREE.Vector3(0, -50 * MM, 0),
      new THREE.Vector3(8 * MM, -20 * MM, -4 * MM),
      new THREE.Vector3(14 * MM, 12 * MM, 0),
    ])
    const cable = mesh(new THREE.TubeGeometry(curve, 80, 1 * MM, 10, false), mat)
    b.root.add(left, right, cable)
    return b.done({})
  }
  const tall = p.case === 'tall'
  const cw = (tall ? 44 : p.case === 'small' ? 50 : 60) * MM
  const ch = (tall ? 54 : p.case === 'small' ? 46 : 45) * MM
  const cd = 21 * MM
  const lidH = ch * (tall ? 0.3 : 0.36)
  const caseBody = mesh(roundedSlab(cw, ch - lidH, cd, 12 * MM, 0.48), mat)
  caseBody.position.y = -lidH / 2
  const lidPivot = new THREE.Group()
  lidPivot.position.set(0, ch / 2 - lidH, -cd / 2)
  const lid = mesh(roundedSlab(cw, lidH, cd, 10 * MM, 0.48), mat)
  lid.position.set(0, lidH / 2, cd / 2)
  lidPivot.add(lid)
  const stemLen = p.stem === 'long' ? 22 : p.style === 'pro' ? 8 : 12
  const budL = earbud(mat, stemLen, p.style === 'pro')
  const budR = earbud(mat, stemLen, p.style === 'pro')
  budR.scale.x = -1
  budL.position.set(-cw * 0.22, -ch * 0.12, 0)
  budR.position.set(cw * 0.22, -ch * 0.12, 0)
  const led = mesh(new THREE.SphereGeometry(0.8 * MM, 12, 8), new THREE.MeshPhysicalMaterial({ color: '#3a3', emissive: new THREE.Color('#1a6b1a') }))
  led.position.set(0, -ch * 0.05, cd / 2 + 0.2 * MM)
  b.root.add(caseBody, lidPivot, budL, budR, led)
  b.explodeFns.push((t) => {
    lidPivot.rotation.x = -t * 1.9
    budL.position.y = -ch * 0.12 + t * ch * 1.05
    budR.position.y = -ch * 0.12 + t * ch * 1.05
    budL.visible = budR.visible = t > 0.05
    budL.position.x = -cw * 0.22 - t * cw * 0.35
    budR.position.x = cw * 0.22 + t * cw * 0.35
  })
  b.explodeFns.forEach((f) => f(0))
  return b.done({}, new THREE.Vector3(0, ch * 0.3, 0), 'Ouvrir le boîtier')
}

function buildHeadphones(input: RigInput): DeviceRig {
  const b = new RigBuilder()
  const hex = input.colorHex
  const cupMat = b.tint(hex, 'aluminum')
  const cushionMat = b.tint(hex, 'fabric')
  const steel = finishMaterial('#c4c6cc', 'steel')
  const band = mesh(new THREE.TorusGeometry(80 * MM, 3 * MM, 16, 80, Math.PI), steel)
  band.position.y = 20 * MM
  const canopy = mesh(new THREE.TorusGeometry(72 * MM, 7 * MM, 12, 80, Math.PI * 0.8), cushionMat)
  canopy.rotation.z = Math.PI * 0.1
  canopy.position.y = 20 * MM
  canopy.scale.z = 2.6
  const cup = (x: number) => {
    const g = new THREE.Group()
    const shell = mesh(roundedSlab(62 * MM, 80 * MM, 30 * MM, 24 * MM, 0.45), cupMat)
    shell.rotation.y = Math.PI / 2
    const cushion = mesh(roundedSlab(56 * MM, 74 * MM, 20 * MM, 22 * MM, 0.5), cushionMat)
    cushion.rotation.y = Math.PI / 2
    cushion.position.x = -Math.sign(x) * 22 * MM
    g.add(shell, cushion)
    g.position.set(x, -40 * MM, 0)
    return g
  }
  const crown = mesh(new THREE.CylinderGeometry(5 * MM, 5 * MM, 6 * MM, 32), cupMat)
  crown.position.set(95 * MM, -8 * MM, 10 * MM)
  b.root.add(band, canopy, cup(-85 * MM), cup(85 * MM), crown)
  return b.done({ front: new THREE.Vector3(0.3, 0.2, 3.4), side: new THREE.Vector3(3.4, 0.3, 0.3) })
}

function buildSpeaker(input: RigInput): DeviceRig {
  const p = input.visual.params
  const b = new RigBuilder()
  const hex = input.colorHex
  const mat = b.tint(hex, 'fabric')
  if (p.style === 'mini') {
    const R = 49 * MM
    const profile: [number, number][] = []
    for (let i = 0; i <= 24; i++) {
      const a = -Math.PI / 2 + (i / 24) * Math.PI * 0.86
      profile.push([Math.cos(a) * R, Math.sin(a) * R])
    }
    profile.push([0, Math.sin(-Math.PI / 2 + Math.PI * 0.86) * R])
    const sphere = mesh(lathe(profile), mat)
    const top = mesh(new THREE.CircleGeometry(R * 0.86, 64), new THREE.MeshPhysicalMaterial({ color: '#0d0d10', roughness: 0.15, clearcoat: 1 }))
    top.rotation.x = -Math.PI / 2
    top.position.y = profile[profile.length - 1][1] + 0.2 * MM
    b.root.add(sphere, top)
    return b.done({ front: new THREE.Vector3(0, 0.6, 2.4) })
  }
  const R = 71 * MM
  const Hh = 172 * MM
  const body = mesh(
    lathe([
      [0, -Hh / 2],
      [R * 0.86, -Hh / 2],
      [R, -Hh / 2 + 25 * MM],
      [R, Hh / 2 - 25 * MM],
      [R * 0.86, Hh / 2],
      [0, Hh / 2],
    ]),
    mat,
  )
  const top = mesh(new THREE.CircleGeometry(R * 0.7, 64), new THREE.MeshPhysicalMaterial({ color: '#0d0d10', roughness: 0.12, clearcoat: 1 }))
  top.rotation.x = -Math.PI / 2
  top.position.y = Hh / 2 + 0.3 * MM
  b.root.add(body, top)
  return b.done({ front: new THREE.Vector3(0, 0.6, 3.6) })
}

function buildHeadset(input: RigInput): DeviceRig {
  const b = new RigBuilder()
  const hex = input.colorHex
  const frame = b.tint(hex, 'aluminum')
  const front = mesh(new THREE.SphereGeometry(100 * MM, 64, 32, -Math.PI * 0.42, Math.PI * 0.84, Math.PI * 0.3, Math.PI * 0.4), new THREE.MeshPhysicalMaterial({ color: '#08080b', roughness: 0.03, clearcoat: 1, metalness: 0.3 }))
  front.scale.set(1, 0.85, 0.55)
  front.rotation.y = 0
  const rim = mesh(new THREE.TorusGeometry(92 * MM, 4 * MM, 16, 96, Math.PI * 0.86), frame)
  rim.rotation.set(Math.PI / 2, 0, Math.PI * 0.07)
  rim.scale.set(1, 0.6, 1)
  rim.position.z = -20 * MM
  const seal = mesh(roundedSlab(170 * MM, 70 * MM, 30 * MM, 30 * MM, 0.45), new THREE.MeshPhysicalMaterial({ color: '#d9d9d9', roughness: 0.95 }))
  seal.position.z = -55 * MM
  const strap = mesh(new THREE.TorusGeometry(95 * MM, 12 * MM, 12, 64, Math.PI), neutralBand())
  strap.rotation.x = Math.PI / 2
  strap.position.z = -60 * MM
  strap.scale.set(1, 1.3, 0.5)
  const crown = mesh(new THREE.CylinderGeometry(6 * MM, 6 * MM, 4 * MM, 32), frame)
  crown.position.set(80 * MM, 26 * MM, -25 * MM)
  b.root.add(front, rim, seal, strap, crown)
  return b.done({ front: new THREE.Vector3(0.4, 0.4, 3.2), back: new THREE.Vector3(-0.4, 0.6, -3.2) })
}

// ---------------------------------------------------------------------------
// Accessoires
// ---------------------------------------------------------------------------

function buildAccessory(input: RigInput): DeviceRig {
  const p = input.visual.params
  const kind = input.visual.kind
  const b = new RigBuilder()
  const hex = input.colorHex
  switch (kind) {
    case 'pencil': {
      const body = mesh(new THREE.CylinderGeometry(4.45 * MM, 4.45 * MM, 150 * MM, p.flat ? 6 : 48), b.tint(hex, 'plastic'))
      const tip = mesh(new THREE.ConeGeometry(4.45 * MM, 16 * MM, 48), b.tint(hex, 'plastic'))
      tip.position.y = -83 * MM
      tip.rotation.x = Math.PI
      const nib = mesh(new THREE.ConeGeometry(1.2 * MM, 4 * MM, 24), new THREE.MeshPhysicalMaterial({ color: '#e8e8e8', roughness: 0.4 }))
      nib.position.y = -92 * MM
      nib.rotation.x = Math.PI
      b.root.add(body, tip, nib)
      if (p.cap) {
        const cap = mesh(new THREE.CylinderGeometry(4.45 * MM, 4.45 * MM, 12 * MM, 48), finishMaterial('#c0c2c8', 'steel'))
        cap.position.y = 81 * MM
        b.root.add(cap)
      }
      b.root.rotation.z = Math.PI / 2.4
      return b.done({ front: new THREE.Vector3(0, 0, 2.6) })
    }
    case 'keyboard': {
      const w = (p.numpad ? 418 : p.folio ? 250 : 279) * MM
      const dpt = (p.folio ? 180 : 115) * MM
      const slab = mesh(roundedSlab(w, dpt, 6 * MM, 10 * MM, 0.35), b.tint(hex, p.folio ? 'plastic' : 'aluminum'))
      slab.rotation.x = -Math.PI / 2
      const cols = Math.round(w / (19 * MM))
      const keys = new THREE.InstancedMesh(new THREE.BoxGeometry(16 * MM, 1.4 * MM, 15 * MM), new THREE.MeshPhysicalMaterial({ color: isLight(hex) ? '#f6f6f6' : '#1b1b1f', roughness: 0.5 }), cols * 5)
      const m4 = new THREE.Matrix4()
      let i = 0
      const rowsDepth = (p.folio ? 100 : 100) * MM
      for (let r = 0; r < 5; r++) for (let c = 0; c < cols; c++) {
        m4.makeTranslation(-w / 2 + 10 * MM + c * 19 * MM, 3.5 * MM, -dpt / 2 + 12 * MM + r * (rowsDepth / 5))
        keys.setMatrixAt(i++, m4)
      }
      b.root.add(slab, keys)
      if (p.trackpad) {
        const tp = mesh(roundedPlane(w * 0.36, 50 * MM, 6 * MM), new THREE.MeshPhysicalMaterial({ color: isLight(hex) ? '#e9e9ea' : '#26262a', roughness: 0.2 }))
        tp.rotation.x = -Math.PI / 2
        tp.position.set(0, 3.1 * MM, dpt / 2 - 35 * MM)
        b.root.add(tp)
      }
      return b.done({ front: new THREE.Vector3(0, w * 1.0, w * 0.9) })
    }
    case 'mouse': {
      const m = mesh(new THREE.SphereGeometry(1, 64, 32), b.tint(hex, 'plastic'))
      m.scale.set(28.5 * MM, 11 * MM, 57 * MM)
      m.position.y = 0
      b.root.add(m)
      return b.done({ front: new THREE.Vector3(0, 1.1, 1.2) })
    }
    case 'trackpad': {
      const tp = mesh(roundedSlab(160 * MM, 115 * MM, 8 * MM, 10 * MM, 0.3), b.tint(hex, 'glass'))
      tp.rotation.x = -Math.PI / 2 + 0.05
      b.root.add(tp)
      return b.done({ front: new THREE.Vector3(0, 1.4, 1.4) })
    }
    case 'tag': {
      const disc = mesh(lathe([[0, -4 * MM], [14 * MM, -4 * MM], [16 * MM, -1 * MM], [15 * MM, 3 * MM], [0, 4.5 * MM]]), b.tint(hex, 'plastic'))
      disc.rotation.x = Math.PI / 2
      const back = mesh(new THREE.CylinderGeometry(15.5 * MM, 15.5 * MM, 1.6 * MM, 64), finishMaterial('#c8cad0', 'steel'))
      back.rotation.x = Math.PI / 2
      back.position.z = -4.4 * MM
      b.root.add(disc, back)
      return b.done({ front: new THREE.Vector3(0.1, 0.2, 1) })
    }
    case 'puck': {
      const ring = mesh(new THREE.CylinderGeometry(28 * MM, 28 * MM, 5 * MM, 64), finishMaterial('#c6c8ce', 'aluminum'))
      ring.rotation.x = Math.PI / 2
      const face = mesh(new THREE.CircleGeometry(24 * MM, 64), b.tint(hex, 'plastic'))
      face.position.z = 2.6 * MM
      const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, -20 * MM, -2 * MM), new THREE.Vector3(0, -60 * MM, -10 * MM), new THREE.Vector3(30 * MM, -90 * MM, 0)])
      const cable = mesh(new THREE.TubeGeometry(curve, 40, 1.8 * MM, 10, false), b.tint(hex, 'plastic'))
      b.root.add(ring, face, cable)
      if (p.duo) {
        const second = ring.clone()
        second.position.x = 70 * MM
        b.root.add(second)
      }
      return b.done({ front: new THREE.Vector3(0.1, 0.1, 1.8) })
    }
    case 'brick': {
      const s = Math.min(96, 40 + num(p.watts, 20) * 0.35) * MM
      const cube = mesh(roundedSlab(s, s, s * 0.55, s * 0.18, 0.3), b.tint(hex, 'plastic'))
      const port = mesh(roundedPlane(9 * MM, 3.2 * MM, 1.6 * MM), darkMaterial())
      port.position.z = s * 0.28
      b.root.add(cube, port)
      return b.done({ front: new THREE.Vector3(0.3, 0.3, s * 18) })
    }
    case 'remote': {
      const body = mesh(roundedSlab(36 * MM, 136 * MM, 9 * MM, 10 * MM, 0.4), b.tint(hex, 'aluminum'))
      const pad = mesh(new THREE.CircleGeometry(13 * MM, 48), new THREE.MeshPhysicalMaterial({ color: '#1a1a1d', roughness: 0.3 }))
      pad.position.set(0, 44 * MM, 4.6 * MM)
      b.root.add(body, pad)
      return b.done({ front: new THREE.Vector3(0.2, 0.2, 2) })
    }
    case 'cable': {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-60 * MM, 30 * MM, 0),
        new THREE.Vector3(40 * MM, 40 * MM, 10 * MM),
        new THREE.Vector3(50 * MM, -30 * MM, -10 * MM),
        new THREE.Vector3(-30 * MM, -40 * MM, 10 * MM),
        new THREE.Vector3(-10 * MM, 0, 0),
        new THREE.Vector3(20 * MM, 10 * MM, 0),
      ])
      const tube = mesh(new THREE.TubeGeometry(curve, 160, 2 * MM, 12, false), b.tint(hex, 'plastic'))
      const plug = (v: THREE.Vector3) => {
        const pl = mesh(roundedSlab(9 * MM, 22 * MM, 4 * MM, 2 * MM, 0.4), b.tint(hex, 'plastic'))
        pl.position.copy(v)
        b.root.add(pl)
      }
      plug(new THREE.Vector3(-60 * MM, 40 * MM, 0))
      plug(new THREE.Vector3(20 * MM, 20 * MM, 0))
      b.root.add(tube)
      return b.done({ front: new THREE.Vector3(0, 0.2, 2.2) })
    }
    case 'pack':
    default: {
      const pk = mesh(roundedSlab(64 * MM, 96 * MM, (p.thin ? 7 : 11) * MM, 12 * MM, 0.4), b.tint(hex, p.case ? 'plastic' : 'plastic'))
      const ring = mesh(new THREE.TorusGeometry(22 * MM, 0.8 * MM, 12, 64), finishMaterial('#c0c2c8', 'aluminum'))
      ring.position.z = (p.thin ? 3.6 : 5.6) * MM
      b.root.add(pk, ring)
      return b.done({ front: new THREE.Vector3(0.2, 0.2, 2) })
    }
  }
}

export function buildRig(input: RigInput): DeviceRig {
  switch (input.visual.kind) {
    case 'phone':
      return buildPhone(input)
    case 'tablet':
      return buildTablet(input)
    case 'laptop':
      return buildLaptop(input)
    case 'imac':
      return buildImac(input)
    case 'display':
      return buildDisplay(input)
    case 'box':
      return buildBox(input)
    case 'tower':
      return buildTower(input)
    case 'watch':
      return buildWatch(input)
    case 'earbuds':
      return buildEarbuds(input)
    case 'headphones':
      return buildHeadphones(input)
    case 'speaker':
      return buildSpeaker(input)
    case 'headset':
      return buildHeadset(input)
    default:
      return buildAccessory(input)
  }
}
