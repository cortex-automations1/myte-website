import { UserX, ShieldAlert, DollarSign } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";

const problems = [
  {
    icon: UserX,
    headline: "Tired of Being a Ticket Number?",
    solution:
      "With MYTE, you get a dedicated team that knows your name, your business, and your systems. We pick up the phone and solve problems fast because you are a partner, not a queue position.",
  },
  {
    icon: ShieldAlert,
    headline: "Worried About the Next Breach?",
    solution:
      "Our layered cybersecurity approach monitors your environment 24/7 with real-time threat detection, so attacks are stopped before they reach your data.",
  },
  {
    icon: DollarSign,
    headline: "Frustrated by Unpredictable IT Costs?",
    solution:
      "Flat-rate managed IT means no surprise invoices. You know exactly what you are paying each month, and every dollar goes toward keeping your business running smoothly.",
  },
];

export function ProblemSolution() {
  return (
    <Section background="light">
      <SectionHeading
        title="IT Problems You Shouldn't Have to Live With"
        subtitle="Most businesses accept bad IT as normal. It doesn't have to be."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {problems.map((item) => (
          <div key={item.headline} className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue-light">
              <item.icon className="h-7 w-7 text-brand-blue" />
            </div>
            <h3 className="text-display-sm">{item.headline}</h3>
            <p className="mt-3 text-body-md text-brand-gray-light">
              {item.solution}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
