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
      streetAddress: "Horton Place, Cinnamon Gardens",
      addressLocality: "Colombo",
      postalCode: "00700",
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
