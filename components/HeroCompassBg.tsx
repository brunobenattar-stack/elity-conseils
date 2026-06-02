"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

export default function HeroCompassBg() {
  const shimmerRef = useRef(0);
  const [shimmerAngle, setShimmerAngle] = useState(0);

  // Shimmer qui tourne en sync avec la boussole mais légèrement décalé pour l'effet lumière
  useAnimationFrame((t) => {
    setShimmerAngle((t / 1000 / 30) * 360);
  });

  const gold = "#C9A84C";
  const goldLight = "#E8C97A";
  const goldDark = "#9A7830";

  return (
    <div className="hero-compass-bg" aria-hidden="true">
      {/* Fond atmosphérique */}
      <div className="hero-compass-atmosphere" />

      {/* Rayons de profondeur */}
      <svg className="hero-compass-rays" viewBox="0 0 800 800" fill="none">
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((angle) => (
          <line
            key={angle}
            x1="400"
            y1="400"
            x2={400 + 400 * Math.cos((angle * Math.PI) / 180)}
            y2={400 + 400 * Math.sin((angle * Math.PI) / 180)}
            stroke={gold}
            strokeWidth="0.4"
            strokeOpacity="0.06"
          />
        ))}
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((angle) => (
          <line
            key={`neg-${angle}`}
            x1="400"
            y1="400"
            x2={400 + 400 * Math.cos(((angle + 180) * Math.PI) / 180)}
            y2={400 + 400 * Math.sin(((angle + 180) * Math.PI) / 180)}
            stroke={gold}
            strokeWidth="0.4"
            strokeOpacity="0.06"
          />
        ))}
        {/* Cercles concentriques */}
        <circle cx="400" cy="400" r="160" stroke={gold} strokeWidth="0.5" strokeOpacity="0.08" />
        <circle cx="400" cy="400" r="240" stroke={gold} strokeWidth="0.4" strokeOpacity="0.06" />
        <circle cx="400" cy="400" r="320" stroke={gold} strokeWidth="0.3" strokeOpacity="0.04" />
      </svg>

      {/* Glow pulsant derrière la boussole */}
      <motion.div
        className="hero-compass-glow"
        animate={{ opacity: [0.18, 0.32, 0.18], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Boussole principale — rotation lente 30s */}
      <motion.div
        className="hero-compass-rose"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Shimmer gradient qui tourne pour simuler la lumière rasante */}
            <linearGradient
              id="shimmer"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              gradientTransform={`rotate(${shimmerAngle}, 100, 100)`}
            >
              <stop offset="0%" stopColor={goldDark} stopOpacity="1" />
              <stop offset="35%" stopColor={goldDark} stopOpacity="1" />
              <stop offset="50%" stopColor={goldLight} stopOpacity="1" />
              <stop offset="65%" stopColor={goldDark} stopOpacity="1" />
              <stop offset="100%" stopColor={goldDark} stopOpacity="1" />
            </linearGradient>

            {/* Dégradé radial pour le cercle */}
            <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={gold} stopOpacity="0.3" />
              <stop offset="100%" stopColor={gold} stopOpacity="0.08" />
            </radialGradient>
          </defs>

          {/* Cercle externe */}
          <circle cx="100" cy="100" r="94" stroke="url(#shimmer)" strokeWidth="0.8" fill="none" strokeOpacity="0.35" />
          <circle cx="100" cy="100" r="90" stroke={gold} strokeWidth="0.3" fill="none" strokeOpacity="0.15" />

          {/* 8 graduations sur le cercle */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
            const rad = (a * Math.PI) / 180;
            const r1 = 88, r2 = 94;
            return (
              <line
                key={a}
                x1={100 + r1 * Math.sin(rad)}
                y1={100 - r1 * Math.cos(rad)}
                x2={100 + r2 * Math.sin(rad)}
                y2={100 - r2 * Math.cos(rad)}
                stroke="url(#shimmer)"
                strokeWidth="1.2"
                strokeOpacity="0.5"
              />
            );
          })}

          {/* Flèche Nord (grande, pointe dorée) */}
          <polygon
            points="100,6 104,90 100,100 96,90"
            fill="url(#shimmer)"
          />
          {/* Flèche Sud */}
          <polygon
            points="100,194 104,110 100,100 96,110"
            fill={goldDark}
            fillOpacity="0.7"
          />
          {/* Flèche Est */}
          <polygon
            points="194,100 110,96 100,100 110,104"
            fill="url(#shimmer)"
          />
          {/* Flèche Ouest */}
          <polygon
            points="6,100 90,96 100,100 90,104"
            fill={goldDark}
            fillOpacity="0.7"
          />

          {/* 4 flèches diagonales (NE, SE, SO, NO) — plus petites */}
          <polygon points="100,6 104,90 100,100 96,90"
            fill="url(#shimmer)"
            transform="rotate(45 100 100)"
            opacity="0.5"
          />
          <polygon points="100,6 104,90 100,100 96,90"
            fill={goldDark}
            transform="rotate(135 100 100)"
            opacity="0.4"
          />
          <polygon points="100,194 104,110 100,100 96,110"
            fill="url(#shimmer)"
            transform="rotate(45 100 100)"
            opacity="0.4"
          />
          <polygon points="100,194 104,110 100,100 96,110"
            fill={goldDark}
            transform="rotate(135 100 100)"
            opacity="0.35"
          />

          {/* Centre */}
          <circle cx="100" cy="100" r="6" fill="url(#shimmer)" />
          <circle cx="100" cy="100" r="3" fill={goldLight} fillOpacity="0.9" />
        </svg>
      </motion.div>

      {/* Vignette */}
      <div className="hero-compass-vignette" />
    </div>
  );
}
