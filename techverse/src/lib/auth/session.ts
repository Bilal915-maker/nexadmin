/**
 * Sessions d'administration : jeton JWT HS256 signé (jose), stocké dans un cookie
 * httpOnly / SameSite=Strict / Secure en production. Compatible runtime Edge (middleware).
 */
import { jwtVerify, SignJWT } from 'jose'

export const SESSION_COOKIE = 'tv_admin'
export const SESSION_TTL_SECONDS = 8 * 60 * 60

export interface AdminConfig {
  email: string
  passwordHash: string
  secret: Uint8Array
}

/** Renvoie la configuration admin, ou la liste des problèmes de configuration. */
export function adminConfig(): { ok: true; config: AdminConfig } | { ok: false; problems: string[] } {
  const problems: string[] = []
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase()
  const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim()
  const secret = process.env.ADMIN_SESSION_SECRET ?? ''
  if (!email) problems.push('ADMIN_EMAIL manquant')
  if (!passwordHash?.startsWith('scrypt:')) problems.push('ADMIN_PASSWORD_HASH manquant ou invalide (npm run admin:hash)')
  if (secret.length < 32) problems.push('ADMIN_SESSION_SECRET manquant ou trop court (32 caractères minimum)')
  if (problems.length) return { ok: false, problems }
  return { ok: true, config: { email: email!, passwordHash: passwordHash!, secret: new TextEncoder().encode(secret) } }
}

export async function createSessionToken(email: string, secret: Uint8Array): Promise<string> {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(email)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .setIssuer('techverse')
    .setAudience('techverse-admin')
    .sign(secret)
}

export async function verifySessionToken(token: string | undefined, secret: Uint8Array): Promise<{ email: string } | null> {
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, secret, { issuer: 'techverse', audience: 'techverse-admin', algorithms: ['HS256'] })
    if (payload.role !== 'admin' || !payload.sub) return null
    return { email: payload.sub }
  } catch {
    return null
  }
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  }
}
