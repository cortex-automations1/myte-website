import type { Metadata } from "next";
import { CtaBlock } from "@/components/shared";
import { industries } from "@/data/industries";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Page Hero */}
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
          <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
            Industries
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            We Speak Your Industry&apos;s Language
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Compliance requirements, workflow needs, and threat landscapes vary
            by industry. We tailor our approach to yours.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.08]">
                  <industry.icon className="h-5 w-5 text-brand-blue" />
                </div>
                <h2 className="text-lg font-semibold text-brand-dark">
                  {industry.name}
                </h2>
                <span className="mt-2 inline-block rounded-full bg-brand-surface px-3 py-1 text-xs font-medium text-brand-gray-light">
                  {industry.compliance}
                </span>
                <p className="mt-3 text-body-sm leading-relaxed text-brand-gray-light">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        headline="Don't See Your Industry?"
        description="We work with businesses across many sectors. Let us learn about your unique needs and show you how MYTE can help."
        primaryCta={{ label: "Book a Free Consultation", href: "/contact" }}
        background="dark"
      />
    </>
  );
}
