import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

export function CalculatorPromo() {
  return (
    <section className="bg-brand-dark py-20 md:py-28">
      <div className="container-narrow">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Copy */}
          <div>
            <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
              Free Tool
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Are you overspending on IT?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-400">
              Most businesses either spend too much on the wrong things or too
              little on what matters. Get a clear picture of what you should
              actually be investing in technology and security.
            </p>
            <div className="mt-8">
              <Button href="/calculator" size="lg" className="group">
                Calculate Your IT Costs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Calculator preview */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              {/* Progress dots */}
              <div className="mb-6 flex items-center gap-2">
                {["Company", "Environment", "Security", "Results"].map(
                  (step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                          i === 0
                            ? "bg-brand-blue text-white"
                            : "bg-white/10 text-gray-500"
                        }`}
                      >
                        {i + 1}
                      </div>
                      {i < 3 && (
                        <div className="h-px w-4 bg-white/10 md:w-6" />
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Fake form fields */}
              <div className="space-y-4">
                <div>
                  <div className="mb-1.5 text-body-sm text-gray-500">
                    Employees
                  </div>
                  <div className="flex gap-2">
                    {["1-10", "11-25", "26-50", "51-100"].map((range, i) => (
                      <div
                        key={range}
                        className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                          i === 1
                            ? "bg-brand-blue text-white"
                            : "bg-white/5 text-gray-500"
                        }`}
                      >
                        {range}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 text-body-sm text-gray-500">
                    Industry
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-body-sm text-gray-400">
                    Healthcare
                  </div>
                </div>
              </div>

              {/* Blurred result preview */}
              <div className="mt-6 rounded-xl bg-white/[0.06] p-4">
                <div className="text-body-sm text-gray-500">
                  Estimated Monthly Cost
                </div>
                <div className="mt-1 text-2xl font-bold text-white blur-sm">
                  $2,400 - $3,800
                </div>
              </div>
            </div>

            {/* Subtle glow */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-blue/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
