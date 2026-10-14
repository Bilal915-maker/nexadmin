/**
 * Matériaux PBR neutres. La teinte appliquée aux appareils provient exclusivement
 * de l'approximation de la couleur officielle (jamais des couleurs du thème du site).
 */
import * as THREE from 'three'

export type Finish = 'aluminum' | 'steel' | 'titanium' | 'glass' | 'matte-glass' | 'plastic' | 'fabric' | 'ceramic'

export function finishMaterial(hex: string, finish: Finish): THREE.MeshPhysicalMaterial {
  const color = new THREE.Color(hex)
  const base: THREE.MeshPhysicalMaterialParameters = { color }
  switch (finish) {
    case 'steel':
      return new THREE.MeshPhysicalMaterial({ ...base, metalness: 1, roughness: 0.14, clearcoat: 0.4 })
    case 'titanium':
      return new THREE.MeshPhysicalMaterial({ ...base, metalness: 0.95, roughness: 0.42 })
    case 'glass':
      return new THREE.MeshPhysicalMaterial({ ...base, metalness: 0.15, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05 })
    case 'matte-glass':
      return new THREE.MeshPhysicalMaterial({ ...base, metalness: 0.1, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.5 })
    case 'plastic':
      return new THREE.MeshPhysicalMaterial({ ...base, metalness: 0, roughness: 0.35, clearcoat: 0.6, clearcoatRoughness: 0.2 })
    case 'fabric':
      return new THREE.MeshPhysicalMaterial({ ...base, metalness: 0, roughness: 0.95, sheen: 1, sheenRoughness: 0.8, sheenColor: color.clone().offsetHSL(0, 0, 0.15) })
    case 'ceramic':
      return new THREE.MeshPhysicalMaterial({ ...base, metalness: 0, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.08 })
    case 'aluminum':
    default:
      return new THREE.MeshPhysicalMaterial({ ...base, metalness: 0.85, roughness: 0.34 })
  }
}

let screenTexture: THREE.CanvasTexture | null = null

/** Écran éteint/veille : dégradé neutre (pas de couleur de marque). */
export function screenMaterial(): THREE.MeshPhysicalMaterial {
  if (!screenTexture && typeof document !== 'undefined') {
    const c = document.createElement('canvas')
    c.width = 256
    c.height = 512
    const g = c.getContext('2d')!
    const grad = g.createLinearGradient(0, 0, 256, 512)
    grad.addColorStop(0, '#16171c')
    grad.addColorStop(0.55, '#0a0a0d')
    grad.addColorStop(1, '#101115')
    g.fillStyle = grad
    g.fillRect(0, 0, 256, 512)
    screenTexture = new THREE.CanvasTexture(c)
    screenTexture.colorSpace = THREE.SRGBColorSpace
  }
  return new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    map: screenTexture ?? undefined,
    metalness: 0,
    roughness: 0.32,
    clearcoat: 0.55,
    clearcoatRoughness: 0.28,
    envMapIntensity: 0.35,
    emissive: new THREE.Color('#0d0e12'),
  })
}

export const darkMaterial = () => new THREE.MeshPhysicalMaterial({ color: '#0d0d10', metalness: 0.2, roughness: 0.5 })
export const lensGlass = () =>
  new THREE.MeshPhysicalMaterial({ color: '#06070a', metalness: 0.4, roughness: 0.05, clearcoat: 1, iridescence: 0.4, iridescenceIOR: 1.6 })
export const ringMetal = () => new THREE.MeshPhysicalMaterial({ color: '#9a9ca4', metalness: 1, roughness: 0.25 })
export const neutralBand = () => new THREE.MeshPhysicalMaterial({ color: '#2c2d32', metalness: 0, roughness: 0.85 })
export const whitePlastic = () => finishMaterial('#f1f1f1', 'plastic')
export const internalMaterial = (hex: string) => new THREE.MeshPhysicalMaterial({ color: hex, metalness: 0.3, roughness: 0.6, transparent: true, opacity: 0.92 })

export function isLight(hex: string): boolean {
  const c = new THREE.Color(hex)
  const hsl = { h: 0, s: 0, l: 0 }
  c.getHSL(hsl)
  return hsl.l > 0.55
}
