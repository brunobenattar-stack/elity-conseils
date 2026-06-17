"use client";

// MANIFESTE V3 - minimaliste, sans signature ni stats (déplacés ailleurs)
// Pull-quote BlurText centré, déco SVG en BG

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PHRASE_1 = "Vous ne vendez";
const PHRASE_2 = "qu'une fois.";
const PHRASE_3 = "Préparez-vous comme tel.";

export default function HomeManifeste() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const renderWords = (text: string, offset: number, accent = false) =>
    text.split(" ").map((word, i) => (
      <motion.span
        key={`${text}-${i}`}
        initial={{ opacity: 0, filter: "blur(14px)", y: 26 }}
        animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
        transition={{
          duration: 0.9,
          delay: (offset + i) * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`manifeste-word ${accent ? "accent" : ""}`}
      >
        {word}&nbsp;
      </motion.span>
    ));

  const offset1 = 0;
  const offset2 = PHRASE_1.split(" ").length;
  const offset3 = offset2 + PHRASE_2.split(" ").length;
  const totalWords = `${PHRASE_1} ${PHRASE_2} ${PHRASE_3}`.split(" ").length;

  return (
    <section className="manifeste-section manifeste-v3" ref={ref}>
      {/* Déco SVG : cercles concentriques + "01" géant en BG */}
      <div className="manifeste-deco" aria-hidden="true">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="380" fill="none" stroke="rgba(201,165,90,0.18)" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="300" fill="none" stroke="rgba(201,165,90,0.12)" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="400" cy="400" r="220" fill="none" stroke="rgba(201,165,90,0.08)" strokeWidth="0.5" />
          <text
            x="400"
            y="450"
            textAnchor="middle"
            fontSize="340"
            fontWeight="300"
            fill="rgba(201,165,90,0.05)"
            style={{ fontFamily: "var(--display)" }}
          >
            01
          </text>
        </svg>
      </div>

      <div className="container">
        <div className="manifeste-v3-content">
          <motion.span
            className="manifeste-eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="line" />
            Le constat · Édito Elity
          </motion.span>

          <h2 className="manifeste-phrase">
            <span className="manifeste-line">{renderWords(PHRASE_1, offset1)}</span>
            <span className="manifeste-line">{renderWords(PHRASE_2, offset2)}</span>
            <span className="manifeste-line">{renderWords(PHRASE_3, offset3, true)}</span>
          </h2>

          <motion.p
            className="manifeste-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: (totalWords + 1) * 0.08 }}
          >
            Chaque cession est une opportunité unique de valoriser ce que vous avez bâti. La préparation transforme une transaction en transmission réussie.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
