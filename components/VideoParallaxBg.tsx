"use client";

import { useEffect, useRef } from "react";

// Fond video avec effet parallaxe leger au scroll.
// Reutilise la video du hero. Pas d'object-fit (anti-zoom iOS) : cadrage par transform.
export default function VideoParallaxBg({ src = "/hero-video-desktop.mp4" }: { src?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        const shift = Math.max(-60, Math.min(60, progress * -40));
        video.style.transform = `translate3d(-50%, calc(-50% + ${shift}px), 0)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="video-parallax-bg" ref={wrapRef} aria-hidden="true">
      <video ref={videoRef} className="video-parallax-video" autoPlay muted loop playsInline preload="auto" src={src} />
      <div className="video-parallax-overlay" />
    </div>
  );
}
