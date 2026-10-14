'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function GenerationForm({ families }: { families: { slug: string; name: string; lines: { slug: string; name: string }[] }[] }) {
  const router = useRouter()
  const [family, setFamily] = useState(families[0]?.slug ?? '')
  const [msg, setMsg] = useState<string | null>(null)
  const fam = families.find((f) => f.slug === family)
  return (
    <form
      className="sticky top-6 h-fit space-y-3 rounded-2xl border border-white/10 p-5"
      onSubmit={async (e) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        const res = await fetch('/api/admin/generations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug: fd.get('slug'), family, line: fd.get('line'), name: fd.get('name'), year: Number(fd.get('year')), order: 0 }),
        })
        const data = await res.json().catch(() => ({}))
        setMsg(res.ok ? 'Génération enregistrée.' : data.error ?? 'Erreur')
        if (res.ok) router.refresh()
      }}
    >
      <h2 className="font-display text-lg">Créer / modifier une génération</h2>
      <p className="text-xs text-graphite-400">Un slug existant est mis à jour.</p>
      <label className="block text-xs">Famille
        <select value={family} onChange={(e) => setFamily(e.target.value)} className="mt-1 w-full rounded-lg border border-white/15 bg-ink px-3 py-2 text-sm">
          {families.map((f) => <option key={f.slug} value={f.slug}>{f.name}</option>)}
        </select>
      </label>
      <label className="block text-xs">Gamme principale
        <select name="line" className="mt-1 w-full rounded-lg border border-white/15 bg-ink px-3 py-2 text-sm">
          <option value="series">Plusieurs gammes</option>
          {fam?.lines.map((l) => <option key={l.slug} value={l.slug}>{l.name}</option>)}
        </select>
      </label>
      <label className="block text-xs">Slug<input name="slug" required pattern="[a-z0-9]+(-[a-z0-9]+)*" className="mt-1 w-full rounded-lg border border-white/15 bg-ink px-3 py-2 text-sm" /></label>
      <label className="block text-xs">Nom<input name="name" required className="mt-1 w-full rounded-lg border border-white/15 bg-ink px-3 py-2 text-sm" /></label>
      <label className="block text-xs">Année<input name="year" type="number" min={2000} max={2100} required className="mt-1 w-full rounded-lg border border-white/15 bg-ink px-3 py-2 text-sm" /></label>
      <button className="btn-primary w-full">Enregistrer</button>
      {msg && <p role="status" className="text-xs text-graphite-300">{msg}</p>}
    </form>
  )
}
