"use client";

// Bouton "Nous contacter" flottant - visible uniquement sur mobile (≤768px)
// Position fixe en bas de l'écran, centré

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingContactCTA() {
  const pathname = usePathname();
  // Ne pas afficher sur la page contact elle-même
  if (pathname === "/contact") return null;

  return (
    <Link href="/contact" scroll={true} className="floating-contact-cta" aria-label="Nous contacter">
      Nous contacter
      <span aria-hidden="true">→</span>
    </Link>
  );
}
