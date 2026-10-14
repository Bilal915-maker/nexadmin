import type { Metadata } from 'next'
import Link from 'next/link'
import { ComparePicker } from '@/components/compare/ComparePicker'
import { CompareTable } from '@/components/compare/CompareTable'
import { DeviceSilhouette } from '@/components/silhouette/DeviceSilhouette'
import { LineupStageLazy } from '@/components/three/LineupStageLazy'
import { compareModels, modelBySlug, modelYear } from '@/lib/catalog/query'
import { getCatalog } from '@/lib/catalog/repository'
import { productHref } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Comparateur de produits Apple',
  description: 'Comparez de 2 à 4 produits Apple côte à côte : dimensions, écrans, puces, appareils photo, capacités, autonomie, connectivité, finitions et prix de lancement.',
  alternates: { canonical: '/comparer' },
}

export default async function ComparePage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const c = await getCatalog()
  const raw = typeof searchParams.modeles === 'string' ? searchParams.modeles : ''
  const slugs = [...new Set(raw.split(',').map((s) => s.trim()).filter(Boolean))].slice(0, 4)
  const models = slugs.map((s) => modelBySlug(c, s)).filter((m): m is NonNullable<typeof m> => !!m)
  const unknown = slugs.filter((s) => !modelBySlug(c, s))
  const sections = models.length >= 2 ? compareModels(c, models) : []
  const allDims = models.every((m) => m.dimensions.some((d) => d.heightMm && d.widthMm))
  const sameKind = new Set(models.map((m) => m.visual.kind)).size === 1
  const maxH = Math.max(...models.map((m) => m.dimensions[0]?.heightMm ?? 0), 1)
  const scale = Math.min(320 / maxH, 3)

  return (
    <div className="pb-24 pt-28">
      <header className="page-x mb-10">
        <p className="eyebrow">Comparateur</p>
        <h1 className="display-lg mt-4">Côte à côte.</h1>
        <p className="mt-4 max-w-2xl text-graphite-300">
          Sélectionnez de deux à quatre modèles, de la même famille ou non : les critères s’adaptent aux produits comparés, et les différences sont
          mises en évidence.
        </p>
      </header>
      <div className="page-x space-y-12">
        <ComparePicker selected={models.map((m) => ({ slug: m.slug, name: m.name }))} />
        {unknown.length > 0 && <p className="text-sm text-amber-200">Fiches introuvables ignorées : {unknown.join(', ')}</p>}

        {models.length < 2 ? (
          <div className="rounded-3xl border border-dashed border-white/15 p-10 text-center text-graphite-300">
            Ajoutez au moins deux modèles pour lancer la comparaison.
            <p className="mt-4 text-sm">
              Exemple :{' '}
              <Link href="/comparer?modeles=iphone-7,iphone-17-pro" className="text-cyan-300 hover:underline">
                iPhone 7 vs iPhone 17 Pro
              </Link>
            </p>
          </div>
        ) : (
          <>
            <section aria-labelledby="echelle" className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent">
              <div className="flex flex-wrap items-end justify-between gap-4 p-6 md:p-8">
                <div>
                  <p className="eyebrow">À l’échelle</p>
                  <h2 id="echelle" className="display-md mt-3">
                    {allDims && sameKind ? 'Proportions réelles' : 'Silhouettes'}
                  </h2>
                </div>
                <p className="max-w-md text-xs text-graphite-400">
                  {allDims && sameKind
                    ? `Dessinées à la même échelle (1 mm = ${scale.toFixed(2)} px) à partir des dimensions documentées.`
                    : 'Échelles non comparables (familles différentes ou dimensions manquantes) : chaque silhouette est cadrée individuellement.'}
                </p>
              </div>
              <div className="h-[26rem]">
                <LineupStageLazy
                  models={models.map((m) => ({ name: m.name, visual: m.visual, dimensions: m.dimensions, colors: m.colors }))}
                  fallback={
                    <div className="flex items-end justify-center gap-6 overflow-x-auto px-6 md:gap-12">
                      {models.map((m) => (
                        <div key={m.slug} className="flex flex-col items-center gap-3">
                          {allDims && sameKind ? (
                            <DeviceSilhouette model={m} scale={scale} view="back" />
                          ) : (
                            <div className="h-48 w-40">
                              <DeviceSilhouette model={m} />
                            </div>
                          )}
                          <span className="text-xs text-graphite-300">{m.name}</span>
                        </div>
                      ))}
                    </div>
                  }
                />
              </div>
            </section>
            <CompareTable sections={sections} heads={models.map((m) => ({ slug: m.slug, name: m.name, href: productHref(m), year: String(modelYear(m) ?? '') }))} />
          </>
        )}
      </div>
    </div>
  )
}
