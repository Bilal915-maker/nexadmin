/**
 * Accès serveur au catalogue.
 *  - mode « files »    : données versionnées dans data/catalog (aucune base requise)
 *  - mode « database » : PostgreSQL via Prisma, mis en cache et invalidé à chaque écriture (tag « catalog »)
 */
import { unstable_cache } from 'next/cache'
import { filesCatalog } from '../../../data/catalog'
import { CATALOG_REFERENCE_DATE } from '../../../data/catalog/_define'
import { getPrisma } from '../db'
import { loadCatalogFromDb } from './persistence'
import type { Catalog } from './types'

export const CATALOG_TAG = 'catalog'
export { CATALOG_REFERENCE_DATE }

export function catalogSource(): 'files' | 'database' {
  const explicit = process.env.CATALOG_SOURCE
  if (explicit === 'files' || explicit === 'database') return explicit
  return process.env.DATABASE_URL ? 'database' : 'files'
}

const loadFromDb = unstable_cache(
  async () => {
    const data = await loadCatalogFromDb(getPrisma())
    return { ...data, source: 'database' as const, loadedAt: new Date().toISOString() }
  },
  ['techverse-catalog'],
  { tags: [CATALOG_TAG], revalidate: 600 },
)

let filesSnapshot: Catalog | null = null

export async function getCatalog(): Promise<Catalog> {
  if (catalogSource() === 'database') return loadFromDb()
  if (!filesSnapshot) {
    filesSnapshot = { ...filesCatalog, source: 'files', loadedAt: new Date().toISOString() }
  }
  return filesSnapshot
}
