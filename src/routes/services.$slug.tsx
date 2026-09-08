import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy per-service pages now live under Capabilities.
export const Route = createFileRoute("/services/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/capabilities" });
  },
});
