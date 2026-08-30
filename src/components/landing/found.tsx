import { useEffect, useRef, useState } from "react";
import { BuyButton } from "@/components/landing/buy-button";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";
import { foundStages } from "@/lib/copy";
import { cn } from "@/lib/utils";

export function Found() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reduced) {
          setOn(31);
          io.disconnect();
          return;
        }
        foundStages.forEach((_, i) => {
          window.setTimeout(() => setOn((s) => s | (1 << i)), 220 * i);
        });
        io.disconnect();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section id="found">
      <Reveal>
        <Eyebrow>The FOUND framework</Eyebrow>
        <H2>Built around how modern businesses actually grow</H2>
        <p className="mt-5 max-w-2xl text-muted md:text-lg">
          Five connected stages — not a pile of unrelated features. Ask better.
          Think better. Market better. Operate better.
        </p>
      </Reveal>

      <div ref={ref} className="relative mt-12">
        <div
          aria-hidden
          className="found-path absolute top-8 right-8 left-8 hidden h-px md:block"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {foundStages.map((s, i) => {
            const lit = (on & (1 << i)) !== 0;
            return (
              <article
                key={s.letter}
                className={cn(
                  "relative overflow-hidden rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-300",
                  lit && "found-on shadow-[var(--shadow-gold)]",
                )}
              >
                <p
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-1 -bottom-4 font-display text-7xl font-semibold transition-colors",
                    lit ? "text-gold/15" : "text-fg/5",
                  )}
                >
                  {s.letter}
                </p>
                <p
                  className={cn(
                    "relative font-display text-4xl font-semibold tracking-tight transition-colors",
                    lit ? "text-gold" : "text-subtle",
                  )}
                >
                  {s.letter}
                </p>
                <p className="relative mt-3 font-display text-lg font-semibold text-fg">
                  {s.name}
                </p>
                <p className="relative mt-1 text-[0.6875rem] font-semibold tracking-[0.16em] text-gold uppercase">
                  {s.tag}
                </p>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {s.title}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
        <img
          src="/brand/ebook-stand.jpg"
          alt="BuzzCraft bee mascot presenting The 120 Prompt OS hardcover"
          width={1122}
          height={1402}
          loading="lazy"
          className="mx-auto max-h-[28rem] w-full rounded-xl object-cover object-[center_20%] shadow-[var(--shadow-gold)] lg:max-h-[36rem]"
        />
        <div>
          <p className="font-display text-2xl font-semibold text-fg md:text-3xl">
            We build growth systems, not marketing noise.
          </p>
          <p className="mt-4 text-muted">
            Prompt OS is the operator layer: findable, on the map, understood
            by AI, nudged to act, done by systems. That is the work — not
            another week of random posts.
          </p>
          <BuyButton source="found" className="mt-8" size="lg" />
        </div>
      </div>
    </Section>
  );
}
