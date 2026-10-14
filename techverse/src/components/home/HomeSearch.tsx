'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const EXAMPLES = ['A2848', 'M1', 'Sierra Blue', 'Lightning', 'iPad mini', 'Ultra']

export function HomeSearch() {
  const [q, setQ] = useState('')
  const router = useRouter()
  return (
    <div>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          if (q.trim()) router.push(`/catalogue?q=${encodeURIComponent(q.trim())}`)
        }}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-ink/60 p-1.5 pl-5 focus-within:border-cyan-300/60"
      >
        <label htmlFor="home-search" className="sr-only">
          Rechercher dans le catalogue
        </label>
        <input
          id="home-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ex. iPhone 12 mini, A2338, Midnight…"
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-graphite-400"
        />
        <button type="submit" className="btn-primary px-4 py-2">
          Rechercher
        </button>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        {EXAMPLES.map((ex) => (
          <button key={ex} type="button" onClick={() => router.push(`/catalogue?q=${encodeURIComponent(ex)}`)} className="chip hover:border-white/40 hover:text-white">
            {ex}
          </button>
        ))}
      </div>
    </div>
  )
}
