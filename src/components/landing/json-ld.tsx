import { faqs } from "@/lib/copy";
import { product } from "@/lib/product";

export function JsonLd() {
  const offer = product.priceLabel
    ? {
        "@type": "Offer",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
      }
    : {
        "@type": "Offer",
        price: "0",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
      };

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: product.brand,
      url: product.url,
      email: product.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johannesburg",
        addressCountry: "ZA",
      },
      slogan: product.tagline,
      logo: `${product.url}/brand/mark.png`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: `${product.url}/brand/ebook-cover.jpg`,
      brand: { "@type": "Brand", name: product.brand },
      url: product.url,
      offers: offer,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: product.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: product.description,
      url: product.url,
      publisher: { "@type": "Organization", name: product.brand },
      offers: offer,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
