import { NextResponse } from "next/server";

// Toutes les pages du site sont accessibles.
// (Ancien comportement "coming soon" qui ne laissait passer que / et /contact
// en production et redirigeait le reste vers l'accueil : supprime.)
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
