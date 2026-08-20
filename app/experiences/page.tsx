import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNotice } from "@/components/ui/SampleNotice";
import { experiences, getPropertyName } from "@/lib/data";
import { unsplash } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Spa, dining, tours, wellness, and activities at Samagi Leisure houses in Bentota, Ella, and Colombo.",
};

const categories = ["spa", "dining", "tours", "wellness", "activities"] as const;

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Slow hours"
        title="Spa, table, walk, water."
        description="Experiences are kept close to each house — Ayurveda beside the river, tea walks above Ella, hoppers on a Colombo rooftop."
        image={unsplash("photo-1544161515-4ab6ce6db874")}
        imageAlt="Spa treatment room prepared with warm light"
      />
      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <SampleNotice className="mb-10" />
          {categories.map((category) => {
            const items = experiences.filter((item) => item.category === category);
            if (!items.length) return null;
            return (
              <div key={category} className="mb-20 last:mb-0">
                <p className="text-[0.68rem] tracking-[0.32em] text-gold-deep uppercase">
                  {category}
                </p>
                <div className="mt-8 grid gap-12">
                  {items.map((experience) => (
                    <article
                      key={experience.slug}
                      className="grid items-center gap-8 border-b border-line pb-12 lg:grid-cols-12"
                    >
                      <div className="image-zoom relative aspect-4/3 lg:col-span-5">
                        <Image
                          src={experience.image}
                          alt={experience.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="lg:col-span-6 lg:col-start-7">
                        <h2 className="font-serif text-4xl text-forest">
                          {experience.name}
                        </h2>
                        <p className="mt-4 text-base leading-7 text-stone">
                          {experience.description}
                        </p>
                        <p className="mt-5 text-[0.68rem] tracking-[0.18em] text-gold-deep uppercase">
                          {experience.duration}
                        </p>
                        <p className="mt-3 text-sm text-stone">
                          Offered at{" "}
                          {experience.availableAt.map(getPropertyName).join(", ")}.
                        </p>
                        <Button href="/contact" variant="outline" className="mt-6">
                          Add to a stay
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>
      <CTA
        title="Fold an experience into your dates."
        description="Mention spa hours, a boat, or a kitchen morning when you enquire. We hold them with the room, not as a separate shopping list."
      />
    </>
  );
}
