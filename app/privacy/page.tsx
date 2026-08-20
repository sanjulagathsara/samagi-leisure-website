import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notes for the Samagi Leisure marketing website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        description="A simple notice for this demonstration site. Replace with counsel-reviewed policy before collecting real guest data."
        compact
      />
      <section className="bg-ivory py-16 sm:py-24">
        <Container className="max-w-3xl space-y-6 text-sm leading-7 text-stone">
          <p>
            Samagi Leisure ({site.legalName}) respects the people who write to us.
            This marketing website is a front-end demonstration. Enquiry and
            newsletter forms do not send data to a server and should not be used
            to submit real personal information until a secure backend is connected.
          </p>
          <p>
            When the site is live, we would expect to collect only what is needed
            to answer a stay or wedding enquiry: name, contact details, dates,
            party size, and any notes you choose to share. That information would
            be used to reply to you and to prepare a stay, not sold to third parties.
          </p>
          <p>
            We use no advertising pixels on this demonstration. A production site
            may use privacy-respecting analytics; that choice should be documented
            here before launch.
          </p>
          <p>
            For questions about this notice, write to{" "}
            <a className="text-forest underline decoration-gold" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
