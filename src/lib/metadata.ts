import type { Metadata } from "next";

const SITE_NAME = "MYTE Technology";
const METADATA_BASE = new URL("https://mytetech.com");

export function createMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = new URL(path, METADATA_BASE).toString();

  return {
    title,
    description,
    metadataBase: METADATA_BASE,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
