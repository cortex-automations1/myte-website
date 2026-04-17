import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServicePageTemplate } from "@/components/services";

const service = services.find((s) => s.slug === "consulting")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function ConsultingPage() {
  return <ServicePageTemplate service={service} />;
}
