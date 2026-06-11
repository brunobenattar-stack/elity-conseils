# Refonte design Elity Conseils — Lot de modifications (2026-06-11)

Demande de Bruno (via Tom). ~30 changements regroupés par thème. Décisions tranchées :
- Page Cas clients → **deux sous-pages distinctes** : `/cas-clients` + `/actualites`, sous une page parente.
- Contenu blog → **éditable via Sanity**.
- Féminisation → forme **`(e)`** entre parenthèses (épaulé(e), accompagné(e)…).
- Mot **« pilotage » / « piloter »** banni partout → remplacer par « copilotage » ou « on vous accompagne à piloter votre entreprise », jamais « pilotage d'entreprise ».

---

## 1. Page d'accueil

### 1.1 Supprimer la boussole rotative (desktop)
- Retirer `<StickyCompass />` de `app/page.tsx:16`.
- Supprimer le composant `components/StickyCompass.tsx` et son CSS (`globals.css` 2927-3025) si non réutilisé ailleurs.

### 1.2 Logo header desktop x2
- `.logo-mark` actuellement 46×46px (`globals.css:327`). Agrandir « deux fois plus grand » → cible **~92px** (à ajuster visuellement, header doit rester équilibré). Vérifier le rendu mobile (`.logo-name`/`.logo-sub` lignes 6542-6543).

### 1.3 Ordre des offres identique desktop/mobile
- Aujourd'hui mobile force Premium en premier via `order: -1` (`globals.css` 6215-6216).
- **Retirer** ces deux règles → ordre desktop conservé en mobile : Classique → Stratégique → Premium.

### 1.4 CTA final « Cession ou rachat ? »
- `app/page.tsx:175` → remplacer par **« Cession, rachat ou accompagnement ? »** puis em **« Parlons-en. »** (virgules, pas de tiret cadratin).

### 1.5 Carte offre Premium
- `components/CessionOffers.tsx:50` : « Elity Conseils + Procomm » → **« Elity Conseils + Procomm Océan Indien »**.
- `CessionOffers.tsx:40` pitch « Pour vendre dans les meilleures conditions. » tient sur 3 lignes en mobile → ajuster CSS pour **1-2 lignes max** (taille/largeur du pitch ou wrapping).
- Mobile : la lumière/glow de la carte Premium est coupée par l'élément juste en dessous → corriger le z-index / overflow / espacement pour que le halo ne soit pas tronqué.

### 1.6 Carte cabinet « Bruno Benattar » (HomeBrunoParallax)
- `components/HomeBrunoParallax.tsx:29` : « Franchisé Procomm · La Réunion · depuis 2015 » se casse mal (2015 seul sur 2e ligne). Forcer **« depuis 2015 » entier sur la 2e ligne**, le reste sur la 1re (non-breaking spaces ou `<br>`/`white-space`).
- Remplacer la photo de Bruno par la nouvelle image fournie (voir §6).

### 1.7 Section « Notre approche » (HomeStepsHorizontal)
- **Desktop** : cartes non alignées en hauteur (préparation vs mise en vente, diagnostic vs positionnement). Forcer hauteur égale (align stretch / min-height / grid rows).
- **Mobile** : numéros (`.accordion-num`) trop hauts par rapport au texte → aligner verticalement (centrer sur la ligne de titre).

### 1.8 Teaser « piloter sereinement »
- `app/page.tsx:66` em « piloter sereinement. » et `:69` description → reformuler sans « pilotage/piloter » seul (cf. règle globale §3). Section id `section-pilotage` peut rester (technique).

---

## 2. Page Approche

### 2.1 Remplacer le CTA bas de page
- `app/approche/page.tsx:153-161` (CtaFinal « Prêt à structurer votre cession ? ») → remplacer par **le même bloc que le CTA final de la home** : « Cession, rachat ou accompagnement ? / Parlons-en. »
- **Responsive** : le texte doit rester bien structuré sur mobile (avant « Prêt à structurer votre cession ? » tenait sur 1 ligne avec le « ? » seul en 2e ligne — éviter ce cas). Tester iPhone 14 Plus + autres modèles.

### 2.2 Marketing / RH / équipes (nouveau contenu) — PAGE APPROCHE
- Nouveau bloc sur la **page Approche**, après l'explication que l'accompagnement va **plus loin qu'un DAF** : audit des équipes, bonne personne au bon poste, optimisation du travail, ambiance, marketing, gestion des équipes.
- **Sarah MORASCHETTI** : citée dans ce bloc comme la personne du pôle RH/audit équipes. Pas de carte dédiée, juste dans le texte.
- **Thierry LE LIDEC** : associé, formation comptable → cité dans la carte « La rigueur » (`methode-essor:258`). Pas de carte dédiée.

---

## 3. Bannir « pilotage » sur tout le site
Remplacer toutes les occurrences listées (23) par « copilotage » ou « on vous accompagne à piloter votre entreprise », jamais « pilotage » nom seul ni « on pilote votre entreprise ».
Fichiers : `next.config.ts:20`, `app/layout.tsx:90`, `app/page.tsx` (66, 69, 152), `app/offres/page.tsx` (11, 27, 115), `app/methode-essor/page.tsx` (10, 12, 67, 104, 265, 278, 281), `app/a-propos/page.tsx:9`, `components/HomeTrajectoires.tsx:123`, `components/StickyCompass.tsx:12` (supprimé).
NB : garder les id techniques (`#pilotage`, `section-pilotage`) pour ne pas casser les ancres.

---

## 4. Page Offres

### 4.1 Renommer la section accompagnement
- `app/offres/page.tsx:115` label « Piloter son entreprise au quotidien » → **« Accompagnement de dirigeant(e) »**.

### 4.2 Cartes 12 mois / 24 mois → fond clair
- Aujourd'hui fond noir (`.offer-card-shell`). Passer 12 mois ET 24 mois sur **fond blanc/beige** (variante `.offer-card-cream` déjà existante, `globals.css` 4588-4617).
- Texte en **noir**, **contours en noir**.

### 4.3 Phrase de bas de page
- `app/offres/page.tsx:136` → **« Vous ne savez pas quelle offre vous convient ? Réservez un premier échange gratuit. »**

---

## 5. Page Méthode ESSOR

### 5.1 Bloc « Ce que ESSOR est / n'est pas » — SUPPRIMÉ
- **Supprimer entièrement** cette section (titre flou + carte trop ambiguë). Retirer le bloc `.essor-vs` (`methode-essor` ~152-165) et son CSS si non réutilisé.

### 5.2 Section « À qui convient la méthode »
- Supprimer la phrase « Vous dirigez seul et n'avez pas les moyens d'un directeur financier » (`:203`).
- `:205` « vous traversez un plateau de stagnation » → **« vous traversez une période où votre entreprise stagne »**.
- Appliquer féminisation `(e)`.

### 5.3 Bloc « Une bonne décision ne tombe pas du ciel »
- `methode-essor:277-278` disposition jugée moche → revoir la mise en page du texte (centrage, retours à la ligne, hiérarchie). Retirer « elle se pilote ».

---

## 6. Photo de Bruno
- Source : `~/Downloads/hf_20260610_112654_634c4729-8f76-4a8d-a490-6f29b954ee69.png` (3072×5504, 28,6 Mo). **À optimiser** (redimensionner + WebP/JPEG) avant intégration dans `/public`.
- Remplacer la photo de Bruno sur : home (HomeBrunoParallax) + page À propos + toute autre occurrence.

---

## 7. Page Cas clients → blog

### 7.1 Architecture
- Page parente + **2 sous-pages** : `/cas-clients` (études de cas) et `/actualites` (articles).
- Section « Cas clients » de la **home reste inchangée**.
- Déplacer « Une mission marquante » (actuellement page À propos `a-propos:102-125`) vers la zone Cas clients.

### 7.2 Sanity
- `caseStudy` existe déjà. Créer un schéma **`article`** (actualités) : title, slug, date, excerpt, body, cover, tags.
- Page Actualités : liste filtrable **par date**.
- Requêtes : ajouter `getArticles()`.

---

## 8. Formulaire Contact
- `components/ContactPageClient.tsx:10` option « Je veux être épaulé dans le pilotage de mon entreprise ».
- Ancienne formulation = « Je cherche un accompagnement mensuel ».
- Nouvelle : **« Je cherche un accompagnement pour mon entreprise »**. Page À propos `:176` CTA « Envie d'échanger avec Bruno ? » : forcer « Envie d'échanger » ligne 1, « avec Bruno ? » ligne 2.

---

## 9. Féminisation globale
Parcourir les textes adressés au visiteur et ajouter `(e)` : dirigeant(e), accompagné(e), épaulé(e), prêt(e), seul(e), sûr(e)… sans alourdir.

---

## 10. Responsive
Référence : iPhone 14 Plus (déjà travaillé). Vérifier que les autres modèles (SE, 13/14/15, Pro Max, Android moyens) ont un rendu cohérent. Points chauds : titres CTA, halo carte Premium, alignement numéros approche, cartes offres.

---

## Ordre d'exécution proposé
1. Quick wins textes + bannissement « pilotage » + féminisation (§3, §1.4, §4.1, §4.3, §5, §8).
2. CSS/layout (§1.2 logo, §1.3 ordre offres, §1.5 Premium, §1.6 cabinet, §1.7 approche, §4.2 cartes claires, §2.1 CTA approche).
3. Suppression StickyCompass (§1.1).
4. Photo Bruno (§6) — dépend du fichier fourni.
5. Contenu RH/Thierry/Sarah (§2.2).
6. Refonte blog Cas clients + Sanity `article` (§7) — le plus gros.

## Décisions finalisées
- Photo Bruno : `~/Downloads/hf_20260610_112654_…ee69.png` (à optimiser).
- CTA offres §4.3 : « Vous ne savez pas quelle offre vous convient ? Réservez un premier échange gratuit. »
- Option contact §8 : « Je cherche un accompagnement pour mon entreprise ».
- Section ESSOR est/n'est pas §5.1 : supprimée.
- Sarah & Thierry : cités dans les textes, pas de cartes dédiées. Bloc RH (Sarah) sur **page Approche**.
