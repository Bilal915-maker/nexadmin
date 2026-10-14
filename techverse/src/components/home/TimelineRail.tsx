'use client'

import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'

export interface TimelineEntry {
  slug: string
  href: string
  name: string
  family: string
  familyName: string
  date?: string
  dateLabel: string
  colors: string[]
  status: string
}

/** Chronologie interactive : sélection d'une année au clavier, à la souris ou au toucher. */
export function TimelineRail({ years, entries }: { years: number[]; entries: Record<number, TimelineEntry[]> }) {
  const [year, setYear] = useState(years[years.length - 1])
  const [family, setFamily] = useState<string>('all')
  const rail = useRef<HTMLDivElement>(null)
  const list = entries[year] ?? []
  const familiesInYear = useMemo(() => [...new Map(list.map((e) => [e.family, e.familyName])).entries()], [list])
  const shown = family === 'all' ? list : list.filter((e) => e.family === family)
  const max = Math.max(...years.map((y) => entries[y]?.length ?? 0))

  const onKey = (e: React.KeyboardEvent) => {
    const i = years.indexOf(year)
    if (e.key === 'ArrowRight' && i < years.length - 1) setYear(years[i + 1])
    if (e.key === 'ArrowLeft' && i > 0) setYear(years[i - 1])
  }

  return (
    <div>
      <div ref={rail} className="overflow-x-auto scrollbar-none" role="tablist" aria-label="Années" onKeyDown={onKey}>
        <div className="flex min-w-max items-end gap-1 border-b border-white/10 px-4 sm:px-6 lg:px-10">
          {years.map((y) => {
            const n = entries[y]?.length ?? 0
            const active = y === year
            return (
              <button
                key={y}
                role="tab"
                aria-selected={active}
                tabIndex={active ? 0 : -1}
                onClick={() => {
                  setYear(y)
                  setFamily('all')
                }}
                className="group flex w-[4.6rem] flex-col items-center gap-2 pb-3 pt-2"
              >
                <span className="flex h-24 items-end" aria-hidden>
                  <span
                    className={`w-2 rounded-full transition-all duration-500 ${active ? 'bg-gradient-to-t from-volt to-cyan' : 'bg-white/15 group-hover:bg-white/30'}`}
                    style={{ height: `${12 + (n / max) * 80}px` }}
                  />
                </span>
                <span className={`font-display text-sm tabular-nums transition ${active ? 'text-white' : 'text-graphite-400 group-hover:text-graphite-100'}`}>{y}</span>
                <span className="text-[10px] text-graphite-500">{n}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="page-x pt-8" role="tabpanel" aria-label={`Produits ${year}`}>
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <p className="mr-3 font-display text-4xl font-semibold tabular-nums md:text-6xl">{year}</p>
          <p className="mr-4 text-sm text-graphite-300">
            {list.length} lancement{list.length > 1 ? 's' : ''}
            {year === 2015 ? ' (exceptions hors période documentées)' : ''}
          </p>
          <button onClick={() => setFamily('all')} className={`chip ${family === 'all' ? 'border-white/50 text-white' : ''}`}>
            Tout
          </button>
          {familiesInYear.map(([slug, name]) => (
            <button key={slug} onClick={() => setFamily(slug)} className={`chip ${family === slug ? 'border-white/50 text-white' : ''}`}>
              {name}
            </button>
          ))}
        </div>
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((e) => (
            <li key={e.slug} className="bg-ink">
              <Link href={e.href} className="flex h-full items-center gap-4 px-5 py-4 transition hover:bg-white/[0.04]">
                <span className="flex w-12 shrink-0 flex-wrap gap-0.5" aria-hidden>
                  {e.colors.slice(0, 6).map((c, i) => (
                    <span key={i} className="h-2.5 w-2.5 rounded-full border border-white/20" style={{ background: c }} />
                  ))}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm text-white">{e.name}</span>
                  <span className="block text-xs text-graphite-400">
                    {e.familyName} · {e.dateLabel}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
