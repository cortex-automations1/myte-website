import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Card } from "@/components/ui";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <Section>
      <SectionHeading
        title="What We Do"
        subtitle="Comprehensive IT and cybersecurity services built for growing businesses."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.slug} hover accentTop>
            <service.icon className="mb-4 h-10 w-10 text-brand-blue" />
            <h3 className="text-display-sm">{service.title}</h3>
            <p className="mt-2 text-body-sm text-brand-gray-light">
              {service.shortDescription}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-hover"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
