// i18n/navigation.ts
// Typed navigation helpers (redirect, usePathname, Link) that are locale-aware.
// Components use these instead of next/link or next/navigation directly.

import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
