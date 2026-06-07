"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Garantit un scroll coherent a chaque navigation :
// - si l'URL contient un #ancre, on scrolle vers la section ciblee
// - sinon on remonte tout en haut de la page
// Jamais de position intermediaire ou de bas de page herite.
export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      // Attendre le rendu de la nouvelle page avant de cibler l'ancre
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
        window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
