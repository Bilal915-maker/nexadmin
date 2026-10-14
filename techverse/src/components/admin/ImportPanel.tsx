'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Row {
  index: number
  slug?: string
  name?: string
  action: 'create' | 'update' | 'error'
  errors: string[]
  warnings: string[]
}
interface Report {
  format: string
  rows: Row[]
  summary: { create: number; update: number; error: number; warnings: number }
}

export function ImportPanel() {
  const router = useRouter()
  const [content, setContent] = useState('')
  const [report, setReport] = useState<Report | null>(null)
  const [msg, setMsg] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const call = async (apply: boolean) => {
    setBusy(true)
    setMsg(null)
    const res = await fetch('/api/admin/import', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content, apply }) })
    const data = await res.json().catch(() => ({}))
    setBusy(false)
    if (!res.ok) return setMsg(data.error ?? 'Erreur')
    if (apply) {
      setMsg(`${data.applied} fiche(s) importée(s).`)
      setReport(null)
      router.refresh()
    } else setReport(data.report)
  }

  return (
    <div className="space-y-4">
      <label className="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:border-white/40">
        Choisir un fichier (.json, .csv)
        <input
          type="file"
          accept=".json,.csv,application/json,text/csv"
          className="sr-only"
          onChange={async (e) => {
            const f = e.target.files?.[0]
            if (f) setContent(await f.text())
          }}
        />
      </label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={12} placeholder="…ou collez le contenu ici" className="w-full rounded-2xl border border-white/15 bg-ink p-4 font-mono text-xs outline-none" aria-label="Contenu à importer" />
      <div className="flex gap-2">
        <button type="button" disabled={!content || busy} onClick={() => call(false)} className="btn-ghost disabled:opacity-50">Analyser</button>
        <button type="button" disabled={!report || report.summary.error > 0 || busy} onClick={() => call(true)} className="btn-primary disabled:opacity-50">Appliquer l’import</button>
      </div>
      {msg && <p role="status" className="text-sm text-graphite-200">{msg}</p>}
      {report && (
        <div className="rounded-2xl border border-white/10 p-5">
          <p className="text-sm">
            Format {report.format.toUpperCase()} — <span className="text-emerald-300">{report.summary.create} création(s)</span>, <span className="text-cyan-300">{report.summary.update} mise(s) à jour</span>,{' '}
            <span className="text-red-300">{report.summary.error} erreur(s)</span>, <span className="text-amber-200">{report.summary.warnings} avertissement(s)</span>
          </p>
          <ul className="mt-4 max-h-96 space-y-2 overflow-y-auto text-xs">
            {report.rows.map((r) => (
              <li key={r.index} className="rounded-xl border border-white/[0.07] p-3">
                <span className={r.action === 'error' ? 'text-red-300' : r.action === 'create' ? 'text-emerald-300' : 'text-cyan-300'}>{r.action}</span> · ligne {r.index + 1} · {r.name ?? '—'} <span className="font-mono text-graphite-500">{r.slug}</span>
                {r.errors.map((e, i) => <p key={i} className="text-red-300">✖ {e}</p>)}
                {r.warnings.map((w, i) => <p key={i} className="text-amber-200">⚠ {w}</p>)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
