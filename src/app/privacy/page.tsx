import type { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MYTE Technology collects, uses, shares, and protects your information, and the privacy rights available to you.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <article className="prose prose-gray max-w-3xl mx-auto prose-headings:text-brand-dark">
        <h1>Privacy Policy</h1>
        <p className="text-body-sm text-brand-gray-light">
          Last updated: April 17, 2026
        </p>

        <p>
          This Privacy Policy explains how MYTE Technology (&ldquo;MYTE,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses, and safeguards
          information when you visit <a href="https://mytetech.com">mytetech.com</a> and any
          related web pages or online services we operate (collectively, the &ldquo;Site&rdquo;).
          By using the Site, you agree to the practices described in this Policy. If you do not
          agree, please do not use the Site.
        </p>

        <p>
          This Policy applies to information we collect through the Site. It does not govern
          information collected under separate master services agreements, statements of work, or
          managed services engagements, which are addressed in those agreements.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>
          We collect information you submit directly when you contact us, request a quote, use the
          IT Cost Calculator, or otherwise interact with the Site. This may include:
        </p>
        <ul>
          <li>Name, email address, phone number, company name, and job title</li>
          <li>The area of IT interest you select and the content of any message you send</li>
          <li>Inputs you provide to the IT Cost Calculator (e.g., headcount, service tier)</li>
          <li>Any other information you choose to share with us</li>
        </ul>

        <h3>Information Collected Automatically</h3>
        <p>
          When you visit the Site, our servers and analytics providers automatically log certain
          technical information, including:
        </p>
        <ul>
          <li>IP address and approximate geographic location</li>
          <li>Browser type, operating system, device identifiers, and screen size</li>
          <li>Referring URL, pages viewed, time spent, and clickstream data</li>
          <li>Date and time of your visit, and the language of your browser</li>
        </ul>

        <h3>Cookies and Similar Technologies</h3>
        <p>
          We and our analytics providers use cookies, pixels, and similar technologies to operate
          the Site, remember your preferences, and measure traffic. Categories we use include:
        </p>
        <ul>
          <li>
            <strong>Strictly necessary</strong> &mdash; required for the Site to function (e.g.,
            security, load balancing).
          </li>
          <li>
            <strong>Analytics</strong> &mdash; help us understand how visitors use the Site so we
            can improve it (Google Analytics 4, Vercel Web Analytics).
          </li>
        </ul>
        <p>
          Most browsers let you refuse or delete cookies through their settings. If you block
          analytics cookies, some parts of the Site may not work as intended.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to inquiries, provide quotes, and deliver information you request</li>
          <li>Operate, maintain, secure, and improve the Site and our services</li>
          <li>Measure and analyze traffic, engagement, and campaign performance</li>
          <li>Prevent fraud, abuse, and unauthorized access, including rate-limiting form submissions</li>
          <li>Send you service-related communications or, with your consent, marketing communications</li>
          <li>Comply with legal obligations and enforce our agreements</li>
        </ul>
        <p>
          For individuals in the European Economic Area, United Kingdom, or Switzerland, we rely
          on the following legal bases under the GDPR: (i) your consent; (ii) the performance of a
          contract or pre-contractual steps at your request; (iii) our legitimate interests in
          operating, securing, and promoting our business; and (iv) compliance with a legal
          obligation.
        </p>

        <h2>3. How We Share Information</h2>
        <p>
          We do not sell your personal information. We share information only in these
          circumstances:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> that process information on our behalf under
            written agreements, including:
            <ul>
              <li>Vercel Inc. &mdash; website hosting and Vercel Web Analytics</li>
              <li>Google LLC &mdash; Google Analytics 4 traffic measurement</li>
              <li>Cloudflare, Inc. &mdash; DNS and network security services</li>
              <li>Unsplash &mdash; delivery of stock imagery used on the Site</li>
            </ul>
          </li>
          <li>
            <strong>Legal and safety</strong> &mdash; when we believe disclosure is reasonably
            necessary to comply with law, respond to lawful requests, enforce our terms, or
            protect the rights, property, or safety of MYTE, our customers, or the public.
          </li>
          <li>
            <strong>Business transfers</strong> &mdash; in connection with a merger, acquisition,
            financing, reorganization, or sale of assets, subject to customary confidentiality
            protections.
          </li>
          <li>
            <strong>With your consent</strong> &mdash; for any other purpose disclosed to you at
            the time we collect the information.
          </li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>
          We retain personal information only as long as reasonably necessary for the purposes
          described in this Policy, to comply with legal, accounting, or reporting obligations, or
          to resolve disputes. When information is no longer needed, we delete or anonymize it.
          Contact form and calculator submissions are typically retained for up to twenty-four
          (24) months unless a longer period is required.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards designed to protect
          the information we collect, including encryption of data in transit via TLS, strict
          access controls, and rate-limiting to deter abuse. No method of transmission or storage
          is perfectly secure, and we cannot guarantee absolute security.
        </p>

        <h2>6. International Data Transfers</h2>
        <p>
          MYTE is based in the United States, and the information we collect may be stored and
          processed in the United States or other countries where we or our service providers
          operate. Where required, we implement appropriate safeguards for international
          transfers, such as Standard Contractual Clauses approved by the European Commission.
        </p>

        <h2>7. Your Privacy Rights</h2>

        <h3>Rights Available to All Users</h3>
        <p>You may contact us at any time to:</p>
        <ul>
          <li>Request access to the personal information we hold about you</li>
          <li>Ask us to correct inaccurate or incomplete information</li>
          <li>Ask us to delete your information</li>
          <li>Opt out of marketing communications</li>
        </ul>

        <h3>EEA, UK, and Swiss Residents (GDPR)</h3>
        <p>
          If the GDPR applies to you, you also have the right to restrict or object to certain
          processing, to data portability, and to lodge a complaint with your local supervisory
          authority. Where we rely on consent, you may withdraw it at any time without affecting
          the lawfulness of prior processing.
        </p>

        <h3>California Residents (CCPA/CPRA)</h3>
        <p>
          California residents have the right to know what personal information we collect, the
          purposes for which it is used, and the categories of recipients with whom it is shared;
          the right to request deletion; the right to correct inaccurate information; and the
          right to opt out of the sale or sharing of personal information and to limit the use of
          sensitive personal information. We do not sell personal information, and we do not
          engage in cross-context behavioral advertising that would qualify as a &ldquo;share&rdquo;
          under the CCPA. You will not be discriminated against for exercising any of these
          rights.
        </p>

        <h3>How to Exercise Your Rights</h3>
        <p>
          Submit a request by emailing{" "}
          <a href="mailto:privacy@mytetech.com">privacy@mytetech.com</a>. We will verify your
          identity before acting on most requests and will respond within the timeframes required
          by applicable law. You may designate an authorized agent to act on your behalf.
        </p>

        <h2>8. Children&rsquo;s Privacy</h2>
        <p>
          The Site is intended for business use by adults (18 years or older). We do not knowingly
          collect personal information from children under 13, and the Site is not directed to
          them. If you believe a child has provided us with personal information, please contact
          us and we will promptly delete it.
        </p>

        <h2>9. &ldquo;Do Not Track&rdquo; Signals</h2>
        <p>
          Some browsers transmit &ldquo;Do Not Track&rdquo; signals. Because there is no common
          industry standard for interpreting these signals, the Site does not currently respond to
          them. You can still control tracking through your browser cookie settings and through
          the opt-out tools described above.
        </p>

        <h2>10. Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites or services that we do not operate.
          We are not responsible for the content or privacy practices of those third parties, and
          we encourage you to review their privacy policies before providing any information.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Policy from time to time. When we do, we will update the &ldquo;Last
          updated&rdquo; date at the top and, for material changes, provide additional notice
          (for example, a banner on the Site). Your continued use of the Site after an update
          indicates your acceptance of the revised Policy.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, contact us at:
        </p>
        <p>
          MYTE Technology
          <br />
          [Business Street Address]
          <br />
          Email:{" "}
          <a href="mailto:privacy@mytetech.com">privacy@mytetech.com</a>
        </p>
      </article>
    </Section>
  );
}
