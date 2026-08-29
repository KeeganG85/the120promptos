import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/landing/legal-layout";
import { product } from "@/lib/product";

export const Route = createFileRoute("/popia")({ component: Popia });

function Popia() {
  return (
    <LegalLayout title="POPIA">
      <p>
        BuzzCraft treats the Protection of Personal Information Act 4 of 2013
        as the default for how this site should behave — not as a footer
        afterthought.
      </p>
      <h2>Lawful processing</h2>
      <p>
        We process your name and email to perform the request you made (sample
        prompts or Prompt OS access). Marketing email is a separate, optional
        consent. Boxes are never pre-ticked.
      </p>
      <h2>What we ask you not to paste into AI</h2>
      <p>
        Prompt OS is a drafting tool. Do not paste special personal information,
        identity numbers, full medical files, or other people’s data into an AI
        assistant unless you have a lawful basis and have reviewed that
        assistant’s own terms. The prompts remind you of this.
      </p>
      <h2>Operator vs responsible party</h2>
      <p>
        You remain responsible for how you use AI outputs with your customers.
        BuzzCraft is responsible for the information you give us to receive the
        product.
      </p>
      <h2>Information officer</h2>
      <p>
        Enquiries: {product.email}. We will point you to our Information Officer
        details as the commercial deployment is finalised.
      </p>
      <p>
        This page is an accessible summary, not legal advice. For a formal
        assessment, speak to a practitioner who knows your facts.
      </p>
    </LegalLayout>
  );
}
