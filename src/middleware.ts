// middleware.ts
// Handles locale-based routing. Detects the user's preferred locale from the
// Accept-Language header or a cookie, and redirects to the appropriate prefixed path.

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for static files, images, and api routes
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
