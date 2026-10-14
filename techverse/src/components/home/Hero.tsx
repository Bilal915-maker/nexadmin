'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import type { UniverseItem } from '@/components/three/UniverseScene'

const UniverseScene = dynamic(() => import('@/components/three/UniverseScene'), { ssr: false })

function pickItems(pool: UniverseItem[][], total: number): UniverseItem[] {
  const out: UniverseItem[] = []
  const rand = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)]
  for (const group of pool) if (group.length) out.push(rand(group))
  const rest = pool.flat().filter((x) => !out.includes(x))
  while (out.length < total && rest.length) out.push(rest.splice(Math.floor(Math.random() * rest.length), 1)[0])
  return out.sort(() => Math.random() - 0.5)
}

export function Hero({
  pool,
  stats,
  fallback,
}: {
  pool: UniverseItem[][]
  stats: { models: number; generations: number; families: number; colors: number; firstYear: number; lastYear: number }
  fallback: ReactNode
}) {
  const section = useRef<HTMLElement>(null)
  const [items, setItems] = useState<UniverseItem[]>([])
  const [ready, setReady] = useState(false)
  const [webgl, setWebgl] = useState(true)
  const [focus, setFocus] = useState<UniverseItem | null>(null)
  const [trigger, setTrigger] = useState<HTMLElement | null>(null)

  useEffect(() => {
    try {
      const c = document.createElement('canvas')
      setWebgl(!!(c.getContext('webgl2') || c.getContext('webgl')))
    } catch {
      setWebgl(false)
    }
    // Sélection aléatoire à chaque visite : aucune référence n'est mise en avant durablement
    setItems(pickItems(pool, 11))
    setTrigger(section.current)
  }, [pool])

  const statLine = useMemo(
    () => [
      [stats.models, 'fiches produits'],
      [stats.generations, 'générations'],
      [stats.families, 'familles'],
      [stats.colors, 'finitions référencées'],
    ],
    [stats],
  )

  return (
    <section ref={section} className="relative h-[175vh] md:h-[230vh]" aria-labelledby="hero-title">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_42%,rgba(139,61,255,0.28),transparent_70%),radial-gradient(ellipse_40%_35%_at_62%_58%,rgba(31,224,255,0.14),transparent_70%)]" />
        <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? 'opacity-0' : 'opacity-100'}`} aria-hidden>
          {fallback}
        </div>
        {webgl && items.length > 0 && (
          <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}>
            <UniverseScene items={items} scrollTrigger={trigger} onFocus={setFocus} onReady={() => setReady(true)} />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent md:bg-gradient-to-r md:from-ink/85 md:via-ink/30" aria-hidden />
        <div className="grain absolute inset-0" aria-hidden />

        <div className="page-x relative flex h-full flex-col justify-end pb-[max(2.5rem,6vh)] pt-24">
          <p className="eyebrow mb-5">
            Catalogue historique · {stats.firstYear === 2015 ? 2016 : stats.firstYear} → {stats.lastYear}
          </p>
          <h1 id="hero-title" className="display-xl max-w-5xl">
            Tout l’univers Apple,
            <br />
            <span className="text-gradient">génération par génération.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite-200 md:text-lg">
            Chaque iPhone, iPad, Mac, Apple Watch, AirPods, écran, accessoire et appareil domestique commercialisé depuis 2016 — avec ses
            finitions d’origine, ses caractéristiques et ses sources.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/catalogue" className="btn-primary">
              Explorer le catalogue
            </Link>
            <Link href="/comparer" className="btn-ghost">
              Ouvrir le comparateur
            </Link>
          </div>
          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-4">
            {statLine.map(([n, label]) => (
              <div key={label as string}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-semibold tabular-nums md:text-3xl">{n}</dd>
                <dd className="text-xs text-graphite-300">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {focus && ready && (
          <Link
            href={focus.href}
            className="absolute right-4 top-24 hidden max-w-[16rem] rounded-2xl border border-white/10 bg-ink/50 px-4 py-3 text-right backdrop-blur-md transition hover:border-white/30 md:right-10 md:block"
          >
            <span className="block text-[10px] uppercase tracking-[0.2em] text-graphite-400">Au premier plan</span>
            <span className="mt-1 block text-sm text-white">{focus.name}</span>
            <span className="block text-xs text-graphite-300">{focus.year ?? ''} · représentation procédurale →</span>
          </Link>
        )}
        <div className="absolute bottom-6 right-6 hidden items-center gap-2 text-xs text-graphite-400 md:flex" aria-hidden>
          <span className="h-8 w-[1px] animate-pulse bg-gradient-to-b from-transparent to-cyan-300" /> Défiler pour traverser la constellation
        </div>
      </div>
    </section>
  )
}
