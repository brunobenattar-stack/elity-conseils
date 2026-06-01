"use client";

// Rotation via CSS Scroll-Driven Animation (compositor thread, zéro main-thread)
// Phase label via un seul useMotionValueEvent

import { motion } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "./useIsMobile";

const PHASES = [
  { from: 0.00, to: 0.12, label: "Préparer" },
  { from: 0.12, to: 0.28, label: "Comprendre" },
  { from: 0.28, to: 0.62, label: "Structurer" },
  { from: 0.62, to: 0.78, label: "Transmettre" },
  { from: 0.78, to: 0.92, label: "Sécuriser" },
  { from: 0.92, to: 1.00, label: "Signer" },
];

export default function StickyCompass() {
  const isMobile = useIsMobile(1024);
  if (isMobile) return null;

  return (
    <div className="sticky-compass-wrap" aria-hidden="true">
      {/* Rotation 100% CSS — compositor thread */}
      <motion.div
        className="sticky-compass compass-scroll-rotate"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image src="/logo-elity.png" alt="" width={82} height={82} />
      </motion.div>

      {/* Labels affichés via CSS scroll-driven + :has() — pas de JS */}
      <div className="sticky-compass-meta" aria-hidden="true">
        {PHASES.map((p, i) => (
          <span
            key={i}
            className="sticky-compass-phase"
            style={{ "--phase-from": p.from, "--phase-to": p.to } as React.CSSProperties}
          >
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}
