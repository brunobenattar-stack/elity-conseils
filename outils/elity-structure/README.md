# Outils ELITY STRUCTURE

Génère les trois PDF d'une proposition ELITY STRUCTURE à la charte ELITY CONSEILS :

| Fichier produit | Usage |
|---|---|
| `ELITY_STRUCTURE_Proposition_<NOM>_client.pdf` | 6 pages, version allégée : **la seule à remettre** au prospect |
| `ELITY_STRUCTURE_Version_complete_<NOM>_INTERNE.pdf` | 6 pages, avec l'architecture cible : pour le rendez-vous de restitution, **jamais remise avant signature** |
| `ELITY_STRUCTURE_Lettre_de_mission_<NOM>.pdf` | 2 pages, lieu de signature laissé en blanc |

## Utilisation

```bash
pip install reportlab pillow
cd outils/elity-structure
cp dossiers/exemple.py dossiers/dupont.py      # puis remplir le dossier
python3 proposition.py dossiers/dupont.py --light   # version client
python3 proposition.py dossiers/dupont.py           # version interne
python3 lettre.py dossiers/dupont.py
```

Les PDF sont écrits dans le dossier courant.

## Contenu

- `common.py` : charte (marine `#0D1B2A`, or `#C9A84C`, crème), polices Lora et Poppins, bandeau et pied de page, logo repris de `public/logo-elity-full.png`. TVA La Réunion 8,5 %.
- `proposition.py` : couverture, groupe actuel, six constats, page 4 (questions côté client, architecture côté interne), méthode, honoraires.
- `lettre.py` : lettre de mission en dix articles.
- `dossiers/exemple.py` : modèle fictif commenté. **Les vrais dossiers clients ne sont pas suivis par Git** (données personnelles), voir `.gitignore`.

## Contrôles avant envoi

```bash
pdftotext ELITY_STRUCTURE_Proposition_<NOM>_client.pdf - | grep -ciE "holding|dutreil|mère-fille|150-0|apport-cession|schéma cible"   # doit afficher 0
pdftotext <fichier>.pdf - | grep -ci "ben attar"   # doit afficher 0
```

Vérifier aussi visuellement chaque page (`pdftoppm -r 55 -png <fichier>.pdf apercu`) et les montants (HT, TVA, TTC, 50/50).
