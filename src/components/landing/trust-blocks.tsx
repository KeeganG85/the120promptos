import { BuyButton } from "@/components/landing/buy-button";
import { Eyebrow, H2, Reveal, Section } from "@/components/landing/reveal";
import { compliance, forYou, notForYou } from "@/lib/copy";
import { product } from "@/lib/product";

export function Testimonials() {
  const slots = [
    { label: "Before", hint: "The blank-page problem they had." },
    { label: "Use", hint: "Which prompts or category they actually ran." },
    { label: "After", hint: "An operational result they can stand behind." },
  ];
  return (
    <Section raised>
      <Reveal>
        <Eyebrow>Proof, when it is real</Eyebrow>
        <H2>Customer stories will live here — not invented ones.</H2>
        <p className="mt-5 max-w-2xl text-muted">
          We do not fabricate testimonials or statistics. When owners send
          Before / Use / After notes we can verify, they will appear in this
          grid.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {slots.map((s) => (
          <article
            key={s.label}
            className="rounded-xl border border-dashed border-border bg-surface/50 p-5"
          >
            <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
              Placeholder · {s.label}
            </p>
            <p className="mt-4 text-sm text-muted">{s.hint}</p>
            <p className="mt-6 text-xs text-subtle">Not a real review.</p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">
        Used Prompt OS? Write to{" "}
        <a className="text-gold hover:underline" href={`mailto:${product.email}`}>
          {product.email}
        </a>{" "}
        with Before, Use, After. We will only publish with your permission.
      </p>
    </Section>
  );
}

export function WhoFor() {
  return (
    <Section id="who">
      <Reveal>
        <Eyebrow>Fit</Eyebrow>
        <H2>Who this is for — and who should walk away.</H2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl bg-surface p-6 shadow-[var(--shadow-gold)]">
          <h3 className="font-display text-xl font-semibold text-gold">
            This is for you if
          </h3>
          <ul className="mt-5 space-y-3">
            {forYou.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-fg">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
          <h3 className="font-display text-xl font-semibold text-muted">
            Probably not for you if
          </h3>
          <ul className="mt-5 space-y-3">
            {notForYou.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-subtle" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <BuyButton source="who" className="mt-10" size="lg" />
    </Section>
  );
}

export function Compliance() {
  return (
    <Section raised>
      <Reveal>
        <Eyebrow>Responsible AI</Eyebrow>
        <H2>AI drafts. You own the final decision.</H2>
      </Reveal>
      <ul className="mt-10 grid gap-3 md:grid-cols-2">
        {compliance.map((c) => (
          <li
            key={c}
            className="rounded-xl bg-surface px-5 py-4 text-sm leading-relaxed text-muted shadow-[var(--shadow-border)]"
          >
            {c}
          </li>
        ))}
      </ul>
    </Section>
  );
}
