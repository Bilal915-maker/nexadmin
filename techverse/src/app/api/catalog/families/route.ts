import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
import { generationsByFamily } from '@/lib/catalog/query'
import { getCatalog } from '@/lib/catalog/repository'

export async function GET() {
  const c = await getCatalog()
  return NextResponse.json({
    families: c.families.map((f) => ({
      ...f,
      generations: generationsByFamily(c, f.slug).map((g) => ({ slug: g.slug, name: g.name, year: g.year, models: g.models.map((m) => m.slug) })),
    })),
    pending: c.pending,
  })
}
