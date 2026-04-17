import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Card } from "@/components/ui";
import { industries } from "@/data/industries";

export function IndustriesTeaser() {
  return (
    <Section>
      <SectionHeading
        title="Industries We Specialize In"
        subtitle="Deep expertise in regulated industries where compliance and security are non-negotiable."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {industries.map((industry) => (
          <Card key={industry.name} hover>
            <industry.icon className="mb-4 h-10 w-10 text-brand-blue" />
            <h3 className="text-display-sm">{industry.name}</h3>
            <p className="mt-2 text-body-sm text-brand-gray-light">
              {industry.challenge}
            </p>
            <span className="mt-4 inline-block rounded-full bg-brand-blue-light px-3 py-1 text-body-sm font-medium text-brand-blue">
              {industry.compliance}
            </span>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/industries"
          className="inline-flex items-center gap-1 text-body-md font-semibold text-brand-blue transition-colors hover:text-brand-blue-hover"
        >
          See all industries we serve
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
