import { NextResponse } from 'next/server'
import { badRequest, dbOrError, invalidateCatalog } from '@/lib/admin/api'
import { requireAdmin } from '@/lib/auth/guard'
import { missingFields } from '@/lib/catalog/integrity'
import { loadCatalogFromDb, saveModel } from '@/lib/catalog/persistence'
import { modelSchema } from '@/lib/catalog/schema'
import type { ProductModel } from '@/lib/catalog/types'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const auth = await requireAdmin(req)
  if (auth instanceof NextResponse) return auth
  const prisma = dbOrError()
  if (prisma instanceof NextResponse) return prisma
  const c = await loadCatalogFromDb(prisma)
  return NextResponse.json({
    models: c.models.map((m) => ({
      slug: m.slug,
      name: m.name,
      family: m.family,
      released: m.released,
      status: m.status,
      validation: m.validation.status,
      missing: missingFields(m),
    })),
  })
}

export async function POST(req: Request) {
  const auth = await requireAdmin(req, { mutating: true })
  if (auth instanceof NextResponse) return auth
  const prisma = dbOrError()
  if (prisma instanceof NextResponse) return prisma
  const parsed = modelSchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return badRequest('Fiche invalide', parsed.error.issues)
  const m = parsed.data as ProductModel
  if (await prisma.productModel.findUnique({ where: { slug: m.slug } })) return badRequest(`Le slug ${m.slug} existe déjà`)
  if (m.validation.status === 'confirmed' && !m.sources.some((s) => s.status === 'confirmed')) return badRequest('Statut « confirmé » refusé : aucune source confirmée')
  try {
    await saveModel(prisma, m, { actor: auth.email })
  } catch (e) {
    return badRequest((e as Error).message)
  }
  invalidateCatalog()
  return NextResponse.json({ ok: true, slug: m.slug }, { status: 201 })
}
