import { createFileRoute } from "@tanstack/react-router";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "public, max-age=60" },
  });
}

/**
 * Public read of published portfolio items, filtered by industry and/or
 * capability. Returns an empty list (not an error) when nothing matches or the
 * backend is unavailable, so callers can render nothing gracefully.
 */
export const Route = createFileRoute("/api/public/portfolio")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const industry = url.searchParams.get("industry") ?? "";
        const capability = url.searchParams.get("capability") ?? "";

        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          let query = supabaseAdmin
            .from("portfolio_items")
            .select(
              "id, title, description, media_type, media_url, thumbnail_url, capability_slug, industry_slug, external_link",
            )
            .eq("published", true);

          if (industry) query = query.eq("industry_slug", industry);
          if (capability) query = query.eq("capability_slug", capability);

          const { data, error } = await query
            .order("sort_order", { ascending: true })
            .order("created_at", { ascending: false })
            .limit(60);

          if (error) return json({ ok: true, items: [] });
          return json({ ok: true, items: data ?? [] });
        } catch {
          return json({ ok: true, items: [] });
        }
      },
    },
  },
});
