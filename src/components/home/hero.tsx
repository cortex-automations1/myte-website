import { Button } from "@/components/ui";
import { Shield, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle abstract background */}
      <div className="absolute inset-0">
        {/* Large gradient orb - top right */}
        <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-brand-blue/[0.04] blur-3xl" />
        {/* Smaller accent orb - bottom left */}
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-brand-blue/[0.03] blur-3xl" />
        {/* Fine grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #545454 1px, transparent 1px), linear-gradient(to bottom, #545454 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container-narrow relative">
        {/* Main hero content */}
        <div className="flex min-h-[85vh] flex-col justify-center pb-24 pt-32">
          {/* Eyebrow badge */}
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-4 py-2">
            <Shield className="h-4 w-4 text-brand-blue" />
            <span className="text-body-sm font-medium text-brand-dark">
              Managed IT &amp; Cybersecurity for Growing Businesses
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-brand-dark md:text-6xl lg:text-[5.5rem]">
            Enterprise IT Security.{" "}
            <span className="text-brand-blue">Personal Service.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-gray-light md:text-xl">
            Your business deserves the same caliber of IT and cybersecurity that
            enterprises rely on — with a team that actually knows your name.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg">
              Get a Free Consultation
            </Button>
            <Button href="/calculator" variant="ghost" size="lg" className="group">
              See What You Should Be Spending
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Bottom stats - clean, minimal */}
        <div className="absolute inset-x-0 bottom-0 border-t border-gray-100">
          <div className="container-narrow grid grid-cols-3 divide-x divide-gray-100">
            {[
              { value: "200+", label: "Businesses Protected" },
              { value: "99.9%", label: "Uptime Guaranteed" },
              { value: "<15min", label: "Avg. Response Time" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-6 text-center">
                <div className="text-2xl font-bold text-brand-dark md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-body-sm text-brand-gray-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
