"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * HeroSection - The first visible section on the landing page.
 * 
 * Uses a full-height gradient background with the primary color.
 * CSS logical properties ensure text alignment and spacing flip correctly
 * in RTL mode without any conditional logic.
 */
export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary"
      aria-label="Hero section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-secondary/10" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-secondary/5" />
        <div className="absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-secondary/5" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" aria-hidden="true">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="section-container relative z-10 py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Tagline badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
            <span className="text-sm font-medium text-secondary">{t("tagline")}</span>
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg text-white/80 sm:text-xl">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/#contact" className="btn-primary min-w-[200px]">
              {t("cta_primary")}
            </Link>
            <Link href="/#services" className="btn-secondary min-w-[200px]">
              {t("cta_secondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
