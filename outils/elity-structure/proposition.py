"""Proposition ELITY STRUCTURE (6 pages A4).

Usage :
    python3 proposition.py dossiers/exemple.py --light   # version client (à remettre)
    python3 proposition.py dossiers/exemple.py           # version complète (usage interne)
"""
import sys
import common
from common import *
from reportlab.graphics.shapes import Drawing, Rect, String, Line
from reportlab.lib.colors import white

LIGHT = '--light' in sys.argv
D = load_dossier(sys.argv)

HT = float(D.HT); TVA = round(HT * 0.085, 2); TTC = HT + TVA
TITLE = 'Proposition ELITY STRUCTURE'
OUT = (f'ELITY_STRUCTURE_Proposition_{D.NOM}_client.pdf' if LIGHT else f'ELITY_STRUCTURE_Version_complete_{D.NOM}_INTERNE.pdf')
CW = W - ML - MR

# ---------------- couverture
def cover(c, doc):
    c.saveState()
    c.setFillColor(NAVY); c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setStrokeColor(GOLD); c.setLineWidth(0.6); c.rect(10 * mm, 10 * mm, W - 20 * mm, H - 20 * mm, stroke=1, fill=0)
    lw = 92 * mm; lh = lw * LOGO_RATIO
    c.drawImage(LOGO, (W - lw) / 2, H - 78 * mm, lw, lh, mask='auto')
    c.setFillColor(GOLD); c.setFont('Pop-SB', 9.5); c.drawCentredString(W / 2, H - 112 * mm, "P R O P O S I T I O N   D ' A C C O M P A G N E M E N T")
    c.setStrokeColor(GOLD); c.setLineWidth(0.8); c.line(W / 2 - 22 * mm, H - 118 * mm, W / 2 + 22 * mm, H - 118 * mm)
    c.setFillColor(white); c.setFont('Lora-B', 38); c.drawCentredString(W / 2, H - 137 * mm, 'ELITY STRUCTURE')
    c.setFillColor(GOLD); c.setFont('Lora-I', 20); c.drawCentredString(W / 2, H - 150 * mm, f'Formule {D.FORMULE}')
    c.setFillColor(GOLD_L); c.setFont('Pop', 10.5); c.drawCentredString(W / 2, H - 163 * mm, D.SOUS_TITRE)
    if not LIGHT:
        c.setFillColor(HexColor('#B23A3A')); c.roundRect(W / 2 - 34 * mm, H - 182 * mm, 68 * mm, 8 * mm, 2, fill=1, stroke=0)
        c.setFillColor(white); c.setFont('Pop-SB', 8.5); c.drawCentredString(W / 2, H - 179.2 * mm, 'VERSION COMPLÈTE — USAGE INTERNE')
    c.setFillColor(white); c.setFont('Pop', 10); c.drawCentredString(W / 2, H - 200 * mm, 'Préparée pour')
    c.setFont('Lora-SB', 17); c.drawCentredString(W / 2, H - 210 * mm, D.PREPAREE_POUR)
    c.setFillColor(GOLD_L); c.setFont('Pop', 9.2)
    c.drawCentredString(W / 2, H - 219 * mm, D.ENTITES_COUV)
    c.drawCentredString(W / 2, H - 225 * mm, D.LIEU_COUV)
    c.setStrokeColor(GOLD); c.line(30 * mm, 40 * mm, W - 30 * mm, 40 * mm)
    c.setFillColor(GOLD); c.setFont('Pop-SB', 8); c.drawCentredString(W / 2, 33 * mm, f'{D.MOIS.upper()}  ·  DOCUMENT CONFIDENTIEL  ·  WWW.ELITYCONSEILS.RE')
    c.setFillColor(HexColor('#9AA3AE')); c.setFont('Pop', 6.8); c.drawCentredString(W / 2, 26 * mm, CONFID)
    c.restoreState()

# ---------------- organigrammes
def box(d, x, y, w, h, t1, t2='', fill=CREAM, tc=NAVY, sc=GREY, stroke=GOLD, f1='Lora-B', s1=8.6):
    d.add(Rect(x, y, w, h, fillColor=fill, strokeColor=stroke, strokeWidth=0.8))
    d.add(String(x + w / 2, y + h - 12 if t2 else y + h / 2 - 3, t1, fontName=f1, fontSize=s1, fillColor=tc, textAnchor='middle'))
    if t2:
        for i, ln in enumerate(t2.split('\n')):
            d.add(String(x + w / 2, y + h - 23 - i * 9, ln, fontName='Pop', fontSize=6.6, fillColor=sc, textAnchor='middle'))

def org_now():
    w = CW; d = Drawing(w, 150); n = len(D.ORG_ACTUEL); gap = 8
    bw = min(130, (w - (n - 1) * gap) / n); total = n * bw + (n - 1) * gap; x0 = (w - total) / 2
    top = 104
    box(d, w / 2 - 80, top, 160, 40, D.DIRIGEANT[0], D.DIRIGEANT[1], fill=NAVY, tc=white, sc=GOLD_L)
    xs = [x0 + i * (bw + gap) for i in range(n)]
    d.add(Line(w / 2, top, w / 2, 80, strokeColor=GOLD, strokeWidth=0.9))
    if n > 1: d.add(Line(xs[0] + bw / 2, 80, xs[-1] + bw / 2, 80, strokeColor=GOLD, strokeWidth=0.9))
    for x, (a, b) in zip(xs, D.ORG_ACTUEL):
        d.add(Line(x + bw / 2, 80, x + bw / 2, 66, strokeColor=GOLD, strokeWidth=0.9))
        box(d, x, 22, bw, 44, a, b, s1=8.6 if bw > 115 else 7.8)
    d.add(String(w / 2, 4, D.ORG_NOTE, fontName='Pop-I', fontSize=6.6, fillColor=GREY, textAnchor='middle'))
    return d

def org_target():
    w = CW; d = Drawing(w, 200); L = dict(strokeColor=GOLD, strokeWidth=1)
    box(d, w / 2 - 95, 160, 190, 36, D.CIBLE_TETE[0], D.CIBLE_TETE[1], fill=NAVY, tc=white, sc=GOLD_L)
    sw = 140; area = w - sw - 13; n = len(D.CIBLE_FILIALES); gap = 8
    bw = min(120, (area - (n - 1) * gap) / n); xs = [i * (bw + gap) for i in range(n)]
    hc = (xs[0] + xs[-1] + bw) / 2; sc_ = w - sw / 2
    d.add(Line(w / 2, 160, w / 2, 146, **L)); d.add(Line(min(hc, w / 2), 146, sc_, 146, **L))
    d.add(Line(hc, 146, hc, 128, **L)); d.add(Line(sc_, 146, sc_, 124, **L))
    box(d, hc - 110, 90, 220, 38, D.CIBLE_HOLDING[0], D.CIBLE_HOLDING[1], fill=GOLD, tc=NAVY, sc=NAVY)
    d.add(Line(hc, 90, hc, 74, **L))
    if n > 1: d.add(Line(xs[0] + bw / 2, 74, xs[-1] + bw / 2, 74, **L))
    for x, (a, b) in zip(xs, D.CIBLE_FILIALES):
        d.add(Line(x + bw / 2, 74, x + bw / 2, 58, **L)); box(d, x, 22, bw, 36, a, b, s1=7.8)
    box(d, w - sw, 62, sw, 62, D.CIBLE_SCI[0], D.CIBLE_SCI[1], fill=CREAM2)
    dash = dict(strokeColor=GREY, strokeWidth=0.7, strokeDashArray=[3, 2])
    d.add(Line(xs[-1] + bw, 40, sc_, 40, **dash)); d.add(Line(sc_, 40, sc_, 62, **dash))
    d.add(String((xs[-1] + bw + sc_) / 2, 30, 'bail · loyers', fontName='Pop-I', fontSize=6.4, fillColor=GREY, textAnchor='middle'))
    d.add(String(w / 2, 4, "Schéma cible indicatif — à valider avec l'expert-comptable, l'avocat et le notaire du client.",
                 fontName='Pop-I', fontSize=6.6, fillColor=GREY, textAnchor='middle'))
    return d

story = [NextPageTemplate('content'), PageBreak()]

# ---------------- page 2 : votre groupe aujourd'hui
story += [Paragraph('VOTRE GROUPE AUJOURD\'HUI', ST['kicker']), Paragraph('Ce que vous avez construit', ST['h1']),
          Paragraph(D.INTRO, ST['body']), Spacer(1, 8), org_now(), Spacer(1, 6)]
rows = [[Paragraph(h, ST['cellh']) for h in ('Entité', 'Forme · création', 'Activité', 'Points clés')]]
for nom, siren, forme, act, pts in D.ENTITES:
    rows.append([Paragraph(f'{nom}<br/><font size="6.8" color="#6B7480">SIREN {siren}</font>', ST['cellb']),
                 Paragraph(forme, ST['cell']), Paragraph(act, ST['cell']), Paragraph(pts, ST['cell'])])
story += [zebra_table(rows, [38 * mm, 30 * mm, 38 * mm, CW - 106 * mm]), Spacer(1, 4), Paragraph(D.SOURCES, ST['small']), PageBreak()]

# ---------------- page 3 : constats
C = D.CONSTATS_CLIENT if LIGHT else D.CONSTATS_INTERNE
half = (CW - 8) / 2
cards = [card(t, x, i + 1, half) for i, (t, x) in enumerate(C)]
grid = Table([[cards[0], cards[1]], [cards[2], cards[3]], [cards[4], cards[5]]], colWidths=[half + 4, half + 4])
grid.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (0, -1), 8),
                          ('RIGHTPADDING', (1, 0), (1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 8), ('TOPPADDING', (0, 0), (-1, -1), 0)]))
story += [Paragraph('NOS PREMIERS CONSTATS', ST['kicker']), Paragraph('Six enjeux à traiter', ST['h1']),
          Paragraph("Ces constats reposent sur les seules informations publiques. Ils seront affinés et chiffrés lors du diagnostic, "
                    "avec vous et avec vos conseils habituels.", ST['body']), Spacer(1, 10), grid, Spacer(1, 14),
          Paragraph(f'« {D.CITATION} »', ST['quote']), PageBreak()]

# ---------------- page 4 (diffère selon la version)
if LIGHT:
    rows = []
    for i, (th, q) in enumerate(D.QUESTIONS):
        rows.append([Paragraph(f'<font name="Lora-B" size="17" color="#C9A84C">{i + 1:02d}</font>', ST['cell']),
                     Paragraph(f'<font name="Pop-SB" color="#C9A84C" size="7.6">{th.upper()}</font><br/>{q}', ST['bodyL'])])
    qt = Table(rows, colWidths=[16 * mm, CW - 16 * mm])
    qt.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'MIDDLE'), ('LINEBELOW', (0, 0), (-1, -2), 0.5, CREAM2),
                            ('TOPPADDING', (0, 0), (-1, -1), 6), ('BOTTOMPADDING', (0, 0), (-1, -1), 6), ('LEFTPADDING', (0, 0), (-1, -1), 2)]))
    story += [Paragraph('CE QUE LA MISSION VA TRANCHER', ST['kicker']), Paragraph('Les bonnes questions, avant les bonnes réponses', ST['h1']),
              qt, Spacer(1, 10),
              navy_box([Paragraph("Plusieurs leviers existent. Leur choix, leur combinaison et leur chiffrage dépendent de votre situation "
                                  "exacte et de vos objectifs : c'est l'objet du diagnostic et de l'étape ARCHITECTURE.", ST['whiteb'])], CW, 12),
              Spacer(1, 12), Paragraph("Ce que vous obtiendrez à l'issue de l'étape ARCHITECTURE", ST['h2'])]
    story += bullets(["<b>Deux à trois scénarios</b> d'organisation, construits à partir de votre situation réelle.",
                      "<b>Un chiffrage comparé</b> de chaque scénario : coût de mise en place, gains attendus, impôts à la sortie.",
                      "<b>Une recommandation argumentée</b> et un calendrier de mise en œuvre réaliste.",
                      "<b>Un rendez-vous de restitution</b> pour décider en connaissance de cause, avec vos conseils si vous le souhaitez."], sym='✓')
else:
    story += [Paragraph('ARCHITECTURE CIBLE ENVISAGÉE', ST['kicker']), Paragraph(D.CIBLE_TITRE, ST['h1']), org_target(), Spacer(1, 6),
              navy_box([Paragraph(f'<b>Hors périmètre :</b> {D.HORS_PERIMETRE}', ST['white'])], CW, 9), Spacer(1, 8)]
    rows = [[Paragraph('Levier', ST['cellh']), Paragraph('Mécanisme envisagé', ST['cellh']), Paragraph('Bénéfice pour le client', ST['cellh'])]]
    for a, b, c in D.LEVIERS:
        rows.append([Paragraph(a, ST['cellb']), Paragraph(b, ST['cell']), Paragraph(c, ST['cell'])])
    story += [zebra_table(rows, [24 * mm, 76 * mm, CW - 100 * mm]), Spacer(1, 8), card(D.ALTERNATIF[0], D.ALTERNATIF[1], None, CW)]
story.append(PageBreak())

# ---------------- page 5 : méthode
steps = [('01', 'DIAGNOSTIQUE', "Entretien approfondi, analyse des statuts, comptes, baux, financements et objectifs familiaux.", "Une cartographie complète de votre situation et de vos objectifs."),
         ('02', 'ARCHITECTURE', "Construction et chiffrage de 2 à 3 scénarios avec vos conseils habituels.", "Un rapport comparé et une recommandation argumentée, présentés en rendez-vous."),
         ('03', 'RÉDACTION', "Coordination des projets d'actes, statuts, conventions et baux avec les professionnels habilités.", "Des documents relus, expliqués et prêts à signer."),
         ('04', 'DÉPLOIEMENT', "Constitution des structures retenues et formalités, suivi auprès du greffe, des banques et des administrations." if LIGHT else D.DEPLOIEMENT_INTERNE,
          "Une organisation en place, immatriculée et opérationnelle."),
         ('05', 'ACTIVATION', "Mise en route des flux entre sociétés, calendrier juridique annuel, formation au pilotage.", "Un guide de fonctionnement et un suivi jusqu'à l'activation complète.")]
rows = [[Paragraph(h, ST['cellh']) for h in ('', 'Étape', 'Ce que nous faisons', 'Ce que vous recevez')]]
for n, e, a, r in steps:
    rows.append([Paragraph(f'<font name="Lora-B" size="15" color="#C9A84C">{n}</font>', ST['cell']), Paragraph(e, ST['cellb']), Paragraph(a, ST['cell']), Paragraph(r, ST['cell'])])
story += [Paragraph('NOTRE MÉTHODE', ST['kicker']), Paragraph('Cinq étapes, une seule trajectoire', ST['h1']),
          zebra_table(rows, [12 * mm, 28 * mm, (CW - 40 * mm) / 2, (CW - 40 * mm) / 2]), Spacer(1, 10),
          navy_box([Paragraph(f'<font name="Lora-SB" color="#C9A84C" size="12">{D.DUREE}</font>&nbsp;&nbsp;de la signature à l\'activation, '
                              'selon la réactivité des tiers (greffe, notaire, banques, administrations).', ST['white'])], CW, 10),
          Spacer(1, 10), Paragraph('Pièces à réunir pour le diagnostic', ST['h2'])]
k = (len(D.PIECES) + 1) // 2
pt = Table([[bullets(D.PIECES[:k], gap=3), bullets(D.PIECES[k:], gap=3)]], colWidths=[CW / 2, CW / 2])
pt.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 0)]))
story += [pt, PageBreak()]

# ---------------- page 6 : périmètre et honoraires
inc = bullets(["Diagnostic complet et rendez-vous de restitution", "2 à 3 scénarios chiffrés et recommandation",
               "Coordination des actes et des professionnels", "Suivi des formalités jusqu'à l'immatriculation",
               "Organisation des flux entre sociétés", "Guide de fonctionnement et formation au pilotage"], sym='✓', style=ST['card'], gap=2)
ext = bullets(["Commissaire aux apports (au-delà de 30 000 € d'apport en nature)", "Honoraires de notaire et droits liés à l'immobilier",
               "Frais de greffe, annonces légales et droits d'enregistrement", "Honoraires de vos conseils habituels (expert-comptable, avocat)"], sym='–', style=ST['card'], gap=2)
p1 = Table([[[Paragraph('Inclus dans la mission', ST['cardt'])] + inc]], colWidths=[half])
p2 = Table([[[Paragraph('Frais externes non inclus', ST['cardt'])] + ext]], colWidths=[half])
for p, bg in ((p1, CREAM), (p2, CREAM2)):
    p.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), bg), ('LINEABOVE', (0, 0), (-1, 0), 2, GOLD), ('LEFTPADDING', (0, 0), (-1, -1), 9),
                           ('RIGHTPADDING', (0, 0), (-1, -1), 8), ('TOPPADDING', (0, 0), (-1, -1), 7), ('BOTTOMPADDING', (0, 0), (-1, -1), 8)]))
pp = Table([[p1, p2]], colWidths=[half + 8, half]); pp.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0)]))
ws = ParagraphStyle('w', parent=ST['white'], fontSize=9); wsb = ParagraphStyle('wb', parent=ws, fontName='Pop-SB', textColor=GOLD, alignment=TA_RIGHT)
wr = ParagraphStyle('wr', parent=ws, alignment=TA_RIGHT)
hon = [[Paragraph(f'ELITY STRUCTURE — Formule {D.FORMULE} (forfait)', ws), Paragraph(eur(HT) + ' HT', wr)],
       [Paragraph('TVA 8,5 %', ws), Paragraph(eur(TVA), wr)],
       [Paragraph('<b>Total TTC</b>', ws), Paragraph(eur(TTC) + ' TTC', wsb)],
       [Paragraph('50 % à la signature de la lettre de mission', ws), Paragraph(eur(TTC / 2) + ' TTC', wr)],
       [Paragraph('50 % à la livraison (activation)', ws), Paragraph(eur(TTC / 2) + ' TTC', wr)]]
ht = Table(hon, colWidths=[CW - 45 * mm, 45 * mm])
ht.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), NAVY), ('LINEBELOW', (0, 2), (-1, 2), 0.8, GOLD), ('LINEBELOW', (0, 0), (-1, 1), 0.3, HexColor('#2A3B4E')),
                        ('TOPPADDING', (0, 0), (-1, -1), 5), ('BOTTOMPADDING', (0, 0), (-1, -1), 5), ('LEFTPADDING', (0, 0), (-1, -1), 10), ('RIGHTPADDING', (0, 0), (-1, -1), 10)]))
story += [Paragraph('PÉRIMÈTRE ET HONORAIRES', ST['kicker']), Paragraph('Un forfait clair, sans surprise', ST['h1']), pp, Spacer(1, 10), ht, Spacer(1, 5),
          Paragraph('<i>Nos honoraires sont forfaitaires et indépendants de toute décision ultérieure.</i>', ST['body']), Spacer(1, 3)]
if D.OPTION:
    story.append(Paragraph(f'{B()}&nbsp;&nbsp;<b>Option</b> : {D.OPTION}', ST['body']))
story += [Spacer(1, 7), Paragraph('Prochaines étapes', ST['h2'])]
nx = Table([[Paragraph(f'<font name="Lora-B" size="15" color="#C9A84C">{n}</font>', ST['cell']), Paragraph(t, ST['card'])] for n, t in
            [('1', 'Validation de la proposition et signature de la lettre de mission'), ('2', 'Transmission des pièces listées en page 5'),
             ('3', f'Rendez-vous de diagnostic sous 15 jours, {D.LIEU_RDV}')]], colWidths=[10 * mm, CW - 10 * mm])
nx.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'MIDDLE'), ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3)]))
story += [nx, Spacer(1, 10), Paragraph('« Je ne vends pas une prestation. Je sécurise une décision importante. »', ST['quote']), Spacer(1, 6),
          Paragraph('<font name="Lora-SB" size="11" color="#0D1B2A">Bruno BENATTAR</font><br/>PDG — ELITY CONSEILS SAS · +262 692 18 89 28 · contact@elityconseils.re', ST['center']),
          Spacer(1, 8),
          Paragraph("Les pistes évoquées sont indicatives et devront être validées avec vos conseils (expert-comptable, avocat, notaire). " + CONFID, ST['small'])]

doc = make_doc(OUT, TITLE, cover)
doc.build(story)
print(OUT)
