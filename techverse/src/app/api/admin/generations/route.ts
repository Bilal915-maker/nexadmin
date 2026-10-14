import { NextResponse } from 'next/server'
import { z } from 'zod'
import { badRequest, dbOrError, invalidateCatalog } from '@/lib/admin/api'
import { requireAdmin } from '@/lib/auth/guard'
import { upsertGeneration } from '@/lib/catalog/persistence'
import { FAMILY_SLUGS } from '@/lib/catalog/types'

const genSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  family: z.enum(FAMILY_SLUGS),
  line: z.string().min(1),
  name: z.string().min(1),
  year: z.number().int().min(2000).max(2100),
  order: z.number().int().default(0),
})

export async function POST(req: Request) {
  const auth = await requireAdmin(req, { mutating: true })
  if (auth instanceof NextResponse) return auth
  const prisma = dbOrError()
  if (prisma instanceof NextResponse) return prisma
  const parsed = genSchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return badRequest('Génération invalide', parsed.error.issues)
  try {
    await upsertGeneration(prisma, parsed.data)
    await prisma.auditLog.create({ data: { actor: auth.email, action: 'upsert', entity: 'ProductGeneration', entityId: parsed.data.slug } })
  } catch (e) {
    return badRequest((e as Error).message)
  }
  invalidateCatalog()
  return NextResponse.json({ ok: true })
}
