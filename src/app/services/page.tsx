import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Card } from "@/components/ui";
import { CtaBlock } from "@/components/shared";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore MYTE Technology's managed IT, cybersecurity, cloud, and consulting services built for small and mid-sized businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive technology solutions to protect, optimize, and grow your business."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug} hover className="p-8">
              <service.icon className="mb-4 h-10 w-10 text-brand-blue" />
              <h2 className="text-display-sm">{service.title}</h2>
              <p className="mt-2 text-body-md text-brand-gray-light">
                {service.shortDescription}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-body-md font-semibold text-brand-blue transition-colors hover:text-brand-blue-hover"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBlock
        headline="Not Sure What You Need?"
        description="Let us assess your environment and recommend the right services for your business."
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
        background="dark"
      />
    </>
  );
}
