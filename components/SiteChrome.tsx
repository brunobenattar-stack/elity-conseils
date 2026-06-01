"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import ProgressBar from "./ProgressBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import FloatingContactCTA from "./FloatingContactCTA";
import ComingSoonBanner from "./ComingSoonBanner";

// Affiche le chrome du site (navbar + footer + bottom nav mobile) sur toutes les
// pages sauf /admin, qui doit rester nue pour offrir une vraie UX d'édition.
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <ComingSoonBanner />
      <ProgressBar />
      <Navbar />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <FloatingContactCTA />
    </>
  );
}
