/**
 * Calcul des silhouettes 2D (SVG) à partir des dimensions réelles et des paramètres
 * de représentation. Unité : millimètre. Représentation schématique, pas un rendu exact.
 */
import type { ProductModel } from '@/lib/catalog/types'

export type SilhouetteView = 'front' | 'back'

export interface Shape {
  /** Élément SVG : rect | circle | ellipse | path | line */
  el: 'rect' | 'circle' | 'ellipse' | 'path' | 'line'
  attrs: Record<string, string | number>
  /** 'body' = teinte du produit ; sinon couleur fixe */
  paint: 'body' | 'body-dark' | 'body-light' | 'screen' | 'glass' | 'metal' | 'dark' | 'band' | 'line' | 'lens' | 'none'
}

export interface Silhouette {
  width: number
  height: number
  shapes: Shape[]
}

const rr = (x: number, y: number, w: number, h: number, r: number, paint: Shape['paint']): Shape => ({
  el: 'rect',
  attrs: { x, y, width: w, height: h, rx: Math.min(r, w / 2, h / 2) },
  paint,
})
const circ = (cx: number, cy: number, r: number, paint: Shape['paint']): Shape => ({ el: 'circle', attrs: { cx, cy, r }, paint })
const path = (d: string, paint: Shape['paint']): Shape => ({ el: 'path', attrs: { d }, paint })

type P = Record<string, string | number | boolean>

function dims(m: ProductModel) {
  const d = m.dimensions.find((x) => x.heightMm && x.widthMm) ?? m.dimensions[0] ?? {}
  return { h: d.heightMm, w: d.widthMm, d: d.depthMm }
}

function lens(cx: number, cy: number, r: number): Shape[] {
  return [circ(cx, cy, r, 'metal'), circ(cx, cy, r * 0.72, 'lens'), circ(cx - r * 0.2, cy - r * 0.2, r * 0.16, 'glass')]
}

function phoneBack(w: number, h: number, p: P): Shape[] {
  const corner = Number(p.corner ?? 10)
  const s: Shape[] = [rr(0, 0, w, h, corner, 'body')]
  const cams = String(p.cams ?? 'single')
  const u = w / 70 // échelle relative à un téléphone de 70 mm de large
  const ox = 8 * u
  const oy = 8 * u
  const plate = (pw: number, ph: number, pr: number) => s.push(rr(ox, oy, pw * u, ph * u, pr * u, 'body-dark'))
  switch (cams) {
    case 'single-flat':
      s.push(...lens(ox + 4 * u, oy + 3 * u, 2.6 * u))
      break
    case 'single':
    case 'single-flat-big':
      s.push(...lens(ox + 5 * u, oy + 5 * u, cams === 'single' ? 4 * u : 4.6 * u))
      break
    case 'single-square':
      plate(15, 15, 4.5)
      s.push(...lens(ox + 7.5 * u, oy + 7.5 * u, 4.6 * u))
      break
    case 'dual-h':
      plate(22, 10, 5)
      s.push(...lens(ox + 5.5 * u, oy + 5 * u, 3.8 * u), ...lens(ox + 16 * u, oy + 5 * u, 3.8 * u))
      break
    case 'dual-v':
      plate(10, 22, 5)
      s.push(...lens(ox + 5 * u, oy + 5.5 * u, 3.8 * u), ...lens(ox + 5 * u, oy + 16.5 * u, 3.8 * u))
      break
    case 'dual-square':
    case 'dual-v-square':
      plate(26, 26, 7)
      s.push(...lens(ox + 7.5 * u, oy + 7.5 * u, 5 * u), ...lens(ox + 7.5 * u, oy + 18.5 * u, 5 * u))
      break
    case 'dual-diag':
      plate(28, 28, 8)
      s.push(...lens(ox + 8 * u, oy + 8 * u, 5.6 * u), ...lens(ox + 20 * u, oy + 20 * u, 5.6 * u))
      break
    case 'dual-v-pill':
      s.push(rr(ox, oy, 13 * u, 30 * u, 6.5 * u, 'body-dark'))
      s.push(...lens(ox + 6.5 * u, oy + 7.5 * u, 5 * u), ...lens(ox + 6.5 * u, oy + 22.5 * u, 5 * u))
      break
    case 'triple':
      plate(28, 28, 8)
      s.push(...lens(ox + 8 * u, oy + 8 * u, 5.2 * u), ...lens(ox + 8 * u, oy + 20 * u, 5.2 * u), ...lens(ox + 20 * u, oy + 14 * u, 5.2 * u))
      break
    case 'triple-large':
      plate(34, 34, 9)
      s.push(...lens(ox + 9.5 * u, oy + 9.5 * u, 6.6 * u), ...lens(ox + 9.5 * u, oy + 24.5 * u, 6.6 * u), ...lens(ox + 24.5 * u, oy + 17 * u, 6.6 * u))
      break
    case 'air-plateau':
      s.push(rr(4 * u, 6 * u, w - 8 * u, 18 * u, 9 * u, 'body-dark'))
      s.push(...lens(16 * u, 15 * u, 6 * u))
      break
    case 'pro-plateau':
      s.push(rr(0, 0, w, 40 * u, corner, 'body-dark'))
      s.push(...lens(13 * u, 11 * u, 6.4 * u), ...lens(13 * u, 28 * u, 6.4 * u), ...lens(29 * u, 19.5 * u, 6.4 * u))
      break
    default:
      s.push(...lens(ox + 5 * u, oy + 5 * u, 4 * u))
  }
  // logo discret
  s.push(circ(w / 2, h * 0.47, 5 * u, 'body-light'))
  return s
}

function phoneFront(w: number, h: number, p: P): Shape[] {
  const corner = Number(p.corner ?? 10)
  const front = String(p.front ?? 'island')
  const u = w / 70
  const s: Shape[] = [rr(0, 0, w, h, corner, 'body')]
  if (front === 'home') {
    s.push(rr(3 * u, 3 * u, w - 6 * u, h - 6 * u, Math.max(corner - 2, 2), 'dark'))
    s.push(rr(4 * u, 17 * u, w - 8 * u, h - 34 * u, 1, 'screen'))
    s.push(circ(w / 2, h - 8.5 * u, 5 * u, 'metal'), circ(w / 2, h - 8.5 * u, 4.2 * u, 'dark'))
  } else {
    s.push(rr(2.2 * u, 2.2 * u, w - 4.4 * u, h - 4.4 * u, corner - 1.5, 'screen'))
    if (front === 'notch') s.push(rr(w / 2 - 17 * u, 1.6 * u, 34 * u, 5.4 * u, 2.5 * u, 'dark'))
    if (front === 'island') s.push(rr(w / 2 - 9 * u, 5 * u, 18 * u, 5 * u, 2.5 * u, 'dark'))
  }
  return s
}

function tablet(w: number, h: number, p: P, view: SilhouetteView): Shape[] {
  const corner = Number(p.corner ?? 10)
  const s: Shape[] = [rr(0, 0, w, h, corner, 'body')]
  const u = w / 170
  if (view === 'back') {
    const cams = String(p.cams ?? 'single')
    if (cams.startsWith('dual')) {
      s.push(rr(8 * u, 8 * u, 26 * u, 26 * u, 7 * u, 'body-dark'))
      s.push(...lens(14.5 * u, 14.5 * u, 4.6 * u), ...lens(14.5 * u, 27 * u, 4.6 * u))
    } else if (cams === 'single-square') {
      s.push(rr(8 * u, 8 * u, 16 * u, 16 * u, 5 * u, 'body-dark'), ...lens(16 * u, 16 * u, 4.6 * u))
    } else {
      s.push(...lens(12 * u, 12 * u, 4.4 * u))
    }
    s.push(circ(w / 2, h / 2, 10 * u, 'body-light'))
    return s
  }
  const bezel = String(p.bezel) === 'wide' ? 17 * u : String(p.bezel) === 'medium' ? 11 * u : 7 * u
  const side = String(p.bezel) === 'wide' ? 12 * u : bezel
  s.push(rr(side, bezel, w - 2 * side, h - 2 * bezel, String(p.bezel) === 'slim' ? corner * 0.6 : 2, 'screen'))
  if (p.home) s.push(circ(w / 2, h - bezel / 2, 5 * u, 'dark'))
  return s
}

function laptop(w: number, p: P): Silhouette {
  const lidH = w * 0.64
  const baseH = Math.max(6, w * 0.035)
  const h = lidH + baseH
  const s: Shape[] = [rr(w * 0.02, 0, w * 0.96, lidH, 10, 'body')]
  const inset = w * 0.035
  s.push(rr(w * 0.02 + 3, 3, w * 0.96 - 6, lidH - 6, 8, 'dark'))
  s.push(rr(w * 0.02 + inset, inset, w * 0.96 - inset * 2, lidH - inset * 1.7, 2, 'screen'))
  if (p.notch) s.push(rr(w / 2 - w * 0.035, 3, w * 0.07, inset, 3, 'dark'))
  s.push(path(`M0 ${lidH} L${w} ${lidH} L${w * 0.985} ${h} L${w * 0.015} ${h} Z`, 'body'))
  s.push(rr(w * 0.42, lidH, w * 0.16, baseH * 0.35, 2, 'body-dark'))
  return { width: w, height: h, shapes: s }
}

function imac(w: number, h: number, p: P): Silhouette {
  const panelH = w * (Number(p.size) === 24 ? 0.69 : 0.75)
  const s: Shape[] = []
  const standTop = panelH
  // pied
  s.push(path(`M${w * 0.38} ${standTop} L${w * 0.62} ${standTop} L${w * 0.6} ${h - 4} L${w * 0.4} ${h - 4} Z`, Number(p.size) === 24 ? 'body' : 'metal'))
  s.push(rr(w * 0.33, h - 6, w * 0.34, 6, 2, Number(p.size) === 24 ? 'body' : 'metal'))
  s.push(rr(0, 0, w, panelH, 14, p.colorChin ? 'body-light' : p.dark ? 'body' : 'metal'))
  const chin = p.colorChin ? panelH * 0.16 : panelH * 0.2
  s.push(rr(0, panelH - chin, w, chin, 14, 'body'))
  s.push(rr(w * 0.025, w * 0.025, w * 0.95, panelH - chin - w * 0.03, 3, 'screen'))
  return { width: w, height: h, shapes: s }
}

function box(w: number, h: number, p: P): Shape[] {
  const shape = String(p.shape)
  const s: Shape[] = [rr(0, 0, w, h, shape === 'mini' ? h * 0.25 : shape.startsWith('tv') ? h * 0.35 : h * 0.2, 'body')]
  if (shape === 'studio') {
    s.push(rr(w * 0.1, h * 0.55, w * 0.06, h * 0.08, 2, 'dark'), rr(w * 0.2, h * 0.55, w * 0.06, h * 0.08, 2, 'dark'), rr(w * 0.32, h * 0.53, w * 0.12, h * 0.12, 2, 'dark'))
  } else if (shape === 'mini2024') {
    s.push(rr(w * 0.2, h * 0.45, w * 0.06, h * 0.12, 2, 'dark'), rr(w * 0.3, h * 0.45, w * 0.06, h * 0.12, 2, 'dark'), circ(w * 0.8, h * 0.52, h * 0.06, 'dark'))
  } else {
    s.push(rr(w * 0.06, h * 0.82, w * 0.88, h * 0.06, 2, 'body-dark'))
  }
  return s
}

function tower(w: number, h: number): Shape[] {
  const s: Shape[] = [rr(0, 0, w, h, 16, 'body')]
  s.push(rr(w * 0.08, -h * 0.04, w * 0.84, h * 0.08, 12, 'metal'), rr(w * 0.08, h * 0.96, w * 0.84, h * 0.08, 12, 'metal'))
  const r = w / 22
  for (let y = h * 0.1; y < h * 0.92; y += r * 2.4) {
    for (let x = w * 0.12 + ((Math.round(y / (r * 2.4)) % 2) * r * 1.2); x < w * 0.9; x += r * 2.4) s.push(circ(x, y, r * 0.75, 'body-dark'))
  }
  return s
}

function watch(w: number, h: number, p: P, view: SilhouetteView): Silhouette {
  const bandW = w * 0.82
  const total = h * 2.4
  const top = (total - h) / 2
  const s: Shape[] = [
    rr((w - bandW) / 2, 0, bandW, top + h * 0.2, bandW * 0.12, 'band'),
    rr((w - bandW) / 2, top + h * 0.8, bandW, top + h * 0.2, bandW * 0.12, 'band'),
    rr(0, top, w, h, String(p.shape) === 'ultra' ? w * 0.18 : w * 0.27, 'body'),
  ]
  if (view === 'front') s.push(rr(w * 0.08, top + h * 0.07, w * 0.84, h * 0.86, w * 0.2, 'screen'))
  else s.push(circ(w / 2, top + h / 2, w * 0.33, 'dark'), circ(w / 2, top + h / 2, w * 0.24, 'glass'))
  s.push(rr(w - 1, top + h * 0.22, w * 0.1, h * 0.2, 2, String(p.shape) === 'ultra' ? 'metal' : 'body'))
  if (String(p.shape) === 'ultra') s.push(rr(-w * 0.07, top + h * 0.3, w * 0.08, h * 0.28, 2, 'band'))
  return { width: w * 1.1, height: total, shapes: s }
}

function earbuds(p: P): Silhouette {
  const style = String(p.style)
  if (p.wired) {
    return {
      width: 80,
      height: 110,
      shapes: [
        path('M20 30 C20 70, 40 80, 40 105 M60 30 C60 70, 40 80, 40 105', 'line'),
        { el: 'ellipse', attrs: { cx: 20, cy: 20, rx: 11, ry: 13 }, paint: 'body' },
        { el: 'ellipse', attrs: { cx: 60, cy: 20, rx: 11, ry: 13 }, paint: 'body' },
        rr(36, 70, 8, 18, 3, 'body'),
      ],
    }
  }
  const tall = String(p.case) === 'tall'
  const cw = tall ? 44 : String(p.case) === 'small' ? 50 : 60
  const ch = tall ? 54 : String(p.case) === 'small' ? 46 : 45
  const s: Shape[] = [rr(0, 22, cw, ch, 14, 'body'), { el: 'line', attrs: { x1: 2, y1: 22 + ch * (tall ? 0.3 : 0.35), x2: cw - 2, y2: 22 + ch * (tall ? 0.3 : 0.35) }, paint: 'line' }, circ(cw / 2, 22 + ch * 0.62, 1.4, 'dark')]
  const stem = String(p.stem) === 'long' ? 30 : style === 'pro' ? 16 : 20
  for (const [dx, flip] of [[cw + 10, 1], [cw + 34, -1]] as const) {
    s.push({ el: 'ellipse', attrs: { cx: dx, cy: 14, rx: 9, ry: 11 }, paint: 'body' })
    s.push(rr(dx - 3.2 + flip * 2, 18, 6.4, stem, 3.2, 'body'))
    if (style === 'pro') s.push({ el: 'ellipse', attrs: { cx: dx - flip * 6, cy: 12, rx: 4.5, ry: 6 }, paint: 'body-dark' })
  }
  return { width: cw + 46, height: 22 + ch, shapes: s }
}

function headphones(): Silhouette {
  return {
    width: 170,
    height: 190,
    shapes: [
      path('M20 100 C20 25, 150 25, 150 100', 'metal'),
      path('M30 95 C30 40, 140 40, 140 95', 'band'),
      rr(4, 92, 44, 86, 18, 'body'),
      rr(122, 92, 44, 86, 18, 'body'),
      rr(118, 100, 6, 10, 2, 'metal'),
    ],
  }
}

function speaker(p: P): Silhouette {
  if (String(p.style) === 'mini') {
    const s: Shape[] = [path('M8 30 A44 44 0 1 0 90 30 L90 24 A41 10 0 0 0 8 24 Z', 'body')]
    for (let y = 40; y < 92; y += 7) for (let x = 14 + ((y / 7) % 2) * 3.5; x < 86; x += 7) s.push(circ(x, y, 1.1, 'body-dark'))
    s.push({ el: 'ellipse', attrs: { cx: 49, cy: 24, rx: 41, ry: 9 }, paint: 'body-light' })
    return { width: 98, height: 100, shapes: s }
  }
  const s: Shape[] = [rr(0, 6, 142, 166, 40, 'body')]
  for (let y = 26; y < 160; y += 8) for (let x = 12 + ((y / 8) % 2) * 4; x < 132; x += 8) s.push(circ(x, y, 1.3, 'body-dark'))
  s.push({ el: 'ellipse', attrs: { cx: 71, cy: 10, rx: 62, ry: 9 }, paint: 'body-light' })
  return { width: 142, height: 172, shapes: s }
}

function display(p: P): Silhouette {
  const xdr = String(p.style) === 'xdr'
  const w = xdr ? 718 : 623
  const panelH = xdr ? 412 : 362
  const h = panelH + (xdr ? 120 : 116)
  return {
    width: w,
    height: h,
    shapes: [
      path(`M${w * 0.42} ${panelH} L${w * 0.58} ${panelH} L${w * 0.56} ${h - 8} L${w * 0.44} ${h - 8} Z`, 'metal'),
      rr(w * 0.36, h - 10, w * 0.28, 10, 3, 'metal'),
      rr(0, 0, w, panelH, 12, 'metal'),
      rr(12, 12, w - 24, panelH - 24, 2, 'screen'),
    ],
  }
}

function headset(): Silhouette {
  return {
    width: 190,
    height: 110,
    shapes: [
      path('M10 70 C 10 20, 180 20, 180 70 L 170 100 C 120 108, 70 108, 20 100 Z', 'body'),
      path('M18 68 C 18 30, 172 30, 172 68 L 164 92 C 120 100, 70 100, 26 92 Z', 'glass'),
      rr(0, 58, 14, 26, 6, 'band'),
      rr(176, 58, 14, 26, 6, 'band'),
      circ(176, 30, 6, 'metal'),
    ],
  }
}

function generic(kind: string, p: P): Silhouette {
  switch (kind) {
    case 'pencil':
      return { width: 175, height: 14, shapes: [rr(0, 2, 160, 10, p.flat ? 2 : 5, 'body'), path('M160 2 L175 7 L160 12 Z', 'body-light'), rr(0, 2, 12, 10, 4, p.cap ? 'metal' : 'body')] }
    case 'keyboard': {
      const w = p.numpad ? 418 : p.folio ? 250 : 279
      const h = p.folio ? 180 : 115
      const s: Shape[] = [rr(0, 0, w, h, 12, 'body')]
      const kh = p.folio ? 100 : 100
      for (let r = 0; r < 5; r++) for (let x = 10; x < w - 22; x += 17.5) s.push(rr(x, 10 + r * (kh / 5.2), 15, kh / 6.2, 3, 'body-dark'))
      if (p.trackpad) s.push(rr(w * 0.32, 122, w * 0.36, 50, 6, 'body-light'))
      if (p.touchId) s.push(rr(w - (p.numpad ? 102 : 24), 10, 13, 12, 3, 'dark'))
      return { width: w, height: h, shapes: s }
    }
    case 'mouse':
      return { width: 57, height: 114, shapes: [rr(0, 0, 57, 114, 28, 'body'), { el: 'line', attrs: { x1: 28.5, y1: 10, x2: 28.5, y2: 40 }, paint: 'line' }] }
    case 'trackpad':
      return { width: 160, height: 115, shapes: [rr(0, 0, 160, 115, 12, 'body')] }
    case 'tag':
      return { width: 32, height: 32, shapes: [circ(16, 16, 16, 'metal'), circ(16, 16, 12.5, 'body'), circ(16, 16, 4, 'body-light')] }
    case 'puck':
      return { width: 70, height: 100, shapes: [path('M35 60 C35 80, 50 85, 60 100', 'line'), circ(35, 30, 28, 'metal'), circ(35, 30, 23, 'body')] }
    case 'brick': {
      const sz = Math.min(96, 40 + Number(p.watts ?? 20) * 0.35)
      return { width: sz, height: sz, shapes: [rr(0, 0, sz, sz, sz * 0.18, 'body'), rr(sz / 2 - 6, sz / 2 - 2.5, 12, 5, 2.5, 'dark')] }
    }
    case 'cable':
      return { width: 110, height: 110, shapes: [path('M20 20 C 120 20, 120 90, 55 90 C 0 90, 10 40, 60 45 C 95 48, 90 75, 75 80', 'line'), rr(10, 14, 20, 12, 3, 'body'), rr(70, 75, 20, 12, 3, 'body')] }
    case 'remote':
      return { width: 36, height: 136, shapes: [rr(0, 0, 36, 136, 12, 'body'), circ(18, 24, 13, 'body-dark'), circ(18, 24, 11, 'body-light'), circ(10, 52, 3.4, 'dark'), circ(26, 52, 3.4, 'dark'), circ(10, 64, 3.4, 'dark'), circ(26, 64, 3.4, 'dark')] }
    case 'pack':
      return { width: 96, height: 64, shapes: [rr(0, 0, 96, 64, 14, 'body'), circ(48, 32, 18, 'body-light')] }
    default:
      return { width: 100, height: 100, shapes: [rr(0, 0, 100, 100, 18, 'body')] }
  }
}

export function buildSilhouette(m: ProductModel, view: SilhouetteView = 'back'): Silhouette {
  const { kind, params } = m.visual
  const d = dims(m)
  switch (kind) {
    case 'phone': {
      const h = d.h ?? 147
      const w = d.w ?? 71
      if (params.fold) {
        // Pliable : dos à l'état plié, ou écran intérieur déplié en vue avant
        const corner = Number(params.corner ?? 12)
        if (view === 'back') return { width: w / 2, height: h, shapes: phoneBack(w / 2, h, params) }
        return {
          width: w,
          height: h,
          shapes: [
            rr(0, 0, w, h, corner, 'body'),
            rr(2.4, 2.4, w - 4.8, h - 4.8, corner - 1.5, 'screen'),
            { el: 'line', attrs: { x1: w / 2, y1: 3, x2: w / 2, y2: h - 3 }, paint: 'line' },
          ],
        }
      }
      return { width: w, height: h, shapes: view === 'front' ? phoneFront(w, h, params) : phoneBack(w, h, params) }
    }
    case 'tablet': {
      const h = d.h ?? 247
      const w = d.w ?? 178
      return { width: w, height: h, shapes: tablet(w, h, params, view) }
    }
    case 'laptop':
      return laptop(d.w ?? 304, params)
    case 'imac':
      return imac(d.w ?? 547, d.h ?? 461, params)
    case 'box': {
      const shape = String(params.shape)
      const def = shape === 'mini2024' ? [127, 50] : shape === 'studio' ? [197, 95] : shape.startsWith('tv') ? [98, 35] : [197, 36]
      const w = d.w ?? def[0]
      const h = d.h ?? def[1]
      return { width: w, height: h, shapes: box(w, h, params) }
    }
    case 'tower': {
      const w = d.w ?? 218
      const h = d.h ?? 529
      return { width: w, height: h * 1.04, shapes: tower(w, h) }
    }
    case 'watch': {
      const h = d.h ?? Number(params.size ?? 41)
      const w = d.w ?? h * 0.86
      return watch(w, h, params, view)
    }
    case 'earbuds':
      return earbuds(params)
    case 'headphones':
      return headphones()
    case 'speaker':
      return speaker(params)
    case 'display':
      return display(params)
    case 'headset':
      return headset()
    default:
      return generic(kind, params)
  }
}
