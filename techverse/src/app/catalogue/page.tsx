import type { Metadata } from 'next'
import { CatalogBrowser } from '@/components/catalog/CatalogBrowser'
import { getCatalog } from '@/lib/catalog/repository'

export const metadata: Metadata = {
  title: 'Catalogue complet, recherche et filtres',
  description: 'Recherchez et filtrez l’ensemble des produits Apple commercialisés depuis 2016 par famille, année, couleur, stockage, puce, statut et prix de lancement.',
  alternates: { canonical: '/catalogue' },
}

export default async function CataloguePage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const c = await getCatalog()
  const q = typeof searchParams.q === 'string' ? searchParams.q : ''
  return (
    <div className="pb-24 pt-28">
      <header className="page-x mb-12">
        <p className="eyebrow">Catalogue complet</p>
        <h1 className="display-lg mt-4">{q ? <>Résultats pour « {q} »</> : 'Toutes les fiches.'}</h1>
        <p className="mt-4 max-w-2xl text-graphite-300">
          {c.models.length} fiches, toutes familles confondues. La recherche porte sur les noms, alias, numéros de modèle, identifiants matériels,
          puces, couleurs et résumés.
        </p>
      </header>
      <div className="page-x">
        <CatalogBrowser catalog={c} searchParams={searchParams} />
      </div>
    </div>
  )
}
