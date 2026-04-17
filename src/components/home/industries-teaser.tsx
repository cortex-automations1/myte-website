import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";

const industryImages: Record<string, { src: string; alt: string }> = {
  Healthcare: {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    alt: "Modern healthcare facility",
  },
  Legal: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    alt: "Law firm office with legal documents",
  },
  "Financial Services": {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Financial data and analytics dashboard",
  },
};

export function IndustriesTeaser() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-dark md:text-4xl lg:text-5xl">
            Industries We Specialize In
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray-light">
            Deep expertise in regulated industries where compliance and security are non-negotiable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((industry) => {
            const image = industryImages[industry.name];
            return (
              <div
                key={industry.name}
                className="group relative h-96 overflow-hidden rounded-2xl"
              >
                {/* Background Image */}
                {image && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Gradient Overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />

                {/* Content at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Compliance Badge - glass style */}
                  <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {industry.compliance}
                  </span>

                  <h3 className="text-2xl font-bold text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-300">
                    {industry.challenge}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-1 text-base font-semibold text-brand-blue transition-colors hover:text-brand-blue-hover"
          >
            See all industries we serve
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
