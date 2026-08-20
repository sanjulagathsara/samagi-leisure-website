"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(useGSAP);

type HeroSceneProps = {
  image: string;
  imageAlt: string;
};

export function HeroScene({ image, imageAlt }: HeroSceneProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hero-image",
          { scale: 1 },
          { scale: 1.08, duration: 18, ease: "none" },
        );
        gsap.from(".hero-copy > *", {
          y: 28,
          autoAlpha: 0,
          duration: 1.05,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-svh items-end overflow-hidden bg-forest"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-forest/80 via-forest/45 to-forest/20" />
      <div className="absolute inset-0 bg-linear-to-t from-forest/80 via-transparent to-forest/30" />
      <p className="pointer-events-none absolute top-1/2 left-5 hidden -translate-y-1/2 text-[0.62rem] tracking-[0.55em] text-gold/80 uppercase [writing-mode:vertical-rl] lg:block">
        Est. Sri Lanka · Sample
      </p>
      <Container className="hero-copy relative z-10 w-full pb-24 pt-36">
        <p className="text-[0.72rem] tracking-[0.36em] text-gold uppercase">
          Samagi · Unity
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] font-medium text-cream sm:text-6xl lg:text-7xl">
          Togetherness, at island pace.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-cream/80 sm:text-lg">
          Three houses in Bentota, Ella, and Colombo. Stays, weddings, and
          unhurried days shaped around Sri Lankan warmth — not a chain, not a
          template, a gathering place.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="gold">
            Book a stay
          </Button>
          <Button href="/properties" variant="outline" className="text-cream">
            Explore the houses
          </Button>
        </div>
      </Container>
    </section>
  );
}
