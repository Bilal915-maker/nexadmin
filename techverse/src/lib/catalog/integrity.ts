/**
 * Contrôles d'intégrité du catalogue : doublons, références cassées,
 * champs manquants. Utilisé par le script `catalog:check`, les tests et l'admin.
 */
import { modelSchema } from './schema'
import type { Catalog, ProductModel } from './types'

export type IssueLevel = 'error' | 'warning'

export interface IntegrityIssue {
  level: IssueLevel
  model?: string
  code: string
  message: string
}

/** Champs dont l'absence est signalée (selon la famille). */
const EXPECTED_FIELDS: { key: string; label: string; test: (m: ProductModel) => boolean; families?: string[] }[] = [
  { key: 'released', label: 'Date de commercialisation', test: (m) => !!m.released },
  { key: 'announced', label: 'Date d’annonce', test: (m) => !!m.announced },
  { key: 'prices', label: 'Prix de lancement', test: (m) => m.prices.length > 0 },
  { key: 'colors', label: 'Couleurs officielles', test: (m) => m.colors.length > 0 },
  { key: 'dimensions', label: 'Dimensions / poids', test: (m) => m.dimensions.some((d) => d.weightG || d.heightMm) },
  {
    key: 'modelNumbers',
    label: 'Numéros de modèle',
    test: (m) => m.variants.length > 0,
    families: ['iphone', 'ipad', 'mac', 'airpods-audio'],
  },
  { key: 'chips', label: 'Puce', test: (m) => m.chips.length > 0, families: ['iphone', 'ipad', 'mac', 'apple-watch', 'vision'] },
  {
    key: 'storage',
    label: 'Capacités de stockage',
    test: (m) => m.storageGB.length > 0,
    families: ['iphone', 'ipad', 'mac', 'vision'],
  },
  { key: 'screen', label: 'Taille d’écran', test: (m) => !!m.screenInches, families: ['iphone', 'ipad'] },
]

export function missingFields(m: ProductModel): string[] {
  return EXPECTED_FIELDS.filter((f) => (!f.families || f.families.includes(m.family)) && !f.test(m)).map((f) => f.label)
}

export function checkCatalog(catalog: Pick<Catalog, 'families' | 'generations' | 'models'>): IntegrityIssue[] {
  const issues: IntegrityIssue[] = []
  const familySlugs = new Set(catalog.families.map((f) => f.slug))
  const genSlugs = new Map(catalog.generations.map((g) => [g.slug, g]))
  const slugs = new Map<string, number>()
  const modelNumbers = new Map<string, string[]>()
  const names = new Map<string, string[]>()
  const allSlugs = new Set(catalog.models.map((m) => m.slug))

  for (const g of catalog.generations) {
    if (!familySlugs.has(g.family)) {
      issues.push({ level: 'error', code: 'generation-family', message: `Génération ${g.slug} : famille inconnue ${g.family}` })
    }
  }
  const genCount = new Map<string, number>()
  for (const g of catalog.generations) genCount.set(g.slug, (genCount.get(g.slug) ?? 0) + 1)
  for (const [slug, count] of genCount) {
    if (count > 1) issues.push({ level: 'error', code: 'duplicate-generation', message: `Génération en double : ${slug}` })
  }

  for (const m of catalog.models) {
    const parsed = modelSchema.safeParse(m)
    if (!parsed.success) {
      for (const e of parsed.error.issues) {
        issues.push({ level: 'error', model: m.slug, code: 'schema', message: `${e.path.join('.')} : ${e.message}` })
      }
    }
    slugs.set(m.slug, (slugs.get(m.slug) ?? 0) + 1)
    const nameKey = m.name.toLowerCase()
    names.set(nameKey, [...(names.get(nameKey) ?? []), m.slug])

    const gen = genSlugs.get(m.generation)
    if (!gen) {
      issues.push({ level: 'error', model: m.slug, code: 'generation-missing', message: `Génération inconnue : ${m.generation}` })
    } else if (gen.family !== m.family) {
      issues.push({ level: 'error', model: m.slug, code: 'generation-family-mismatch', message: `Génération ${gen.slug} appartient à ${gen.family}` })
    }
    const fam = catalog.families.find((f) => f.slug === m.family)
    if (fam && !fam.lines.some((l) => l.slug === m.line)) {
      issues.push({ level: 'error', model: m.slug, code: 'line-missing', message: `Gamme inconnue pour ${m.family} : ${m.line}` })
    }
    for (const v of m.variants) {
      if (/^A\d{4}$/.test(v.modelNumber)) {
        modelNumbers.set(v.modelNumber, [...(modelNumbers.get(v.modelNumber) ?? []), m.slug])
      }
    }
    for (const c of m.compatibility) {
      if (!allSlugs.has(c.target)) {
        issues.push({ level: 'warning', model: m.slug, code: 'compat-target', message: `Compatibilité vers une fiche absente : ${c.target}` })
      }
    }
    const colorNames = m.colors.map((c) => c.name.toLowerCase())
    if (new Set(colorNames).size !== colorNames.length) {
      issues.push({ level: 'error', model: m.slug, code: 'duplicate-color', message: 'Couleur listée deux fois' })
    }
    if (m.validation.status === 'confirmed' && m.sources.every((s) => s.status !== 'confirmed')) {
      issues.push({ level: 'error', model: m.slug, code: 'confirmed-without-source', message: 'Fiche « confirmée » sans aucune source confirmée' })
    }
  }

  for (const [slug, count] of slugs) {
    if (count > 1) issues.push({ level: 'error', model: slug, code: 'duplicate-slug', message: `Slug en double (${count}×)` })
  }
  for (const [name, list] of names) {
    if (list.length > 1) issues.push({ level: 'error', code: 'duplicate-name', message: `Nom en double « ${name} » : ${list.join(', ')}` })
  }
  for (const [mn, list] of modelNumbers) {
    const unique = [...new Set(list)]
    // Apple réutilise certains numéros entre révisions d'un même boîtier (ex. A1534, A1706) :
    // signalé comme avertissement, à vérifier humainement.
    if (unique.length > 1) {
      issues.push({ level: 'warning', code: 'shared-model-number', message: `Numéro ${mn} partagé par : ${unique.join(', ')}` })
    }
  }
  return issues
}
