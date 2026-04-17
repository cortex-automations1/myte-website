import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui";
import { CalculatorForm } from "@/components/calculator";

export const metadata: Metadata = {
  title: "IT Cost Calculator",
};

export default function CalculatorPage() {
  return (
    <Section>
      <SectionHeading
        title="IT Cost Calculator"
        subtitle="Get an instant estimate of what managed IT services should cost for your business. Answer a few questions and see a personalized breakdown in under 2 minutes."
      />
      <CalculatorForm />
    </Section>
  );
}
