"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().max(0, "Invalid submission"),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
  const { allowed } = rateLimit(`contact:${ip}`);
  if (!allowed) {
    return { success: false, error: "Too many submissions. Please try again in a minute." };
  }

  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company: formData.get("company") as string,
    interest: formData.get("interest") as string,
    message: formData.get("message") as string,
    website: formData.get("website") as string,
  };

  // Honeypot check - silently succeed to avoid alerting bots
  if (raw.website && raw.website.length > 0) {
    return { success: true };
  }

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const firstError = result.error.issues[0];
    return { success: false, error: firstError.message };
  }

  // Log submission for now (replace with email/CRM integration later)
  console.log("Contact form submission:", {
    name: result.data.name,
    email: result.data.email,
    phone: result.data.phone,
    company: result.data.company,
    interest: result.data.interest,
    message: result.data.message,
  });

  return { success: true };
}
