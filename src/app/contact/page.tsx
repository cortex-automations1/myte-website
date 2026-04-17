import type { Metadata } from "next";
import { contactInfo } from "@/data/navigation";
import { ContactForm } from "./contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: contactInfo.phone },
  { icon: Mail, label: "Email", value: contactInfo.email },
  { icon: MapPin, label: "Location", value: contactInfo.address },
  { icon: Clock, label: "Hours", value: contactInfo.hours },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-brand-blue/[0.07] blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="container-narrow relative">
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s Talk
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Whether you need a full IT overhaul or just want a second opinion on
            your current setup, we are here to help. No sales pitch, just a real
            conversation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="lg:pl-8">
              <div className="rounded-2xl border border-gray-100 bg-white p-8">
                <h2 className="text-lg font-semibold text-brand-dark">
                  Get in Touch
                </h2>
                <div className="mt-6 space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/[0.08]">
                        <detail.icon className="h-5 w-5 text-brand-blue" />
                      </div>
                      <div>
                        <div className="text-body-sm font-medium text-brand-dark">
                          {detail.label}
                        </div>
                        <div className="text-body-md text-brand-gray-light">
                          {detail.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time Commitment */}
              <div className="mt-6 rounded-2xl border border-brand-blue/20 bg-brand-blue/[0.04] p-6 text-center">
                <Clock className="mx-auto h-8 w-8 text-brand-blue" />
                <p className="mt-3 text-body-lg font-semibold text-brand-dark">
                  We respond within 1 business hour
                </p>
                <p className="mt-1 text-body-sm text-brand-gray-light">
                  No ticket queues. No automated replies. A real person, fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
