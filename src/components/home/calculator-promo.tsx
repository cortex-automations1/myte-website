import { Calculator } from "lucide-react";
import { Button } from "@/components/ui";

export function CalculatorPromo() {
  return (
    <section className="section-padding bg-brand-dark">
      <div className="container-narrow">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Left: copy */}
          <div className="flex-1">
            <h2 className="text-display-md text-white md:text-display-lg">
              Are You Overspending on IT?
            </h2>
            <p className="mt-4 max-w-lg text-body-lg text-gray-300">
              Most businesses either spend too much on the wrong things or too
              little to stay protected. Our free calculator benchmarks your IT
              spend against industry standards and shows you exactly where your
              money should be going.
            </p>
            <div className="mt-8">
              <Button href="/calculator" size="lg">
                Calculate Your IT Costs
              </Button>
            </div>
          </div>

          {/* Right: stylized icon */}
          <div className="flex shrink-0 items-center justify-center">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-2xl bg-brand-dark-light">
              <Calculator className="h-20 w-20 text-brand-blue" />
              <span className="absolute -right-3 -top-3 rounded-full bg-brand-green px-3 py-1 text-body-sm font-semibold text-white">
                Free &amp; Instant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
