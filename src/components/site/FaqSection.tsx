import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection({
  faqs,
  idPrefix = "faq",
}: {
  faqs: { q: string; a: string }[];
  idPrefix?: string;
}) {
  if (!faqs.length) return null;
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((item, idx) => (
        <AccordionItem key={item.q} value={`${idPrefix}-${idx}`}>
          <AccordionTrigger className="text-left font-sans text-base font-medium">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
