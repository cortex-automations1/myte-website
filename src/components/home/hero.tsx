import { Button } from "@/components/ui";
import { Shield, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      {/* Subtle texture */}
      <div className="absolute inset-0">
        {/* Soft gradient accent — top right */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-blue/[0.07] blur-[120px]" />
        {/* Fine dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container-narrow relative">
        <div className="flex min-h-[88vh] flex-col justify-center pb-28 pt-32">
          {/* Eyebrow */}
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
            <Shield className="h-4 w-4 text-brand-blue" />
            <span className="text-body-sm font-medium text-gray-300">
              Managed IT &amp; Cybersecurity for Growing Businesses
            </span>
          </div>

          {/* Headline — white on dark for maximum contrast */}
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[5.5rem]">
            Enterprise IT Security.
            <br />
            <span className="text-brand-blue">Personal Service.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Your business deserves the same caliber of IT and cybersecurity that
            enterprises rely on — with a team that actually knows your name.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg">
              Get a Free Consultation
            </Button>
            <Button
              href="/calculator"
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              See What You Should Be Spending
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="absolute inset-x-0 bottom-0 border-t border-white/10">
          <div className="container-narrow grid grid-cols-3 divide-x divide-white/10">
            {[
              { value: "200+", label: "Businesses Protected" },
              { value: "99.9%", label: "Uptime Guaranteed" },
              { value: "<15min", label: "Avg. Response Time" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-6 text-center">
                <div className="text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-body-sm text-gray-500">
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
