import { notFound } from 'next/navigation'
import { ModelEditor } from '@/components/admin/ModelEditor'
import { adminCatalog } from '@/lib/admin/data'

export default async function EditModel({ params }: { params: { slug: string } }) {
  const { catalog: c } = await adminCatalog()
  if (!c) return <p className="text-graphite-300">Base de données requise.</p>
  const m = c.models.find((x) => x.slug === params.slug)
  if (!m) notFound()
  return (
    <ModelEditor
      key={m.slug}
      mode="edit"
      initial={m}
      families={c.families.map((f) => ({ slug: f.slug, name: f.name, lines: f.lines }))}
      generations={c.generations.map((g) => ({ slug: g.slug, family: g.family, name: g.name, year: g.year }))}
    />
  )
}
