/**
 * Importe les données « fichiers » (data/catalog/**) dans PostgreSQL.
 * Idempotent : relancer le seed met à jour les fiches existantes (mêmes slugs).
 *
 *   DATABASE_URL=... npm run db:seed
 */
import { PrismaClient } from '@prisma/client'
import { filesCatalog } from '../data/catalog'
import { checkCatalog } from '../src/lib/catalog/integrity'
import { seedCatalog } from '../src/lib/catalog/persistence'

async function main() {
  const errors = checkCatalog(filesCatalog).filter((i) => i.level === 'error')
  if (errors.length) {
    for (const e of errors) console.error(`✖ ${e.model ?? ''} ${e.message}`)
    throw new Error('Catalogue invalide : seed annulé.')
  }
  const prisma = new PrismaClient()
  try {
    const started = Date.now()
    const result = await seedCatalog(prisma, filesCatalog)
    console.log(`Seed terminé en ${((Date.now() - started) / 1000).toFixed(1)} s :`, result)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
