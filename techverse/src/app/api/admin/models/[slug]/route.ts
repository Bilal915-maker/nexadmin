import { NextResponse } from 'next/server'
import { badRequest, dbOrError, invalidateCatalog } from '@/lib/admin/api'
import { requireAdmin } from '@/lib/auth/guard'
import { deleteModel, getModelFromDb, saveModel } from '@/lib/catalog/persistence'
import { modelSchema } from '@/lib/catalog/schema'
import type { ProductModel } from '@/lib/catalog/types'

export const dynamic = 'force-dynamic'

type Ctx = { params: { slug: string } }

export async function GET(req: Request, { params }: Ctx) {
  const auth = await requireAdmin(req)
  if (auth instanceof NextResponse) return auth
  const prisma = dbOrError()
  if (prisma instanceof NextResponse) return prisma
  const m = await getModelFromDb(prisma, params.slug)
  return m ? NextResponse.json({ model: m }) : NextResponse.json({ error: 'Fiche introuvable' }, { status: 404 })
}

export async function PUT(req: Request, { params }: Ctx) {
  const auth = await requireAdmin(req, { mutating: true })
  if (auth instanceof NextResponse) return auth
  const prisma = dbOrError()
  if (prisma instanceof NextResponse) return prisma
  const parsed = modelSchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return badRequest('Fiche invalide', parsed.error.issues)
  const m = parsed.data as ProductModel
  if (m.validation.status === 'confirmed' && !m.sources.some((s) => s.status === 'confirmed')) {
    return badRequest('Statut « confirmé » refusé : au moins une source doit être confirmée (vérifiée) avec une date.')
  }
  if (m.sources.some((s) => s.status === 'confirmed' && !s.checkedAt)) return badRequest('Toute source « confirmée » doit porter une date de vérification.')
  if (!(await prisma.productModel.findUnique({ where: { slug: params.slug } }))) return NextResponse.json({ error: 'Fiche introuvable' }, { status: 404 })
  try {
    await saveModel(prisma, m, { actor: auth.email, previousSlug: params.slug })
  } catch (e) {
    return badRequest((e as Error).message)
  }
  invalidateCatalog()
  return NextResponse.json({ ok: true, slug: m.slug })
}

export async function DELETE(req: Request, { params }: Ctx) {
  const auth = await requireAdmin(req, { mutating: true })
  if (auth instanceof NextResponse) return auth
  const prisma = dbOrError()
  if (prisma instanceof NextResponse) return prisma
  const ok = await deleteModel(prisma, params.slug, auth.email)
  if (!ok) return NextResponse.json({ error: 'Fiche introuvable' }, { status: 404 })
  invalidateCatalog()
  return NextResponse.json({ ok: true })
}
