import type { Metadata } from 'next'
import Link from 'next/link'
import { AdminLogout } from '@/components/admin/AdminLogout'
import { getAdminSession } from '@/lib/auth/guard'
import { adminConfig } from '@/lib/auth/session'
import { isDatabaseConfigured } from '@/lib/db'

export const metadata: Metadata = { title: 'Administration', robots: { index: false, follow: false } }
export const dynamic = 'force-dynamic'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cfg = adminConfig()
  const session = await getAdminSession()
  const db = isDatabaseConfigured()
  return (
    <div className="min-h-screen bg-ink-900">
      <header className="border-b border-white/10 bg-ink">
        <div className="page-x flex h-14 items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-display text-sm font-semibold tracking-[0.18em]">TECHVERSE</Link>
            <span className="rounded-full border border-volt-300/40 px-2 py-0.5 text-[11px] text-volt-300">Administration</span>
          </div>
          {session && (
            <nav className="flex items-center gap-1 overflow-x-auto text-sm" aria-label="Administration">
              {[
                ['/admin', 'Tableau de bord'],
                ['/admin/modeles', 'Fiches'],
                ['/admin/modeles/nouveau', 'Nouvelle fiche'],
                ['/admin/generations', 'Générations'],
                ['/admin/import', 'Import'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="whitespace-nowrap rounded-full px-3 py-1.5 text-graphite-200 hover:bg-white/5 hover:text-white">
                  {label}
                </Link>
              ))}
              <a href="/api/admin/export" className="whitespace-nowrap rounded-full px-3 py-1.5 text-graphite-200 hover:bg-white/5 hover:text-white">Export JSON</a>
              <AdminLogout email={session.email} />
            </nav>
          )}
        </div>
      </header>
      {!cfg.ok && (
        <div className="page-x mt-6 rounded-2xl border border-amber-300/30 bg-amber-300/5 p-5 text-sm text-amber-100">
          <p className="font-medium">Administration non configurée.</p>
          <ul className="mt-2 list-disc pl-5">{cfg.problems.map((p) => <li key={p}>{p}</li>)}</ul>
          <p className="mt-2 text-amber-100/70">Voir README → « Administration ». Aucun identifiant par défaut n’existe.</p>
        </div>
      )}
      {cfg.ok && !db && (
        <div className="page-x mt-6 rounded-2xl border border-amber-300/30 bg-amber-300/5 p-5 text-sm text-amber-100">
          Base PostgreSQL non configurée (DATABASE_URL) : l’administration est indisponible. Configurez la base puis lancez <code>npm run db:migrate && npm run db:seed</code>.
        </div>
      )}
      <div className="page-x py-10">{children}</div>
    </div>
  )
}
