/**
 * Hachage des mots de passe administrateur (scrypt, Node.js natif).
 * Format : scrypt:N:r:p:selBase64:hashBase64 (sans « $ », pour éviter l'expansion des variables dans les fichiers .env)
 */
import { randomBytes, scrypt as scryptCb, timingSafeEqual } from 'node:crypto'

function scrypt(password: string, salt: Buffer, keylen: number, opts: { N: number; r: number; p: number }): Promise<Buffer> {
  return new Promise((resolve, reject) =>
    scryptCb(password, salt, keylen, { ...opts, maxmem: 256 * opts.N * opts.r }, (err, key) => (err ? reject(err) : resolve(key))),
  )
}

const PARAMS = { N: 16384, r: 8, p: 1 }

export async function hashPassword(password: string): Promise<string> {
  if (password.length < 12) throw new Error('Le mot de passe doit contenir au moins 12 caractères.')
  const salt = randomBytes(16)
  const hash = await scrypt(password, salt, 64, PARAMS)
  return `scrypt:${PARAMS.N}:${PARAMS.r}:${PARAMS.p}:${salt.toString('base64')}:${hash.toString('base64')}`
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const parts = stored.split(':')
  if (parts.length !== 6 || parts[0] !== 'scrypt') return false
  const [, n, r, p, saltB64, hashB64] = parts
  const expected = Buffer.from(hashB64, 'base64')
  const actual = await scrypt(password, Buffer.from(saltB64, 'base64'), expected.length, { N: Number(n), r: Number(r), p: Number(p) })
  return actual.length === expected.length && timingSafeEqual(actual, expected)
}
