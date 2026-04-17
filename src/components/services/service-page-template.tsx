import { Check } from "lucide-react";
import type { Service } from "@/data/services";
import { CtaBlock } from "@/components/shared";
import { Faq } from "./faq";

type ServicePageTemplateProps = {
  service: Service;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-brand-blue/[0.07] blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="container-narrow relative">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
            <service.icon className="h-7 w-7 text-white" />
          </div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            {service.description}
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
              The Challenge
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              What you&apos;re up against
            </h2>
            <div className="mt-8 space-y-4">
              {service.painPoints.map((point, index) => (
                <p
                  key={index}
                  className="text-body-md leading-relaxed text-brand-gray-light"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
              Our Approach
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              How we solve it
            </h2>
            <div className="mt-8 space-y-4">
              {service.approach.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  <p className="text-body-md leading-relaxed text-brand-gray-light">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
            What&apos;s Included
          </p>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Everything in this service
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-white p-5"
              >
                <div className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <p className="text-body-md text-brand-gray-light">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="container-narrow">
          <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
            FAQ
          </p>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Frequently Asked Questions
          </h2>
          <Faq items={service.faq} />
        </div>
      </section>

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
