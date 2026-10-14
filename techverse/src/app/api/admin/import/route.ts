import { NextResponse } from 'next/server'
import { z } from 'zod'
import { badRequest, dbOrError, invalidateCatalog } from '@/lib/admin/api'
import { requireAdmin } from '@/lib/auth/guard'
import { analyseImport } from '@/lib/catalog/importer'
import { loadCatalogFromDb, saveModel } from '@/lib/catalog/persistence'

export const dynamic = 'force-dynamic'

const body = z.object({ content: z.string().min(1).max(5_000_000), apply: z.boolean().default(false) })

/** Analyse (apply=false) puis applique (apply=true) un import JSON ou CSV. */
export async function POST(req: Request) {
  const auth = await requireAdmin(req, { mutating: true })
  if (auth instanceof NextResponse) return auth
  const prisma = dbOrError()
  if (prisma instanceof NextResponse) return prisma
  const parsed = body.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return badRequest('Requête invalide', parsed.error.issues)
  const existing = await loadCatalogFromDb(prisma)
  const report = analyseImport(parsed.data.content, { ...existing, source: 'database', loadedAt: new Date().toISOString() })
  if (!parsed.data.apply) return NextResponse.json({ report: { ...report, rows: report.rows.map(({ model, ...r }) => ({ ...r, hasModel: !!model })) } })
  if (report.summary.error > 0) return badRequest('Import refusé : corrigez d’abord les lignes en erreur.', report.summary)
  const applied: string[] = []
  for (const row of report.rows) {
    if (!row.model) continue
    await saveModel(prisma, row.model, { actor: `${auth.email} (import ${report.format})` })
    applied.push(row.model.slug)
  }
  invalidateCatalog()
  return NextResponse.json({ ok: true, applied: applied.length, summary: report.summary })
}
