'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { CompareSection } from '@/lib/catalog/query'

export function CompareTable({ sections, heads }: { sections: CompareSection[]; heads: { slug: string; name: string; href: string; year?: string }[] }) {
  const [onlyDiff, setOnlyDiff] = useState(false)
  const cols = heads.length
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <label className="inline-flex cursor-pointer items-center gap-3 text-sm">
          <input type="checkbox" className="peer sr-only" checked={onlyDiff} onChange={(e) => setOnlyDiff(e.target.checked)} />
          <span className="relative h-6 w-11 rounded-full bg-white/15 transition peer-checked:bg-cyan-300 peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-300" aria-hidden>
            <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${onlyDiff ? 'left-6' : 'left-1'}`} />
          </span>
          Afficher uniquement les différences
        </label>
        <p className="text-xs text-graphite-400">
          <span className="mr-1 inline-block h-2 w-2 rounded-full bg-cyan-300 align-middle" /> valeur différente entre les modèles
        </p>
      </div>
      <div className="overflow-x-auto rounded-3xl border border-white/10">
        <table className="w-full min-w-[42rem] border-collapse text-sm">
          <thead className="bg-ink/95">
            <tr>
              <th scope="col" className="w-48 p-4 text-left text-xs font-normal text-graphite-400">
                Critère
              </th>
              {heads.map((h) => (
                <th key={h.slug} scope="col" className="p-4 text-left align-bottom">
                  <Link href={h.href} className="font-display text-base font-semibold hover:text-cyan-300">
                    {h.name}
                  </Link>
                  <span className="block text-xs font-normal text-graphite-400">{h.year}</span>
                </th>
              ))}
            </tr>
          </thead>
          {sections.map((s) => {
            const rows = onlyDiff ? s.rows.filter((r) => r.differs) : s.rows
            if (!rows.length) return null
            return (
              <tbody key={s.id}>
                <tr>
                  <th colSpan={cols + 1} scope="colgroup" className="border-t border-white/10 bg-white/[0.03] px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-graphite-300">
                    {s.label}
                  </th>
                </tr>
                {rows.map((r) => (
                  <tr key={r.label} className="border-t border-white/[0.06]">
                    <th scope="row" className="p-4 text-left align-top text-xs font-normal text-graphite-300">
                      {r.differs && <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-300" aria-label="Différence" />}
                      {r.label}
                    </th>
                    {r.values.map((v, i) => (
                      <td key={i} className={`p-4 align-top ${r.differs ? 'text-white' : 'text-graphite-200'}`}>
                        {r.kind === 'colors' && r.colors?.[i]?.length ? (
                          <span className="flex flex-wrap gap-1.5">
                            {r.colors[i].map((c) => (
                              <span key={c.name} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 py-0.5 pl-0.5 pr-2 text-xs">
                                <span className="h-4 w-4 rounded-full border border-white/20" style={{ background: c.hex }} aria-hidden />
                                {c.name}
                              </span>
                            ))}
                          </span>
                        ) : v ?? <span className="italic text-graphite-500">Non documenté</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            )
          })}
        </table>
      </div>
    </div>
  )
}
