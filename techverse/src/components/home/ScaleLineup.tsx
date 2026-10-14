'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useEffect, useRef, useState, type ReactNode } from 'react'

export interface LineupTab {
  id: string
  label: string
  count: number
  items: { slug: string; href: string; name: string; year?: string; node: ReactNode }[]
}

/**
 * Alignement de toute une famille à l'échelle réelle (1 mm = n px).
 * Bureau : défilement horizontal épinglé (GSAP ScrollTrigger). Mobile / animations réduites : défilement natif.
 */
export function ScaleLineup({ tabs, mmLabel }: { tabs: LineupTab[]; mmLabel: Record<string, number> }) {
  const [tab, setTab] = useState(tabs[0]?.id)
  const section = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const current = tabs.find((t) => t.id === tab) ?? tabs[0]

  useEffect(() => {
    const el = section.current
    const tr = track.current
    if (!el || !tr) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktop = window.matchMedia('(min-width: 1024px)').matches
    if (reduced || !desktop) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const distance = () => Math.max(0, tr.scrollWidth - el.clientWidth + 80)
      gsap.to(tr, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top top+=64', end: () => `+=${distance()}`, pin: true, scrub: 0.8, invalidateOnRefresh: true },
      })
    }, el)
    return () => ctx.revert()
  }, [tab])

  return (
    <div ref={section} className="relative overflow-hidden py-6">
      <div className="page-x mb-8 flex flex-wrap items-center gap-2" role="tablist" aria-label="Famille affichée à l’échelle">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === tab}
            onClick={() => setTab(t.id)}
            className={`rounded-full px-4 py-2 text-sm transition ${t.id === tab ? 'bg-ink text-white' : 'border border-ink/15 text-ink/70 hover:border-ink/40'}`}
          >
            {t.label} <span className="opacity-60">· {t.count}</span>
          </button>
        ))}
        <span className="ml-auto text-xs text-ink/50">Échelle : 1 mm = {mmLabel[current.id]} px · vues arrière schématiques</span>
      </div>
      <div className="overflow-x-auto scrollbar-none lg:overflow-visible">
        <div ref={track} className="flex w-max items-end gap-8 px-4 pb-4 sm:px-6 lg:px-10" role="list">
          {current.items.map((it) => (
            <Link key={it.slug} href={it.href} role="listitem" className="group flex flex-col items-center gap-3">
              <div className="transition duration-500 group-hover:-translate-y-2">{it.node}</div>
              <div className="w-28 text-center">
                <p className="text-[11px] font-medium leading-tight text-ink">{it.name}</p>
                <p className="text-[10px] text-ink/50">{it.year}</p>
              </div>
            </Link>
          ))}
          <div className="flex shrink-0 flex-col items-center justify-end gap-2 pl-6 pr-10">
            <div className="h-[2px] bg-ink" style={{ width: `${(mmLabel[current.id] ?? 1) * 100}px` }} />
            <p className="text-[10px] text-ink/60">10 cm</p>
          </div>
        </div>
      </div>
    </div>
  )
}
