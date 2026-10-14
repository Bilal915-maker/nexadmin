import { ModelEditor } from '@/components/admin/ModelEditor'
import { adminCatalog } from '@/lib/admin/data'
import type { ProductModel } from '@/lib/catalog/types'

export default async function NewModel({ searchParams }: { searchParams: { depuis?: string } }) {
  const { catalog: c } = await adminCatalog()
  if (!c) return <p className="text-graphite-300">Base de données requise.</p>
  const source = searchParams.depuis ? c.models.find((m) => m.slug === searchParams.depuis) : undefined
  const blank: ProductModel = {
    slug: '',
    name: '',
    family: 'iphone',
    line: 'standard',
    generation: '',
    aliases: [],
    status: 'current',
    summary: '',
    highlights: [],
    identifiers: [],
    variants: [],
    colors: [],
    storageGB: [],
    ramGB: [],
    chips: [],
    sizes: [],
    connectivity: [],
    dimensions: [],
    prices: [],
    specs: [],
    compatibility: [],
    images: [],
    assets3d: [],
    sources: [],
    validation: { status: 'unverified', notes: [] },
    visual: { kind: 'phone', params: {} },
  }
  const initial: ProductModel = source
    ? { ...structuredClone(source), slug: `${source.slug}-copie`, name: `${source.name} (copie)`, validation: { status: 'unverified', notes: [] } }
    : blank
  return (
    <div>
      <p className="mb-4 text-sm text-graphite-300">
        {source ? `Duplication de « ${source.name} » : vérifiez chaque champ avant d’enregistrer.` : 'Astuce : ajoutez ?depuis=<slug> à l’URL pour partir d’une fiche existante.'}
      </p>
      <ModelEditor
        mode="create"
        initial={initial}
        families={c.families.map((f) => ({ slug: f.slug, name: f.name, lines: f.lines }))}
        generations={c.generations.map((g) => ({ slug: g.slug, family: g.family, name: g.name, year: g.year }))}
      />
    </div>
  )
}
