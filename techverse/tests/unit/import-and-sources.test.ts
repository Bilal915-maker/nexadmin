import { createServer } from 'node:http'
import type { AddressInfo } from 'node:net'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { filesCatalog } from '../../data/catalog'
import { analyseImport, parseCsv } from '../../src/lib/catalog/importer'
import { modelBySlug } from '../../src/lib/catalog/query'
import { checkSource, findEvidence } from '../../src/lib/catalog/source-check'
import type { Catalog } from '../../src/lib/catalog/types'
import { hashPassword, verifyPassword } from '../../src/lib/auth/password'
import { createSessionToken, verifySessionToken } from '../../src/lib/auth/session'

const c: Catalog = { ...filesCatalog, source: 'files', loadedAt: '' }

describe('CSV', () => {
  it('gère guillemets, virgules et retours à la ligne', () => {
    const rows = parseCsv('a,b,c\n1,"deux, avec virgule","trois\nlignes"\n')
    expect(rows).toEqual([{ a: '1', b: 'deux, avec virgule', c: 'trois\nlignes' }])
  })
  it('détecte le point-virgule comme séparateur', () => {
    expect(parseCsv('a;b\n1;2')).toEqual([{ a: '1', b: '2' }])
  })
})

describe('import', () => {
  const header = 'slug,name,family,line,generation,released,status,summary,colors,prices,modelNumbers,validation,visualKind'
  it('classe création, mise à jour et erreurs', () => {
    const csv = [
      header,
      'nouveau-test,Nouveau test,iphone,standard,iphone-17,2025-09-19,current,Résumé,Black:#111111,US:799,A9998,unverified,phone',
      'iphone-7,iPhone 7,iphone,standard,iphone-7,2016-09-16,discontinued,Résumé,,,A1660,unverified,phone',
      'x-bad,Mauvaise,iphone,inexistante,iphone-7,2016-09-16,current,Résumé,,,,unverified,phone',
    ].join('\n')
    const r = analyseImport(csv, c)
    expect(r.summary).toMatchObject({ create: 1, update: 1, error: 1 })
  })
  it('signale un doublon de nom et un numéro de modèle déjà attribué', () => {
    const csv = [header, 'iphone-7-bis,iPhone 7,iphone,standard,iphone-7,2016-09-16,current,Résumé,,,A1660,unverified,phone'].join('\n')
    const r = analyseImport(csv, c)
    expect(r.rows[0].warnings.join(' ')).toMatch(/Doublon probable/)
    expect(r.rows[0].warnings.join(' ')).toMatch(/A1660/)
  })
  it('refuse un statut « confirmé » sans source confirmée', () => {
    const csv = [header, 'conf-test,Conf test,iphone,standard,iphone-17,2025-09-19,current,Résumé,,,,confirmed,phone'].join('\n')
    expect(analyseImport(csv, c).rows[0].errors.join(' ')).toMatch(/confirmé/)
  })
  it('accepte un export JSON en réimport (mises à jour uniquement)', () => {
    const r = analyseImport(JSON.stringify(c.models.slice(0, 10)), c)
    expect(r.summary).toMatchObject({ create: 0, update: 10, error: 0 })
  })
})

describe('vérification de sources', () => {
  let url = ''
  const server = createServer((req, res) => {
    if (req.url === '/ok') {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end('<html><body><p>Weight: 138 grams</p><p>Height: 138.3 mm Width: 67.1 mm Depth: 7.1 mm</p><p>Jet Black, Rose Gold</p><p>A10 Fusion chip</p></body></html>')
    } else {
      res.writeHead(404)
      res.end()
    }
  })
  beforeAll(async () => {
    await new Promise<void>((r) => server.listen(0, '127.0.0.1', () => r()))
    url = `http://127.0.0.1:${(server.address() as AddressInfo).port}`
  })
  afterAll(() => server.close())

  it('retrouve les valeurs présentes et signale les absentes', async () => {
    const m = modelBySlug(c, 'iphone-7')!
    const r = await checkSource(m, `${url}/ok`)
    expect(r.httpStatus).toBe(200)
    const byLabel = Object.fromEntries(r.evidence.map((e) => [e.expected, e.found]))
    expect(byLabel['138 g']).toBe(true)
    expect(byLabel['138.3 mm']).toBe(true)
    expect(byLabel['Jet Black']).toBe(true)
    expect(byLabel['Silver']).toBe(false)
  })
  it('rapporte une source introuvable sans planter', async () => {
    const r = await checkSource(modelBySlug(c, 'iphone-7')!, `${url}/absent`)
    expect(r.httpStatus).toBe(404)
    expect(r.evidence).toEqual([])
  })
  it('ignore le contenu des scripts', () => {
    const ev = findEvidence('<script>var w="138 grams"</script>', modelBySlug(c, 'iphone-7')!)
    expect(ev.find((e) => e.field === 'weightG')?.found).toBe(false)
  })
})

describe('authentification', () => {
  it('hache et vérifie un mot de passe', async () => {
    const h = await hashPassword('un-mot-de-passe-long')
    expect(h.startsWith('scrypt:')).toBe(true)
    expect(await verifyPassword('un-mot-de-passe-long', h)).toBe(true)
    expect(await verifyPassword('mauvais-mot-de-passe', h)).toBe(false)
  })
  it('refuse les mots de passe trop courts', async () => {
    await expect(hashPassword('court')).rejects.toThrow()
  })
  it('signe et vérifie un jeton de session, rejette une signature invalide', async () => {
    const secret = new TextEncoder().encode('x'.repeat(40))
    const token = await createSessionToken('admin@exemple.fr', secret)
    expect(await verifySessionToken(token, secret)).toEqual({ email: 'admin@exemple.fr' })
    expect(await verifySessionToken(token, new TextEncoder().encode('y'.repeat(40)))).toBeNull()
    expect(await verifySessionToken(token.slice(0, -2) + 'aa', secret)).toBeNull()
  })
})
