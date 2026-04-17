import type { Metadata } from "next";
import { Section, Card } from "@/components/ui";
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
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left: Form */}
        <div>
          <h1 className="text-display-lg md:text-display-xl">
            Let&apos;s Talk
          </h1>
          <p className="mt-4 text-body-lg text-brand-gray-light">
            Whether you need a full IT overhaul or just want a second opinion on
            your current setup, we are here to help. Fill out the form and our
            team will be in touch.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="lg:pl-8">
          <Card className="bg-brand-surface">
            <h2 className="text-display-sm">Get in Touch</h2>
            <div className="mt-6 space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue-light">
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
          </Card>

          {/* Response Time Commitment */}
          <div className="mt-6 rounded-brand border-2 border-brand-blue-light bg-brand-blue-light p-6 text-center">
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
    </Section>
  );
}
