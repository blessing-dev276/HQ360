import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { getCapability } from "@/data/capabilities";

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    const capability = getCapability(params.slug);
    if (!capability) throw notFound();
    throw redirect({ href: capability.path, statusCode: 301 });
  },
});
