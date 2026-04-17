"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { cookieConsentEvents, readConsent } from "./cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(readConsent() === "accepted");
    const handler = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      setConsented(detail === "accepted");
    };
    window.addEventListener(cookieConsentEvents.CONSENT_EVENT, handler);
    return () => window.removeEventListener(cookieConsentEvents.CONSENT_EVENT, handler);
  }, []);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
