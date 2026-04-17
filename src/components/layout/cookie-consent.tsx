"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "myte-cookie-consent";
const CONSENT_EVENT = "myte-consent-change";

export type ConsentValue = "accepted" | "declined";

export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return raw === "accepted" || raw === "declined" ? raw : null;
}

function writeConsent(value: ConsentValue) {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export const cookieConsentEvents = {
  CONSENT_EVENT,
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    writeConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    writeConsent("declined");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-lg border border-white/10 bg-brand-dark/95 p-5 text-white shadow-lg backdrop-blur sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-body-sm leading-relaxed text-white/90">
          We use cookies to analyze site usage and improve your experience. See our{" "}
          <Link href="/privacy" className="underline hover:text-brand-blue">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex flex-shrink-0 gap-2">
          <button
            type="button"
            onClick={handleDecline}
            className="rounded-md border border-white/20 px-4 py-2 text-body-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-md bg-brand-blue px-4 py-2 text-body-sm font-medium text-white transition hover:bg-brand-blue/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
