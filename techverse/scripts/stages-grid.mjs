// Capture la scène 3D de plusieurs fiches : node scripts/stages-grid.mjs <sortie> <url...>
import { chromium } from '@playwright/test'
const [out, ...urls] = process.argv.slice(2)
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const page = await browser.newPage({ viewport: { width: 1280, height: 860 } })
const errors = []
page.on('pageerror', (e) => errors.push(e.message))
let i = 0
for (const url of urls) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 })
  await page.waitForTimeout(3500)
  const pause = page.getByRole('button', { name: 'Pause rotation' })
  if (await pause.count()) await pause.click()
  await page.waitForTimeout(500)
  const stage = page.locator('canvas[role="img"]').first()
  const box = await stage.boundingBox()
  if (box) await page.screenshot({ path: `${out}-${i}.png`, clip: box })
  else console.log('no stage for', url)
  i++
}
console.log(errors.join('\n') || 'no errors')
await browser.close()
