import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ProductCard } from '@/components/catalog/ProductCard'
import { NotDocumented, SpecTable } from '@/components/product/SpecTable'
import { DeviceSilhouette } from '@/components/silhouette/DeviceSilhouette'
import { ProductStageLazy } from '@/components/three/ProductStageLazy'
import { StatusBadge, ValidationBadge } from '@/components/ui/Badges'
import { Reveal } from '@/components/ui/Reveal'
import {
  familyBySlug,
  generationBySlug,
  lineName,
  lineNeighbours,
  modelBySlug,
  modelYear,
  siblings,
} from '@/lib/catalog/query'
import { getCatalog } from '@/lib/catalog/repository'
import { missingFields } from '@/lib/catalog/integrity'
import {
  formatDate,
  formatInches,
  formatMm,
  formatPrice,
  formatStorage,
  formatWeight,
  LIFECYCLE_LABEL,
  SOURCE_TYPE_LABEL,
  VALIDATION_HELP,
  VALIDATION_LABEL,
} from '@/lib/format'
import { compareHref, productHref, SITE_URL } from '@/lib/routes'

export const dynamicParams = true
export const revalidate = 600

export async function generateStaticParams() {
  const c = await getCatalog()
  return c.models.map((m) => ({ family: m.family, slug: m.slug }))
}

export async function generateMetadata({ params }: { params: { family: string; slug: string } }): Promise<Metadata> {
  const c = await getCatalog()
  const m = modelBySlug(c, params.slug)
  if (!m || m.family !== params.family) return {}
  const year = modelYear(m)
  return {
    title: `${m.name}${year ? ` (${year})` : ''} — caractéristiques, couleurs, prix de lancement`,
    description: `${m.summary} Fiche ${m.name} : finitions officielles, dimensions, puce, capacités, prix de lancement, numéros de modèle et sources.`,
    alternates: { canonical: productHref(m) },
    openGraph: { title: m.name, description: m.summary, url: productHref(m) },
  }
}

export default async function ProductPage({ params }: { params: { family: string; slug: string } }) {
  const c = await getCatalog()
  const m = modelBySlug(c, params.slug)
  if (!m || m.family !== params.family) notFound()
  const family = familyBySlug(c, m.family)!
  const gen = generationBySlug(c, m.generation)
  const sibs = siblings(c, m)
  const { prev, next } = lineNeighbours(c, m)
  const missing = missingFields(m)
  const allSources = [...family.sources, ...m.sources]
  const markets = [...new Set(m.prices.map((p) => p.market))]
  const d0 = m.dimensions[0]

  const keyFacts: [string, string][] = [
    ['Commercialisation', m.released ? formatDate(m.released) : 'Non documentée'],
    ...(m.screenInches ? ([['Écran', formatInches(m.screenInches)]] as [string, string][]) : []),
    ...(m.chips.length ? ([['Puce', m.chips.join(' / ')]] as [string, string][]) : []),
    ...(m.storageGB.length ? ([['Stockage', `${formatStorage(m.storageGB[0])} → ${formatStorage(m.storageGB[m.storageGB.length - 1])}`]] as [string, string][]) : []),
    ...(d0?.weightG ? ([['Poids', formatWeight(d0.weightG)]] as [string, string][]) : []),
    ...(m.connector ? ([['Connecteur', m.connector]] as [string, string][]) : []),
    ['Finitions', m.colors.length ? `${m.colors.length}` : 'Non documentées'],
    ...(m.prices[0] ? ([['Prix de lancement', `${formatPrice(m.prices[0])} (${m.prices[0].market})`]] as [string, string][]) : []),
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: m.name,
    brand: { '@type': 'Brand', name: 'Apple' },
    description: m.summary,
    url: `${SITE_URL}${productHref(m)}`,
    releaseDate: m.released,
    color: m.colors.map((x) => x.name).join(', ') || undefined,
    model: m.variants.map((v) => v.modelNumber).join(', ') || undefined,
    category: family.name,
  }

  return (
    <article className="pb-24 pt-24" itemScope itemType="https://schema.org/Product">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* En-tête */}
      <section className="page-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
        <div className="flex flex-col justify-center py-6">
          <nav aria-label="Fil d’Ariane" className="mb-6 text-xs text-graphite-400">
            <Link href="/" className="hover:text-white">Accueil</Link> / <Link href={`/${family.slug}`} className="hover:text-white">{family.name}</Link> /{' '}
            <Link href={`/${family.slug}?line=${m.line}`} className="hover:text-white">{lineName(c, m.family, m.line)}</Link>
          </nav>
          <p className="eyebrow">{gen?.name ?? m.generation}</p>
          <h1 className="display-lg mt-4" itemProp="name">{m.name}</h1>
          <p className="mt-5 max-w-xl text-lg text-graphite-200" itemProp="description">{m.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <StatusBadge status={m.status} />
            <ValidationBadge status={m.validation.status} />
            {m.statusNote && <span className="text-xs text-graphite-400">{m.statusNote}</span>}
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs text-graphite-400">Annonce</dt>
              <dd>{m.announced ? formatDate(m.announced) : <NotDocumented label="Non documentée" />}</dd>
            </div>
            <div>
              <dt className="text-xs text-graphite-400">Commercialisation</dt>
              <dd>{m.released ? formatDate(m.released) : <NotDocumented label="Non documentée" />}</dd>
            </div>
            <div>
              <dt className="text-xs text-graphite-400">Retrait</dt>
              <dd>{m.discontinued ? formatDate(m.discontinued) : m.status === 'discontinued' ? <NotDocumented label="Date non documentée" /> : '—'}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={compareHref(prev ? [prev.slug, m.slug] : [m.slug])} className="btn-primary">
              {prev ? `Comparer avec ${prev.name}` : 'Comparer'}
            </Link>
            <a href="#fiche-technique" className="btn-ghost">Fiche technique</a>
          </div>
        </div>
        <div className="relative flex h-[30rem] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent sm:h-[36rem] lg:h-auto lg:min-h-[38rem]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(139,61,255,0.18),transparent_70%)]" aria-hidden />
          <p className="relative z-10 px-5 pt-4 text-[11px] text-graphite-400">
            Représentation procédurale générée à partir des dimensions documentées — schématique, non exacte.
          </p>
          <div className="relative min-h-0 flex-1">
            <ProductStageLazy
              model={{ name: m.name, visual: m.visual, dimensions: m.dimensions, colors: m.colors }}
              fallback={<DeviceSilhouette model={m} view="back" className="max-h-full" />}
            />
          </div>
        </div>
      </section>

      {/* Points clés */}
      {m.highlights.length > 0 && (
        <section className="page-x mt-24" aria-labelledby="points-cles">
          <h2 id="points-cles" className="sr-only">Points clés</h2>
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {m.highlights.map((h, i) => (
              <Reveal as="li" key={h} delay={i * 90} className="bg-ink p-8">
                <span className="font-mono text-xs text-graphite-500">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-6 font-display text-2xl font-semibold leading-tight">{h}</p>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      {/* Chiffres */}
      <section className="page-x mt-16" aria-labelledby="essentiel">
        <h2 id="essentiel" className="eyebrow mb-6">L’essentiel</h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {keyFacts.map(([k, v], i) => (
            <Reveal key={k} delay={i * 60}>
              <dt className="text-xs text-graphite-400">{k}</dt>
              <dd className="mt-1 font-display text-xl font-semibold leading-snug">{v}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Finitions */}
      <section className="light mt-24 py-20" aria-labelledby="finitions">
        <div className="page-x">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Finitions d’origine</p>
              <h2 id="finitions" className="display-md mt-3">
                {m.colors.length ? `${m.colors.length} finition${m.colors.length > 1 ? 's' : ''} officielle${m.colors.length > 1 ? 's' : ''}` : 'Finitions non documentées'}
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink/60">
              Noms officiels (marché US). Les pastilles sont des approximations visuelles à l’écran, pas des références colorimétriques Apple.
            </p>
          </div>
          {m.colors.length > 0 ? (
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {m.colors.map((col, i) => (
                <li key={col.name} className="rounded-3xl border border-ink/10 bg-white p-4">
                  <div className="mb-4 flex h-40 items-center justify-center rounded-2xl bg-paper p-4">
                    <DeviceSilhouette model={m} colorIndex={i} view="back" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-6 w-6 shrink-0 rounded-full border border-ink/15" style={{ background: col.hex }} aria-hidden />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-ink">{col.name}</p>
                      <p className="truncate text-xs text-ink/50">{[col.finish, col.material, col.note].filter(Boolean).join(' · ') || 'Finition standard'}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-ink/60">{m.validation.notes.find((n) => /couleur|coloris/i.test(n)) ?? 'Aucune couleur confirmée par les sources consultées.'}</p>
          )}
        </div>
      </section>

      {/* Fiche technique */}
      <section id="fiche-technique" className="page-x mt-24 scroll-mt-24" aria-labelledby="ft">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Fiche technique</p>
            <h2 id="ft" className="display-md mt-3">Caractéristiques d’origine</h2>
          </div>
          {missing.length > 0 && (
            <p className="max-w-md text-xs text-graphite-400">Champs non renseignés : {missing.join(', ')}.</p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-2 font-display text-lg font-semibold">Identification</h3>
            <SpecTable
              caption="Identification"
              rows={[
                ['Nom officiel', m.name],
                ['Famille', family.name],
                ['Gamme', lineName(c, m.family, m.line)],
                ['Génération', gen ? <Link className="hover:text-cyan-300" href={`/${family.slug}#${gen.slug}`}>{gen.name}</Link> : m.generation],
                ['Numéros de modèle', m.variants.length ? [...new Set(m.variants.map((v) => v.modelNumber))].join(', ') : <NotDocumented />],
                ['Identifiants matériels', m.identifiers.length ? m.identifiers.join(', ') : <NotDocumented />],
                ['Statut', `${LIFECYCLE_LABEL[m.status]}${m.statusNote ? ` — ${m.statusNote}` : ''}`],
                ['Marchés des prix saisis', markets.length ? markets.join(', ') : <NotDocumented />],
                ...(m.aliases.length ? ([['Autres appellations', m.aliases.join(', ')]] as [string, string][]) : []),
              ]}
            />
          </div>
          <div>
            <h3 className="mb-2 font-display text-lg font-semibold">Design et dimensions</h3>
            <SpecTable
              caption="Dimensions"
              rows={[
                ...(m.dimensions.length
                  ? m.dimensions.map(
                      (d) =>
                        [
                          d.label ? `Dimensions — ${d.label}` : 'Dimensions (H × L × P)',
                          d.heightMm || d.widthMm || d.depthMm ? `${formatMm(d.heightMm)} × ${formatMm(d.widthMm)} × ${formatMm(d.depthMm)}${d.weightG ? ` · ${formatWeight(d.weightG)}` : ''}` : d.weightG ? `Poids : ${formatWeight(d.weightG)}` : <NotDocumented />,
                        ] as [string, React.ReactNode],
                    )
                  : ([['Dimensions et poids', <NotDocumented key="nd" label="Non documentés (proportions génériques dans les visuels)" />]] as [string, React.ReactNode][])),
                ...(m.sizes.length ? ([['Tailles', m.sizes.join(', ')]] as [string, string][]) : []),
                ...(m.specs.find((g) => g.id === 'design')?.items.map((it) => [it.label, it.value] as [string, string]) ?? []),
              ]}
            />
          </div>
          {m.specs
            .filter((g) => g.id !== 'design')
            .map((g) => (
              <div key={g.id}>
                <h3 className="mb-2 font-display text-lg font-semibold">{g.label}</h3>
                <SpecTable
                  caption={g.label}
                  rows={[
                    ...(g.id === 'performance' && m.storageGB.length ? ([['Capacités de stockage', m.storageGB.map(formatStorage).join(', ')]] as [string, string][]) : []),
                    ...(g.id === 'performance' && m.ramGB.length ? ([['Mémoire vive (documentée)', m.ramGB.map((r) => `${r} Go`).join(', ')]] as [string, string][]) : []),
                    ...(g.id === 'connectivity' && m.connectivity.length ? ([['Versions', m.connectivity.join(', ')]] as [string, string][]) : []),
                    ...g.items.map((it) => [it.label, it.value] as [string, string]),
                  ]}
                />
              </div>
            ))}
        </div>
      </section>

      {/* Prix et variantes */}
      <section className="page-x mt-24 grid grid-cols-1 gap-12 lg:grid-cols-2" aria-label="Prix et variantes">
        <div>
          <p className="eyebrow">Prix et disponibilité</p>
          <h2 className="display-md mt-3">Prix de lancement</h2>
          {m.prices.length ? (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[28rem] text-sm">
                <thead className="text-left text-xs text-graphite-400">
                  <tr>
                    <th className="py-2 font-normal">Marché</th>
                    <th className="py-2 font-normal">Prix</th>
                    <th className="py-2 font-normal">Configuration</th>
                    <th className="py-2 font-normal">Date de référence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.07]">
                  {m.prices.map((p, i) => (
                    <tr key={i}>
                      <td className="py-3">{p.market}</td>
                      <td className="py-3 font-medium">{formatPrice(p)}</td>
                      <td className="py-3 text-graphite-300">{p.config ?? '—'}</td>
                      <td className="py-3 text-graphite-300">
                        {formatDate(p.date)} <span className="text-[11px] text-graphite-500">· {VALIDATION_LABEL[p.status]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-xs text-graphite-500">Prix historiques de lancement, hors taxes locales selon marché ; ils ne reflètent pas un prix actuel.</p>
            </div>
          ) : (
            <p className="mt-6 text-sm text-graphite-300">Prix de lancement non documenté.</p>
          )}
        </div>
        <div>
          <p className="eyebrow">Références matérielles</p>
          <h2 className="display-md mt-3">Variantes</h2>
          {m.variants.length ? (
            <ul className="mt-6 divide-y divide-white/[0.07] border-y border-white/[0.07] text-sm">
              {m.variants.map((v, i) => (
                <li key={i} className="flex items-center justify-between gap-4 py-3">
                  <span className="font-mono">{v.modelNumber}</span>
                  <span className="text-right text-graphite-300">{[v.label !== v.modelNumber ? v.label : null, v.region, v.connectivity !== v.label ? v.connectivity : null].filter(Boolean).join(' · ') || '—'}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-sm text-graphite-300">Numéros de modèle non saisis pour cette fiche.</p>
          )}
          <p className="mt-4 text-xs text-graphite-500">Les configurations commerciales (stockage, couleur, mémoire) sont des options du modèle et non des modèles distincts.</p>
        </div>
      </section>

      {/* Compatibilités */}
      {m.compatibility.length > 0 && (
        <section className="page-x mt-24" aria-labelledby="compat">
          <p className="eyebrow">Compatibilités documentées</p>
          <h2 id="compat" className="display-md mt-3">Fonctionne avec</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {m.compatibility.map((cp) => {
              const t = modelBySlug(c, cp.target)
              return (
                <li key={cp.target}>
                  {t ? (
                    <Link href={productHref(t)} className="chip hover:border-white/40 hover:text-white">{t.name}</Link>
                  ) : (
                    <span className="chip">{cp.target} (fiche absente)</span>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {/* Médias */}
      <section className="page-x mt-24" aria-labelledby="medias">
        <p className="eyebrow">Médias</p>
        <h2 id="medias" className="display-md mt-3">Images et modèles 3D</h2>
        {m.images.length ? (
          <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {m.images.map((im) => (
              <li key={im.url}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={im.url} alt={im.alt} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
                <p className="mt-2 text-[11px] text-graphite-400">© {im.credit} · {im.license}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 max-w-2xl text-sm text-graphite-300">
            Aucune image sous licence n’a encore été ajoutée pour cette fiche. Les visuels affichés sont générés par TECHVERSE à partir des dimensions
            et des paramètres de forme ; ils ne reproduisent pas exactement l’appareil.
          </p>
        )}
        {m.assets3d.length > 0 && (
          <ul className="mt-4 text-sm text-graphite-300">
            {m.assets3d.map((a) => (
              <li key={a.url}>
                Modèle {a.format} · {a.isExact ? 'modèle exact sous licence' : 'modèle approximatif'} · {a.credit} ({a.license})
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Sources */}
      <section id="sources" className="page-x mt-24 scroll-mt-24" aria-labelledby="src">
        <div className="rounded-[2rem] border border-white/10 p-6 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="eyebrow">Sources et vérification</p>
              <h2 id="src" className="display-md mt-3">D’où viennent ces données</h2>
            </div>
            <div className="max-w-sm text-sm">
              <ValidationBadge status={m.validation.status} />
              <p className="mt-2 text-graphite-300">{VALIDATION_HELP[m.validation.status]}</p>
              <p className="mt-1 text-xs text-graphite-400">Dernière vérification : {m.validation.reviewedAt ? formatDate(m.validation.reviewedAt) : 'aucune vérification humaine enregistrée'}</p>
            </div>
          </div>
          {m.validation.notes.length > 0 && (
            <ul className="mt-6 list-disc space-y-1 pl-5 text-sm text-amber-100/80">
              {m.validation.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          )}
          <ul className="mt-8 divide-y divide-white/[0.07] border-t border-white/[0.07]">
            {allSources.map((s, i) => (
              <li key={`${s.url}-${i}`} className="flex flex-col gap-1 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
                <span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-white underline-offset-4 hover:text-cyan-300 hover:underline">
                    {s.title}
                  </a>
                  <span className="block break-all text-xs text-graphite-500">{s.url}</span>
                </span>
                <span className="shrink-0 text-xs text-graphite-400">
                  {SOURCE_TYPE_LABEL[s.type] ?? s.type} · {VALIDATION_LABEL[s.status]}
                  {s.checkedAt ? ` · vérifiée le ${formatDate(s.checkedAt)}` : ' · non consultée'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Navigation entre générations */}
      <nav className="page-x mt-24" aria-label="Générations voisines">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {prev ? (
            <Link href={productHref(prev)} className="glass card-hover rounded-3xl p-6">
              <span className="text-xs text-graphite-400">← Génération précédente · {lineName(c, prev.family, prev.line)}</span>
              <span className="mt-2 block font-display text-xl">{prev.name}</span>
            </Link>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/10 p-6 text-sm text-graphite-400">Premier modèle de la gamme dans le catalogue.</div>
          )}
          {next ? (
            <Link href={productHref(next)} className="glass card-hover rounded-3xl p-6 text-right">
              <span className="text-xs text-graphite-400">Génération suivante →</span>
              <span className="mt-2 block font-display text-xl">{next.name}</span>
            </Link>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/10 p-6 text-right text-sm text-graphite-400">Dernier modèle de la gamme dans le catalogue.</div>
          )}
        </div>
        {sibs.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-display text-xl">Dans la même génération</h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {sibs.map((s) => (
                <ProductCard key={s.slug} model={s} variant="compact" />
              ))}
            </div>
          </div>
        )}
      </nav>
    </article>
  )
}
