import type { ProductModel } from './catalog/types'

export const productHref = (m: Pick<ProductModel, 'family' | 'slug'>) => `/${m.family}/${m.slug}`
export const familyHref = (family: string) => `/${family}`
export const compareHref = (slugs: string[]) => `/comparer?modeles=${slugs.map(encodeURIComponent).join(',')}`
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3100').replace(/\/$/, '')
