import { Check } from "lucide-react";
import type { Service } from "@/data/services";
import { Section, SectionHeading, Card } from "@/components/ui";
import { CtaBlock } from "@/components/shared";
import { Faq } from "./faq";

type ServicePageTemplateProps = {
  service: Service;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-light">
            <service.icon className="h-8 w-8 text-brand-blue" />
          </div>
          <h1 className="text-display-lg md:text-display-xl">
            {service.title}
          </h1>
          <p className="mt-6 text-body-lg text-brand-gray-light">
            {service.description}
          </p>
        </div>
      </Section>

      {/* The Challenge */}
      <Section background="light">
        <SectionHeading title="The Challenge" centered={false} />
        <div className="space-y-4">
          {service.painPoints.map((point, index) => (
            <p key={index} className="text-body-md text-brand-gray-light">
              {point}
            </p>
          ))}
        </div>
      </Section>

      {/* Our Approach */}
      <Section>
        <SectionHeading title="Our Approach" centered={false} />
        <div className="space-y-4">
          {service.approach.map((item, index) => (
            <div key={index} className="flex gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
              <p className="text-body-md text-brand-gray-light">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section background="light">
        <SectionHeading title="What's Included" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.included.map((item, index) => (
            <Card key={index}>
              <div className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <p className="text-body-md text-brand-gray-light">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading title="Frequently Asked Questions" />
        <Faq items={service.faq} />
      </Section>

      {/* CTA */}
      <CtaBlock
        headline={`Let\u2019s Talk About Your ${service.title}`}
        description="Schedule a free consultation to learn how we can help your business."
        primaryCta={{ label: "Get Started", href: "/contact" }}
        background="dark"
      />
    </>
  );
}
