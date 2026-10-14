'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Hit {
  slug: string
  name: string
  familyName: string
  year?: number
}

export function ComparePicker({ selected }: { selected: { slug: string; name: string }[] }) {
  const router = useRouter()
  const [q, setQ] = useState('')
  const [hits, setHits] = useState<Hit[]>([])
  const full = selected.length >= 4

  useEffect(() => {
    const query = q.trim()
    if (!query) {
      setHits([])
      return
    }
    const ctrl = new AbortController()
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/catalog/search?q=${encodeURIComponent(query)}&limit=8`, { signal: ctrl.signal })
        const data = (await res.json()) as { results: Hit[] }
        setHits(data.results.filter((h) => !selected.some((s) => s.slug === h.slug)))
      } catch {
        /* annulé */
      }
    }, 140)
    return () => {
      clearTimeout(t)
      ctrl.abort()
    }
  }, [q, selected])

  const go = (slugs: string[]) => router.push(slugs.length ? `/comparer?modeles=${slugs.join(',')}` : '/comparer', { scroll: false })

  return (
    <div className="glass rounded-[2rem] p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        {selected.map((s, i) => (
          <span key={s.slug} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 py-1.5 pl-4 pr-1.5 text-sm">
            <span className="text-graphite-400">{i + 1}.</span> {s.name}
            <button
              type="button"
              onClick={() => go(selected.filter((x) => x.slug !== s.slug).map((x) => x.slug))}
              className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-xs hover:bg-white/25"
              aria-label={`Retirer ${s.name}`}
            >
              ✕
            </button>
          </span>
        ))}
        {selected.length === 0 && <span className="text-sm text-graphite-300">Ajoutez de 2 à 4 modèles.</span>}
      </div>
      <div className="relative mt-4">
        <label htmlFor="compare-add" className="sr-only">
          Ajouter un modèle à comparer
        </label>
        <input
          id="compare-add"
          value={q}
          disabled={full}
          onChange={(e) => setQ(e.target.value)}
          placeholder={full ? 'Maximum de 4 modèles atteint' : 'Ajouter un modèle : nom, numéro Axxxx…'}
          className="w-full rounded-full border border-white/15 bg-ink/60 px-5 py-3 text-sm outline-none focus:border-cyan-300/60 disabled:opacity-50"
          autoComplete="off"
        />
        {hits.length > 0 && (
          <ul className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-white/15 bg-ink-800 shadow-2xl" role="listbox">
            {hits.map((h) => (
              <li key={h.slug}>
                <button
                  type="button"
                  onClick={() => {
                    setQ('')
                    go([...selected.map((s) => s.slug), h.slug])
                  }}
                  className="flex w-full items-center justify-between px-5 py-3 text-left text-sm hover:bg-white/[0.06]"
                >
                  <span>{h.name}</span>
                  <span className="text-xs text-graphite-400">
                    {h.familyName} · {h.year}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
