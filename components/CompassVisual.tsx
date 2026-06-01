"use client";

import { useEffect, useRef } from "react";
import CompassLogo from "./CompassLogo";

type Props = {
  size?: "small" | "medium" | "large";
  parallax?: boolean;
  className?: string;
};

export default function CompassVisual({
  size = "large",
  parallax = false,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax) return;
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (reduced || !hasHover) return;

    let raf: number | null = null;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 14;
        const y = (e.clientY / window.innerHeight - 0.5) * 14;
        el.style.transform = `translate(${x}px, ${y}px)`;
        raf = null;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parallax]);

  const cls =
    size === "small" ? "compass-visual small" :
    size === "medium" ? "compass-visual medium" :
    "compass-visual";

  return (
    <div className={`${cls} ${className}`.trim()}>
      <div className="ring r3" />
      <div className="ring r2" />
      <div className="ring r1" />
      <div className="ray" style={{ transform: "translateX(-50%) rotate(0deg)" }} />
      <div className="ray" style={{ transform: "translateX(-50%) rotate(45deg)" }} />
      <div className="ray" style={{ transform: "translateX(-50%) rotate(90deg)" }} />
      <div className="ray" style={{ transform: "translateX(-50%) rotate(135deg)" }} />

      <div
        ref={ref}
        className={`compass-spin ${size === "small" ? "small" : ""} ${size === "medium" ? "slow" : ""}`.trim()}
      >
        <CompassLogo size={size === "small" ? 220 : 280} />
      </div>
    </div>
  );
}
