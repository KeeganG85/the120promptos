import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BuyButton } from "@/components/landing/buy-button";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";
import { faqs } from "@/lib/copy";

export function Faq() {
  return (
    <Section id="faq">
      <Reveal>
        <Eyebrow>FAQ</Eyebrow>
        <H2>Straight answers.</H2>
      </Reveal>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`q-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <BuyButton source="faq" className="mt-10" size="lg" />
    </Section>
  );
}
