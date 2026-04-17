export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Managed IT", href: "/services/managed-it" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Cloud Solutions", href: "/services/cloud" },
      { label: "IT Consulting", href: "/services/consulting" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "IT Cost Calculator", href: "/calculator" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Managed IT", href: "/services/managed-it" },
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Cloud Solutions", href: "/services/cloud" },
    { label: "IT Consulting", href: "/services/consulting" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Blog", href: "/blog" },
    { label: "IT Cost Calculator", href: "/calculator" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const contactInfo = {
  phone: "(555) 123-4567",
  email: "info@mytetech.com",
  address: "Your City, State",
  hours: "Mon-Fri 8am-6pm",
  clientPortalUrl: "https://support.mytetech.com",
};
