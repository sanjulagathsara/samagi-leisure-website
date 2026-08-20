"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { locales, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = !scrolled && !open;
  const light = overlay;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        overlay ? "bg-transparent" : "border-b border-line/70 bg-ivory/95 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <div onClick={() => setOpen(false)}>
          <Logo light={light} />
        </div>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.7rem] tracking-[0.22em] uppercase transition-colors",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? light
                    ? "text-gold"
                    : "text-gold-deep"
                  : light
                    ? "text-cream/80 hover:text-cream"
                    : "text-forest/80 hover:text-forest",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "hidden items-center gap-1 text-[0.65rem] tracking-[0.18em] uppercase sm:flex",
              light ? "text-cream/70" : "text-stone",
            )}
            aria-label="Language"
          >
            {locales.map((locale) =>
              locale.enabled ? (
                <span key={locale.code} className={light ? "text-gold" : "text-gold-deep"}>
                  {locale.label}
                </span>
              ) : (
                <span
                  key={locale.code}
                  title={`${locale.label} coming soon`}
                  className="cursor-not-allowed opacity-40"
                >
                  {locale.label}
                </span>
              ),
            )}
          </div>
          <Button
            href="/contact"
            variant={light ? "gold" : "solid"}
            className="hidden sm:inline-flex"
          >
            Book now
          </Button>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center lg:hidden",
              light ? "text-cream" : "text-forest",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={cn("h-px w-5 bg-current transition", open && "translate-y-[6px] rotate-45")} />
              <span className={cn("h-px w-5 bg-current transition", open && "opacity-0")} />
              <span className={cn("h-px w-5 bg-current transition", open && "-translate-y-[6px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-ivory lg:hidden"
      >
        <nav className="flex flex-col px-5 py-6" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-sm tracking-[0.18em] text-forest uppercase"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-forest px-5 py-3 text-center text-[0.72rem] tracking-[0.22em] text-cream uppercase"
          >
            Book now
          </Link>
        </nav>
      </div>
    </header>
  );
}
