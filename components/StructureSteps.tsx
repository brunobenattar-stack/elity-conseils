"use client";
import { useRef, useState, type ReactNode } from "react";

// Étapes Elity Structure : ronds alignés sur une frise, défilement horizontal
// (glisser au doigt / trackpad, ou flèches).
type Step = {
  num: string;
  title: string;
  baseline: string;
  desc: string;
  icon: ReactNode;
};

export default function StructureSteps({ steps, label }: { steps: Step[]; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);

  const onScroll = () => {
    const t = trackRef.current;
    if (t) setAtEnd(t.scrollLeft + t.clientWidth >= t.scrollWidth - 8);
  };

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelector<HTMLElement>(".structure-round");
    const step = item ? item.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="structure-rounds">
      <div className="structure-rounds-nav">
        <button type="button" className="structure-rounds-btn" onClick={() => scrollBy(-1)} aria-label="Étape précédente">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" className="structure-rounds-btn" onClick={() => scrollBy(1)} aria-label="Étape suivante">
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div
        className={atEnd ? "structure-rounds-track is-end" : "structure-rounds-track"}
        ref={trackRef}
        onScroll={onScroll}
        role="list"
        aria-label={label}
      >
        {steps.map((s) => (
          <article key={s.num} className="structure-round" role="listitem">
            <div className="structure-round-circle">
              <span className="structure-round-num">{s.num}</span>
              <span className="structure-round-icon" aria-hidden="true">
                {s.icon}
              </span>
              <h4 className="structure-round-name">{s.title}</h4>
              <span className="structure-round-baseline">{s.baseline}</span>
            </div>
            <p className="structure-round-desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
