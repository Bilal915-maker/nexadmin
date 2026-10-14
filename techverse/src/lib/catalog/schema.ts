import { z } from 'zod'
import {
  FAMILY_SLUGS,
  LIFECYCLE_STATUSES,
  SOURCE_TYPES,
  SPEC_GROUPS,
  VALIDATION_STATUSES,
  VISUAL_KINDS,
} from './types'

/** Date ISO complète (AAAA-MM-JJ) ou partielle (AAAA-MM) quand le jour n'est pas documenté. */
export const isoDate = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])(-(0[1-9]|[12]\d|3[01]))?$/, 'Date attendue au format AAAA-MM-JJ ou AAAA-MM')

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug attendu en minuscules, chiffres et tirets')

export const sourceSchema = z.object({
  url: z.string().url(),
  type: z.enum(SOURCE_TYPES),
  title: z.string().min(1),
  checkedAt: isoDate.optional(),
  status: z.enum(VALIDATION_STATUSES),
  note: z.string().optional(),
})

export const colorSchema = z.object({
  name: z.string().min(1),
  hex: z.string().regex(/^#[0-9a-fA-F]{6}$/, 'Couleur hexadécimale #RRGGBB attendue'),
  nameFr: z.string().optional(),
  finish: z.string().optional(),
  material: z.string().optional(),
  note: z.string().optional(),
})

export const priceSchema = z.object({
  market: z.string().min(2).max(8),
  currency: z.string().length(3),
  amount: z.number().positive(),
  config: z.string().optional(),
  date: isoDate,
  status: z.enum(VALIDATION_STATUSES),
})

export const dimensionsSchema = z.object({
  label: z.string().optional(),
  heightMm: z.number().positive().optional(),
  widthMm: z.number().positive().optional(),
  depthMm: z.number().positive().optional(),
  weightG: z.number().positive().optional(),
  note: z.string().optional(),
})

export const specGroupSchema = z.object({
  id: z.enum(SPEC_GROUPS),
  label: z.string().min(1),
  items: z.array(
    z.object({
      key: z.string().min(1),
      label: z.string().min(1),
      value: z.string().min(1),
      status: z.enum(VALIDATION_STATUSES).optional(),
    }),
  ),
})

export const modelSchema = z
  .object({
    slug,
    name: z.string().min(1),
    family: z.enum(FAMILY_SLUGS),
    line: z.string().min(1),
    generation: z.string().min(1),
    aliases: z.array(z.string()).default([]),
    announced: isoDate.optional(),
    released: isoDate.optional(),
    discontinued: isoDate.optional(),
    status: z.enum(LIFECYCLE_STATUSES),
    statusNote: z.string().optional(),
    summary: z.string().min(1),
    highlights: z.array(z.string()).default([]),
    identifiers: z.array(z.string()).default([]),
    variants: z
      .array(
        z.object({
          modelNumber: z.string().min(1),
          label: z.string().min(1),
          region: z.string().optional(),
          connectivity: z.string().optional(),
          note: z.string().optional(),
        }),
      )
      .default([]),
    colors: z.array(colorSchema).default([]),
    storageGB: z.array(z.number().int().positive()).default([]),
    ramGB: z.array(z.number().int().positive()).default([]),
    chips: z.array(z.string()).default([]),
    screenInches: z.number().positive().optional(),
    sizes: z.array(z.string()).default([]),
    connectivity: z.array(z.string()).default([]),
    connector: z.string().optional(),
    os: z.string().optional(),
    dimensions: z.array(dimensionsSchema).default([]),
    prices: z.array(priceSchema).default([]),
    specs: z.array(specGroupSchema).default([]),
    compatibility: z.array(z.object({ target: z.string().min(1), note: z.string().optional() })).default([]),
    images: z
      .array(
        z.object({
          url: z.string().url(),
          alt: z.string().min(1),
          license: z.string().min(1),
          credit: z.string().min(1),
          colorName: z.string().optional(),
        }),
      )
      .default([]),
    assets3d: z
      .array(
        z.object({
          url: z.string().url(),
          format: z.string().min(1),
          license: z.string().min(1),
          credit: z.string().min(1),
          isExact: z.boolean(),
          notes: z.string().optional(),
        }),
      )
      .default([]),
    sources: z.array(sourceSchema).default([]),
    validation: z.object({
      status: z.enum(VALIDATION_STATUSES),
      reviewedAt: isoDate.optional(),
      notes: z.array(z.string()).default([]),
    }),
    visual: z.object({
      kind: z.enum(VISUAL_KINDS),
      params: z.record(z.union([z.string(), z.number(), z.boolean()])),
    }),
  })
  .superRefine((m, ctx) => {
    if (m.announced && m.released && m.released < m.announced.slice(0, m.released.length)) {
      ctx.addIssue({ code: 'custom', path: ['released'], message: 'La commercialisation précède l’annonce' })
    }
    if (m.released && m.discontinued && m.discontinued < m.released.slice(0, m.discontinued.length)) {
      ctx.addIssue({ code: 'custom', path: ['discontinued'], message: 'Le retrait précède la commercialisation' })
    }
    if (m.discontinued && m.status !== 'discontinued') {
      ctx.addIssue({ code: 'custom', path: ['status'], message: 'Date de retrait renseignée mais statut différent de « discontinued »' })
    }
  })

export type ModelInputPayload = z.input<typeof modelSchema>
