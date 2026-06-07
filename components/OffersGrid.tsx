import Reveal from "./Reveal";
import OfferCard, { type OfferCardData } from "./OfferCard";

const OFFERS: OfferCardData[] = [
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
    variant: "cream",
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

export default function OffersGrid() {
  return (
    <div className="offers-deck">
      {OFFERS.map((offer, i) => (
        <Reveal key={offer.id} delay={((i + 1) * 100) as 100 | 200 | 300}>
          <OfferCard offer={offer} />
        </Reveal>
      ))}
    </div>
  );
}
