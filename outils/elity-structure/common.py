# Charte ELITY CONSEILS : couleurs, polices, styles, en-tête / pied de page.
# MOIS est lu au moment du rendu : le script appelant le remplace par celui du dossier.
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table,
                                TableStyle, KeepTogether, PageBreak, NextPageTemplate, Image)

HERE = os.path.dirname(os.path.abspath(__file__))
F = os.path.join(HERE, 'fonts')

NAVY = HexColor('#0D1B2A'); GOLD = HexColor('#C9A84C'); GOLD_L = HexColor('#E6D3A0')
CREAM = HexColor('#F7F2E7'); CREAM2 = HexColor('#EFE6D2'); INK = HexColor('#1E2A36'); GREY = HexColor('#6B7480')

for name, f in [('Lora', 'Lora-400'), ('Lora-SB', 'Lora-600'), ('Lora-B', 'Lora-700'), ('Lora-I', 'Lora-400i'),
                ('Lora-SBI', 'Lora-600i'), ('Pop', 'Poppins-400'), ('Pop-M', 'Poppins-500'), ('Pop-SB', 'Poppins-600'),
                ('Pop-B', 'Poppins-700'), ('Pop-I', 'Poppins-400i')]:
    pdfmetrics.registerFont(TTFont(name, os.path.join(F, f + '.ttf')))
pdfmetrics.registerFont(TTFont('DejaVu', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
from reportlab.lib.fonts import addMapping
addMapping('Pop', 0, 0, 'Pop'); addMapping('Pop', 1, 0, 'Pop-SB'); addMapping('Pop', 0, 1, 'Pop-I'); addMapping('Pop', 1, 1, 'Pop-SB')
addMapping('Lora', 0, 0, 'Lora'); addMapping('Lora', 1, 0, 'Lora-B'); addMapping('Lora', 0, 1, 'Lora-I'); addMapping('Lora', 1, 1, 'Lora-SBI')

# Logo du site (public/logo-elity-full.png) ; la rose des vents est découpée à la volée
from PIL import Image as _PIL
from reportlab.lib.utils import ImageReader
_LOGO_SRC = os.path.join(HERE, '..', '..', 'public', 'logo-elity-full.png')
_logo = _PIL.open(_LOGO_SRC).convert('RGBA')
LOGO = ImageReader(_logo)
COMPASS = ImageReader(_logo.crop((30, 20, 470, 450)))
LOGO_RATIO = 423 / 1113
W, H = A4
ML = MR = 18 * mm
MOIS = 'Novembre 2026'
FOOT = ("ELITY CONSEILS SAS · 15, Ruelle 46 — 97436 Saint-Leu · RCS Saint-Pierre B 902 290 147 · "
        "contact@elityconseils.re · www.elityconseils.re")
CONFID = ("Document confidentiel. Son contenu et la méthode présentée sont la propriété du cabinet "
          "ELITY CONSEILS et ne peuvent être communiqués à des tiers.")

def S(name, **kw):
    base = dict(fontName='Pop', fontSize=9.2, leading=13.4, textColor=INK)
    base.update(kw); return ParagraphStyle(name, **base)

ST = {
    'kicker': S('kicker', fontName='Pop-SB', fontSize=8.2, textColor=GOLD, leading=11, spaceAfter=2),
    'h1': S('h1', fontName='Lora-B', fontSize=21, leading=25, textColor=NAVY, spaceAfter=8),
    'h2': S('h2', fontName='Lora-SB', fontSize=12.5, leading=16, textColor=NAVY, spaceBefore=6, spaceAfter=4),
    'body': S('body', alignment=TA_JUSTIFY),
    'bodyL': S('bodyL'),
    'small': S('small', fontSize=7.6, leading=10.4, textColor=GREY),
    'cell': S('cell', fontSize=8.1, leading=11),
    'cellb': S('cellb', fontName='Pop-SB', fontSize=8.1, leading=11, textColor=NAVY),
    'cellh': S('cellh', fontName='Pop-SB', fontSize=8, leading=10.5, textColor=GOLD),
    'quote': S('quote', fontName='Lora-I', fontSize=12.5, leading=17, textColor=NAVY, alignment=TA_CENTER),
    'cardt': S('cardt', fontName='Lora-B', fontSize=10.6, leading=13.5, textColor=NAVY, spaceAfter=3),
    'card': S('card', fontSize=8.2, leading=11.6),
    'white': S('white', textColor=white, fontSize=9.4, leading=13.6),
    'whiteb': S('whiteb', fontName='Lora-SB', textColor=white, fontSize=11, leading=15),
    'center': S('center', alignment=TA_CENTER),
}

def B(sym='◆'):
    return f'<font name="DejaVu" color="#C9A84C">{sym}</font>'

def bullets(items, sym='◆', style=None, gap=2):
    st = style or ST['bodyL']
    out = []
    for it in items:
        out.append(Paragraph(f'{B(sym)}&nbsp;&nbsp;{it}', ParagraphStyle('b', parent=st, leftIndent=11, firstLineIndent=-11, spaceAfter=gap)))
    return out

def header_footer(title):
    def draw(c, doc):
        c.saveState()
        bh = 19 * mm
        c.setFillColor(NAVY); c.rect(0, H - bh, W, bh, fill=1, stroke=0)
        c.drawImage(COMPASS, ML, H - bh + 2.6 * mm, 13.8 * mm, 13.8 * mm, mask='auto')
        c.setFont('Lora-B', 10.5); c.setFillColor(white); c.drawString(ML + 17 * mm, H - 9.3 * mm, 'ELITY CONSEILS')
        c.setFont('Pop', 6.8); c.setFillColor(GOLD_L); c.drawString(ML + 17 * mm, H - 13.6 * mm, 'Structurer aujourd\'hui. Valoriser demain.')
        c.setFont('Lora-SB', 10); c.setFillColor(GOLD); c.drawRightString(W - MR, H - 9.3 * mm, title)
        c.setFont('Pop', 6.8); c.setFillColor(white); c.drawRightString(W - MR, H - 13.6 * mm, f'Document confidentiel — {MOIS}')
        c.setStrokeColor(GOLD); c.setLineWidth(1.2); c.line(0, H - bh, W, H - bh)
        c.setStrokeColor(GOLD); c.setLineWidth(0.5); c.line(ML, 13 * mm, W - MR, 13 * mm)
        c.setFont('Pop', 6.3); c.setFillColor(GREY); c.drawString(ML, 9 * mm, FOOT)
        c.setFont('Pop-SB', 7.5); c.setFillColor(NAVY); c.drawRightString(W - MR, 9 * mm, str(doc.page))
        c.restoreState()
    return draw

def make_doc(path, title, cover_fn=None):
    doc = BaseDocTemplate(path, pagesize=A4, leftMargin=ML, rightMargin=MR, topMargin=27 * mm, bottomMargin=19 * mm,
                          title=title, author='ELITY CONSEILS — Bruno BENATTAR')
    content = Frame(ML, 19 * mm, W - ML - MR, H - 46 * mm, id='c', leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    tpls = []
    if cover_fn:
        tpls.append(PageTemplate('cover', frames=[Frame(0, 0, W, H, id='cv')], onPage=cover_fn))
    tpls.append(PageTemplate('content', frames=[content], onPage=header_footer(title)))
    doc.addPageTemplates(tpls)
    return doc

def card(title, text, num=None, width=None):
    t = f'<font color="#C9A84C">{num:02d}</font>&nbsp;&nbsp;{title}' if num else title
    inner = [Paragraph(t, ST['cardt']), Paragraph(text, ST['card'])]
    tb = Table([[inner]], colWidths=[width])
    tb.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), CREAM), ('LINEBEFORE', (0, 0), (0, -1), 2.4, GOLD),
                            ('LEFTPADDING', (0, 0), (-1, -1), 9), ('RIGHTPADDING', (0, 0), (-1, -1), 8),
                            ('TOPPADDING', (0, 0), (-1, -1), 7), ('BOTTOMPADDING', (0, 0), (-1, -1), 8), ('VALIGN', (0, 0), (-1, -1), 'TOP')]))
    return tb

def navy_box(flowables, width, pad=10):
    tb = Table([[flowables]], colWidths=[width])
    tb.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), NAVY), ('LEFTPADDING', (0, 0), (-1, -1), pad), ('RIGHTPADDING', (0, 0), (-1, -1), pad),
                            ('TOPPADDING', (0, 0), (-1, -1), pad - 2), ('BOTTOMPADDING', (0, 0), (-1, -1), pad), ('LINEBEFORE', (0, 0), (0, -1), 2.4, GOLD)]))
    return tb

def zebra_table(data, widths, header=True, navy_header=True):
    tb = Table(data, colWidths=widths, repeatRows=1 if header else 0)
    sty = [('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 6), ('RIGHTPADDING', (0, 0), (-1, -1), 6),
           ('TOPPADDING', (0, 0), (-1, -1), 5), ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
           ('LINEBELOW', (0, 0), (-1, -1), 0.4, CREAM2)]
    if header and navy_header:
        sty += [('BACKGROUND', (0, 0), (-1, 0), NAVY), ('LINEBELOW', (0, 0), (-1, 0), 1.2, GOLD)]
    for i in range(1 if header else 0, len(data)):
        if (i % 2 == 0): sty.append(('BACKGROUND', (0, i), (-1, i), CREAM))
    tb.setStyle(TableStyle(sty)); return tb

def eur(x):
    s = f'{x:,.2f}'.replace(',', ' ').replace('.', ',')
    return (s[:-3] if s.endswith(',00') else s) + ' €'

# ---------------------------------------------------------------- chargement d'un dossier client
import re as _re, importlib.util as _ilu

def fr(s):
    """Typographie française : espace insécable avant ? ; : ! et après « / avant »."""
    s = _re.sub(r' ([?;:!»])', ' \\1', s)
    return s.replace('« ', '« ')

def _fr_deep(v):
    if isinstance(v, str): return fr(v)
    if isinstance(v, (list, tuple)): return type(v)(_fr_deep(x) for x in v)
    return v

def load_dossier(argv):
    path = next(a for a in argv[1:] if a.endswith('.py'))
    spec = _ilu.spec_from_file_location('dossier', path); d = _ilu.module_from_spec(spec); spec.loader.exec_module(d)
    for k in dir(d):
        if k.isupper(): setattr(d, k, _fr_deep(getattr(d, k)))
    global MOIS
    MOIS = d.MOIS
    return d
