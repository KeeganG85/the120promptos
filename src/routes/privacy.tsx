import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/landing/legal-layout";
import { product } from "@/lib/product";

export const Route = createFileRoute("/privacy")({ component: Privacy });

function Privacy() {
  return (
    <LegalLayout title="Privacy">
      <p>
        BuzzCraft (“we”) is based in Johannesburg, South Africa. This notice
        explains how we handle personal information collected through The 120
        Prompt OS website and library.
      </p>
      <h2>What we collect</h2>
      <p>
        When you request sample prompts or register for Prompt OS we collect
        your first name, email address, and the consent you gave. We do not
        need your identity number, payment card, or client lists to deliver
        this digital product.
      </p>
      <h2>Why we collect it</h2>
      <ul>
        <li>To deliver the product or sample you asked for.</li>
        <li>
          To email you about Prompt OS only if you separately opted in to
          marketing.
        </li>
        <li>To reply when you write to {product.email}.</li>
      </ul>
      <h2>Where it lives</h2>
      <p>
        On this preview, registration is stored in your own browser so you can
        reopen the library. When BuzzCraft runs production checkout, records
        will sit with our processors under contracts that match this notice.
      </p>
      <h2>Your rights</h2>
      <p>
        You may ask what we hold, correct it, or request deletion, subject to
        POPIA. Write to {product.email}. You may also lodge a complaint with
        the Information Regulator of South Africa.
      </p>
      <h2>Contact</h2>
      <p>
        Responsible party: {product.brand}, {product.location}. Email{" "}
        {product.email}. Website {product.url}.
      </p>
    </LegalLayout>
  );
}
