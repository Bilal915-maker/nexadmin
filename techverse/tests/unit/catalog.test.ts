import { describe, expect, it } from 'vitest'
import { filesCatalog } from '../../data/catalog'
import { CATALOG_REFERENCE_DATE } from '../../data/catalog/_define'
import { toneOf } from '../../src/lib/catalog/colors'
import { checkCatalog } from '../../src/lib/catalog/integrity'
import {
  applyFilters,
  compareModels,
  facetOptions,
  generationsByFamily,
  latestReleases,
  modelBySlug,
  parseFilters,
  retiredLines,
  search,
  timeline,
} from '../../src/lib/catalog/query'
import type { Catalog } from '../../src/lib/catalog/types'

const c: Catalog = { ...filesCatalog, source: 'files', loadedAt: '2026-10-14T00:00:00Z' }

describe('intégrité', () => {
  it('ne contient aucune erreur bloquante', () => {
    const errors = checkCatalog(c).filter((i) => i.level === 'error')
    expect(errors).toEqual([])
  })
  it('couvre les 10 familles', () => {
    for (const f of c.families) expect(c.models.some((m) => m.family === f.slug)).toBe(true)
  })
  it('ne déclare aucune fiche « confirmée » sans vérification', () => {
    expect(c.models.filter((m) => m.validation.status === 'confirmed')).toEqual([])
  })
  it('les modèles 2026 issus de la presse sont marqués « reported »', () => {
    for (const slug of ['iphone-17e', 'macbook-neo', 'iphone-duo', 'airpods-5']) {
      expect(modelBySlug(c, slug)?.validation.status).toBe('reported')
    }
  })
  it('respecte la règle de périmètre (lancement depuis 2016) sauf exceptions documentées', () => {
    const before = c.models.filter((m) => (m.released ?? m.announced ?? '9999') < '2016-01-01').map((m) => m.slug)
    expect(before.sort()).toEqual(['apple-pencil-1re-generation', 'apple-tv-hd'])
    for (const slug of before) expect(modelBySlug(c, slug)!.validation.notes.join(' ') + (modelBySlug(c, slug)!.statusNote ?? '')).toMatch(/2015|2016|période/)
  })
})

describe('recherche', () => {
  it('trouve un modèle par son nom exact en premier', () => {
    expect(search(c, 'iPhone 15 Pro')[0].slug).toBe('iphone-15-pro')
  })
  it('trouve un modèle par numéro de modèle', () => {
    expect(search(c, 'A2848')[0].slug).toBe('iphone-15-pro')
    expect(search(c, 'a1662')[0].slug).toBe('iphone-se-1re-generation')
  })
  it('trouve par identifiant matériel', () => {
    expect(search(c, 'MacBookPro16,1')[0].slug).toBe('macbook-pro-16-pouces-2019')
  })
  it('gère les accents et les synonymes français', () => {
    expect(search(c, 'montre ultra').map((m) => m.slug)).toContain('apple-watch-ultra')
    expect(search(c, 'écouteurs pro').some((m) => m.slug.startsWith('airpods-pro'))).toBe(true)
  })
  it('renvoie une liste vide pour une requête sans correspondance', () => {
    expect(search(c, 'zzzz-introuvable')).toEqual([])
  })
})

describe('filtres', () => {
  it('filtre par famille, année et stockage', () => {
    const f = parseFilters({ family: 'iphone', year: '2023', storage: '1024' })
    const res = applyFilters(c.models, f, c)
    expect(res.map((m) => m.slug).sort()).toEqual(['iphone-15-pro', 'iphone-15-pro-max'])
  })
  it('filtre par statut arrêté', () => {
    const res = applyFilters(c.models, parseFilters({ family: 'autres', status: 'discontinued' }), c)
    expect(res.map((m) => m.slug)).toContain('ipod-touch-7e-generation')
  })
  it('filtre par prix US', () => {
    const res = applyFilters(c.models, parseFilters({ family: 'iphone', prixMax: '429' }), c)
    expect(res.every((m) => (m.prices.find((p) => p.market === 'US')?.amount ?? Infinity) <= 429)).toBe(true)
    expect(res.length).toBeGreaterThan(0)
  })
  it('expose des options de facette avec comptes', () => {
    const opts = facetOptions(c.models.filter((m) => m.family === 'mac'), 'chip', c)
    expect(opts.find((o) => o.value === 'M1')?.count).toBeGreaterThanOrEqual(3)
  })
  it('classe les teintes à partir des noms et approximations', () => {
    expect(toneOf('#e8c3b6', 'Rose Gold')).toBe('rose')
    expect(toneOf('#1d1d1f', 'Black')).toBe('noir')
    expect(toneOf('#b3142c', '(PRODUCT)RED')).toBe('rouge')
    expect(toneOf('#3f4c5c', 'Blue Titanium')).toBe('bleu')
  })
})

describe('navigation et comparateur', () => {
  it('regroupe les générations par famille dans l’ordre chronologique', () => {
    const g = generationsByFamily(c, 'iphone')
    expect(g[0].slug).toBe('iphone-se-1')
    expect(g.at(-1)!.models.some((m) => m.slug === 'iphone-duo')).toBe(true)
  })
  it('ne liste dans les nouveautés que des produits déjà commercialisés', () => {
    for (const m of latestReleases(c, 10, CATALOG_REFERENCE_DATE)) expect(m.released! <= CATALOG_REFERENCE_DATE).toBe(true)
  })
  it('détecte les gammes retirées', () => {
    const lines = retiredLines(c).map((l) => `${l.family.slug}/${l.line}`)
    expect(lines).toEqual(expect.arrayContaining(['autres/ipod', 'iphone/mini', 'mac/macbook', 'mac/imac-pro']))
  })
  it('construit une chronologie de 2015 à 2026', () => {
    const t = timeline(c)
    expect(t[0].year).toBe(2015)
    expect(t.at(-1)!.year).toBe(2026)
  })
  it('compare deux générations et signale les différences', () => {
    const sections = compareModels(c, [modelBySlug(c, 'iphone-14-pro')!, modelBySlug(c, 'iphone-15-pro')!])
    const core = sections.find((s) => s.id === 'core')!
    expect(core.rows.find((r) => r.label === 'Connecteur')?.differs).toBe(true)
    const design = sections.find((s) => s.id === 'design')!
    expect(design.rows.find((r) => r.label === 'Couleurs officielles')?.colors?.[1].map((x) => x.name)).toContain('Natural Titanium')
  })
  it('adapte les critères à des familles différentes', () => {
    const sections = compareModels(c, [modelBySlug(c, 'apple-watch-ultra')!, modelBySlug(c, 'airpods-pro-3')!])
    const labels = sections.flatMap((s) => s.rows.map((r) => r.label))
    expect(labels).not.toContain('Taille d’écran')
  })
})
