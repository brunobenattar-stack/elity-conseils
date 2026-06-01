"use client";

// Rotation via CSS Scroll-Driven Animation (compositor thread, zéro main-thread)
// Phase label via un seul useMotionValueEvent

import { motion } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "./useIsMobile";


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

    </div>
  );
}
