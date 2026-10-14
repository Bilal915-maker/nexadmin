import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

/** Client Prisma partagé (évite la multiplication des connexions en développement). */
export function getPrisma(): PrismaClient {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL non défini : la base de données n’est pas configurée.')
  }
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient()
  }
  return globalForPrisma.prisma
}

export function isDatabaseConfigured(): boolean {
  return !!process.env.DATABASE_URL
}
