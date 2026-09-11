"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

/**
 * LanguageToggle switches between English and Arabic.
 * 
 * It reads the current locale from useLocale(), then builds a new path using
 * usePathname() (which returns the pathname without the locale prefix) and
 * useRouter().push() to navigate to the same page in the other locale.
 * 
 * Because we use CSS logical properties throughout, the layout automatically
 * flips when the HTML dir attribute changes from "ltr" to "rtl".
 */
export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    // Navigate to the same pathname in the other locale.
    // The middleware will handle the prefix and direction change.
    router.push(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      aria-label={locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
      className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10
        px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all
        duration-300 hover:border-white/50 hover:bg-white/20
        focus:outline-none focus:ring-2 focus:ring-white/50
        min-h-[44px] min-w-[44px] justify-center"
    >
      {/* Globe icon */}
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
      <span>{locale === "en" ? "عربي" : "EN"}</span>
    </button>
  );
}
