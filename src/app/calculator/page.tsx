import type { Metadata } from "next";
import { CalculatorForm } from "@/components/calculator";

export const metadata: Metadata = {
  title: "IT Cost Calculator",
};

export default function CalculatorPage() {
  return (
    <>
      {/* Page Hero */}
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
          <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
            Free Tool
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            IT Cost Calculator
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Get an instant estimate of what managed IT services should cost for
            your business. Answer a few questions and see a personalized
            breakdown in under 2 minutes.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <CalculatorForm />
        </div>
      </section>
    </>
  );
}
