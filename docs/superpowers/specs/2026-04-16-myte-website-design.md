# MYTE Technology Website - Design Specification

**Date:** 2026-04-16
**Status:** Approved
**Domain:** mytetech.com

---

## 1. Overview

Full marketing website for MYTE Technology, a hybrid MSP/MSSP serving SMBs. Replaces existing WordPress site on WP Engine. Hosted on Vercel, DNS via Cloudflare, source on GitHub.

**Positioning:** Enterprise-grade IT security and managed services with personal, responsive service. The anti-corporate MSSP.

**Target Buyer:** Business owners at SMBs (10-50 employees) making IT decisions themselves. They care about risk, downtime, and whether someone picks up the phone - not tech specs.

**Tone:** Confident but approachable. Senior advisor who speaks plainly. Professional without being stiff, technical without jargon.

**Competitive Differentiator:** MYTE delivers what big MSSPs promise but fail to execute - enterprise capability without the impersonal, expensive, ticket-queue experience.

---

## 2. Brand System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-blue` | `#38b6ff` | CTAs, links, highlights, icon accents |
| `dark-gray` | `#545454` | Headings, primary text |
| `near-black` | `#1a1a2e` | Footer, dark contrast sections |
| `light-gray` | `#f5f7fa` | Alternating section backgrounds |
| `white` | `#ffffff` | Primary background |
| `success-green` | `#34d399` | Trust signals, checkmarks, positive indicators |
| `soft-blue` | `#e8f4fd` | Badges, tags, light highlight areas |

### Typography

- **Headings:** Inter or Satoshi - clean geometric sans-serif, medium/bold weights
- **Body:** Inter or system font stack, 16px base, line-height 1.6-1.7
- **Accent/Stats:** Semi-bold or mono for data points (e.g., "99.9% uptime")

### Imagery

- No generic stock photos (no handshakes, no pointing at whiteboards)
- Real office/business environments, people focused on work
- Abstract geometric/topographic patterns for section backgrounds (subtle)
- Custom line-style iconography using brand blue, consistent weight, slightly rounded

### Logo

- "MYTE" wordmark in bold geometric sans-serif
- Subtle shield or network-node mark integrated into the "M" or as standalone icon
- Must work at favicon size

---

## 3. Site Structure

```
/                       - Home
/services               - Services landing page
/services/managed-it    - Managed IT Services
/services/cybersecurity - Cybersecurity
/services/cloud         - Cloud Solutions
/services/consulting    - IT Consulting & Strategy
/about                  - About / Why MYTE
/industries             - Industries overview
/blog                   - Blog listing
/blog/[slug]            - Individual blog post
/calculator             - IT Cost Calculator
/contact                - Contact page
/privacy                - Privacy Policy
/terms                  - Terms of Service
```

---

## 4. Page Designs

### 4.1 Home Page

**Hero Section:**
- Full-width, white background with subtle geometric pattern (faint topographic lines or dot grid) on right side
- Left-aligned headline: declarative, short. Rhythm like "Enterprise IT Security. Personal Service."
- 1-2 sentence subheading addressing business owner pain
- Two CTAs: primary "Get a Free Consultation" (filled blue), secondary "See What You Should Be Spending" (outlined, links to calculator)
- Subtle animated element: slow-moving network mesh or gentle particle field in brand blue. Understated.

**Trust Bar:**
- Grayscale partner/certification logos on `light-gray` band
- Microsoft, SentinelOne, Datto, CompTIA, SOC2, or whatever MYTE holds
- No text, just logos

**Problem/Solution Block:**
- Three-column layout on `light-gray` background
- Each column: pain point headline business owners recognize, short solution sentence, blue line-style icon
- Examples: "Tired of being a ticket number?", "Worried about the next breach?", "Frustrated by unpredictable IT costs?"

**Services Overview:**
- "What We Do" section heading
- 3-4 cards: icon, title, 2-sentence description, "Learn more" link
- Subtle shadow, blue top-border accent on hover

**IT Cost Calculator Promo:**
- Full-width `near-black` background for contrast break
- Left: compelling copy about overspending on IT / underspending on security
- Right: stylized preview of calculator interface
- Single CTA: "Calculate Your IT Costs"

**Social Proof:**
- White/light background
- 2-3 testimonial cards: quote, name, title, company
- Stat bar: businesses protected, uptime percentage, average response time

**Industries Teaser:**
- Three cards: Healthcare, Legal, Financial Services
- Industry name, specific challenge sentence, link to industries page

**Final CTA Block:**
- Clean section, single strong message reinforcing personal relationship
- "Let's Talk" button

### 4.2 Footer

**4-column grid on `near-black` background:**

Column 1 - Brand:
- MYTE logo (light version)
- 1-2 sentence company tagline
- Social media icons (LinkedIn, X/Twitter, Facebook)

Column 2 - Services:
- Managed IT
- Cybersecurity
- Cloud Solutions
- IT Consulting
- IT Cost Calculator

Column 3 - Company:
- About Us
- Blog
- Industries
- Careers (placeholder)
- Contact

Column 4 - Contact:
- Phone number
- Email address
- Office address/location
- "Client Portal" button (styled, stands out)

**Bottom Bar** (thin border separator):
- Copyright notice
- Privacy Policy
- Terms of Service
- Cookie/consent notice link

### 4.3 Services Landing Page

- Hero with headline and positioning statement
- Card grid of all service categories (larger cards, more detail than homepage)
- Each card links to dedicated sub-page

### 4.4 Service Sub-Pages (consistent template)

- **Hero:** Service name, 1-sentence positioning, icon/illustration
- **The Problem:** 2-3 paragraphs about business owner pain. No jargon.
- **Our Approach:** How MYTE handles this differently. Bullet/icon-list format.
- **What's Included:** Concrete deliverables in checklist or card layout
- **FAQ Accordion:** 3-5 common questions per service
- **CTA Block:** "Let's talk about your [service area]"

Service categories:
1. **Managed IT Services** - helpdesk, device management, infrastructure, monitoring
2. **Cybersecurity** - threat detection, endpoint protection, SOC, incident response
3. **Cloud Solutions** - migration, management, Microsoft 365, Azure/AWS
4. **IT Consulting & Strategy** - assessments, roadmapping, budgeting, vCIO

### 4.5 About / Why MYTE

- **Hero:** "Your IT Team, Not Just Another Vendor"
- **Our Story:** 2-3 paragraphs, founding/mission. Photo of team/founder if available.
- **By the Numbers:** Stat bar (years in business, clients, endpoints, response time)
- **Our Values:** 3-4 values in icon+text grid with real behavioral descriptions
- **The MYTE Difference:** Visual contrast - "Big MSSP experience" vs "MYTE experience"
- **Team Section:** Optional, headshots/titles if available
- **CTA:** "Ready to work with a team that actually picks up the phone?"

### 4.6 Industries Page

- **Hero:** "We Speak Your Industry's Language"
- **Three industry cards:** Healthcare, Legal, Financial Services
  - Industry name, icon
  - Specific IT/security challenge (HIPAA, client confidentiality, financial regs)
  - 3-4 bullets on how MYTE addresses it
  - Compliance callout
- **Bottom CTA:** "Don't see your industry? We work with businesses of all types."

### 4.7 Blog

- **Listing:** Grid of post cards - featured image, title, excerpt, date, category tag
- **Categories:** Cybersecurity Tips, IT Strategy, Industry News, Company Updates
- **Post template:** Wide single-column reading layout, TOC sidebar for long posts, author byline, related posts, mid-post and end-post CTAs
- **Content format:** MDX (upgrade to headless CMS if content volume warrants it)

### 4.8 IT Cost Calculator

Multi-step interactive form:

**Step 1 - Company Profile:**
- Number of employees (ranges: 1-10, 11-25, 26-50, 51-100, 100+)
- Industry (dropdown)
- Current IT setup: in-house, outsourced, hybrid, none

**Step 2 - Current Environment:**
- Number of workstations/devices
- Cloud services (Microsoft 365, Google Workspace, other, none)
- On-premises servers (yes/no)
- Current monthly IT spend (range selector or "not sure")

**Step 3 - Security & Compliance:**
- Compliance requirements (HIPAA, PCI-DSS, SOC2, none, not sure)
- Security incident in past 12 months (yes/no)
- Disaster recovery plan (yes/no/not sure)

**Step 4 - Results (gated):**
- Gate: name, email, company name, phone (optional)
- Results: estimated monthly cost range, breakdown by category, comparison to industry averages
- Personalized recommendation based on profile
- CTA: "Want a detailed assessment? Let's schedule a 15-minute call."

### 4.9 Contact Page

- **Split layout:** Left - form (name, email, phone, company, message, interest dropdown). Right - direct contact info, office hours, map embed.
- **Response time commitment** displayed prominently
- **Tone:** "No sales pitch. Just a conversation about what you need."

---

## 5. Technical Architecture

| Component | Choice | Rationale |
|-----------|--------|-----------|
| Framework | Next.js 14+ (App Router), TypeScript | SSR/SSG for SEO, React ecosystem, Vercel-native |
| Styling | Tailwind CSS with custom design system config | Rapid development, consistent with brand tokens |
| Hosting | Vercel (Cortex Sites team) | Requested, edge network, preview deploys |
| DNS | Cloudflare | Already configured for mytetech.com |
| Repo | GitHub (CortexAdmin82 / cortex-automations1 org) | Existing git workflow |
| Content | MDX for blog posts, static pages otherwise | Simple to start, upgradeable to CMS |
| Forms | React Hook Form + Next.js Server Actions | Type-safe, no external dependency |
| Calculator | Client-side React, results gated behind server action | Interactive UX, lead capture on submit |
| Analytics | Vercel Analytics + GA4 | Performance + marketing analytics |
| SEO | Next.js Metadata API, auto sitemap, OG images, LocalBusiness schema | Full coverage |
| Performance | Target 95+ Lighthouse, Core Web Vitals green | Authority sites must be fast |
| Security | CSP headers, rate limiting on forms, honeypot spam prevention, no client-side secrets | MSSP site must practice what it preaches |
| Accessibility | WCAG 2.1 AA | Proper heading hierarchy, alt text, keyboard nav, contrast ratios |

### URL Migration

Design URL structure to match existing WP Engine site where possible. Implement 301 redirects for any changed paths to preserve SEO equity.

---

## 6. Infrastructure Setup

1. Create GitHub repository `myte-website` under `cortex-automations1` org
2. Create Vercel project under Cortex Sites team, linked to GitHub repo
3. Update Cloudflare DNS: point `mytetech.com` and `www.mytetech.com` to Vercel
4. Configure SSL (automatic via Vercel + Cloudflare)
5. Set up preview deployments for PRs
6. Production deploys from `main` branch

---

## 7. Design Principles

1. **Business owner first** - every design decision filtered through "does a non-technical business owner understand and care about this?"
2. **Show, don't tell** - stats, testimonials, and concrete deliverables over marketing fluff
3. **Earn trust visually** - clean, fast, accessible site demonstrates competence
4. **Security by example** - an MSSP's website must have proper headers, HTTPS, no vulnerabilities
5. **Content-ready** - blog and resource structure ready for ongoing content marketing
6. **Mobile-first** - business owners browse on phones. Every page must work beautifully at 375px.
