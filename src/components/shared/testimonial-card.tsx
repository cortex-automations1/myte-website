import { Quote } from "lucide-react";
import { Card } from "@/components/ui";

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export function TestimonialCard({
  quote: quoteText,
  name,
  title,
  company,
}: TestimonialCardProps) {
  return (
    <Card>
      <Quote className="mb-4 h-8 w-8 text-brand-blue opacity-40" />
      <p className="italic text-brand-gray">{quoteText}</p>
      <div className="mt-6 border-t border-gray-100 pt-4">
        <p className="font-semibold text-brand-dark">{name}</p>
        <p className="text-body-sm text-brand-gray-light">
          {title}, {company}
        </p>
      </div>
    </Card>
  );
}
