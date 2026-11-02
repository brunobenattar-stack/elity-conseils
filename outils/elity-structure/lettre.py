"""Lettre de mission ELITY STRUCTURE (2 pages A4).

Usage :
    python3 lettre.py dossiers/exemple.py
"""
import sys
import common
from common import *

D = load_dossier(sys.argv)

HT = float(D.HT); TVA = round(HT * 0.085, 2); TTC = HT + TVA
OUT = f'ELITY_STRUCTURE_Lettre_de_mission_{D.NOM}.pdf'
CW = W - ML - MR
NB = ' '

art = ParagraphStyle('art', parent=ST['h2'], fontSize=10.4, leading=13, spaceBefore=5, spaceAfter=2)
tx = ParagraphStyle('tx', parent=ST['body'], fontSize=8.4, leading=11.8, spaceAfter=2)
txl = ParagraphStyle('txl', parent=ST['bodyL'], fontSize=8.4, leading=11.8)
it = ParagraphStyle('it', parent=txl, fontName='Pop-I', textColor=GREY)

def A(n, t): return Paragraph(f'<font color="#C9A84C">Article {n}</font>{NB}—{NB}{t}', art)
def P(t): return Paragraph(t, tx)

story = [Paragraph('LETTRE DE MISSION', ST['kicker']),
         Paragraph(f'ELITY STRUCTURE — Formule {D.FORMULE}', ParagraphStyle('t', parent=ST['h1'], fontSize=19, leading=23, spaceAfter=2)),
         Paragraph(D.SOUS_TITRE_LETTRE, ParagraphStyle('st', parent=ST['bodyL'], fontName='Lora-I', fontSize=10.5, textColor=GREY)),
         Spacer(1, 2), Paragraph(f'Réf. {D.REF} · Établie le {D.DATE}', ST['small']), Spacer(1, 7)]

half = (CW - 8) / 2
p_cab = [Paragraph('LE CABINET', ST['cellh']), Spacer(1, 2),
         Paragraph('<b>ELITY CONSEILS SAS</b>, au capital de 1 000 €', txl),
         Paragraph('Siège : 15, Ruelle 46 — 97436 Saint-Leu, La Réunion', txl),
         Paragraph('RCS Saint-Pierre B 902 290 147 · SIRET 902 290 147 00013', txl),
         Paragraph('TVA intracommunautaire FR93902290147', txl),
         Paragraph('Représentée par M. Bruno BENATTAR, PDG', txl),
         Paragraph('ci-après « le Cabinet »', it)]
p_cli = [Paragraph('LE CLIENT', ST['cellh']), Spacer(1, 2), Paragraph(f'<b>{D.CLIENT_NOM}</b>', txl),
         Paragraph(D.CLIENT_ADRESSE, txl), Paragraph('agissant en son nom personnel et en qualité de :', txl),
         Paragraph(D.CLIENT_QUALITES, txl), Paragraph('ci-après « le Client »', it)]
pt = Table([[p_cab, p_cli]], colWidths=[half + 4, half + 4])
pt.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), CREAM), ('LINEABOVE', (0, 0), (-1, 0), 2, GOLD), ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                        ('LEFTPADDING', (0, 0), (-1, -1), 9), ('RIGHTPADDING', (0, 0), (-1, -1), 9), ('TOPPADDING', (0, 0), (-1, -1), 7),
                        ('BOTTOMPADDING', (0, 0), (-1, -1), 8), ('LINEAFTER', (0, 0), (0, -1), 6, white)]))
story += [pt, Spacer(1, 4)]

story += [A(1, 'Objet'),
          P(f"Le Client confie au Cabinet, qui l'accepte, une mission de conseil en organisation de groupe ELITY STRUCTURE, formule {D.FORMULE}. "
            f"Elle porte sur {D.PERIMETRE_LETTRE}, et a pour objet de concevoir, faire valider et mettre en place l'organisation la mieux "
            "adaptée aux objectifs du Client en matière de fiscalité, de protection du patrimoine, de gouvernance et de préparation de la transmission."),
          A(2, 'Contenu de la mission'), P("La mission se déroule en cinq étapes :")]
story += bullets(["<b>DIAGNOSTIQUE</b> : analyse des statuts, comptes, baux, financements, de la situation familiale et des objectifs du Client ;",
                  "<b>ARCHITECTURE</b> : élaboration de deux à trois scénarios chiffrés, recommandation et rendez-vous de restitution ;",
                  "<b>RÉDACTION</b> : coordination des projets d'actes, statuts, conventions et baux avec les professionnels habilités ;",
                  "<b>DÉPLOIEMENT</b> : constitution des structures retenues, suivi des formalités jusqu'à l'immatriculation ;",
                  "<b>ACTIVATION</b> : mise en place des flux entre sociétés, calendrier juridique annuel et formation au pilotage."], style=tx, gap=1)
story += [A(3, 'Durée'),
          P(f"La mission prend effet à la signature de la présente lettre. Sa durée indicative est de {D.DUREE_LETTRE} ; elle dépend "
            "notamment de la réactivité des tiers (greffe, notaire, banques, administrations) et de la remise des pièces par le Client."),
          A(4, 'Engagements du Cabinet'),
          P("Le Cabinet exécute la mission avec diligence, dans le respect des règles de l'art, au titre d'une obligation de moyens. "
            "Il éclaire les choix du Client ; les décisions finales appartiennent au seul Client. Le Cabinet ne réalise aucun acte juridique "
            "réglementé et ne tient pas la comptabilité du Client."),
          A(5, 'Engagements du Client'),
          P("Le Client s'engage à remettre dans les meilleurs délais des informations et documents exacts et complets, à informer le Cabinet "
            "de tout fait nouveau susceptible d'affecter la mission, et à associer ses conseils habituels aux étapes qui le nécessitent."),
          A(6, 'Professionnels habilités'),
          P("Les actes relevant d'une profession réglementée (rédaction d'actes et consultations juridiques, actes notariés, missions "
            "d'expertise comptable, commissariat aux apports) sont réalisés ou validés par un avocat, un notaire, un expert-comptable ou un "
            "commissaire aux apports, choisis par le Client ou proposés par le Cabinet. Leurs honoraires sont facturés directement au Client."),
          PageBreak()]

R = lambda n, b=False: ParagraphStyle(n, parent=ST['cellb' if b else 'cell'], alignment=TA_RIGHT)
hon = [[Paragraph('Désignation', ST['cellh']), Paragraph('Montant', ParagraphStyle('h', parent=ST['cellh'], alignment=TA_RIGHT))],
       [Paragraph(f'ELITY STRUCTURE — Formule {D.FORMULE} (forfait)', ST['cell']), Paragraph(eur(HT) + ' HT', R('r1'))],
       [Paragraph('TVA 8,5 %', ST['cell']), Paragraph(eur(TVA), R('r2'))],
       [Paragraph('<b>Total TTC</b>', ST['cellb']), Paragraph(f'<b>{eur(TTC)} TTC</b>', R('r3', True))],
       [Paragraph('Acompte de 50 % à la signature de la présente lettre', ST['cell']), Paragraph(eur(TTC / 2) + ' TTC', R('r4'))],
       [Paragraph('Solde de 50 % à la livraison (étape ACTIVATION)', ST['cell']), Paragraph(eur(TTC / 2) + ' TTC', R('r5'))]]
ht = zebra_table(hon, [CW - 45 * mm, 45 * mm])
ht.setStyle(TableStyle([('LINEABOVE', (0, 3), (-1, 3), 0.8, GOLD), ('LINEBELOW', (0, 3), (-1, 3), 0.8, GOLD)]))

story += [A(7, 'Honoraires'),
          P("En rémunération de la mission, le Client versera au Cabinet des honoraires forfaitaires, indépendants de toute décision ultérieure :"),
          Spacer(1, 3), ht, Spacer(1, 4),
          P("Ne sont pas compris : les honoraires des professionnels visés à l'article 6, les frais de greffe, d'annonces légales et les droits "
            "d'enregistrement, ainsi que les frais de déplacement hors de l'île. Les factures sont payables à réception, par virement :"),
          Table([[Paragraph('IBAN FR76 1732 8844 0029 5179 3304 916 · BIC SWNBFR22 · Titulaire : ELITY CONSEILS SAS', ST['cellb'])]], colWidths=[CW],
                style=[('BACKGROUND', (0, 0), (-1, -1), CREAM), ('LINEBEFORE', (0, 0), (0, -1), 2.4, GOLD), ('LEFTPADDING', (0, 0), (-1, -1), 9),
                       ('TOPPADDING', (0, 0), (-1, -1), 6), ('BOTTOMPADDING', (0, 0), (-1, -1), 6)]),
          A(8, 'Résiliation'),
          P("Chaque partie peut mettre fin à la mission par lettre recommandée avec un préavis de quinze jours. Les travaux réalisés à la date "
            "de résiliation restent dus au prorata des étapes engagées ; l'acompte versé à la signature reste acquis au Cabinet."),
          A(9, 'Confidentialité et données personnelles'),
          P("Le Cabinet est tenu au secret sur toutes les informations reçues dans le cadre de la mission. Les données personnelles sont "
            "traitées pour les seuls besoins de la mission, conformément au RGPD ; le Client dispose d'un droit d'accès, de rectification et "
            "d'effacement auprès de contact@elityconseils.re."),
          A(10, 'Droit applicable'),
          P("La présente lettre est soumise au droit français. À défaut d'accord amiable, tout litige relèvera des tribunaux compétents "
            "du ressort de Saint-Pierre de La Réunion."),
          Spacer(1, 12),
          # Le lieu reste TOUJOURS en blanc : la signature peut se faire chez le client.
          Paragraph(f'Fait à ____________________, le ____ / ____ / {D.ANNEE}, en deux exemplaires originaux.', ParagraphStyle('f', parent=tx, fontName='Pop-M')),
          Spacer(1, 8)]
sig_l = [Paragraph('Pour le Cabinet', ST['cellh']), Spacer(1, 3), Paragraph('<b>Bruno BENATTAR</b>', txl),
         Paragraph('PDG — ELITY CONSEILS SAS', txl), Spacer(1, 52)]
sig_r = [Paragraph('Le Client', ST['cellh']), Spacer(1, 3), Paragraph(f'<b>{D.CLIENT_SIGNATURE}</b>', txl),
         Paragraph('Mention manuscrite « Bon pour accord »', it), Spacer(1, 52)]
sg = Table([[sig_l, sig_r]], colWidths=[half + 4, half + 4])
sg.setStyle(TableStyle([('BOX', (0, 0), (0, 0), 0.8, GOLD), ('BOX', (1, 0), (1, 0), 0.8, GOLD), ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                        ('LEFTPADDING', (0, 0), (-1, -1), 10), ('TOPPADDING', (0, 0), (-1, -1), 8)]))
story += [sg, Spacer(1, 8), Paragraph(CONFID, ST['small'])]

doc = make_doc(OUT, 'Lettre de mission ELITY STRUCTURE')
doc.build(story)
print(OUT)
