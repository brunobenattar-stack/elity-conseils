# Dossier ELITY STRUCTURE FICTIF : modèle à copier pour chaque prospect.
# Copier ce fichier en dossiers/<nom>.py (non suivi par Git), puis remplacer chaque valeur.
# Les espaces insécables avant ? : ; ! sont ajoutés automatiquement.
NOM = 'EXEMPLE'                      # suffixe des fichiers PDF
MOIS = 'Novembre 2026'
FORMULE = 'Premium'                  # Essentielle (4 000 € HT, 2-4 mois) ou Premium (7 000 € HT, 4-9 mois)
HT = 7000
DUREE = '4 à 9 mois'
DUREE_LETTRE = 'quatre à neuf mois'

# Couverture
SOUS_TITRE = 'Organiser, protéger et préparer la transmission de votre groupe'
PREPAREE_POUR = 'Monsieur Jean EXEMPLE'
ENTITES_COUV = 'SOCIÉTÉ ALPHA · SOCIÉTÉ BÊTA · SCI EXEMPLE'
LIEU_COUV = 'Saint-Paul, La Réunion'

# Page 2 : votre groupe aujourd'hui
INTRO = ("Monsieur EXEMPLE, en quinze ans vous avez bâti deux sociétés complémentaires et une SCI familiale. "
         "Cette proposition a un objet simple : donner à ce que vous avez construit l'organisation qui lui permettra "
         "de grandir, de vous protéger et, le moment venu, de se transmettre.")
DIRIGEANT = ('Jean EXEMPLE', 'Président des sociétés\nGérant de la SCI')
ORG_ACTUEL = [('SOCIÉTÉ ALPHA', 'SAS · 2010\nActivité principale · 1,2 M€'),
              ('SOCIÉTÉ BÊTA', 'SARL · 2016\nActivité secondaire · 0,4 M€'),
              ('SCI EXEMPLE', 'SCI · 2012\nLocaux d\'exploitation')]
ORG_NOTE = 'CA : derniers comptes publiés. Détention à confirmer lors du diagnostic.'
ENTITES = [('SOCIÉTÉ ALPHA', '000 000 000', 'SAS · 2010<br/>capital 10 000 €', 'Activité principale', 'Points clés relevés sur les comptes publiés.'),
           ('SOCIÉTÉ BÊTA', '000 000 000', 'SARL · 2016<br/>capital 5 000 €', 'Activité secondaire', 'Points clés relevés sur les comptes publiés.'),
           ('SCI EXEMPLE', '000 000 000', 'SCI · 2012<br/>capital 1 000 €', 'Location des locaux', 'Associés, bien détenu, bail.')]
SOURCES = 'Sources : RCS, BODACC, comptes déposés. Données à confirmer lors du diagnostic.'

# Page 3 : six constats. Version client = neutre, sans aucun point sensible ;
# version interne = constats d'origine, points sensibles compris.
CONSTATS_CLIENT = [('Constat 1', 'Texte neutre.'), ('Constat 2', 'Texte neutre.'), ('Constat 3', 'Texte neutre.'),
                   ('Constat 4', 'Texte neutre.'), ('Constat 5', 'Texte neutre.'), ('Constat 6', 'Texte neutre.')]
CONSTATS_INTERNE = [('Constat 1', 'Texte complet.'), ('Constat 2', 'Texte complet.'), ('Constat 3', 'Texte complet.'),
                    ('Constat 4', 'Texte complet.'), ('Constat 5', 'Texte complet.'), ('Points sensibles (oral uniquement)', 'À garder pour le rendez-vous.')]
CITATION = 'Ce que vous avez construit mérite une organisation à sa hauteur.'

# Page 4 version client : six questions sans réponse.
# INTERDITS dans tout le texte client : holding, Dutreil, mère-fille, 150-0 B ter, 151 octies/septies,
# apport-cession, schéma cible, nom d'une structure à créer.
QUESTIONS = [('Fiscalité', 'Comment faire circuler les résultats entre vos sociétés et vers votre patrimoine, au meilleur coût ?'),
             ('Organisation', "Faut-il rapprocher ou garder séparées vos deux activités ? Qui pilote l'ensemble ?"),
             ('Protection', "Comment mettre votre patrimoine personnel et familial à l'abri des risques de l'exploitation ?"),
             ('Transmission', 'Quelle place pour vos proches, et selon quel calendrier ?'),
             ('Immobilier', "Vos locaux doivent-ils rester dans la SCI, et à quelles conditions les louer à l'exploitation ?"),
             ('Continuité', 'Qui décide et qui signe si vous êtes absent demain ?')]

# Page 4 version interne : architecture cible.
CIBLE_TITRE = 'Une holding animatrice à la tête du groupe'
CIBLE_TETE = ('Jean EXEMPLE', '(+ famille à terme, par donations)')
CIBLE_HOLDING = ('HOLDING EXEMPLE (animatrice)', 'Direction, trésorerie centralisée, conventions de services\nNom et forme à arrêter (SAS)')
CIBLE_FILIALES = [('SOCIÉTÉ ALPHA', '100 %'), ('SOCIÉTÉ BÊTA', '100 %')]
CIBLE_SCI = ('SCI EXEMPLE', 'Famille (IR ou IS à arbitrer)\nPropriétaire des locaux\nBail commercial écrit aux filiales')
HORS_PERIMETRE = 'régimes matrimoniaux et donations (module Transmission familiale sur devis), contentieux éventuels.'
LEVIERS = [('Fiscalité', 'Mécanisme envisagé.', 'Bénéfice pour le client.'), ('Simplicité', 'Mécanisme envisagé.', 'Bénéfice pour le client.'),
           ('Protection', 'Mécanisme envisagé.', 'Bénéfice pour le client.'), ('Transmission', 'Mécanisme envisagé.', 'Bénéfice pour le client.'),
           ('Gouvernance', 'Mécanisme envisagé.', 'Bénéfice pour le client.')]
ALTERNATIF = ('Scénario alternatif : statu quo amélioré', 'Description du scénario alternatif et de ses limites.')
DEPLOIEMENT_INTERNE = 'Création de la holding, apports de titres, formalités, information des banques.'

# Pages 5-6
PIECES = ['Statuts à jour et extraits Kbis', 'Trois derniers bilans et liasses fiscales', 'Tableau de détention du capital',
          'Baux, titres de propriété et emprunts de la SCI', 'Contrats de prêt et garanties personnelles', 'Situation familiale et régime matrimonial']
OPTION = 'module Transmission familiale (donations, gouvernance, outils de transmission), sur devis.'   # '' pour masquer
LIEU_RDV = 'chez vous ou au cabinet'

# Lettre de mission (le lieu de signature reste toujours en blanc)
REF = 'ES-2026-11-JE'                # ES-AAAA-MM-<INITIALES>
DATE = '2 novembre 2026'
ANNEE = '2026'
SOUS_TITRE_LETTRE = 'Organisation, protection et préparation à la transmission du groupe EXEMPLE'
PERIMETRE_LETTRE = 'les sociétés SOCIÉTÉ ALPHA, SOCIÉTÉ BÊTA et la SCI EXEMPLE'
CLIENT_NOM = 'M. Jean EXEMPLE'
CLIENT_SIGNATURE = 'Jean EXEMPLE'
CLIENT_ADRESSE = '1, rue de l\'Exemple — 97460 Saint-Paul'
CLIENT_QUALITES = 'Président de SOCIÉTÉ ALPHA (SIREN 000 000 000) et de SOCIÉTÉ BÊTA (SIREN 000 000 000) ; gérant de la SCI EXEMPLE (SIREN 000 000 000)'
