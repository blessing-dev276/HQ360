// The Lovable vite config injects only VITE_-prefixed vars into the dev server,
// so server-only secrets in .env (ADMIN_PASSWORD, RESEND_API_KEY, SUPABASE_
// SERVICE_ROLE_KEY, …) never reach process.env during `vite dev`. Load them
// here. This is a no-op on production hosts, which inject real env vars and
// where process.loadEnvFile / a filesystem .env do not exist.
try {
  const proc = typeof process !== "undefined" ? process : undefined;
  if (proc && typeof proc.loadEnvFile === "function") {
    for (const file of [".env", ".env.local"]) {
      try {
        proc.loadEnvFile(file);
      } catch {
        // file absent — fine
      }
    }
  }
} catch {
  // non-Node runtime — nothing to do
}
