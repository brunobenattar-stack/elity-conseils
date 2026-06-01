"use client";

// CONCEPT A — V2 : Desktop horizontal sticky (800vh, header absolute)
// Mobile : accordéon expansible (anti scroll trop long)

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useIsMobile } from "./useIsMobile";

type Step = {
  num: string;
  label: string;
  title: string;
  desc: string;
  image: string;
  cardinal: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    label: "Diagnostic",
    title: "Comprendre avant de proposer.",
    desc: "Forces, faiblesses, dépendances et leviers de valeur cachés. Sans angle mort.",
    image: "/etape-01-diagnostic.jpg",
    cardinal: "N",
  },
  {
    num: "02",
    label: "Positionnement",
    title: "Définir la juste valeur.",
    desc: "Positionnement défendable, valorisation argumentée, profilage des bons acquéreurs.",
    image: "/etape-02-positionnement.jpg",
    cardinal: "NE",
  },
  {
    num: "03",
    label: "Préparation",
    title: "Structurer le dossier.",
    desc: "Teaser, mémorandum, data room. Chaque pièce raconte clairement la valeur.",
    image: "/etape-03-preparation.jpg",
    cardinal: "E",
  },
  {
    num: "04",
    label: "Mise en vente",
    title: "Cibler avec discrétion.",
    desc: "Acquéreurs ciblés, interactions pilotées, confidentialité préservée du début à la fin.",
    image: "/etape-04-vente.jpg",
    cardinal: "SE",
  },
  {
    num: "05",
    label: "Négociation",
    title: "Sécuriser jusqu'au bout.",
    desc: "Conditions économiques et juridiques négociées. Accompagnement post-signature.",
    image: "/etape-05-negociation.jpg",
    cardinal: "S",
  },
];

export default function HomeStepsHorizontal() {
  const isMobile = useIsMobile(1024);
  // On ne render qu'une seule version : économise un useScroll qui tracke 400vh
  // côté mobile, et économise un IntersectionObserver côté desktop.
  return isMobile ? <MobileAccordionSteps /> : <DesktopHorizontalSteps />;
}

function DesktopHorizontalSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2 panels visibles à la fois : translate 0 à -60% (3 transitions pour parcourir 5 panels)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const progressBarScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="steps-horizontal" ref={containerRef}>
      <div className="steps-horizontal-sticky">
        <div className="steps-horizontal-header">
          <span className="section-label">Notre approche</span>
          <h2 className="steps-horizontal-title">
            5 étapes,<br />
            <em>une seule trajectoire.</em>
          </h2>
        </div>

        <motion.div className="steps-horizontal-track" style={{ x }}>
          {STEPS.map((s, i) => (
            <StepPanel key={s.num} step={s} index={i} total={STEPS.length} />
          ))}
        </motion.div>

        <div className="steps-horizontal-progress">
          <motion.div
            className="steps-horizontal-progress-bar"
            style={{ scaleX: progressBarScale }}
          />
          <div className="steps-horizontal-progress-labels">
            {STEPS.map((s) => (
              <span key={s.num}>{s.num}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileAccordionSteps() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="steps-mobile-accordion">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">Notre approche</span>
          <div className="section-sep" />
          <h2 className="section-title">5 étapes, une seule trajectoire.</h2>
        </div>

        <div className="accordion-list">
          {STEPS.map((s, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={s.num} className={`accordion-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="accordion-head"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-body-${i}`}
                >
                  <span className="accordion-head-left">
                    <span className="accordion-num">{s.num}</span>
                    <span className="accordion-titles">
                      <span className="accordion-label">{s.label}</span>
                      <span className="accordion-title">{s.title}</span>
                    </span>
                  </span>
                  <span className="accordion-plus" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`accordion-body-${i}`}
                      className="accordion-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <p className="accordion-desc">{s.desc}</p>
                      <div
                        className="accordion-visual"
                        style={{ backgroundImage: `url(${s.image})` }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepPanel({
  step,
  index: _index,
  total,
}: {
  step: Step;
  index: number;
  total: number;
}) {
  return (
    <article className="step-panel">
      <div className="step-panel-grid">
        <div className="step-panel-text">
          <div className="step-panel-meta">
            <span className="step-num-display">
              {step.num} <span className="step-num-total">/ 0{total}</span>
            </span>
          </div>
          <span className="step-panel-label">{step.label}</span>
          <h3 className="step-panel-title">{step.title}</h3>
          <p className="step-panel-desc">{step.desc}</p>
          <div className="step-panel-line" />
        </div>

        <div
          className="step-panel-visual"
          style={{ backgroundImage: `url(${step.image})` }}
        />
      </div>
    </article>
  );
}
