const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;
const MAX_ENTRIES = 10_000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, RateLimitEntry>();

export function rateLimit(identifier: string): { allowed: boolean } {
  const now = Date.now();

  // Cleanup when map exceeds threshold
  if (store.size > MAX_ENTRIES) {
    for (const [key, entry] of store) {
      if (entry.resetAt < now) {
        store.delete(key);
      }
    }
  }

  const existing = store.get(identifier);

  if (!existing || existing.resetAt < now) {
    store.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (existing.count >= MAX_REQUESTS) {
    return { allowed: false };
  }

  existing.count += 1;
  return { allowed: true };
}
