import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Copy, Lock, Search } from "lucide-react";
import { CheckoutDialog } from "@/components/landing/checkout-dialog";
import { BuyButton } from "@/components/landing/buy-button";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCheckout } from "@/lib/checkout-store";
import { categoriesMeta } from "@/lib/copy";
import {
  buildPrompt,
  prompts,
  promptsByCategory,
  type PromptCategoryId,
  type PromptDef,
} from "@/lib/prompts";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/library")({ component: LibraryPage });

function LibraryPage() {
  const unlocked = useCheckout((s) => s.unlocked);
  const hydrate = useCheckout((s) => s.hydrate);
  const ready = useCheckout((s) => s.ready);
  const profile = useCheckout((s) => s.profile);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<PromptCategoryId | "all">("all");
  const [active, setActive] = useState<PromptDef | null>(null);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const list = useMemo(() => {
    const base = cat === "all" ? prompts : promptsByCategory(cat);
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.purpose.toLowerCase().includes(q) ||
        p.task.toLowerCase().includes(q),
    );
  }, [cat, query]);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pt-28 pb-24 md:px-8">
        <p className="font-display text-[0.6875rem] font-semibold tracking-[0.22em] text-gold uppercase">
          Prompt library
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
          The 120 Prompt OS
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          {ready && unlocked
            ? `Welcome${profile?.firstName ? `, ${profile.firstName}` : ""}. Copy any prompt, replace the brackets, paste into ChatGPT, Claude or Gemini.`
            : "Register to unlock the full prompt bodies. Titles and purposes stay visible so you can see the operating system."}
        </p>

        {!unlocked ? (
          <div className="mt-8 rounded-xl bg-surface p-6 shadow-[var(--shadow-gold)]">
            <div className="flex flex-wrap items-center gap-4">
              <Lock className="size-5 text-gold" />
              <p className="flex-1 text-sm text-muted">
                Instant access opens every prompt with purpose, the full
                instruction, and expected output.
              </p>
              <BuyButton source="library-gate" size="lg">
                Unlock Prompt OS
              </BuyButton>
            </div>
          </div>
        ) : null}

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
            <Input
              className="pl-10"
              placeholder="Search prompts"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search prompts"
            />
          </div>
          <p className="text-sm text-subtle">{list.length} prompts</p>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          <CatChip
            label="All"
            on={cat === "all"}
            onClick={() => setCat("all")}
          />
          {categoriesMeta.map((c) => (
            <CatChip
              key={c.id}
              label={c.name}
              on={cat === c.id}
              onClick={() => setCat(c.id as PromptCategoryId)}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <ul className="grid max-h-[70vh] gap-2 self-start overflow-auto pr-1">
            {list.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className={cn(
                    "w-full rounded-lg px-4 py-3 text-left shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150",
                    active?.id === p.id
                      ? "bg-gold/10 shadow-[var(--shadow-gold)]"
                      : "bg-surface hover:shadow-[var(--shadow-border-hover)]",
                  )}
                >
                  <p className="font-display text-sm font-semibold text-fg">
                    {p.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-muted">
                    {p.purpose}
                  </p>
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <PromptPane prompt={active} unlocked={unlocked} />
          </div>
        </div>
      </main>
      <SiteFooter />
      <CheckoutDialog />
    </>
  );
}

function CatChip({
  label,
  on,
  onClick,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-colors",
        on ? "bg-gold text-ink" : "bg-surface text-muted hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}

function PromptPane({
  prompt,
  unlocked,
}: {
  prompt: PromptDef | null;
  unlocked: boolean;
}) {
  if (!prompt) {
    return (
      <div className="rounded-xl bg-surface p-8 text-sm text-muted shadow-[var(--shadow-border)]">
        Select a prompt to inspect purpose, the instruction, and expected
        output.
      </div>
    );
  }
  const body = buildPrompt(prompt);
  return (
    <article className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-8">
      <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-gold uppercase">
        {prompt.role}
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-fg">
        {prompt.title}
      </h2>
      <h3 className="mt-6 text-xs font-semibold tracking-[0.16em] text-gold uppercase">
        Purpose
      </h3>
      <p className="mt-2 text-sm text-muted">{prompt.purpose}</p>
      <h3 className="mt-6 text-xs font-semibold tracking-[0.16em] text-gold uppercase">
        The prompt
      </h3>
      {unlocked ? (
        <>
          <pre className="mt-3 max-h-[28rem] overflow-auto rounded-md bg-bg p-4 font-mono text-[0.75rem] leading-relaxed whitespace-pre-wrap text-muted">
            {body}
          </pre>
          <Button
            className="mt-4"
            onClick={() => {
              void navigator.clipboard.writeText(body);
              toast.success("Copied. Paste into your AI assistant.");
            }}
          >
            <Copy />
            Copy prompt
          </Button>
        </>
      ) : (
        <div className="prompt-lock relative mt-3 max-h-56 overflow-hidden rounded-md bg-bg p-4">
          <pre className="font-mono text-[0.75rem] leading-relaxed whitespace-pre-wrap text-muted">
            {body.slice(0, 420)}
          </pre>
        </div>
      )}
      <h3 className="mt-6 text-xs font-semibold tracking-[0.16em] text-gold uppercase">
        Expected output
      </h3>
      <p className="mt-2 text-sm text-muted">{prompt.expected}</p>
    </article>
  );
}
