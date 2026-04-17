import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            Services
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            What We Do
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Comprehensive technology solutions to protect, optimize, and grow
            your business.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.08]">
                  <service.icon className="h-5 w-5 text-brand-blue" />
                </div>
                <h2 className="text-lg font-semibold text-brand-dark">
                  {service.title}
                </h2>
                <p className="mt-2 text-body-md leading-relaxed text-brand-gray-light">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-1 text-body-md font-semibold text-brand-blue transition-colors hover:text-brand-blue-hover"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        headline="Not Sure What You Need?"
        description="Let us assess your environment and recommend the right services for your business."
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
        background="dark"
      />
    </>
  );
}
