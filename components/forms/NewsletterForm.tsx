"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  if (status === "success") {
    return (
      <p className="text-sm text-cream/80" role="status">
        Thank you. This is a sample signup — no email was stored.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setStatus("idle");
        }}
        placeholder="Your email"
        autoComplete="email"
        className="min-w-0 flex-1 border-b border-cream/30 bg-transparent py-2 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        className="bg-gold px-4 py-2 text-[0.68rem] tracking-[0.2em] text-forest uppercase"
      >
        Join
      </button>
      {status === "error" ? (
        <p className="basis-full text-xs text-gold" role="alert">
          Please enter a valid email.
        </p>
      ) : null}
    </form>
  );
}
