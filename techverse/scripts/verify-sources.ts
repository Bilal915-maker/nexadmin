/**
 * Vérification assistée des sources citées par chaque fiche.
 *
 *   npm run sources:verify                 # toutes les fiches (sources propres au modèle)
 *   npm run sources:verify -- --family iphone --limit 20
 *   npm run sources:verify -- --include-family-sources
 *
 * Produit data/.sources-cache/report-<date>.json. Aucune fiche n'est modifiée :
 * la confirmation reste une décision humaine dans l'administration.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { filesCatalog } from '../data/catalog'
import { checkSource, type SourceCheckResult } from '../src/lib/catalog/source-check'

const arg = (k: string) => {
  const i = process.argv.indexOf(k)
  return i > -1 ? process.argv[i + 1] : undefined
}
const family = arg('--family')
const limit = Number(arg('--limit') ?? Infinity)
const includeFamily = process.argv.includes('--include-family-sources')

async function main() {
  const models = filesCatalog.models.filter((m) => !family || m.family === family).slice(0, limit)
  const results: SourceCheckResult[] = []
  for (const m of models) {
    const fam = filesCatalog.families.find((f) => f.slug === m.family)!
    const urls = [...new Set([...m.sources.map((s) => s.url), ...(includeFamily ? fam.sources.map((s) => s.url) : [])])]
    for (const url of urls) {
      const r = await checkSource(m, url)
      results.push(r)
      const found = r.evidence.filter((e) => e.found).length
      console.log(`${r.httpStatus ?? 'ERR'}  ${m.slug}  ${url}  ${r.error ?? `${found}/${r.evidence.length} valeurs retrouvées`}`)
    }
  }
  const dir = path.join(__dirname, '..', 'data', '.sources-cache')
  mkdirSync(dir, { recursive: true })
  const file = path.join(dir, `report-${new Date().toISOString().slice(0, 10)}.json`)
  writeFileSync(file, JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2))
  const reachable = results.filter((r) => r.httpStatus && r.httpStatus < 400).length
  console.log(`\n${results.length} vérifications, ${reachable} sources accessibles. Rapport : ${file}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
