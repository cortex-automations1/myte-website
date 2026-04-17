"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
});

export type LeadFormState = {
  success: boolean;
  error?: string;
};

export async function submitCalculatorLead(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
  const { allowed } = rateLimit(`calculator:${ip}`);
  if (!allowed) {
    return { success: false, error: "Too many submissions. Please try again in a minute." };
  }

  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    phone: formData.get("phone") as string,
  };

  const result = leadSchema.safeParse(raw);

  if (!result.success) {
    const firstError = result.error.issues[0];
    return { success: false, error: firstError.message };
  }

  // Log submission for now (replace with CRM integration later)
  console.log("Calculator lead submission:", {
    name: result.data.name,
    email: result.data.email,
    company: result.data.company,
    phone: result.data.phone,
  });

  return { success: true };
}
