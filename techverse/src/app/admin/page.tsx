import Link from 'next/link'
import { adminCatalog } from '@/lib/admin/data'
import { checkCatalog, missingFields } from '@/lib/catalog/integrity'
import { stats } from '@/lib/catalog/query'
import { getPrisma } from '@/lib/db'

export default async function AdminDashboard() {
  const { catalog: c } = await adminCatalog()
  if (!c) return <p className="text-graphite-300">Base de données requise.</p>
  const s = stats(c)
  const issues = checkCatalog(c)
  const errors = issues.filter((i) => i.level === 'error')
  const warnings = issues.filter((i) => i.level === 'warning')
  const incomplete = c.models.map((m) => ({ m, missing: missingFields(m) })).filter((x) => x.missing.length).sort((a, b) => b.missing.length - a.missing.length)
  const audit = await getPrisma().auditLog.findMany({ orderBy: { at: 'desc' }, take: 12 })
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-3xl font-semibold">Tableau de bord</h1>
        <p className="mt-1 text-sm text-graphite-300">Données lues directement dans PostgreSQL.</p>
      </div>
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-6">
        {[
          ['Fiches', s.models],
          ['Générations', s.generations],
          ['Vérifiées', s.byValidation.confirmed],
          ['Rapportées', s.byValidation.reported],
          ['À vérifier', s.byValidation.unverified],
          ['Incomplètes', incomplete.length],
        ].map(([k, v]) => (
          <div key={k as string} className="rounded-2xl border border-white/10 p-4">
            <dt className="text-xs text-graphite-400">{k}</dt>
            <dd className="font-display text-2xl tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 p-5">
          <h2 className="font-display text-lg">Contrôles d’intégrité</h2>
          <p className="mt-1 text-sm text-graphite-300">{errors.length} erreur(s), {warnings.length} avertissement(s) (doublons de nom, numéros partagés, compatibilités cassées…).</p>
          <ul className="mt-4 max-h-80 space-y-1 overflow-y-auto text-xs">
            {[...errors, ...warnings].map((i, k) => (
              <li key={k} className={i.level === 'error' ? 'text-red-300' : 'text-amber-200'}>
                {i.level === 'error' ? '✖' : '⚠'} {i.model ? <Link className="underline" href={`/admin/modeles/${i.model}`}>{i.model}</Link> : null} {i.message}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-white/10 p-5">
          <h2 className="font-display text-lg">Champs manquants</h2>
          <ul className="mt-4 max-h-80 space-y-1 overflow-y-auto text-xs">
            {incomplete.slice(0, 80).map(({ m, missing }) => (
              <li key={m.slug}>
                <Link href={`/admin/modeles/${m.slug}`} className="text-white hover:text-cyan-300">{m.name}</Link>
                <span className="text-graphite-400"> — {missing.join(', ')}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="rounded-2xl border border-white/10 p-5">
        <h2 className="font-display text-lg">Journal des modifications</h2>
        <ul className="mt-4 divide-y divide-white/[0.06] text-sm">
          {audit.map((a) => (
            <li key={a.id} className="flex justify-between gap-4 py-2">
              <span>
                <span className="text-graphite-400">{a.action}</span> {a.entity} <span className="font-mono">{a.entityId}</span>
              </span>
              <span className="text-xs text-graphite-400">{a.actor} · {a.at.toISOString().replace('T', ' ').slice(0, 16)}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
