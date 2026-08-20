import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PropertyExplorer } from "@/components/properties/PropertyExplorer";
import { properties } from "@/lib/data";
import { unsplash } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hotels",
  description:
    "Samagi Leisure hotels in Bentota, Ella, and Colombo — beach, hill country, and city stays in Sri Lanka.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="The collection"
        title="Houses by sea, hill, and city."
        description="Filter by coast, tea country, or Colombo. Every rate below is a sample starting price for demonstration."
        image={unsplash("photo-1582719478250-c89cae4dc85b")}
        imageAlt="Luxury resort pool at dusk"
      />
      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <PropertyExplorer properties={properties} />
        </Container>
      </section>
    </>
  );
}
