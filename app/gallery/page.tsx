import type { Metadata } from "next";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNotice } from "@/components/ui/SampleNotice";
import { gallery } from "@/lib/data";
import { unsplash } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photography from Samagi Leisure houses — stays, dining, wellness, events, and Sri Lankan landscape.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Seen, not staged"
        title="A visual walk through the houses."
        description="Sample photography from Unsplash standing in for original Samagi pictures. Filter by stay, table, spa, celebration, or landscape."
        image={unsplash("photo-1520250497591-112f2f40a3f4")}
        imageAlt="Palm-lined resort pool"
        compact
      />
      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <SampleNotice className="mb-10" />
          <GalleryExplorer images={gallery} />
        </Container>
      </section>
    </>
  );
}
