import { createFileRoute } from "@tanstack/react-router";
import { AdminApp } from "@/components/admin/AdminApp";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Portfolio, Work & Team | HQ360" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminApp,
});
