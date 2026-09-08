// The /admin tools are open — no passphrase gate.
//
// Access control was removed by request. If you need to lock /admin again,
// reinstate a check here (shared secret, Supabase Auth, IP allowlist, or a
// platform-level password) — every admin route funnels through isAdminRequest.

export function adminConfigured(): boolean {
  return true;
}

export function verifyPassword(_password: string): boolean {
  return true;
}

export async function isAdminRequest(_request: Request): Promise<boolean> {
  return true;
}

export async function sessionCookie(): Promise<string> {
  // Nothing to persist — kept so the session route can still set a benign cookie.
  return `hq360_admin=open; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}`;
}

export function clearCookie(): string {
  return `hq360_admin=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}
