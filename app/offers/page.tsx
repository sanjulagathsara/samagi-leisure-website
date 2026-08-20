import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNotice } from "@/components/ui/SampleNotice";
import { offers } from "@/lib/data";
import { unsplash } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Offers",
  description:
    "Seasonal stays at Samagi Leisure — monsoon retreats, wedding moons, family tables, and weekday pauses in Colombo.",
};

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="This season"
        title="Quiet packages, clearly named."
        description="Sample seasonal offers. Swap dates, inclusions, and photography in lib/data.ts when you go live."
        image={unsplash("photo-1507525428034-b723cf961d3e")}
        imageAlt="Tropical shoreline at golden hour"
        compact
      />
      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <SampleNotice className="mb-10" />
          <div className="grid gap-12">
            {offers.map((offer) => (
              <article
                key={offer.slug}
                className="grid items-center gap-8 border-b border-line pb-12 lg:grid-cols-12"
              >
                <div className="image-zoom relative aspect-4/3 lg:col-span-5">
                  <Image
                    src={offer.image}
                    alt={offer.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="text-[0.68rem] tracking-[0.24em] text-gold-deep uppercase">
                    {offer.season}
                  </p>
                  <h2 className="mt-2 font-serif text-4xl text-forest">{offer.name}</h2>
                  <p className="mt-4 text-base leading-7 text-stone">{offer.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {offer.perks.map((perk) => (
                      <li
                        key={perk}
                        className="border border-line px-3 py-1 text-[0.7rem] tracking-wide text-stone"
                      >
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-stone">Valid through {offer.validThrough}</p>
                  <Button href="/contact" variant="outline" className="mt-6">
                    Enquire about this offer
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTA
        title="Ask us to hold the dates."
        description="Offers are subject to availability and are shown here as samples. Mention the package name in your enquiry."
      />
    </>
  );
}
