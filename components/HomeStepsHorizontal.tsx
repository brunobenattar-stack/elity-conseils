"use client";

// CONCEPT A - V2 : Desktop horizontal sticky (800vh, header absolute)
// Mobile : accordéon expansible (anti scroll trop long)

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
    label: "Accompagnement",
    title: "Conseiller jusqu'à la signature.",
    desc: "Posture de négociation, conditions économiques et juridiques. Accompagnement jusqu'à la finalisation et au-delà.",
    image: "/etape-05-negociation.jpg",
    cardinal: "S",
  },
];

type HomeStepsData = {
  stepsLabel?: string;
  stepsTitle1?: string;
  stepsTitle2?: string;
  steps?: { label?: string; title?: string; desc?: string }[];
};

type StepsView = {
  label: string;
  title1: string;
  title2: string;
  steps: Step[];
};

function buildStepsView(home?: HomeStepsData | null): StepsView {
  const label = home?.stepsLabel?.trim() || "Notre approche";
  const title1 = home?.stepsTitle1?.trim() || "5 étapes,";
  const title2 = home?.stepsTitle2?.trim() || "une seule trajectoire.";
  const steps =
    home?.steps && home.steps.length > 0
      ? home.steps.map((s, i) => ({
          ...STEPS[i % STEPS.length],
          num: String(i + 1).padStart(2, "0"),
          label: s.label?.trim() || STEPS[i % STEPS.length].label,
          title: s.title?.trim() || STEPS[i % STEPS.length].title,
          desc: s.desc?.trim() || STEPS[i % STEPS.length].desc,
        }))
      : STEPS;
  return { label, title1, title2, steps };
}

export default function HomeStepsHorizontal({ home }: { home?: HomeStepsData | null }) {
  const isMobile = useIsMobile(1024);
  const view = buildStepsView(home);
  // On ne render qu'une seule version : économise un useScroll qui tracke 400vh
  // côté mobile, et économise un IntersectionObserver côté desktop.
  return isMobile ? <MobileAccordionSteps view={view} /> : <DesktopHorizontalSteps view={view} />;
}

function DesktopHorizontalSteps({ view }: { view: StepsView }) {
  const STEPS = view.steps;
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Distance de translation = largeur réelle de la piste − largeur du viewport.
  // Mesurée au runtime (et au resize) pour que la dernière étape finisse pile
  // cadrée à droite à TOUTES les largeurs desktop, sans vide ni rognage.
  const [maxShift, setMaxShift] = useState(0);
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const shift = track.scrollWidth - window.innerWidth;
      setMaxShift(shift > 0 ? shift : 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Le défilement horizontal se termine à 90% du scroll (la dernière étape est
  // alors cadrée) ; les 10% restants laissent la section sortir sans temps mort.
  const x = useTransform(scrollYProgress, [0, 0.9], [0, -maxShift]);
  const progressBarScale = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <section className="steps-horizontal" ref={containerRef}>
      <div className="steps-horizontal-sticky">
        <div className="steps-horizontal-header">
          <span className="section-label">{view.label}</span>
          <h2 className="steps-horizontal-title">
            {view.title1}<br />
            <em>{view.title2}</em>
          </h2>
        </div>

        <motion.div className="steps-horizontal-track" ref={trackRef} style={{ x }}>
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

function MobileAccordionSteps({ view }: { view: StepsView }) {
  const STEPS = view.steps;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="steps-mobile-accordion">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">{view.label}</span>
          <div className="section-sep" />
          <h2 className="section-title">{view.title1} {view.title2}</h2>
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
