import { GenerationForm } from '@/components/admin/GenerationForm'
import { adminCatalog } from '@/lib/admin/data'

export default async function AdminGenerations() {
  const { catalog: c } = await adminCatalog()
  if (!c) return <p className="text-graphite-300">Base de données requise.</p>
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_22rem]">
      <div>
        <h1 className="mb-6 font-display text-3xl font-semibold">Générations ({c.generations.length})</h1>
        {c.families.map((f) => (
          <section key={f.slug} className="mb-8">
            <h2 className="mb-2 font-display text-lg">{f.name}</h2>
            <ul className="divide-y divide-white/[0.06] rounded-2xl border border-white/10 text-sm">
              {c.generations
                .filter((g) => g.family === f.slug)
                .sort((a, b) => a.year - b.year)
                .map((g) => (
                  <li key={g.slug} className="flex justify-between gap-4 px-4 py-2">
                    <span>
                      <span className="tabular-nums text-graphite-400">{g.year}</span> {g.name}
                    </span>
                    <span className="font-mono text-xs text-graphite-500">
                      {g.slug} · {c.models.filter((m) => m.generation === g.slug).length} fiche(s)
                    </span>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
      <GenerationForm families={c.families.map((f) => ({ slug: f.slug, name: f.name, lines: f.lines }))} />
    </div>
  )
}
