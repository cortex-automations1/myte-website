import type { Metadata } from "next";
import { Section, SectionHeading, Card } from "@/components/ui";
import { CtaBlock } from "@/components/shared";
import { industries } from "@/data/industries";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
};

export default function IndustriesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          title="We Speak Your Industry's Language"
          subtitle="Compliance requirements, workflow needs, and threat landscapes vary by industry. We tailor our approach to yours."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.name} accentTop hover>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light">
                <industry.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h2 className="mt-4 text-display-sm">{industry.name}</h2>
              <span className="mt-2 inline-block rounded-full bg-brand-blue-light px-3 py-1 text-body-sm font-medium text-brand-blue">
                {industry.compliance}
              </span>
              <p className="mt-4 text-body-md text-brand-gray-light">
                {industry.challenge}
              </p>
              <ul className="mt-6 space-y-3">
                {industry.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    <span className="text-body-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBlock
        headline="Don't See Your Industry?"
        description="We work with businesses across many sectors. Let us learn about your unique needs and show you how MYTE can help."
        primaryCta={{ label: "Book a Free Consultation", href: "/contact" }}
        background="dark"
      />
    </>
  );
}
