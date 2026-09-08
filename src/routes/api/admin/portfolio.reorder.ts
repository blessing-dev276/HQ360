import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { isAdminRequest } from "@/lib/admin-auth.server";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

const schema = z.object({
  // Full list of item ids in the desired display order.
  ids: z.array(z.string().uuid()).min(1).max(1000),
});

export const Route = createFileRoute("/api/admin/portfolio/reorder")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!(await isAdminRequest(request)))
          return json({ ok: false, error: "unauthorized" }, 401);
        let body: z.infer<typeof schema>;
        try {
          body = schema.parse(await request.json());
        } catch {
          return json({ ok: false, error: "invalid" }, 400);
        }
        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          // Assign sort_order by position. Small dataset — sequential updates are fine.
          const results = await Promise.all(
            body.ids.map((id, index) =>
              supabaseAdmin.from("portfolio_items").update({ sort_order: index }).eq("id", id),
            ),
          );
          if (results.some((r) => r.error)) return json({ ok: false, error: "storage" }, 500);
          return json({ ok: true });
        } catch (err) {
          console.error("[admin/portfolio/reorder]", err instanceof Error ? err.message : err);
          return json({ ok: false, error: "unavailable" }, 503);
        }
      },
    },
  },
});
