import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy route — client reviews and proof now sit within Work.
export const Route = createFileRoute("/reviews")({
  beforeLoad: () => {
    throw redirect({ to: "/work" });
  },
});
