import { NextResponse, type NextRequest } from 'next/server'
import { applyFilters, parseFilters } from '@/lib/catalog/query'
import { getCatalog } from '@/lib/catalog/repository'

export const dynamic = 'force-dynamic'

/**
 * GET /api/catalog/models — liste filtrable (mêmes paramètres que les pages : family, line, year,
 * status, tone, storage, ram, chip, screen, size, connector, connectivity, validation, q, prixMin, prixMax, sort)
 * ?full=1 renvoie les fiches complètes, sinon un résumé.
 */
export async function GET(req: NextRequest) {
  const params = Object.fromEntries(req.nextUrl.searchParams.entries())
  const c = await getCatalog()
  const models = applyFilters(c.models, parseFilters(params), c)
  const full = params.full === '1'
  return NextResponse.json({
    source: c.source,
    count: models.length,
    models: full
      ? models
      : models.map((m) => ({
          slug: m.slug,
          name: m.name,
          family: m.family,
          line: m.line,
          generation: m.generation,
          announced: m.announced,
          released: m.released,
          discontinued: m.discontinued,
          status: m.status,
          validation: m.validation.status,
          url: `/${m.family}/${m.slug}`,
        })),
  })
}
