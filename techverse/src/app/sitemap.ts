import type { MetadataRoute } from 'next'
import { getCatalog } from '@/lib/catalog/repository'
import { productHref, SITE_URL } from '@/lib/routes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const c = await getCatalog()
  const now = new Date()
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...['catalogue', 'chronologie', 'comparer', 'inventaire'].map((p) => ({ url: `${SITE_URL}/${p}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 })),
    ...c.families.map((f) => ({ url: `${SITE_URL}/${f.slug}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 })),
    ...c.models.map((m) => ({ url: `${SITE_URL}${productHref(m)}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ]
}
