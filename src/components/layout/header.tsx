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
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="container-narrow flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-dark">
            <span className="text-sm font-bold text-white">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-dark">
            MYTE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-body-sm font-medium text-brand-gray transition-colors hover:bg-gray-50 hover:text-brand-dark">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[220px] rounded-xl border border-gray-100 bg-white p-2 shadow-lg shadow-gray-100/50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-body-sm text-brand-gray transition-colors hover:bg-brand-blue/[0.06] hover:text-brand-blue"
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
                className="rounded-lg px-3 py-2 text-body-sm font-medium text-brand-gray transition-colors hover:bg-gray-50 hover:text-brand-dark"
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
          className="rounded-lg p-2 hover:bg-gray-50 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-brand-dark" />
          ) : (
            <Menu className="h-5 w-5 text-brand-dark" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="container-narrow flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-body-md font-medium text-brand-gray transition-colors hover:bg-gray-50"
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
                        className="block rounded-lg px-4 py-2 text-body-sm text-brand-gray-light transition-colors hover:bg-gray-50 hover:text-brand-dark"
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
