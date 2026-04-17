import type { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the MYTE Technology website, including acceptable use, disclaimers, and limitations of liability.",
};

export default function TermsPage() {
  return (
    <Section>
      <article className="prose prose-gray max-w-3xl mx-auto prose-headings:text-brand-dark">
        <h1>Terms of Service</h1>
        <p className="text-body-sm text-brand-gray-light">
          Last updated: April 17, 2026
        </p>

        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of{" "}
          <a href="https://mytetech.com">mytetech.com</a> and any related web pages or online
          tools we operate (collectively, the &ldquo;Site&rdquo;). The Site is operated by MYTE
          Technology (&ldquo;MYTE,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          By accessing or using the Site, you agree to be bound by these Terms and our{" "}
          <a href="/privacy">Privacy Policy</a>. If you do not agree, please do not use the Site.
        </p>

        <p>
          These Terms govern your use of the Site only. Managed services, cybersecurity, cloud,
          and consulting engagements are governed by separate master services agreements or
          statements of work executed between you and MYTE, which will control in the event of a
          conflict with these Terms.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You must be at least eighteen (18) years old and capable of forming a binding contract
          to use the Site. By using the Site, you represent and warrant that you meet these
          requirements and that you are not barred from receiving services under the laws of the
          United States or any other applicable jurisdiction.
        </p>

        <h2>2. Purpose of the Site</h2>
        <p>
          The Site provides general information about MYTE and its services, educational content,
          and tools such as the IT Cost Calculator and contact forms. Information on the Site is
          provided for general informational purposes only and does not constitute professional
          advice, an offer to contract, or a guarantee of service availability.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>You agree to use the Site only for lawful purposes. You will not:</p>
        <ul>
          <li>
            Use the Site to transmit material that is unlawful, harassing, defamatory, obscene,
            discriminatory, or otherwise objectionable
          </li>
          <li>
            Attempt to interfere with, disrupt, disable, overburden, or impair the Site or any
            server, network, or system supporting it
          </li>
          <li>
            Probe, scan, or test the vulnerability of the Site, or breach any security or
            authentication measure
          </li>
          <li>
            Use any robot, spider, scraper, or other automated means to access the Site except
            for publicly available search engine indexing consistent with our robots.txt file
          </li>
          <li>
            Reverse engineer, decompile, or disassemble any portion of the Site, except to the
            limited extent permitted by law
          </li>
          <li>
            Submit false or misleading information, impersonate any person, or misrepresent your
            affiliation with any person or entity
          </li>
          <li>
            Use the Site to distribute malware, viruses, or any other malicious code or to engage
            in phishing or other fraudulent activity
          </li>
          <li>Violate any applicable law, regulation, or the rights of any third party</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          All content on the Site &mdash; including text, graphics, logos, icons, images, audio,
          video, software, and the compilation thereof &mdash; is owned by MYTE or its licensors
          and is protected by United States and international copyright, trademark, and other
          intellectual property laws. The MYTE name, logo, and related marks are trademarks of
          MYTE Technology. Nothing in these Terms grants you any right to use them without our
          prior written consent.
        </p>
        <p>
          Subject to your compliance with these Terms, MYTE grants you a limited, revocable,
          non-exclusive, non-transferable license to access and view the Site for your personal,
          non-commercial, informational use. Any other use, including reproduction, modification,
          distribution, republication, or creation of derivative works, is prohibited without our
          prior written consent.
        </p>

        <h2>5. User Submissions and Feedback</h2>
        <p>
          If you submit information through a contact form, calculator, or other interactive
          feature, you represent that the information is accurate and that you have the right to
          submit it. You grant MYTE a worldwide, royalty-free, non-exclusive license to use that
          information for the purpose of responding to you and improving our services, consistent
          with our <a href="/privacy">Privacy Policy</a>.
        </p>
        <p>
          Any feedback, suggestions, or ideas you submit about the Site or our services may be
          used by MYTE without restriction or compensation to you.
        </p>

        <h2>6. IT Cost Calculator Disclaimer</h2>
        <p>
          The IT Cost Calculator is provided for informational and estimation purposes only.
          Results are generated from the inputs you provide using simplified assumptions and do
          not constitute a quote, proposal, or guarantee of pricing. Actual pricing depends on
          your specific environment, scope, term, and service levels, and can only be determined
          through a formal assessment and written proposal. MYTE makes no warranties regarding
          the accuracy, completeness, or suitability of calculator results. For a binding
          estimate, please contact us for a personalized consultation.
        </p>

        <h2>7. Third-Party Links and Content</h2>
        <p>
          The Site may link to or display content from third-party websites or services. We do
          not endorse and are not responsible for the availability, accuracy, or content of
          third-party sites, and your use of them is at your own risk and subject to their own
          terms and privacy policies.
        </p>

        <h2>8. Privacy</h2>
        <p>
          Your use of the Site is also governed by our{" "}
          <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms by
          reference.
        </p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>
          THE SITE AND ALL CONTENT, TOOLS, AND INFORMATION MADE AVAILABLE THROUGH IT ARE PROVIDED
          ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF
          ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYTE DISCLAIMS
          ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF
          DEALING OR USAGE OF TRADE.
        </p>
        <p>
          MYTE does not warrant that the Site will be uninterrupted, timely, secure, or error
          free; that defects will be corrected; that the Site or the servers that make it
          available are free of viruses or other harmful components; or that any information or
          results obtained from the Site will be accurate, reliable, or complete.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL MYTE, ITS AFFILIATES, OR THEIR
          RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR
          ANY LOSS OF PROFITS, REVENUES, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT
          OF OR RELATED TO YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE SITE,
          WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER
          LEGAL THEORY, AND WHETHER OR NOT MYTE HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH
          DAMAGES.
        </p>
        <p>
          IN JURISDICTIONS THAT DO NOT PERMIT THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES,
          OUR LIABILITY WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW. OUR AGGREGATE
          LIABILITY ARISING OUT OF OR RELATED TO THE SITE WILL NOT EXCEED ONE HUNDRED U.S.
          DOLLARS (US$100).
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless MYTE and its affiliates, officers,
          directors, employees, agents, and licensors from and against any claims, liabilities,
          damages, losses, costs, and expenses (including reasonable attorneys&rsquo; fees)
          arising out of or related to (i) your use of the Site, (ii) your violation of these
          Terms, (iii) your violation of any law or the rights of any third party, or (iv)
          content you submit through the Site.
        </p>

        <h2>12. Governing Law and Venue</h2>
        <p>
          These Terms and any dispute arising out of or related to them or the Site are governed
          by the laws of the State of [State of Formation], United States, without regard to its
          conflict of laws principles. Subject to Section 13 below, you and MYTE agree that any
          action or proceeding will be brought exclusively in the state or federal courts located
          in [State of Formation], and you consent to the personal jurisdiction and venue of
          those courts.
        </p>

        <h2>13. Dispute Resolution</h2>
        <p>
          Before filing a claim, you agree to first contact us at{" "}
          <a href="mailto:legal@mytetech.com">legal@mytetech.com</a> and attempt in good faith to
          resolve the dispute informally. If we are unable to resolve the dispute within thirty
          (30) days, either party may pursue available legal remedies. Nothing in this section
          prevents either party from seeking injunctive or other equitable relief in a court of
          competent jurisdiction for intellectual-property or confidentiality claims.
        </p>

        <h2>14. Termination</h2>
        <p>
          We may suspend or terminate your access to the Site at any time, with or without
          notice, for any reason, including if we believe you have violated these Terms. Upon
          termination, all provisions of these Terms that by their nature should survive
          (including intellectual property, disclaimers, limitation of liability, indemnification,
          and governing law) will survive.
        </p>

        <h2>15. Changes to These Terms</h2>
        <p>
          We may modify these Terms from time to time. When we do, we will update the &ldquo;Last
          updated&rdquo; date above and, for material changes, provide additional notice on the
          Site. Your continued use of the Site after changes take effect constitutes acceptance
          of the revised Terms. If you do not agree to the revised Terms, you must stop using
          the Site.
        </p>

        <h2>16. Severability and Entire Agreement</h2>
        <p>
          If any provision of these Terms is held to be invalid or unenforceable, the remaining
          provisions will remain in full force and effect, and the invalid provision will be
          enforced to the maximum extent permitted by law. These Terms, together with our Privacy
          Policy and any other legal notices published by MYTE on the Site, constitute the entire
          agreement between you and MYTE regarding the Site and supersede all prior or
          contemporaneous communications and proposals on that subject.
        </p>

        <h2>17. Assignment</h2>
        <p>
          You may not assign or transfer these Terms without our prior written consent. We may
          assign these Terms without restriction, including to a successor in connection with a
          merger, acquisition, or sale of assets.
        </p>

        <h2>18. Contact</h2>
        <p>
          Questions about these Terms should be directed to:
        </p>
        <p>
          MYTE Technology
          <br />
          [Business Street Address]
          <br />
          Email: <a href="mailto:legal@mytetech.com">legal@mytetech.com</a>
        </p>
      </article>
    </Section>
  );
}
