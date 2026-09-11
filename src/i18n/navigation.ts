// i18n/navigation.ts
// Typed navigation helpers (redirect, usePathname, useRouter, getPathname)
// that are locale-aware. Components use these instead of next/link directly.

import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
