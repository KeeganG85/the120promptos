import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/landing/legal-layout";
import { product } from "@/lib/product";

export const Route = createFileRoute("/terms")({ component: Terms });

function Terms() {
  return (
    <LegalLayout title="Terms">
      <p>
        These terms cover access to The 120 Prompt OS as a digital library
        published by {product.brand}.
      </p>
      <h2>Licence</h2>
      <p>
        You receive a licence to use the prompts inside your own business —
        including with a small internal team. You may adapt bracketed fields.
        You may not resell, republish, or package the library as your own
        product.
      </p>
      <h2>No outcome guarantees</h2>
      <p>
        Prompts improve structure and drafting. They do not guarantee Google
        rankings, AI citations, revenue, or professional results in regulated
        work.
      </p>
      <h2>Human review</h2>
      <p>
        You must review AI output before publishing or sending it. Health,
        legal, financial and similar content needs a qualified human. You own
        that decision.
      </p>
      <h2>Access</h2>
      <p>
        On this release, access is granted after registration. If a paid
        checkout is later enabled, the price shown at purchase is the price you
        pay. We do not use fake countdown timers.
      </p>
      <h2>Contact</h2>
      <p>
        {product.brand} · {product.location} · {product.email}
      </p>
    </LegalLayout>
  );
}
