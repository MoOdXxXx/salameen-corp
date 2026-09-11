"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Root page fallback — catches requests that bypass the proxy.
 * Detects browser language and redirects to the locale-prefixed path.
 */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const stored = document.cookie
      .split("; ")
      .find((c) => c.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];

    if (stored) {
      router.replace(`/${stored}`);
      return;
    }

    const lang = navigator.language.slice(0, 2);
    router.replace(lang === "ar" ? "/ar" : "/en");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-secondary border-t-transparent" />
        <p className="text-white/80">Loading...</p>
      </div>
    </div>
  );
}
