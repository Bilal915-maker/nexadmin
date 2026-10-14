import { revalidatePath, revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'
import { getPrisma, isDatabaseConfigured } from '../db'
import { CATALOG_TAG } from '../catalog/repository'
import type { PrismaClient } from '@prisma/client'

export function dbOrError(): PrismaClient | NextResponse {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: 'Base de données non configurée (DATABASE_URL). L’administration nécessite PostgreSQL.' }, { status: 503 })
  }
  return getPrisma()
}

/** Invalide le cache du catalogue et les pages statiques après une écriture. */
export function invalidateCatalog() {
  revalidateTag(CATALOG_TAG)
  revalidatePath('/', 'layout')
}

export function badRequest(message: string, details?: unknown) {
  return NextResponse.json({ error: message, details }, { status: 400 })
}
