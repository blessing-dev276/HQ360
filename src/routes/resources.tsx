import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy route — free resources are folded into Insights. The resource-request
// API endpoint remains available for any existing links to the PDFs.
export const Route = createFileRoute("/resources")({
  beforeLoad: () => {
    throw redirect({ statusCode: 301, to: "/insights" });
  },
});
