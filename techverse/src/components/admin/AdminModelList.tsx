'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

interface Row {
  slug: string
  name: string
  family: string
  released: string
  status: string
  validation: string
  missing: string[]
  numbers: string
}

export function AdminModelList({ models, families }: { models: Row[]; families: { slug: string; name: string }[] }) {
  const [q, setQ] = useState('')
  const [fam, setFam] = useState('')
  const [val, setVal] = useState('')
  const [onlyIncomplete, setOnlyIncomplete] = useState(false)
  const rows = useMemo(() => {
    const n = q.trim().toLowerCase()
    return models
      .filter((m) => (!fam || m.family === fam) && (!val || m.validation === val) && (!onlyIncomplete || m.missing.length))
      .filter((m) => !n || m.name.toLowerCase().includes(n) || m.slug.includes(n) || m.numbers.toLowerCase().includes(n))
      .sort((a, b) => b.released.localeCompare(a.released))
  }, [models, q, fam, val, onlyIncomplete])
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher (nom, slug, Axxxx)" className="min-w-64 flex-1 rounded-full border border-white/15 bg-ink px-4 py-2 text-sm outline-none" aria-label="Rechercher une fiche" />
        <select value={fam} onChange={(e) => setFam(e.target.value)} className="rounded-full border border-white/15 bg-ink px-3 py-2 text-sm" aria-label="Famille">
          <option value="">Toutes les familles</option>
          {families.map((f) => <option key={f.slug} value={f.slug}>{f.name}</option>)}
        </select>
        <select value={val} onChange={(e) => setVal(e.target.value)} className="rounded-full border border-white/15 bg-ink px-3 py-2 text-sm" aria-label="Validation">
          <option value="">Toute validation</option>
          <option value="confirmed">Vérifiées</option>
          <option value="reported">Rapportées</option>
          <option value="unverified">À vérifier</option>
        </select>
        <label className="flex items-center gap-2 px-2 text-sm">
          <input type="checkbox" checked={onlyIncomplete} onChange={(e) => setOnlyIncomplete(e.target.checked)} /> Incomplètes
        </label>
      </div>
      <p className="mb-3 text-xs text-graphite-400">{rows.length} fiche(s)</p>
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[48rem] text-sm">
          <thead className="bg-white/[0.03] text-left text-xs text-graphite-400">
            <tr>
              <th className="p-3 font-normal">Nom</th>
              <th className="p-3 font-normal">Famille</th>
              <th className="p-3 font-normal">Date</th>
              <th className="p-3 font-normal">Statut</th>
              <th className="p-3 font-normal">Validation</th>
              <th className="p-3 font-normal">Manquants</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {rows.map((m) => (
              <tr key={m.slug} className="hover:bg-white/[0.03]">
                <td className="p-3"><Link href={`/admin/modeles/${m.slug}`} className="text-white hover:text-cyan-300">{m.name}</Link><span className="block font-mono text-[11px] text-graphite-500">{m.slug}</span></td>
                <td className="p-3 text-graphite-300">{m.family}</td>
                <td className="p-3 tabular-nums text-graphite-300">{m.released}</td>
                <td className="p-3 text-graphite-300">{m.status}</td>
                <td className="p-3"><span className={m.validation === 'confirmed' ? 'text-emerald-300' : m.validation === 'reported' ? 'text-amber-200' : 'text-volt-300'}>{m.validation}</span></td>
                <td className="p-3 text-xs text-graphite-400">{m.missing.length ? m.missing.join(', ') : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
