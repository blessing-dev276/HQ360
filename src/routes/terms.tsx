import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { BRAND } from "@/data/site";

const title = "Terms of Service | HQ360";
const description =
  "The terms that apply to engagements with HQ360, covering scope, payment, cancellation, ownership of work and limits of liability.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

const sections = [
  {
    heading: "Scope of work",
    body: "Every engagement begins with a written scope listing deliverables, dates and the named team members responsible. Work outside that scope is quoted separately before it begins.",
  },
  {
    heading: "Fees and payment",
    body: "Fees are stated in the scope and invoiced monthly in advance unless otherwise agreed. Advertising budget is paid by you directly to the platform and is never handled by us.",
  },
  {
    heading: "Cancellation",
    body: "Either party may end an engagement with thirty days written notice. Work already delivered is payable. Any unused portion of a prepaid month is refunded.",
  },
  {
    heading: "Ownership",
    body: "On payment, you own every asset we create for you, including copy, designs, research and reports. We retain the right to reference the work in our portfolio unless you ask us not to.",
  },
  {
    heading: "Outcomes",
    body: "We guarantee process, not market outcomes. Our full position on this is published on the guarantee page and forms part of these terms.",
  },
  {
    heading: "Liability",
    body: "Our liability under any engagement is limited to the fees paid in the three months preceding the claim. We are not liable for indirect or consequential loss.",
  },
  {
    heading: "Confidentiality",
    body: "Unpublished manuscripts, sales data and business plans shared with us are treated as confidential and are not disclosed to third parties without written permission.",
  },
];

function TermsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Legal"
        title="Terms of service"
        intro="Last updated July 2026. Placeholder terms for demonstration. Have counsel review before publishing."
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
            Questions about these terms can be sent to{" "}
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
