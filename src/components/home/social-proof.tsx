import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function SocialProof() {
  return (
    <section className="bg-brand-surface py-20 md:py-28">
      <div className="container-narrow">
        <div className="mb-16 max-w-xl">
          <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
            Client Stories
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Trusted by growing businesses
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-gray-100 bg-white p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-brand-blue/20" />
              <p className="text-body-md leading-relaxed text-brand-gray">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-semibold text-brand-dark">{t.name}</p>
                <p className="text-body-sm text-brand-gray-light">
                  {t.title}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
