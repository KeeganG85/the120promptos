import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { BuyButton } from "@/components/landing/buy-button";
import { Button } from "@/components/ui/button";
import { trustChips } from "@/lib/copy";

const story = [
  "Ask better",
  "Think better",
  "Market better",
  "Operate better",
] as const;

function FloatingCard({
  className,
  eyebrow,
  title,
  body,
}: {
  className?: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className={`absolute hidden rounded-lg bg-surface/90 p-3 shadow-[var(--shadow-border),var(--shadow-lift)] backdrop-blur-sm lg:block ${className ?? ""}`}
    >
      <p className="text-[0.625rem] font-semibold tracking-[0.16em] text-gold uppercase">
        {eyebrow}
      </p>
      <p className="mt-1 font-display text-sm font-semibold text-fg">{title}</p>
      <p className="mt-1 max-w-[14rem] text-[0.7rem] leading-snug text-muted">
        {body}
      </p>
    </div>
  );
}

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (reduced || !desktop) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1400px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
    };
    const reset = () => {
      el.style.transform = "perspective(1400px) rotateY(-8deg) rotateX(3deg)";
    };
    reset();
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section className="relative overflow-hidden px-5 pt-24 pb-10 md:px-8 md:pt-32 md:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 78% 18%, color-mix(in oklab, var(--color-gold) 16%, transparent), transparent 62%)",
        }}
      />
      <img
        src="/brand/mark.png"
        alt=""
        aria-hidden
        width={480}
        height={480}
        className="pointer-events-none absolute -top-16 -right-16 size-[22rem] opacity-[0.08] select-none md:size-[32rem]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <p className="font-display text-[0.6875rem] font-semibold tracking-[0.28em] text-gold uppercase">
            BuzzCraft presents
          </p>
          <h1 className="mt-4 font-display text-[1.65rem] leading-[1.1] font-semibold tracking-[-0.035em] text-fg sm:text-4xl lg:mt-5 lg:text-[3.05rem] lg:leading-[1.05]">
            Stop asking AI random questions. Start running your business with
            it.
          </h1>
          <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted md:text-lg">
            The 120 Prompt OS gives South African business owners practical,
            ready-to-use prompts for marketing, SEO, sales, AI visibility,
            automation, decision-making and operations — without needing to
            become an AI expert.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <BuyButton source="hero" size="xl" className="w-full sm:w-auto">
              Get the 120 Prompt OS
            </BuyButton>
            <Button variant="secondary" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#inside">
                See what's inside
                <ArrowDown />
              </a>
            </Button>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {trustChips.map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-7">
          <div
            ref={stageRef}
            className="parallax-book relative mx-auto max-w-lg transition-transform duration-200 ease-out lg:max-w-none"
          >
            <img
              src="/brand/hero-lockup.jpg"
              alt="BuzzCraft bee mascot standing beside the 120 Prompt OS hardcover, gold B glowing behind them"
              width={1728}
              height={1152}
              fetchPriority="high"
              className="relative z-10 w-full rounded-xl"
            />
            <FloatingCard
              className="-left-2 top-6 z-20 w-44"
              eyebrow="Local search"
              title="HVAC near me"
              body="Pretoria East · Google Business Profile · WhatsApp enquiry"
            />
            <FloatingCard
              className="-right-2 bottom-16 z-20 w-52"
              eyebrow="Output"
              title="Strategy · 4 priorities"
              body="Actions and owner-visible metrics. No invented rankings."
            />
          </div>
        </div>
      </div>

      <ol className="relative mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-border pt-8 sm:justify-between sm:gap-0">
        {story.map((label, i) => (
          <li
            key={label}
            className="flex items-center gap-3 font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-muted uppercase sm:text-xs"
          >
            {i > 0 ? (
              <ArrowRight
                aria-hidden
                className="hidden size-3.5 text-gold sm:block"
              />
            ) : null}
            <span>
              <span className="text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span className="ml-2">{label}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
