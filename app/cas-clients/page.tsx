import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Cas clients : Cessions réussies à La Réunion et au-delà",
  description:
    "Exemples anonymisés de cessions et de rachats accompagnés par Elity Conseils : BTP, commerce, services, industrie. Contexte, méthode appliquée, résultats obtenus.",
};

type Case = {
  sector: string;
  size: string;
  context: string;
  challenge: string;
  approach: string[];
  result: string;
  metric: { label: string; value: string }[];
};

const CASES: Case[] = [
  {
    sector: "Garage automobile",
    size: "TPE · 5 collaborateurs · CA 1 M€ · La Réunion",
    context:
      "Entreprise en grande difficulté financière, au bord de la faillite. Le dirigeant n'avait plus de visibilité sur ses chiffres et n'arrivait plus à se rémunérer. Les emplois étaient menacés.",
    challenge:
      "Redresser l'entreprise sans la vendre, redonner un cadre de pilotage au dirigeant et sauvegarder les cinq postes de travail.",
    approach: [
      "Accompagnement Elity Dirigeant sur 24 mois, méthode ESSOR.",
      "Audit complet de la situation financière et identification des leviers prioritaires.",
      "Mise en place d'un tableau de bord mensuel pour piloter la trésorerie et les marges.",
      "Restructuration opérationnelle et plan d'action mois par mois.",
    ],
    result:
      "L'entreprise a retrouvé sa rentabilité en 24 mois. Le dirigeant peut à nouveau se rémunérer correctement. Les cinq emplois ont été préservés.",
    metric: [
      { label: "Durée", value: "24 mois" },
      { label: "Emplois sauvés", value: "5" },
    ],
  },
  {
    sector: "BTP : Second oeuvre",
    size: "TPE · 8 collaborateurs · CA 1,4 M€",
    context:
      "Dirigeant fondateur de 62 ans, souhaitant céder dans les 18 mois. Carnet de commandes solide mais forte dépendance personnelle au dirigeant, un point que les acquéreurs sanctionnent toujours.",
    challenge:
      "Rendre l'entreprise lisible et autonome aux yeux d'un repreneur, sans en révéler la cession aux équipes ni aux clients principaux.",
    approach: [
      "Diagnostic complet : process, contrats récurrents, savoir-faire transférable.",
      "Documentation des méthodes, structuration des fiches clients.",
      "Identification de deux profils-cibles : industriels du secteur et repreneurs individuels.",
      "Mise en marché discrète via le réseau Procom.",
    ],
    result:
      "Cession finalisée en 11 mois auprès d'un repreneur individuel expérimenté. Valorisation supérieure de 18 % à l'estimation initiale grâce à la préparation amont.",
    metric: [
      { label: "Délai", value: "11 mois" },
      { label: "Valorisation", value: "+18 %" },
    ],
  },
  {
    sector: "Commerce alimentaire spécialisé",
    size: "PME · 14 collaborateurs · CA 2,8 M€",
    context:
      "Couple de dirigeants prêt à transmettre après 20 ans d'exploitation. Volonté de préserver la marque, l'équipe et l'ancrage local. Le prix n'était pas la priorité ; la continuité, si.",
    challenge:
      "Filtrer les acquéreurs purement financiers et sécuriser un repreneur qui partage la même vision du métier et du tissu local.",
    approach: [
      "Définition d'un cahier des charges acquéreur : valeurs, expérience opérationnelle, capacité d'investissement.",
      "Élaboration d'un mémorandum mettant en avant la marque et la clientèle.",
      "Pré-qualification stricte des intentions reçues.",
      "Accompagnement du processus jusqu'à la phase d'intégration.",
    ],
    result:
      "Reprise par un acquéreur régional aligné avec les valeurs. Préservation des 14 emplois. Période d'accompagnement de 6 mois post-cession assurant la transmission du savoir-faire.",
    metric: [
      { label: "Délai", value: "9 mois" },
      { label: "Emplois préservés", value: "100 %" },
    ],
  },
  {
    sector: "Société de services aux entreprises",
    size: "PME · 22 collaborateurs · CA 3,5 M€",
    context:
      "Dirigeant en phase de stagnation depuis 3 ans. Pas de projet de cession immédiat : un besoin de pilotage stratégique pour reprendre le cap avant d'envisager toute opération de croissance ou de cession.",
    challenge:
      "Sortir de l'opérationnel quotidien, identifier les leviers de croissance dormants et restructurer l'organisation autour d'indicateurs clairs.",
    approach: [
      "Accompagnement Elity Dirigeant sur 12 mois, méthode ESSOR.",
      "Audit interne complet et restructuration de l'offre commerciale.",
      "Mise en place d'un comité de pilotage mensuel avec indicateurs clés.",
      "Recrutement d'un responsable d'exploitation pour libérer le dirigeant.",
    ],
    result:
      "Croissance du CA de 22 % sur l'exercice suivant. Marge nette restaurée. Le dirigeant a retrouvé le recul nécessaire pour préparer sereinement une cession à 24 mois.",
    metric: [
      { label: "Croissance CA", value: "+22 %" },
      { label: "Durée", value: "12 mois" },
    ],
  },
  {
    sector: "Bureau d'études : Ingénierie",
    size: "PME · 18 collaborateurs · CA 2,2 M€",
    context:
      "Acquéreur potentiel ayant identifié une cible, mais doutant de la cohérence du prix demandé et de la solidité réelle de l'entreprise. Besoin d'un audit indépendant avant engagement.",
    challenge:
      "Auditer la cible sans alerter le marché, vérifier la valeur affichée, identifier les zones de risque, sécuriser les conditions de reprise.",
    approach: [
      "Audit stratégique et financier confidentiel de la cible.",
      "Analyse de la dépendance client et de la propriété intellectuelle.",
      "Renégociation de deux clauses critiques dans le protocole d'accord.",
      "Coordination avec l'expert-comptable et l'avocat d'affaires du repreneur.",
    ],
    result:
      "Reprise concrétisée dans des conditions sécurisées. Le prix initial a été ajusté de 12 % à la baisse après mise en lumière de deux zones de risque techniques. Le repreneur a évité deux pièges contractuels majeurs.",
    metric: [
      { label: "Ajustement prix", value: "-12 %" },
      { label: "Risques évités", value: "2" },
    ],
  },
];

export default function CasClientsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Cas clients" }]}
        title={
          <>
            Des cessions qui ont du sens.<br />
            <em>Des résultats qui parlent d&apos;eux-mêmes.</em>
          </>
        }
        subtitle="Cinq situations réelles, anonymisées pour préserver la confidentialité. Pour chaque dossier : le contexte initial, l'approche menée et ce que cela a concrètement changé pour le dirigeant."
        meta="5 dossiers · 5 secteurs"
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Histoires de cession</span>
            <div className="section-sep" />
            <h2 className="section-title">Chaque dossier est unique.<br />La méthode s&apos;adapte, l&apos;exigence reste.</h2>
            <p className="section-body" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              Les chiffres et secteurs ci-dessous sont réels, les noms sont anonymisés par souci de discrétion, principe non négociable dans nos accompagnements.
            </p>
          </Reveal>

          <div className="cases-list">
            {CASES.map((c, i) => (
              <Reveal key={c.sector} className="case-card" delay={(((i % 3) + 1) * 100) as 100 | 200 | 300}>
                <div className="case-card-head">
                  <span className="case-sector">{c.sector}</span>
                  <span className="case-size">{c.size}</span>
                </div>

                <div className="case-card-body">
                  <div className="case-block">
                    <h4 className="case-block-title">Contexte</h4>
                    <p className="case-block-text">{c.context}</p>
                  </div>

                  <div className="case-block">
                    <h4 className="case-block-title">Enjeu</h4>
                    <p className="case-block-text">{c.challenge}</p>
                  </div>

                  <div className="case-block">
                    <h4 className="case-block-title">Notre approche</h4>
                    <ul className="case-block-list">
                      {c.approach.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-block case-result">
                    <h4 className="case-block-title">Résultat</h4>
                    <p className="case-block-text">{c.result}</p>
                    <div className="case-metrics">
                      {c.metric.map((m) => (
                        <div key={m.label} className="case-metric">
                          <div className="case-metric-value">{m.value}</div>
                          <div className="case-metric-label">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <p className="pull-quote">
              Les chiffres parlent.<br />
              <em>Les histoires, elles, restent confidentielles.</em>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title={
          <>
            Votre situation ressemble<br />
            <em>à l&apos;un de ces cas&nbsp;?</em>
          </>
        }
        text="Échangeons sur votre projet. Premier rendez-vous confidentiel et sans engagement, pour identifier le format d'accompagnement adapté."
      />
    </>
  );
}
