"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageToggle from "./LanguageToggle";

/**
 * Header component with responsive navigation.
 * 
 * Desktop: Full inline navigation links.
 * Mobile/Tablet: Hamburger menu with slide-in panel.
 * 
 * Uses CSS logical properties (ms-*, ps-*, me-*, pe-*) so padding/margin
 * automatically flips when dir="rtl" is set by the locale layout.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("nav");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/#about", label: t("about") },
    { href: "/#services", label: t("services") },
    { href: "/#testimonials", label: t("testimonials") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary shadow-lg">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white transition-opacity hover:opacity-90"
            aria-label="Salameen Corporation - Home"
          >
            {/* Logo icon */}
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
              <svg
                className="h-5 w-5 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span>Salameen</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-[44px] min-w-[44px] px-3 py-2 text-sm font-medium text-white/80
                  transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle />
            <Link
              href="/#contact"
              className="btn-primary min-h-[44px] px-5 py-2 text-sm"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex min-h-[44px] min-w-[44px] items-center justify-center
              rounded-lg text-white transition-colors hover:bg-white/10
              focus:outline-none focus:ring-2 focus:ring-white/50 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-primary md:hidden">
          <nav className="section-container space-y-1 py-4" role="navigation" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block min-h-[44px] rounded-lg px-4 py-3 text-base font-medium
                  text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Contact Link */}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block min-h-[44px] rounded-lg bg-secondary px-4 py-3 text-center
                text-base font-semibold text-primary transition-colors hover:bg-secondary-600"
            >
              {t("contact")}
            </Link>

            {/* Mobile Language Toggle */}
            <div className="flex justify-center pt-2">
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
