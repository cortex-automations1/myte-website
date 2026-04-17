import { contactInfo } from "@/data/navigation";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MYTE Technology",
    description:
      "MYTE Technology provides managed IT services and cybersecurity solutions for small and mid-sized businesses. Proactive support, expert guidance, real results.",
    url: "https://mytetech.com",
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Your City",
      addressRegion: "State",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/mytetechnology",
      "https://twitter.com/mytetechnology",
      "https://www.facebook.com/mytetechnology",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed IT Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cybersecurity Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Consulting",
          },
        },
      ],
    },
  };

  // JSON-LD structured data uses dangerouslySetInnerHTML as the standard
  // React pattern. This is safe because the schema object contains only
  // hardcoded trusted values (no user input).
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
