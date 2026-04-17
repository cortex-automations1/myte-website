import Image from "next/image";
import { Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
        alt="Cybersecurity technology infrastructure"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/70" />

      {/* Content */}
      <div className="container-narrow relative flex min-h-[90vh] flex-col justify-center">
        <div className="max-w-4xl pt-16">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
            Enterprise IT Security.
            <br />
            <span className="bg-gradient-to-r from-white to-brand-blue bg-clip-text text-transparent">
              Personal Service.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            Your business deserves IT that is proactive, secure, and built
            around the way you work. MYTE Technology gives growing companies
            the same caliber of protection that enterprises rely on.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href="/contact"
              size="lg"
              className="shadow-lg shadow-brand-blue/25"
            >
              Get a Free Consultation
            </Button>
            <Button
              href="/calculator"
              variant="outline"
              size="lg"
              className="border-white/80 text-white hover:bg-white/10 hover:text-white"
            >
              See What You Should Be Spending
            </Button>
          </div>
        </div>

        {/* Floating Stats Row */}
        <div className="absolute inset-x-0 bottom-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-md md:px-10">
              <div className="flex flex-col items-center justify-center gap-6 text-center text-sm font-medium text-white/80 md:flex-row md:gap-12 md:text-base">
                <span className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand-blue" />
                  200+ Businesses Protected
                </span>
                <span className="hidden h-4 w-px bg-white/20 md:block" />
                <span className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand-green" />
                  99.9% Uptime
                </span>
                <span className="hidden h-4 w-px bg-white/20 md:block" />
                <span className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand-blue" />
                  &lt;15min Response Time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
