// Capture d'écran rapide : node scripts/shot.mjs <url> <fichier> [largeur] [hauteur] [scrollY] [attenteMs]
import { chromium } from '@playwright/test'
const [url, out, w = '1440', h = '900', y = '0', wait = '2500'] = process.argv.slice(2)
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const page = await browser.newPage({ viewport: { width: Number(w), height: Number(h) } })
const logs = []
page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) logs.push(`[${m.type()}] ${m.text()}`) })
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`))
await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 })
if (Number(y)) { await page.evaluate((yy) => window.scrollTo(0, yy), Number(y)) }
await page.waitForTimeout(Number(wait))
await page.screenshot({ path: out })
console.log(logs.slice(0, 20).join('\n') || 'no console errors')
await browser.close()
