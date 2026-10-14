'use client'

import { useRouter } from 'next/navigation'

export function AdminLogout({ email }: { email: string }) {
  const router = useRouter()
  return (
    <button
      type="button"
      title={email}
      onClick={async () => {
        await fetch('/api/admin/logout', { method: 'POST' })
        router.replace('/admin/login')
        router.refresh()
      }}
      className="whitespace-nowrap rounded-full border border-white/15 px-3 py-1.5 text-graphite-200 hover:border-white/40"
    >
      Déconnexion
    </button>
  )
}
