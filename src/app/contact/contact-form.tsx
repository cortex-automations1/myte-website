"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/actions/contact";
import { Button } from "@/components/ui";

const initialState: ContactFormState = { success: false };

const interests = [
  "Managed IT",
  "Cybersecurity",
  "Cloud Solutions",
  "IT Consulting",
  "Not sure",
];

const inputClasses =
  "w-full rounded-brand border border-gray-200 px-4 py-3 text-body-md text-brand-gray focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.success) {
    return (
      <div className="rounded-brand bg-brand-blue-light p-8 text-center">
        <h3 className="text-display-sm text-brand-dark">
          Thank you for reaching out!
        </h3>
        <p className="mt-2 text-body-md text-brand-gray-light">
          We received your message and will get back to you within 1 business
          hour.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="rounded-brand border border-red-200 bg-red-50 px-4 py-3 text-body-sm text-red-600">
          {state.error}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-body-sm font-medium text-brand-dark">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClasses}
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-body-sm font-medium text-brand-dark">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-body-sm font-medium text-brand-dark">
            Phone <span className="text-brand-gray-light">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClasses}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-body-sm font-medium text-brand-dark">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className={inputClasses}
            placeholder="Acme Inc."
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-body-sm font-medium text-brand-dark">
          Area of Interest
        </label>
        <select
          id="interest"
          name="interest"
          required
          className={inputClasses}
          defaultValue=""
        >
          <option value="" disabled>
            Select an area...
          </option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-body-sm font-medium text-brand-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your IT challenges..."
        />
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
