import type { Metadata } from 'next'
import Link from 'next/link'
import { ValidationBadge } from '@/components/ui/Badges'
import { checkCatalog, missingFields } from '@/lib/catalog/integrity'
import { generationsByFamily, modelsByFamily, stats } from '@/lib/catalog/query'
import { CATALOG_REFERENCE_DATE, getCatalog } from '@/lib/catalog/repository'
import { formatDate, SOURCE_TYPE_LABEL, VALIDATION_HELP } from '@/lib/format'
import { productHref } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Inventaire, couverture et sources',
  description: 'Méthodologie, couverture par famille, lacunes connues, produits signalés non confirmés et sources du catalogue TECHVERSE.',
  alternates: { canonical: '/inventaire' },
}

export const revalidate = 600

const pct = (n: number, d: number) => (d ? Math.round((n / d) * 100) : 0)

export default async function InventoryPage() {
  const c = await getCatalog()
  const s = stats(c)
  const issues = checkCatalog(c)
  const warnings = issues.filter((i) => i.level === 'warning')
  const errors = issues.filter((i) => i.level === 'error')
  const sources = new Map<string, { title: string; type: string; count: number; status: string }>()
  for (const f of c.families) for (const src of f.sources) sources.set(src.url, { title: src.title, type: src.type, status: src.status, count: modelsByFamily(c, f.slug).length })
  for (const m of c.models)
    for (const src of m.sources) {
      const cur = sources.get(src.url)
      sources.set(src.url, { title: src.title, type: src.type, status: src.status, count: (cur?.count ?? 0) + 1 })
    }
  const bySourceType = [...sources.values()].reduce<Record<string, number>>((acc, x) => ({ ...acc, [x.type]: (acc[x.type] ?? 0) + 1 }), {})
  const incomplete = c.models.filter((m) => missingFields(m).length)

  return (
    <div className="pb-24 pt-28">
      <header className="page-x mb-16 max-w-4xl">
        <p className="eyebrow">Inventaire et méthodologie</p>
        <h1 className="display-lg mt-4">Ce que contient le catalogue — et ce qui manque.</h1>
        <p className="mt-6 text-lg text-graphite-300">
          Périmètre : produits Apple dont la commercialisation a débuté entre le 1er janvier 2016 et le {formatDate(CATALOG_REFERENCE_DATE)} (date de
          référence). Le catalogue <strong className="text-white">n’est pas déclaré exhaustif</strong> : les lacunes connues sont listées ci-dessous.
        </p>
      </header>

      <section className="page-x mb-20" aria-labelledby="statuts">
        <h2 id="statuts" className="display-md mb-6">Niveaux de vérification</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {(['confirmed', 'reported', 'unverified'] as const).map((st) => (
            <div key={st} className="glass rounded-3xl p-6">
              <ValidationBadge status={st} />
              <p className="mt-4 font-display text-4xl font-semibold tabular-nums">{s.byValidation[st]}</p>
              <p className="mt-2 text-sm text-graphite-300">{VALIDATION_HELP[st]}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-amber-300/20 bg-amber-300/[0.04] p-6 text-sm text-graphite-200">
          <p className="font-medium text-amber-100">Pourquoi aucune fiche n’est encore « Vérifiée » ?</p>
          <p className="mt-2">
            Les sites apple.com et support.apple.com n’étaient pas accessibles depuis l’environnement de construction : aucune donnée n’a pu être
            confrontée directement aux fiches officielles. Les données 2016–2025 proviennent de la base éditoriale (statut « À vérifier ») ; les
            produits 2026 proviennent de sources presse identifiées (statut « Rapporté »). La vérification se fait fiche par fiche dans
            l’administration, ou avec le script <code className="rounded bg-white/10 px-1.5">npm run sources:verify</code> depuis une machine ayant accès
            aux sources.
          </p>
        </div>
      </section>

      <section className="page-x mb-20" aria-labelledby="couverture">
        <h2 id="couverture" className="display-md mb-6">Couverture par famille</h2>
        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="w-full min-w-[52rem] text-sm">
            <thead className="bg-white/[0.03] text-left text-xs text-graphite-400">
              <tr>
                {['Famille', 'Fiches', 'Générations', 'Couleurs', 'Prix', 'Dimensions', 'N° de modèle', 'À vérifier', 'Rapportées'].map((h) => (
                  <th key={h} className="p-4 font-normal">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {c.families.map((f) => {
                const ms = modelsByFamily(c, f.slug)
                const n = ms.length
                return (
                  <tr key={f.slug}>
                    <td className="p-4"><Link href={`/${f.slug}`} className="hover:text-cyan-300">{f.name}</Link></td>
                    <td className="p-4 tabular-nums">{n}</td>
                    <td className="p-4 tabular-nums">{generationsByFamily(c, f.slug).length}</td>
                    <td className="p-4 tabular-nums">{pct(ms.filter((m) => m.colors.length).length, n)} %</td>
                    <td className="p-4 tabular-nums">{pct(ms.filter((m) => m.prices.length).length, n)} %</td>
                    <td className="p-4 tabular-nums">{pct(ms.filter((m) => m.dimensions.some((d) => d.weightG || d.heightMm)).length, n)} %</td>
                    <td className="p-4 tabular-nums">{pct(ms.filter((m) => m.variants.length).length, n)} %</td>
                    <td className="p-4 tabular-nums">{ms.filter((m) => m.validation.status === 'unverified').length}</td>
                    <td className="p-4 tabular-nums">{ms.filter((m) => m.validation.status === 'reported').length}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-x mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2" aria-label="Lacunes">
        <div>
          <h2 className="display-md mb-6">Lacunes connues</h2>
          <div className="space-y-6">
            {c.families
              .filter((f) => f.gaps.length)
              .map((f) => (
                <div key={f.slug}>
                  <h3 className="font-display text-base font-semibold">{f.name}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-graphite-300">
                    {f.gaps.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h2 className="display-md mb-6">Signalés, non intégrés</h2>
          <ul className="space-y-4">
            {c.pending.map((p) => (
              <li key={p.name} className="glass rounded-2xl p-5 text-sm">
                <p className="font-medium text-white">{p.name}</p>
                <p className="mt-1 text-graphite-300">{p.reason}</p>
                {p.sources.map((src) => (
                  <a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer" className="mt-2 block break-all text-xs text-cyan-300 hover:underline">
                    {src.title}
                  </a>
                ))}
              </li>
            ))}
          </ul>
          <h2 className="display-md mb-4 mt-12">Fiches incomplètes</h2>
          <p className="mb-4 text-sm text-graphite-300">{incomplete.length} fiches ont au moins un champ attendu non renseigné.</p>
          <ul className="max-h-80 space-y-1 overflow-y-auto rounded-2xl border border-white/10 p-4 text-xs">
            {incomplete.map((m) => (
              <li key={m.slug}>
                <Link href={productHref(m)} className="text-white hover:text-cyan-300">{m.name}</Link>
                <span className="text-graphite-400"> — {missingFields(m).join(', ')}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-x mb-20" aria-labelledby="controle">
        <h2 id="controle" className="display-md mb-6">Contrôles automatiques</h2>
        <p className="text-sm text-graphite-300">
          {errors.length} erreur(s) bloquante(s), {warnings.length} avertissement(s). Les avertissements signalent notamment des numéros de modèle
          partagés entre révisions d’un même boîtier — un cas réel chez Apple, à confirmer humainement.
        </p>
        {warnings.length > 0 && (
          <ul className="mt-4 space-y-1 text-xs text-graphite-400">
            {warnings.slice(0, 30).map((w, i) => (
              <li key={i}>⚠ {w.message}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="page-x" aria-labelledby="sources-liste">
        <h2 id="sources-liste" className="display-md mb-2">Sources référencées</h2>
        <p className="mb-6 text-sm text-graphite-300">
          {sources.size} sources distinctes :{' '}
          {Object.entries(bySourceType)
            .map(([t, n]) => `${n} ${SOURCE_TYPE_LABEL[t]?.toLowerCase() ?? t}`)
            .join(', ')}
          .
        </p>
        <ul className="divide-y divide-white/[0.06] rounded-3xl border border-white/10 text-sm">
          {[...sources.entries()]
            .sort((a, b) => b[1].count - a[1].count)
            .map(([url, src]) => (
              <li key={url} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between">
                <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
                  {src.title}
                  <span className="block break-all text-xs text-graphite-500">{url}</span>
                </a>
                <span className="shrink-0 text-xs text-graphite-400">
                  {SOURCE_TYPE_LABEL[src.type] ?? src.type} · {src.count} fiche{src.count > 1 ? 's' : ''}
                </span>
              </li>
            ))}
        </ul>
      </section>
    </div>
  )
}
