"use client";

// HERO V3 — sans boussole, vidéo Runway en BG, 2 chips flottants desktop, CTAs retravaillés

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./useIsMobile";
import { useContent } from "@/lib/ContentProvider";
import HeroCompassBg from "./HeroCompassBg";

export default function HomeHero() {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile(1024);
  const { content } = useContent();
  const h = content.hero;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Force autoplay sur iOS : attributs imperatifs + retries sur evenements + fallback interaction
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attributs requis par iOS, poses imperativement (certains navigateurs ignorent le JSX)
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      video.muted = true;
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    // Tentative immediate + sur les evenements de chargement (iOS n'est pret qu'apres buffering)
    tryPlay();
    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    // Filet de securite : si l'autoplay est bloque (Low Power Mode...), demarre au 1er geste
    const onInteract = () => {
      tryPlay();
    };
    window.addEventListener("touchstart", onInteract, { once: true, passive: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });
    document.addEventListener("visibilitychange", tryPlay);

    // Force le navigateur a (re)charger la source pour declencher le buffering
    if (video.readyState === 0) video.load();

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("scroll", onInteract);
      document.removeEventListener("visibilitychange", tryPlay);
    };
  }, [isMobile]);

  return (
    <section className={`hero hero-v3 ${loaded ? "loaded" : ""}`}>
      {/* BG vidéo */}
      <div className="hero-media-bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/hero-video-desktop.mp4"
        />
        <div className="hero-overlay" />
      </div>


      <div className="container hero-v3-container">
        <div className="hero-content hero-v3-content">
          <div className="hero-eyebrow anim hero-eyebrow-noline" data-delay="0">
            <span>{h.eyebrow}</span>
          </div>

          <h1 className="hero-title anim" data-delay="150">
            {h.titleLine1}
            <em>{h.titleEm}</em>
          </h1>

          <p className="hero-sub anim" data-delay="300">
            {h.sub}
          </p>

          <div className="hero-ctas anim hero-v3-ctas" data-delay="450">
            <Link href={h.cta1Href} className="hero-cta-primary">
              <span>{h.cta1Label}</span>
              <span className="hero-cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href={h.cta2Href} className="hero-cta-ghost">
              <span>{h.cta2Label}</span>
              <span className="hero-cta-arrow" aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="hero-scroll-line" />
        <svg className="hero-scroll-chevron" viewBox="0 0 16 10" fill="none">
          <path d="M1 1l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

    </section>
  );
}
