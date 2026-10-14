import Link from 'next/link'
import { ProductCard } from '@/components/catalog/ProductCard'
import { FamilyExplorer } from '@/components/home/FamilyExplorer'
import { Hero } from '@/components/home/Hero'
import { HomeSearch } from '@/components/home/HomeSearch'
import { ScaleLineup } from '@/components/home/ScaleLineup'
import { TimelineRail, type TimelineEntry } from '@/components/home/TimelineRail'
import { DeviceSilhouette } from '@/components/silhouette/DeviceSilhouette'
import type { UniverseItem } from '@/components/three/UniverseScene'
import { Reveal } from '@/components/ui/Reveal'
import {
  familyBySlug,
  latestReleases,
  modelYear,
  modelsByFamily,
  retiredLines,
  sortByRelease,
  stats,
  timeline,
  upcoming,
} from '@/lib/catalog/query'
import { CATALOG_REFERENCE_DATE, getCatalog } from '@/lib/catalog/repository'
import type { Catalog, ProductModel } from '@/lib/catalog/types'
import { formatDate } from '@/lib/format'
import { compareHref, productHref } from '@/lib/routes'

export const revalidate = 600

function spread<T>(arr: T[], n: number): T[] {
  if (arr.length <= n) return arr
  return Array.from({ length: n }, (_, i) => arr[Math.round((i * (arr.length - 1)) / (n - 1))])
}

function universePool(c: Catalog): UniverseItem[][] {
  const excluded = new Set(['cable', 'brick', 'remote'])
  return c.families.map((f) =>
    spread(
      modelsByFamily(c, f.slug).filter((m) => !excluded.has(m.visual.kind) && m.colors.length > 0),
      5,
    ).map((m) => ({
      slug: m.slug,
      href: productHref(m),
      name: m.name,
      year: modelYear(m),
      visual: m.visual,
      dimensions: m.dimensions,
      colors: m.colors.slice(0, 1),
    })),
  )
}

/** Suggestions de comparaison calculées : première et dernière génération des gammes les plus longues. */
function compareSuggestions(c: Catalog) {
  const lines: { label: string; first: ProductModel; last: ProductModel; span: number }[] = []
  for (const f of c.families) {
    for (const l of f.lines) {
      const ms = sortByRelease(c.models.filter((m) => m.family === f.slug && m.line === l.slug && m.released && m.released <= CATALOG_REFERENCE_DATE))
      if (ms.length < 3) continue
      const span = (modelYear(ms[ms.length - 1]) ?? 0) - (modelYear(ms[0]) ?? 0)
      lines.push({ label: `${f.shortName} · ${l.name}`, first: ms[0], last: ms[ms.length - 1], span })
    }
  }
  const byFamily = new Map<string, (typeof lines)[number]>()
  for (const l of lines.sort((a, b) => b.span - a.span)) if (!byFamily.has(l.first.family)) byFamily.set(l.first.family, l)
  return [...byFamily.values()].slice(0, 4)
}

export default async function HomePage() {
  const c = await getCatalog()
  const s = stats(c)
  const latest = latestReleases(c, 7, CATALOG_REFERENCE_DATE)
  const soon = upcoming(c, CATALOG_REFERENCE_DATE)
  const retired = retiredLines(c)
  const t = timeline(c)
  const suggestions = compareSuggestions(c)

  const explorer = c.families.map((f) => {
    const ms = modelsByFamily(c, f.slug)
    const years = ms.map(modelYear).filter((y): y is number => !!y)
    const picks = spread(ms.filter((m) => m.colors.length), 3)
    return {
      slug: f.slug,
      name: f.name,
      tagline: f.tagline,
      count: ms.length,
      span: years.length ? `${Math.max(Math.min(...years), 2016)}–${Math.max(...years)}` : '',
      lines: f.lines.filter((l) => ms.some((m) => m.line === l.slug)).map((l) => l.name),
      preview: (
        <div className="flex h-full items-center justify-center gap-6 p-12 pb-28">
          {picks.map((m, i) => (
            <div key={m.slug} className="flex h-full flex-1 flex-col items-center justify-center gap-3" style={{ transform: `translateY(${(i - 1) * 18}px)` }}>
              <div className="h-[70%] w-full">
                <DeviceSilhouette model={m} colorIndex={i % Math.max(m.colors.length, 1)} />
              </div>
              <p className="text-center text-[11px] text-graphite-300">
                {m.name}
                <br />
                <span className="text-graphite-500">{modelYear(m)}</span>
              </p>
            </div>
          ))}
        </div>
      ),
    }
  })

  const lineupScale: Record<string, number> = { iphone: 1.6, ipad: 0.95, 'apple-watch': 3.4 }
  const lineupTabs = (['iphone', 'ipad', 'apple-watch'] as const).map((fam) => {
    const ms = modelsByFamily(c, fam).filter((m) => m.dimensions.some((d) => d.heightMm))
    return {
      id: fam,
      label: familyBySlug(c, fam)?.name ?? fam,
      count: ms.length,
      items: ms.map((m) => ({
        slug: m.slug,
        href: productHref(m),
        name: m.name,
        year: m.released?.slice(0, 4),
        node: <DeviceSilhouette model={m} scale={lineupScale[fam]} view={fam === 'apple-watch' ? 'front' : 'back'} />,
      })),
    }
  })

  const entries: Record<number, TimelineEntry[]> = {}
  for (const { year, models } of t) {
    entries[year] = models.map((m) => ({
      slug: m.slug,
      href: productHref(m),
      name: m.name,
      family: m.family,
      familyName: familyBySlug(c, m.family)?.shortName ?? m.family,
      date: m.released,
      dateLabel: m.released ? formatDate(m.released) : `annoncé le ${formatDate(m.announced)}`,
      colors: m.colors.map((x) => x.hex),
      status: m.status,
    }))
  }

  const fallback = (
    <div className="flex h-full items-center justify-center gap-6 px-6 pb-[34vh] opacity-80 md:gap-14">
      {latest.slice(0, 5).map((m, i) => (
        <div key={m.slug} className="h-28 w-20 md:h-56 md:w-40" style={{ transform: `translateY(${Math.abs(i - 2) * 26}px) rotate(${(i - 2) * 6}deg)` }}>
          <DeviceSilhouette model={m} />
        </div>
      ))}
    </div>
  )

  return (
    <>
      <Hero pool={universePool(c)} stats={{ ...s }} fallback={fallback} />

      {/* Familles */}
      <section className="relative py-24 md:py-32" aria-labelledby="familles-titre">
        <div className="page-x">
          <Reveal className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="eyebrow">Dix familles</p>
              <h2 id="familles-titre" className="display-lg mt-4">
                Un écosystème,
                <br />
                cartographié.
              </h2>
            </div>
            <p className="max-w-md text-graphite-300 md:justify-self-end">
              Des téléphones aux câbles, chaque famille est organisée en gammes, générations, modèles et variantes matérielles. Les filtres
              s’adaptent à la nature de chaque produit.
            </p>
          </Reveal>
          <FamilyExplorer families={explorer} />
        </div>
      </section>

      {/* Échelle réelle */}
      <section className="light relative py-24 md:py-28" aria-labelledby="echelle-titre">
        <div className="page-x mb-10">
          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">À l’échelle réelle</p>
              <h2 id="echelle-titre" className="display-lg mt-4">
                {lineupTabs[0].count} iPhone,
                <br />
                côte à côte.
              </h2>
            </div>
            <p className="max-w-md text-ink/60 md:justify-self-end">
              Chaque silhouette est calculée à partir des dimensions documentées du modèle : l’évolution des formats, des modules photo et des
              finitions devient lisible d’un coup d’œil.
            </p>
          </Reveal>
        </div>
        <ScaleLineup tabs={lineupTabs} mmLabel={lineupScale} />
      </section>

      {/* Chronologie */}
      <section className="relative py-24 md:py-32" aria-labelledby="chronologie-titre">
        <div className="page-x mb-12 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Chronologie interactive</p>
            <h2 id="chronologie-titre" className="display-lg mt-4">
              Année après année.
            </h2>
          </Reveal>
          <Link href="/chronologie" className="btn-ghost">
            Chronologie complète
          </Link>
        </div>
        <TimelineRail years={t.map((x) => x.year)} entries={entries} />
      </section>

      {/* Nouveautés */}
      <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="nouveautes-titre">
        <div className="pointer-events-none absolute -right-40 top-20 h-[40rem] w-[40rem] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="page-x">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Nouveautés</p>
              <h2 id="nouveautes-titre" className="display-lg mt-4">
                Les derniers lancements.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-graphite-300">
              Produits commercialisés jusqu’au {formatDate(CATALOG_REFERENCE_DATE)}. Les fiches marquées « Presse » proviennent de sources
              secondaires et restent à confirmer.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
            {latest.slice(0, 1).map((m) => (
              <Link
                key={m.slug}
                href={productHref(m)}
                className="group relative flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8 md:col-span-2 md:row-span-2"
              >
                <div>
                  <p className="text-xs text-graphite-300">{formatDate(m.released)}</p>
                  <h3 className="display-md mt-2">{m.name}</h3>
                  <p className="mt-3 max-w-sm text-sm text-graphite-300">{m.summary}</p>
                </div>
                <div className="mx-auto h-56 w-full max-w-xs transition duration-700 group-hover:scale-105">
                  <DeviceSilhouette model={m} />
                </div>
              </Link>
            ))}
            {latest.slice(1, 7).map((m) => (
              <ProductCard key={m.slug} model={m} variant="compact" />
            ))}
          </div>
          {soon.length > 0 && (
            <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Annoncé, pas encore commercialisé</p>
              <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                {soon.map((m) => (
                  <li key={m.slug}>
                    <Link href={productHref(m)} className="text-white hover:text-cyan-300">
                      {m.name}
                    </Link>{' '}
                    <span className="text-graphite-400">— commercialisation annoncée : {formatDate(m.released)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Produits historiques */}
      <section className="light relative py-24 md:py-32" aria-labelledby="historiques-titre">
        <div className="page-x">
          <Reveal className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow">Produits historiques</p>
              <h2 id="historiques-titre" className="display-lg mt-4">
                Les gammes disparues.
              </h2>
            </div>
            <p className="max-w-md text-ink/60 md:justify-self-end">
              Gammes dont plus aucun modèle n’est commercialisé à la date de référence. Leurs fiches restent consultables avec leur statut
              historique.
            </p>
          </Reveal>
          <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 scrollbar-none sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {retired.map((r) => {
              const first = r.models[0]
              const last = r.models[r.models.length - 1]
              const end = last.discontinued?.slice(0, 4) ?? '—'
              return (
                <Link key={`${r.family.slug}-${r.line}`} href={`/${r.family.slug}?line=${r.line}`} className="group min-w-[16rem] snap-start rounded-3xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-ink/25">
                  <div className="mb-6 h-32">
                    <DeviceSilhouette model={last} />
                  </div>
                  <p className="text-xs text-ink/50">{r.family.name}</p>
                  <h3 className="font-display text-xl font-semibold text-ink">{r.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">
                    {first.released?.slice(0, 4) ?? first.announced?.slice(0, 4)} → {end} · {r.models.length} modèle{r.models.length > 1 ? 's' : ''}
                  </p>
                  <p className="mt-3 text-xs text-ink/50">Dernier : {last.name}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recherche et comparateur */}
      <section className="relative py-24 md:py-32" aria-labelledby="outils-titre">
        <div className="page-x grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="glass flex flex-col justify-between gap-10 rounded-[2rem] p-8 md:p-10">
            <div>
              <p className="eyebrow">Recherche globale</p>
              <h2 id="outils-titre" className="display-md mt-4">
                Un nom, une puce, un numéro de modèle.
              </h2>
              <p className="mt-3 text-sm text-graphite-300">La recherche couvre toutes les fiches, pas seulement celles mises en avant.</p>
            </div>
            <HomeSearch />
          </Reveal>
          <Reveal delay={120} className="glass flex flex-col gap-6 rounded-[2rem] p-8 md:p-10">
            <div>
              <p className="eyebrow">Comparateur</p>
              <h3 className="display-md mt-4">Première contre dernière génération.</h3>
              <p className="mt-3 text-sm text-graphite-300">Suggestions calculées automatiquement sur les gammes les plus longues du catalogue.</p>
            </div>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {suggestions.map((sg) => (
                <li key={sg.label}>
                  <Link href={compareHref([sg.first.slug, sg.last.slug])} className="group flex items-center justify-between gap-4 py-4">
                    <span>
                      <span className="block text-xs text-graphite-400">{sg.label}</span>
                      <span className="block text-sm text-white">
                        {sg.first.name} <span className="text-graphite-400">vs</span> {sg.last.name}
                      </span>
                    </span>
                    <span className="text-graphite-400 transition group-hover:translate-x-1 group-hover:text-cyan-300">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/comparer" className="btn-primary self-start">
              Composer une comparaison
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Transparence */}
      <section className="relative border-t border-white/10 py-20" aria-labelledby="donnees-titre">
        <div className="page-x grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <p className="eyebrow">Fiabilité des données</p>
            <h2 id="donnees-titre" className="display-md mt-4">
              Chaque fiche dit d’où vient l’information.
            </h2>
          </div>
          <div className="space-y-5">
            <div className="flex h-3 overflow-hidden rounded-full bg-white/5" role="img" aria-label={`${s.byValidation.confirmed} vérifiées, ${s.byValidation.reported} rapportées, ${s.byValidation.unverified} à vérifier`}>
              <span className="bg-emerald-400" style={{ width: `${(s.byValidation.confirmed / s.models) * 100}%` }} />
              <span className="bg-amber-300" style={{ width: `${(s.byValidation.reported / s.models) * 100}%` }} />
              <span className="bg-volt" style={{ width: `${(s.byValidation.unverified / s.models) * 100}%` }} />
            </div>
            <dl className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="text-graphite-400">Vérifiées</dt>
                <dd className="font-display text-2xl text-emerald-300">{s.byValidation.confirmed}</dd>
              </div>
              <div>
                <dt className="text-graphite-400">Rapportées (presse)</dt>
                <dd className="font-display text-2xl text-amber-200">{s.byValidation.reported}</dd>
              </div>
              <div>
                <dt className="text-graphite-400">À vérifier</dt>
                <dd className="font-display text-2xl text-volt-300">{s.byValidation.unverified}</dd>
              </div>
            </dl>
            <p className="text-sm text-graphite-300">
              Le catalogue n’est pas déclaré exhaustif : les lacunes connues (accessoires saisonniers, bracelets, références commerciales) sont
              listées publiquement.{' '}
              <Link href="/inventaire" className="text-cyan-300 underline-offset-4 hover:underline">
                Voir l’inventaire et les sources
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export function generateMetadata() {
  return { title: { absolute: 'TECHVERSE — Tous les produits Apple depuis 2016' } }
}

