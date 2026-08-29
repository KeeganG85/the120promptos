import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BuyButton } from "@/components/landing/buy-button";
import { CountUp } from "@/components/landing/count-up";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";
import { categoriesMeta } from "@/lib/copy";
import { prompts, promptsByCategory, type PromptCategoryId } from "@/lib/prompts";
import { cn } from "@/lib/utils";

export function Inside() {
  const [open, setOpen] = useState<PromptCategoryId | null>("foundations");

  return (
    <Section id="inside" raised>
      <Reveal>
        <Eyebrow>What's inside</Eyebrow>
        <H2>
          <CountUp to={prompts.length} className="tabular-nums text-gold" />{" "}
          prompts across the work that actually moves a business forward
        </H2>
        <p className="mt-5 max-w-2xl text-muted md:text-lg">
          Nine categories. Expand a card to inspect representative prompts —
          then unlock the full library.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {categoriesMeta.map((c, i) => {
          const id = c.id as PromptCategoryId;
          const isOpen = open === id;
          const list = promptsByCategory(id);
          return (
            <article
              key={c.id}
              className={cn(
                "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200",
                isOpen
                  ? "shadow-[var(--shadow-gold)] md:col-span-2 lg:col-span-3"
                  : "hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]",
              )}
            >
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 text-left"
                onClick={() => setOpen(isOpen ? null : id)}
                aria-expanded={isOpen}
              >
                <div>
                  <p className="font-mono text-xs text-gold">
                    {String(i + 1).padStart(2, "0")} · {list.length} prompts
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-fg">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{c.blurb}</p>
                </div>
                <ChevronDown
                  className={cn(
                    "mt-1 size-5 shrink-0 text-muted transition-transform duration-200",
                    isOpen && "rotate-180 text-gold",
                  )}
                />
              </button>
              {isOpen ? (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((p) => (
                    <li
                      key={p.id}
                      className="rounded-md bg-bg px-3 py-2.5 text-sm text-fg shadow-[var(--shadow-border)]"
                    >
                      {p.title}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        })}
      </div>

      <BuyButton source="inside" className="mt-10" size="lg" />
    </Section>
  );
}
