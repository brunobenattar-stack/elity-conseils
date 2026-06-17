"use client";

// V4 - ULTRA COMPACT : 3 KPI inline, juste chiffre + label sur 2 lignes max

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Stat = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 18, suffix: "mois", label: "Durée moyenne d'un accompagnement Premium" },
  { value: 22, label: "Collaborateurs intégrés dans la cession médiane" },
  { prefix: "×", value: 3, label: "Multiple de valorisation moyen vs estimation initiale" },
];

function BigCountCell({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      animate(count, stat.value, {
        duration: 1.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.15 + index * 0.08,
      });
    }
  }, [inView, count, stat.value, index]);

  return (
    <motion.div
      ref={ref}
      className="kpi-cell"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h3 className="kpi-figure">
        {stat.prefix && <span className="kpi-prefix">{stat.prefix}</span>}
        <motion.span>{rounded}</motion.span>
        {stat.suffix && <span className="kpi-suffix">{stat.suffix}</span>}
      </h3>
      <p className="kpi-label">{stat.label}</p>
    </motion.div>
  );
}

export default function HomeCasStats() {
  return (
    <div className="kpi-row">
      {STATS.map((s, i) => (
        <BigCountCell key={i} stat={s} index={i} />
      ))}
    </div>
  );
}
