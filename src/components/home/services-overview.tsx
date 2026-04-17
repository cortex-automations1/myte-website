import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const serviceImages: Record<string, string> = {
  "managed-it":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  cybersecurity:
    "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
  cloud:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  consulting:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
};

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-body-sm font-semibold uppercase tracking-widest text-brand-blue">
              Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              What we do
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-body-sm font-semibold text-brand-blue hover:underline"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-brand-dark"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72">
                <Image
                  src={serviceImages[service.slug]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-40 transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
                />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent p-8">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                  <service.icon className="h-4 w-4 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-body-sm text-gray-400">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
