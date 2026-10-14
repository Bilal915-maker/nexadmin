import Link from 'next/link'
import { ProductCard } from './ProductCard'
import { FilterPanel, type FacetUI } from './FilterPanel'
import { SortSelect } from './SortSelect'
import { TONES } from '@/lib/catalog/colors'
import {
  applyFilters,
  FACET_LABELS,
  facetOptions,
  FAMILY_FACETS,
  generationsByFamily,
  parseFilters,
  type FacetId,
} from '@/lib/catalog/query'
import type { Catalog, FamilySlug } from '@/lib/catalog/types'

/**
 * Navigateur de catalogue partagé (page famille et page catalogue).
 * Les options de chaque facette sont calculées en ignorant la facette elle-même
 * (comptes « si je coche cette valeur »).
 */
export function CatalogBrowser({
  catalog: c,
  family,
  searchParams,
}: {
  catalog: Catalog
  family?: FamilySlug
  searchParams: Record<string, string | string[] | undefined>
}) {
  const base = family ? c.models.filter((m) => m.family === family) : c.models
  const filters = parseFilters(searchParams)
  if (family) delete filters.facets.family
  const results = applyFilters(base, filters, c)
  const facetIds = FAMILY_FACETS[family ?? 'all']
  const facets: FacetUI[] = facetIds.map((id: FacetId) => ({
    id,
    label: FACET_LABELS[id],
    options: facetOptions(applyFilters(base, filters, c, id), id, c).map((o) => ({
      ...o,
      swatch: id === 'tone' ? TONES.find((t) => t.id === o.value)?.swatch : undefined,
    })),
  }))
  // Les valeurs sélectionnées restent visibles même si leur compte tombe à zéro
  for (const f of facets) {
    for (const v of filters.facets[f.id as FacetId] ?? []) {
      if (!f.options.some((o) => o.value === v)) f.options.push({ value: v, label: v, count: 0 })
    }
  }
  const hasFilters = Object.values(filters.facets).some((v) => v?.length) || filters.q || filters.priceMin != null || filters.priceMax != null
  const grouped = family && !hasFilters

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[17rem_1fr] lg:gap-12">
      <FilterPanel facets={facets} total={results.length} />
      <div className="min-w-0">
        <div className="mb-6 hidden items-center justify-between gap-4 lg:flex">
          <p className="text-sm text-graphite-300">
            {grouped ? 'Toutes les générations, de la plus ancienne à la plus récente' : `${results.length} fiche${results.length > 1 ? 's' : ''}`}
            {filters.q ? ` pour « ${filters.q} »` : ''}
          </p>
          {!grouped && <SortSelect value={filters.sort ?? (filters.q ? 'relevance' : 'release-desc')} withRelevance={!!filters.q} />}
        </div>
        {grouped ? (
          <ol className="space-y-14">
            {generationsByFamily(c, family!).map((g) => (
              <li key={g.slug} id={g.slug} className="scroll-mt-24">
                <div className="mb-5 flex items-baseline gap-4 border-b border-white/10 pb-3">
                  <span className="font-display text-3xl font-semibold tabular-nums text-graphite-500">{g.year}</span>
                  <h2 className="font-display text-lg font-semibold">{g.name}</h2>
                  <span className="ml-auto text-xs text-graphite-400">
                    {g.models.length} modèle{g.models.length > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
                  {g.models.map((m) => (
                    <ProductCard key={m.slug} model={m} />
                  ))}
                </div>
              </li>
            ))}
          </ol>
        ) : results.length ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
            {results.map((m) => (
              <ProductCard key={m.slug} model={m} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 p-10 text-center">
            <p className="font-display text-xl">Aucune fiche ne correspond.</p>
            <p className="mt-2 text-sm text-graphite-300">Retirez un filtre ou élargissez la recherche.</p>
            <Link href={family ? `/${family}` : '/catalogue'} className="btn-ghost mt-6">
              Réinitialiser
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
