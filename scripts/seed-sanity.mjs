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

const faqItems = [
  // Cession & rachat
  { group: "cession", question: "Quand faut-il commencer à préparer la cession de son entreprise ?", answer: "Idéalement 18 à 24 mois avant. Cette anticipation permet de structurer la valeur, corriger les points faibles visibles et présenter une entreprise lisible aux acquéreurs. Une cession non préparée se solde presque toujours par une décote." },
  { group: "cession", question: "Combien de temps dure un processus de cession en moyenne ?", answer: "La mission Elity Conseils (diagnostic, valorisation, préparation stratégique) dure 1 à 2 semaines. La transaction menée par Procomm Océan Indien prend en moyenne 1 an. En tout, il faut compter entre 12 et 18 mois du premier rendez-vous à la signature définitive." },
  { group: "cession", question: "Comment ma confidentialité est-elle préservée ?", answer: "Tout prospect qui reçoit des informations sur une affaire signe systématiquement un bon de confidentialité. Les teasers présentés aux acquéreurs sont anonymisés. La data room est cloisonnée. Pour les accompagnements Elity Dirigeant, les informations restent strictement en interne. La divulgation de la vente à vos équipes ou clients n'intervient qu'au moment choisi avec vous." },
  { group: "cession", question: "Comment est calculée la valorisation de mon entreprise ?", answer: "Plusieurs méthodes croisées : multiples d'EBE ou de résultat, comparables de transactions récentes du secteur, actualisation des flux de trésorerie, valeur patrimoniale. Le bon prix est celui qui résiste à la due diligence et reste défendable face à l'acquéreur." },
  { group: "cession", question: "Comment trouvez-vous les acquéreurs ?", answer: "Via le réseau national Procom Océan Indien (transactions commerces & entreprises) qui regroupe industriels, repreneurs individuels, fonds régionaux et investisseurs ciblés. Nous filtrons les intentions sérieuses avant toute mise en relation." },
  { group: "cession", question: "Faut-il céder à 100% ou peut-on faire une cession partielle ?", answer: "Les deux sont possibles : cession totale, cession majoritaire avec accompagnement du cédant, OBO/LBO, transmission familiale. Le choix dépend de votre projet de vie post-cession et de la structure que les acquéreurs sont prêts à accepter." },
  // Elity Dirigeant & méthode ESSOR
  { group: "dirigeant", question: "Qu'est-ce qu'Elity Dirigeant exactement ?", answer: "Un accompagnement mensuel structuré sur 12 ou 24 mois pour les dirigeant(e)s de TPE/PME. Un entretien individuel de 3 à 4 heures chaque mois, un rapport d'activité personnalisé, un plan d'action concret. Pas du coaching : un partenaire stratégique qui vous accompagne à piloter votre entreprise." },
  { group: "dirigeant", question: "C'est quoi la méthode ESSOR ?", answer: "Quatre étapes : Constate, Consolide, Maîtrise, Réalise, qui structurent l'accompagnement. On commence par un audit complet, on optimise ce qui fonctionne, on met en place les indicateurs de suivi, puis on concrétise les projets : croissance, recrutement, valorisation, cession." },
  { group: "dirigeant", question: "Quelle est la différence avec mon expert-comptable ?", answer: "Votre expert-comptable enregistre et déclare. Elity Dirigeant vous accompagne à piloter votre entreprise : choix stratégiques, arbitrages, recrutement, croissance, préparation à la cession. Les deux fonctions sont complémentaires, pas concurrentes." },
  { group: "dirigeant", question: "À quel moment de la vie de mon entreprise est-ce pertinent ?", answer: "À tous les moments charnières : reprise d'une entreprise, phase de croissance, plateau de stagnation, préparation à la cession, arbitrage stratégique. L'accompagnement n'a pas de prérequis de chiffre d'affaires, il dépend du besoin de recul." },
  { group: "dirigeant", question: "Quel engagement financier et de temps ?", answer: "12 ou 24 mois d'engagement, un entretien mensuel de 3-4h. L'investissement est calibré pour des dirigeants de TPE/PME qui n'ont pas les moyens d'embaucher un directeur administratif et financier. Tarif communiqué lors du premier échange, après compréhension de votre situation." },
  // En pratique
  { group: "pratique", question: "Je ne suis pas encore prêt à céder. Vous pouvez quand même m'aider ?", answer: "Oui. Dans ce cas, je vous propose de valoriser votre entreprise pour connaître la valeur de votre actif. C'est souvent le meilleur point de départ : savoir ce que vaut ce que vous avez construit, avant même de décider quoi en faire." },
  { group: "pratique", question: "Comment réagissez-vous quand la négociation se tend ou que votre valorisation est contestée ?", answer: "Je reste très calme. Et j'explique que nous n'allons probablement pas pouvoir travailler ensemble, ce que j'appelle l'anti-vente. La raison est simple : nous valorisons comme un banquier. Si le financement ne peut pas passer en banque, la transaction ne se fera pas. Contester nos chiffres, c'est contester la réalité du marché." },
  { group: "pratique", question: "Comment se passe le premier rendez-vous ?", answer: "Un échange confidentiel de 45 minutes à 1 heure, en visio ou en présentiel à La Réunion. Sans engagement, sans facturation. Objectif : comprendre votre situation, identifier vos enjeux et déterminer si nos services correspondent à votre besoin." },
  { group: "pratique", question: "Intervenez-vous uniquement à La Réunion ?", answer: "Le cabinet est basé à La Réunion mais le réseau Procom est national. La cession ou le rachat peuvent concerner des acquéreurs métropolitains ou internationaux. L'accompagnement Elity Dirigeant se fait en visio ou en présentiel selon votre localisation." },
  { group: "pratique", question: "Comment sont calculés vos honoraires ?", answer: "Pour l'accompagnement Elity Conseils (cession) : un acompte puis le solde à la livraison de la note stratégique, payés par le vendeur. Pour Elity Dirigeant : des mensualités sur la durée d'engagement (12 ou 24 mois). Pour la transaction Procomm Océan Indien : des honoraires à la vente, payés par l'acquéreur. Devis détaillé après le premier rendez-vous." },
  { group: "pratique", question: "Travaillez-vous avec des avocats et notaires ?", answer: "Oui. Pour une cession, nous coordonnons avec vos conseils existants (avocat d'affaires, expert-comptable, notaire) ou vous orientons vers des partenaires de confiance si nécessaire. Notre rôle est de garantir la cohérence de l'ensemble." },
].map((f, i) => ({ ...f, _id: `faq-${String(i + 1).padStart(2, "0")}`, _type: "faqItem", order: i }));

const heroSection = {
  _id: "heroSection",
  _type: "heroSection",
  eyebrow: "La Réunion · Ile Maurice · Océan Indien",
  titleLine1: "Céder, reprendre,",
  titleEm: "structurer avant d'agir.",
  sub: "Elity Conseils accompagne les dirigeantes et dirigeants de l'Océan Indien dans leur stratégie de cession ou d'acquisition, et les aide à piloter leur entreprise sur le long terme.",
  cta1Label: "Entamer un échange",
  cta1Href: "/contact",
  cta2Label: "Découvrir notre approche",
  cta2Href: "/approche",
  chip1Label: "Confidentialité totale",
  chip1Sub: "Premier échange sans engagement",
  chip2Num: "10+",
  chip2Label: "Années d'expérience",
  chip2Sub: "Franchisé Procomm depuis 2015",
};

const aboutPage = {
  _id: "aboutPage",
  _type: "aboutPage",
  label: "À propos · le parcours",
  name: "Bruno Benattar,",
  nameEm: "chef d'entreprise devenu conseil.",
  role: "Franchisé Procomm depuis 2015, à La Réunion.",
  paragraphs: [
    "Chef d'entreprise toute ma vie, j'ai vécu de l'intérieur toutes les problématiques qui vont avec. C'est ce qui me permet de parler le même langage que les dirigeants que j'accompagne. J'aime les écouter, les aider, et les voir réussir.",
    "Après un parcours dans l'immobilier de luxe à l'Ile Maurice, je suis entré dans la transaction d'entreprise en 2013 en aidant mon père à céder son restaurant. J'ai découvert la franchise Procomm, disponible sur les Iles Mascareignes, j'ai suivi la formation d'intégration et signé la franchise le 1er juillet 2015. Ce réseau d'une quinzaine de cabinets en France nous apporte du poids, de la rigueur et une formation continue.",
    "Compte tenu des difficultés à faire financer les reprises de société, nous avons mis en place le service d'accompagnement à la cession en amont de la mise en vente, pour optimiser les chances de cession. Formaliser cette préparation sous Elity Conseils est devenu une évidence : une entreprise bien préparée se vend mieux, plus vite, et dans de meilleures conditions.",
  ],
  values: [
    { _key: "v1", name: "Écoute", desc: "Comprendre le projet de vie avant de proposer." },
    { _key: "v2", name: "Intégrité", desc: "Jamais de surévaluation, jamais de mensonge." },
    { _key: "v3", name: "Persévérance", desc: "Tenir le cap quand les autres abandonnent." },
  ],
};

// createIfNotExists pour les singletons : on ne veut PAS ecraser les edits du
// client si on relance le seed. (Les autres docs utilisent createOrReplace.)
async function run() {
  const tx = client.transaction();
  for (const doc of [...caseStudies, ...offers, ...faqItems]) {
    tx.createOrReplace(doc);
  }
  tx.createIfNotExists(heroSection);
  tx.createIfNotExists(aboutPage);
  const res = await tx.commit();
  console.log(`OK : ${res.results.length} documents crees/mis a jour dans Sanity.`);
}

run().catch((e) => {
  console.error("Echec du seed :", e.message);
  process.exit(1);
});
