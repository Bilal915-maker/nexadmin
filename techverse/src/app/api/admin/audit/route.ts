import { NextResponse } from 'next/server'
import { dbOrError } from '@/lib/admin/api'
import { requireAdmin } from '@/lib/auth/guard'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const auth = await requireAdmin(req)
  if (auth instanceof NextResponse) return auth
  const prisma = dbOrError()
  if (prisma instanceof NextResponse) return prisma
  const entries = await prisma.auditLog.findMany({ orderBy: { at: 'desc' }, take: 100 })
  return NextResponse.json({ entries })
}
