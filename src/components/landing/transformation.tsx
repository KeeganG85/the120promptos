import { BuyButton } from "@/components/landing/buy-button";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";
import { beforeAfter } from "@/lib/copy";

export function Transformation() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>The shift</Eyebrow>
        <H2>
          From “What should I ask AI?” to “Which problem am I solving next?”
        </H2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
          <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-subtle uppercase">
            Before Prompt OS
          </p>
          <ul className="mt-5 space-y-3">
            {beforeAfter.before.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-subtle" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-gold)]">
          <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
            After Prompt OS
          </p>
          <ul className="mt-5 space-y-3">
            {beforeAfter.after.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-fg">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-sm text-subtle">
        No guaranteed financial outcomes. Better structure, faster drafts,
        clearer decisions — if you do the work.
      </p>
      <BuyButton source="transform" className="mt-8" size="lg" />
    </Section>
  );
}
