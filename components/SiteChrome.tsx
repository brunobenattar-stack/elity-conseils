"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import ProgressBar from "./ProgressBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import FloatingContactCTA from "./FloatingContactCTA";
import ComingSoonBanner from "./ComingSoonBanner";
import ScrollManager from "./ScrollManager";
import type { SanitySettings } from "@/sanity/queries";

// Affiche le chrome du site (navbar + footer + bottom nav mobile) sur toutes les
// pages sauf /admin, qui doit rester nue pour offrir une vraie UX d'édition.
export default function SiteChrome({
  children,
  settings,
}: {
  children: ReactNode;
  settings?: SanitySettings | null;
}) {
  const pathname = usePathname();
  const isBare =
    (pathname?.startsWith("/admin") ?? false) ||
    (pathname?.startsWith("/studio") ?? false);

  if (isBare) {
    return <>{children}</>;
  }

  return (
    <>
      <ScrollManager />
      <ComingSoonBanner />
      <ProgressBar />
      <Navbar />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer settings={settings} />
      <FloatingContactCTA />
    </>
  );
}
