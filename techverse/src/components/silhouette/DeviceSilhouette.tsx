import type { ProductModel } from '@/lib/catalog/types'
import { buildSilhouette, type Shape, type SilhouetteView } from './geometry'

function shade(hex: string, amount: number): string {
  const n = parseInt(hex.slice(1), 16)
  const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + (amount > 0 ? (255 - v) * amount : v * amount))))
  const r = ch((n >> 16) & 255)
  const g = ch((n >> 8) & 255)
  const b = ch(n & 255)
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

function paintOf(p: Shape['paint'], hex: string): { fill: string; stroke?: string; strokeWidth?: number; opacity?: number } {
  switch (p) {
    case 'body':
      return { fill: hex, stroke: 'rgba(255,255,255,0.22)', strokeWidth: 1 }
    case 'body-dark':
      return { fill: shade(hex, -0.18), stroke: 'rgba(0,0,0,0.25)', strokeWidth: 0.8 }
    case 'body-light':
      return { fill: shade(hex, 0.18), opacity: 0.55 }
    case 'screen':
      return { fill: '#0b0b10', stroke: 'rgba(255,255,255,0.06)', strokeWidth: 1 }
    case 'glass':
      return { fill: 'rgba(255,255,255,0.32)' }
    case 'metal':
      return { fill: '#a7a9b1', stroke: 'rgba(0,0,0,0.2)', strokeWidth: 0.6 }
    case 'dark':
      return { fill: '#111115' }
    case 'band':
      return { fill: '#2d2e33' }
    case 'lens':
      return { fill: '#0b0d12' }
    case 'line':
      return { fill: 'none', stroke: '#8a8c9a', strokeWidth: 2 }
    default:
      return { fill: 'none' }
  }
}

export interface DeviceSilhouetteProps {
  model: ProductModel
  colorIndex?: number
  view?: SilhouetteView
  /** 'fit' : remplit le conteneur ; nombre : pixels par millimètre (échelle réelle) */
  scale?: 'fit' | number
  className?: string
  title?: string
}

export function DeviceSilhouette({ model, colorIndex = 0, view = 'back', scale = 'fit', className, title }: DeviceSilhouetteProps) {
  const sil = buildSilhouette(model, view)
  const hex = model.colors[colorIndex]?.hex ?? model.colors[0]?.hex ?? '#a7a9b1'
  const pad = Math.max(sil.width, sil.height) * 0.04
  const vb = `${-pad} ${-pad} ${sil.width + pad * 2} ${sil.height + pad * 2}`
  const sizeProps =
    scale === 'fit'
      ? { width: '100%', height: '100%', preserveAspectRatio: 'xMidYMid meet' }
      : { width: (sil.width + pad * 2) * scale, height: (sil.height + pad * 2) * scale }
  const label = title ?? `Représentation schématique : ${model.name}${model.colors[colorIndex] ? `, ${model.colors[colorIndex].name}` : ''}`
  return (
    <svg viewBox={vb} {...sizeProps} className={className} role="img" aria-label={label}>
      <title>{label}</title>
      {sil.shapes.map((s, i) => {
        const p = paintOf(s.paint, hex)
        const common = {
          fill: p.fill,
          stroke: p.stroke,
          strokeWidth: p.strokeWidth,
          opacity: p.opacity,
          vectorEffect: 'non-scaling-stroke' as const,
          strokeLinecap: 'round' as const,
        }
        switch (s.el) {
          case 'rect':
            return <rect key={i} {...common} {...s.attrs} ry={s.attrs.rx} />
          case 'circle':
            return <circle key={i} {...common} {...s.attrs} />
          case 'ellipse':
            return <ellipse key={i} {...common} {...s.attrs} />
          case 'line':
            return <line key={i} {...common} {...s.attrs} />
          default:
            return <path key={i} {...common} {...s.attrs} />
        }
      })}
    </svg>
  )
}
