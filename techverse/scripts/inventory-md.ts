/**
 * Génère docs/INVENTAIRE.md à partir des données du catalogue.
 *   npx tsx scripts/inventory-md.ts
 */
import { writeFileSync } from 'node:fs'
import { filesCatalog } from '../data/catalog'
import { CATALOG_REFERENCE_DATE } from '../data/catalog/_define'
import { missingFields } from '../src/lib/catalog/integrity'
import { generationsByFamily } from '../src/lib/catalog/query'
import type { Catalog } from '../src/lib/catalog/types'

const c: Catalog = { ...filesCatalog, source: 'files', loadedAt: '' }
const label = { confirmed: 'Vérifié', reported: 'Rapporté (presse)', unverified: 'À vérifier' } as const
const status = { current: 'Commercialisé', discontinued: 'Arrêté', announced: 'Annoncé' } as const
const lines: string[] = [
  '# Inventaire du catalogue TECHVERSE',
  '',
  `Généré automatiquement depuis \`data/catalog/\` — date de référence : ${CATALOG_REFERENCE_DATE}.`,
  '',
  `**${c.models.length} fiches**, ${c.generations.length} générations, ${c.families.length} familles.`,
  `Validation : ${c.models.filter((m) => m.validation.status === 'confirmed').length} vérifiées, ${c.models.filter((m) => m.validation.status === 'reported').length} rapportées (presse), ${c.models.filter((m) => m.validation.status === 'unverified').length} à vérifier.`,
  '',
  '> Le catalogue n’est pas déclaré exhaustif. Les lacunes connues sont listées pour chaque famille.',
  '',
]
for (const f of c.families) {
  const ms = c.models.filter((m) => m.family === f.slug)
  lines.push(`## ${f.name} (${ms.length})`, '')
  for (const g of generationsByFamily(c, f.slug)) {
    lines.push(`### ${g.year} — ${g.name}`, '', '| Modèle | Commercialisation | Statut | Validation | Champs manquants |', '|---|---|---|---|---|')
    for (const m of g.models) {
      lines.push(`| ${m.name} | ${m.released ?? '—'} | ${status[m.status]} | ${label[m.validation.status]} | ${missingFields(m).join(', ') || '—'} |`)
    }
    lines.push('')
  }
  if (f.gaps.length) lines.push('**Lacunes connues :**', '', ...f.gaps.map((g) => `- ${g}`), '')
}
lines.push('## Signalés, non intégrés', '', ...c.pending.map((p) => `- **${p.name}** — ${p.reason}`), '')
writeFileSync('docs/INVENTAIRE.md', lines.join('\n'))
console.log(`docs/INVENTAIRE.md : ${lines.length} lignes`)
