"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "./useIsMobile";
import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "section-hero",     label: "Accueil" },
  { id: "section-approche", label: "Méthode" },
  { id: "section-offres",   label: "Offres" },
  { id: "section-pilotage", label: "Pilotage" },
  { id: "section-cabinet",  label: "Cabinet" },
  { id: "section-cas",      label: "Résultats" },
  { id: "section-cta",      label: "Contact" },
];

export default function StickyCompass() {
  const isMobile = useIsMobile(1024);
  const [activeLabel, setActiveLabel] = useState("Préparer");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = SECTIONS.find((s) => s.id === entry.target.id);
            if (found) setActiveLabel(found.label);
          }
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (isMobile) return null;

  return (
    <div className="sticky-compass-wrap" aria-hidden="true">
      <motion.div
        className="sticky-compass compass-scroll-rotate"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image src="/logo-elity.png" alt="" width={82} height={82} />
      </motion.div>

      <motion.div
        className="sticky-compass-meta"
        aria-hidden="true"
        key={activeLabel}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="sticky-compass-phase-active">{activeLabel}</span>
      </motion.div>
    </div>
  );
}
