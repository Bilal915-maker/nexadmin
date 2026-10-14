import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader, type NavFamily } from '@/components/layout/SiteHeader'
import { CATALOG_REFERENCE_DATE, getCatalog } from '@/lib/catalog/repository'
import { stats } from '@/lib/catalog/query'
import { formatDate } from '@/lib/format'
import { SITE_URL } from '@/lib/routes'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap', weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'TECHVERSE — Tous les produits Apple depuis 2016', template: '%s · TECHVERSE' },
  description:
    'Catalogue historique des produits Apple commercialisés depuis 2016 : générations, modèles, couleurs officielles, caractéristiques, prix de lancement, sources et comparateur.',
  openGraph: { type: 'website', siteName: 'TECHVERSE', locale: 'fr_FR' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#05050a', width: 'device-width', initialScale: 1 }

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const catalog = await getCatalog()
  const s = stats(catalog)
  const families: NavFamily[] = catalog.families.map((f) => ({
    slug: f.slug,
    name: f.name,
    tagline: f.tagline,
    count: catalog.models.filter((m) => m.family === f.slug).length,
    lines: f.lines.filter((l) => catalog.models.some((m) => m.family === f.slug && m.line === l.slug)),
  }))
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        <SiteHeader families={families} />
        <main id="contenu">{children}</main>
        <SiteFooter families={families} stats={{ models: s.models, generations: s.generations }} referenceDate={formatDate(CATALOG_REFERENCE_DATE)} source={catalog.source} />
      </body>
    </html>
  )
}
