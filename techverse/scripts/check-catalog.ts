/**
 * Vérifie l'intégrité des données « fichiers » du catalogue.
 * Usage : npm run catalog:check   (code de sortie 1 en cas d'erreur)
 */
import { filesCatalog } from '../data/catalog'
import { checkCatalog, missingFields } from '../src/lib/catalog/integrity'

const issues = checkCatalog(filesCatalog)
const errors = issues.filter((i) => i.level === 'error')
const warnings = issues.filter((i) => i.level === 'warning')

const byFamily = new Map<string, number>()
for (const m of filesCatalog.models) byFamily.set(m.family, (byFamily.get(m.family) ?? 0) + 1)
const byStatus = new Map<string, number>()
for (const m of filesCatalog.models) byStatus.set(m.validation.status, (byStatus.get(m.validation.status) ?? 0) + 1)

console.log(`Familles : ${filesCatalog.families.length} — Générations : ${filesCatalog.generations.length} — Modèles : ${filesCatalog.models.length}`)
console.log('Par famille :', Object.fromEntries(byFamily))
console.log('Par statut de validation :', Object.fromEntries(byStatus))
const incomplete = filesCatalog.models.filter((m) => missingFields(m).length > 0)
console.log(`Fiches avec champs manquants : ${incomplete.length}`)
if (process.argv.includes('--verbose')) {
  for (const m of incomplete) console.log(`  - ${m.slug} : ${missingFields(m).join(', ')}`)
  for (const w of warnings) console.log(`  ⚠ ${w.model ?? ''} ${w.message}`)
}
console.log(`Avertissements : ${warnings.length}`)
for (const e of errors) console.error(`✖ [${e.code}] ${e.model ?? ''} ${e.message}`)
console.log(errors.length ? `${errors.length} erreur(s)` : 'Aucune erreur bloquante.')
process.exit(errors.length ? 1 : 0)
