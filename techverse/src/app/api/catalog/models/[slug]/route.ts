import { NextResponse } from 'next/server'
import { modelBySlug } from '@/lib/catalog/query'
import { getCatalog } from '@/lib/catalog/repository'

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const c = await getCatalog()
  const m = modelBySlug(c, params.slug)
  if (!m) return NextResponse.json({ error: 'Fiche introuvable' }, { status: 404 })
  const family = c.families.find((f) => f.slug === m.family)
  return NextResponse.json({ model: m, familySources: family?.sources ?? [] })
}
