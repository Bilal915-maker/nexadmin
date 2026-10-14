import { NextResponse } from 'next/server'
import { dbOrError } from '@/lib/admin/api'
import { requireAdmin } from '@/lib/auth/guard'
import { loadCatalogFromDb } from '@/lib/catalog/persistence'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const auth = await requireAdmin(req)
  if (auth instanceof NextResponse) return auth
  const prisma = dbOrError()
  if (prisma instanceof NextResponse) return prisma
  const c = await loadCatalogFromDb(prisma)
  const stamp = new Date().toISOString().slice(0, 10)
  return new NextResponse(JSON.stringify({ exportedAt: new Date().toISOString(), ...c }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Disposition': `attachment; filename="techverse-catalogue-${stamp}.json"` },
  })
}
