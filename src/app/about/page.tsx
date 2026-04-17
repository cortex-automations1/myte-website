import type { Metadata } from "next";
import { CtaBlock } from "@/components/shared";
import { Shield, Users, Eye, Lightbulb, X, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
};

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "200+", label: "Clients Served" },
  { value: "15K+", label: "Endpoints Managed" },
  { value: "< 15min", label: "Avg Response Time" },
];

const values = [
  {
    icon: Shield,
    title: "Security-First Thinking",
    description:
      "Every recommendation we make starts with one question: does this protect the business? We bake security into the foundation, not bolt it on as an afterthought.",
  },
  {
    icon: Users,
    title: "Personal Accountability",
    description:
      "You will never be a ticket number. Our team knows your name, your business, and your environment. When something breaks, we own it until it is fixed.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "No hidden fees, no confusing jargon, no surprise invoices. We explain what we are doing, why we are doing it, and what it costs before we do it.",
  },
  {
    icon: Lightbulb,
    title: "Business-First Technology",
    description:
      "Technology should serve your business goals, not the other way around. We recommend what moves the needle, not what pads our margins.",
  },
];

const comparisons = [
  {
    category: "Support Experience",
    bigMssp: "Routed through 3 tiers of strangers",
    myte: "Direct access to senior engineers who know your environment",
  },
  {
    category: "Account Management",
    bigMssp: "Rotated reps who read from scripts",
    myte: "A dedicated team that knows your business inside and out",
  },
  {
    category: "Pricing",
    bigMssp: "Complex contracts with hidden fees",
    myte: "Flat-rate pricing with no surprises",
  },
  {
    category: "Strategy",
    bigMssp: "One-size-fits-all playbooks",
    myte: "Customized roadmaps aligned to your goals",
  },
];

export default function AboutPage() {
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
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Your IT Team, Not Just Another Vendor
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            MYTE was founded on a simple premise: small and mid-sized businesses
            deserve the same level of IT expertise and security that large
            enterprises get, without the impersonal service and inflated price
            tags. We built MYTE to be the IT partner we always wished existed
            &mdash; one that actually picks up the phone, explains things in
            plain language, and treats your business like it matters. Because it
            does.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-brand-dark">
                  {stat.value}
                </div>
                <div className="mt-1 text-body-sm text-brand-gray-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
              Our Values
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              What We Stand For
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/[0.08]">
                  <v.icon className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-body-md leading-relaxed text-brand-gray-light">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MYTE Difference */}
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="container-narrow">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
              The MYTE Difference
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              See how we stack up
            </h2>
          </div>

          {/* Header row */}
          <div className="mb-4 hidden md:grid md:grid-cols-3 md:gap-6 md:px-6">
            <div />
            <div className="text-center text-body-sm font-semibold text-brand-dark">
              Big MSSP
            </div>
            <div className="text-center text-body-sm font-semibold text-brand-dark">
              MYTE
            </div>
          </div>

          {/* Comparison rows */}
          <div className="space-y-4">
            {comparisons.map((row) => (
              <div
                key={row.category}
                className="rounded-2xl border border-gray-100 bg-white p-6"
              >
                <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                  <div className="font-semibold text-brand-dark">
                    {row.category}
                  </div>
                  <div className="flex items-start gap-2 md:justify-center md:text-center">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <span className="text-body-sm text-brand-gray-light">
                      {row.bigMssp}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 md:justify-center md:text-center">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    <span className="text-body-sm text-brand-gray-light">
                      {row.myte}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        headline="Ready to Work With a Team That Actually Picks Up the Phone?"
        description="Let us show you what proactive, personal IT support really looks like."
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "See Our Services", href: "/services" }}
        background="dark"
      />
    </>
  );
}
