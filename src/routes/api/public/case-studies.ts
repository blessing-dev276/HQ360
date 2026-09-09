import { createFileRoute } from "@tanstack/react-router";
import { serializeCaseStudy } from "@/lib/case-study-shape";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control":
        status === 200
          ? "public, max-age=60, s-maxage=300, stale-while-revalidate=600"
          : "no-store",
    },
  });
}

/**
 * Public read of published case studies. Optional `?slug=` returns a single
 * study (still inside `items`). Uncached failures let the UI fall back to the
 * bundled roster and offer a retry.
 */
export const Route = createFileRoute("/api/public/case-studies")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const slug = new URL(request.url).searchParams.get("slug") ?? "";
        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          let query = supabaseAdmin.from("case_studies").select("*").eq("published", true);
          if (slug) query = query.eq("slug", slug);

          const { data, error } = await query
            .order("sort_order", { ascending: true })
            .order("created_at", { ascending: true })
            .limit(200);

          if (error) return json({ ok: false }, 503);
          return json({ ok: true, items: (data ?? []).map(serializeCaseStudy) });
        } catch {
          return json({ ok: false }, 503);
        }
      },
    },
  },
});
