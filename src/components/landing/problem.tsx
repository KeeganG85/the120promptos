import { ArrowRight } from "lucide-react";
import { BuyButton } from "@/components/landing/buy-button";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";

export function Problem() {
  return (
    <Section raised>
      <Reveal>
        <Eyebrow>The blank-page problem</Eyebrow>
        <H2>AI isn't the problem. The way most businesses use it is.</H2>
        <p className="mt-5 max-w-2xl text-muted md:text-lg">
          Most owners open ChatGPT and type something like “Write me a Facebook
          post”, “Help me market my business”, or “Give me some business ideas”.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Reveal>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <p className="font-mono text-[0.6875rem] font-semibold tracking-[0.18em] text-subtle uppercase">
              Generic input
            </p>
            <pre className="mt-4 overflow-x-auto rounded-md bg-bg px-3 py-3 font-mono text-sm whitespace-pre-wrap text-muted">
              “Create a marketing strategy for my business.”
            </pre>
            <div className="mt-6 flex items-center gap-2 text-sm text-subtle">
              <ArrowRight className="size-4" />
              Generic AI output
            </div>
            <p className="mt-3 text-sm text-muted">
              A weightless plan that could belong to anyone, anywhere. You
              rewrite the prompt. You still don't trust the draft.
            </p>
          </div>
        </Reveal>
        <p className="hidden text-center font-display text-sm tracking-[0.2em] text-gold uppercase md:block">
          vs
        </p>
        <Reveal delay={80}>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-gold)]">
            <p className="font-mono text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
              Prompt OS
            </p>
            <ol className="mt-4 space-y-2 font-mono text-sm text-fg">
              <li className="flex gap-2">
                <span className="text-gold">01</span> Structured business context
              </li>
              <li className="flex gap-2">
                <span className="text-gold">02</span> Purpose-built prompt
              </li>
              <li className="flex gap-2">
                <span className="text-gold">03</span> Better reasoning
              </li>
              <li className="flex gap-2">
                <span className="text-gold">04</span> More usable output
              </li>
              <li className="flex gap-2">
                <span className="text-gold">05</span> Business action
              </li>
            </ol>
            <p className="mt-5 text-sm text-muted">
              The quality of AI output is heavily influenced by the quality of
              the instruction. Prompt OS removes the blank page.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <BuyButton source="problem" className="mt-10" size="lg">
          Upgrade the way I use AI
        </BuyButton>
      </Reveal>
    </Section>
  );
}
