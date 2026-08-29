import { BuyButton } from "@/components/landing/buy-button";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";
import { genericPrompt, sampleOutput, structuredPrompt } from "@/lib/copy";

export function Demonstration() {
  return (
    <Section id="demo">
      <Reveal>
        <Eyebrow>Show, don't just tell</Eyebrow>
        <H2>Here's what one prompt can do</H2>
        <p className="mt-5 max-w-2xl text-muted md:text-lg">
          Same job. Two instructions. Only one of them knows it is a dental
          practice in Sandton that lives and dies on WhatsApp.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-subtle uppercase">
            Left · Generic
          </p>
          <pre className="mt-4 overflow-x-auto font-mono text-sm whitespace-pre-wrap text-muted">
            {genericPrompt}
          </pre>
        </div>
        <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-gold)]">
          <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Right · Prompt OS
          </p>
          <pre className="mt-4 max-h-72 overflow-auto font-mono text-[0.75rem] leading-relaxed whitespace-pre-wrap text-fg">
            {structuredPrompt}
          </pre>
        </div>
      </div>

      <Reveal>
        <div className="mt-6 rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] md:p-8">
          <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Example output
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-fg">
            {sampleOutput.title}
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {sampleOutput.blocks.map((b) => (
              <div key={b.h}>
                <p className="font-display text-sm font-semibold text-gold">
                  {b.h}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.p}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-subtle">
            Illustrative draft only. Replace every bracket with verified facts.
            No rankings or revenue are promised.
          </p>
        </div>
      </Reveal>

      <BuyButton source="demo" className="mt-10" size="lg" />
    </Section>
  );
}
