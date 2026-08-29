import { useMemo, useState } from "react";
import { Lock } from "lucide-react";
import { BuyButton } from "@/components/landing/buy-button";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";
import { buildPrompt, getFeatured, type PromptDef } from "@/lib/prompts";
import { cn } from "@/lib/utils";

export function Preview() {
  const featured = useMemo(() => getFeatured(), []);
  const [active, setActive] = useState<PromptDef>(featured[0]!);
  const full = buildPrompt(active);
  const visible = full.slice(0, Math.min(720, Math.floor(full.length * 0.48)));

  return (
    <Section id="preview">
      <Reveal>
        <Eyebrow>Interactive preview</Eyebrow>
        <H2>Open the Prompt OS. Inspect a prompt. Then unlock the rest.</H2>
      </Reveal>

      <div className="mt-12 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] lg:grid lg:grid-cols-[minmax(0,16rem)_1fr]">
        <aside className="border-b border-border lg:border-r lg:border-b-0">
          <p className="px-4 py-3 font-mono text-[0.6875rem] tracking-[0.14em] text-subtle uppercase">
            Prompt OS · Preview
          </p>
          <ul className="max-h-64 overflow-auto lg:max-h-[32rem]">
            {featured.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className={cn(
                    "w-full px-4 py-3 text-left text-sm transition-colors",
                    active.id === p.id
                      ? "bg-gold/10 text-gold"
                      : "text-muted hover:bg-fg/4 hover:text-fg",
                  )}
                >
                  {p.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-5 md:p-8">
          <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Purpose
          </p>
          <p className="mt-2 text-fg">{active.purpose}</p>
          <p className="mt-6 text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
            The prompt
          </p>
          <div className="prompt-lock relative mt-3 max-h-64 overflow-hidden rounded-md bg-bg p-4">
            <pre className="font-mono text-[0.75rem] leading-relaxed whitespace-pre-wrap text-muted">
              {visible}
              <span className="caret" />
            </pre>
          </div>
          <p className="mt-6 text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Expected output
          </p>
          <p className="mt-2 text-sm text-muted">{active.expected}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Lock className="size-4 text-gold" />
            <p className="text-sm text-muted">
              Full prompt text unlocks with Prompt OS.
            </p>
          </div>
          <BuyButton source="preview" className="mt-6" size="lg">
            Unlock all 120 prompts
          </BuyButton>
        </div>
      </div>
    </Section>
  );
}
