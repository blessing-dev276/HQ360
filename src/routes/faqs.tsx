import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrimaryCta, Section, SectionHeading } from "@/components/site/Primitives";
import { FAQ_GROUPS } from "@/data/site";

const title = "Frequently Asked Questions | House of Synergy";
const description =
  "Answers on who we work with, how long results take, what we charge, how we report and where our ethical lines sit on reviews and bestseller claims.";

export const Route = createFileRoute("/faqs")({
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
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="FAQs"
          title="Everything people ask before they sign."
          intro="If your question is not here, ask it on the call. We answer plainly, including when the answer is no."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {FAQ_GROUPS.map((group) => (
            <div key={group.group}>
              <h2 className="font-serif text-2xl">{group.group}</h2>
              <Accordion type="single" collapsible className="mt-4">
                {group.items.map((item, idx) => (
                  <AccordionItem key={item.q} value={`${group.group}-${idx}`}>
                    <AccordionTrigger className="text-left font-sans text-base">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-2xl font-serif text-3xl">Still have a question?</h2>
          <PrimaryCta to="/contact">Book a Free Strategy Call</PrimaryCta>
        </div>
      </Section>
    </>
  );
}
