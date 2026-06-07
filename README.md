# Elity Conseils — Site Next.js

Site multipage premium pour **Elity Conseils** (cabinet de conseil en cession d'entreprise — La Réunion).

## Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript** strict
- **Tailwind-free** : CSS custom avec design tokens (palette or/noir)
- Polices : **Cormorant Garamond** + **Montserrat** via `next/font`
- Animations : IntersectionObserver + CSS keyframes (zéro lib)

## Pages

| Route | Description |
|---|---|
| `/` | Accueil avec hero animé, stats, teasers vers les autres sections |
| `/approche` | Méthode en 5 étapes (Diagnostic → Négociation) — détaillée |
| `/offres` | 3 offres : Classique / Stratégique / Premium |
| `/elity-dirigeant` | Accompagnement mensuel + méthode ESSOR + 2 formules |
| `/a-propos` | Bruno Benattar + tableau VS (entreprise préparée vs non) |
| `/contact` | Formulaire confidentiel + coordonnées directes |
| `/mentions-legales` | Mentions légales |
| `/confidentialite` | Politique de confidentialité (RGPD) |
| 404 | Page custom avec compas |

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

## Déploiement Vercel

```bash
npx vercel         # import projet
npx vercel --prod  # déploiement production
```

Aucune variable d'environnement requise.

## Structure

```
app/
├── layout.tsx              # Navbar + Footer + fonts + metadata
├── page.tsx                # Accueil
├── globals.css             # Tous les tokens + styles partagés
├── approche/page.tsx
├── offres/page.tsx
├── elity-dirigeant/page.tsx
├── a-propos/page.tsx
├── contact/page.tsx
├── mentions-legales/page.tsx
├── confidentialite/page.tsx
├── not-found.tsx
├── sitemap.ts
└── robots.ts

components/
├── Navbar.tsx              # Sticky + scroll state + burger mobile (client)
├── Footer.tsx
├── ProgressBar.tsx         # Barre lecture top viewport (client)
├── Logo.tsx                # Boussole + texte ELITY—CONSEILS—
├── CompassLogo.tsx         # SVG inline réutilisable
├── CompassVisual.tsx       # Boussole halo + anneaux + parallaxe (client)
├── HomeHero.tsx            # Hero accueil avec load stagger (client)
├── StatsCounter.tsx        # 4 chiffres animés via IntersectionObserver (client)
├── PageHero.tsx            # Header de page (crumbs + titre)
├── ApprocheSteps.tsx       # Grille 5 étapes
├── OffersGrid.tsx          # 3 cartes offres
├── CtaStrip.tsx            # Bande CTA réutilisable
├── ContactForm.tsx         # Formulaire + état succès (client)
├── Reveal.tsx              # Wrapper IntersectionObserver (client)
└── icons.tsx               # SVG inline (loupe, cible, boussole, etc.)
```

## Design tokens

Tous dans `app/globals.css` sous `:root`.

- Or : `--gold-main` `#c9a55a` (+ `accent`, `light`, `border`)
- Noirs : `--bg-deep` `#080808`, `--bg-primary` `#0d0d0d`, `--bg-secondary` `#111`
- Typo : `--serif` (Cormorant) pour titres, `--sans` (Montserrat) pour labels/corps

## Notes

- Le formulaire de contact n'envoie pas réellement — il affiche un message de succès. Pour brancher un backend, voir `components/ContactForm.tsx`.
- Le dossier `static-version/` contient la version one-page HTML originale, à titre de référence.
- `prefers-reduced-motion` est respecté partout.

