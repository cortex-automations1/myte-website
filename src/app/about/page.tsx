import type { Metadata } from "next";
import { Section, SectionHeading, Card } from "@/components/ui";
import { StatBar, CtaBlock } from "@/components/shared";
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
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-display-lg md:text-display-xl">
            Your IT Team, Not Just Another Vendor
          </h1>
          <p className="mt-6 text-body-lg text-brand-gray-light">
            MYTE was founded on a simple premise: small and mid-sized businesses
            deserve the same level of IT expertise and security that large
            enterprises get, without the impersonal service and inflated price
            tags. We built MYTE to be the IT partner we always wished existed
            &mdash; one that actually picks up the phone, explains things in
            plain language, and treats your business like it matters. Because it
            does.
          </p>
        </div>
      </Section>

      {/* Stats */}
      <Section background="light">
        <StatBar stats={stats} />
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading
          title="What We Stand For"
          subtitle="These are not aspirational posters on a wall. These are the principles that guide every decision we make."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue-light">
                <v.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-display-sm">{v.title}</h3>
                <p className="mt-2 text-body-md text-brand-gray-light">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* MYTE Difference */}
      <Section background="light">
        <SectionHeading
          title="The MYTE Difference"
          subtitle="See how we stack up against the big managed security providers."
        />
        <Card className="overflow-hidden">
          <div className="hidden md:grid md:grid-cols-3 border-b border-gray-200 px-6 py-4 font-semibold text-brand-dark">
            <div>&nbsp;</div>
            <div className="text-center">Big MSSP</div>
            <div className="text-center">MYTE</div>
          </div>
          {comparisons.map((row) => (
            <div
              key={row.category}
              className="grid gap-4 border-b border-gray-100 px-6 py-5 last:border-0 md:grid-cols-3 md:gap-0"
            >
              <div className="font-semibold text-brand-dark">
                {row.category}
              </div>
              <div className="flex items-start gap-2 md:justify-center md:text-center">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
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
          ))}
        </Card>
      </Section>

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
