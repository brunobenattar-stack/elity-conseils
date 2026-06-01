"use client";

// CONCEPT A — Bouton magnetic : attiré par le curseur dans un rayon de 140px

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  radius?: number;
  strength?: number;
};

export default function MagneticButton({
  href,
  children,
  className = "btn btn-primary",
  radius = 140,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (reduced || !hasHover) return;

    let raf: number | null = null;

    const onMove = (e: MouseEvent) => {
      if (raf !== null) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < radius) {
          const ratio = (1 - dist / radius) * strength;
          el.style.transform = `translate(${dx * ratio}px, ${dy * ratio}px)`;
          el.style.transition = "transform 0.05s linear";
        } else {
          el.style.transform = "translate(0, 0)";
          el.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
        }
      });
    };

    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
      el.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [radius, strength]);

  return (
    <Link href={href} ref={ref} className={`${className} magnetic-btn`}>
      {children}
    </Link>
  );
}
