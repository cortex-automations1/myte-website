import { Section, SectionHeading } from "@/components/ui";
import { TestimonialCard, StatBar } from "@/components/shared";
import { testimonials } from "@/data/testimonials";

const stats = [
  { value: "200+", label: "Businesses Protected" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "< 15min", label: "Average Response Time" },
  { value: "98%", label: "Client Retention Rate" },
];

export function SocialProof() {
  return (
    <Section background="light">
      <SectionHeading
        title="Trusted by Businesses Like Yours"
        subtitle="Real results from real clients who made the switch to MYTE."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.name}
            quote={t.quote}
            name={t.name}
            title={t.title}
            company={t.company}
          />
        ))}
      </div>
      <div className="mt-16">
        <StatBar stats={stats} />
      </div>
    </Section>
  );
}
