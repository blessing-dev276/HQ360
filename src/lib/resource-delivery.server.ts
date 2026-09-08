// Delivers a requested resource (guide / checklist) to the reader's inbox.
// Uses the shared email abstraction; if no provider is configured the request is
// still recorded and the reader downloads the file directly from the site.

import { sendEmail, type EmailMessage } from "./email.server";

export async function deliverResourceEmail(input: {
  requestId: string;
  email: string;
  slug: string;
  title: string;
  origin: string;
}): Promise<boolean> {
  const message: EmailMessage = {
    to: input.email,
    subject: `Your download: ${input.title}`,
    text: [
      `Thanks for requesting ${input.title}.`,
      "",
      "Your download should have started on the site. If it did not, reply to this email and we will send it across.",
      "",
      `Requested from ${input.origin}`,
      "",
      "— HQ360",
    ].join("\n"),
  };
  if (process.env.EMAIL_FROM) message.replyTo = process.env.EMAIL_FROM;

  const result = await sendEmail(message);

  if (!result.sent) {
    console.log(
      `[resource-request] ${input.title} requested by ${input.email} (${input.requestId}); email not sent (${result.error ?? "no provider"})`,
    );
  }
  return result.sent;
}
