// Pre-remplit le projet Sanity avec le contenu actuel du site.
// A lancer UNE FOIS :
//   SANITY_WRITE_TOKEN=xxxxx node scripts/seed-sanity.mjs
// Le token se cree sur sanity.io/manage > projet > API > Tokens (droits Editor).

import { createClient } from "@sanity/client";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("Manque SANITY_WRITE_TOKEN. Voir le commentaire en haut du fichier.");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3fi17iq8",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

const caseStudies = [
  {
    _id: "case-garage",
    _type: "caseStudy",
    order: 0,
    sector: "Garage automobile",
    meta: "TPE · 5 salariés · CA 1 M€ · La Réunion",
    tag: "Elity Dirigeant",
    metrics: [
      { _key: "m1", value: "24 mois", label: "d'accompagnement" },
      { _key: "m2", value: "5 emplois", label: "préservés" },
      { _key: "m3", value: "Rentabilité", label: "retrouvée" },
    ],
    phases: [
      { _key: "p1", eyebrow: "La situation", title: "Au bord de la faillite", text: "Garage automobile, 5 salariés, 1 M€ de CA à La Réunion. Grosses difficultés financières, un dirigeant qui ne se rémunère plus, des emplois menacés." },
      { _key: "p2", eyebrow: "Notre intervention", title: "Elity Dirigeant, méthode ESSOR", text: "Pas une cession, un redressement. Audit complet, tableau de bord mensuel pour piloter trésorerie et marges, plan d'action mois après mois." },
      { _key: "p3", eyebrow: "Le résultat", title: "Une entreprise sauvée", text: "En 24 mois, la rentabilité est revenue. Le dirigeant peut à nouveau se rémunérer, et les cinq emplois ont été préservés." },
    ],
    quote: "Merci pour l'écoute et le soutien. Nous avons pu redresser l'entreprise en 24 mois.",
    author: "Le dirigeant accompagné",
  },
];

const offers = [
  { _id: "offer-cession-classique", category: "cession", order: 0, name: "Classique", pitch: "Pour vendre simplement.", features: ["Mise en vente de votre entreprise", "Diffusion au réseau d'acquéreurs", "Organisation des visites", "Négociation jusqu'à la signature"], meta: "Transaction : Procomm Océan Indien", details: "L'offre la plus directe. Votre entreprise est mise en marché et diffusée auprès du réseau d'acquéreurs qualifiés de Procomm Océan Indien. On organise les visites, on filtre les intentions sérieuses et on vous accompagne dans la négociation jusqu'à la signature." },
  { _id: "offer-cession-strategique", category: "cession", order: 1, name: "Stratégique", pitch: "Pour vendre intelligemment.", features: ["Diagnostic complet", "Positionnement stratégique", "Valorisation argumentée", "Dossier de cession préparé", "Recherche d'acquéreurs ciblés"], meta: "Structuration : Elity Conseils", details: "On prépare votre cession avant de la lancer. Diagnostic complet, positionnement, valorisation argumentée et construction du dossier. On cible les bons profils d'acquéreurs et on vous conseille jusqu'à la décision." },
  { _id: "offer-cession-premium", category: "cession", order: 2, name: "Premium", pitch: "Pour vendre dans les meilleures conditions.", chip: "Recommandée", featured: true, features: ["Stratégie de cession sur-mesure", "Structuration et valorisation complète", "Mise en vente confidentielle", "Sécurisation des conditions", "Accompagnement jusqu'au-delà"], meta: "Elity Conseils + Procomm", details: "L'accompagnement de A à Z, et même au-delà de la signature. Stratégie sur-mesure, structuration et valorisation complètes, mise en vente confidentielle, négociation et sécurisation de chaque condition." },
  { _id: "offer-acq-decouverte", category: "acquisition", order: 0, name: "Découverte", pitch: "Pour reprendre en confiance.", features: ["Définition de votre projet de reprise", "Accès aux affaires du réseau Procomm", "Présélection des cibles pertinentes", "Mise en relation avec les cédants"], meta: "Sourcing : Procomm Océan Indien", details: "Le point de départ d'une reprise sereine. On clarifie votre projet, votre capacité et vos critères, puis on vous ouvre les affaires du réseau Procomm Océan Indien." },
  { _id: "offer-acq-audit", category: "acquisition", order: 1, name: "Audit", pitch: "Pour racheter sans mauvaise surprise.", features: ["Audit indépendant de la cible", "Vérification de la valorisation affichée", "Analyse des dépendances et des risques", "Note de synthèse pour décider"], meta: "Analyse : Elity Conseils", details: "Avant de signer, on regarde sous le capot. Audit indépendant de la cible, vérification que le prix demandé tient la route, analyse des dépendances et des zones de risque." },
  { _id: "offer-acq-integrale", category: "acquisition", order: 2, name: "Intégrale", pitch: "Pour reprendre dans les meilleures conditions.", chip: "Recommandée", featured: true, features: ["Stratégie de reprise sur-mesure", "Audit et valorisation complète de la cible", "Négociation des conditions de reprise", "Sécurisation jusqu'à la signature", "Cadrage des 100 premiers jours"], meta: "Elity Conseils + Procomm", details: "L'accompagnement complet du repreneur, de la cible au closing. Stratégie de reprise, audit et valorisation, négociation et sécurisation de chaque clause." },
  { _id: "offer-pilotage-12", category: "pilotage", order: 0, name: "12 mois", pitch: "Un cycle annuel complet.", features: ["1 entretien mensuel (3 à 4h)", "Rapport et plan d'action chaque mois", "Méthode ESSOR (4 étapes)", "Bilan annuel de progression"], meta: "Pour installer un cadre de pilotage", details: "Un rendez-vous mensuel de 3 à 4 heures où l'on pilote ensemble votre entreprise. Chaque séance produit un rapport et un plan d'action concret. C'est l'équivalent d'un directeur financier à temps partagé." },
  { _id: "offer-pilotage-24", category: "pilotage", order: 1, name: "24 mois", pitch: "Un cycle approfondi sur deux ans.", chip: "Plus complet", featured: true, features: ["Tout le contenu de la formule 12 mois", "2 bilans semestriels approfondis", "Accompagnement stratégique renforcé", "Idéal avant une cession à 24 mois"], meta: "Pour la croissance ou une cession", details: "Le même accompagnement mensuel, déployé sur deux ans pour aller plus loin : on construit la croissance, on prépare les recrutements et, le cas échéant, la valorisation en vue d'une cession." },
].map((o) => ({ ...o, _type: "offer" }));

async function run() {
  const tx = client.transaction();
  for (const doc of [...caseStudies, ...offers]) {
    tx.createOrReplace(doc);
  }
  const res = await tx.commit();
  console.log(`OK : ${res.results.length} documents crees/mis a jour dans Sanity.`);
}

run().catch((e) => {
  console.error("Echec du seed :", e.message);
  process.exit(1);
});
