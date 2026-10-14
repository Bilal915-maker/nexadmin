'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  return (
    <div className="mx-auto mt-16 max-w-sm">
      <h1 className="font-display text-2xl font-semibold">Connexion</h1>
      <p className="mt-2 text-sm text-graphite-300">Accès réservé à l’administrateur du catalogue.</p>
      <form
        className="mt-8 space-y-4"
        onSubmit={async (e) => {
          e.preventDefault()
          setBusy(true)
          setError(null)
          const fd = new FormData(e.currentTarget)
          const res = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: fd.get('email'), password: fd.get('password') }),
          })
          setBusy(false)
          if (res.ok) {
            router.replace('/admin')
            router.refresh()
          } else {
            const data = await res.json().catch(() => ({}))
            setError(data.error ?? 'Connexion impossible')
          }
        }}
      >
        <label className="block text-sm">
          E-mail
          <input name="email" type="email" required autoComplete="username" className="mt-1 w-full rounded-xl border border-white/15 bg-ink px-4 py-2.5 outline-none focus:border-cyan-300/60" />
        </label>
        <label className="block text-sm">
          Mot de passe
          <input name="password" type="password" required autoComplete="current-password" className="mt-1 w-full rounded-xl border border-white/15 bg-ink px-4 py-2.5 outline-none focus:border-cyan-300/60" />
        </label>
        {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
        <button type="submit" disabled={busy} className="btn-primary w-full disabled:opacity-60">
          {busy ? 'Connexion…' : 'Se connecter'}
        </button>
      </form>
    </div>
  )
}
