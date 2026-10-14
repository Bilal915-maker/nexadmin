/**
 * Exporte les données « fichiers » au format JSON d'import/export de l'administration.
 *   npm run catalog:export [-- chemin/sortie.json]
 */
import { writeFileSync } from 'node:fs'
import { filesCatalog } from '../data/catalog'

const out = process.argv[2] ?? 'techverse-catalogue.json'
writeFileSync(out, JSON.stringify({ exportedAt: new Date().toISOString(), ...filesCatalog }, null, 2))
console.log(`${filesCatalog.models.length} fiches exportées vers ${out}`)
