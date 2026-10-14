// Capture pleine page : node scripts/fullshot.mjs <url> <fichier> [largeur]
import { chromium } from '@playwright/test'
const [url, out, w = '1440'] = process.argv.slice(2)
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const page = await browser.newPage({ viewport: { width: Number(w), height: 900 } })
const logs = []
page.on('console', (m) => { if (['error'].includes(m.type())) logs.push(`[${m.type()}] ${m.text()}`) })
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`))
await page.emulateMedia({ reducedMotion: 'reduce' })
await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 })
await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)) } window.scrollTo(0, 0) })
await page.waitForTimeout(1500)
await page.screenshot({ path: out, fullPage: true })
console.log(logs.slice(0, 20).join('\n') || 'no console errors')
await browser.close()
