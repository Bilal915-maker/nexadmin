// Teste les interactions de la scène 3D d'une fiche : node scripts/stage-shot.mjs <url> <prefixe>
import { chromium } from '@playwright/test'
const [url, prefix] = process.argv.slice(2)
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const page = await browser.newPage({ viewport: { width: 1280, height: 860 } })
const logs = []
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`))
page.on('console', (m) => { if (m.type() === 'error') logs.push(`[error] ${m.text()}`) })
await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 })
await page.waitForTimeout(4000)
const stage = page.locator('canvas[role="img"]').first()
await stage.scrollIntoViewIfNeeded()
const box = await stage.boundingBox()
const clip = { x: box.x - 4, y: box.y - 4, width: box.width + 8, height: box.height + 90 }
await page.getByRole('button', { name: 'Dos', exact: true }).click()
await page.waitForTimeout(2200)
await page.screenshot({ path: `${prefix}-back.png`, clip })
const radios = page.getByRole('radio')
if (await radios.count() > 2) { await radios.nth(2).click(); await page.waitForTimeout(600) }
const explode = page.getByRole('button', { name: /Décomposer|Ouvrir|Fermer|Détacher|Déplier/ })
if (await explode.count()) { await explode.first().click(); await page.waitForTimeout(2200) }
await page.screenshot({ path: `${prefix}-explode.png`, clip })
await page.getByRole('button', { name: 'Gros plan', exact: true }).click()
await page.waitForTimeout(2200)
await page.screenshot({ path: `${prefix}-detail.png`, clip })
console.log(logs.join('\n') || 'no errors')
await browser.close()
