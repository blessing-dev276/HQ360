import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy route. The old author-only "services" concept is now split into
// Capabilities (what we do) and Industries (who we help).
export const Route = createFileRoute("/services/")({
  beforeLoad: () => {
    throw redirect({ to: "/capabilities" });
  },
});
