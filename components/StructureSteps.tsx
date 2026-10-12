"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Étapes Elity Structure : ronds centrés, défilement horizontal (molette, trackpad, doigt),
// flèches et repères sous les ronds. L'étape au centre est mise en avant.
type Step = {
  num: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

export default function StructureSteps({ steps, label }: { steps: Step[]; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Étape la plus proche du centre de la piste
  const onScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    const center = t.scrollLeft + t.clientWidth / 2;
    let best = 0;
    let dist = Infinity;
    Array.from(t.children).forEach((el, i) => {
      const e = el as HTMLElement;
      const d = Math.abs(e.offsetLeft + e.offsetWidth / 2 - center);
      if (d < dist) { dist = d; best = i; }
    });
    setActive(best);
  };

  const goTo = (i: number) => {
    const t = trackRef.current;
    const el = t?.children[i] as HTMLElement | undefined;
    if (!t || !el) return;
    t.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - t.clientWidth / 2, behavior: "smooth" });
  };

  // Au chargement : l'étape 1 au centre
  useEffect(() => {
    const t = trackRef.current;
    const el = t?.children[0] as HTMLElement | undefined;
    if (t && el) t.scrollLeft = el.offsetLeft + el.offsetWidth / 2 - t.clientWidth / 2;
  }, []);

  return (
    <div className="structure-rounds">
      <div className="structure-rounds-track" ref={trackRef} onScroll={onScroll} role="list" aria-label={label}>
        {steps.map((s, i) => (
          <article
            key={s.num}
            className={i === active ? "structure-round is-active" : "structure-round"}
            role="listitem"
            onClick={() => goTo(i)}
          >
            <div className="structure-round-circle" aria-hidden="true">
              <span className="structure-round-icon">{s.icon}</span>
            </div>
            <h4 className="structure-round-name">{s.title}</h4>
            <p className="structure-round-desc">{s.desc}</p>
          </article>
        ))}
      </div>

      <div className="structure-rounds-nav">
        <button type="button" className="structure-rounds-btn" onClick={() => goTo(Math.max(0, active - 1))} disabled={active === 0} aria-label="Étape précédente">
          <span aria-hidden="true">←</span>
        </button>
        <div className="structure-rounds-dots">
          {steps.map((s, i) => (
            <button
              key={s.num}
              type="button"
              className={i === active ? "structure-rounds-dot is-active" : "structure-rounds-dot"}
              onClick={() => goTo(i)}
              aria-label={`Aller à l'étape ${s.title}`}
            />
          ))}
        </div>
        <button type="button" className="structure-rounds-btn" onClick={() => goTo(Math.min(steps.length - 1, active + 1))} disabled={active === steps.length - 1} aria-label="Étape suivante">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
