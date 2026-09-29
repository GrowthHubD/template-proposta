from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from pathlib import Path
from xml.sax.saxutils import escape

BASE = Path(__file__).resolve().parents[1]
OUT = BASE / 'output' / 'pdf' / 'Proposta-Ugo-Celulares.pdf'
W, H = A4
C_BG = HexColor('#151515')
C_CARD = HexColor('#222222')
C_YELLOW = HexColor('#FFD21A')
C_RED = HexColor('#F12215')
C_WHITE = HexColor('#F8F8F8')
C_MUTED = HexColor('#C6C6C6')
C_EDGE = HexColor('#414141')
pdfmetrics.registerFont(TTFont('Arial', r'C:\Windows\Fonts\arial.ttf'))
pdfmetrics.registerFont(TTFont('ArialBold', r'C:\Windows\Fonts\arialbd.ttf'))
styles = {
 'body': ParagraphStyle('body', fontName='Arial', fontSize=11, leading=16, textColor=C_MUTED),
 'small': ParagraphStyle('small', fontName='Arial', fontSize=9, leading=13, textColor=C_MUTED),
 'card': ParagraphStyle('card', fontName='Arial', fontSize=10.5, leading=15, textColor=C_WHITE),
 'cardbold': ParagraphStyle('cardbold', fontName='ArialBold', fontSize=11, leading=15, textColor=C_WHITE),
}

def text(c, s, x, y, size=11, color=C_WHITE, font='Arial'):
 c.setFont(font, size); c.setFillColor(color); c.drawString(x,y,s)

def para(c, s, x, top, width, style='body'):
 p=Paragraph(escape(s), styles[style]); _,ht=p.wrap(width,1000); p.drawOn(c,x,top-ht); return top-ht

def page(c,num,label):
 c.setFillColor(C_BG); c.rect(0,0,W,H,fill=1,stroke=0)
 c.setFillColor(C_RED); c.rect(0,H-6,W,6,fill=1,stroke=0)
 c.setStrokeColor(C_EDGE); c.line(42,45,W-42,45)
 text(c,'UGO CELULARES  /  PROPOSTA COMERCIAL',42,29,8,C_MUTED,'ArialBold')
 text(c,f'{num:02d} / 03',W-79,29,8,C_MUTED,'ArialBold')
 text(c,label.upper(),42,H-48,9,C_YELLOW,'ArialBold')

def card(c,x,y,w,h):
 c.setFillColor(C_CARD); c.roundRect(x,y,w,h,15,stroke=0,fill=1)

def bullets(c,items,x,top,width,gap=9):
 for s in items:
  c.setFillColor(C_YELLOW); c.circle(x+4,top-6,3,fill=1,stroke=0)
  end=para(c,s,x+17,top,width-17,'card')
  top=end-gap
 return top

c=canvas.Canvas(str(OUT),pagesize=A4)
c.setTitle('Proposta Comercial | Ugo Celulares')
c.setAuthor('Proposta comercial')
page(c,1,'Apresentação')
logo=ImageReader(str(BASE/'src/assets/ugo-celulares.png'))
card(c,42,H-208,W-84,141)
c.drawImage(logo,(W-240)/2,H-179,width=240,height=120,mask='auto',preserveAspectRatio=True,anchor='c')
text(c,'A conversa começa no Zap.',42,H-255,28,C_WHITE,'ArialBold')
text(c,'A próxima venda também.',42,H-292,28,C_YELLOW,'ArialBold')
para(c,'Duas opções para receber e acompanhar os leads da Ugo Celulares no WhatsApp, com atendimento por texto e áudio.',42,H-315,W-84)
text(c,'INCLUSO NAS DUAS OPÇÕES',42,H-390,9,C_YELLOW,'ArialBold')
card(c,42,H-614,W-84,207)
bullets(c,[
 'Agente de conversação para receber leads no WhatsApp.',
 'Compreensão de mensagens de voz e resposta por texto ou áudio.',
 'Qualificação inicial: aparelho desejado, preferências e faixa de valor.',
 'Follow-up conforme regras e horários combinados com a loja.',
 'Encaminhamento para a equipe quando a conversa precisar de uma pessoa.'
],58,H-428,W-116,14)
text(c,'PRAZO DE IMPLANTAÇÃO',42,H-665,9,C_YELLOW,'ArialBold')
text(c,'A combinar após o alinhamento dos materiais e acessos.',42,H-689,12,C_WHITE)
para(c,'O agente usa as informações de produtos e condições fornecidas pela loja. O roteiro e a cadência de contato são validados antes da ativação.',42,H-722,W-84,'small')
c.showPage()

page(c,2,'As duas opções')
text(c,'Escolha como começar.',42,H-91,25,C_WHITE,'ArialBold')
card(c,42,H-290,W-84,168)
text(c,'OPÇÃO 1',58,H-149,9,C_YELLOW,'ArialBold')
text(c,'Agente no WhatsApp',58,H-179,17,C_WHITE,'ArialBold')
bullets(c,[
 'Recebe, entende e qualifica leads por texto e áudio.',
 'Responde dúvidas com base nas informações da Ugo Celulares.',
 'Faz follow-up e encaminha a conversa para a equipe.'
],58,H-201,W-116,9)
text(c,'OPÇÃO 2',42,H-337,9,C_YELLOW,'ArialBold')
text(c,'Agente + catálogo digital',42,H-367,17,C_WHITE,'ArialBold')
para(c,'Inclui tudo da opção 1, mais um catálogo digital e um painel administrador editável para a loja atualizar produtos, fotos, preços e disponibilidade.',42,H-388,W-84,'body')
imgs=[BASE/'src/assets/previa-catalogo.png',BASE/'src/assets/previa-painel.png']
labels=['PRÉVIA DO CATÁLOGO','PRÉVIA DO PAINEL ADMINISTRADOR']
imgW=(W-96)/2
for i,p in enumerate(imgs):
 x=42+i*(imgW+12)
 c.drawImage(str(p),x,H-658,width=imgW,height=imgW*860/1100,mask='auto')
 text(c,labels[i],x,H-674,8,C_YELLOW,'ArialBold')
para(c,'Imagens ilustrativas. Produtos, fotos e valores mostrados nas telas são demonstrativos.',42,H-713,W-84,'small')
c.showPage()

page(c,3,'Investimento')
text(c,'Investimento',42,H-92,27,C_WHITE,'ArialBold')
text(c,'Dois caminhos para atender melhor.',42,H-121,14,C_MUTED)
col=(W-96)/2
for i,(label,name,setup,month,desc) in enumerate([
 ('OPÇÃO 1','Agente no WhatsApp','R$ 1.200','R$ 900','Atendimento, áudio, qualificação e follow-up.'),
 ('OPÇÃO 2','Agente + catálogo','R$ 1.600','R$ 950','Tudo da opção 1, com catálogo e painel editável.')
]):
 x=42+i*(col+12); y=H-448; card(c,x,y,col,287)
 text(c,label,x+18,H-187,9,C_YELLOW,'ArialBold')
 text(c,name,x+18,H-220,16,C_WHITE,'ArialBold')
 para(c,desc,x+18,H-238,col-36,'small')
 text(c,'SETUP  ·  IMPLANTAÇÃO',x+18,H-302,8,C_MUTED,'ArialBold')
 text(c,setup,x+18,H-331,20,C_WHITE,'ArialBold')
 text(c,'MENSALIDADE',x+18,H-382,8,C_MUTED,'ArialBold')
 text(c,month,x+18,H-416,27,C_YELLOW,'ArialBold')
 text(c,'por mês',x+140,H-413,9,C_MUTED)
card(c,42,H-574,W-84,95)
text(c,'SETUP PARCELÁVEL NO CARTÃO DE CRÉDITO',58,H-508,11,C_YELLOW,'ArialBold')
para(c,'O setup é cobrado na implantação e pode ser dividido no cartão. Quantidade de parcelas e condições serão alinhadas na contratação. A mensalidade é cobrada separadamente.',58,H-524,W-116,'card')
text(c,'VAMOS CONVERSAR SOBRE A PROPOSTA?',42,H-625,12,C_WHITE,'ArialBold')
text(c,'WhatsApp: (31) 97262-0661',42,H-653,16,C_YELLOW,'ArialBold')
text(c,'Prazo de implantação: a combinar.',42,H-679,11,C_MUTED)
para(c,'A loja fornece as fotos e as informações dos produtos para o catálogo da opção 2.',42,H-715,W-84,'small')
c.showPage();c.save()
print(OUT)
