import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pages accessibles en production
const ALLOWED = new Set(["/", "/contact"]);

export function middleware(request: NextRequest) {
  // En développement (localhost) : tout est accessible
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Ressources statiques, API, admin
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (ALLOWED.has(pathname)) {
    return NextResponse.next();
  }

  // Toute autre page → redirige vers l'accueil
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
