# MYTE Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy the MYTE Technology marketing website at mytetech.com - a full Next.js site on Vercel with brand system, 13+ pages, interactive IT cost calculator, blog, and lead capture.

**Architecture:** Next.js 14+ App Router with TypeScript, Tailwind CSS design system, MDX blog, Server Actions + Zod for forms, deployed on Vercel via GitHub with Cloudflare DNS.

**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, MDX (next-mdx-remote), Zod, Lucide React icons, @vercel/analytics, next-sitemap

**Spec:** `docs/superpowers/specs/2026-04-16-myte-website-design.md`

---

## File Structure

```
c:/dev/projects/MYTE/
├── .github/
│   └── workflows/           # CI if needed (Vercel handles deploys)
├── public/
│   ├── images/
│   │   ├── logos/            # Partner/cert logos (grayscale)
│   │   └── og/              # Open Graph images
│   ├── fonts/               # Self-hosted Inter font files
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout (header + footer)
│   │   ├── page.tsx          # Home page
│   │   ├── not-found.tsx     # Custom 404
│   │   ├── api/og/route.tsx  # Dynamic Open Graph image generation
│   │   ├── services/
│   │   │   ├── page.tsx      # Services landing
│   │   │   ├── managed-it/page.tsx
│   │   │   ├── cybersecurity/page.tsx
│   │   │   ├── cloud/page.tsx
│   │   │   └── consulting/page.tsx
│   │   ├── about/page.tsx
│   │   ├── industries/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx      # Blog listing
│   │   │   └── [slug]/page.tsx
│   │   ├── calculator/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── ui/               # Primitives: Button, Card, Section, Container
│   │   ├── layout/           # Header, Footer, MobileNav
│   │   ├── home/             # Hero, TrustBar, ProblemSolution, etc.
│   │   ├── services/         # ServiceCard, ServiceTemplate, FAQ
│   │   ├── calculator/       # CalculatorForm, steps, ResultsDisplay
│   │   ├── blog/             # PostCard, PostLayout, TOC
│   │   └── shared/           # CTABlock, StatBar, TestimonialCard
│   ├── content/
│   │   └── blog/             # MDX blog posts
│   ├── lib/
│   │   ├── calculator.ts     # Calculator pricing logic
│   │   ├── blog.ts           # MDX loading utilities
│   │   ├── metadata.ts       # Shared SEO metadata helpers
│   │   └── rate-limit.ts     # In-memory rate limiter for form actions
│   ├── data/
│   │   ├── services.ts       # Service definitions (title, slug, icon, content)
│   │   ├── industries.ts     # Industry data
│   │   ├── testimonials.ts   # Testimonial data
│   │   ├── navigation.ts     # Nav links, footer links
│   │   └── redirects.ts      # WP Engine URL → new URL redirect map
│   └── actions/
│       ├── contact.ts        # Contact form server action
│       └── calculator.ts     # Calculator lead capture server action
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── next-sitemap.config.js
```

---

## Phase 1: Infrastructure & Project Scaffold

### Task 1: Create GitHub Repository

- [ ] **Step 1: Create the repo on GitHub**

```bash
cd "c:/dev/projects/MYTE"
gh repo create cortex-automations1/myte-website --public --description "MYTE Technology - MSP/MSSP marketing website" --source . --remote origin
```

Expected: Repo created, origin remote added.

- [ ] **Step 2: Push existing commit**

```bash
cd "c:/dev/projects/MYTE"
git push -u origin main
```

Expected: Design spec commit pushed to main.

---

### Task 2: Scaffold Next.js Project

- [ ] **Step 1: Initialize Next.js with TypeScript and Tailwind**

```bash
cd "c:/dev/projects/MYTE"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

When prompted about overwriting, accept. This initializes in the existing directory.

- [ ] **Step 2: Install dependencies**

```bash
cd "c:/dev/projects/MYTE"
npm install lucide-react zod next-mdx-remote gray-matter reading-time @vercel/analytics
npm install -D next-sitemap @tailwindcss/typography
```

- `lucide-react` - consistent line icons matching brand spec
- `zod` - schema validation for form server actions
- `next-mdx-remote` + `gray-matter` + `reading-time` - MDX blog
- `@vercel/analytics` - performance and web analytics
- `next-sitemap` - auto sitemap generation
- `@tailwindcss/typography` - prose styling for blog posts

- [ ] **Step 3: Verify the dev server starts**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

Expected: Server starts at localhost:3000, default Next.js page loads.

- [ ] **Step 4: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add -A
git commit -m "chore: scaffold Next.js project with dependencies"
```

---

### Task 3: Configure Tailwind Design System

- [ ] **Step 1: Update tailwind.config.ts with brand tokens**

Create: `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#38b6ff",
          "blue-hover": "#1da1f2",
          "blue-light": "#e8f4fd",
          gray: "#545454",
          "gray-light": "#6b7280",
          dark: "#1a1a2e",
          "dark-light": "#2a2a4a",
          surface: "#f5f7fa",
          white: "#ffffff",
          green: "#34d399",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["3rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        "display-sm": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        brand: "0.5rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
        "card-hover":
          "0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
```

- [ ] **Step 2: Set up global CSS**

Modify: `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply text-brand-gray antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply text-brand-dark font-semibold;
  }
}

@layer components {
  .section-padding {
    @apply py-16 md:py-24;
  }

  .container-narrow {
    @apply mx-auto max-w-container px-4 sm:px-6 lg:px-8;
  }
}
```

- [ ] **Step 3: Add Inter font via next/font**

Modify: `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "MYTE Technology | Enterprise IT Security. Personal Service.",
    template: "%s | MYTE Technology",
  },
  description:
    "MYTE Technology delivers enterprise-grade managed IT and cybersecurity for growing businesses. Real people. Real protection. No ticket queues.",
  metadataBase: new URL("https://mytetech.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Verify font and colors load**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

Check localhost:3000 - Inter font should render, no build errors.

- [ ] **Step 5: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add tailwind.config.ts src/app/globals.css src/app/layout.tsx
git commit -m "feat: configure Tailwind design system with MYTE brand tokens"
```

---

### Task 4: Create Vercel Project & Link Domain

- [ ] **Step 1: Create the Vercel project under Cortex Sites team**

```bash
curl -s -X POST "https://api.vercel.com/v10/projects?teamId=$VERCEL_CORTEX_SITES_TEAM_ID" \
  -H "Authorization: Bearer $VERCEL_CORTEX_SITES_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "myte-website",
    "framework": "nextjs",
    "gitRepository": {
      "repo": "cortex-automations1/myte-website",
      "type": "github"
    }
  }'
```

Expected: Project created, linked to GitHub repo.

- [ ] **Step 2: Add mytetech.com domain to Vercel project**

```bash
curl -s -X POST "https://api.vercel.com/v10/projects/myte-website/domains?teamId=$VERCEL_CORTEX_SITES_TEAM_ID" \
  -H "Authorization: Bearer $VERCEL_CORTEX_SITES_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "mytetech.com"}'
```

Then add www:

```bash
curl -s -X POST "https://api.vercel.com/v10/projects/myte-website/domains?teamId=$VERCEL_CORTEX_SITES_TEAM_ID" \
  -H "Authorization: Bearer $VERCEL_CORTEX_SITES_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "www.mytetech.com", "redirect": "mytetech.com"}'
```

- [ ] **Step 3: Get Vercel's CNAME/A record values**

The Vercel API response from step 2 will include the verification records needed. Note the `cname.vercel-dns.com` or A record IPs returned.

- [ ] **Step 4: Update Cloudflare DNS to point to Vercel**

Update the existing A records for `mytetech.com` to point to Vercel's IP (76.76.21.21):

```bash
# Get current A record IDs for mytetech.com
curl -s "https://api.cloudflare.com/client/v4/zones/39910035969a0ce5b90fb9fa52ee9eac/dns_records?type=A&name=mytetech.com" \
  -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_KEY"
```

Delete the two old A records (141.193.213.10 and 141.193.213.11) and create a new one:

```bash
# Delete old A records (IDs from previous query)
curl -s -X DELETE "https://api.cloudflare.com/client/v4/zones/39910035969a0ce5b90fb9fa52ee9eac/dns_records/<RECORD_ID_1>" \
  -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_KEY"

curl -s -X DELETE "https://api.cloudflare.com/client/v4/zones/39910035969a0ce5b90fb9fa52ee9eac/dns_records/<RECORD_ID_2>" \
  -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_KEY"

# Create new A record pointing to Vercel
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/39910035969a0ce5b90fb9fa52ee9eac/dns_records" \
  -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_KEY" \
  -H "Content-Type: application/json" \
  -d '{"type":"A","name":"mytetech.com","content":"76.76.21.21","ttl":1,"proxied":false}'
```

Update www CNAME to point to `cname.vercel-dns.com`:

```bash
# Update www CNAME (ID: b07e74b8b98e4f990e2d1e294cd16b2f)
curl -s -X PATCH "https://api.cloudflare.com/client/v4/zones/39910035969a0ce5b90fb9fa52ee9eac/dns_records/b07e74b8b98e4f990e2d1e294cd16b2f" \
  -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_KEY" \
  -H "Content-Type: application/json" \
  -d '{"type":"CNAME","name":"www","content":"cname.vercel-dns.com","ttl":1,"proxied":false}'
```

Note: Vercel SSL requires DNS records to be unproxied (gray cloud) or Cloudflare set to "Full (Strict)" SSL mode.

- [ ] **Step 5: Set Cloudflare SSL to Full (Strict)**

```bash
curl -s -X PATCH "https://api.cloudflare.com/client/v4/zones/39910035969a0ce5b90fb9fa52ee9eac/settings/ssl" \
  -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_KEY" \
  -H "Content-Type: application/json" \
  -d '{"value":"full"}'
```

- [ ] **Step 6: Verify domain is connected**

```bash
curl -s "https://api.vercel.com/v10/projects/myte-website/domains?teamId=$VERCEL_CORTEX_SITES_TEAM_ID" \
  -H "Authorization: Bearer $VERCEL_CORTEX_SITES_TOKEN"
```

Expected: Both domains show `verified: true`.

---

## Phase 2: Shared Components & Layout

### Task 5: Navigation Data & Types

- [ ] **Step 1: Create navigation data**

Create: `src/data/navigation.ts`

```ts
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
    { label: "IT Cost Calculator", href: "/calculator" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Industries", href: "/industries" },
    { label: "Careers", href: "#" },
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
```

- [ ] **Step 2: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/data/navigation.ts
git commit -m "feat: add navigation data and contact info"
```

---

### Task 6: UI Primitives

- [ ] **Step 1: Create Button component**

Create: `src/components/ui/button.tsx`

```tsx
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm",
  secondary:
    "bg-brand-dark text-white hover:bg-brand-dark-light shadow-sm",
  outline:
    "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  ghost: "text-brand-blue hover:bg-brand-blue-light",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-body-sm",
  md: "px-6 py-3 text-body-md",
  lg: "px-8 py-4 text-body-lg font-medium",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-brand font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Create Section container**

Create: `src/components/ui/section.tsx`

```tsx
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light" | "dark";
  id?: string;
};

const backgrounds = {
  white: "bg-white",
  light: "bg-brand-surface",
  dark: "bg-brand-dark text-white",
};

export function Section({
  children,
  className = "",
  background = "white",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`section-padding ${backgrounds[background]} ${className}`}>
      <div className="container-narrow">{children}</div>
    </section>
  );
}
```

- [ ] **Step 3: Create Card component**

Create: `src/components/ui/card.tsx`

```tsx
type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accentTop?: boolean;
};

export function Card({
  children,
  className = "",
  hover = false,
  accentTop = false,
}: CardProps) {
  return (
    <div
      className={`rounded-brand bg-white p-6 shadow-card ${
        hover ? "transition-shadow duration-200 hover:shadow-card-hover" : ""
      } ${accentTop ? "border-t-4 border-brand-blue" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Create SectionHeading component**

Create: `src/components/ui/section-heading.tsx`

```tsx
type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-display-md md:text-display-lg ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-body-lg ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-brand-gray-light"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 5: Create barrel export**

Create: `src/components/ui/index.ts`

```ts
export { Button } from "./button";
export { Section } from "./section";
export { Card } from "./card";
export { SectionHeading } from "./section-heading";
```

- [ ] **Step 6: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/components/ui/
git commit -m "feat: add UI primitives - Button, Section, Card, SectionHeading"
```

---

### Task 7: Header Component

- [ ] **Step 1: Create Header with desktop nav and mobile menu**

Create: `src/components/layout/header.tsx`

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";
import { mainNav } from "@/data/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="container-narrow flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link href="/" className="text-display-sm tracking-tight text-brand-dark">
          <span className="font-bold">MYTE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-brand px-3 py-2 text-body-sm font-medium text-brand-gray transition-colors hover:text-brand-blue"
              >
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full pt-1">
                  <div className="w-56 rounded-brand border border-gray-100 bg-white p-2 shadow-card-hover">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded px-3 py-2 text-body-sm text-brand-gray transition-colors hover:bg-brand-blue-light hover:text-brand-blue"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Get a Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 py-6 lg:hidden">
          {mainNav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block py-3 text-body-md font-medium text-brand-gray"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block py-2 pl-4 text-body-sm text-brand-gray-light"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Button href="/contact" className="w-full">
              Get a Consultation
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/components/layout/header.tsx
git commit -m "feat: add responsive Header with dropdown nav and mobile menu"
```

---

### Task 8: Footer Component

- [ ] **Step 1: Create Footer**

Create: `src/components/layout/footer.tsx`

```tsx
import Link from "next/link";
import { Linkedin, Twitter, Facebook, ExternalLink } from "lucide-react";
import { footerNav, contactInfo } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container-narrow section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="text-display-sm font-bold text-white">
              MYTE
            </Link>
            <p className="mt-4 text-body-sm leading-relaxed">
              Enterprise-grade IT security and managed services with the personal
              touch your business deserves.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition-colors hover:text-brand-blue"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 transition-colors hover:text-brand-blue"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 transition-colors hover:text-brand-blue"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 text-body-md font-semibold text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm transition-colors hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="mb-4 text-body-md font-semibold text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm transition-colors hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 text-body-md font-semibold text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-body-sm">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-brand-blue">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-blue">
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.address}</li>
              <li className="text-gray-400">{contactInfo.hours}</li>
            </ul>
            <a
              href={contactInfo.clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-brand border border-brand-blue px-4 py-2 text-body-sm font-medium text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              Client Portal
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-narrow flex flex-col items-center justify-between gap-4 py-6 text-body-sm text-gray-400 md:flex-row">
          <p>&copy; {currentYear} MYTE Technology. All rights reserved.</p>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Create layout barrel export**

Create: `src/components/layout/index.ts`

```ts
export { Header } from "./header";
export { Footer } from "./footer";
```

- [ ] **Step 3: Wire Header and Footer into root layout**

Modify: `src/app/layout.tsx` - update the body to include Header and Footer:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "MYTE Technology | Enterprise IT Security. Personal Service.",
    template: "%s | MYTE Technology",
  },
  description:
    "MYTE Technology delivers enterprise-grade managed IT and cybersecurity for growing businesses. Real people. Real protection. No ticket queues.",
  metadataBase: new URL("https://mytetech.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify header and footer render**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

Check localhost:3000 - header with nav and footer with 4 columns should render.

- [ ] **Step 5: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/components/layout/ src/app/layout.tsx
git commit -m "feat: add Footer and wire Header/Footer into root layout"
```

---

### Task 9: Shared Components (CTA Block, Stat Bar, Testimonials)

- [ ] **Step 1: Create CTABlock component**

Create: `src/components/shared/cta-block.tsx`

```tsx
import { Button } from "@/components/ui";

type CTABlockProps = {
  headline: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  background?: "light" | "dark";
};

export function CTABlock({
  headline,
  description,
  primaryCta,
  secondaryCta,
  background = "light",
}: CTABlockProps) {
  const isDark = background === "dark";
  return (
    <section className={`section-padding ${isDark ? "bg-brand-dark" : "bg-brand-surface"}`}>
      <div className="container-narrow text-center">
        <h2
          className={`text-display-md md:text-display-lg ${
            isDark ? "text-white" : "text-brand-dark"
          }`}
        >
          {headline}
        </h2>
        {description && (
          <p
            className={`mx-auto mt-4 max-w-2xl text-body-lg ${
              isDark ? "text-gray-300" : "text-brand-gray-light"
            }`}
          >
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create StatBar component**

Create: `src/components/shared/stat-bar.tsx`

```tsx
type Stat = {
  value: string;
  label: string;
};

type StatBarProps = {
  stats: Stat[];
  light?: boolean;
};

export function StatBar({ stats, light = false }: StatBarProps) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div
            className={`text-display-md font-bold ${
              light ? "text-white" : "text-brand-blue"
            }`}
          >
            {stat.value}
          </div>
          <div
            className={`mt-1 text-body-sm ${
              light ? "text-gray-300" : "text-brand-gray-light"
            }`}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create TestimonialCard component**

Create: `src/components/shared/testimonial-card.tsx`

```tsx
import { Quote } from "lucide-react";
import { Card } from "@/components/ui";

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export function TestimonialCard({
  quote,
  name,
  title,
  company,
}: TestimonialCardProps) {
  return (
    <Card className="flex flex-col">
      <Quote className="mb-4 h-8 w-8 text-brand-blue opacity-40" />
      <p className="flex-1 text-body-md italic text-brand-gray">{quote}</p>
      <div className="mt-6 border-t border-gray-100 pt-4">
        <p className="font-semibold text-brand-dark">{name}</p>
        <p className="text-body-sm text-brand-gray-light">
          {title}, {company}
        </p>
      </div>
    </Card>
  );
}
```

- [ ] **Step 4: Create barrel export**

Create: `src/components/shared/index.ts`

```ts
export { CTABlock } from "./cta-block";
export { StatBar } from "./stat-bar";
export { TestimonialCard } from "./testimonial-card";
```

- [ ] **Step 5: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/components/shared/
git commit -m "feat: add shared components - CTABlock, StatBar, TestimonialCard"
```

---

## Phase 3: Home Page

### Task 10: Home Page Data

- [ ] **Step 1: Create services data**

Create: `src/data/services.ts`

```ts
import {
  Monitor,
  Shield,
  Cloud,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  slug: string;
  icon: LucideIcon;
  shortDescription: string;
  description: string;
  painPoints: string[];
  approach: string[];
  included: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    title: "Managed IT Services",
    slug: "managed-it",
    icon: Monitor,
    shortDescription:
      "Proactive IT management that keeps your business running smoothly. Help desk, monitoring, and infrastructure - handled.",
    description:
      "Your technology should work for you, not against you. We manage your entire IT environment so you can focus on running your business.",
    painPoints: [
      "Your current IT provider takes hours - or days - to respond to critical issues.",
      "You're paying for break-fix support that only shows up after something breaks.",
      "Your team loses productive hours every week to technology frustrations.",
    ],
    approach: [
      "24/7 proactive monitoring catches issues before they become outages",
      "Dedicated help desk with real humans who know your name and your network",
      "Regular technology reviews so your infrastructure grows with your business",
      "Flat-rate pricing so you never get a surprise bill after an emergency",
    ],
    included: [
      "24/7 network and endpoint monitoring",
      "Help desk support with guaranteed response times",
      "Patch management and software updates",
      "Device lifecycle management",
      "Vendor management and procurement",
      "Monthly reporting and quarterly business reviews",
    ],
    faq: [
      {
        question: "How quickly do you respond to support requests?",
        answer:
          "Critical issues get a response within 15 minutes. Standard requests are acknowledged within 1 hour and resolved within 4 hours on average.",
      },
      {
        question: "Do we need to replace our existing equipment?",
        answer:
          "Not necessarily. We start with a comprehensive assessment of your current environment and only recommend changes that deliver clear ROI.",
      },
      {
        question: "What happens during onboarding?",
        answer:
          "We run a 30-day onboarding process: full network audit, documentation of your environment, deployment of our monitoring tools, and training for your team.",
      },
      {
        question: "Can you support remote employees?",
        answer:
          "Absolutely. We manage devices and provide support regardless of where your team members work.",
      },
    ],
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    icon: Shield,
    shortDescription:
      "Enterprise-grade security that protects your business without the enterprise price tag. Detection, response, and compliance.",
    description:
      "Cyber threats don't just target big companies. We bring enterprise security tools and expertise to businesses that can't afford to be the next headline.",
    painPoints: [
      "You know cybersecurity is important but aren't sure if your current protection is enough.",
      "Compliance requirements are getting more complex and you're not confident you're meeting them.",
      "You've heard about ransomware attacks hitting businesses your size and it keeps you up at night.",
    ],
    approach: [
      "Multi-layered defense: endpoint protection, email security, network monitoring, and employee training",
      "24/7 Security Operations Center monitoring for threats in real time",
      "Incident response planning so you know exactly what to do if something happens",
      "Compliance-first approach that maps security controls to your regulatory requirements",
    ],
    included: [
      "Endpoint detection and response (EDR)",
      "Email security and phishing protection",
      "24/7 Security Operations Center (SOC)",
      "Vulnerability scanning and remediation",
      "Security awareness training for staff",
      "Incident response planning and testing",
      "Compliance reporting (HIPAA, PCI-DSS, SOC2)",
    ],
    faq: [
      {
        question: "We're a small company - do we really need cybersecurity?",
        answer:
          "43% of cyberattacks target small businesses, and 60% of those that are hit go out of business within 6 months. The question isn't whether you can afford security - it's whether you can afford not to have it.",
      },
      {
        question: "What compliance frameworks do you support?",
        answer:
          "We support HIPAA, PCI-DSS, SOC2, CMMC, and NIST CSF. We'll help you identify which frameworks apply to your business and build a roadmap to compliance.",
      },
      {
        question: "What happens if we have a security incident?",
        answer:
          "Our incident response team activates immediately. We contain the threat, investigate the root cause, remediate the vulnerability, and help you communicate with stakeholders.",
      },
    ],
  },
  {
    title: "Cloud Solutions",
    slug: "cloud",
    icon: Cloud,
    shortDescription:
      "Migrate, manage, and optimize your cloud infrastructure. Microsoft 365, Azure, AWS - we speak all of them.",
    description:
      "The cloud should make your business more flexible, not more complicated. We handle the migration, management, and optimization so you get the benefits without the headaches.",
    painPoints: [
      "Your cloud costs keep climbing but you're not sure you're getting full value.",
      "You migrated to the cloud but it doesn't feel any easier to manage.",
      "Your team isn't using their cloud tools to their full potential.",
    ],
    approach: [
      "Assessment-first migration planning - we don't move anything until we understand your workflow",
      "Cost optimization that right-sizes your cloud spend to what you actually use",
      "Ongoing management so your cloud environment stays secure and performant",
      "User adoption training so your team actually uses what you're paying for",
    ],
    included: [
      "Cloud readiness assessment and migration planning",
      "Microsoft 365 and Azure administration",
      "AWS and multi-cloud management",
      "Cloud cost optimization and reporting",
      "Backup and disaster recovery",
      "User training and adoption support",
    ],
    faq: [
      {
        question: "How long does a cloud migration take?",
        answer:
          "It depends on complexity, but most SMB migrations take 4-8 weeks. We plan meticulously to minimize disruption - most of the work happens in the background.",
      },
      {
        question: "Will our cloud costs go down?",
        answer:
          "Most clients see 20-30% cost reduction within the first quarter through right-sizing, reserved instances, and eliminating waste.",
      },
      {
        question: "Can you manage a hybrid environment?",
        answer:
          "Yes. Many businesses keep some workloads on-premises for compliance or performance reasons. We manage the full picture.",
      },
    ],
  },
  {
    title: "IT Consulting & Strategy",
    slug: "consulting",
    icon: LineChart,
    shortDescription:
      "Strategic IT guidance that aligns technology with your business goals. Assessments, roadmaps, and vCIO services.",
    description:
      "Technology decisions should drive business outcomes, not just keep the lights on. We help you build an IT strategy that supports where your business is going.",
    painPoints: [
      "You're making technology decisions without a clear roadmap.",
      "IT spending feels reactive - you're always putting out fires instead of building for the future.",
      "You need CIO-level guidance but can't justify a full-time executive hire.",
    ],
    approach: [
      "Business-first assessments that start with your goals, not our product catalog",
      "Technology roadmaps aligned to your 1-3 year business plan",
      "Virtual CIO services that give you executive-level IT leadership at a fraction of the cost",
      "Vendor-neutral recommendations - we suggest what's right for you, not what pays us the most",
    ],
    included: [
      "Comprehensive IT assessment and gap analysis",
      "Technology roadmap development",
      "Annual IT budgeting and planning",
      "Virtual CIO (vCIO) advisory services",
      "Vendor evaluation and selection",
      "Board-ready reporting and presentations",
    ],
    faq: [
      {
        question: "What does a vCIO actually do?",
        answer:
          "Your vCIO serves as your outsourced IT executive. They attend leadership meetings, develop your technology strategy, manage your IT budget, and ensure technology decisions support business goals.",
      },
      {
        question: "How often do we meet?",
        answer:
          "Monthly strategy sessions are standard, with quarterly business reviews. Your vCIO is also available for ad-hoc guidance as decisions come up.",
      },
      {
        question: "Do we need managed services too, or can we just do consulting?",
        answer:
          "You can engage us for consulting only. That said, many clients find that having the same team that designs the strategy also execute it produces better results.",
      },
    ],
  },
];
```

- [ ] **Step 2: Create testimonials data**

Create: `src/data/testimonials.ts`

```ts
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Switching to MYTE was the best IT decision we've made. For the first time, I feel like our technology partner actually understands our business.",
    name: "Sarah Mitchell",
    title: "CEO",
    company: "Meridian Financial Group",
  },
  {
    quote:
      "We went from waiting days for a response to getting help in minutes. MYTE treats our problems like their own.",
    name: "James Rodriguez",
    title: "Managing Partner",
    company: "Redstone Legal Associates",
  },
  {
    quote:
      "MYTE helped us pass our first HIPAA audit with zero findings. Their security team is world-class.",
    name: "Dr. Karen Wu",
    title: "Practice Administrator",
    company: "Lakeview Medical Partners",
  },
];
```

- [ ] **Step 3: Create industries data**

Create: `src/data/industries.ts`

```ts
import { HeartPulse, Scale, Landmark, type LucideIcon } from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
  challenge: string;
  points: string[];
  compliance: string;
};

export const industries: Industry[] = [
  {
    name: "Healthcare",
    icon: HeartPulse,
    challenge:
      "Patient data protection and HIPAA compliance demand IT partners who understand clinical workflows.",
    points: [
      "HIPAA-compliant infrastructure and policies",
      "EHR system integration and support",
      "Secure patient data backup and disaster recovery",
      "Security awareness training for clinical staff",
    ],
    compliance: "HIPAA / HITECH",
  },
  {
    name: "Legal",
    icon: Scale,
    challenge:
      "Client confidentiality and attorney-client privilege require bulletproof data security and reliable systems.",
    points: [
      "Encrypted communication and file sharing",
      "Practice management software integration",
      "Email archiving and e-discovery readiness",
      "Multi-site secure connectivity",
    ],
    compliance: "ABA / State Bar Ethics",
  },
  {
    name: "Financial Services",
    icon: Landmark,
    challenge:
      "Regulatory scrutiny and sensitive financial data demand the highest levels of security and compliance.",
    points: [
      "SOC2 and PCI-DSS compliance support",
      "Advanced threat protection for financial data",
      "Secure remote access for distributed teams",
      "Audit-ready logging and reporting",
    ],
    compliance: "SOC2 / PCI-DSS / FINRA",
  },
];
```

- [ ] **Step 4: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/data/
git commit -m "feat: add services, testimonials, and industries data"
```

---

### Task 11: Home Page - Hero Section

- [ ] **Step 1: Create NetworkMesh animated background component**

Create: `src/components/home/network-mesh.tsx`

This is a lightweight canvas animation - slow-moving dots with subtle connecting lines. Purely decorative, no interactivity, no heavy library.

```tsx
"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number };

export function NetworkMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    const PARTICLE_COUNT = 40;
    const CONNECTION_DISTANCE = 120;
    const SPEED = 0.3;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas!.offsetWidth,
          y: Math.random() * canvas!.offsetHeight,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
        });
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15;
            ctx.strokeStyle = `rgba(56, 182, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.fillStyle = "rgba(56, 182, 255, 0.25)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();
    window.addEventListener("resize", () => {
      resize();
      init();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-y-0 right-0 h-full w-1/2 opacity-60"
      aria-hidden="true"
    />
  );
}
```

- [ ] **Step 2: Create Hero component using NetworkMesh**

Create: `src/components/home/hero.tsx`

```tsx
import { Button } from "@/components/ui";
import { NetworkMesh } from "./network-mesh";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <NetworkMesh />

      <div className="container-narrow relative py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-display-lg md:text-display-xl text-brand-dark">
            Enterprise IT Security.
            <br />
            <span className="text-brand-blue">Personal Service.</span>
          </h1>
          <p className="mt-6 text-body-lg text-brand-gray-light md:text-xl md:leading-relaxed">
            Your business deserves enterprise-grade protection without the
            enterprise runaround. MYTE delivers managed IT and cybersecurity
            with a team that actually picks up the phone.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Get a Free Consultation
            </Button>
            <Button href="/calculator" variant="outline" size="lg">
              See What You Should Be Spending
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/components/home/hero.tsx
git commit -m "feat: add Hero section component"
```

---

### Task 12: Home Page - Remaining Sections

- [ ] **Step 1: Create TrustBar component**

Create: `src/components/home/trust-bar.tsx`

```tsx
export function TrustBar() {
  // Placeholder logos - replace with actual partner/cert SVGs in public/images/logos/
  const partners = [
    "Microsoft",
    "SentinelOne",
    "Datto",
    "CompTIA",
    "SOC2",
  ];

  return (
    <section className="border-y border-gray-100 bg-brand-surface py-8">
      <div className="container-narrow">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((name) => (
            <span
              key={name}
              className="text-body-sm font-medium uppercase tracking-widest text-gray-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Note: Text placeholders for now. Replace with actual grayscale SVG/PNG logos in `public/images/logos/` when available.

- [ ] **Step 2: Create ProblemSolution component**

Create: `src/components/home/problem-solution.tsx`

```tsx
import { UserX, ShieldAlert, DollarSign } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";

const problems = [
  {
    icon: UserX,
    headline: "Tired of Being a Ticket Number?",
    solution:
      "We assign dedicated engineers who know your business, your network, and your name.",
  },
  {
    icon: ShieldAlert,
    headline: "Worried About the Next Breach?",
    solution:
      "Our 24/7 Security Operations Center monitors your environment around the clock so you can sleep at night.",
  },
  {
    icon: DollarSign,
    headline: "Frustrated by Unpredictable IT Costs?",
    solution:
      "Flat-rate pricing means no surprise bills. You know exactly what you're paying every month.",
  },
];

export function ProblemSolution() {
  return (
    <Section background="light">
      <SectionHeading
        title="IT Should Help Your Business Grow, Not Hold It Back"
        subtitle="Most businesses settle for IT support that's reactive, impersonal, and unpredictable. It doesn't have to be that way."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {problems.map((item) => (
          <div key={item.headline} className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue-light">
              <item.icon className="h-7 w-7 text-brand-blue" />
            </div>
            <h3 className="text-display-sm text-brand-dark">{item.headline}</h3>
            <p className="mt-3 text-body-md text-brand-gray-light">
              {item.solution}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Create ServicesOverview component**

Create: `src/components/home/services-overview.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Card } from "@/components/ui";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <Section>
      <SectionHeading
        title="What We Do"
        subtitle="Comprehensive IT management and security, delivered by people who care about your business."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.slug} hover accentTop>
            <service.icon className="mb-4 h-8 w-8 text-brand-blue" />
            <h3 className="text-display-sm text-brand-dark">{service.title}</h3>
            <p className="mt-2 text-body-sm text-brand-gray-light">
              {service.shortDescription}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-brand-blue hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 4: Create CalculatorPromo component**

Create: `src/components/home/calculator-promo.tsx`

```tsx
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui";

export function CalculatorPromo() {
  return (
    <section className="bg-brand-dark section-padding">
      <div className="container-narrow">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-display-md text-white md:text-display-lg">
              Are You Overspending on IT?
            </h2>
            <p className="mt-4 text-body-lg text-gray-300">
              Most businesses either spend too much on the wrong things or too
              little on what matters. Our free IT Cost Calculator gives you a
              clear picture of what you should actually be investing in
              technology and security.
            </p>
            <Button href="/calculator" size="lg" className="mt-8">
              Calculate Your IT Costs
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-2xl border border-brand-blue/20 bg-brand-dark-light">
              <Calculator className="h-24 w-24 text-brand-blue opacity-60" />
              <div className="absolute -bottom-4 -right-4 rounded-brand bg-brand-blue px-4 py-2 text-body-sm font-semibold text-white shadow-lg">
                Free &amp; Instant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create SocialProof component**

Create: `src/components/home/social-proof.tsx`

```tsx
import { Section, SectionHeading } from "@/components/ui";
import { TestimonialCard, StatBar } from "@/components/shared";
import { testimonials } from "@/data/testimonials";

const stats = [
  { value: "200+", label: "Businesses Protected" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "< 15min", label: "Average Response Time" },
  { value: "98%", label: "Client Retention Rate" },
];

export function SocialProof() {
  return (
    <Section>
      <SectionHeading
        title="Trusted by Growing Businesses"
        subtitle="Don't just take our word for it. Here's what our clients say."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
      <div className="mt-16">
        <StatBar stats={stats} />
      </div>
    </Section>
  );
}
```

- [ ] **Step 6: Create IndustriesTeaser component**

Create: `src/components/home/industries-teaser.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Card } from "@/components/ui";
import { industries } from "@/data/industries";

export function IndustriesTeaser() {
  return (
    <Section background="light">
      <SectionHeading
        title="Industries We Understand"
        subtitle="Every industry has unique IT challenges. We bring the expertise to meet yours."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {industries.map((ind) => (
          <Card key={ind.name} hover>
            <ind.icon className="mb-4 h-8 w-8 text-brand-blue" />
            <h3 className="text-display-sm text-brand-dark">{ind.name}</h3>
            <p className="mt-2 text-body-sm text-brand-gray-light">
              {ind.challenge}
            </p>
            <div className="mt-3 inline-block rounded-full bg-brand-blue-light px-3 py-1 text-body-sm font-medium text-brand-blue">
              {ind.compliance}
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/industries"
          className="inline-flex items-center gap-1 font-medium text-brand-blue hover:underline"
        >
          Learn more about our industry expertise <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
```

- [ ] **Step 7: Create home barrel export**

Create: `src/components/home/index.ts`

```ts
export { Hero } from "./hero";
export { NetworkMesh } from "./network-mesh";
export { TrustBar } from "./trust-bar";
export { ProblemSolution } from "./problem-solution";
export { ServicesOverview } from "./services-overview";
export { CalculatorPromo } from "./calculator-promo";
export { SocialProof } from "./social-proof";
export { IndustriesTeaser } from "./industries-teaser";
```

- [ ] **Step 8: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/components/home/
git commit -m "feat: add all home page section components"
```

---

### Task 13: Assemble Home Page

- [ ] **Step 1: Wire up the home page**

Modify: `src/app/page.tsx`

```tsx
import {
  Hero,
  TrustBar,
  ProblemSolution,
  ServicesOverview,
  CalculatorPromo,
  SocialProof,
  IndustriesTeaser,
} from "@/components/home";
import { CTABlock } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <ServicesOverview />
      <CalculatorPromo />
      <SocialProof />
      <IndustriesTeaser />
      <CTABlock
        headline="Ready to Stop Worrying About IT?"
        description="Let's have a conversation about what your business actually needs. No sales pitch, no pressure - just honest advice."
        primaryCta={{ label: "Let's Talk", href: "/contact" }}
        secondaryCta={{
          label: "Calculate Your IT Costs",
          href: "/calculator",
        }}
      />
    </>
  );
}
```

- [ ] **Step 2: Verify the full home page renders**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

Check localhost:3000 - all sections should render in order: Hero, Trust Bar, Problem/Solution, Services, Calculator Promo, Social Proof, Industries, CTA.

- [ ] **Step 3: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/app/page.tsx
git commit -m "feat: assemble home page with all sections"
```

---

## Phase 4: Services Pages

### Task 14: Service Sub-Page Template & FAQ Component

- [ ] **Step 1: Create FAQ accordion component**

Create: `src/components/services/faq.tsx`

```tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQProps = {
  items: { question: string; answer: string }[];
};

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i} className="py-4">
          <button
            className="flex w-full items-center justify-between text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="pr-4 text-body-lg font-medium text-brand-dark">
              {item.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-brand-gray-light transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <p className="mt-3 pr-12 text-body-md text-brand-gray-light">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create ServicePageTemplate component**

Create: `src/components/services/service-page-template.tsx`

```tsx
import { Check } from "lucide-react";
import { Section, SectionHeading, Button } from "@/components/ui";
import { CTABlock } from "@/components/shared";
import { FAQ } from "./faq";
import type { Service } from "@/data/services";

type ServicePageTemplateProps = {
  service: Service;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-3xl">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue-light">
            <service.icon className="h-7 w-7 text-brand-blue" />
          </div>
          <h1 className="text-display-lg md:text-display-xl text-brand-dark">
            {service.title}
          </h1>
          <p className="mt-4 text-body-lg text-brand-gray-light md:text-xl">
            {service.description}
          </p>
        </div>
      </Section>

      {/* The Problem */}
      <Section background="light">
        <SectionHeading
          title="The Challenge"
          subtitle="Sound familiar? You're not alone."
          centered={false}
        />
        <div className="max-w-3xl space-y-6">
          {service.painPoints.map((point, i) => (
            <p key={i} className="text-body-lg text-brand-gray">
              {point}
            </p>
          ))}
        </div>
      </Section>

      {/* Our Approach */}
      <Section>
        <SectionHeading
          title="Our Approach"
          subtitle="Here's how MYTE handles it differently."
          centered={false}
        />
        <div className="grid gap-4 max-w-3xl">
          {service.approach.map((item, i) => (
            <div key={i} className="flex gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
              <p className="text-body-md text-brand-gray">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section background="light">
        <SectionHeading
          title="What's Included"
          subtitle="Everything you get when you partner with MYTE."
        />
        <div className="mx-auto grid max-w-3xl gap-3">
          {service.included.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-brand bg-white p-4 shadow-card"
            >
              <Check className="h-5 w-5 shrink-0 text-brand-green" />
              <span className="text-body-md text-brand-gray">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading title="Frequently Asked Questions" />
        <FAQ items={service.faq} />
      </Section>

      {/* CTA */}
      <CTABlock
        headline={`Let's Talk About Your ${service.title}`}
        description="Schedule a free consultation to discuss how we can help."
        primaryCta={{ label: "Get Started", href: "/contact" }}
        background="dark"
      />
    </>
  );
}
```

- [ ] **Step 3: Create services barrel export**

Create: `src/components/services/index.ts`

```ts
export { FAQ } from "./faq";
export { ServicePageTemplate } from "./service-page-template";
```

- [ ] **Step 4: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/components/services/
git commit -m "feat: add ServicePageTemplate and FAQ accordion components"
```

---

### Task 15: Services Landing Page & Sub-Pages

- [ ] **Step 1: Create services landing page**

Create: `src/app/services/page.tsx`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Card } from "@/components/ui";
import { CTABlock } from "@/components/shared";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Managed IT, cybersecurity, cloud solutions, and strategic consulting for growing businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive IT management and security built around your business - not ours."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug} hover accentTop className="p-8">
              <service.icon className="mb-4 h-10 w-10 text-brand-blue" />
              <h2 className="text-display-sm text-brand-dark">
                {service.title}
              </h2>
              <p className="mt-3 text-body-md text-brand-gray-light">
                {service.shortDescription}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-1 font-medium text-brand-blue hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>
      <CTABlock
        headline="Not Sure What You Need?"
        description="Tell us about your business and we'll recommend the right mix of services."
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
        background="dark"
      />
    </>
  );
}
```

- [ ] **Step 2: Create all 4 service sub-pages**

Create: `src/app/services/managed-it/page.tsx`

```tsx
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "managed-it")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function ManagedITPage() {
  return <ServicePageTemplate service={service} />;
}
```

Create: `src/app/services/cybersecurity/page.tsx`

```tsx
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "cybersecurity")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function CybersecurityPage() {
  return <ServicePageTemplate service={service} />;
}
```

Create: `src/app/services/cloud/page.tsx`

```tsx
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "cloud")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function CloudPage() {
  return <ServicePageTemplate service={service} />;
}
```

Create: `src/app/services/consulting/page.tsx`

```tsx
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "consulting")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.shortDescription,
};

export default function ConsultingPage() {
  return <ServicePageTemplate service={service} />;
}
```

- [ ] **Step 3: Verify all service pages render**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

Check: /services, /services/managed-it, /services/cybersecurity, /services/cloud, /services/consulting

- [ ] **Step 4: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/app/services/
git commit -m "feat: add services landing page and all 4 service sub-pages"
```

---

## Phase 5: About, Industries, Contact Pages

### Task 16: About Page

- [ ] **Step 1: Create about page**

Create: `src/app/about/page.tsx`

```tsx
import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import { StatBar, CTABlock } from "@/components/shared";
import { Shield, Users, Eye, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MYTE Technology delivers enterprise IT security with personal service. Learn why growing businesses choose us over big-box MSSPs.",
};

const values = [
  {
    icon: Shield,
    title: "Security-First Thinking",
    description:
      "Every recommendation we make starts with security. It's not an add-on - it's the foundation.",
  },
  {
    icon: Users,
    title: "Personal Accountability",
    description:
      "You'll know your engineer by name. When you call, a real person answers who already knows your environment.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "No hidden fees, no unnecessary upsells. You'll always know what you're paying for and why.",
  },
  {
    icon: Lightbulb,
    title: "Business-First Technology",
    description:
      "We don't recommend technology for technology's sake. Every solution must drive a real business outcome.",
  },
];

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "200+", label: "Clients Served" },
  { value: "15K+", label: "Endpoints Managed" },
  { value: "< 15min", label: "Avg Response Time" },
];

const comparison = [
  {
    label: "Support experience",
    big: "Ticket queue, escalation tiers, days to resolve",
    myte: "Direct access to your engineer, resolved in hours",
  },
  {
    label: "Account management",
    big: "Rotated reps who don't know your business",
    myte: "Dedicated team that knows your name and your network",
  },
  {
    label: "Pricing",
    big: "Complex contracts, hidden fees, surprise invoices",
    myte: "Flat-rate pricing, no surprises, ever",
  },
  {
    label: "Strategy",
    big: "Cookie-cutter recommendations from a playbook",
    myte: "Custom roadmaps aligned to your business goals",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-display-lg md:text-display-xl text-brand-dark">
            Your IT Team, Not Just Another Vendor
          </h1>
          <p className="mt-6 text-body-lg text-brand-gray-light md:text-xl">
            MYTE was built on a simple premise: businesses deserve IT partners
            who treat their problems like their own. We started because we saw
            too many companies trapped between overpriced corporate MSSPs and
            unreliable break-fix shops. There had to be a better way.
          </p>
        </div>
      </Section>

      {/* Stats */}
      <Section background="light">
        <StatBar stats={stats} />
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading
          title="What We Believe"
          subtitle="These aren't slogans on a wall. They're how we operate every day."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue-light">
                <v.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-display-sm text-brand-dark">{v.title}</h3>
                <p className="mt-2 text-body-md text-brand-gray-light">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* The MYTE Difference */}
      <Section background="light">
        <SectionHeading
          title="The MYTE Difference"
          subtitle="What working with us actually looks like compared to a big-box MSSP."
        />
        <div className="mx-auto max-w-4xl space-y-6">
          {comparison.map((row) => (
            <div
              key={row.label}
              className="grid gap-4 rounded-brand bg-white p-6 shadow-card md:grid-cols-3"
            >
              <div className="font-semibold text-brand-dark">{row.label}</div>
              <div className="flex items-start gap-2 text-body-sm text-brand-gray-light">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                {row.big}
              </div>
              <div className="flex items-start gap-2 text-body-sm text-brand-gray">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                {row.myte}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock
        headline="Ready to Work With a Team That Actually Picks Up the Phone?"
        primaryCta={{ label: "Let's Talk", href: "/contact" }}
        background="dark"
      />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/app/about/page.tsx
git commit -m "feat: add About page with values, stats, and MYTE difference comparison"
```

---

### Task 17: Industries Page

- [ ] **Step 1: Create industries page**

Create: `src/app/industries/page.tsx`

```tsx
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section, SectionHeading, Card } from "@/components/ui";
import { CTABlock } from "@/components/shared";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "MYTE Technology serves healthcare, legal, and financial services with industry-specific IT security and compliance expertise.",
};

export default function IndustriesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          title="We Speak Your Industry's Language"
          subtitle="Every industry has unique compliance requirements and technology challenges. We bring the expertise to meet yours."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {industries.map((ind) => (
            <Card key={ind.name} className="p-8">
              <ind.icon className="mb-4 h-10 w-10 text-brand-blue" />
              <h2 className="text-display-sm text-brand-dark">{ind.name}</h2>
              <div className="mt-2 inline-block rounded-full bg-brand-blue-light px-3 py-1 text-body-sm font-medium text-brand-blue">
                {ind.compliance}
              </div>
              <p className="mt-4 text-body-md text-brand-gray-light">
                {ind.challenge}
              </p>
              <ul className="mt-4 space-y-2">
                {ind.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-body-sm text-brand-gray">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
      <CTABlock
        headline="Don't See Your Industry?"
        description="We work with businesses of all types. Let's talk about your specific needs."
        primaryCta={{ label: "Get a Consultation", href: "/contact" }}
      />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/app/industries/page.tsx
git commit -m "feat: add Industries page with healthcare, legal, financial cards"
```

---

### Task 18: Contact Page with Server Action

- [ ] **Step 1: Create contact form server action**

Create: `src/actions/contact.ts`

```ts
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(10, "Please provide some details"),
  honeypot: z.string().max(0),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company: formData.get("company") as string,
    interest: formData.get("interest") as string,
    message: formData.get("message") as string,
    honeypot: formData.get("website") as string ?? "",
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.issues[0].message };
  }

  // Spam bot caught by honeypot
  if (result.data.honeypot) {
    return { success: true };
  }

  // TODO: Send email via SMTP2GO or your preferred service
  // For now, log to server console as proof of concept
  console.log("Contact form submission:", result.data);

  return { success: true };
}
```

- [ ] **Step 2: Create contact page**

Create: `src/app/contact/page.tsx`

```tsx
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/ui";
import { contactInfo } from "@/data/navigation";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MYTE Technology. Free consultations, no sales pitch - just honest advice about your IT needs.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Form */}
        <div>
          <h1 className="text-display-lg text-brand-dark">Let&apos;s Talk</h1>
          <p className="mt-4 text-body-lg text-brand-gray-light">
            No sales pitch. Just a conversation about what your business needs.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:pl-12">
          <div className="rounded-brand bg-brand-surface p-8">
            <h2 className="text-display-sm text-brand-dark">Get in Touch</h2>
            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-brand-blue" />
                <div>
                  <p className="font-medium text-brand-dark">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-body-md text-brand-gray-light hover:text-brand-blue">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 shrink-0 text-brand-blue" />
                <div>
                  <p className="font-medium text-brand-dark">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-body-md text-brand-gray-light hover:text-brand-blue">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-brand-blue" />
                <div>
                  <p className="font-medium text-brand-dark">Location</p>
                  <p className="text-body-md text-brand-gray-light">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-5 w-5 shrink-0 text-brand-blue" />
                <div>
                  <p className="font-medium text-brand-dark">Business Hours</p>
                  <p className="text-body-md text-brand-gray-light">{contactInfo.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-brand border border-brand-blue/20 bg-brand-blue-light p-4">
              <p className="text-body-sm font-medium text-brand-blue">
                We respond within 1 business hour during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Create ContactForm client component**

Create: `src/app/contact/contact-form.tsx`

```tsx
"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/actions/contact";
import { Button } from "@/components/ui";

const interests = [
  "Managed IT Services",
  "Cybersecurity",
  "Cloud Solutions",
  "IT Consulting",
  "Not sure - need guidance",
];

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    { success: false }
  );

  if (state.success) {
    return (
      <div className="rounded-brand bg-brand-blue-light p-8 text-center">
        <p className="text-display-sm text-brand-dark">Thank you!</p>
        <p className="mt-2 text-body-md text-brand-gray-light">
          We&apos;ll be in touch within 1 business hour.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-body-sm font-medium text-brand-dark">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-brand border border-gray-200 px-4 py-3 text-body-md focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-body-sm font-medium text-brand-dark">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-brand border border-gray-200 px-4 py-3 text-body-md focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-body-sm font-medium text-brand-dark">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-brand border border-gray-200 px-4 py-3 text-body-md focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-body-sm font-medium text-brand-dark">
            Company *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full rounded-brand border border-gray-200 px-4 py-3 text-body-md focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-1 block text-body-sm font-medium text-brand-dark">
          What are you interested in? *
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full rounded-brand border border-gray-200 px-4 py-3 text-body-md focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
        >
          <option value="">Select an option</option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-body-sm font-medium text-brand-dark">
          Tell us about your needs *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-brand border border-gray-200 px-4 py-3 text-body-md focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
        />
      </div>

      {state.error && (
        <p className="text-body-sm text-red-500">{state.error}</p>
      )}

      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={pending}>
        {pending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
```

- [ ] **Step 4: Verify contact page renders and form works**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

Check localhost:3000/contact - form should render, submit should show success state.

- [ ] **Step 5: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/actions/contact.ts src/app/contact/
git commit -m "feat: add Contact page with validated form and honeypot spam prevention"
```

---

## Phase 6: IT Cost Calculator

### Task 19: Calculator Logic

- [ ] **Step 1: Create calculator pricing engine**

Create: `src/lib/calculator.ts`

```ts
export type CalculatorInputs = {
  employees: string;
  industry: string;
  currentSetup: string;
  workstations: number;
  cloudServices: string;
  hasServers: boolean;
  currentSpend: string;
  compliance: string[];
  hadIncident: boolean;
  hasDisasterRecovery: boolean;
};

export type CalculatorResult = {
  estimatedMonthly: { low: number; high: number };
  breakdown: {
    category: string;
    low: number;
    high: number;
    description: string;
  }[];
  industryAverage: number;
  recommendation: string;
};

const employeeMultiplier: Record<string, number> = {
  "1-10": 1,
  "11-25": 2.2,
  "26-50": 4,
  "51-100": 7,
  "100+": 12,
};

export function calculateITCosts(inputs: CalculatorInputs): CalculatorResult {
  const multiplier = employeeMultiplier[inputs.employees] ?? 1;
  const basePerUser = 150; // $/user/month baseline

  // Support & management
  const supportLow = Math.round(basePerUser * multiplier * 0.4);
  const supportHigh = Math.round(basePerUser * multiplier * 0.6);

  // Security
  const securityBase = inputs.compliance.length > 0 ? 1.4 : 1;
  const incidentPenalty = inputs.hadIncident ? 1.3 : 1;
  const securityLow = Math.round(basePerUser * multiplier * 0.25 * securityBase * incidentPenalty);
  const securityHigh = Math.round(basePerUser * multiplier * 0.4 * securityBase * incidentPenalty);

  // Cloud & infrastructure
  const serverAddon = inputs.hasServers ? 1.2 : 1;
  const cloudLow = Math.round(basePerUser * multiplier * 0.15 * serverAddon);
  const cloudHigh = Math.round(basePerUser * multiplier * 0.25 * serverAddon);

  // Backup & DR
  const drBase = inputs.hasDisasterRecovery ? 0.8 : 1.2;
  const backupLow = Math.round(basePerUser * multiplier * 0.1 * drBase);
  const backupHigh = Math.round(basePerUser * multiplier * 0.15 * drBase);

  const totalLow = supportLow + securityLow + cloudLow + backupLow;
  const totalHigh = supportHigh + securityHigh + cloudHigh + backupHigh;
  const industryAverage = Math.round((totalLow + totalHigh) / 2 * 1.15);

  // Generate recommendation
  let recommendation = "";
  if (!inputs.hasDisasterRecovery) {
    recommendation =
      "Your business lacks a disaster recovery plan. This is the single highest-risk gap we see. A ransomware attack or natural disaster could mean permanent data loss.";
  } else if (inputs.hadIncident) {
    recommendation =
      "Having experienced a security incident, your priority should be a comprehensive security assessment to identify and close the vulnerabilities that were exploited.";
  } else if (inputs.compliance.length > 0) {
    recommendation = `With ${inputs.compliance.join(", ")} compliance requirements, your IT investment should prioritize security controls, audit readiness, and documentation.`;
  } else {
    recommendation =
      "Your profile suggests a balanced approach: reliable managed IT as the foundation, with proactive security monitoring to protect against growing threats.";
  }

  return {
    estimatedMonthly: { low: totalLow, high: totalHigh },
    breakdown: [
      {
        category: "IT Support & Management",
        low: supportLow,
        high: supportHigh,
        description: "Help desk, monitoring, patch management, device lifecycle",
      },
      {
        category: "Cybersecurity",
        low: securityLow,
        high: securityHigh,
        description: "Endpoint protection, SOC monitoring, email security",
      },
      {
        category: "Cloud & Infrastructure",
        low: cloudLow,
        high: cloudHigh,
        description: "Cloud management, server administration, networking",
      },
      {
        category: "Backup & Disaster Recovery",
        low: backupLow,
        high: backupHigh,
        description: "Data backup, business continuity, recovery testing",
      },
    ],
    industryAverage,
    recommendation,
  };
}
```

- [ ] **Step 2: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/lib/calculator.ts
git commit -m "feat: add IT cost calculator pricing engine"
```

---

### Task 20: Calculator UI

- [ ] **Step 1: Create calculator server action for lead capture**

Create: `src/actions/calculator.ts`

```ts
"use server";

import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  phone: z.string().optional(),
});

export type LeadFormState = {
  success: boolean;
  error?: string;
};

export async function submitCalculatorLead(
  _prev: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const result = leadSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    phone: formData.get("phone"),
  });

  if (!result.success) {
    return { success: false, error: result.error.issues[0].message };
  }

  // TODO: Send to CRM / email
  console.log("Calculator lead:", result.data);

  return { success: true };
}
```

- [ ] **Step 2: Create CalculatorForm client component**

Create: `src/components/calculator/calculator-form.tsx`

```tsx
"use client";

import { useState, useActionState } from "react";
import { Button } from "@/components/ui";
import {
  calculateITCosts,
  type CalculatorInputs,
  type CalculatorResult,
} from "@/lib/calculator";
import { submitCalculatorLead, type LeadFormState } from "@/actions/calculator";

const steps = ["Company Profile", "Current Environment", "Security & Compliance", "Your Results"];

const employeeRanges = ["1-10", "11-25", "26-50", "51-100", "100+"];
const industryOptions = [
  "Healthcare",
  "Legal",
  "Financial Services",
  "Professional Services",
  "Manufacturing",
  "Retail",
  "Nonprofit",
  "Other",
];
const setupOptions = ["In-house IT team", "Outsourced", "Hybrid", "No dedicated IT"];
const cloudOptions = ["Microsoft 365", "Google Workspace", "Other", "None"];
const spendRanges = ["Under $1,000", "$1,000 - $3,000", "$3,000 - $5,000", "$5,000 - $10,000", "Over $10,000", "Not sure"];
const complianceOptions = ["HIPAA", "PCI-DSS", "SOC2", "CMMC", "None", "Not sure"];

export function CalculatorForm() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [gateUnlocked, setGateUnlocked] = useState(false);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: "",
    industry: "",
    currentSetup: "",
    workstations: 10,
    cloudServices: "",
    hasServers: false,
    currentSpend: "",
    compliance: [],
    hadIncident: false,
    hasDisasterRecovery: false,
  });

  const [leadState, leadAction, leadPending] = useActionState<LeadFormState, FormData>(
    async (prev, formData) => {
      const result = await submitCalculatorLead(prev, formData);
      if (result.success) setGateUnlocked(true);
      return result;
    },
    { success: false }
  );

  function update(partial: Partial<CalculatorInputs>) {
    setInputs((prev) => ({ ...prev, ...partial }));
  }

  function toggleCompliance(val: string) {
    setInputs((prev) => ({
      ...prev,
      compliance: prev.compliance.includes(val)
        ? prev.compliance.filter((c) => c !== val)
        : [...prev.compliance.filter((c) => c !== "None" && c !== "Not sure"), val],
    }));
  }

  function handleNext() {
    if (step < 2) {
      setStep(step + 1);
    } else if (step === 2) {
      setResult(calculateITCosts(inputs));
      setStep(3);
    }
  }

  const inputClasses =
    "w-full rounded-brand border border-gray-200 px-4 py-3 text-body-md focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue";

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-8 flex gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex-1">
            <div
              className={`h-1 rounded-full ${
                i <= step ? "bg-brand-blue" : "bg-gray-200"
              }`}
            />
            <p
              className={`mt-2 text-body-sm ${
                i <= step ? "font-medium text-brand-dark" : "text-gray-400"
              }`}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Step 1: Company Profile */}
      {step === 0 && (
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-body-sm font-medium text-brand-dark">
              Number of employees
            </label>
            <div className="flex flex-wrap gap-2">
              {employeeRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => update({ employees: range })}
                  className={`rounded-brand border px-4 py-2 text-body-sm transition-colors ${
                    inputs.employees === range
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-gray-200 hover:border-brand-blue"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-body-sm font-medium text-brand-dark">
              Industry
            </label>
            <select
              value={inputs.industry}
              onChange={(e) => update({ industry: e.target.value })}
              className={inputClasses}
            >
              <option value="">Select industry</option>
              {industryOptions.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-body-sm font-medium text-brand-dark">
              Current IT setup
            </label>
            <div className="flex flex-wrap gap-2">
              {setupOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => update({ currentSetup: opt })}
                  className={`rounded-brand border px-4 py-2 text-body-sm transition-colors ${
                    inputs.currentSetup === opt
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-gray-200 hover:border-brand-blue"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Current Environment */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-body-sm font-medium text-brand-dark">
              Number of workstations / devices
            </label>
            <input
              type="number"
              min={1}
              value={inputs.workstations}
              onChange={(e) => update({ workstations: parseInt(e.target.value) || 1 })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className="mb-2 block text-body-sm font-medium text-brand-dark">
              Cloud services
            </label>
            <div className="flex flex-wrap gap-2">
              {cloudOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => update({ cloudServices: opt })}
                  className={`rounded-brand border px-4 py-2 text-body-sm transition-colors ${
                    inputs.cloudServices === opt
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-gray-200 hover:border-brand-blue"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-body-sm font-medium text-brand-dark">
              On-premises servers?
            </label>
            <div className="flex gap-4">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  onClick={() => update({ hasServers: val })}
                  className={`rounded-brand border px-6 py-2 text-body-sm transition-colors ${
                    inputs.hasServers === val
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-gray-200 hover:border-brand-blue"
                  }`}
                >
                  {val ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-body-sm font-medium text-brand-dark">
              Current monthly IT spend
            </label>
            <select
              value={inputs.currentSpend}
              onChange={(e) => update({ currentSpend: e.target.value })}
              className={inputClasses}
            >
              <option value="">Select range</option>
              {spendRanges.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 3: Security & Compliance */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-body-sm font-medium text-brand-dark">
              Compliance requirements (select all that apply)
            </label>
            <div className="flex flex-wrap gap-2">
              {complianceOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => toggleCompliance(opt)}
                  className={`rounded-brand border px-4 py-2 text-body-sm transition-colors ${
                    inputs.compliance.includes(opt)
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-gray-200 hover:border-brand-blue"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-body-sm font-medium text-brand-dark">
              Security incident in the past 12 months?
            </label>
            <div className="flex gap-4">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  onClick={() => update({ hadIncident: val })}
                  className={`rounded-brand border px-6 py-2 text-body-sm transition-colors ${
                    inputs.hadIncident === val
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-gray-200 hover:border-brand-blue"
                  }`}
                >
                  {val ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-body-sm font-medium text-brand-dark">
              Do you have a disaster recovery plan?
            </label>
            <div className="flex gap-4">
              {[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => update({ hasDisasterRecovery: opt.value })}
                  className={`rounded-brand border px-6 py-2 text-body-sm transition-colors ${
                    inputs.hasDisasterRecovery === opt.value
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-gray-200 hover:border-brand-blue"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Results (Gated) */}
      {step === 3 && result && !gateUnlocked && (
        <div className="rounded-brand border border-gray-200 p-8">
          <h3 className="text-display-sm text-brand-dark">
            Your results are ready
          </h3>
          <p className="mt-2 text-body-md text-brand-gray-light">
            Enter your details below to see your personalized IT cost estimate.
          </p>
          <form action={leadAction} className="mt-6 space-y-4">
            <input name="name" placeholder="Full name *" required className={inputClasses} />
            <input name="email" type="email" placeholder="Work email *" required className={inputClasses} />
            <input name="company" placeholder="Company name *" required className={inputClasses} />
            <input name="phone" type="tel" placeholder="Phone (optional)" className={inputClasses} />
            {leadState.error && (
              <p className="text-body-sm text-red-500">{leadState.error}</p>
            )}
            <Button type="submit" size="lg" className="w-full" disabled={leadPending}>
              {leadPending ? "Unlocking..." : "See My Results"}
            </Button>
          </form>
        </div>
      )}

      {/* Results Display */}
      {step === 3 && result && gateUnlocked && (
        <div className="space-y-8">
          <div className="rounded-brand bg-brand-blue-light p-8 text-center">
            <p className="text-body-md text-brand-gray-light">
              Estimated Monthly IT Investment
            </p>
            <p className="mt-2 text-display-lg font-bold text-brand-dark">
              ${result.estimatedMonthly.low.toLocaleString()} - ${result.estimatedMonthly.high.toLocaleString()}
            </p>
            <p className="mt-1 text-body-sm text-brand-gray-light">
              Industry average: ${result.industryAverage.toLocaleString()}/mo
            </p>
          </div>

          <div>
            <h3 className="text-display-sm text-brand-dark">Cost Breakdown</h3>
            <div className="mt-4 space-y-3">
              {result.breakdown.map((item) => (
                <div
                  key={item.category}
                  className="flex items-center justify-between rounded-brand bg-brand-surface p-4"
                >
                  <div>
                    <p className="font-medium text-brand-dark">{item.category}</p>
                    <p className="text-body-sm text-brand-gray-light">
                      {item.description}
                    </p>
                  </div>
                  <p className="shrink-0 font-semibold text-brand-dark">
                    ${item.low.toLocaleString()} - ${item.high.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-brand border-l-4 border-brand-blue bg-brand-surface p-6">
            <h3 className="font-semibold text-brand-dark">Our Recommendation</h3>
            <p className="mt-2 text-body-md text-brand-gray-light">
              {result.recommendation}
            </p>
          </div>

          <div className="text-center">
            <p className="text-body-lg text-brand-gray-light">
              Want a detailed, personalized assessment?
            </p>
            <Button href="/contact" size="lg" className="mt-4">
              Schedule a Free 15-Minute Call
            </Button>
          </div>
        </div>
      )}

      {/* Navigation */}
      {step < 3 && (
        <div className="mt-8 flex justify-between">
          <Button
            variant="ghost"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
          >
            Back
          </Button>
          <Button onClick={handleNext}>
            {step === 2 ? "Calculate" : "Next"}
          </Button>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Create calculator page**

Create: `src/app/calculator/page.tsx`

```tsx
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui";
import { CalculatorForm } from "@/components/calculator/calculator-form";

export const metadata: Metadata = {
  title: "IT Cost Calculator",
  description:
    "Find out what your business should be investing in IT and cybersecurity. Free, instant results.",
};

export default function CalculatorPage() {
  return (
    <Section>
      <SectionHeading
        title="IT Cost Calculator"
        subtitle="Answer a few questions about your business and get an instant estimate of what you should be investing in IT and security."
      />
      <CalculatorForm />
    </Section>
  );
}
```

- [ ] **Step 4: Create barrel export**

Create: `src/components/calculator/index.ts`

```ts
export { CalculatorForm } from "./calculator-form";
```

- [ ] **Step 5: Verify calculator works end-to-end**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

Check localhost:3000/calculator - walk through all 4 steps, verify lead gate works, results display correctly.

- [ ] **Step 6: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/lib/calculator.ts src/actions/calculator.ts src/components/calculator/ src/app/calculator/
git commit -m "feat: add interactive IT Cost Calculator with lead capture"
```

---

## Phase 7: Blog System

### Task 21: MDX Blog Infrastructure

- [ ] **Step 1: Create blog utilities**

Create: `src/lib/blog.ts`

```ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  content: string;
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);

      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        date: data.date ?? "",
        category: data.category ?? "Uncategorized",
        author: data.author ?? "MYTE Team",
        readingTime: rt.text,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    category: data.category ?? "Uncategorized",
    author: data.author ?? "MYTE Team",
    readingTime: rt.text,
    content,
  };
}
```

- [ ] **Step 2: Create a sample blog post**

Create: `src/content/blog/why-smbs-need-cybersecurity.mdx`

```mdx
---
title: "Why Every Small Business Needs a Cybersecurity Strategy in 2026"
excerpt: "43% of cyberattacks target small businesses. Here's what you need to know to protect yours."
date: "2026-04-16"
category: "Cybersecurity Tips"
author: "MYTE Team"
---

## The Threat Is Real - And It's Growing

If you think cybercriminals only target large corporations, think again. According to recent data, 43% of all cyberattacks target small businesses, and 60% of those that suffer a breach go out of business within six months.

The reality is that small businesses are often the easiest targets. They have valuable data - customer information, financial records, intellectual property - but they rarely have the security infrastructure of larger organizations.

## What Does a Cybersecurity Strategy Look Like?

A practical cybersecurity strategy for a small business doesn't have to be complex or expensive. It starts with the fundamentals:

**1. Endpoint Protection**

Every device that connects to your network is a potential entry point. Modern endpoint detection and response (EDR) goes far beyond traditional antivirus software, using AI to detect and stop threats in real time.

**2. Email Security**

Over 90% of cyberattacks start with a phishing email. Advanced email filtering, combined with regular security awareness training for your staff, dramatically reduces this risk.

**3. Backup and Recovery**

If the worst happens, your ability to recover quickly depends on having reliable, tested backups. This means automated daily backups, stored off-site, with regular recovery testing.

**4. Employee Training**

Your team is both your biggest vulnerability and your first line of defense. Regular, practical security awareness training turns potential weak points into active defenders.

## The Cost of Doing Nothing

The average cost of a data breach for a small business is $120,000. For many businesses, that's an existential threat. Compare that to the cost of proactive security measures - typically $150-300 per user per month - and the math is clear.

## Getting Started

You don't need to do everything at once. Start with an assessment of where you are today, identify the biggest gaps, and build a roadmap to close them.

[Contact MYTE for a free cybersecurity assessment](/contact) and find out where your business stands.
```

- [ ] **Step 3: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/lib/blog.ts src/content/blog/
git commit -m "feat: add MDX blog utilities and sample post"
```

---

### Task 22: Blog Pages

- [ ] **Step 1: Create PostCard component**

Create: `src/components/blog/post-card.tsx`

```tsx
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { Card } from "@/components/ui";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Card hover className="flex flex-col">
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full bg-brand-blue-light px-3 py-1 text-body-sm font-medium text-brand-blue">
          {post.category}
        </span>
        <span className="text-body-sm text-brand-gray-light">
          {post.readingTime}
        </span>
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-display-sm text-brand-dark hover:text-brand-blue transition-colors">
          {post.title}
        </h2>
      </Link>
      <p className="mt-2 flex-1 text-body-md text-brand-gray-light">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-body-sm text-brand-gray-light">
        <span>{post.author}</span>
        <time>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
      </div>
    </Card>
  );
}
```

- [ ] **Step 2: Create blog listing page**

Create: `src/app/blog/page.tsx`

```tsx
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui";
import { PostCard } from "@/components/blog/post-card";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "IT security insights, technology strategy, and industry news for business owners.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section>
      <SectionHeading
        title="Blog"
        subtitle="Practical insights on IT security, technology strategy, and running a more resilient business."
      />
      {posts.length === 0 ? (
        <p className="text-center text-body-lg text-brand-gray-light">
          Posts coming soon.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Section>
  );
}
```

- [ ] **Step 3: Create individual blog post page**

Create: `src/app/blog/[slug]/page.tsx`

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Section, Button } from "@/components/ui";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-body-sm font-medium text-brand-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-brand-blue-light px-3 py-1 text-body-sm font-medium text-brand-blue">
            {post.category}
          </span>
          <span className="text-body-sm text-brand-gray-light">
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-display-lg text-brand-dark">{post.title}</h1>

        <div className="mt-4 flex items-center gap-2 text-body-sm text-brand-gray-light">
          <span>{post.author}</span>
          <span>&middot;</span>
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>

        <article className="prose prose-lg prose-gray mt-10 max-w-none prose-headings:text-brand-dark prose-a:text-brand-blue">
          <MDXRemote source={post.content} />
        </article>

        <div className="mt-12 rounded-brand bg-brand-surface p-8 text-center">
          <p className="text-display-sm text-brand-dark">
            Want help implementing this?
          </p>
          <p className="mt-2 text-body-md text-brand-gray-light">
            Our team can help you put these ideas into practice.
          </p>
          <Button href="/contact" className="mt-4">
            Talk to Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
```

- [ ] **Step 4: Create blog barrel export**

Create: `src/components/blog/index.ts`

```ts
export { PostCard } from "./post-card";
```

- [ ] **Step 5: Verify blog pages**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

Check localhost:3000/blog and localhost:3000/blog/why-smbs-need-cybersecurity

- [ ] **Step 6: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/components/blog/ src/app/blog/
git commit -m "feat: add blog listing and post pages with MDX rendering"
```

---

## Phase 8: Legal Pages, SEO, Security & Polish

### Task 23: Legal Pages

- [ ] **Step 1: Create privacy policy page**

Create: `src/app/privacy/page.tsx`

```tsx
import type { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="prose prose-gray mx-auto max-w-3xl prose-headings:text-brand-dark">
        <h1>Privacy Policy</h1>
        <p className="lead">Last updated: April 16, 2026</p>

        <h2>Information We Collect</h2>
        <p>
          When you use our website or services, we may collect information you
          provide directly, including your name, email address, phone number,
          company name, and any messages you send through our contact forms or
          IT Cost Calculator.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide requested services</li>
          <li>Send you relevant information about our services</li>
          <li>Improve our website and user experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share information with trusted service providers who
          assist us in operating our website and conducting our business, subject
          to confidentiality agreements.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this privacy policy, please contact us at{" "}
          <a href="mailto:privacy@mytetech.com">privacy@mytetech.com</a>.
        </p>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Create terms of service page**

Create: `src/app/terms/page.tsx`

```tsx
import type { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <Section>
      <div className="prose prose-gray mx-auto max-w-3xl prose-headings:text-brand-dark">
        <h1>Terms of Service</h1>
        <p className="lead">Last updated: April 16, 2026</p>

        <h2>Use of Website</h2>
        <p>
          By accessing and using the MYTE Technology website, you agree to be
          bound by these terms of service. The content on this website is for
          general informational purposes only.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and
          software, is the property of MYTE Technology and is protected by
          applicable intellectual property laws.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          MYTE Technology shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of this
          website or reliance on any information provided herein.
        </p>

        <h2>IT Cost Calculator Disclaimer</h2>
        <p>
          The IT Cost Calculator provides estimates for informational purposes
          only. Actual costs may vary based on your specific requirements,
          environment, and chosen solutions. Calculator results do not
          constitute a quote or binding offer.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use
          of the website following changes constitutes acceptance of the revised
          terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms may be directed to{" "}
          <a href="mailto:legal@mytetech.com">legal@mytetech.com</a>.
        </p>
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Create custom 404 page**

Create: `src/app/not-found.tsx`

```tsx
import { Section, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center">
        <p className="text-display-xl font-bold text-brand-blue">404</p>
        <h1 className="mt-4 text-display-lg text-brand-dark">Page Not Found</h1>
        <p className="mt-4 text-body-lg text-brand-gray-light">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </div>
    </Section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/app/privacy/ src/app/terms/ src/app/not-found.tsx
git commit -m "feat: add Privacy Policy, Terms of Service, and custom 404 page"
```

---

### Task 24: SEO, Sitemap, Security Headers

- [ ] **Step 1: Create sitemap config**

Create: `next-sitemap.config.js`

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mytetech.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Higher priority for key pages
    const highPriority = ["/", "/services", "/contact", "/calculator"];
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: highPriority.includes(path) ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
```

- [ ] **Step 2: Add postbuild script to package.json**

In `package.json`, add to the `"scripts"` section:

```json
"postbuild": "next-sitemap"
```

- [ ] **Step 3: Create SEO metadata helper**

Create: `src/lib/metadata.ts`

```ts
import type { Metadata } from "next";

const baseUrl = "https://mytetech.com";

export function createMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | MYTE Technology`,
      description,
      url: `${baseUrl}${path}`,
      siteName: "MYTE Technology",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | MYTE Technology`,
      description,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  };
}
```

- [ ] **Step 4: Add security headers to next.config**

Modify: `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 5: Verify build succeeds**

```bash
cd "c:/dev/projects/MYTE"
npm run build
```

Expected: Build succeeds with no errors. Sitemap generated in public/.

- [ ] **Step 6: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add next-sitemap.config.js next.config.ts src/lib/metadata.ts package.json
git commit -m "feat: add sitemap generation, SEO metadata helper, and security headers"
```

---

### Task 25: Final Build Verification & Push

- [ ] **Step 1: Run full build**

```bash
cd "c:/dev/projects/MYTE"
npm run build
```

Expected: Clean build, no errors, all pages generated.

- [ ] **Step 2: Run type check**

```bash
cd "c:/dev/projects/MYTE"
npx tsc --noEmit
```

Expected: No type errors.

- [ ] **Step 3: Push to GitHub to trigger Vercel deploy**

```bash
cd "c:/dev/projects/MYTE"
git push origin main
```

Expected: Push succeeds. Vercel auto-detects the push and starts a production deployment.

- [ ] **Step 4: Monitor Vercel deployment**

```bash
curl -s "https://api.vercel.com/v6/deployments?projectId=myte-website&teamId=$VERCEL_CORTEX_SITES_TEAM_ID&limit=1" \
  -H "Authorization: Bearer $VERCEL_CORTEX_SITES_TOKEN"
```

Wait for deployment state to show `READY`.

- [ ] **Step 5: Verify live site**

Visit https://mytetech.com - all pages should load, forms should work, calculator should be functional.

- [ ] **Step 6: Run Lighthouse audit**

In Chrome DevTools, run Lighthouse on the home page. Target: 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO.

---

## Phase 9: Analytics, OG Images, Structured Data, Rate Limiting, Redirects

### Task 26: Analytics (Vercel Analytics + GA4)

- [ ] **Step 1: Add Vercel Analytics to root layout**

Modify: `src/app/layout.tsx` - add the Analytics component:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "MYTE Technology | Enterprise IT Security. Personal Service.",
    template: "%s | MYTE Technology",
  },
  description:
    "MYTE Technology delivers enterprise-grade managed IT and cybersecurity for growing businesses. Real people. Real protection. No ticket queues.",
  metadataBase: new URL("https://mytetech.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Create GA4 script component**

Create: `src/components/layout/google-analytics.tsx`

```tsx
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
```

- [ ] **Step 3: Add GoogleAnalytics to root layout**

Modify: `src/app/layout.tsx` - add inside `<body>` after `<Analytics />`:

```tsx
import { GoogleAnalytics } from "@/components/layout/google-analytics";
// ... existing imports

// Inside body, after <Analytics />:
<GoogleAnalytics />
```

- [ ] **Step 4: Add GA4 env var placeholder**

Create: `.env.local`

```
# Google Analytics 4 - set to your GA measurement ID
NEXT_PUBLIC_GA_ID=
```

Add `.env.local` to `.gitignore` if not already present.

Create: `.env.example`

```
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

- [ ] **Step 5: Update layout barrel export**

Modify: `src/components/layout/index.ts`

```ts
export { Header } from "./header";
export { Footer } from "./footer";
export { GoogleAnalytics } from "./google-analytics";
```

- [ ] **Step 6: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/app/layout.tsx src/components/layout/ .env.example
git commit -m "feat: add Vercel Analytics and Google Analytics 4 integration"
```

---

### Task 27: Dynamic Open Graph Images

- [ ] **Step 1: Create OG image route**

Create: `src/app/api/og/route.tsx`

```tsx
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? "MYTE Technology";
  const subtitle =
    searchParams.get("subtitle") ??
    "Enterprise IT Security. Personal Service.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1a1a2e",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#38b6ff",
            letterSpacing: "0.05em",
            marginBottom: "40px",
          }}
        >
          MYTE
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#9ca3af",
            marginTop: "20px",
            maxWidth: "700px",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            fontSize: "18px",
            color: "#545454",
          }}
        >
          mytetech.com
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#38b6ff",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

- [ ] **Step 2: Update metadata helper to use OG route**

Modify: `src/lib/metadata.ts`

```ts
import type { Metadata } from "next";

const baseUrl = "https://mytetech.com";

export function createMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const ogUrl = `${baseUrl}/api/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description)}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | MYTE Technology`,
      description,
      url: `${baseUrl}${path}`,
      siteName: "MYTE Technology",
      type: "website",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | MYTE Technology`,
      description,
      images: [ogUrl],
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  };
}
```

- [ ] **Step 3: Verify OG image renders**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

Visit: http://localhost:3000/api/og?title=Managed%20IT%20Services&subtitle=Proactive%20IT%20management

Expected: A branded 1200x630 image with the MYTE logo, title, and subtitle on a dark background.

- [ ] **Step 4: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/app/api/og/route.tsx src/lib/metadata.ts
git commit -m "feat: add dynamic Open Graph image generation"
```

---

### Task 28: LocalBusiness Structured Data (JSON-LD)

- [ ] **Step 1: Create structured data component**

Create: `src/components/layout/structured-data.tsx`

```tsx
import { contactInfo } from "@/data/navigation";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MYTE Technology",
    description:
      "Enterprise-grade managed IT and cybersecurity services for growing businesses.",
    url: "https://mytetech.com",
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Your City",
      addressRegion: "State",
      addressCountry: "US",
    },
    sameAs: [
      "https://linkedin.com/company/myte-technology",
      "https://twitter.com/mytetech",
      "https://facebook.com/mytetech",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed IT Services",
            description:
              "Proactive IT management including help desk, monitoring, and infrastructure.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cybersecurity",
            description:
              "Enterprise-grade security: endpoint protection, SOC monitoring, and incident response.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Solutions",
            description:
              "Cloud migration, management, and optimization for Microsoft 365, Azure, and AWS.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Consulting & Strategy",
            description:
              "Technology roadmaps, vCIO advisory, and IT budget planning.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

Note: `dangerouslySetInnerHTML` is the standard React/Next.js pattern for JSON-LD injection. The content is entirely hardcoded trusted data - no user input involved.

- [ ] **Step 2: Add to root layout**

Modify: `src/app/layout.tsx` - add `<StructuredData />` inside `<body>`, after `<GoogleAnalytics />`:

```tsx
import { StructuredData } from "@/components/layout/structured-data";
// ... add <StructuredData /> in body
```

- [ ] **Step 3: Update layout barrel export**

Modify: `src/components/layout/index.ts`

```ts
export { Header } from "./header";
export { Footer } from "./footer";
export { GoogleAnalytics } from "./google-analytics";
export { StructuredData } from "./structured-data";
```

- [ ] **Step 4: Validate structured data**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

View page source at localhost:3000, search for `application/ld+json`. Copy the JSON and validate with Google's Rich Results Test.

- [ ] **Step 5: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/components/layout/structured-data.tsx src/components/layout/index.ts src/app/layout.tsx
git commit -m "feat: add LocalBusiness JSON-LD structured data for SEO"
```

---

### Task 29: Rate Limiting for Form Actions

- [ ] **Step 1: Create in-memory rate limiter**

Create: `src/lib/rate-limit.ts`

```ts
const requests = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5; // 5 submissions per minute per IP

export function rateLimit(identifier: string): { allowed: boolean } {
  const now = Date.now();
  const entry = requests.get(identifier);

  // Clean up expired entries periodically
  if (requests.size > 10_000) {
    for (const [key, val] of requests) {
      if (val.resetAt < now) requests.delete(key);
    }
  }

  if (!entry || entry.resetAt < now) {
    requests.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false };
  }

  entry.count++;
  return { allowed: true };
}
```

- [ ] **Step 2: Add rate limiting to contact form action**

Modify: `src/actions/contact.ts` - add at the top of `submitContactForm`, before validation:

```ts
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";

// Inside submitContactForm, before schema validation:
const headersList = await headers();
const forwarded = headersList.get("x-forwarded-for");
const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
const { allowed } = rateLimit(`contact:${ip}`);
if (!allowed) {
  return { success: false, error: "Too many submissions. Please try again in a minute." };
}
```

- [ ] **Step 3: Add rate limiting to calculator lead action**

Modify: `src/actions/calculator.ts` - same pattern:

```ts
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";

// Inside submitCalculatorLead, before schema validation:
const headersList = await headers();
const forwarded = headersList.get("x-forwarded-for");
const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
const { allowed } = rateLimit(`calculator:${ip}`);
if (!allowed) {
  return { success: false, error: "Too many submissions. Please try again in a minute." };
}
```

- [ ] **Step 4: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/lib/rate-limit.ts src/actions/contact.ts src/actions/calculator.ts
git commit -m "feat: add rate limiting to contact and calculator form actions"
```

---

### Task 30: WP Engine URL Redirects

- [ ] **Step 1: Crawl the existing site for URL inventory**

Before the DNS cutover, capture the existing URL structure:

```bash
curl -s "https://mytetech.com/sitemap.xml" -o /tmp/myte-old-sitemap.xml 2>/dev/null
cat /tmp/myte-old-sitemap.xml
```

If no sitemap exists, manually check common WP paths:

```bash
for path in / /about /services /contact /blog /it-services /managed-it /cybersecurity /cloud-services /support; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "https://mytetech.com$path")
  echo "$status $path"
done
```

- [ ] **Step 2: Create redirects map**

Create: `src/data/redirects.ts`

Based on the crawl results, map old URLs to new ones. Example (adjust to actual crawl results):

```ts
export const redirects: { source: string; destination: string; permanent: boolean }[] = [
  // WP standard paths
  { source: "/wp-admin", destination: "/", permanent: false },
  { source: "/wp-login.php", destination: "/", permanent: false },
  { source: "/wp-content/:path*", destination: "/", permanent: false },
  { source: "/feed", destination: "/blog", permanent: true },
  { source: "/feed/", destination: "/blog", permanent: true },

  // Old page slugs to new structure (adjust based on crawl)
  { source: "/it-services", destination: "/services/managed-it", permanent: true },
  { source: "/managed-it-services", destination: "/services/managed-it", permanent: true },
  { source: "/cyber-security", destination: "/services/cybersecurity", permanent: true },
  { source: "/cloud-services", destination: "/services/cloud", permanent: true },
  { source: "/it-consulting", destination: "/services/consulting", permanent: true },
  { source: "/about-us", destination: "/about", permanent: true },
  { source: "/contact-us", destination: "/contact", permanent: true },
  { source: "/get-a-quote", destination: "/contact", permanent: true },
  { source: "/free-consultation", destination: "/contact", permanent: true },
];
```

- [ ] **Step 3: Wire redirects into next.config.ts**

Modify: `next.config.ts` - add the redirects function:

```ts
import type { NextConfig } from "next";
import { redirects as redirectMap } from "./src/data/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return redirectMap;
  },
  async headers() {
    // ... existing headers from Task 24
  },
};

export default nextConfig;
```

Note: If importing from `src/data/redirects.ts` causes issues with the Next.js config (which runs in Node, not the app), inline the array directly in `next.config.ts` instead.

- [ ] **Step 4: Verify redirects work**

```bash
cd "c:/dev/projects/MYTE"
npm run dev
```

Test: `curl -s -o /dev/null -w "%{http_code} %{redirect_url}" http://localhost:3000/it-services`

Expected: `308 http://localhost:3000/services/managed-it` (or 307 for non-permanent)

- [ ] **Step 5: Commit**

```bash
cd "c:/dev/projects/MYTE"
git add src/data/redirects.ts next.config.ts
git commit -m "feat: add 301 redirects from old WP Engine URLs to preserve SEO equity"
```

---

## Summary

| Phase | Tasks | Delivers |
|-------|-------|----------|
| 1 - Infrastructure | Tasks 1-4 | GitHub repo, Next.js project, Vercel + Cloudflare linked |
| 2 - Shared Components | Tasks 5-9 | Nav, Header, Footer, UI primitives, shared components |
| 3 - Home Page | Tasks 10-13 | Full home page with all sections + animated hero mesh |
| 4 - Services | Tasks 14-15 | Services landing + 4 sub-pages with template |
| 5 - About/Industries/Contact | Tasks 16-18 | 3 key pages with contact form |
| 6 - Calculator | Tasks 19-20 | Interactive IT cost calculator with lead capture |
| 7 - Blog | Tasks 21-22 | MDX blog with sample post |
| 8 - Polish | Tasks 23-25 | Legal, SEO, CSP + security headers, deploy |
| 9 - Hardening | Tasks 26-30 | Analytics, OG images, structured data, rate limiting, WP redirects |
