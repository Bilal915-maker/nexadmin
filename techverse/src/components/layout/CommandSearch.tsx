'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

interface Hit {
  slug: string
  family: string
  familyName: string
  name: string
  year?: number
  status: string
  colors: { name: string; hex: string }[]
  matched?: string
}

/** Palette de recherche globale : interroge l'API sur l'ensemble du catalogue. */
export function CommandSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('')
  const [hits, setHits] = useState<Hit[]>([])
  const [active, setActive] = useState(0)
  const [loading, setLoading] = useState(false)
  const input = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (open) {
      setTimeout(() => input.current?.focus(), 30)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const query = q.trim()
    if (!query) {
      setHits([])
      return
    }
    setLoading(true)
    const ctrl = new AbortController()
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/catalog/search?q=${encodeURIComponent(query)}&limit=12`, { signal: ctrl.signal })
        const data = (await res.json()) as { results: Hit[] }
        setHits(data.results)
        setActive(0)
      } catch {
        /* requête annulée */
      } finally {
        setLoading(false)
      }
    }, 140)
    return () => {
      clearTimeout(t)
      ctrl.abort()
    }
  }, [q, open])

  if (!open) return null

  const go = (h: Hit) => {
    onClose()
    router.push(`/${h.family}/${h.slug}`)
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center bg-ink/70 px-4 pt-[12vh] backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Recherche dans le catalogue" onClick={onClose}>
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-ink-800 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (hits[active]) go(hits[active])
            else if (q.trim()) {
              onClose()
              router.push(`/catalogue?q=${encodeURIComponent(q.trim())}`)
            }
          }}
          className="flex items-center gap-3 border-b border-white/10 px-5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-graphite-300" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setActive((a) => Math.min(a + 1, hits.length - 1))
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setActive((a) => Math.max(a - 1, 0))
              } else if (e.key === 'Escape') onClose()
            }}
            placeholder="Nom, numéro de modèle (A2848), puce, couleur…"
            className="h-16 flex-1 bg-transparent text-base text-white outline-none placeholder:text-graphite-400"
            aria-label="Rechercher"
            role="combobox"
            aria-expanded={hits.length > 0}
            aria-controls="search-results"
            aria-activedescendant={hits[active] ? `hit-${hits[active].slug}` : undefined}
          />
          <button type="button" onClick={onClose} className="rounded-md border border-white/15 px-2 py-1 text-[11px] text-graphite-300">
            Échap
          </button>
        </form>
        <ul id="search-results" role="listbox" className="max-h-[55vh] overflow-y-auto p-2">
          {hits.map((h, i) => (
            <li key={h.slug} id={`hit-${h.slug}`} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(h)}
                className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition ${i === active ? 'bg-white/[0.08]' : ''}`}
              >
                <span className="flex w-16 shrink-0 gap-0.5">
                  {h.colors.slice(0, 4).map((c) => (
                    <span key={c.name} className="h-3 w-3 rounded-full border border-white/20" style={{ background: c.hex }} />
                  ))}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm text-white">{h.name}</span>
                  <span className="block truncate text-xs text-graphite-400">
                    {h.familyName} · {h.year ?? '—'}
                    {h.matched ? ` · ${h.matched}` : ''}
                  </span>
                </span>
                <span className="text-xs text-graphite-400">↵</span>
              </button>
            </li>
          ))}
          {!loading && q.trim() && hits.length === 0 && <li className="px-4 py-6 text-sm text-graphite-300">Aucun résultat pour « {q} ».</li>}
          {!q.trim() && (
            <li className="px-4 py-5 text-sm text-graphite-300">
              Recherche sur les {''}
              <Link href="/catalogue" onClick={onClose} className="text-cyan-300 underline-offset-4 hover:underline">
                fiches du catalogue complet
              </Link>{' '}
              : noms, alias, numéros de modèle, identifiants matériels, puces et couleurs.
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
