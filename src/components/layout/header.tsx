"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-display-sm font-bold text-brand-dark">
          MYTE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-body-md text-brand-gray transition-colors hover:text-brand-blue">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[200px] rounded-brand bg-white p-2 shadow-card-hover">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-brand px-4 py-2 text-body-md text-brand-gray transition-colors hover:bg-brand-blue-light hover:text-brand-blue"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-body-md text-brand-gray transition-colors hover:text-brand-blue"
              >
                {item.label}
              </Link>
            )
          )}
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
          {mobileOpen ? (
            <X className="h-6 w-6 text-brand-dark" />
          ) : (
            <Menu className="h-6 w-6 text-brand-dark" />
          )}
        </button>
      </div>

      {/* Mobile Nav Panel */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="container-narrow flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-brand px-4 py-3 text-body-md text-brand-gray transition-colors hover:bg-brand-blue-light hover:text-brand-blue"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-brand px-4 py-2 text-body-sm text-brand-gray-light transition-colors hover:bg-brand-blue-light hover:text-brand-blue"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Button href="/contact" className="w-full" onClick={() => setMobileOpen(false)}>
                Get a Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
