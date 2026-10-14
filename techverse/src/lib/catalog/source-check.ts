/**
 * Vérification assistée des sources : télécharge chaque page citée et cherche
 * des preuves textuelles des valeurs saisies (poids, dimensions, couleurs, puce).
 * Ne marque JAMAIS une fiche « confirmée » : le rapport sert à la revue humaine.
 */
import type { ProductModel } from './types'

export interface Evidence {
  field: string
  expected: string
  found: boolean
}

export interface SourceCheckResult {
  model: string
  url: string
  httpStatus: number | null
  error?: string
  evidence: Evidence[]
}

const norm = (s: string) =>
  s
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .toLowerCase()

/** Variantes d'écriture d'un nombre (152,4 / 152.4 / 152). */
function numberForms(n: number): string[] {
  const s = String(n)
  return [...new Set([s, s.replace('.', ','), Number.isInteger(n) ? s : String(Math.round(n))])]
}

export function expectedValues(m: ProductModel): { field: string; forms: string[]; label: string }[] {
  const out: { field: string; forms: string[]; label: string }[] = []
  const d = m.dimensions[0]
  if (d?.weightG) out.push({ field: 'weightG', label: `${d.weightG} g`, forms: numberForms(d.weightG).flatMap((f) => [`${f} g`, `${f} grams`, `${f}g`]) })
  for (const k of ['heightMm', 'widthMm', 'depthMm'] as const) {
    const v = d?.[k]
    if (v) out.push({ field: k, label: `${v} mm`, forms: numberForms(v).flatMap((f) => [`${f} mm`, `${f}mm`]) })
  }
  for (const c of m.colors) out.push({ field: 'color', label: c.name, forms: [c.name.toLowerCase().replace(/\s+(aluminum|stainless steel|titanium)$/, '')] })
  for (const ch of m.chips) out.push({ field: 'chip', label: ch, forms: [ch.toLowerCase().replace(/\s*\(.+\)$/, '')] })
  return out
}

export function findEvidence(html: string, m: ProductModel): Evidence[] {
  const text = norm(html)
  return expectedValues(m).map((e) => ({ field: e.field, expected: e.label, found: e.forms.some((f) => text.includes(f.toLowerCase())) }))
}

export async function checkSource(m: ProductModel, url: string, fetchImpl: typeof fetch = fetch, timeoutMs = 15000): Promise<SourceCheckResult> {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetchImpl(url, { signal: ctrl.signal, headers: { 'User-Agent': 'TECHVERSE-source-check/1.0', 'Accept-Language': 'en-US,en;q=0.8' }, redirect: 'follow' })
    const html = res.ok ? await res.text() : ''
    return { model: m.slug, url, httpStatus: res.status, evidence: res.ok ? findEvidence(html, m) : [] }
  } catch (e) {
    return { model: m.slug, url, httpStatus: null, error: (e as Error).message, evidence: [] }
  } finally {
    clearTimeout(t)
  }
}
