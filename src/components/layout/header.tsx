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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/95 backdrop-blur-md">
      <div className="container-narrow flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue">
            <span className="text-sm font-bold text-white">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
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
                <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-body-sm font-medium text-gray-300 transition-colors hover:text-white">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[220px] rounded-xl border border-white/10 bg-brand-dark-light p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-body-sm text-brand-gray transition-colors hover:bg-white/10 hover:text-white"
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
                className="rounded-lg px-3 py-2 text-body-sm font-medium text-gray-300 transition-colors hover:text-white"
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
          className="rounded-lg p-2 hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-dark lg:hidden">
          <nav className="container-narrow flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-body-md font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
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
                        className="block rounded-lg px-4 py-2 text-body-sm text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
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
