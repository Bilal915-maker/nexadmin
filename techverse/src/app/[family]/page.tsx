import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CatalogBrowser } from '@/components/catalog/CatalogBrowser'
import { familyBySlug, generationsByFamily, modelYear, modelsByFamily } from '@/lib/catalog/query'
import { getCatalog } from '@/lib/catalog/repository'
import { FAMILY_SLUGS, type FamilySlug } from '@/lib/catalog/types'

export const dynamicParams = false

export function generateStaticParams() {
  return FAMILY_SLUGS.map((family) => ({ family }))
}

export async function generateMetadata({ params }: { params: { family: string } }): Promise<Metadata> {
  const c = await getCatalog()
  const f = familyBySlug(c, params.family)
  if (!f) return {}
  return {
    title: `${f.name} — toutes les générations depuis 2016`,
    description: `${f.description} ${modelsByFamily(c, f.slug).length} fiches avec couleurs officielles, caractéristiques, prix de lancement et sources.`,
    alternates: { canonical: `/${f.slug}` },
  }
}

export default async function FamilyPage({ params, searchParams }: { params: { family: string }; searchParams: Record<string, string | string[] | undefined> }) {
  const c = await getCatalog()
  const f = familyBySlug(c, params.family)
  if (!f) notFound()
  const models = modelsByFamily(c, f.slug)
  const gens = generationsByFamily(c, f.slug)
  const years = models.map(modelYear).filter((y): y is number => !!y)
  const current = models.filter((m) => m.status === 'current').length
  const lines = f.lines.filter((l) => models.some((m) => m.line === l.slug))

  return (
    <div className="pb-24 pt-28">
      <header className="page-x relative mb-14">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[34rem] overflow-hidden" aria-hidden>
          <div className="absolute left-1/3 top-0 h-96 w-[40rem] max-w-[90vw] rounded-full bg-volt/20 blur-[120px]" />
        </div>
        <nav aria-label="Fil d’Ariane" className="mb-6 text-xs text-graphite-400">
          <Link href="/" className="hover:text-white">Accueil</Link> <span aria-hidden>/</span> <span className="text-graphite-200">{f.name}</span>
        </nav>
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">{f.tagline}</p>
            <h1 className="display-xl mt-4">{f.name}</h1>
            <p className="mt-6 max-w-2xl text-lg text-graphite-300">{f.description}</p>
          </div>
          <dl className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 lg:border-0 lg:pt-0">
            <div>
              <dd className="font-display text-3xl font-semibold tabular-nums">{models.length}</dd>
              <dt className="text-xs text-graphite-400">fiches</dt>
            </div>
            <div>
              <dd className="font-display text-3xl font-semibold tabular-nums">{gens.length}</dd>
              <dt className="text-xs text-graphite-400">générations</dt>
            </div>
            <div>
              <dd className="font-display text-3xl font-semibold tabular-nums">{current}</dd>
              <dt className="text-xs text-graphite-400">commercialisées</dt>
            </div>
          </dl>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {lines.map((l) => (
            <Link key={l.slug} href={`/${f.slug}?line=${l.slug}`} className="chip hover:border-white/40 hover:text-white">
              {l.name}
            </Link>
          ))}
          <span className="chip border-transparent">{years.length ? `${Math.min(...years)} → ${Math.max(...years)}` : ''}</span>
        </div>
        {gens.length > 0 && (
          <nav aria-label="Générations" className="mt-8 overflow-x-auto scrollbar-none">
            <ol className="flex min-w-max gap-1 border-b border-white/10 text-xs">
              {gens.map((g) => (
                <li key={g.slug}>
                  <a href={`#${g.slug}`} className="block px-3 py-2 text-graphite-400 hover:text-white">
                    {g.year} · {g.name}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </header>
      <div className="page-x">
        <CatalogBrowser catalog={c} family={f.slug as FamilySlug} searchParams={searchParams} />
        {f.gaps.length > 0 && (
          <aside className="mt-20 rounded-3xl border border-amber-300/20 bg-amber-300/[0.03] p-6 text-sm" aria-labelledby="lacunes">
            <h2 id="lacunes" className="font-display text-base text-amber-100">Lacunes connues pour cette famille</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-graphite-300">
              {f.gaps.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  )
}
