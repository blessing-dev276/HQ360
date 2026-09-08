import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy route — FAQs now live on the pages they relate to (industries,
// capabilities, pricing). General questions are answered on Contact.
export const Route = createFileRoute("/faqs")({
  beforeLoad: () => {
    throw redirect({ to: "/contact" });
  },
});
