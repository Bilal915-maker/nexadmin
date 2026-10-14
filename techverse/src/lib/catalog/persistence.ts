/**
 * Correspondance entre le modèle de domaine et la base PostgreSQL (Prisma).
 * Aucune dépendance à Next.js : utilisable par le seed, les scripts et l'API.
 */
import type { Prisma, PrismaClient } from '@prisma/client'
import type {
  Catalog,
  Dimensions,
  FamilySlug,
  LifecycleStatus,
  PendingItem,
  ProductFamily,
  ProductGeneration,
  ProductModel,
  SourceRef,
  SourceType,
  SpecGroupId,
  ValidationStatus,
  Visual,
} from './types'

const modelInclude = {
  family: true,
  generation: true,
  variants: { orderBy: { order: 'asc' } },
  specifications: { orderBy: { order: 'asc' } },
  colors: { orderBy: { order: 'asc' } },
  images: { orderBy: { order: 'asc' } },
  assets3d: true,
  compatibilities: true,
  prices: { orderBy: { order: 'asc' } },
  sources: { orderBy: { order: 'asc' } },
} satisfies Prisma.ProductModelInclude

type ModelRow = Prisma.ProductModelGetPayload<{ include: typeof modelInclude }>

function childData(m: ProductModel) {
  return {
    variants: {
      create: m.variants.map((v, i) => ({
        modelNumber: v.modelNumber,
        label: v.label,
        region: v.region ?? null,
        connectivity: v.connectivity ?? null,
        note: v.note ?? null,
        order: i,
      })),
    },
    specifications: {
      create: m.specs.flatMap((g, gi) =>
        g.items.map((it, ii) => ({
          group: g.id,
          groupLabel: g.label,
          key: it.key,
          label: it.label,
          value: it.value,
          status: it.status ?? null,
          order: gi * 1000 + ii,
        })),
      ),
    },
    colors: {
      create: m.colors.map((c, i) => ({
        name: c.name,
        nameFr: c.nameFr ?? null,
        hex: c.hex,
        finish: c.finish ?? null,
        material: c.material ?? null,
        note: c.note ?? null,
        order: i,
      })),
    },
    images: { create: m.images.map((im, i) => ({ ...im, colorName: im.colorName ?? null, order: i })) },
    assets3d: { create: m.assets3d.map((a) => ({ ...a, notes: a.notes ?? null })) },
    compatibilities: { create: m.compatibility.map((c) => ({ targetSlug: c.target, note: c.note ?? null })) },
    prices: {
      create: m.prices.map((p, i) => ({
        market: p.market,
        currency: p.currency,
        amount: p.amount,
        config: p.config ?? null,
        date: p.date,
        status: p.status,
        order: i,
      })),
    },
    sources: {
      create: m.sources.map((s, i) => ({
        url: s.url,
        type: s.type,
        title: s.title,
        checkedAt: s.checkedAt ?? null,
        status: s.status,
        note: s.note ?? null,
        order: i,
      })),
    },
  }
}

function scalarData(m: ProductModel) {
  return {
    slug: m.slug,
    name: m.name,
    line: m.line,
    aliases: m.aliases,
    announced: m.announced ?? null,
    released: m.released ?? null,
    discontinued: m.discontinued ?? null,
    status: m.status,
    statusNote: m.statusNote ?? null,
    summary: m.summary,
    highlights: m.highlights,
    identifiers: m.identifiers,
    storageGB: m.storageGB,
    ramGB: m.ramGB,
    chips: m.chips,
    screenInches: m.screenInches ?? null,
    sizes: m.sizes,
    connectivity: m.connectivity,
    connector: m.connector ?? null,
    os: m.os ?? null,
    dimensions: m.dimensions as unknown as Prisma.InputJsonValue,
    visual: m.visual as unknown as Prisma.InputJsonValue,
    validationStatus: m.validation.status,
    reviewedAt: m.validation.reviewedAt ?? null,
    validationNotes: m.validation.notes,
  }
}

const opt = <T>(v: T | null | undefined): T | undefined => (v === null ? undefined : v)

export function rowToModel(r: ModelRow): ProductModel {
  const groups = new Map<string, { id: SpecGroupId; label: string; items: ProductModel['specs'][number]['items'] }>()
  for (const s of r.specifications) {
    if (!groups.has(s.group)) groups.set(s.group, { id: s.group as SpecGroupId, label: s.groupLabel, items: [] })
    groups.get(s.group)!.items.push({
      key: s.key,
      label: s.label,
      value: s.value,
      ...(s.status ? { status: s.status as ValidationStatus } : {}),
    })
  }
  const model: ProductModel = {
    slug: r.slug,
    name: r.name,
    family: r.family.slug as FamilySlug,
    line: r.line,
    generation: r.generation.slug,
    aliases: r.aliases,
    announced: opt(r.announced),
    released: opt(r.released),
    discontinued: opt(r.discontinued),
    status: r.status as LifecycleStatus,
    statusNote: opt(r.statusNote),
    summary: r.summary,
    highlights: r.highlights,
    identifiers: r.identifiers,
    variants: r.variants.map((v) => ({
      modelNumber: v.modelNumber,
      label: v.label,
      region: opt(v.region),
      connectivity: opt(v.connectivity),
      note: opt(v.note),
    })),
    colors: r.colors.map((c) => ({
      name: c.name,
      hex: c.hex,
      nameFr: opt(c.nameFr),
      finish: opt(c.finish),
      material: opt(c.material),
      note: opt(c.note),
    })),
    storageGB: r.storageGB,
    ramGB: r.ramGB,
    chips: r.chips,
    screenInches: opt(r.screenInches),
    sizes: r.sizes,
    connectivity: r.connectivity,
    connector: opt(r.connector),
    os: opt(r.os),
    dimensions: (r.dimensions as unknown as Dimensions[]) ?? [],
    prices: r.prices.map((p) => ({
      market: p.market,
      currency: p.currency,
      amount: Number(p.amount),
      config: opt(p.config),
      date: p.date,
      status: p.status as ValidationStatus,
    })),
    specs: [...groups.values()],
    compatibility: r.compatibilities.map((c) => ({ target: c.targetSlug, note: opt(c.note) })),
    images: r.images.map((im) => ({ url: im.url, alt: im.alt, license: im.license, credit: im.credit, colorName: opt(im.colorName) })),
    assets3d: r.assets3d.map((a) => ({ url: a.url, format: a.format, license: a.license, credit: a.credit, isExact: a.isExact, notes: opt(a.notes) })),
    sources: r.sources.map((s) => ({
      url: s.url,
      type: s.type as SourceType,
      title: s.title,
      checkedAt: opt(s.checkedAt),
      status: s.status as ValidationStatus,
      note: opt(s.note),
    })),
    validation: {
      status: r.validationStatus as ValidationStatus,
      reviewedAt: opt(r.reviewedAt),
      notes: r.validationNotes,
    },
    visual: r.visual as unknown as Visual,
  }
  return JSON.parse(JSON.stringify(model)) as ProductModel
}

export async function loadCatalogFromDb(prisma: PrismaClient): Promise<Omit<Catalog, 'source' | 'loadedAt'>> {
  const [families, generations, models, pending] = await Promise.all([
    prisma.productFamily.findMany({ orderBy: { order: 'asc' } }),
    prisma.productGeneration.findMany({ include: { family: true }, orderBy: [{ year: 'asc' }, { order: 'asc' }] }),
    prisma.productModel.findMany({ include: modelInclude, orderBy: [{ released: 'asc' }, { name: 'asc' }] }),
    prisma.pendingProduct.findMany(),
  ])
  return {
    families: families.map(
      (f): ProductFamily => ({
        slug: f.slug as FamilySlug,
        name: f.name,
        shortName: f.shortName,
        tagline: f.tagline,
        description: f.description,
        order: f.order,
        lines: f.lines as unknown as ProductFamily['lines'],
        sources: f.sources as unknown as SourceRef[],
        gaps: f.gaps,
      }),
    ),
    generations: generations.map(
      (g): ProductGeneration => ({
        slug: g.slug,
        family: g.family.slug as FamilySlug,
        line: g.line,
        name: g.name,
        year: g.year,
        order: g.order,
      }),
    ),
    models: models.map(rowToModel),
    pending: pending.map(
      (p): PendingItem => ({
        name: p.name,
        family: p.family as FamilySlug,
        reason: p.reason,
        sources: p.sources as unknown as SourceRef[],
      }),
    ),
  }
}

export async function getModelFromDb(prisma: PrismaClient, slug: string): Promise<ProductModel | null> {
  const row = await prisma.productModel.findUnique({ where: { slug }, include: modelInclude })
  return row ? rowToModel(row) : null
}

/**
 * Crée ou remplace intégralement une fiche (champs scalaires + enfants) dans une transaction.
 * `previousSlug` permet de renommer une fiche.
 */
export async function saveModel(
  prisma: PrismaClient,
  m: ProductModel,
  opts: { previousSlug?: string; actor: string },
): Promise<void> {
  await prisma.$transaction(async (tx) => {
    const family = await tx.productFamily.findUnique({ where: { slug: m.family } })
    if (!family) throw new Error(`Famille inconnue : ${m.family}`)
    const generation = await tx.productGeneration.findUnique({ where: { slug: m.generation } })
    if (!generation) throw new Error(`Génération inconnue : ${m.generation}`)
    if (generation.familyId !== family.id) throw new Error(`La génération ${m.generation} n’appartient pas à ${m.family}`)

    const lookupSlug = opts.previousSlug ?? m.slug
    const existing = await tx.productModel.findUnique({ where: { slug: lookupSlug } })
    if (opts.previousSlug && opts.previousSlug !== m.slug) {
      const clash = await tx.productModel.findUnique({ where: { slug: m.slug } })
      if (clash) throw new Error(`Le slug ${m.slug} est déjà utilisé`)
    }
    if (existing) {
      const where = { modelId: existing.id }
      await Promise.all([
        tx.productVariant.deleteMany({ where }),
        tx.productSpecification.deleteMany({ where }),
        tx.productColor.deleteMany({ where }),
        tx.productImage.deleteMany({ where }),
        tx.productAsset3D.deleteMany({ where }),
        tx.productCompatibility.deleteMany({ where }),
        tx.productPrice.deleteMany({ where }),
        tx.productSource.deleteMany({ where }),
      ])
      await tx.productModel.update({
        where: { id: existing.id },
        data: { ...scalarData(m), familyId: family.id, generationId: generation.id, ...childData(m) },
      })
    } else {
      await tx.productModel.create({
        data: { ...scalarData(m), familyId: family.id, generationId: generation.id, ...childData(m) },
      })
    }
    await tx.auditLog.create({
      data: {
        actor: opts.actor,
        action: existing ? 'update' : 'create',
        entity: 'ProductModel',
        entityId: m.slug,
        details: opts.previousSlug && opts.previousSlug !== m.slug ? { renamedFrom: opts.previousSlug } : undefined,
      },
    })
  })
}

export async function deleteModel(prisma: PrismaClient, slug: string, actor: string): Promise<boolean> {
  const existing = await prisma.productModel.findUnique({ where: { slug } })
  if (!existing) return false
  await prisma.$transaction([
    prisma.productModel.delete({ where: { id: existing.id } }),
    prisma.auditLog.create({ data: { actor, action: 'delete', entity: 'ProductModel', entityId: slug } }),
  ])
  return true
}

export async function upsertGeneration(prisma: PrismaClient, g: ProductGeneration): Promise<void> {
  const family = await prisma.productFamily.findUnique({ where: { slug: g.family } })
  if (!family) throw new Error(`Famille inconnue : ${g.family}`)
  await prisma.productGeneration.upsert({
    where: { slug: g.slug },
    create: { slug: g.slug, familyId: family.id, line: g.line, name: g.name, year: g.year, order: g.order },
    update: { familyId: family.id, line: g.line, name: g.name, year: g.year, order: g.order },
  })
}

/** Importe intégralement un catalogue (familles, générations, modèles, éléments en attente). */
export async function seedCatalog(
  prisma: PrismaClient,
  catalog: Omit<Catalog, 'source' | 'loadedAt'>,
  actor = 'seed',
): Promise<{ families: number; generations: number; models: number }> {
  for (const f of catalog.families) {
    const data = {
      name: f.name,
      shortName: f.shortName,
      tagline: f.tagline,
      description: f.description,
      order: f.order,
      lines: f.lines as unknown as Prisma.InputJsonValue,
      sources: f.sources as unknown as Prisma.InputJsonValue,
      gaps: f.gaps,
    }
    await prisma.productFamily.upsert({ where: { slug: f.slug }, create: { slug: f.slug, ...data }, update: data })
  }
  for (const g of catalog.generations) await upsertGeneration(prisma, g)
  for (const m of catalog.models) await saveModel(prisma, m, { actor })
  await prisma.pendingProduct.deleteMany()
  if (catalog.pending.length) {
    await prisma.pendingProduct.createMany({
      data: catalog.pending.map((p) => ({ ...p, sources: p.sources as unknown as Prisma.InputJsonValue })),
    })
  }
  return { families: catalog.families.length, generations: catalog.generations.length, models: catalog.models.length }
}
