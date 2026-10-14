/**
 * Garde-fous côté serveur pour les routes d'administration (en complément du middleware).
 */
import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { adminConfig, SESSION_COOKIE, verifySessionToken } from './session'

export async function getAdminSession(): Promise<{ email: string } | null> {
  const cfg = adminConfig()
  if (!cfg.ok) return null
  return verifySessionToken(cookies().get(SESSION_COOKIE)?.value, cfg.config.secret)
}

/** Vérifie que la requête mutante provient du même site (défense CSRF complémentaire à SameSite=Strict). */
export function sameOrigin(req: Request): boolean {
  const origin = req.headers.get('origin')
  if (!origin) return false
  const host = headers().get('x-forwarded-host') ?? headers().get('host')
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

export async function requireAdmin(req: Request, opts: { mutating?: boolean } = {}): Promise<{ email: string } | NextResponse> {
  const session = await getAdminSession()
  if (!session) return NextResponse.json({ error: 'Authentification requise' }, { status: 401 })
  if (opts.mutating && !sameOrigin(req)) return NextResponse.json({ error: 'Origine de la requête refusée' }, { status: 403 })
  return session
}
