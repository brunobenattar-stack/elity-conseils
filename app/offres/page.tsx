import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CessionOffers from "@/components/CessionOffers";
import OfferCard, { type OfferCardData } from "@/components/OfferCard";
import CtaFinal from "@/components/CtaFinal";
import { IconLock, IconEye, IconChart } from "@/components/icons";
import { getOffers } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Nos Offres : Cession, rachat et accompagnement de dirigeant(e) à La Réunion",
  description:
    "Deux activités complémentaires : Cession & rachat d'entreprise (3 offres : Classique, Stratégique, Premium) et accompagnement mensuel du dirigeant(e) via la méthode ESSOR (formules 12 ou 24 mois).",
};

const PILOTAGE: OfferCardData[] = [
  {
    id: "12mois",
    name: "12 mois",
    variant: "cream",
    pitch: "Un cycle annuel complet.",
    features: [
      "1 entretien mensuel (3 à 4h)",
      "Rapport et plan d'action chaque mois",
      "Méthode ESSOR (4 étapes)",
      "Bilan annuel de progression",
    ],
    meta: "Pour installer un cadre de gestion clair",
    details:
      "Un rendez-vous mensuel de 3 à 4 heures où l'on copilote votre entreprise : on lit les chiffres, on tranche les décisions, on fixe le cap du mois. Chaque séance produit un rapport et un plan d'action concret. Sur l'année, on déroule les quatre étapes de la méthode ESSOR et on mesure les progrès lors d'un bilan annuel. C'est l'équivalent d'un directeur financier à temps partagé, sans le coût d'une embauche.",
  },
  {
    id: "24mois",
    name: "24 mois",
    variant: "cream",
    pitch: "Un cycle approfondi sur deux ans.",
    chip: "Plus complet",
    features: [
      "Tout le contenu de la formule 12 mois",
      "2 bilans semestriels approfondis",
      "Accompagnement stratégique renforcé",
      "Idéal avant une cession à 24 mois",
    ],
    meta: "Pour la croissance ou une cession",
    details:
      "Le même accompagnement mensuel, déployé sur deux ans pour aller plus loin : on ne se contente pas de stabiliser, on construit la croissance, on prépare les recrutements et, le cas échéant, on prépare la valorisation en vue d'une cession. Deux bilans semestriels approfondis viennent rythmer la trajectoire. La formule idéale pour transformer durablement l'entreprise ou maximiser sa valeur avant de la céder.",
  },
];

function mapOffer(o: import("@/sanity/queries").SanityOffer, i: number): OfferCardData {
  return {
    id: `${o.category}-${i}`,
    name: o.name,
    pitch: o.pitch ?? "",
    chip: o.chip || undefined,
    featured: o.featured || undefined,
    features: o.features ?? [],
    meta: o.meta ?? "",
    details: o.details ?? "",
  };
}

export default async function OffresPage() {
  const sanityOffers = await getOffers();
  const cession = sanityOffers.filter((o) => o.category === "cession").map(mapOffer);
  const acquisition = sanityOffers.filter((o) => o.category === "acquisition").map(mapOffer);
  const pilotageSanity = sanityOffers.filter((o) => o.category === "pilotage").map(mapOffer);
  const pilotage = pilotageSanity.length ? pilotageSanity : PILOTAGE;

  return (
    <>
      {/* SECTION 1 : Vendre ou racheter */}
      <section className="section section-first offers-cession-section" id="cession">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Vendre ou racheter une entreprise</span>
            <div className="section-sep" style={{ marginInline: "auto" }} />
            <h2 className="section-title">Trois niveaux d&apos;accompagnement,<br /><em>une approche adaptée.</em></h2>
            <p className="section-body" style={{ marginInline: "auto", textAlign: "center" }}>
              Elity Conseils prépare votre stratégie. <strong>Procomm Océan Indien</strong> réalise la transaction.
            </p>
          </Reveal>

          <CessionOffers cession={cession} acquisition={acquisition} />

          <div className="offers-band">
            <Reveal className="band-item" delay={100}>
              <IconLock />
              <div>
                <div className="band-title">Confidentialité totale</div>
                <div className="band-desc">Discrétion garantie à chaque étape.</div>
              </div>
            </Reveal>
            <Reveal className="band-item" delay={200}>
              <IconEye />
              <div>
                <div className="band-title">Approche sur-mesure</div>
                <div className="band-desc">Une stratégie adaptée à vos objectifs.</div>
              </div>
            </Reveal>
            <Reveal className="band-item" delay={300}>
              <IconChart />
              <div>
                <div className="band-title">Résultats optimisés</div>
                <div className="band-desc">Valorisation maximale et conditions sécurisées.</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 : Piloter son entreprise au quotidien */}
      <section className="section section-cream offers-pilotage-section" id="pilotage">
        <div className="container">
          <Reveal className="section-header center">
            <span className="section-label">Accompagnement de dirigeant(e)</span>
            <div className="section-sep" style={{ marginInline: "auto" }} />
            <h2 className="section-title">Diriger seul(e), c&apos;est arbitrer<br /><em>dans le brouillard.</em></h2>
            <p className="section-body" style={{ marginInline: "auto", textAlign: "center" }}>
              Votre comptable gère vos comptes. Mais qui décide vraiment avec vous ? Elity Dirigeant vous donne un cadre mensuel structuré, appuyé sur la <Link href="/methode-essor" className="inline-link">méthode ESSOR</Link>.
            </p>
          </Reveal>

          <div className="offers-deck offers-deck-2">
            {pilotage.map((offer, i) => (
              <Reveal key={offer.id} delay={((i + 1) * 100) as 100 | 200}>
                <OfferCard offer={{ ...offer, variant: "cream", featured: false }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal
        title={
          <>
            Vous ne savez pas quelle offre vous convient ?<br /><em>Réservez un premier échange gratuit.</em>
          </>
        }
        text="30 minutes pour comprendre votre situation et identifier le bon format. Sans engagement."
        secondaryLabel="Découvrir la méthode"
        secondaryHref="/methode-essor"
      />
    </>
  );
}
