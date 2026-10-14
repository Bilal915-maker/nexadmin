'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'

export interface FacetUI {
  id: string
  label: string
  options: { value: string; label: string; count: number; swatch?: string }[]
}

/**
 * Filtres synchronisés avec l'URL (pages indexables, liens partageables, retour arrière fonctionnel).
 */
export function FilterPanel({ facets, showPrice = true, total }: { facets: FacetUI[]; showPrice?: boolean; total: number }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const [pending, start] = useTransition()
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState(params.get('q') ?? '')
  const [pmin, setPmin] = useState(params.get('prixMin') ?? '')
  const [pmax, setPmax] = useState(params.get('prixMax') ?? '')

  useEffect(() => setQ(params.get('q') ?? ''), [params])

  const push = (next: URLSearchParams) => {
    const s = next.toString()
    start(() => router.replace(`${pathname}${s ? `?${s}` : ''}`, { scroll: false }))
  }

  const toggle = (facet: string, value: string) => {
    const next = new URLSearchParams(params.toString())
    const cur = (next.get(facet) ?? '').split(',').filter(Boolean)
    const has = cur.includes(value)
    const vals = has ? cur.filter((v) => v !== value) : [...cur, value]
    if (vals.length) next.set(facet, vals.join(','))
    else next.delete(facet)
    push(next)
  }

  const setParam = (k: string, v: string) => {
    const next = new URLSearchParams(params.toString())
    if (v) next.set(k, v)
    else next.delete(k)
    push(next)
  }

  const activeCount = facets.reduce((n, f) => n + (params.get(f.id)?.split(',').filter(Boolean).length ?? 0), 0) + (params.get('prixMin') ? 1 : 0) + (params.get('prixMax') ? 1 : 0)

  const body = (
    <div className="space-y-7">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          setParam('q', q.trim())
        }}
      >
        <label htmlFor="filter-q" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-graphite-400">
          Recherche
        </label>
        <div className="flex gap-2">
          <input
            id="filter-q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Nom, Axxxx, puce…"
            className="min-w-0 flex-1 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm outline-none focus:border-cyan-300/60"
          />
          <button type="submit" className="rounded-full border border-white/15 px-3 text-sm hover:border-white/40">
            OK
          </button>
        </div>
      </form>
      {facets
        .filter((f) => f.options.length > 0)
        .map((f) => {
          const selected = (params.get(f.id) ?? '').split(',').filter(Boolean)
          return (
            <fieldset key={f.id}>
              <legend className="mb-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-graphite-400">{f.label}</legend>
              <div className="flex flex-wrap gap-1.5">
                {f.options.map((o) => {
                  const on = selected.includes(o.value)
                  return (
                    <button
                      key={o.value}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(f.id, o.value)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition ${
                        on ? 'border-cyan-300 bg-cyan-300/10 text-white' : 'border-white/10 text-graphite-200 hover:border-white/30'
                      }`}
                    >
                      {o.swatch && <span className="h-3 w-3 rounded-full border border-white/25" style={{ background: o.swatch }} aria-hidden />}
                      {o.label}
                      <span className="text-graphite-400">{o.count}</span>
                    </button>
                  )
                })}
              </div>
            </fieldset>
          )
        })}
      {showPrice && (
        <fieldset>
          <legend className="mb-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-graphite-400">Prix de lancement (US, $)</legend>
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              const next = new URLSearchParams(params.toString())
              if (pmin) next.set('prixMin', pmin)
              else next.delete('prixMin')
              if (pmax) next.set('prixMax', pmax)
              else next.delete('prixMax')
              push(next)
            }}
          >
            <label className="sr-only" htmlFor="pmin">Prix minimum</label>
            <input id="pmin" inputMode="numeric" value={pmin} onChange={(e) => setPmin(e.target.value.replace(/\D/g, ''))} placeholder="min" className="w-20 rounded-full border border-white/15 bg-transparent px-3 py-1.5 text-sm outline-none" />
            <span className="text-graphite-400">–</span>
            <label className="sr-only" htmlFor="pmax">Prix maximum</label>
            <input id="pmax" inputMode="numeric" value={pmax} onChange={(e) => setPmax(e.target.value.replace(/\D/g, ''))} placeholder="max" className="w-20 rounded-full border border-white/15 bg-transparent px-3 py-1.5 text-sm outline-none" />
            <button type="submit" className="rounded-full border border-white/15 px-3 py-1.5 text-xs hover:border-white/40">
              Appliquer
            </button>
          </form>
          <p className="mt-2 text-[11px] text-graphite-500">Les fiches sans prix US documenté sont exclues de ce filtre.</p>
        </fieldset>
      )}
      {activeCount > 0 && (
        <button type="button" onClick={() => push(new URLSearchParams(params.get('q') ? { q: params.get('q')! } : {}))} className="text-sm text-cyan-300 hover:underline">
          Effacer les filtres ({activeCount})
        </button>
      )}
    </div>
  )

  return (
    <>
      <div className="flex items-center justify-between gap-3 lg:hidden">
        <button type="button" onClick={() => setOpen(true)} className="btn-ghost" aria-expanded={open} aria-controls="filtres-mobile">
          Filtres{activeCount ? ` (${activeCount})` : ''}
        </button>
        <span className="text-sm text-graphite-300" aria-live="polite">
          {pending ? 'Mise à jour…' : `${total} résultat${total > 1 ? 's' : ''}`}
        </span>
      </div>
      <aside className="hidden lg:block" aria-label="Filtres">
        <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-10 pr-2 scrollbar-none">
          <p className="mb-6 text-sm text-graphite-300" aria-live="polite">
            {pending ? 'Mise à jour…' : `${total} résultat${total > 1 ? 's' : ''}`}
          </p>
          {body}
        </div>
      </aside>
      {open && (
        <div id="filtres-mobile" className="fixed inset-0 z-[60] flex flex-col bg-ink lg:hidden" role="dialog" aria-modal="true" aria-label="Filtres">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <p className="font-display text-lg">Filtres</p>
            <button type="button" onClick={() => setOpen(false)} className="btn-primary px-4 py-2">
              Voir {total} résultat{total > 1 ? 's' : ''}
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-6">{body}</div>
        </div>
      )}
    </>
  )
}
