// i18n/routing.ts
// Defines the supported locales and default locale for next-intl routing.
// This centralizes locale configuration so all routing/navigation helpers stay in sync.

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
});
