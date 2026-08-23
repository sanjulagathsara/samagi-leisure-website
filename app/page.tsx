import Image from "next/image";
import { HeroScene } from "@/components/motion/HeroScene";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { SampleNotice } from "@/components/ui/SampleNotice";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { experiences, properties, testimonials } from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = properties[0];
  const rest = properties.slice(1);

  return (
    <>
      <HeroScene image={site.heroImage} imageAlt={site.heroImageAlt} />

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <Reveal className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5" data-reveal>
              <p className="text-[0.68rem] tracking-[0.32em] text-gold-deep uppercase">
                01 / The house
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-forest sm:text-5xl">
                Samagi is a Sinhala word for unity. We built a hospitality house around it.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7" data-reveal>
              <p className="text-lg leading-8 text-stone">
                One house, on the Mirissa shore. Southern Riviera Resort is
                Samagi Leisure’s first stay — made for people who want to gather:
                families, wedding parties, friends returning to the island.
              </p>
              <p className="mt-5 text-base leading-7 text-stone">
                The food is Sri Lankan without costume. The spa is Ayurveda, not a
                trend list. The rooms keep the shutters open to the monsoon breeze.
                That is the whole idea.
              </p>
              <Button href="/about" variant="outline" className="mt-8">
                Read our story
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <div data-reveal>
              <SectionHeading
                eyebrow="02 / The house"
                title="Southern Riviera Resort Mirissa."
                description="A beach house on Sri Lanka’s south coast — small enough to feel personal, open enough for a celebration. Room rates below are sample starting prices."
              />
            </div>
            <div className="mt-12 grid gap-8" data-reveal>
              {featured ? <PropertyCard property={featured} featured /> : null}
              <div className="grid gap-8 md:grid-cols-2">
                {rest.map((property) => (
                  <PropertyCard key={property.slug} property={property} />
                ))}
              </div>
            </div>
            <SampleNotice className="mt-8 text-xs text-stone/80" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <Reveal>
            <div data-reveal>
              <SectionHeading
                eyebrow="03 / Slow hours"
                title="Experiences that belong to the island."
                description="Ayurveda, a whale boat at sunrise, hoppers in the kitchen, a walk along the bay. Booked with your stay, never as an afterthought."
              />
            </div>
            <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {experiences.slice(0, 6).map((experience) => (
                <li key={experience.slug} data-reveal>
                  <article className="group h-full">
                    <div className="image-zoom relative aspect-4/3">
                      <Image
                        src={experience.image}
                        alt={experience.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 text-[0.65rem] tracking-[0.24em] text-gold-deep uppercase">
                      {experience.category}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-forest">
                      {experience.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone">
                      {experience.summary}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
            <div className="mt-10" data-reveal>
              <Button href="/experiences" variant="outline">
                All experiences
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <div data-reveal>
              <SectionHeading
                eyebrow="04 / Guests"
                title="What staying together felt like."
                description="Sample reviews written for this demonstration site. Replace with real guest words before launch."
              />
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {testimonials.map((item) => (
                <div key={item.name} data-reveal>
                  <TestimonialCard {...item} />
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CTA
        title="Hold a table, a room, a date."
        description="Tell us who is coming and when you would like to be in Mirissa. Our reservations team — in a live site — would reply within a working day. This enquiry form stores nothing yet."
        secondaryLabel="Plan a wedding"
        secondaryHref="/events"
      />
    </>
  );
}
