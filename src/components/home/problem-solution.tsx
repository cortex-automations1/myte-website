import { UserX, ShieldAlert, DollarSign } from "lucide-react";

const problems = [
  {
    icon: UserX,
    headline: "Tired of Being a Ticket Number?",
    solution:
      "You get a dedicated team that knows your name, your business, and your systems. We pick up the phone and solve problems fast — because you're a partner, not a queue position.",
  },
  {
    icon: ShieldAlert,
    headline: "Worried About the Next Breach?",
    solution:
      "Our layered cybersecurity approach monitors your environment 24/7 with real-time threat detection. Attacks are stopped before they reach your data.",
  },
  {
    icon: DollarSign,
    headline: "Frustrated by Unpredictable IT Costs?",
    solution:
      "Flat-rate managed IT means no surprise invoices. You know exactly what you're paying each month, and every dollar goes toward keeping your business running.",
  },
];

export function ProblemSolution() {
  return (
    <section className="bg-brand-surface py-20 md:py-28">
      <div className="container-narrow">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
            Why MYTE
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            IT problems you shouldn&apos;t have to live with
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {problems.map((item) => (
            <div
              key={item.headline}
              className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.08]">
                <item.icon className="h-5 w-5 text-brand-blue" />
              </div>

              <h3 className="text-lg font-semibold text-brand-dark">
                {item.headline}
              </h3>
              <p className="mt-3 text-body-md leading-relaxed text-brand-gray-light">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
