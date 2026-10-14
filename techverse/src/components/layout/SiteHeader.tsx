'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CommandSearch } from './CommandSearch'

export interface NavFamily {
  slug: string
  name: string
  tagline: string
  count: number
  lines: { slug: string; name: string }[]
}

export function SiteHeader({ families }: { families: NavFamily[] }) {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const [mega, setMega] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenu(false)
    setMega(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setMega(false)
        setMenu(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (pathname?.startsWith('/admin')) return null

  return (
    <>
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
        Aller au contenu
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || mega || menu ? 'border-b border-white/10 bg-ink/75 backdrop-blur-2xl' : 'bg-transparent'}`}
        onMouseLeave={() => setMega(false)}
      >
        <nav className="page-x flex h-16 items-center justify-between gap-4" aria-label="Navigation principale">
          <Link href="/" className="group flex items-center gap-2.5" aria-label="TECHVERSE — accueil">
            <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-volt-cyan">
              <span className="h-2.5 w-2.5 rounded-full bg-ink transition group-hover:scale-125" />
            </span>
            <span className="font-display text-[15px] font-semibold tracking-[0.18em]">TECHVERSE</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            <li>
              <button
                type="button"
                className="rounded-full px-3 py-2 text-sm text-graphite-100 transition hover:text-white"
                aria-expanded={mega}
                aria-controls="mega-menu"
                onClick={() => setMega((m) => !m)}
                onMouseEnter={() => setMega(true)}
              >
                Produits
              </button>
            </li>
            {[
              ['/catalogue', 'Catalogue'],
              ['/chronologie', 'Chronologie'],
              ['/comparer', 'Comparateur'],
              ['/inventaire', 'Sources et couverture'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-full px-3 py-2 text-sm transition hover:text-white ${pathname === href ? 'text-white' : 'text-graphite-200'}`}
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm text-graphite-200 transition hover:border-white/40 hover:text-white"
              aria-label="Rechercher dans le catalogue"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <span className="hidden sm:inline">Rechercher</span>
              <kbd className="hidden rounded border border-white/15 px-1.5 text-[10px] text-graphite-300 md:inline">⌘K</kbd>
            </button>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 lg:hidden"
              aria-expanded={menu}
              aria-controls="menu-mobile"
              aria-label={menu ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setMenu((m) => !m)}
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 h-[1.5px] w-4 bg-white transition ${menu ? 'top-1.5 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 h-[1.5px] w-4 bg-white transition ${menu ? 'top-1.5 -rotate-45' : 'top-3'}`} />
              </span>
            </button>
          </div>
        </nav>

        {mega && (
          <div id="mega-menu" className="hidden border-t border-white/10 lg:block">
            <div className="page-x grid grid-cols-5 gap-x-8 gap-y-6 py-8">
              {families.map((f) => (
                <div key={f.slug}>
                  <Link href={`/${f.slug}`} className="group block">
                    <span className="font-display text-sm font-semibold text-white group-hover:text-cyan-300">{f.name}</span>
                    <span className="ml-2 text-xs text-graphite-400">{f.count}</span>
                  </Link>
                  <ul className="mt-2 space-y-1">
                    {f.lines.slice(0, 5).map((l) => (
                      <li key={l.slug}>
                        <Link href={`/${f.slug}?line=${l.slug}`} className="text-xs text-graphite-300 hover:text-white">
                          {l.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {menu && (
          <div id="menu-mobile" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 lg:hidden">
            <div className="page-x space-y-6 py-6">
              <ul className="grid grid-cols-2 gap-2">
                {families.map((f) => (
                  <li key={f.slug}>
                    <Link href={`/${f.slug}`} className="block rounded-2xl border border-white/10 px-4 py-3 text-sm">
                      {f.name} <span className="text-graphite-400">· {f.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 border-t border-white/10 pt-4 text-sm">
                <li><Link href="/catalogue" className="block py-2">Catalogue complet</Link></li>
                <li><Link href="/chronologie" className="block py-2">Chronologie</Link></li>
                <li><Link href="/comparer" className="block py-2">Comparateur</Link></li>
                <li><Link href="/inventaire" className="block py-2">Sources et couverture</Link></li>
              </ul>
            </div>
          </div>
        )}
      </header>
      <CommandSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
