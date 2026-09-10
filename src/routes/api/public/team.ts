import { createFileRoute } from "@tanstack/react-router";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control":
        status === 200 ? "public, max-age=0, s-maxage=10, stale-while-revalidate=59" : "no-store",
    },
  });
}

/**
 * Public read of published team members, ordered for display. Returns an empty
 * list when nothing matches; uncached failures preserve the static UI roster
 * and let the visitor retry the managed content.
 */
export const Route = createFileRoute("/api/public/team")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { data, error } = await supabaseAdmin
            .from("team_members")
            .select("id, name, title, image_url")
            .eq("published", true)
            .order("sort_order", { ascending: true })
            .order("created_at", { ascending: true })
            .limit(60);
          if (error) return json({ ok: false }, 503);
          return json({ ok: true, members: data ?? [] });
        } catch {
          return json({ ok: false }, 503);
        }
      },
    },
  },
});
