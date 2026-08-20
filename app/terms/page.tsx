import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms for Samagi Leisure.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description="Short terms for this marketing site. Rates, packages, and availability shown here are samples."
        compact
      />
      <section className="bg-ivory py-16 sm:py-24">
        <Container className="max-w-3xl space-y-6 text-sm leading-7 text-stone">
          <p>
            This website is provided by {site.legalName} to introduce our houses
            and to collect stay and event enquiries. Content, photography credits,
            room types, and prices are sample data unless and until replaced with
            live information.
          </p>
          <p>
            Submitting an enquiry is not a confirmed reservation and creates no
            obligation on either side until a written confirmation is issued. No
            payments are processed on this site.
          </p>
          <p>
            All original copy on these pages is written for Samagi Leisure.
            Placeholder photographs are sourced from Unsplash for demonstration
            and must be replaced with licensed original photography before a
            public launch.
          </p>
          <p>
            Sri Lankan law governs these terms. For booking conditions attached
            to a confirmed stay, a separate confirmation document would apply.
          </p>
        </Container>
      </section>
    </>
  );
}
