import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./common";
import { faqs } from "./data";

export function FAQ() {
  return (
    <section id="faq" className="surface-ivory py-20 sm:py-28">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Good to know" title="Frequently Asked Questions" />
          <p className="mt-6 text-ink-soft">A few helpful details before the creativity begins.</p>
        </div>
        <Accordion type="single" collapsible className="border-t border-border">
          {faqs.map(([question, answer], i) => (
            <AccordionItem key={question} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="py-5 font-display text-base font-bold hover:no-underline sm:text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-ink-soft">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
