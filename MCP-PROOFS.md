# MCP-PROOFS — Page d'accueil Elity Conseils

Preuves réelles des appels MCP 21st.dev pour la refonte de la home.

---

## [2026-05-16] searchQuery: "Heroes"

Résultats reçus :

1. **HeroSection** (similarity ~0.7)
   - Pattern : section hero avec `backgroundImage` Unsplash plein écran, logo top, slogan eyebrow, gros titre avec span accent, sous-titre, CTA, contactInfo bottom
   - Utilise `framer-motion` pour les animations
   - Code source contient `<HeroSection backgroundImage="https://plus.unsplash.com/premium_photo-..." />`
   - **SÉLECTIONNÉ** pour inspiration : photo réelle Unsplash en BG = respect rule design-god #3 (image hero obligatoire)

2. Autres heroes (non détaillés) : variantes split, fullscreen video

Adaptation projet Elity :
- Pattern retenu : photo Unsplash réelle en BG du hero (port maritime / aerial business district Réunion)
- Compass identité Elity conservé en élément overlay au-dessus de la photo
- Animations CSS existantes du projet conservées (équivalent fonctionnel à framer-motion)
- Couleurs : palette gold/dark Elity, pas la palette par défaut MCP

---

## [2026-05-16] searchQuery: "Steps"

Résultats reçus :

1. **HowItWorks** (similarity 0.53) : grille 3 cartes avec icône + titre + benefits bullets
2. **Steps with Descriptions** (similarity 0.28) : stepper horizontal Ark UI avec cercles numérotés
3. **Vertical Titles** (similarity 0.28) : timeline verticale stepper Ark UI

**TOUS REFUSÉS** :
- Pattern card-grid 3-icones = anti-pattern design-god rule #2 (anti-cartes)
- Pattern stepper UI = pour interface multi-étape applicative, pas section présentation
- Aucun ne correspond à une approche éditoriale "magazine" pour cabinet de conseil

→ Section "Notre approche" codée FROM-SCRATCH avec justification :
  - Layout éditorial avec alternance image gauche / image droite par étape
  - Numéros oversized Cormorant Garamond (rule design-god typo)
  - Border-t fin entre étapes (anti-cartes)
  - Aucun MCP n'allait à 80% pour cet usage
