import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServicePageTemplate } from "@/components/services";

const service = services.find((s) => s.slug === "cybersecurity")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function CybersecurityPage() {
  return <ServicePageTemplate service={service} />;
}
