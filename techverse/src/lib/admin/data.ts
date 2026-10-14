import { redirect } from 'next/navigation'
import { getAdminSession } from '../auth/guard'
import { getPrisma, isDatabaseConfigured } from '../db'
import { loadCatalogFromDb } from '../catalog/persistence'
import type { Catalog } from '../catalog/types'

/** Charge le catalogue depuis la base pour l'administration (jamais depuis le cache public). */
export async function adminCatalog(): Promise<{ email: string; catalog: Catalog | null }> {
  const session = await getAdminSession()
  if (!session) redirect('/admin/login')
  if (!isDatabaseConfigured()) return { email: session.email, catalog: null }
  const data = await loadCatalogFromDb(getPrisma())
  return { email: session.email, catalog: { ...data, source: 'database', loadedAt: new Date().toISOString() } }
}
