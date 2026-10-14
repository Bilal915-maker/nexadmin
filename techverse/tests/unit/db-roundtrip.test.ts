/**
 * Test d'intégration PostgreSQL : nécessite DATABASE_URL (ignoré sinon).
 * Vérifie que le seed puis la relecture restituent exactement les fiches « fichiers ».
 */
import { PrismaClient } from '@prisma/client'
import { afterAll, describe, expect, it } from 'vitest'
import { filesCatalog } from '../../data/catalog'
import { loadCatalogFromDb, seedCatalog } from '../../src/lib/catalog/persistence'

const url = process.env.DATABASE_URL
const normalize = (o: unknown) => JSON.parse(JSON.stringify(o))

describe.skipIf(!url)('aller-retour PostgreSQL', () => {
  const prisma = new PrismaClient()
  afterAll(() => prisma.$disconnect())

  it('restitue toutes les fiches à l’identique après seed', async () => {
    await seedCatalog(prisma, filesCatalog, 'test')
    const db = await loadCatalogFromDb(prisma)
    expect(db.models.length).toBe(filesCatalog.models.length)
    const bySlug = new Map(db.models.map((m) => [m.slug, m]))
    for (const m of filesCatalog.models) {
      expect(normalize(bySlug.get(m.slug)), m.slug).toEqual(normalize(m))
    }
    expect(normalize(db.families)).toEqual(normalize(filesCatalog.families))
  }, 120000)
})
