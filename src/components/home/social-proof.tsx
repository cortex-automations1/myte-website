import { testimonials } from "@/data/testimonials";

const stats = [
  { value: "200+", label: "Businesses Protected" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "< 15min", label: "Average Response Time" },
  { value: "98%", label: "Client Retention Rate" },
];

export function SocialProof() {
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="container-narrow">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-brand-dark md:text-4xl lg:text-5xl">
              Trusted by Businesses Like Yours
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray-light">
              Real results from real clients who made the switch to MYTE.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Decorative Quote Mark */}
                <span className="absolute right-6 top-4 select-none text-8xl font-bold leading-none text-brand-blue/10">
                  &ldquo;
                </span>

                {/* Gradient accent on top */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand-blue to-brand-blue/50" />

                <p className="relative mt-4 italic leading-relaxed text-brand-gray">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-brand-dark">{t.name}</p>
                  <p className="text-sm text-brand-gray-light">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-brand-dark py-12 md:py-16">
        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="bg-gradient-to-r from-brand-blue to-white bg-clip-text text-5xl font-bold text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
