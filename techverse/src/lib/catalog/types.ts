/**
 * Modèle de domaine TECHVERSE.
 *
 * Hiérarchie : Famille → Gamme (line) → Génération → Modèle → Variante matérielle.
 * Les configurations commerciales (stockage, mémoire, puce, couleur) sont des
 * options d'un modèle ; elles ne sont pas des modèles distincts.
 */

export const FAMILY_SLUGS = [
  'iphone',
  'ipad',
  'mac',
  'apple-watch',
  'airpods-audio',
  'ecrans-peripheriques',
  'tv-maison',
  'accessoires',
  'vision',
  'autres',
] as const
export type FamilySlug = (typeof FAMILY_SLUGS)[number]

/**
 * confirmed  : vérifié manuellement contre la source officielle citée (date dans checkedAt)
 * reported   : rapporté par des sources secondaires (presse) — source officielle non consultée
 * unverified : saisi d'après la base de connaissances éditoriale — à vérifier contre la source
 */
export const VALIDATION_STATUSES = ['confirmed', 'reported', 'unverified'] as const
export type ValidationStatus = (typeof VALIDATION_STATUSES)[number]

export const LIFECYCLE_STATUSES = ['current', 'discontinued', 'announced'] as const
export type LifecycleStatus = (typeof LIFECYCLE_STATUSES)[number]

export const SOURCE_TYPES = [
  'apple-specs',
  'apple-support',
  'apple-newsroom',
  'press',
  'encyclopedia',
  'retailer',
] as const
export type SourceType = (typeof SOURCE_TYPES)[number]

export interface SourceRef {
  url: string
  type: SourceType
  title: string
  /** Date ISO (AAAA-MM-JJ) de la dernière vérification humaine du contenu */
  checkedAt?: string
  status: ValidationStatus
  note?: string
}

export interface ColorFinish {
  /** Nom officiel (marché US) */
  name: string
  /** Approximation visuelle à l'écran — jamais une valeur officielle Apple */
  hex: string
  /** Nom officiel français si documenté */
  nameFr?: string
  finish?: string
  material?: string
  note?: string
}

export interface Price {
  market: string
  currency: string
  amount: number
  /** Configuration correspondante (« 128 Go », « Wi-Fi 64 Go »…) */
  config?: string
  /** Date de référence du prix (AAAA-MM-JJ) */
  date: string
  status: ValidationStatus
}

export interface Dimensions {
  label?: string
  heightMm?: number
  widthMm?: number
  depthMm?: number
  weightG?: number
  note?: string
}

export const SPEC_GROUPS = [
  'identification',
  'design',
  'display',
  'performance',
  'camera',
  'audio',
  'battery',
  'connectivity',
  'sensors',
  'software',
  'compatibility',
  'other',
] as const
export type SpecGroupId = (typeof SPEC_GROUPS)[number]

export const SPEC_GROUP_LABELS: Record<SpecGroupId, string> = {
  identification: 'Identification',
  design: 'Design et construction',
  display: 'Écran',
  performance: 'Puce et performances',
  camera: 'Appareils photo et vidéo',
  audio: 'Audio',
  battery: 'Batterie et recharge',
  connectivity: 'Connectivité',
  sensors: 'Capteurs et santé',
  software: 'Logiciel',
  compatibility: 'Compatibilité',
  other: 'Autres caractéristiques',
}

export interface SpecItem {
  key: string
  label: string
  value: string
  status?: ValidationStatus
}

export interface SpecGroup {
  id: SpecGroupId
  label: string
  items: SpecItem[]
}

export interface HardwareVariant {
  /** Numéro de modèle Apple (Axxxx) ou référence documentée */
  modelNumber: string
  label: string
  region?: string
  connectivity?: string
  note?: string
}

export const VISUAL_KINDS = [
  'phone',
  'tablet',
  'laptop',
  'imac',
  'box',
  'tower',
  'watch',
  'earbuds',
  'headphones',
  'speaker',
  'display',
  'headset',
  'pencil',
  'keyboard',
  'mouse',
  'trackpad',
  'tag',
  'puck',
  'brick',
  'cable',
  'remote',
  'pack',
] as const
export type VisualKind = (typeof VISUAL_KINDS)[number]

/** Paramètres de la représentation procédurale (jamais présentée comme exacte). */
export interface Visual {
  kind: VisualKind
  params: Record<string, string | number | boolean>
}

export interface ProductImage {
  url: string
  alt: string
  license: string
  credit: string
  colorName?: string
}

export interface ProductAsset3D {
  url: string
  format: string
  license: string
  credit: string
  /** true uniquement si le modèle provient d'une source exacte et autorisée */
  isExact: boolean
  notes?: string
}

export interface Compatibility {
  /** slug du modèle compatible (peut référencer un modèle absent du catalogue) */
  target: string
  note?: string
}

export interface ProductModel {
  slug: string
  name: string
  family: FamilySlug
  line: string
  generation: string
  aliases: string[]
  announced?: string
  released?: string
  discontinued?: string
  status: LifecycleStatus
  /** Précision sur le statut (ex. date de retrait non documentée) */
  statusNote?: string
  summary: string
  highlights: string[]
  identifiers: string[]
  variants: HardwareVariant[]
  colors: ColorFinish[]
  storageGB: number[]
  ramGB: number[]
  chips: string[]
  screenInches?: number
  sizes: string[]
  connectivity: string[]
  connector?: string
  os?: string
  dimensions: Dimensions[]
  prices: Price[]
  specs: SpecGroup[]
  compatibility: Compatibility[]
  images: ProductImage[]
  assets3d: ProductAsset3D[]
  sources: SourceRef[]
  validation: {
    status: ValidationStatus
    reviewedAt?: string
    notes: string[]
  }
  visual: Visual
}

export interface ProductLine {
  slug: string
  name: string
}

export interface ProductFamily {
  slug: FamilySlug
  name: string
  shortName: string
  tagline: string
  description: string
  order: number
  lines: ProductLine[]
  /** Sources officielles et secondaires communes à la famille */
  sources: SourceRef[]
  /** Lacunes connues de couverture (affichées dans l'inventaire) */
  gaps: string[]
}

export interface ProductGeneration {
  slug: string
  family: FamilySlug
  line: string
  name: string
  year: number
  order: number
}

export interface Catalog {
  families: ProductFamily[]
  generations: ProductGeneration[]
  models: ProductModel[]
  /** Lacunes transverses (produits signalés non confirmés, familles partielles) */
  pending: PendingItem[]
  source: 'files' | 'database'
  loadedAt: string
}

export interface PendingItem {
  name: string
  family: FamilySlug
  reason: string
  sources: SourceRef[]
}
