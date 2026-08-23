import { properties } from "@/lib/data";
import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Harbour Road",
      addressLocality: "Mirissa",
      postalCode: "81740",
      addressCountry: "LK",
    },
    description: site.description,
    department: properties.map((property) => ({
      "@type": "Hotel",
      name: property.name,
      address: property.address,
      description: property.shortDescription,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
