import { BuyButton } from "@/components/landing/buy-button";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";
import { saPoints } from "@/lib/copy";

export function SouthAfrica() {
  return (
    <Section raised>
      <Reveal>
        <Eyebrow>Designed here</Eyebrow>
        <H2>Not another American prompt pack with the currency changed</H2>
        <p className="mt-5 max-w-2xl text-muted md:text-lg">
          Prompt OS has been rewritten around the realities of South African
          owner-run businesses — a dental practice in Sandton, an HVAC company
          in Pretoria East, an accountant in Johannesburg, a contractor whose
          enquiries arrive on WhatsApp.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {saPoints.map((p) => (
          <article
            key={p.title}
            className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <h3 className="font-display text-lg font-semibold text-fg">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm text-subtle">
        Claims stay responsible. Prompt OS does not promise rankings, revenue
        or guaranteed AI citations.
      </p>
      <BuyButton source="sa" className="mt-8" size="lg" />
    </Section>
  );
}
