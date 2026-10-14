'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const OPTIONS: [string, string][] = [
  ['release-desc', 'Plus récents'],
  ['release-asc', 'Plus anciens'],
  ['name', 'Nom (A → Z)'],
  ['price-asc', 'Prix de lancement croissant'],
  ['price-desc', 'Prix de lancement décroissant'],
]

export function SortSelect({ value, withRelevance }: { value: string; withRelevance?: boolean }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  return (
    <label className="flex items-center gap-2 text-sm text-graphite-300">
      Trier
      <select
        value={value}
        onChange={(e) => {
          const next = new URLSearchParams(params.toString())
          next.set('sort', e.target.value)
          router.replace(`${pathname}?${next.toString()}`, { scroll: false })
        }}
        className="rounded-full border border-white/15 bg-ink px-3 py-1.5 text-sm text-white outline-none"
      >
        {withRelevance && <option value="relevance">Pertinence</option>}
        {OPTIONS.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
    </label>
  )
}
