import { site } from "@/content/site";

/**
 * LocalBusiness structured data for Grafton, VT.
 * Rendered once in the root layout.
 */
export function LocalBusinessJsonLd() {
  const { contact } = site;
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: site.legalName,
    description: site.description,
    url: site.url,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressLine,
      addressLocality: contact.city,
      addressRegion: contact.state,
      postalCode: contact.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.geo.lat,
      longitude: contact.geo.lng,
    },
    areaServed: "US",
    slogan: "A tool, not magic — it improves your odds.",
  };

  return (
    <script
      type="application/ld+json"
      // Trusted, static, server-rendered JSON. Safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
