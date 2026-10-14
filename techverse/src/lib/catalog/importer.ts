/**
 * Import de fiches au format JSON (format complet du domaine) ou CSV (champs principaux).
 * Produit un rapport d'analyse (création / mise à jour / erreurs / doublons) avant application.
 */
import { modelSchema } from './schema'
import type { Catalog, ColorFinish, FamilySlug, Price, ProductModel, SourceRef } from './types'

export interface ImportRow {
  index: number
  slug?: string
  name?: string
  action: 'create' | 'update' | 'error'
  errors: string[]
  warnings: string[]
  model?: ProductModel
}

export interface ImportReport {
  format: 'json' | 'csv'
  rows: ImportRow[]
  summary: { create: number; update: number; error: number; warnings: number }
}

// ---------------------------------------------------------------------------
// CSV (RFC 4180 : guillemets, virgules et retours à la ligne dans les champs)
// ---------------------------------------------------------------------------

export function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let quoted = false
  const src = text.replace(/^\uFEFF/, '')
  const firstLine = src.split(/\r?\n/, 1)[0] ?? ''
  const delimiter = (firstLine.match(/;/g)?.length ?? 0) > (firstLine.match(/,/g)?.length ?? 0) ? ';' : ','
  for (let i = 0; i < src.length; i++) {
    const ch = src[i]
    if (quoted) {
      if (ch === '"' && src[i + 1] === '"') {
        field += '"'
        i++
      } else if (ch === '"') quoted = false
      else field += ch
    } else if (ch === '"') quoted = true
    else if (ch === delimiter) {
      row.push(field)
      field = ''
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && src[i + 1] === '\n') i++
      row.push(field)
      if (row.some((f) => f.trim() !== '')) rows.push(row)
      row = []
      field = ''
    } else field += ch
  }
  row.push(field)
  if (row.some((f) => f.trim() !== '')) rows.push(row)
  if (!rows.length) return []
  const header = rows[0].map((h) => h.trim())
  return rows.slice(1).map((r) => Object.fromEntries(header.map((h, i) => [h, (r[i] ?? '').trim()])))
}

const list = (v?: string) => (v ? v.split('|').map((x) => x.trim()).filter(Boolean) : [])
const nums = (v?: string) => list(v).map(Number).filter((n) => Number.isFinite(n) && n > 0)

const CURRENCY: Record<string, string> = { US: 'USD', FR: 'EUR', UK: 'GBP', CA: 'CAD', JP: 'JPY', IN: 'INR', AU: 'AUD' }

/** Colonnes CSV reconnues (voir docs/IMPORT.md). */
export function csvRowToModel(r: Record<string, string>): Partial<ProductModel> & Record<string, unknown> {
  const colors: ColorFinish[] = list(r.colors).map((c) => {
    const [name, hex, finish] = c.split(':').map((x) => x.trim())
    return { name, hex: hex?.startsWith('#') ? hex : `#${hex ?? '999999'}`, ...(finish ? { finish } : {}) }
  })
  const prices: Price[] = list(r.prices).map((p) => {
    const [market, amount, config, date] = p.split(':').map((x) => x.trim())
    return {
      market,
      currency: CURRENCY[market] ?? 'USD',
      amount: Number(amount),
      ...(config ? { config } : {}),
      date: date || r.announced || r.released,
      status: (r.validation as Price['status']) || 'unverified',
    }
  })
  const sources: SourceRef[] = list(r.sourceUrls).map((url) => ({
    url,
    type: (r.sourceType as SourceRef['type']) || 'press',
    title: r.sourceTitle || url,
    status: (r.validation as SourceRef['status']) || 'unverified',
  }))
  let visualParams: Record<string, string | number | boolean> = {}
  try {
    visualParams = r.visualParams ? JSON.parse(r.visualParams) : {}
  } catch {
    visualParams = {}
  }
  const dims = r.heightMm || r.widthMm || r.depthMm || r.weightG
  return {
    slug: r.slug,
    name: r.name,
    family: r.family as FamilySlug,
    line: r.line,
    generation: r.generation,
    aliases: list(r.aliases),
    ...(r.announced ? { announced: r.announced } : {}),
    ...(r.released ? { released: r.released } : {}),
    ...(r.discontinued ? { discontinued: r.discontinued } : {}),
    status: (r.status as ProductModel['status']) || (r.discontinued ? 'discontinued' : 'current'),
    ...(r.statusNote ? { statusNote: r.statusNote } : {}),
    summary: r.summary,
    highlights: list(r.highlights),
    identifiers: list(r.identifiers),
    variants: list(r.modelNumbers).map((n) => ({ modelNumber: n, label: n })),
    colors,
    storageGB: nums(r.storageGB),
    ramGB: nums(r.ramGB),
    chips: list(r.chips),
    ...(r.screenInches ? { screenInches: Number(r.screenInches.replace(',', '.')) } : {}),
    sizes: list(r.sizes),
    connectivity: list(r.connectivity),
    ...(r.connector ? { connector: r.connector } : {}),
    ...(r.os ? { os: r.os } : {}),
    dimensions: dims
      ? [
          {
            ...(r.heightMm ? { heightMm: Number(r.heightMm) } : {}),
            ...(r.widthMm ? { widthMm: Number(r.widthMm) } : {}),
            ...(r.depthMm ? { depthMm: Number(r.depthMm) } : {}),
            ...(r.weightG ? { weightG: Number(r.weightG) } : {}),
          },
        ]
      : [],
    prices,
    specs: [],
    compatibility: list(r.compatibility).map((target) => ({ target })),
    images: [],
    assets3d: [],
    sources,
    validation: { status: (r.validation as ProductModel['validation']['status']) || 'unverified', notes: list(r.notes) },
    visual: { kind: (r.visualKind as ProductModel['visual']['kind']) || 'pack', params: visualParams },
  }
}

// ---------------------------------------------------------------------------
// Analyse
// ---------------------------------------------------------------------------

export function analyseImport(input: string, existing: Catalog): ImportReport {
  const trimmed = input.trim()
  const format: 'json' | 'csv' = trimmed.startsWith('{') || trimmed.startsWith('[') ? 'json' : 'csv'
  let raw: unknown[] = []
  const rows: ImportRow[] = []
  if (format === 'json') {
    try {
      const parsed = JSON.parse(trimmed)
      raw = Array.isArray(parsed) ? parsed : Array.isArray(parsed.models) ? parsed.models : [parsed]
    } catch (e) {
      return { format, rows: [{ index: 0, action: 'error', errors: [`JSON invalide : ${(e as Error).message}`], warnings: [] }], summary: { create: 0, update: 0, error: 1, warnings: 0 } }
    }
  } else {
    raw = parseCsv(trimmed).map(csvRowToModel)
  }

  const existingBySlug = new Map(existing.models.map((m) => [m.slug, m]))
  const existingByName = new Map(existing.models.map((m) => [m.name.toLowerCase(), m.slug]))
  const numberOwners = new Map<string, string>()
  for (const m of existing.models) for (const v of m.variants) if (/^A\d{4}$/.test(v.modelNumber)) numberOwners.set(v.modelNumber, m.slug)
  const genSlugs = new Map(existing.generations.map((g) => [g.slug, g]))
  const seen = new Set<string>()

  raw.forEach((item, index) => {
    const parsed = modelSchema.safeParse(item)
    const slug = (item as { slug?: string })?.slug
    const name = (item as { name?: string })?.name
    if (!parsed.success) {
      rows.push({ index, slug, name, action: 'error', errors: parsed.error.issues.map((i) => `${i.path.join('.') || 'fiche'} : ${i.message}`), warnings: [] })
      return
    }
    const m = parsed.data as ProductModel
    const errors: string[] = []
    const warnings: string[] = []
    if (seen.has(m.slug)) errors.push(`Slug présent deux fois dans le fichier : ${m.slug}`)
    seen.add(m.slug)
    const gen = genSlugs.get(m.generation)
    if (!gen) errors.push(`Génération inconnue : ${m.generation} (créez-la d’abord dans l’administration)`)
    else if (gen.family !== m.family) errors.push(`La génération ${m.generation} appartient à la famille ${gen.family}`)
    const fam = existing.families.find((f) => f.slug === m.family)
    if (fam && !fam.lines.some((l) => l.slug === m.line)) errors.push(`Gamme inconnue pour ${m.family} : ${m.line}`)
    const sameName = existingByName.get(m.name.toLowerCase())
    if (sameName && sameName !== m.slug) warnings.push(`Doublon probable : même nom que la fiche existante « ${sameName} »`)
    for (const v of m.variants) {
      const owner = numberOwners.get(v.modelNumber)
      if (owner && owner !== m.slug) warnings.push(`Numéro ${v.modelNumber} déjà associé à « ${owner} »`)
    }
    if (m.validation.status === 'confirmed' && !m.sources.some((s) => s.status === 'confirmed')) {
      errors.push('Statut « confirmé » refusé : aucune source confirmée')
    }
    rows.push({ index, slug: m.slug, name: m.name, action: errors.length ? 'error' : existingBySlug.has(m.slug) ? 'update' : 'create', errors, warnings, model: m })
  })

  return {
    format,
    rows,
    summary: {
      create: rows.filter((r) => r.action === 'create').length,
      update: rows.filter((r) => r.action === 'update').length,
      error: rows.filter((r) => r.action === 'error').length,
      warnings: rows.reduce((n, r) => n + r.warnings.length, 0),
    },
  }
}

export const CSV_TEMPLATE_HEADER =
  'slug,name,family,line,generation,announced,released,discontinued,status,summary,storageGB,ramGB,chips,screenInches,colors,prices,modelNumbers,heightMm,widthMm,depthMm,weightG,connector,os,sourceUrls,sourceType,sourceTitle,validation,visualKind,visualParams'
