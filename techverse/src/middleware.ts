import { NextResponse, type NextRequest } from 'next/server'
import { SESSION_COOKIE, verifySessionToken } from '@/lib/auth/session'

/**
 * Protège l'administration : toute page /admin (hors connexion) et toute API /api/admin
 * (hors connexion) exige une session valide. Les routes revérifient la session côté serveur.
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isApi = pathname.startsWith('/api/admin')
  if (pathname === '/admin/login' || pathname === '/api/admin/login') return NextResponse.next()
  const secret = process.env.ADMIN_SESSION_SECRET ?? ''
  const session = secret.length >= 32 ? await verifySessionToken(req.cookies.get(SESSION_COOKIE)?.value, new TextEncoder().encode(secret)) : null
  if (session) {
    const res = NextResponse.next()
    res.headers.set('Cache-Control', 'no-store')
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return res
  }
  if (isApi) return NextResponse.json({ error: 'Authentification requise' }, { status: 401 })
  const url = req.nextUrl.clone()
  url.pathname = '/admin/login'
  url.search = ''
  return NextResponse.redirect(url)
}

export const config = { matcher: ['/admin/:path*', '/api/admin/:path*'] }
