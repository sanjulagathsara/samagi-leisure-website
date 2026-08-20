"use client";

import { FormEvent, useState } from "react";
import { eventVenues } from "@/lib/data";
import { cn } from "@/lib/utils";

type FieldErrors = Record<string, string>;

const initial = {
  name: "",
  email: "",
  phone: "",
  eventType: "Wedding",
  date: "",
  guests: "80",
  venue: "",
  message: "",
};

export function EventsForm({ className }: { className?: string }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof typeof initial, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: FieldErrors = {};
    if (values.name.trim().length < 2) next.name = "Please enter a name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email.";
    }
    if (values.phone.trim().length < 7) next.phone = "Enter a phone number.";
    if (!values.date) next.date = "Choose a preferred date.";
    if (!values.venue) next.venue = "Choose a venue.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-cream px-6 py-10 text-center" role="status">
        <p className="text-[0.68rem] tracking-[0.28em] text-gold-deep uppercase">
          Enquiry noted
        </p>
        <h3 className="mt-3 font-serif text-3xl text-forest">We’ll be in touch.</h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-stone">
          This is a sample events form. No message was sent. A live site would
          route this to {values.venue} and our celebrations team.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border-b border-line bg-transparent py-3 text-sm text-ink focus:border-gold focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className={cn("grid gap-6 sm:grid-cols-2", className)}>
      <label className="block">
        <span className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">Name</span>
        <input className={fieldClass} value={values.name} onChange={(e) => update("name", e.target.value)} />
        {errors.name ? <span className="text-xs text-red-800">{errors.name}</span> : null}
      </label>
      <label className="block">
        <span className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">Email</span>
        <input className={fieldClass} type="email" value={values.email} onChange={(e) => update("email", e.target.value)} />
        {errors.email ? <span className="text-xs text-red-800">{errors.email}</span> : null}
      </label>
      <label className="block">
        <span className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">Phone</span>
        <input className={fieldClass} type="tel" value={values.phone} onChange={(e) => update("phone", e.target.value)} />
        {errors.phone ? <span className="text-xs text-red-800">{errors.phone}</span> : null}
      </label>
      <label className="block">
        <span className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">Occasion</span>
        <select className={fieldClass} value={values.eventType} onChange={(e) => update("eventType", e.target.value)}>
          <option>Wedding</option>
          <option>Blessing</option>
          <option>Corporate retreat</option>
          <option>Family gathering</option>
          <option>Other celebration</option>
        </select>
      </label>
      <label className="block">
        <span className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">Preferred date</span>
        <input className={fieldClass} type="date" value={values.date} onChange={(e) => update("date", e.target.value)} />
        {errors.date ? <span className="text-xs text-red-800">{errors.date}</span> : null}
      </label>
      <label className="block">
        <span className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">Guests</span>
        <input className={fieldClass} type="number" min={10} value={values.guests} onChange={(e) => update("guests", e.target.value)} />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">Venue</span>
        <select className={fieldClass} value={values.venue} onChange={(e) => update("venue", e.target.value)}>
          <option value="">Select a venue</option>
          {eventVenues.map((venue) => (
            <option key={venue.name} value={venue.name}>
              {venue.name}
            </option>
          ))}
        </select>
        {errors.venue ? <span className="text-xs text-red-800">{errors.venue}</span> : null}
      </label>
      <label className="block sm:col-span-2">
        <span className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">Message</span>
        <textarea
          className={`${fieldClass} min-h-28`}
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="bg-forest px-6 py-3 text-[0.72rem] tracking-[0.22em] text-cream uppercase hover:bg-forest-mid"
        >
          Send wedding enquiry
        </button>
        <p className="mt-3 text-xs text-stone">Sample form — no enquiry is stored.</p>
      </div>
    </form>
  );
}
