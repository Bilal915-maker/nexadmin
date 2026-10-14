import type { Metadata } from 'next'
import Link from 'next/link'
import { DeviceSilhouette } from '@/components/silhouette/DeviceSilhouette'
import { StatusBadge } from '@/components/ui/Badges'
import { Reveal } from '@/components/ui/Reveal'
import { familyBySlug, timeline } from '@/lib/catalog/query'
import { getCatalog } from '@/lib/catalog/repository'
import { formatDate } from '@/lib/format'
import { productHref } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Chronologie des produits Apple depuis 2016',
  description: 'Tous les lancements Apple année par année depuis 2016, avec dates d’annonce et de commercialisation.',
  alternates: { canonical: '/chronologie' },
}

export default async function ChronologyPage({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const c = await getCatalog()
  const fam = searchParams.famille
  const t = timeline(c)
    .map((y) => ({ ...y, models: fam ? y.models.filter((m) => m.family === fam) : y.models }))
    .filter((y) => y.models.length)
  return (
    <div className="pb-24 pt-28">
      <header className="page-x mb-12">
        <p className="eyebrow">Chronologie</p>
        <h1 className="display-lg mt-4">De 2016 à aujourd’hui.</h1>
        <p className="mt-4 max-w-2xl text-graphite-300">
          Classement par date de commercialisation (ou d’annonce lorsqu’elle seule est connue). Les exceptions antérieures à 2016 sont signalées
          dans leurs fiches.
        </p>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Filtrer par famille">
          <Link href="/chronologie" className={`chip ${!fam ? 'border-white/50 text-white' : ''}`}>Toutes</Link>
          {c.families.map((f) => (
            <Link key={f.slug} href={`/chronologie?famille=${f.slug}`} className={`chip ${fam === f.slug ? 'border-white/50 text-white' : ''}`}>
              {f.shortName}
            </Link>
          ))}
        </nav>
        <nav className="mt-6 overflow-x-auto scrollbar-none" aria-label="Années">
          <ol className="flex min-w-max gap-4 font-display text-sm text-graphite-400">
            {t.map((y) => (
              <li key={y.year}>
                <a href={`#y${y.year}`} className="hover:text-white">{y.year}</a>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <ol className="page-x relative">
        <span className="absolute bottom-0 left-[1.35rem] top-0 w-px bg-gradient-to-b from-volt via-cyan to-transparent md:left-[7.5rem]" aria-hidden />
        {t.map((y) => (
          <li key={y.year} id={`y${y.year}`} className="relative scroll-mt-24 pb-16">
            <div className="mb-6 flex items-center gap-4 md:gap-8">
              <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-ink font-display text-[11px] md:hidden">{String(y.year).slice(2)}</span>
              <h2 className="hidden w-24 text-right font-display text-3xl font-semibold tabular-nums md:block">{y.year}</h2>
              <span className="relative z-10 hidden h-3 w-3 rounded-full bg-cyan-300 md:block" aria-hidden />
              <p className="text-sm text-graphite-400">
                <span className="font-display text-xl text-white md:hidden">{y.year} · </span>
                {y.models.length} lancement{y.models.length > 1 ? 's' : ''}
              </p>
            </div>
            <ul className="ml-14 grid grid-cols-1 gap-3 md:ml-[10rem] md:grid-cols-2 xl:grid-cols-3">
              {y.models.map((m, i) => (
                <Reveal as="li" key={m.slug} delay={(i % 6) * 50}>
                  <Link href={productHref(m)} className="glass card-hover flex items-center gap-4 rounded-2xl p-4">
                    <span className="h-16 w-14 shrink-0">
                      <DeviceSilhouette model={m} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm text-white">{m.name}</span>
                      <span className="block text-xs text-graphite-400">
                        {familyBySlug(c, m.family)?.shortName} · {m.released ? formatDate(m.released) : `annoncé le ${formatDate(m.announced)}`}
                      </span>
                    </span>
                    <StatusBadge status={m.status} />
                  </Link>
                </Reveal>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  )
}
