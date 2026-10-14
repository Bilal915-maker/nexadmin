'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavFamily } from './SiteHeader'

export function SiteFooter({ families, stats, referenceDate, source }: { families: NavFamily[]; stats: { models: number; generations: number }; referenceDate: string; source: string }) {
  const pathname = usePathname()
  if (pathname?.startsWith('/admin')) return null
  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="page-x grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_2fr]">
        <div className="space-y-5">
          <Link href="/" className="font-display text-lg font-semibold tracking-[0.18em]">
            TECHVERSE
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-graphite-300">
            Catalogue historique indépendant des produits Apple commercialisés depuis le 1er janvier 2016 : {stats.models} fiches,{' '}
            {stats.generations} générations. Chaque donnée affiche sa source et son niveau de vérification.
          </p>
          <p className="text-xs text-graphite-400">
            Date de référence du catalogue : {referenceDate} · Source des données : {source === 'database' ? 'base PostgreSQL' : 'fichiers versionnés'}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">Familles</h2>
            <ul className="space-y-2 text-sm">
              {families.map((f) => (
                <li key={f.slug}>
                  <Link href={`/${f.slug}`} className="text-graphite-200 hover:text-white">
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">Explorer</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/catalogue" className="text-graphite-200 hover:text-white">Catalogue et filtres</Link></li>
              <li><Link href="/chronologie" className="text-graphite-200 hover:text-white">Chronologie 2016 → aujourd’hui</Link></li>
              <li><Link href="/comparer" className="text-graphite-200 hover:text-white">Comparateur</Link></li>
              <li><Link href="/inventaire" className="text-graphite-200 hover:text-white">Sources et couverture</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">À savoir</h2>
            <ul className="space-y-2 text-sm text-graphite-300">
              <li>Les visuels 3D et 2D sont des représentations procédurales schématiques, pas des reproductions exactes.</li>
              <li>Les teintes affichées sont des approximations des finitions officielles.</li>
              <li>
                <Link href="/api/catalog/models" className="text-graphite-200 hover:text-white">API JSON du catalogue</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="page-x py-6 text-xs leading-relaxed text-graphite-400">
          TECHVERSE est un projet indépendant, non affilié à Apple Inc. Apple, iPhone, iPad, Mac, Apple Watch, AirPods, Apple TV, HomePod, Apple Vision Pro, iPod et AirTag
          sont des marques d’Apple Inc. Aucune image ni modèle 3D propriétaire n’est utilisé sans autorisation.
        </p>
      </div>
    </footer>
  )
}
