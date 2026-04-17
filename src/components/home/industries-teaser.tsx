import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";

export function IndustriesTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
              Industries
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              We speak your industry&apos;s language
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-1 text-body-sm font-semibold text-brand-blue hover:underline"
          >
            All industries <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.08]">
                <ind.icon className="h-5 w-5 text-brand-blue" />
              </div>
              <h3 className="text-lg font-semibold text-brand-dark">
                {ind.name}
              </h3>
              <span className="mt-2 inline-block rounded-full bg-brand-surface px-3 py-1 text-xs font-medium text-brand-gray-light">
                {ind.compliance}
              </span>
              <p className="mt-3 text-body-sm leading-relaxed text-brand-gray-light">
                {ind.challenge}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
