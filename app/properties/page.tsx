import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PropertyExplorer } from "@/components/properties/PropertyExplorer";
import { properties } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hotels",
  description:
    "Southern Riviera Resort Mirissa — Samagi Leisure’s beach hotel on Sri Lanka’s south coast.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="The house"
        title="Southern Riviera Resort Mirissa."
        description="A beach resort on Sri Lanka’s south coast. Room types and rates below are sample figures for this marketing site."
        image={site.heroImage}
        imageAlt={site.heroImageAlt}
      />
      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <PropertyExplorer properties={properties} />
        </Container>
      </section>
    </>
  );
}
