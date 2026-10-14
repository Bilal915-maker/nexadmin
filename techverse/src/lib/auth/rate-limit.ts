/** Limitation simple des tentatives de connexion (mémoire du processus). */
const attempts = new Map<string, { count: number; first: number }>()
const WINDOW_MS = 15 * 60 * 1000
const MAX = 5

export function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now()
  const cur = attempts.get(key)
  if (!cur || now - cur.first > WINDOW_MS) return { allowed: true, retryAfterSeconds: 0 }
  if (cur.count >= MAX) return { allowed: false, retryAfterSeconds: Math.ceil((cur.first + WINDOW_MS - now) / 1000) }
  return { allowed: true, retryAfterSeconds: 0 }
}

export function recordFailure(key: string): void {
  const now = Date.now()
  const cur = attempts.get(key)
  if (!cur || now - cur.first > WINDOW_MS) attempts.set(key, { count: 1, first: now })
  else cur.count++
}

export function resetAttempts(key: string): void {
  attempts.delete(key)
}
