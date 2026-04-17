import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServicePageTemplate } from "@/components/services";

const service = services.find((s) => s.slug === "cloud")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function CloudPage() {
  return <ServicePageTemplate service={service} />;
}
