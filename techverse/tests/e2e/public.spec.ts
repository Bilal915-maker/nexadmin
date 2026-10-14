import { expect, test } from '@playwright/test'

test.describe('pages publiques', () => {
  test('accueil : sections principales et absence de débordement horizontal', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('génération par génération')
    for (const id of ['familles-titre', 'echelle-titre', 'chronologie-titre', 'nouveautes-titre', 'historiques-titre', 'outils-titre']) {
      await expect(page.locator(`#${id}`)).toBeAttached()
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow).toBeLessThanOrEqual(1)
  })

  test('aucun débordement horizontal sur les pages principales', async ({ page }) => {
    for (const url of ['/', '/iphone', '/iphone/iphone-15-pro', '/chronologie', '/inventaire', '/comparer?modeles=iphone-7,iphone-17-pro', '/catalogue?q=ipad']) {
      await page.goto(url)
      const { iw, cw, sw } = await page.evaluate(() => ({ iw: window.innerWidth, cw: document.documentElement.clientWidth, sw: document.documentElement.scrollWidth }))
      expect(iw - cw, `zone d’affichage élargie sur ${url}`).toBeLessThanOrEqual(1)
      expect(sw - cw, `défilement horizontal sur ${url}`).toBeLessThanOrEqual(1)
    }
  })

  test('chronologie interactive : changer d’année', async ({ page }) => {
    await page.goto('/')
    const tab = page.getByRole('tab', { name: /^2019/ })
    await tab.scrollIntoViewIfNeeded()
    await tab.click()
    await expect(page.getByRole('tabpanel', { name: 'Produits 2019' })).toContainText('iPhone 11')
  })

  test('recherche globale (⌘K) par numéro de modèle', async ({ page, isMobile }) => {
    await page.goto('/')
    const input = page.getByRole('combobox', { name: 'Rechercher' })
    // Réessaie tant que l'hydratation n'a pas branché le raccourci
    await expect(async () => {
      if (isMobile) await page.getByRole('button', { name: 'Rechercher dans le catalogue' }).click()
      else await page.keyboard.press('Control+k')
      await expect(input).toBeVisible({ timeout: 1000 })
    }).toPass({ timeout: 20_000 })
    await input.fill('A2848')
    await expect(page.getByRole('option').first()).toContainText('iPhone 15 Pro')
    await input.press('Enter')
    await expect(page).toHaveURL(/\/iphone\/iphone-15-pro$/)
  })

  test('page famille : filtres synchronisés avec l’URL', async ({ page, isMobile }) => {
    await page.goto('/iphone')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('iPhone')
    if (isMobile) await page.getByRole('button', { name: /^Filtres/ }).click()
    const scope = isMobile ? page.getByRole('dialog', { name: 'Filtres' }) : page.getByRole('complementary', { name: 'Filtres' })
    await scope.getByRole('button', { name: /^1 To/ }).click()
    await expect(page).toHaveURL(/storage=1024/)
    if (isMobile) await page.getByRole('button', { name: /Voir \d+ résultat/ }).click()
    await expect(page.getByRole('link', { name: /iPhone 13 Pro Max/ }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /iPhone 7 Plus/ })).toHaveCount(0)
  })

  test('fiche produit : sections, sources et changement de finition 3D', async ({ page }) => {
    await page.goto('/iphone/iphone-15-pro')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('iPhone 15 Pro')
    await expect(page.getByRole('heading', { name: '4 finitions officielles' })).toBeVisible()
    await expect(page.locator('#fiche-technique')).toContainText('A17 Pro')
    await expect(page.locator('#sources')).toContainText('À vérifier')
    await expect(page.locator('#sources')).toContainText('support.apple.com')
    const radio = page.getByRole('radio', { name: 'Blue Titanium' })
    await radio.scrollIntoViewIfNeeded()
    await expect(radio).toBeVisible({ timeout: 30_000 })
    await radio.click()
    await expect(radio).toHaveAttribute('aria-checked', 'true')
    await expect(page.getByText('Blue Titanium · teinte affichée approximative')).toBeVisible()
  })

  test('fiche 2026 rapportée par la presse : statut explicite', async ({ page }) => {
    await page.goto('/iphone/iphone-duo')
    await expect(page.getByText('Rapporté (presse)').first()).toBeVisible()
    await expect(page.getByText('Annoncé').first()).toBeVisible()
  })

  test('comparateur : différences seulement', async ({ page }) => {
    await page.goto('/comparer?modeles=iphone-7,iphone-17-pro')
    const table = page.getByRole('table')
    await expect(table).toContainText('Lightning')
    await expect(table).toContainText('USB-C (USB 3)')
    const before = await table.locator('tbody tr').count()
    await page.getByText('Afficher uniquement les différences').click()
    await expect.poll(() => table.locator('tbody tr').count()).toBeLessThan(before)
  })

  test('pages chronologie, inventaire, 404', async ({ page }) => {
    await page.goto('/chronologie?famille=autres')
    await expect(page.getByRole('link', { name: /iPod touch \(7e génération\)/ }).first()).toBeVisible()
    await page.goto('/inventaire')
    await expect(page.getByRole('heading', { name: 'Lacunes connues' })).toBeVisible()
    const res = await page.goto('/iphone/n-existe-pas')
    expect(res?.status()).toBe(404)
  })

  test('animations réduites : contenu visible sans animation', async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' })
    const page = await ctx.newPage()
    await page.goto('/iphone/iphone-7')
    const reveal = page.locator('[data-reveal]').first()
    await reveal.scrollIntoViewIfNeeded()
    await expect(reveal).toHaveCSS('opacity', '1')
    await ctx.close()
  })

  test('navigation clavier : lien d’évitement', async ({ page, isMobile }) => {
    test.skip(isMobile, 'clavier physique')
    await page.goto('/mac')
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Aller au contenu' })).toBeFocused()
  })
})

test.describe('API et sécurité', () => {
  test('API de recherche JSON', async ({ request }) => {
    const res = await request.get('/api/catalog/search?q=ipod')
    expect(res.ok()).toBeTruthy()
    const data = await res.json()
    expect(data.results[0].slug).toBe('ipod-touch-7e-generation')
  })
  test('administration protégée', async ({ request, page }) => {
    expect((await request.get('/api/admin/models')).status()).toBe(401)
    await page.goto('/admin')
    await expect(page).toHaveURL(/\/admin\/login$/)
  })
  test('en-têtes de sécurité', async ({ request }) => {
    const res = await request.get('/')
    expect(res.headers()['x-content-type-options']).toBe('nosniff')
    expect(res.headers()['x-frame-options']).toBe('DENY')
  })
})
