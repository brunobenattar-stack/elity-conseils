"use client";

import { useState } from "react";

export default function AproposBio() {
  const [open, setOpen] = useState(false);

  return (
    <div className="apropos-body">
      <p>
        Chef d&apos;entreprise toute ma vie, j&apos;ai vécu de l&apos;intérieur toutes les problématiques qui vont avec. C&apos;est ce qui me permet de parler le même langage que les dirigeants que j&apos;accompagne. J&apos;aime les écouter, les aider, et les voir réussir.
      </p>
      <div className={`apropos-body-more${open ? " open" : ""}`}>
        <p>
          Après un parcours dans l&apos;immobilier de luxe à l&apos;Ile Maurice, je suis entré dans la transaction d&apos;entreprise en 2013 en aidant mon père à céder son restaurant. J&apos;ai découvert la franchise Procomm, disponible sur les Iles Mascareignes, j&apos;ai suivi la formation d&apos;intégration et signé la franchise le 1er juillet 2015. Ce réseau d&apos;une quinzaine de cabinets en France nous apporte du poids, de la rigueur et une formation continue.
        </p>
        <p>
          Compte tenu des difficultés à faire financer les reprises de société, nous avons mis en place un service d&apos;accompagnement à la cession en amont de la mise en vente, pour structurer le dossier et optimiser les chances de transmission. Formaliser cette préparation sous Elity Conseils est devenu une évidence : une entreprise bien préparée se vend mieux, plus vite, et dans de meilleures conditions.
        </p>
      </div>
      <button
        type="button"
        className="apropos-body-toggle"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Réduire" : "Lire la suite du parcours"}
        <span aria-hidden="true">{open ? "↑" : "↓"}</span>
      </button>
    </div>
  );
}
