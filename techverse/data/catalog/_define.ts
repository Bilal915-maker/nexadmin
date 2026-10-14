/**
 * Aides de saisie du catalogue.
 *
 * Les fichiers de données sont écrits dans un format compact (ModelInput) puis
 * normalisés vers le modèle de domaine (ProductModel). Toute donnée saisie ici est
 * « unverified » par défaut : elle doit être confrontée à la source citée avant
 * d'être marquée « confirmed » (via l'administration ou le script de vérification).
 */
import type {
  ColorFinish,
  Dimensions,
  FamilySlug,
  HardwareVariant,
  LifecycleStatus,
  Price,
  ProductGeneration,
  ProductModel,
  SourceRef,
  SourceType,
  SpecGroup,
  SpecGroupId,
  ValidationStatus,
  Visual,
  VisualKind,
} from '../../src/lib/catalog/types'
import { SPEC_GROUP_LABELS, SPEC_GROUPS } from '../../src/lib/catalog/types'

/** Date de référence du catalogue : sert à déduire « commercialisé » vs « annoncé ». */
export const CATALOG_REFERENCE_DATE = '2026-10-14'

const CURRENCY: Record<string, string> = {
  US: 'USD',
  FR: 'EUR',
  UK: 'GBP',
  CA: 'CAD',
  IN: 'INR',
  JP: 'JPY',
  AU: 'AUD',
  MY: 'MYR',
}

export type ColorInput = [name: string, hex: string, finish?: string]
export type DimInput = [heightMm: number | null, widthMm: number | null, depthMm: number | null, weightG: number | null, label?: string]
export type PriceInput = [market: string, amount: number, config?: string, date?: string, status?: ValidationStatus]
export type VariantInput = string | [modelNumber: string, label: string, connectivity?: string]
export type SourceInput = SourceRef | [type: SourceType, url: string, title: string, status?: ValidationStatus]

export interface ModelInput {
  slug: string
  name: string
  line: string
  gen: string
  aliases?: string[]
  /** Date d'annonce */
  a?: string
  /** Date de commercialisation */
  r?: string
  /** Date de retrait ; '?' = retiré, date non documentée ; absent = toujours commercialisé */
  d?: string
  statusNote?: string
  summary: string
  hl?: string[]
  ids?: string[]
  mn?: VariantInput[]
  colors?: ColorInput[]
  storage?: number[]
  ram?: number[]
  chips?: string[]
  screen?: number
  sizes?: string[]
  conn?: string[]
  connector?: string
  os?: string
  dims?: DimInput[]
  prices?: PriceInput[]
  specs?: Partial<Record<SpecGroupId, [string, string][]>>
  compat?: (string | [string, string])[]
  sources?: SourceInput[]
  v?: ValidationStatus
  notes?: string[]
  visual: Visual | [VisualKind, Record<string, string | number | boolean>?]
}

export function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function toSource(s: SourceInput, fallback: ValidationStatus): SourceRef {
  if (Array.isArray(s)) {
    const [type, url, title, status] = s
    return { type, url, title, status: status ?? fallback }
  }
  return s
}

function lifecycle(input: ModelInput): { status: LifecycleStatus; discontinued?: string; note?: string } {
  if (input.d === '?') {
    return { status: 'discontinued', note: input.statusNote ?? 'Retiré de la vente — date de retrait non documentée' }
  }
  if (input.d) return { status: 'discontinued', discontinued: input.d, note: input.statusNote }
  if (input.r && input.r <= CATALOG_REFERENCE_DATE) return { status: 'current', note: input.statusNote }
  return { status: 'announced', note: input.statusNote }
}

export interface FamilyDefaults {
  family: FamilySlug
  sources: SourceRef[]
}

export function makeDefiner(defaults: FamilyDefaults) {
  return function define(input: ModelInput): ProductModel {
    const validationStatus: ValidationStatus = input.v ?? 'unverified'
    const lc = lifecycle(input)
    const colors: ColorFinish[] = (input.colors ?? []).map(([name, hex, finish]) => ({
      name,
      hex,
      ...(finish ? { finish } : {}),
    }))
    const dimensions: Dimensions[] = (input.dims ?? []).map(([h, w, d, g, label]) => ({
      ...(label ? { label } : {}),
      ...(h != null ? { heightMm: h } : {}),
      ...(w != null ? { widthMm: w } : {}),
      ...(d != null ? { depthMm: d } : {}),
      ...(g != null ? { weightG: g } : {}),
    }))
    const prices: Price[] = (input.prices ?? []).map(([market, amount, config, date, status]) => ({
      market,
      currency: CURRENCY[market] ?? 'USD',
      amount,
      ...(config ? { config } : {}),
      date: date ?? input.a ?? input.r ?? CATALOG_REFERENCE_DATE,
      status: status ?? validationStatus,
    }))
    const variants: HardwareVariant[] = (input.mn ?? []).map((m) =>
      typeof m === 'string'
        ? { modelNumber: m, label: m }
        : { modelNumber: m[0], label: m[1], ...(m[2] ? { connectivity: m[2] } : {}) },
    )
    const specs: SpecGroup[] = SPEC_GROUPS.filter((g) => input.specs?.[g]?.length).map((g) => ({
      id: g,
      label: SPEC_GROUP_LABELS[g],
      items: (input.specs![g] ?? []).map(([label, value]) => ({ key: slugify(label), label, value })),
    }))
    const sources = [
      ...defaults.sources,
      ...(input.sources ?? []).map((s) => toSource(s, validationStatus)),
    ]
    const visual: Visual = Array.isArray(input.visual)
      ? { kind: input.visual[0], params: input.visual[1] ?? {} }
      : input.visual

    return {
      slug: input.slug,
      name: input.name,
      family: defaults.family,
      line: input.line,
      generation: input.gen,
      aliases: input.aliases ?? [],
      ...(input.a ? { announced: input.a } : {}),
      ...(input.r ? { released: input.r } : {}),
      ...(lc.discontinued ? { discontinued: lc.discontinued } : {}),
      status: lc.status,
      ...(lc.note ? { statusNote: lc.note } : {}),
      summary: input.summary,
      highlights: input.hl ?? [],
      identifiers: input.ids ?? [],
      variants,
      colors,
      storageGB: input.storage ?? [],
      ramGB: input.ram ?? [],
      chips: input.chips ?? [],
      ...(input.screen ? { screenInches: input.screen } : {}),
      sizes: input.sizes ?? [],
      connectivity: input.conn ?? [],
      ...(input.connector ? { connector: input.connector } : {}),
      ...(input.os ? { os: input.os } : {}),
      dimensions,
      prices,
      specs,
      compatibility: (input.compat ?? []).map((c) =>
        typeof c === 'string' ? { target: c } : { target: c[0], note: c[1] },
      ),
      images: [],
      assets3d: [],
      sources,
      validation: {
        status: validationStatus,
        notes: input.notes ?? [],
      },
      visual,
    }
  }
}

export function gens(
  family: FamilySlug,
  list: [slug: string, line: string, name: string, year: number][],
): ProductGeneration[] {
  return list.map(([slug, line, name, year], i) => ({ slug, family, line, name, year, order: i }))
}

/** Sources officielles partagées */
export const SRC = {
  appleSpecs: (path = ''): SourceRef => ({
    type: 'apple-specs',
    url: `https://support.apple.com/specs${path}`,
    title: 'Apple — Caractéristiques techniques (index officiel)',
    status: 'unverified',
  }),
  appleSupport: (id: string, title: string): SourceRef => ({
    type: 'apple-support',
    url: `https://support.apple.com/${id}`,
    title,
    status: 'unverified',
  }),
  newsroom: (): SourceRef => ({
    type: 'apple-newsroom',
    url: 'https://www.apple.com/newsroom/archive/',
    title: 'Apple Newsroom — archives des communiqués',
    status: 'unverified',
  }),
  wiki: (page: string, title?: string): SourceRef => ({
    type: 'encyclopedia',
    url: `https://en.wikipedia.org/wiki/${page}`,
    title: title ?? `Wikipedia (EN) — ${page.replace(/_/g, ' ')}`,
    status: 'unverified',
  }),
}

/** Raccourci : source presse rapportée (produits postérieurs à la base de connaissances). */
export function press(url: string, title: string): SourceRef {
  return { type: 'press', url, title, status: 'reported' }
}
