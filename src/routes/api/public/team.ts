import { createFileRoute } from "@tanstack/react-router";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "public, max-age=60" },
  });
}

/**
 * Public read of published team members, ordered for display. Returns an empty
 * list (not an error) when nothing matches or the backend is unavailable, so
 * callers can fall back to a static roster gracefully.
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
          if (error) return json({ ok: true, members: [] });
          return json({ ok: true, members: data ?? [] });
        } catch {
          return json({ ok: true, members: [] });
        }
      },
    },
  },
});
