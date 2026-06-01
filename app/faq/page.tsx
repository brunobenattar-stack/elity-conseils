import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "FAQ : Vos questions sur la cession et l'accompagnement",
  description:
    "Réponses aux questions les plus fréquentes sur la cession d'entreprise, le rachat, l'accompagnement Elity Dirigeant, la méthode ESSOR, les délais, la confidentialité et nos honoraires.",
};

type QA = { q: string; a: string };

const CESSION: QA[] = [
  {
    q: "Quand faut-il commencer à préparer la cession de son entreprise ?",
    a: "Idéalement 18 à 24 mois avant. Cette anticipation permet de structurer la valeur, corriger les points faibles visibles et présenter une entreprise lisible aux acquéreurs. Une cession non préparée se solde presque toujours par une décote.",
  },
  {
    q: "Combien de temps dure un processus de cession en moyenne ?",
    a: "La mission Elity Conseils (diagnostic, valorisation, préparation stratégique) dure 1 à 2 semaines. La transaction menée par Procomm Océan Indien prend en moyenne 1 an. En tout, il faut compter entre 12 et 18 mois du premier rendez-vous à la signature définitive.",
  },
  {
    q: "Comment ma confidentialité est-elle préservée ?",
    a: "Tout prospect qui reçoit des informations sur une affaire signe systématiquement un bon de confidentialité. Les teasers présentés aux acquéreurs sont anonymisés. La data room est cloisonnée. Pour les accompagnements Elity Dirigeant, les informations restent strictement en interne. La divulgation de la vente à vos équipes ou clients n'intervient qu'au moment choisi avec vous.",
  },
  {
    q: "Comment est calculée la valorisation de mon entreprise ?",
    a: "Plusieurs méthodes croisées : multiples d'EBE ou de résultat, comparables de transactions récentes du secteur, actualisation des flux de trésorerie, valeur patrimoniale. Le bon prix est celui qui résiste à la due diligence et reste défendable face à l'acquéreur.",
  },
  {
    q: "Comment trouvez-vous les acquéreurs ?",
    a: "Via le réseau national Procom Océan Indien (transactions commerces & entreprises) qui regroupe industriels, repreneurs individuels, fonds régionaux et investisseurs ciblés. Nous filtrons les intentions sérieuses avant toute mise en relation.",
  },
  {
    q: "Faut-il céder à 100% ou peut-on faire une cession partielle ?",
    a: "Les deux sont possibles : cession totale, cession majoritaire avec accompagnement du cédant, OBO/LBO, transmission familiale. Le choix dépend de votre projet de vie post-cession et de la structure que les acquéreurs sont prêts à accepter.",
  },
];

const DIRIGEANT: QA[] = [
  {
    q: "Qu'est-ce qu'Elity Dirigeant exactement ?",
    a: "Un accompagnement mensuel structuré sur 12 ou 24 mois pour les dirigeants de TPE/PME. Un entretien individuel de 3 à 4 heures chaque mois, un rapport d'activité personnalisé, un plan d'action concret. Pas du coaching : un partenaire stratégique avec qui vous pilotez.",
  },
  {
    q: "C'est quoi la méthode ESSOR ?",
    a: "Quatre étapes : Constate, Consolide, Maîtrise, Réalise, qui structurent l'accompagnement. On commence par un audit complet, on optimise ce qui fonctionne, on met en place les indicateurs de pilotage, puis on concrétise les projets : croissance, recrutement, valorisation, cession.",
  },
  {
    q: "Quelle est la différence avec mon expert-comptable ?",
    a: "Votre expert-comptable enregistre et déclare. Elity Dirigeant pilote avec vous : choix stratégiques, arbitrages, recrutement, croissance, préparation à la cession. Les deux fonctions sont complémentaires, pas concurrentes.",
  },
  {
    q: "À quel moment de la vie de mon entreprise est-ce pertinent ?",
    a: "À tous les moments charnières : reprise d'une entreprise, phase de croissance, plateau de stagnation, préparation à la cession, arbitrage stratégique. L'accompagnement n'a pas de prérequis de chiffre d'affaires, il dépend du besoin de recul.",
  },
  {
    q: "Quel engagement financier et de temps ?",
    a: "12 ou 24 mois d'engagement, un entretien mensuel de 3-4h. L'investissement est calibré pour des dirigeants de TPE/PME, pas un coût de cabinet de conseil. Tarif communiqué lors du premier échange, après compréhension de votre situation.",
  },
];

const PRATIQUE: QA[] = [
  {
    q: "Comment se passe le premier rendez-vous ?",
    a: "Un échange confidentiel de 45 minutes à 1 heure, en visio ou en présentiel à La Réunion. Sans engagement, sans facturation. Objectif : comprendre votre situation, identifier vos enjeux et déterminer si nos services correspondent à votre besoin.",
  },
  {
    q: "Intervenez-vous uniquement à La Réunion ?",
    a: "Le cabinet est basé à La Réunion mais le réseau Procom est national. La cession ou le rachat peuvent concerner des acquéreurs métropolitains ou internationaux. L'accompagnement Elity Dirigeant se fait en visio ou en présentiel selon votre localisation.",
  },
  {
    q: "Comment sont calculés vos honoraires ?",
    a: "Pour l'accompagnement Elity Conseils (cession) : un acompte puis le solde à la livraison de la note stratégique, payés par le vendeur. Pour Elity Dirigeant : des mensualités sur la durée d'engagement (12 ou 24 mois). Pour la transaction Procomm Océan Indien : des honoraires à la vente, payés par l'acquéreur. Devis détaillé après le premier rendez-vous.",
  },
  {
    q: "Travaillez-vous avec des avocats et notaires ?",
    a: "Oui. Pour une cession, nous coordonnons avec vos conseils existants (avocat d'affaires, expert-comptable, notaire) ou vous orientons vers des partenaires de confiance si nécessaire. Notre rôle est de garantir la cohérence de l'ensemble.",
  },
];

function FaqGroup({ label, items }: { label: string; items: QA[] }) {
  return (
    <div className="faq-group">
      <Reveal className="faq-group-head">
        <span className="section-label">{label}</span>
        <div className="section-sep" />
      </Reveal>
      <div className="faq-list">
        {items.map((item, i) => (
          <Reveal key={item.q} delay={(((i % 3) + 1) * 100) as 100 | 200 | 300}>
            <details className="faq-item">
              <summary>
                <span className="faq-q">{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="faq-a">{item.a}</div>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function FaqPage() {
  const allItems = [...CESSION, ...DIRIGEANT, ...PRATIQUE];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        crumbs={[{ label: "FAQ" }]}
        title={
          <>
            Les questions que vous nous posez<br />
            <em>le plus souvent.</em>
          </>
        }
        subtitle="Cession, accompagnement, méthode, honoraires, confidentialité. Les réponses claires aux interrogations qui reviennent dans nos premiers échanges avec les dirigeants."
        meta="3 thèmes · 15 réponses"
      />

      <section className="section">
        <div className="container faq-container">
          <FaqGroup label="Cession & rachat" items={CESSION} />
          <FaqGroup label="Elity Dirigeant & méthode ESSOR" items={DIRIGEANT} />
          <FaqGroup label="En pratique" items={PRATIQUE} />
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <p className="pull-quote">
              Votre question n&apos;est pas listée&nbsp;?<br />
              <em>Elle mérite probablement une vraie conversation.</em>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title={
          <>
            Une situation singulière<br />
            <em>mérite une réponse sur-mesure.</em>
          </>
        }
        text="Premier échange confidentiel et sans engagement. Nous prenons le temps qu'il faut pour comprendre votre situation."
      />
    </>
  );
}
