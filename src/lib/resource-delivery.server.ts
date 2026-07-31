// Sends the requested guide to the reader's inbox.
// The send helper is created when the sending domain is configured, so we load
// it lazily and fall back gracefully until then.
export async function deliverResourceEmail(input: {
  requestId: string;
  email: string;
  slug: string;
  title: string;
  origin: string;
}): Promise<boolean> {
  let sent = false;

  try {
    const mod = (await import("./email-templates/send-email").catch(() => null)) as {
      sendTemplateEmail?: (
        template: string,
        to: string,
        options: { templateData: Record<string, unknown>; idempotencyKey: string },
      ) => Promise<{ sent: boolean; reason?: string }>;
    } | null;

    if (mod?.sendTemplateEmail) {
      const result = await mod.sendTemplateEmail("resource-delivery", input.email, {
        templateData: {
          title: input.title,
          downloadUrl: `${input.origin}/resources/${input.slug}`,
        },
        idempotencyKey: `resource-${input.requestId}`,
      });
      sent = result.sent;
    }
  } catch (error) {
    console.error("[resource-request] email send failed", error);
  }

  if (sent) {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin
      .from("resource_requests")
      .update({ emailed_at: new Date().toISOString() })
      .eq("id", input.requestId);
  }

  return sent;
}
