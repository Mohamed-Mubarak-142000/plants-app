import { NextRequest, NextResponse } from "next/server";
import { i18n, Locale } from "./i18n.config";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { ROUTES, ROUTES_AUTH } from "./lib/types";
import { UserRole } from "@prisma/client";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  try {
    return matchLocale(
      new Negotiator({ headers: negotiatorHeaders }).languages(),
      i18n.locales,
      i18n.defaultLocale
    );
  } catch {
    return i18n.defaultLocale;
  }
}

// Simple helper for redirects
function redirectTo(url: string, request: NextRequest) {
  return NextResponse.redirect(new URL(url, request.url));
}

export default withAuth(
  async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1️⃣ Redirect "/" to default locale
    if (!pathname || pathname === "/") {
      return redirectTo(`/${i18n.defaultLocale}/customer`, request);
    }

    // 2️⃣ Add locale if missing
    const hasLocale = i18n.locales.some((locale) =>
      pathname.startsWith(`/${locale}/`)
    );
    if (!hasLocale) {
      return redirectTo(`/${getLocale(request)}${pathname}`, request);
    }

    const currentLocale = pathname.split("/")[1] as Locale;

    // 3️⃣ Token & Role
    const token = await getToken({ req: request });
    const isAuthenticated = !!token;
    const role = token?.role;

    // 4️⃣ Route groups
    const customerOnlyRoutes = [`/customer${ROUTES_AUTH.PROFILE}`];
    const adminOnlyRoutes = [
      `/${ROUTES.ADMIN}`,
      `/${ROUTES.DASHBOARD}`,
      `/${ROUTES.CATEGORY_LIST}`,
      `/${ROUTES.USERS}`,
      `/${ROUTES.ORDERS}`,
      `/${ROUTES.INBOX}`,
    ];

    const authPages = [
      `/${ROUTES.AUTH}`,
      `/${ROUTES.AUTH}/${ROUTES_AUTH.LOGIN}`,
      `/${ROUTES.AUTH}/${ROUTES_AUTH.REGISTER}`,
    ];

    const isCustomerOnly = customerOnlyRoutes.some((route) =>
      pathname.startsWith(`/${currentLocale}${route}`)
    );
    const isAdminOnly = adminOnlyRoutes.some((route) =>
      pathname.startsWith(`/${currentLocale}${route}`)
    );
    const isAuthPage = authPages.some((route) =>
      pathname.startsWith(`/${currentLocale}${route}`)
    );

    // 5️⃣ Access Control
    // Prevent admin from seeing customer-only pages
    if (isAuthenticated && role === UserRole.ADMIN && isCustomerOnly) {
      return redirectTo(`/${currentLocale}/${ROUTES.ADMIN}`, request);
    }

    // Prevent customers from seeing admin-only pages
    if (isAuthenticated && role !== UserRole.ADMIN && isAdminOnly) {
      return redirectTo(
        `/${currentLocale}/${ROUTES.HOME}/${ROUTES_AUTH.PROFILE}`,
        request
      );
    }

    // Redirect unauthenticated users from protected pages
    if (!isAuthenticated && (isCustomerOnly || isAdminOnly)) {
      return redirectTo(
        `/${currentLocale}/${ROUTES.AUTH}/${ROUTES_AUTH.LOGIN}`,
        request
      );
    }

    // Redirect authenticated users away from login/register
    if (isAuthenticated && isAuthPage) {
      if (role === UserRole.ADMIN) {
        return redirectTo(`/${currentLocale}/${ROUTES.ADMIN}`, request);
      } else {
        return redirectTo(
          `/${currentLocale}/${ROUTES.HOME}/${ROUTES_AUTH.PROFILE}`,
          request
        );
      }
    }

    // Pass headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-url", request.url);

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  },
  {
    callbacks: {
      authorized: () => true, // Let middleware handle all auth logic
    },
  }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
