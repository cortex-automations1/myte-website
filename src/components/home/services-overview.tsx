import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const serviceImages: Record<string, { src: string; alt: string }> = {
  "managed-it": {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    alt: "Team collaborating on IT solutions",
  },
  cybersecurity: {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
    alt: "Cybersecurity lock and digital protection",
  },
  cloud: {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    alt: "Cloud data center infrastructure",
  },
  consulting: {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    alt: "Business strategy consulting meeting",
  },
};

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-dark md:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray-light">
            Comprehensive IT and cybersecurity services built for growing businesses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const image = serviceImages[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative h-72 overflow-hidden rounded-2xl md:h-80"
              >
                {/* Background Image */}
                {image && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/60 to-brand-dark/30 transition-colors duration-300 group-hover:from-brand-dark/95 group-hover:via-brand-dark/70" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/20 backdrop-blur-sm">
                    <service.icon className="h-5 w-5 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-300">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
