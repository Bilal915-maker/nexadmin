import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sameOrigin } from '@/lib/auth/guard'
import { verifyPassword } from '@/lib/auth/password'
import { checkRateLimit, recordFailure, resetAttempts } from '@/lib/auth/rate-limit'
import { adminConfig, createSessionToken, SESSION_COOKIE, sessionCookieOptions } from '@/lib/auth/session'

const body = z.object({ email: z.string().email().max(200), password: z.string().min(1).max(500) })
// Hachage factice pour garder un temps de réponse constant quand l'e-mail est inconnu
const DUMMY = 'scrypt:16384:8:1:AAAAAAAAAAAAAAAAAAAAAA==:' + 'A'.repeat(86) + '=='

export async function POST(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ error: 'Origine refusée' }, { status: 403 })
  const cfg = adminConfig()
  if (!cfg.ok) return NextResponse.json({ error: 'Administration non configurée', problems: cfg.problems }, { status: 503 })
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  const limit = checkRateLimit(ip)
  if (!limit.allowed) {
    return NextResponse.json({ error: `Trop de tentatives. Réessayez dans ${Math.ceil(limit.retryAfterSeconds / 60)} min.` }, { status: 429, headers: { 'Retry-After': String(limit.retryAfterSeconds) } })
  }
  const parsed = body.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Identifiants invalides' }, { status: 400 })
  const emailOk = parsed.data.email.trim().toLowerCase() === cfg.config.email
  const passOk = await verifyPassword(parsed.data.password, emailOk ? cfg.config.passwordHash : DUMMY)
  if (!emailOk || !passOk) {
    recordFailure(ip)
    return NextResponse.json({ error: 'Identifiants invalides' }, { status: 401 })
  }
  resetAttempts(ip)
  const token = await createSessionToken(cfg.config.email, cfg.config.secret)
  const res = NextResponse.json({ ok: true })
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions())
  return res
}
