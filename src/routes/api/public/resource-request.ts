import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  email: z.string().email().max(320),
  slug: z.string().min(1).max(80),
  title: z.string().min(1).max(160),
});

export const Route = createFileRoute("/api/public/resource-request")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let parsed;
        try {
          parsed = schema.parse(await request.json());
        } catch {
          return new Response(JSON.stringify({ ok: false }), {
            status: 400,
            headers: { "content-type": "application/json" },
          });
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data, error } = await supabaseAdmin
          .from("resource_requests")
          .insert({
            email: parsed.email,
            resource_slug: parsed.slug,
            resource_title: parsed.title,
          })
          .select("id")
          .single();

        if (error) {
          console.error("[resource-request] insert failed", error.message);
          return new Response(JSON.stringify({ ok: false }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }

        const { deliverResourceEmail } = await import("@/lib/resource-delivery.server");
        const sent = await deliverResourceEmail({
          requestId: data.id,
          email: parsed.email,
          slug: parsed.slug,
          title: parsed.title,
          origin: new URL(request.url).origin,
        });

        return new Response(JSON.stringify({ ok: true, emailed: sent }), {
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
