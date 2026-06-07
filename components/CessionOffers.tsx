"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import OfferCard, { type OfferCardData } from "./OfferCard";

const CESSION: OfferCardData[] = [
  {
    id: "classique",
    name: "Classique",
    pitch: "Pour vendre simplement.",
    features: [
      "Mise en vente de votre entreprise",
      "Diffusion au réseau d'acquéreurs",
      "Organisation des visites",
      "Négociation jusqu'à la signature",
    ],
    meta: "Transaction : Procomm Océan Indien",
    details:
      "L'offre la plus directe. Votre entreprise est mise en marché et diffusée auprès du réseau d'acquéreurs qualifiés de Procomm Océan Indien. On organise les visites, on filtre les intentions sérieuses et on vous accompagne dans la négociation jusqu'à la signature. Idéale quand votre dossier est déjà clair et que vous cherchez avant tout la mise en relation.",
  },
  {
    id: "strategique",
    name: "Stratégique",
    pitch: "Pour vendre intelligemment.",
    features: [
      "Diagnostic complet",
      "Positionnement stratégique",
      "Valorisation argumentée",
      "Dossier de cession préparé",
      "Recherche d'acquéreurs ciblés",
    ],
    meta: "Structuration : Elity Conseils",
    details:
      "On prépare votre cession avant de la lancer. Diagnostic complet de l'entreprise, positionnement, valorisation argumentée et construction du dossier (teaser, mémorandum, data room). On cible les bons profils d'acquéreurs et on vous conseille jusqu'à la décision. La voie recommandée pour sécuriser et optimiser le prix.",
  },
  {
    id: "premium",
    name: "Premium",
    pitch: "Pour vendre dans les meilleures conditions.",
    chip: "Recommandée",
    featured: true,
    features: [
      "Stratégie de cession sur-mesure",
      "Structuration et valorisation complète",
      "Mise en vente confidentielle",
      "Sécurisation des conditions",
      "Accompagnement jusqu'au-delà",
    ],
    meta: "Elity Conseils + Procomm",
    details:
      "L'accompagnement de A à Z, et même au-delà de la signature. Stratégie sur-mesure, structuration et valorisation complètes, mise en vente confidentielle, négociation et sécurisation de chaque condition. Vous êtes accompagné à chaque étape, avec une exigence de discrétion absolue. Pour les dirigeants qui veulent le résultat optimal sans rien gérer seuls.",
  },
];

const ACQUISITION: OfferCardData[] = [
  {
    id: "acq-decouverte",
    name: "Découverte",
    pitch: "Pour reprendre en confiance.",
    features: [
      "Définition de votre projet de reprise",
      "Accès aux affaires du réseau Procomm",
      "Présélection des cibles pertinentes",
      "Mise en relation avec les cédants",
    ],
    meta: "Sourcing : Procomm Océan Indien",
    details:
      "Le point de départ d'une reprise sereine. On clarifie votre projet, votre capacité et vos critères, puis on vous ouvre les affaires du réseau Procomm Océan Indien. On présélectionne les cibles cohérentes et on organise les premières mises en relation. Idéale pour repérer la bonne opportunité sans perdre de temps.",
  },
  {
    id: "acq-audit",
    name: "Audit",
    pitch: "Pour racheter sans mauvaise surprise.",
    features: [
      "Audit indépendant de la cible",
      "Vérification de la valorisation affichée",
      "Analyse des dépendances et des risques",
      "Note de synthèse pour décider",
    ],
    meta: "Analyse : Elity Conseils",
    details:
      "Avant de signer, on regarde sous le capot. Audit indépendant de la cible, vérification que le prix demandé tient la route, analyse des dépendances (clients, dirigeant, savoir-faire) et des zones de risque. Vous recevez une note de synthèse claire pour décider en connaissance de cause, ou pour renégocier.",
  },
  {
    id: "acq-integrale",
    name: "Intégrale",
    pitch: "Pour reprendre dans les meilleures conditions.",
    chip: "Recommandée",
    featured: true,
    features: [
      "Stratégie de reprise sur-mesure",
      "Audit et valorisation complète de la cible",
      "Négociation des conditions de reprise",
      "Sécurisation jusqu'à la signature",
      "Cadrage des 100 premiers jours",
    ],
    meta: "Elity Conseils + Procomm",
    details:
      "L'accompagnement complet du repreneur, de la cible au closing. Stratégie de reprise, audit et valorisation, négociation et sécurisation de chaque clause, puis cadrage de la prise en main une fois l'affaire signée. Pour reprendre une entreprise solide, au juste prix, et démarrer du bon pied.",
  },
];

export default function CessionOffers() {
  const [mode, setMode] = useState<"cession" | "acquisition">("cession");
  const offers = mode === "cession" ? CESSION : ACQUISITION;

  return (
    <div className="offers-filtered">
      <div className="offers-filter" role="tablist" aria-label="Type d'accompagnement">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "cession"}
          className={`offers-filter-btn${mode === "cession" ? " active" : ""}`}
          onClick={() => setMode("cession")}
        >
          Cession d&apos;entreprise
        </button>
        <span className="offers-filter-divider" aria-hidden="true">/</span>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "acquisition"}
          className={`offers-filter-btn${mode === "acquisition" ? " active" : ""}`}
          onClick={() => setMode("acquisition")}
        >
          Acquisition d&apos;entreprise
        </button>
      </div>

      <div className="offers-deck" key={mode}>
        {offers.map((offer, i) => (
          <Reveal key={offer.id} delay={((i + 1) * 100) as 100 | 200 | 300}>
            <OfferCard offer={offer} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
