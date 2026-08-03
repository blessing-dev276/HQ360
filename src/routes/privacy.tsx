import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { BRAND } from "@/data/site";

const title = "Privacy Policy | HQ360";
const description =
  "How HQ360 collects, uses and stores personal information from website visitors, subscribers and clients.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    heading: "What we collect",
    body: "Your name and email address when you submit a form, the content of messages you send us, and basic analytics about how pages on this site are used. We do not collect payment details through this website.",
  },
  {
    heading: "Why we collect it",
    body: "To reply to your enquiry, to deliver a resource you requested, to send the monthly letter if you subscribed, and to understand which pages are useful so we can improve them.",
  },
  {
    heading: "Cookies",
    body: "We use a small number of cookies for analytics only. You can decline them in the banner shown on your first visit, and the site will continue to work normally.",
  },
  {
    heading: "Who we share it with",
    body: "Our email and analytics providers, acting on our instructions. We do not sell personal information and we do not share it for advertising.",
  },
  {
    heading: "How long we keep it",
    body: "Enquiry records for three years. Subscriber records until you unsubscribe. Client records for seven years where accounting rules require it.",
  },
  {
    heading: "Your rights",
    body: "You may request a copy of your data, ask us to correct it, or ask us to delete it. Write to us and we will respond within thirty days.",
  },
];

function PrivacyPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Legal"
        title="Privacy policy"
        intro="Last updated July 2026. Placeholder policy for demonstration. Have counsel review before publishing."
      />
      <div className="mt-12 max-w-3xl space-y-10">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-serif text-2xl">{s.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
          </section>
        ))}
        <section>
          <h2 className="font-serif text-2xl">Contact</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${BRAND.email}`} className="text-primary underline underline-offset-4">
              {BRAND.email}
            </a>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
