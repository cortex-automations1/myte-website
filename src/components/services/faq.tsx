"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <span className="text-body-lg font-medium text-brand-dark">
              {item.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-brand-gray-light transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="pb-5">
              <p className="mt-3 pr-12 text-body-md text-brand-gray-light">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
