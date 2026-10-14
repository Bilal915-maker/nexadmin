import { NextResponse, type NextRequest } from 'next/server'
import { familyBySlug, modelYear, scoreModels } from '@/lib/catalog/query'
import { getCatalog } from '@/lib/catalog/repository'

export const dynamic = 'force-dynamic'

/** GET /api/catalog/search?q=…&limit=… — recherche plein texte sur l'ensemble du catalogue */
export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get('q') ?? '').slice(0, 120)
  const limit = Math.min(Math.max(Number(req.nextUrl.searchParams.get('limit')) || 20, 1), 60)
  const c = await getCatalog()
  const scored = q.trim() ? scoreModels(c.models, q, c).slice(0, limit) : []
  const needle = q.trim().toLowerCase()
  return NextResponse.json({
    query: q,
    total: scored.length,
    results: scored.map(({ model: m, score }) => ({
      slug: m.slug,
      family: m.family,
      familyName: familyBySlug(c, m.family)?.name ?? m.family,
      name: m.name,
      year: modelYear(m),
      status: m.status,
      validation: m.validation.status,
      colors: m.colors.map((x) => ({ name: x.name, hex: x.hex })),
      matched:
        m.variants.find((v) => v.modelNumber.toLowerCase() === needle)?.modelNumber ??
        m.identifiers.find((i) => i.toLowerCase() === needle) ??
        undefined,
      score: Math.round(score),
    })),
  })
}
