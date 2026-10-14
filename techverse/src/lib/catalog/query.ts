/**
 * Requêtes pures sur le catalogue : navigation, facettes, filtres, recherche, comparaison.
 * Aucune dépendance au mode de stockage (fichiers ou base) : tout travaille sur l'objet Catalog.
 */
import { formatDate, formatInches, formatMm, formatPrice, formatStorage, formatWeight, LIFECYCLE_LABEL } from '../format'
import { TONES, toneOf, type ToneId } from './colors'
import type { Catalog, FamilySlug, LifecycleStatus, ProductFamily, ProductGeneration, ProductModel, SpecGroupId } from './types'
import { SPEC_GROUP_LABELS } from './types'

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const familyBySlug = (c: Catalog, slug: string): ProductFamily | undefined => c.families.find((f) => f.slug === slug)
export const modelBySlug = (c: Catalog, slug: string): ProductModel | undefined => c.models.find((m) => m.slug === slug)
export const generationBySlug = (c: Catalog, slug: string): ProductGeneration | undefined =>
  c.generations.find((g) => g.slug === slug)

export function releaseKey(m: ProductModel): string {
  return m.released ?? m.announced ?? '9999'
}

export function modelYear(m: ProductModel): number | undefined {
  const d = m.released ?? m.announced
  return d ? Number(d.slice(0, 4)) : undefined
}

export function sortByRelease(models: ProductModel[], dir: 'asc' | 'desc' = 'asc'): ProductModel[] {
  return [...models].sort((a, b) => {
    const r = releaseKey(a).localeCompare(releaseKey(b)) || a.name.localeCompare(b.name, 'fr')
    return dir === 'asc' ? r : -r
  })
}

export function modelsByFamily(c: Catalog, family: string): ProductModel[] {
  return sortByRelease(c.models.filter((m) => m.family === family))
}

export function generationsByFamily(c: Catalog, family: string): (ProductGeneration & { models: ProductModel[] })[] {
  return c.generations
    .filter((g) => g.family === family)
    .map((g) => ({ ...g, models: sortByRelease(c.models.filter((m) => m.generation === g.slug)) }))
    .filter((g) => g.models.length > 0)
    .sort((a, b) => a.year - b.year || releaseKey(a.models[0]).localeCompare(releaseKey(b.models[0])))
}

export function siblings(c: Catalog, m: ProductModel): ProductModel[] {
  return sortByRelease(c.models.filter((x) => x.generation === m.generation && x.slug !== m.slug))
}

/** Modèle précédent / suivant dans la même gamme (ligne de produit). */
export function lineNeighbours(c: Catalog, m: ProductModel): { prev?: ProductModel; next?: ProductModel } {
  const line = sortByRelease(c.models.filter((x) => x.family === m.family && x.line === m.line))
  const i = line.findIndex((x) => x.slug === m.slug)
  return { prev: i > 0 ? line[i - 1] : undefined, next: i >= 0 && i < line.length - 1 ? line[i + 1] : undefined }
}

export function lineName(c: Catalog, family: string, line: string): string {
  return familyBySlug(c, family)?.lines.find((l) => l.slug === line)?.name ?? line
}

export function latestReleases(c: Catalog, count: number, refDate: string): ProductModel[] {
  return sortByRelease(
    c.models.filter((m) => m.released && m.released <= refDate),
    'desc',
  ).slice(0, count)
}

export function upcoming(c: Catalog, refDate: string): ProductModel[] {
  return sortByRelease(c.models.filter((m) => m.status === 'announced' || (m.released && m.released > refDate)))
}

/** Gammes dont plus aucun modèle n'est commercialisé (iPod, MacBook 12", iPhone mini…). */
export function retiredLines(c: Catalog): { family: ProductFamily; line: string; name: string; models: ProductModel[] }[] {
  const out: { family: ProductFamily; line: string; name: string; models: ProductModel[] }[] = []
  for (const f of c.families) {
    for (const l of f.lines) {
      const ms = c.models.filter((m) => m.family === f.slug && m.line === l.slug)
      if (ms.length && ms.every((m) => m.status === 'discontinued')) {
        out.push({ family: f, line: l.slug, name: l.name, models: sortByRelease(ms) })
      }
    }
  }
  return out
}

export function timeline(c: Catalog): { year: number; models: ProductModel[] }[] {
  const byYear = new Map<number, ProductModel[]>()
  for (const m of c.models) {
    const y = modelYear(m)
    if (!y) continue
    byYear.set(y, [...(byYear.get(y) ?? []), m])
  }
  return [...byYear.entries()].sort(([a], [b]) => a - b).map(([year, models]) => ({ year, models: sortByRelease(models) }))
}

export function stats(c: Catalog) {
  const colors = c.models.reduce((n, m) => n + m.colors.length, 0)
  const sources = new Set(c.models.flatMap((m) => m.sources.map((s) => s.url)).concat(c.families.flatMap((f) => f.sources.map((s) => s.url))))
  const years = c.models.map(modelYear).filter((y): y is number => !!y)
  return {
    families: c.families.length,
    generations: c.generations.filter((g) => c.models.some((m) => m.generation === g.slug)).length,
    models: c.models.length,
    colors,
    sources: sources.size,
    firstYear: Math.min(...years),
    lastYear: Math.max(...years),
    byValidation: {
      confirmed: c.models.filter((m) => m.validation.status === 'confirmed').length,
      reported: c.models.filter((m) => m.validation.status === 'reported').length,
      unverified: c.models.filter((m) => m.validation.status === 'unverified').length,
    },
    byStatus: {
      current: c.models.filter((m) => m.status === 'current').length,
      discontinued: c.models.filter((m) => m.status === 'discontinued').length,
      announced: c.models.filter((m) => m.status === 'announced').length,
    },
  }
}

export function usPrice(m: ProductModel): number | undefined {
  return m.prices.find((p) => p.market === 'US')?.amount
}

// ---------------------------------------------------------------------------
// Facettes et filtres
// ---------------------------------------------------------------------------

export const FACET_IDS = [
  'family',
  'line',
  'year',
  'status',
  'tone',
  'storage',
  'ram',
  'chip',
  'screen',
  'size',
  'connector',
  'connectivity',
  'validation',
] as const
export type FacetId = (typeof FACET_IDS)[number]

export const FACET_LABELS: Record<FacetId, string> = {
  family: 'Famille',
  line: 'Gamme',
  year: 'Année',
  status: 'Statut',
  tone: 'Teinte',
  storage: 'Stockage',
  ram: 'Mémoire vive',
  chip: 'Puce / processeur',
  screen: 'Taille d’écran',
  size: 'Taille de boîtier',
  connector: 'Connecteur',
  connectivity: 'Connectivité',
  validation: 'Fiabilité des données',
}

/** Facettes pertinentes par famille (les filtres s'adaptent à la catégorie). */
export const FAMILY_FACETS: Record<FamilySlug | 'all', FacetId[]> = {
  all: ['family', 'year', 'status', 'tone', 'storage', 'chip', 'validation'],
  iphone: ['line', 'year', 'status', 'tone', 'storage', 'chip', 'screen', 'connector', 'validation'],
  ipad: ['line', 'year', 'status', 'tone', 'storage', 'ram', 'chip', 'screen', 'connectivity', 'connector', 'validation'],
  mac: ['line', 'year', 'status', 'tone', 'chip', 'ram', 'storage', 'screen', 'validation'],
  'apple-watch': ['line', 'year', 'status', 'tone', 'size', 'chip', 'connectivity', 'validation'],
  'airpods-audio': ['line', 'year', 'status', 'tone', 'connector', 'chip', 'validation'],
  'ecrans-peripheriques': ['line', 'year', 'status', 'connector', 'validation'],
  'tv-maison': ['line', 'year', 'status', 'tone', 'chip', 'validation'],
  accessoires: ['line', 'year', 'status', 'connector', 'validation'],
  vision: ['year', 'status', 'storage', 'chip', 'validation'],
  autres: ['line', 'year', 'status', 'tone', 'validation'],
}

function chipFamily(chip: string): string {
  if (/^Intel/i.test(chip)) return chip.replace(/^Intel\s+/i, 'Intel ').replace(/\s+\(.+\)$/, '')
  return chip.replace(/\s*\(.+\)$/, '')
}

/** Valeurs d'une facette pour un modèle (identifiants stables + libellés). */
export function facetValuesOf(m: ProductModel, facet: FacetId, c: Catalog): { value: string; label: string }[] {
  switch (facet) {
    case 'family':
      return [{ value: m.family, label: familyBySlug(c, m.family)?.name ?? m.family }]
    case 'line':
      return [{ value: m.line, label: lineName(c, m.family, m.line) }]
    case 'year': {
      const y = modelYear(m)
      return y ? [{ value: String(y), label: String(y) }] : []
    }
    case 'status':
      return [{ value: m.status, label: LIFECYCLE_LABEL[m.status] }]
    case 'tone': {
      const tones = new Set(m.colors.map((col) => toneOf(col.hex, col.name)))
      return [...tones].map((t) => ({ value: t, label: TONES.find((x) => x.id === t)!.label }))
    }
    case 'storage':
      return m.storageGB.map((s) => ({ value: String(s), label: formatStorage(s) }))
    case 'ram':
      return m.ramGB.map((r) => ({ value: String(r), label: `${r} Go` }))
    case 'chip':
      return [...new Set(m.chips.map(chipFamily))].map((ch) => ({ value: ch, label: ch }))
    case 'screen':
      return m.screenInches ? [{ value: String(m.screenInches), label: formatInches(m.screenInches) }] : []
    case 'size':
      return m.sizes.map((s) => ({ value: s, label: s }))
    case 'connector': {
      if (!m.connector) return []
      const k = /thunderbolt 5/i.test(m.connector)
        ? 'Thunderbolt 5'
        : /thunderbolt|usb 4/i.test(m.connector)
          ? 'Thunderbolt'
          : /usb-c/i.test(m.connector)
            ? 'USB-C'
            : /lightning/i.test(m.connector)
              ? 'Lightning'
              : /magsafe/i.test(m.connector)
                ? 'MagSafe'
                : /smart connector/i.test(m.connector)
                  ? 'Smart Connector'
                  : 'Autre'
      return [{ value: k, label: k }]
    }
    case 'connectivity':
      return m.connectivity.map((x) => ({ value: x, label: x }))
    case 'validation':
      return [
        {
          value: m.validation.status,
          label: m.validation.status === 'confirmed' ? 'Vérifié' : m.validation.status === 'reported' ? 'Rapporté (presse)' : 'À vérifier',
        },
      ]
  }
}

export interface FacetOption {
  value: string
  label: string
  count: number
}

function sortOptions(facet: FacetId, opts: FacetOption[]): FacetOption[] {
  const numeric = ['year', 'storage', 'ram', 'screen'].includes(facet)
  if (facet === 'tone') return opts.sort((a, b) => TONES.findIndex((t) => t.id === a.value) - TONES.findIndex((t) => t.id === b.value))
  if (facet === 'size') return opts.sort((a, b) => parseFloat(a.value) - parseFloat(b.value))
  return opts.sort((a, b) => (numeric ? Number(a.value) - Number(b.value) : a.label.localeCompare(b.label, 'fr')))
}

export function facetOptions(models: ProductModel[], facet: FacetId, c: Catalog): FacetOption[] {
  const map = new Map<string, FacetOption>()
  for (const m of models) {
    for (const v of facetValuesOf(m, facet, c)) {
      const cur = map.get(v.value)
      if (cur) cur.count++
      else map.set(v.value, { ...v, count: 1 })
    }
  }
  return sortOptions(facet, [...map.values()])
}

export interface Filters {
  q?: string
  facets: Partial<Record<FacetId, string[]>>
  priceMin?: number
  priceMax?: number
  sort?: 'release-desc' | 'release-asc' | 'name' | 'price-asc' | 'price-desc' | 'relevance'
}

export function parseFilters(params: Record<string, string | string[] | undefined>): Filters {
  const facets: Filters['facets'] = {}
  for (const f of FACET_IDS) {
    const raw = params[f]
    const values = (Array.isArray(raw) ? raw : raw ? [raw] : []).flatMap((v) => v.split(',')).filter(Boolean)
    if (values.length) facets[f] = values
  }
  const num = (k: string) => {
    const v = params[k]
    const n = typeof v === 'string' && v !== '' ? Number(v) : NaN
    return Number.isFinite(n) ? n : undefined
  }
  const q = typeof params.q === 'string' ? params.q.trim().slice(0, 120) : undefined
  const sort = typeof params.sort === 'string' ? (params.sort as Filters['sort']) : undefined
  return { q: q || undefined, facets, priceMin: num('prixMin'), priceMax: num('prixMax'), sort }
}

export function filtersToQuery(f: Filters): string {
  const sp = new URLSearchParams()
  if (f.q) sp.set('q', f.q)
  for (const [k, v] of Object.entries(f.facets)) if (v?.length) sp.set(k, v.join(','))
  if (f.priceMin != null) sp.set('prixMin', String(f.priceMin))
  if (f.priceMax != null) sp.set('prixMax', String(f.priceMax))
  if (f.sort) sp.set('sort', f.sort)
  const s = sp.toString()
  return s ? `?${s}` : ''
}

export function applyFilters(models: ProductModel[], f: Filters, c: Catalog, excludeFacet?: FacetId): ProductModel[] {
  let out = models
  for (const [facet, values] of Object.entries(f.facets) as [FacetId, string[]][]) {
    if (!values?.length || facet === excludeFacet) continue
    const set = new Set(values)
    out = out.filter((m) => facetValuesOf(m, facet, c).some((v) => set.has(v.value)))
  }
  if (f.priceMin != null || f.priceMax != null) {
    out = out.filter((m) => {
      const p = usPrice(m)
      if (p == null) return false
      return (f.priceMin == null || p >= f.priceMin) && (f.priceMax == null || p <= f.priceMax)
    })
  }
  if (f.q) {
    const scored = scoreModels(out, f.q, c)
    out = scored.map((s) => s.model)
    if (!f.sort || f.sort === 'relevance') return out
  }
  return sortModels(out, f.sort ?? 'release-desc')
}

export function sortModels(models: ProductModel[], sort: NonNullable<Filters['sort']>): ProductModel[] {
  switch (sort) {
    case 'release-asc':
      return sortByRelease(models, 'asc')
    case 'name':
      return [...models].sort((a, b) => a.name.localeCompare(b.name, 'fr', { numeric: true }))
    case 'price-asc':
    case 'price-desc': {
      const dir = sort === 'price-asc' ? 1 : -1
      return [...models].sort((a, b) => {
        const pa = usPrice(a)
        const pb = usPrice(b)
        if (pa == null && pb == null) return 0
        if (pa == null) return 1
        if (pb == null) return -1
        return (pa - pb) * dir
      })
    }
    case 'relevance':
    case 'release-desc':
    default:
      return sortByRelease(models, 'desc')
  }
}

// ---------------------------------------------------------------------------
// Recherche plein texte
// ---------------------------------------------------------------------------

export function normalize(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’'"]/g, ' ')
    .replace(/[^a-z0-9.,+ ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Synonymes français ↔ termes produits pour élargir la recherche. */
const SYNONYMS: Record<string, string[]> = {
  montre: ['watch'],
  ecouteurs: ['airpods', 'earpods'],
  casque: ['max'],
  ordinateur: ['mac', 'macbook'],
  portable: ['macbook'],
  tablette: ['ipad'],
  telephone: ['iphone'],
  enceinte: ['homepod'],
  stylet: ['pencil'],
  clavier: ['keyboard'],
  souris: ['mouse'],
  ecran: ['display'],
  chargeur: ['magsafe', 'adaptateur'],
  cable: ['cable', 'thunderbolt'],
  pliable: ['duo', 'fold'],
}

function haystack(m: ProductModel, c: Catalog) {
  return {
    name: normalize(m.name),
    aliases: m.aliases.map(normalize),
    numbers: [...m.variants.map((v) => v.modelNumber.toLowerCase()), ...m.identifiers.map((i) => i.toLowerCase())],
    other: normalize(
      [
        familyBySlug(c, m.family)?.name,
        lineName(c, m.family, m.line),
        ...m.chips,
        ...m.colors.map((col) => col.name),
        m.connector,
        modelYear(m),
        m.summary,
        ...m.highlights,
      ]
        .filter(Boolean)
        .join(' '),
    ),
  }
}

export function scoreModels(models: ProductModel[], query: string, c: Catalog): { model: ProductModel; score: number }[] {
  const q = normalize(query)
  if (!q) return models.map((model) => ({ model, score: 0 }))
  const rawTokens = q.split(' ').filter(Boolean)
  const tokens = rawTokens.map((t) => [t, ...(SYNONYMS[t] ?? [])])
  const results: { model: ProductModel; score: number }[] = []
  for (const m of models) {
    const h = haystack(m, c)
    let score = 0
    if (h.numbers.includes(q.replace(/\s/g, ''))) score += 200
    if (h.name === q) score += 150
    else if (h.aliases.includes(q)) score += 120
    else if (h.name.startsWith(q)) score += 80
    else if (h.name.includes(q)) score += 50
    let allMatched = true
    for (const alts of tokens) {
      let best = 0
      for (const t of alts) {
        const wordRe = new RegExp(`(^|\\s)${t.replace(/[.+]/g, '\\$&')}(\\s|$)`)
        if (wordRe.test(h.name)) best = Math.max(best, 25)
        else if (h.name.includes(t)) best = Math.max(best, 12)
        else if (h.aliases.some((a) => a.includes(t))) best = Math.max(best, 12)
        else if (h.numbers.some((n) => n === t || n.startsWith(t))) best = Math.max(best, 30)
        else if (h.other.includes(t)) best = Math.max(best, 4)
      }
      if (best === 0) allMatched = false
      score += best
    }
    if (!allMatched) continue
    // Léger avantage aux noms courts pour une même correspondance (« iPhone 15 » avant « iPhone 15 Plus »)
    score -= h.name.length * 0.05
    results.push({ model: m, score })
  }
  return results.sort((a, b) => b.score - a.score || releaseKey(b.model).localeCompare(releaseKey(a.model)))
}

export function search(c: Catalog, query: string, limit = 20): ProductModel[] {
  return scoreModels(c.models, query, c)
    .slice(0, limit)
    .map((r) => r.model)
}

// ---------------------------------------------------------------------------
// Comparateur
// ---------------------------------------------------------------------------

export interface CompareRow {
  label: string
  values: (string | null)[]
  differs: boolean
  kind?: 'colors'
  colors?: { name: string; hex: string }[][]
}

export interface CompareSection {
  id: string
  label: string
  rows: CompareRow[]
}

function row(label: string, values: (string | null | undefined)[]): CompareRow {
  const vs = values.map((v) => (v == null || v === '' ? null : v))
  const present = vs.filter((v): v is string => v !== null)
  const differs = new Set(vs.map((v) => (v ?? '∅').toLowerCase())).size > 1 && present.length > 0
  return { label, values: vs, differs }
}

const dimLine = (m: ProductModel) => {
  const d = m.dimensions[0]
  if (!d || (!d.heightMm && !d.widthMm && !d.depthMm)) return null
  return `${formatMm(d.heightMm)} × ${formatMm(d.widthMm)} × ${formatMm(d.depthMm)}`
}

export function compareModels(c: Catalog, models: ProductModel[]): CompareSection[] {
  const sections: CompareSection[] = []
  const familyNames = models.map((m) => familyBySlug(c, m.family)?.name ?? m.family)

  sections.push({
    id: 'identification',
    label: 'Identification',
    rows: [
      row('Famille', familyNames),
      row('Gamme', models.map((m) => lineName(c, m.family, m.line))),
      row('Génération', models.map((m) => generationBySlug(c, m.generation)?.name)),
      row('Annonce', models.map((m) => (m.announced ? formatDate(m.announced) : null))),
      row('Commercialisation', models.map((m) => (m.released ? formatDate(m.released) : null))),
      row('Retrait', models.map((m) => (m.discontinued ? formatDate(m.discontinued) : m.status === 'discontinued' ? 'Date non documentée' : null))),
      row('Statut', models.map((m) => LIFECYCLE_LABEL[m.status as LifecycleStatus])),
      row('Numéros de modèle', models.map((m) => (m.variants.length ? [...new Set(m.variants.map((v) => v.modelNumber))].join(', ') : null))),
    ],
  })

  const markets = [...new Set(models.flatMap((m) => m.prices.map((p) => p.market)))]
  sections.push({
    id: 'prices',
    label: 'Prix de lancement',
    rows: markets.map((mk) =>
      row(
        `Prix ${mk}`,
        models.map((m) => {
          const p = m.prices.find((x) => x.market === mk)
          return p ? `${formatPrice(p)}${p.config ? ` (${p.config})` : ''} — ${formatDate(p.date)}` : null
        }),
      ),
    ),
  })

  const colorRow: CompareRow = {
    ...row('Couleurs officielles', models.map((m) => (m.colors.length ? m.colors.map((x) => x.name).join(', ') : null))),
    kind: 'colors',
    colors: models.map((m) => m.colors.map((x) => ({ name: x.name, hex: x.hex }))),
  }
  sections.push({
    id: 'design',
    label: SPEC_GROUP_LABELS.design,
    rows: [
      row('Dimensions (H × L × P)', models.map(dimLine)),
      row('Poids', models.map((m) => (m.dimensions[0]?.weightG ? formatWeight(m.dimensions[0].weightG) : null))),
      colorRow,
      row('Tailles', models.map((m) => (m.sizes.length ? m.sizes.join(', ') : null))),
    ],
  })

  sections.push({
    id: 'core',
    label: 'Écran, puce et capacités',
    rows: [
      row('Taille d’écran', models.map((m) => (m.screenInches ? formatInches(m.screenInches) : null))),
      row('Puce', models.map((m) => (m.chips.length ? m.chips.join(' / ') : null))),
      row('Mémoire vive (documentée)', models.map((m) => (m.ramGB.length ? m.ramGB.map((r) => `${r} Go`).join(', ') : null))),
      row('Stockage', models.map((m) => (m.storageGB.length ? m.storageGB.map(formatStorage).join(', ') : null))),
      row('Connecteur', models.map((m) => m.connector)),
      row('Connectivité', models.map((m) => (m.connectivity.length ? m.connectivity.join(', ') : null))),
      row('Système d’origine', models.map((m) => m.os)),
    ],
  })

  const groupOrder: SpecGroupId[] = ['display', 'performance', 'camera', 'audio', 'battery', 'connectivity', 'sensors', 'design', 'software', 'compatibility', 'other']
  for (const g of groupOrder) {
    const labels: string[] = []
    for (const m of models) {
      for (const it of m.specs.find((s) => s.id === g)?.items ?? []) if (!labels.includes(it.label)) labels.push(it.label)
    }
    if (!labels.length) continue
    sections.push({
      id: `spec-${g}`,
      label: `${SPEC_GROUP_LABELS[g]} — détail`,
      rows: labels.map((label) => row(label, models.map((m) => m.specs.find((s) => s.id === g)?.items.find((i) => i.label === label)?.value))),
    })
  }

  return sections
    .map((s) => ({ ...s, rows: s.rows.filter((r) => r.values.some((v) => v !== null)) }))
    .filter((s) => s.rows.length > 0)
}

export function toneLabel(id: ToneId): string {
  return TONES.find((t) => t.id === id)?.label ?? id
}
