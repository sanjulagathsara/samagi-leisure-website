import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNotice } from "@/components/ui/SampleNotice";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team, values } from "@/lib/data";
import { unsplash } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Samagi Leisure — a Sri Lankan hospitality house built around unity, genuine welcome, and landscape.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A house built around togetherness."
        description="Samagi is a Sinhala word for unity. We took it as a brief: stay close to the island, keep the house personal, and make room for people to gather."
        image={unsplash("photo-1542314831-068cd1dbfeeb")}
        imageAlt="Warm timber hotel lobby at dusk"
      />
      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <Reveal className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5" data-reveal>
              <SectionHeading
                eyebrow="Beginnings"
                title="From a south-coast wish to one house in Mirissa."
              />
            </div>
            <div className="space-y-5 text-base leading-7 text-stone lg:col-span-6 lg:col-start-7" data-reveal>
              <p>
                Samagi Leisure began with a wish for a table that was always
                too small and somehow always enough — cousins arriving without
                notice, wedding weeks spilling onto the lawn, the south coast
                at an unhurried pace.
              </p>
              <p>
                The founder, Anjali Perera, wanted that feeling without turning
                it into a theme. Southern Riviera Resort Mirissa is the first
                house: a beach stay between coconut grove and sea, close to the
                harbour and the bay. Further houses may follow; this is where
                we begin.
              </p>
              <p>
                We are not a large group. The house has a host, a kitchen that
                cooks from the nearest market, and a spa that follows Ayurveda
                rather than a catalogue of trends. That is the scale we intend
                to keep.
              </p>
              <SampleNotice />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <div data-reveal>
              <SectionHeading
                eyebrow="What we hold"
                title="Unity, hospitality, nature."
                description="Three words we return to when a new room, menu, or ceremony is being shaped."
              />
            </div>
            <ul className="mt-12 grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <li key={value.title} className="border border-line bg-ivory px-6 py-8" data-reveal>
                  <p className="text-[0.68rem] tracking-[0.28em] text-gold-deep uppercase">
                    {value.sinhala}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-forest">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone">{value.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <Reveal>
            <div data-reveal>
              <SectionHeading
                eyebrow="The people"
                title="Hosts, kitchen, and care."
                description="Sample team biographies. Replace portraits and names with the real Samagi household."
              />
            </div>
            <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <li key={member.name} data-reveal>
                  <div className="relative aspect-3/4 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-2xl text-forest">{member.name}</h3>
                  <p className="text-[0.68rem] tracking-[0.2em] text-gold-deep uppercase">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-stone">{member.bio}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CTA
        title="Come and sit with us."
        description="Whether you are planning a week, a wedding, or a single night between flights, write to the house that feels right."
        secondaryLabel="See the house"
        secondaryHref="/properties"
      />
    </>
  );
}
