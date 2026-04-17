import { Check } from "lucide-react";
import { Button } from "@/components/ui";

const steps = [
  { label: "Company Size", status: "complete" },
  { label: "Industry & Compliance", status: "complete" },
  { label: "Current IT Spend", status: "active" },
];

export function CalculatorPromo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-dark-light to-brand-dark py-16 md:py-24">
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.05) 59px, rgba(255,255,255,0.05) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.05) 59px, rgba(255,255,255,0.05) 60px)`,
        }}
      />

      {/* Glow accents */}
      <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-48 w-48 rounded-full bg-brand-blue/5 blur-3xl" />

      <div className="container-narrow relative">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Left: Copy */}
          <div className="flex-1">
            <span className="mb-4 inline-block rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue">
              Free & Instant
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Are You Overspending
              <br />
              on IT?
            </h2>
            <p className="mt-4 max-w-lg text-lg text-gray-300">
              Most businesses either spend too much on the wrong things or too
              little to stay protected. Our free calculator benchmarks your IT
              spend against industry standards and shows you exactly where your
              money should be going.
            </p>
            <div className="mt-8">
              <Button
                href="/calculator"
                size="lg"
                className="shadow-lg shadow-brand-blue/25"
              >
                Calculate Your IT Costs
              </Button>
            </div>
          </div>

          {/* Right: Mock Calculator UI */}
          <div className="w-full max-w-sm shrink-0">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
              {/* Header */}
              <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-brand-blue" />
                <span className="text-sm font-semibold text-white">
                  IT Cost Calculator
                </span>
              </div>

              {/* Progress Steps */}
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        step.status === "complete"
                          ? "bg-brand-blue text-white"
                          : "border border-brand-blue/50 text-brand-blue"
                      }`}
                    >
                      {step.status === "complete" ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        step.status === "complete"
                          ? "text-white/70"
                          : "font-medium text-white"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-white/10" />

              {/* Estimate Result (blurred) */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                  Your Estimate
                </p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-brand-blue blur-sm">
                    $4,250
                  </span>
                  <span className="text-sm text-white/40 blur-sm">/month</span>
                </div>
                <p className="mt-1 text-xs text-white/30">
                  Complete the calculator to reveal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
