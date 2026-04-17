import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { footerNav, contactInfo } from "@/data/navigation";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container-narrow section-padding">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="text-display-sm font-bold text-white">
              MYTE
            </Link>
            <p className="mt-4 text-body-sm">
              Proactive IT management and cybersecurity solutions for small and
              mid-sized businesses.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-colors hover:text-brand-blue"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="transition-colors hover:text-brand-blue"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors hover:text-brand-blue"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 text-body-md font-semibold text-white">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
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
            <ul className="flex flex-col gap-3">
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
            <ul className="flex flex-col gap-3 text-body-sm">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="transition-colors hover:text-brand-blue"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-brand-blue"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.address}</li>
              <li>{contactInfo.hours}</li>
              <li className="mt-2">
                <a
                  href={contactInfo.clientPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-blue transition-colors hover:text-brand-blue-hover"
                >
                  Client Portal
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-narrow flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-body-sm">
            &copy; {new Date().getFullYear()} MYTE Technology. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body-sm transition-colors hover:text-brand-blue"
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
