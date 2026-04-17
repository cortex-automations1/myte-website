import type { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <Section>
      <article className="prose prose-gray max-w-3xl mx-auto prose-headings:text-brand-dark">
        <h1>Privacy Policy</h1>
        <p className="text-body-sm text-brand-gray-light">
          Last updated: April 16, 2026
        </p>

        <p>
          MYTE Technology (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed
          to protecting your privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect information that you voluntarily provide to us when you fill out a
          contact form, subscribe to our newsletter, or use our IT Cost Calculator. This
          information may include:
        </p>
        <ul>
          <li>Name and email address</li>
          <li>Phone number</li>
          <li>Company name and job title</li>
          <li>Information you provide in message fields</li>
          <li>Usage data such as pages visited, time spent on pages, and referring URLs</li>
        </ul>
        <p>
          We also automatically collect certain technical information when you visit our site,
          including your IP address, browser type, operating system, and browsing behavior
          through cookies and similar technologies.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide requested services</li>
          <li>Send periodic emails regarding our services or other information you have requested</li>
          <li>Improve our website and user experience</li>
          <li>Analyze website usage and trends to improve our marketing efforts</li>
          <li>Comply with applicable laws and regulations</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information
          to outside parties. This does not include trusted third parties who assist us in
          operating our website, conducting our business, or servicing you, so long as those
          parties agree to keep this information confidential.
        </p>
        <p>
          We may also release your information when we believe release is appropriate to comply
          with the law, enforce our site policies, or protect ours or others&rsquo; rights,
          property, or safety.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal
          information. Your data is stored on secured networks and is only accessible by a
          limited number of persons who have special access rights and are required to keep the
          information confidential. All sensitive information is transmitted via SSL/TLS
          encryption.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:privacy@mytetech.com">privacy@mytetech.com</a>.
        </p>
      </article>
    </Section>
  );
}
