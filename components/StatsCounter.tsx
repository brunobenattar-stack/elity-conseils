"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  staticValue?: boolean;
};

const STATS: Stat[] = [
  { value: 100, suffix: "+", label: "Dirigeants accompagnés" },
  { value: 2013, label: "Partenaire Procom", staticValue: true },
  { value: 20, suffix: "+", label: "Secteurs d'activité" },
  { value: 100, suffix: "%", label: "Confidentiel" },
];

function Counter({ target, suffix = "", staticValue = false }: { target: number; suffix?: string; staticValue?: boolean }) {
  const [display, setDisplay] = useState(staticValue ? `${target}${suffix}` : "0");
  const ref = useRef<HTMLDivElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    if (staticValue) return;
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setDisplay(`${target}${suffix}`);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !ran.current) {
            ran.current = true;
            io.disconnect();
            if (reduced) {
              setDisplay(`${target}${suffix}`);
              return;
            }
            const duration = 1600;
            let start: number | null = null;
            const step = (ts: number) => {
              if (start === null) start = ts;
              const progress = Math.min((ts - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * target);
              setDisplay(`${current}${suffix}`);
              if (progress < 1) requestAnimationFrame(step);
              else setDisplay(`${target}${suffix}`);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix, staticValue]);

  return <div ref={ref} className="stat-num">{display}</div>;
}

export default function StatsCounter() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat">
              <Counter target={s.value} suffix={s.suffix} staticValue={s.staticValue} />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
