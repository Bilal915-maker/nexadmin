import type { LifecycleStatus, Price, ValidationStatus } from './catalog/types'

const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

/** « 16 septembre 2016 » ou « avril 2026 » pour une date partielle. */
export function formatDate(iso?: string): string {
  if (!iso) return 'Non documentée'
  const [y, m, d] = iso.split('-')
  const month = MONTHS[Number(m) - 1]
  if (!month) return iso
  return d ? `${Number(d)} ${month} ${y}` : `${month} ${y}`
}

export function yearOf(iso?: string): number | undefined {
  return iso ? Number(iso.slice(0, 4)) : undefined
}

export function formatStorage(gb: number): string {
  return gb >= 1024 ? `${(gb / 1024).toLocaleString('fr-FR')} To` : `${gb} Go`
}

export function formatPrice(p: Pick<Price, 'amount' | 'currency'>): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: p.currency,
    maximumFractionDigits: p.amount % 1 === 0 ? 0 : 2,
  }).format(p.amount)
}

export function formatMm(v?: number): string {
  return v == null ? '—' : `${v.toLocaleString('fr-FR')} mm`
}

export function formatWeight(g?: number): string {
  if (g == null) return '—'
  return g >= 1000 ? `${(g / 1000).toLocaleString('fr-FR', { maximumFractionDigits: 2 })} kg` : `${g.toLocaleString('fr-FR')} g`
}

export function formatInches(v?: number): string {
  return v == null ? '—' : `${v.toLocaleString('fr-FR')} pouces`
}

export const LIFECYCLE_LABEL: Record<LifecycleStatus, string> = {
  current: 'Commercialisé',
  discontinued: 'Arrêté',
  announced: 'Annoncé',
}

export const VALIDATION_LABEL: Record<ValidationStatus, string> = {
  confirmed: 'Vérifié',
  reported: 'Rapporté (presse)',
  unverified: 'À vérifier',
}

export const VALIDATION_HELP: Record<ValidationStatus, string> = {
  confirmed: 'Confronté manuellement à la source officielle citée.',
  reported: 'Issu de sources secondaires (presse) ; fiche officielle non consultée.',
  unverified: 'Saisi d’après la base éditoriale ; doit être confronté à la source citée.',
}

export const SOURCE_TYPE_LABEL: Record<string, string> = {
  'apple-specs': 'Fiche technique Apple',
  'apple-support': 'Assistance Apple',
  'apple-newsroom': 'Communiqué Apple',
  press: 'Presse',
  encyclopedia: 'Encyclopédie',
  retailer: 'Revendeur',
}
