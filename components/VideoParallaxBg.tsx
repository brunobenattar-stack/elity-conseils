"use client";

import { useEffect, useRef } from "react";

// Fond video avec effet parallaxe leger au scroll.
// Reutilise la video du hero. Pas d'object-fit (anti-zoom iOS) : cadrage par transform.
export default function VideoParallaxBg({ src = "/hero-video-desktop.mp4" }: { src?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      v.muted = true;
      v.defaultMuted = true;
      const p = v.play();
      if (p) p.catch(() => {});
    };

    // Lancer des que possible et a chaque fois que la video est prete
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("canplay", tryPlay);

    // Relance quand la video entre dans le viewport (cas des fonds plus bas dans la page)
    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((e) => {
                if (e.isIntersecting) tryPlay();
              });
            },
            { threshold: 0.01 }
          )
        : null;
    io?.observe(v);

    // Filet de securite : relance a la premiere interaction utilisateur
    const onInteract = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("touchstart", onInteract, { once: true });

    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      io?.disconnect();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };
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
