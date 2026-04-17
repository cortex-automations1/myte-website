export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We switched to MYTE after our last provider let a ransomware attack slip through the cracks. Since day one, their response time has been incredible and they actually explain things in plain English. For the first time, I feel like our data is genuinely safe.",
    name: "Rachel Simmons",
    title: "Office Manager",
    company: "Greenfield Family Dental",
  },
  {
    quote:
      "MYTE cut our IT spend by thirty percent while actually improving our uptime. They found licensing waste, consolidated vendors, and built us a roadmap that made sense. Our old provider never once told us we were overpaying.",
    name: "Marcus Delgado",
    title: "CFO",
    company: "Bridgewater Capital Advisors",
  },
  {
    quote:
      "As a law firm, we cannot afford downtime or a data breach. MYTE handles our compliance, manages our cloud environment, and responds to tickets faster than any IT company we have worked with. They feel like part of our team, not a vendor.",
    name: "Jennifer Walsh",
    title: "Managing Partner",
    company: "Walsh & Associates Law Group",
  },
];
