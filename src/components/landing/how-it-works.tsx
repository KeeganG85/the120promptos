import { BuyButton } from "@/components/landing/buy-button";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";
import { howSteps } from "@/lib/copy";

export function HowItWorks() {
  return (
    <Section id="how" raised>
      <Reveal>
        <Eyebrow>How it works</Eyebrow>
        <H2>Four steps. Then you decide.</H2>
      </Reveal>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {howSteps.map((s) => (
          <li
            key={s.n}
            className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]"
          >
            <p className="font-display text-3xl font-semibold text-gold">{s.n}</p>
            <h3 className="mt-4 font-display text-lg font-semibold text-fg">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
      <BuyButton source="how" className="mt-10" size="lg" />
    </Section>
  );
}
