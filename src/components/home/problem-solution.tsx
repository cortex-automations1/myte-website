import { UserX, ShieldAlert, DollarSign } from "lucide-react";

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
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-brand-surface" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-blue/5 to-transparent blur-3xl" />

      <div className="container-narrow relative">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-dark md:text-4xl lg:text-5xl">
            IT Problems You Shouldn&apos;t Have to Live With
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray-light">
            Most businesses accept bad IT as normal. It doesn&apos;t have to be.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item.headline}
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Gradient accent strip */}
              <div className="mb-6 h-1 w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-blue/50" />

              {/* Icon in gradient circle */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blue/70 text-white shadow-md shadow-brand-blue/20">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-brand-dark">
                {item.headline}
              </h3>
              <p className="mt-3 leading-relaxed text-brand-gray-light">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
