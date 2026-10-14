'use client'

import Link from 'next/link'
import { useState, type ReactNode } from 'react'

export interface ExplorerFamily {
  slug: string
  name: string
  tagline: string
  count: number
  span: string
  lines: string[]
  preview: ReactNode
}

/** Liste typographique des familles ; l'aperçu change au survol ou au focus clavier. */
export function FamilyExplorer({ families }: { families: ExplorerFamily[] }) {
  const [active, setActive] = useState(0)
  const current = families[active]
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <ol className="divide-y divide-white/10 border-y border-white/10">
        {families.map((f, i) => (
          <li key={f.slug}>
            <Link
              href={`/${f.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[2.2rem_1fr_auto] items-baseline gap-4 py-4 md:py-5"
              aria-describedby={`fam-${f.slug}`}
            >
              <span className="font-mono text-xs text-graphite-400">{String(i + 1).padStart(2, '0')}</span>
              <span>
                <span className={`font-display text-2xl font-semibold tracking-tight transition md:text-[2.1rem] ${i === active ? 'text-white' : 'text-graphite-300 group-hover:text-white'}`}>
                  {f.name}
                </span>
                <span id={`fam-${f.slug}`} className={`mt-1 block text-sm transition ${i === active ? 'text-graphite-200' : 'text-graphite-400'}`}>
                  {f.tagline}
                </span>
              </span>
              <span className="text-right text-xs text-graphite-400">
                <span className={`block font-display text-lg tabular-nums ${i === active ? 'text-cyan-300' : 'text-graphite-200'}`}>{f.count}</span>
                {f.span}
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <div className="relative hidden lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent">
            <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_50%_40%,rgba(139,61,255,0.25),transparent_60%)]" />
            {families.map((f, i) => (
              <div key={f.slug} className={`absolute inset-0 transition-all duration-700 ${i === active ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`} aria-hidden={i !== active}>
                {f.preview}
              </div>
            ))}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-graphite-400">Gammes</p>
              <p className="mt-2 text-sm text-graphite-100">{current.lines.join(' · ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
