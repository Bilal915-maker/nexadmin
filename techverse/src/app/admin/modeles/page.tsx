import { AdminModelList } from '@/components/admin/AdminModelList'
import { adminCatalog } from '@/lib/admin/data'
import { missingFields } from '@/lib/catalog/integrity'

export default async function AdminModels() {
  const { catalog: c } = await adminCatalog()
  if (!c) return <p className="text-graphite-300">Base de données requise.</p>
  return (
    <div>
      <h1 className="mb-6 font-display text-3xl font-semibold">Fiches ({c.models.length})</h1>
      <AdminModelList
        families={c.families.map((f) => ({ slug: f.slug, name: f.name }))}
        models={c.models.map((m) => ({
          slug: m.slug,
          name: m.name,
          family: m.family,
          released: m.released ?? m.announced ?? '',
          status: m.status,
          validation: m.validation.status,
          missing: missingFields(m),
          numbers: m.variants.map((v) => v.modelNumber).join(' '),
        }))}
      />
    </div>
  )
}
