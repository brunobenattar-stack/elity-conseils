"use client";

import { useEffect, useState } from "react";

/**
 * Détection mobile / pointer coarse pour skip les composants lourds
 * Démarre en `false` côté SSR pour éviter les flash, bascule au mount.
 */
export function useIsMobile(maxWidth: number = 1024): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      `(max-width: ${maxWidth}px), (pointer: coarse)`
    );
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [maxWidth]);

  return isMobile;
}
