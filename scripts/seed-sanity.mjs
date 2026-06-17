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
    statut: "publie",
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
  {
    _id: "case-hotel",
    _type: "caseStudy",
    statut: "publie",
    order: 1,
    sector: "Résidence hôtelière",
    meta: "Cession · 2 associés · 18 mois · La Réunion",
    tag: "Cession Procomm Océan Indien",
    sectorCategory: "Hôtellerie",
    date: "2017-06-01",
    metrics: [
      { _key: "m1", value: "18 mois", label: "de persévérance" },
      { _key: "m2", value: "5 M€", label: "de cession" },
      { _key: "m3", value: "2 associés", label: "réconciliés" },
    ],
    phases: [
      { _key: "p1", eyebrow: "La situation", title: "Deux associés en conflit", text: "En 2017, deux associés en désaccord depuis dix ans souhaitent céder leur résidence hôtelière. Le dossier est jugé impossible, même le notaire pensait qu'on perdait notre temps." },
      { _key: "p2", eyebrow: "L'intervention", title: "Tenir le cap, 18 mois durant", text: "À l'époque, Bruno opérait via la franchise Procomm Océan Indien (Elity Conseils n'existait pas encore). Un accompagnement patient et structuré de la transaction : valorisation défendable, recherche d'acquéreurs, médiation entre les associés, sécurisation de chaque condition." },
      { _key: "p3", eyebrow: "Le résultat", title: "Bien plus qu'une transaction", text: "La cession est finalisée à 5 M€. Et au-delà du prix, la mission a permis un soulagement entre deux hommes que leur propre affaire avait éloignés." },
    ],
    quote: "C'est pour ça que je fais ce métier.",
    author: "Bruno Benattar",
  },
];

const articles = [
  {
    _id: "article-ceder-reunion-erreurs",
    _type: "article",
    statut: "publie",
    title: "Céder son entreprise à La Réunion : 3 erreurs à éviter en 2025",
    slug: { _type: "slug", current: "ceder-entreprise-reunion-erreurs" },
    date: "2025-01-15",
    category: "conseil",
    excerpt: "Surévaluation, dossier incomplet, timing mal choisi : les trois pièges qui font échouer une cession, et comment les éviter en préparant en amont.",
    body: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Vendre son entreprise est souvent le projet d'une vie. Pourtant, beaucoup de dirigeant(e)s abordent la cession sans préparation, et le résultat s'en ressent : prix tiré vers le bas, acquéreurs qui se désengagent, négociation subie." }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s1", text: "Première erreur : surévaluer son entreprise. Un prix déconnecté de la capacité de remboursement réelle fait fuir les bons repreneurs. Une valorisation défendable, calée comme le ferait un banquier, sécurise la transaction." }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s1", text: "Deuxième erreur : un dossier incomplet. Sans teaser, mémorandum et data room clairs, l'acquéreur perçoit du risque, et le risque se paie en décote." }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s1", text: "Troisième erreur : un mauvais timing. Préparer la cession 18 à 36 mois en amont permet de présenter une entreprise structurée, rentable et lisible, donc bien plus attractive." }] },
      { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s1", text: "La bonne nouvelle : ces trois pièges s'évitent avec un accompagnement en amont. C'est exactement ce que propose Elity Conseils." }] },
    ],
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
  missionLabel: "Ma mission au quotidien",
  missionTitle1: "Analyser, accompagner,",
  missionTitle2: "répondre à vos enjeux.",
  missionBody: "J'écoute le projet de vie du dirigeant, je structure, je sécurise, je valorise. Et surtout : je prends le temps d'écouter.",
  missionItems: [
    { _key: "mi1", title: "Connaissance du marché", text: "Une lecture fine des transactions récentes de l'Océan Indien." },
    { _key: "mi2", title: "Leads qualifiés", text: "Une base d'acquéreurs bâtie sur plus de dix ans de transactions." },
    { _key: "mi3", title: "Valorisation juste", text: "Calée sur la capacité de remboursement réelle, comme un banquier." },
  ],
  diffLabel: "Pourquoi se faire accompagner",
  diffTitle1: "Ce que vous voyez",
  diffTitle2: "n'est pas ce que voit un acquéreur.",
  diffBody: "La perception crée la valeur. Nous construisons celle qu'un bon acquéreur doit avoir de votre entreprise.",
  diffBadTitle: "Mal préparée",
  diffBad: ["Perception floue de la valeur", "Négociation subie, prix tiré vers le bas", "Risques perçus élevés", "Acquéreurs opportunistes"],
  diffBadFoot: "Vendre devient difficile.",
  diffGoodTitle: "Bien préparée",
  diffGood: ["Perception claire, acquéreurs qui se projettent", "Négociation maîtrisée, prix qui reflète la valeur", "Risques maîtrisés, décision facilitée", "Acquéreurs qualifiés, vision long terme"],
  diffGoodFoot: "Vendre devient naturel.",
  ctaTitle1: "Envie d'échanger",
  ctaTitle2: "avec Bruno ?",
  ctaText: "Le premier rendez-vous est confidentiel et sans engagement. On prend le temps de comprendre votre situation.",
};

const homePage = {
  _id: "homePage",
  _type: "homePage",
  heroEyebrow: "La Réunion · Ile Maurice · Océan Indien",
  heroTitleLine1: "Céder, reprendre,",
  heroTitleEm: "structurer avant d'agir.",
  heroSub: "Elity Conseils accompagne les dirigeantes et dirigeants de l'Océan Indien dans leur stratégie de cession ou d'acquisition, et les aide à piloter leur entreprise sur le long terme.",
  heroCta1Label: "Entamer un échange",
  heroCta1Href: "/contact",
  heroCta2Label: "Découvrir notre approche",
  heroCta2Href: "/approche",
  problemTitle1: "Ce qui coûte cher",
  problemTitle2: "quand on s'y prend mal.",
  problemSub: "La plupart des dirigeantes et dirigeants sous-estiment la complexité d'une transmission. Voici ce qui arrive quand elle n'est pas préparée.",
  problemCtaLabel: "Voir comment l'éviter",
  problemCards: [
    { _key: "pc1", eyebrow: "Valorisation", titre: "Vendre en dessous de la valeur réelle", desc: "Sans dossier argumenté, le prix s'aligne sur l'instinct de l'acheteur. L'écart peut représenter plusieurs années de bénéfices." },
    { _key: "pc2", eyebrow: "Repreneur", titre: "Tomber sur le mauvais acquéreur", desc: "Un repreneur sans capacité financière ou sans projet solide met en danger vos salariés, votre réputation et vos garanties post-cession." },
    { _key: "pc3", eyebrow: "Discrétion", titre: "Perdre le contrôle de l'information", desc: "Une vente mal gérée se sait. Salariés, concurrents, fournisseurs alertés trop tôt : l'entreprise se fragilise avant même la signature." },
    { _key: "pc4", eyebrow: "Clauses", titre: "Signer sans comprendre ce qu'on signe", desc: "Garantie d'actif-passif, earn-out, non-concurrence : mal négociées, ces clauses peuvent effacer une partie du prix des années après la vente." },
  ],
  stepsLabel: "Notre approche",
  stepsTitle1: "5 étapes,",
  stepsTitle2: "une seule trajectoire.",
  steps: [
    { _key: "s1", label: "Diagnostic", title: "Comprendre avant de proposer.", desc: "Forces, faiblesses, dépendances et leviers de valeur cachés. Sans angle mort." },
    { _key: "s2", label: "Positionnement", title: "Définir la juste valeur.", desc: "Positionnement défendable, valorisation argumentée, profilage des bons acquéreurs." },
    { _key: "s3", label: "Préparation", title: "Structurer le dossier.", desc: "Teaser, mémorandum, data room. Chaque pièce raconte clairement la valeur." },
    { _key: "s4", label: "Mise en vente", title: "Cibler avec discrétion.", desc: "Acquéreurs ciblés, interactions pilotées, confidentialité préservée du début à la fin." },
    { _key: "s5", label: "Accompagnement", title: "Conseiller jusqu'à la signature.", desc: "Posture de négociation, conditions économiques et juridiques. Accompagnement jusqu'à la finalisation et au-delà." },
  ],
  offresLabel: "Nos offres · Cession & Acquisition",
  offresTitle1: "Trois niveaux,",
  offresTitle2: "un seul standard.",
  offresSub: "Elity Conseils structure votre stratégie. Procomm Océan Indien réalise la transaction.",
  pilotageEyebrow: "Pas (encore) de projet de cession ?",
  pilotageTitle1: "Un regard extérieur pour",
  pilotageTitle2: "garder le cap sereinement.",
  pilotageDesc: "Avant ou indépendamment d'une cession, Elity devient le partenaire stratégique des dirigeant(e)s de TPE/PME : on vous accompagne à piloter votre entreprise, un cadre clair pour décider sur des faits, garder le cap et préparer l'avenir. Méthode ESSOR, formules 12 ou 24 mois.",
  pilotageCtaLabel: "Voir l'offre Accompagnement",
  cabinetEyebrow: "Le cabinet",
  cabinetName: "Bruno Benattar",
  cabinetRole: "Franchisé Procomm · La Réunion depuis 2015",
  cabinetDesc: "12 ans aux côtés des dirigeants de TPE et PME, en cession comme en acquisition. Une approche fondée sur l'écoute, la rigueur et la discrétion.",
  cabinetReassurance: "100+ dirigeants accompagnés",
  casHomeLabel: "Étude de cas",
  casHomeTitle1: "Un exemple",
  casHomeTitle2: "concret.",
  casHomeSector: "Garage automobile",
  casHomeOffer: "Offre Elity Dirigeant",
  casHomeSummary: "Entreprise au bord de la faillite, dirigeant sans rémunération, 5 emplois menacés. Un accompagnement ESSOR sur 24 mois : trésorerie stabilisée, gestion structurée, rentabilité retrouvée.",
  ctaTitle1: "Cession, rachat ou accompagnement ?",
  ctaTitle2: "Parlons-en.",
  ctaText: "Premier échange confidentiel et sans engagement.",
};

const approchePage = {
  _id: "approchePage",
  _type: "approchePage",
  label: "La méthode Elity en 5 étapes",
  heading: "Cinq étapes pour préparer et valoriser votre entreprise avant la cession.",
  intro: "",
  steps: [
    { _key: "a1", eyebrow: "Diagnostic", title: "On regarde la réalité en face", desc: "Un audit complet pour cartographier vos forces, vos dépendances et les leviers de valeur que vous ne voyez plus.", points: ["Finances, organisation, clientèle", "Forces, faiblesses, opportunités", "Leviers de valeur cachés"] },
    { _key: "a2", eyebrow: "Valorisation", title: "On fixe un prix défendable", desc: "Une valorisation calée sur la capacité de remboursement réelle, comme un banquier. Pas de surévaluation.", points: ["Positionnement de mise en marché", "Valorisation argumentée", "Profils d'acquéreurs ciblés"] },
    { _key: "a3", eyebrow: "Préparation", title: "On rend l'entreprise lisible", desc: "Un dossier qui met en avant vos points forts et lisse les points sensibles avant la rencontre des acquéreurs.", points: ["Teaser, mémorandum, data room", "Points forts valorisés", "Leviers du diagnostic activés"] },
    { _key: "a4", eyebrow: "Mise en relation", title: "On cible les bons acquéreurs", desc: "La mise en marché est confiée à Procomm Océan Indien, avec discrétion. Seules les intentions sérieuses avancent.", points: ["Ciblage précis via le réseau Procomm", "Pilotage discret du processus", "Filtrage des intentions"] },
    { _key: "a5", eyebrow: "Signature", title: "On sécurise jusqu'au bout", desc: "Des conditions négociées et sécurisées, jusqu'à la signature et au-delà si besoin.", points: ["Conditions économiques et juridiques", "Accompagnement jusqu'à la signature", "Coordination avocats et notaires"] },
  ],
  dualLabel: "Pas seulement la cession",
  dualTitle1: "La même rigueur,",
  dualTitle2: "pour chaque projet.",
  acquisitionEyebrow: "Vous rachetez",
  acquisitionTitle: "L'approche acquisition",
  acquisitionText: "Avant de reprendre, on sécurise. On audite la cible en toute discrétion, on vérifie que la valeur affichée tient la route et on identifie les zones de risque.",
  acquisitionPoints: ["Audit indépendant de la cible", "Vérification de la valorisation", "Analyse des dépendances et des risques", "Sécurisation des conditions de reprise"],
  accompagnementEyebrow: "Vous dirigez",
  accompagnementTitle: "L'approche accompagnement",
  accompagnementText: "Pas de projet de cession dans l'immédiat ? On vous accompagne à piloter votre entreprise au mois le mois avec la méthode ESSOR, pour reprendre le contrôle et préparer l'avenir.",
  accompagnementPoints: ["Diagnostic complet de l'entreprise", "Tableau de bord mensuel", "Plan d'action et bilans réguliers", "Méthode ESSOR sur 12 ou 24 mois"],
  teamLabel: "Bien plus qu'un directeur financier",
  teamTitle1: "Une équipe derrière",
  teamTitle2: "chaque décision.",
  teamIntro: "Un accompagnement Elity ne se limite pas aux chiffres. On regarde votre entreprise dans son ensemble : les équipes, l'organisation, le marketing. L'objectif : que chacun(e) soit à la bonne place, que le travail soit fluide, et que tout aille dans le sens de l'entreprise et de sa rentabilité.",
  team: [
    { _key: "tm1", role: "Stratégie & cession", name: "Bruno Benattar", text: "Chef d'entreprise devenu conseil. Il pilote la stratégie, la valorisation et la relation avec les dirigeant(e)s, de la cession à l'accompagnement au long cours." },
    { _key: "tm2", role: "Rigueur & chiffres", name: "Thierry Le Lidec", text: "Associé de formation comptable. Il ancre chaque décision dans les chiffres : trésorerie, marges, indicateurs, pour décider sur des faits." },
    { _key: "tm3", role: "Équipes & organisation", name: "Sarah Moraschetti", text: "Pôle ressources humaines. Elle audite l'organisation pour placer chacun(e) au bon rôle, optimiser le travail des équipes et améliorer l'ambiance au service de l'entreprise." },
  ],
  ctaTitle1: "Cession, rachat ou accompagnement ?",
  ctaTitle2: "Parlons-en.",
  ctaText: "Premier échange confidentiel et sans engagement.",
};

const essorPage = {
  _id: "essorPage",
  _type: "essorPage",
  intro: "De l'état des lieux à la performance, en 12 ou 24 mois. Quatre étapes pour décider les yeux ouverts.",
  steps: [
    { _key: "e1", name: "Constater", baseline: "Voir clair avant d'agir.", what: "Un audit complet de l'entreprise : forces, faiblesses et potentiel. On cartographie ce qui fonctionne, ce qui freine, et ce que vous ne voyez plus.", deliverables: ["Diagnostic global de l'entreprise (forces, faiblesses, opportunités).", "Cartographie des indicateurs clés réellement pilotables.", "Identification des dépendances critiques (clients, savoir-faire, dirigeant).", "Restitution écrite et discussion approfondie."], shift: "Vous repartez avec une lecture neuve de votre entreprise. Pas une critique : une photographie honnête sur laquelle bâtir." },
    { _key: "e2", name: "Consolider", baseline: "Renforcer la base avant d'accélérer.", what: "On optimise ce qui marche déjà et on corrige ce qui freine, avant de chercher à grandir. Stabiliser les fondations évite des mois de croissance brouillonne.", deliverables: ["Optimisation des process opérationnels essentiels.", "Renforcement de la structure financière (BFR, marges, trésorerie).", "Clarification de l'organisation et des responsabilités.", "Plan d'action mensuel sur les chantiers prioritaires."], shift: "L'entreprise gagne en lisibilité, en marge et en sérénité opérationnelle. Le dirigeant cesse d'éteindre des feux." },
    { _key: "e3", name: "Maîtriser", baseline: "Décider aux indicateurs, plus à l'instinct.", what: "On installe le tableau de bord du dirigeant : des chiffres clairs, des décisions éclairées, un cap tenu mois après mois. Vous reprenez la main.", deliverables: ["Construction du tableau de bord stratégique mensuel.", "Rituel mensuel structuré avec rapport d'activité.", "Anticipation des décisions clés à 3, 6 et 12 mois.", "Cadre d'arbitrage face aux opportunités et aux risques."], shift: "Vous décidez sur des faits, plus sur des intuitions. Les choix difficiles deviennent plus simples parce qu'ils sont préparés." },
    { _key: "e4", name: "Réaliser", baseline: "Concrétiser les projets qui comptent.", what: "On transforme la maîtrise en résultat : croissance, recrutements, valorisation de l'actif ou mise en vente. Ce qui semblait flou devient un projet exécutable.", deliverables: ["Conduite des projets stratégiques (croissance, recrutement, M&A).", "Préparation à la valorisation et à la cession le cas échéant.", "Bilan annuel ou semestriel approfondi.", "Continuité d'accompagnement entre les séances mensuelles."], shift: "Vous ne dirigez plus dans la réaction. Vous avancez vers un cap que vous avez choisi, et que vous tenez." },
  ],
  fitLabel: "Pour qui",
  fitTitle1: "À qui la méthode ESSOR",
  fitTitle2: "convient vraiment.",
  fitYesTitle: "C'est pour vous si…",
  fitYes: ["Vous êtes dans l'opérationnel et perdez le recul", "Vous traversez une période où votre entreprise stagne", "Vous préparez une cession à 18-36 mois", "Vous venez de racheter et voulez structurer"],
  fitNoTitle: "Ce n'est pas pour vous si…",
  fitNo: ["Vous cherchez une solution miracle en quelques semaines", "Vous voulez tout déléguer à un tiers", "Vous n'êtes pas prêt(e) à investir 3-4h par mois", "Vous attendez qu'on décide à votre place"],
  origineLabel: "Origine de la méthode",
  origineTitle1: "Née du terrain,",
  origineTitle2: "pas d'un livre.",
  origineLead: "ESSOR n'est pas sortie d'un manuel. Elle s'est forgée sur le terrain, affinée année après année, au contact réel des dirigeants et de leurs décisions.",
  origineSteps: [
    { _key: "o1", title: "Le terrain", text: "Adaptée de l'expérience de Bruno comme chef d'entreprise, au plus près des vraies contraintes." },
    { _key: "o2", title: "La rigueur", text: "Affinée avec Thierry Le Lidec, son associé de formation comptable, pour ancrer chaque décision dans les chiffres." },
    { _key: "o3", title: "Depuis 2021", text: "Appliquée à l'accompagnement des TPE/PME, avant une vente ou après un rachat." },
  ],
  convictionEyebrow: "La conviction Elity",
  convictionQuote: "Une bonne décision ne tombe pas du ciel.",
  convictionSub: "Elle se prépare, elle se construit, mois après mois.",
  ctaTitle1: "ESSOR appliqué",
  ctaTitle2: "à votre entreprise ?",
  ctaText: "Premier échange confidentiel, sans engagement. On regarde ensemble si la méthode vous correspond.",
};

const contactPage = {
  _id: "contactPage",
  _type: "contactPage",
  label: "Contact",
  title1: "Parlons de",
  title2: "votre projet.",
  sub: "Premier échange confidentiel, sans engagement. Nous prenons le temps de comprendre votre situation avant tout.",
  formTitle: "Votre situation",
  projectOptions: [
    "Je souhaite céder mon entreprise",
    "Je souhaite reprendre une entreprise",
    "Je cherche un accompagnement pour mon entreprise",
  ],
  consentText: "J'accepte que mes données soient utilisées dans le cadre de mon accompagnement chez Elity Conseils, en toute confidentialité.",
  submitLabel: "Envoyer ma demande",
  reassurance: "Confidentialité garantie par écrit",
  successTitle: "Demande envoyée.",
  successText: "Nous vous recontactons sous 24h en toute confidentialité.",
};

const casClientsPage = {
  _id: "casClientsPage",
  _type: "casClientsPage",
  introLabel: "Cas clients & actualités",
  introTitle1: "Ce que nous faisons,",
  introTitle2: "et ce que ça change.",
  // Cartes embarquees (texte + cartes dans le meme fichier).
  cases: caseStudies.map((c, i) => {
    const { _id, _type, order, ...rest } = c;
    return { _key: `case${i + 1}`, ...rest };
  }),
  articles: articles.map((a, i) => {
    const { _id, _type, slug, ...rest } = a;
    return { _key: `art${i + 1}`, ...rest };
  }),
  ctaTitle1: "Votre situation ressemble",
  ctaTitle2: "à l'une des leurs ?",
  ctaText: "Premier échange confidentiel et sans engagement, pour identifier le bon accompagnement.",
};

const cessionAcqOffers = offers.filter((o) => o.category !== "pilotage");
const pilotageOffers = offers.filter((o) => o.category === "pilotage");
const offersPage = {
  _id: "offersPage",
  _type: "offersPage",
  cessionLabel: "Vendre ou racheter une entreprise",
  cessionTitle1: "Trois niveaux d'accompagnement,",
  cessionTitle2: "une approche adaptée.",
  cessionBody: "Elity Conseils prépare votre stratégie. Procomm Océan Indien réalise la transaction.",
  offers: cessionAcqOffers.map((o, i) => {
    const { _id, _type, order, price, ...rest } = o;
    return { _key: `off${i + 1}`, ...rest };
  }),
  pilotageLabel: "Accompagnement de dirigeant(e)",
  pilotageTitle1: "Diriger seul(e), c'est arbitrer",
  pilotageTitle2: "dans le brouillard.",
  pilotageBody: "Votre comptable gère vos comptes. Mais qui décide vraiment avec vous ? Elity Dirigeant vous donne un cadre mensuel structuré, appuyé sur la méthode ESSOR.",
  pilotage: pilotageOffers.map((o, i) => {
    const { _id, _type, order, price, ...rest } = o;
    return { _key: `pil${i + 1}`, ...rest };
  }),
  ctaTitle1: "Un doute sur l'offre ?",
  ctaTitle2: "Réservez un échange gratuit.",
  ctaText: "30 minutes pour comprendre votre situation et identifier le bon format. Sans engagement.",
};

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  email: "contact@elityconseils.re",
  phone: "",
  linkedin: "https://www.linkedin.com/in/brunobenattar/",
  facebook: "https://www.facebook.com/ElityConseil",
  footerTagline: "Structurer aujourd'hui. Valoriser demain.",
  footerPartner: "En partenariat avec Procomm Océan Indien",
};

// createIfNotExists pour les singletons : on ne veut PAS ecraser les edits du
// client si on relance le seed. (Les autres docs utilisent createOrReplace.)
async function run() {
  const tx = client.transaction();
  // FAQ : documents de liste conserves.
  for (const doc of faqItems) {
    tx.createOrReplace(doc);
  }
  // Pages singletons : tout le texte + les cartes embarquees. createOrReplace lors
  // de ce seed pour garantir que TOUS les champs sont remplis (le client n'a pas
  // encore edite). Une fois le contenu valide, repasser en createIfNotExists.
  tx.createOrReplace(homePage);
  tx.createOrReplace(approchePage);
  tx.createOrReplace(offersPage);
  tx.createOrReplace(essorPage);
  tx.createOrReplace(casClientsPage);
  tx.createOrReplace(aboutPage);
  tx.createOrReplace(contactPage);
  tx.createOrReplace(siteSettings);
  // Nettoyage : anciens documents de liste (remplaces par les cartes embarquees).
  for (const id of ["case-garage", "case-hotel", "article-ceder-reunion-erreurs",
    "offer-cession-classique", "offer-cession-strategique", "offer-cession-premium",
    "offer-acq-decouverte", "offer-acq-audit", "offer-acq-integrale",
    "offer-pilotage-12", "offer-pilotage-24"]) {
    tx.delete(id);
  }
  const res = await tx.commit();
  console.log(`OK : ${res.results.length} documents crees/mis a jour dans Sanity.`);
}

run().catch((e) => {
  console.error("Echec du seed :", e.message);
  process.exit(1);
});
