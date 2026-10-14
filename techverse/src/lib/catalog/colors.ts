/**
 * Regroupement des couleurs officielles par teinte approximative,
 * calculée à partir de l'approximation hexadécimale (usage : filtre « Teinte »).
 * Le nom officiel reste la référence ; la teinte n'est qu'une aide de navigation.
 */
export const TONES = [
  { id: 'noir', label: 'Noir', swatch: '#1d1d1f' },
  { id: 'gris', label: 'Gris', swatch: '#6b6c70' },
  { id: 'argent', label: 'Argent / blanc', swatch: '#e6e7e9' },
  { id: 'or', label: 'Or / beige', swatch: '#e6cfb0' },
  { id: 'rose', label: 'Rose', swatch: '#efc2c8' },
  { id: 'rouge', label: 'Rouge', swatch: '#b3142c' },
  { id: 'orange', label: 'Orange / bronze', swatch: '#e2843f' },
  { id: 'jaune', label: 'Jaune', swatch: '#f2d65c' },
  { id: 'vert', label: 'Vert', swatch: '#6a9a78' },
  { id: 'bleu', label: 'Bleu', swatch: '#5d84a8' },
  { id: 'violet', label: 'Violet', swatch: '#9283c0' },
] as const

export type ToneId = (typeof TONES)[number]['id']

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const n = parseInt(hex.slice(1), 16)
  const r = ((n >> 16) & 255) / 255
  const g = ((n >> 8) & 255) / 255
  const b = (n & 255) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  let h = 0
  let s = 0
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
    else if (max === g) h = (b - r) / d + 2
    else h = (r - g) / d + 4
    h *= 60
  }
  return { h, s, l }
}

export function toneOf(hex: string, name = ''): ToneId {
  const n = name.toLowerCase()
  if (/red\b|\(product\)red|burgundy/.test(n)) return 'rouge'
  if (/gold|starlight|champagne|desert|citrus|light gold/.test(n) && !/rose gold/.test(n)) return 'or'
  if (/rose gold|pink|blush|coral/.test(n)) return n.includes('coral') ? 'orange' : 'rose'
  const { h, s, l } = hexToHsl(hex)
  if (l < 0.17) return 'noir'
  if (s < 0.12 || (s < 0.2 && l > 0.75)) {
    if (l > 0.82) return 'argent'
    return l < 0.32 ? 'noir' : 'gris'
  }
  if (l > 0.9) return 'argent'
  if (h < 15 || h >= 345) return l > 0.7 ? 'rose' : 'rouge'
  if (h < 40) return s > 0.45 && l < 0.75 ? 'orange' : 'or'
  if (h < 65) return l > 0.8 && s < 0.6 ? 'or' : 'jaune'
  if (h < 170) return 'vert'
  if (h < 250) return 'bleu'
  if (h < 300) return 'violet'
  return 'rose'
}

export function contrastText(hex: string): string {
  return hexToHsl(hex).l > 0.6 ? '#05050a' : '#ffffff'
}
