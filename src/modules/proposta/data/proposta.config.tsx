import { MessageCircle, Mic, UserRoundCheck, RotateCcw, Smartphone, Settings2, Target, Lightbulb, Check, AudioLines } from "lucide-react";
import type { PropostaConfig } from "../types";
import marca from "@/assets/ugo-celulares.png";
import catalogo from "@/assets/previa-catalogo.png";
import painel from "@/assets/previa-painel.png";

const ConversaMockup = () => (
  <figure className="glass-dark rounded-3xl overflow-hidden border border-primary/20">
    <div className="flex items-center gap-3 p-5 border-b border-white/10">
      <MessageCircle className="w-6 h-6 text-primary" />
      <div><p className="font-medium text-sm">Ugo Celulares</p><p className="text-xs text-muted-foreground">Assistente virtual</p></div>
    </div>
    <div className="p-5 sm:p-6 space-y-4 text-sm leading-relaxed">
      <div className="ml-8 p-4 rounded-2xl rounded-tr-sm bg-white/10">
        <div className="flex items-center gap-3"><Mic className="w-4 h-4" /><AudioLines className="w-24 h-6 text-foreground/70" /><span className="text-xs">0:08</span></div>
        <p className="mt-2 text-xs text-foreground/70">“Oi! Estou procurando um celular com câmera boa.”</p>
      </div>
      <div className="mr-6 p-4 rounded-2xl rounded-tl-sm bg-primary/15 border border-primary/20">Oi! Sou o assistente virtual da Ugo Celulares. Você prefere alguma marca? E qual faixa de valor tem em mente?</div>
      <div className="ml-8 p-4 rounded-2xl rounded-tr-sm bg-white/10">Pode ser Samsung. Quero ver as opções.</div>
      <div className="mr-6 p-4 rounded-2xl rounded-tl-sm bg-primary/15 border border-primary/20"><div className="flex items-center gap-3"><AudioLines className="w-24 h-6 text-primary" /><span className="text-xs">Resposta em áudio</span></div><p className="mt-2 text-xs text-foreground/70">O agente entende a mensagem e continua a conversa.</p></div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2"><Check className="w-4 h-4 text-primary" /> Interesse identificado para a equipe da loja</div>
    </div>
    <figcaption className="px-5 pb-5 text-xs text-muted-foreground">Conversa ilustrativa. O roteiro será adaptado à loja.</figcaption>
  </figure>
);

const FollowupMockup = () => (
  <figure className="glass-dark rounded-3xl p-6 sm:p-8 border border-primary/20">
    <div className="flex items-center gap-3 mb-7"><RotateCcw className="w-5 h-5 text-primary" /><p className="font-medium">Uma conversa com próximo passo</p></div>
    <ol className="space-y-6">
      {[
        { numero: "01", titulo: "O cliente demonstrou interesse", texto: "O agente identifica o aparelho e a preferência informada." },
        { numero: "02", titulo: "A conversa ficou sem resposta", texto: "O retorno segue os intervalos e limites combinados com a loja." },
        { numero: "03", titulo: "O agente retoma o contato", texto: "“Oi! Quer continuar vendo as opções de celular?”" },
      ].map((etapa) => <li key={etapa.numero} className="flex gap-4"><span className="text-primary text-sm font-medium pt-0.5">{etapa.numero}</span><div><p className="text-sm font-medium mb-1">{etapa.titulo}</p><p className="text-sm text-muted-foreground leading-relaxed">{etapa.texto}</p></div></li>)}
    </ol>
    <figcaption className="mt-7 pt-5 border-t border-white/10 text-xs text-muted-foreground">Fluxo ilustrativo. O follow-up para quando o cliente pede ou a equipe assume.</figcaption>
  </figure>
);

const PreviaImagem = ({ src, alt, legenda }: { src: string; alt: string; legenda: string }) => (
  <figure className="space-y-4">
    <a href={src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl border border-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4" aria-label={`Ampliar: ${alt}`}>
      <img src={src} alt={alt} width={1100} height={860} loading="lazy" className="w-full h-auto" />
    </a>
    <figcaption className="text-xs text-muted-foreground leading-relaxed">{legenda} Clique na imagem para ampliar.</figcaption>
  </figure>
);

export const proposta: PropostaConfig = {
  hero: {
    badge: "PROPOSTA COMERCIAL PARA UGO CELULARES",
    titulo: "A conversa começa no Zap.",
    tituloDestaque: "A próxima venda também.",
    subtitulo: "Duas opções para receber seus leads: um agente de IA no WhatsApp ou o agente com catálogo digital e painel administrador editável.",
    logoSrc: marca, logoAlt: "Ugo Celulares",
    ctaLabel: "Comparar as duas opções", scrollTargetId: "investimento",
  },
  marquee: { items: ["AGENTE NO WHATSAPP", "ENTENDE E ENVIA ÁUDIO", "QUALIFICAÇÃO DE LEADS", "FOLLOW-UP AUTOMÁTICO", "CATÁLOGO NA OPÇÃO 2", "PAINEL EDITÁVEL"] },
  momentoAtual: {
    eyebrow: "DO PRIMEIRO OI AO INTERESSE DE COMPRA",
    titulo: "Cada lead merece uma conversa.",
    subtitulo: "A proposta cuida da recepção e das dúvidas iniciais, para a equipe da Ugo Celulares concentrar atenção nas negociações.",
    desafio: { titulo: "O desafio do atendimento manual", icone: Target, items: ["Responder perguntas sobre modelos, valores e condições enquanto atende outros clientes.", "Ouvir cada áudio e entender o que a pessoa está buscando.", "Lembrar de retomar conversas que ficaram sem resposta."] },
    solucao: { titulo: "O agente entra para ajudar", icone: Lightbulb, items: ["Recebe os leads no WhatsApp e responde com as informações aprovadas pela loja.", "Entende mensagens de voz, responde por texto ou áudio e identifica o interesse.", "Faz follow-up e encaminha para a equipe quando a conversa precisa de uma pessoa."] },
  },
  ecossistema: {
    eyebrow: "INCLUSO NAS DUAS OPÇÕES", titulo: "Um agente. A conversa inteira.",
    subtitulo: "Da recepção ao retorno, com linguagem e regras de atendimento adaptadas à Ugo Celulares.",
    pilares: [
      { icone: MessageCircle, titulo: "Recepção no WhatsApp", descricao: "Atende quem chega pelo Zap e inicia a conversa sobre o que o cliente procura." },
      { icone: Mic, titulo: "Entende e envia áudio", descricao: "Compreende mensagens de voz e pode responder em áudio, além de texto." },
      { icone: UserRoundCheck, titulo: "Qualificação dos leads", descricao: "Identifica modelo desejado, preferências e faixa de investimento informada." },
      { icone: RotateCcw, titulo: "Follow-up automático", descricao: "Retoma conversas conforme a cadência combinada, respeitando pedidos de parada." },
      { icone: Smartphone, titulo: "Informações da loja", descricao: "Responde dúvidas sobre aparelhos e condições com base no conteúdo fornecido." },
      { icone: Settings2, titulo: "Passagem para a equipe", descricao: "Encaminha negociações e dúvidas que precisam de atendimento humano." },
    ],
  },
  featureTabs: { tabs: [
    { label: "OPÇÕES 1 E 2", icone: MessageCircle, titulo: "O cliente fala. O agente entende.", descricao: "Um agente de conversação para receber os leads da Ugo Celulares no WhatsApp. Ele conduz o primeiro atendimento com naturalidade e prepara a conversa para a equipe.", itens: ["Recebe mensagens de texto e áudio", "Envia respostas por texto e áudio", "Identifica o interesse de compra", "Segue as informações aprovadas pela loja"], mockup: <ConversaMockup /> },
    { label: "OPÇÕES 1 E 2", icone: RotateCcw, titulo: "O contato não termina no primeiro oi.", descricao: "Quando a conversa fica parada, o agente pode retomar o contato. A frequência, os horários e o limite de tentativas serão definidos com a loja.", itens: ["Retorno contextualizado", "Cadência de follow-up configurável", "Interrupção quando o cliente solicitar", "Encaminhamento para atendimento humano"], mockup: <FollowupMockup /> },
    { label: "EXCLUSIVO DA OPÇÃO 2", icone: Smartphone, titulo: "Uma vitrine para enviar na conversa.", descricao: "Além do agente, criamos um catálogo digital para o cliente conhecer os aparelhos pelo celular e chamar a loja no WhatsApp com interesse em um produto.", itens: ["Produtos com fotos e descrições", "Preços e disponibilidade visíveis", "Navegação pelo celular", "Botão de interesse no WhatsApp"], mockup: <PreviaImagem src={catalogo} alt="Prévia do catálogo digital da Ugo Celulares com busca, categorias e aparelhos" legenda="Prévia ilustrativa do catálogo. Produtos, imagens de aparelhos e valores são demonstrativos; o visual final será validado com a loja." /> },
    { label: "EXCLUSIVO DA OPÇÃO 2", icone: Settings2, titulo: "A loja atualiza. O catálogo acompanha.", descricao: "Um painel administrador editável para manter a vitrine em dia. A equipe poderá cadastrar aparelhos, trocar fotos e ajustar informações sem depender de uma alteração no site a cada produto.", itens: ["Cadastro e edição de produtos", "Atualização de fotos, preços e descrições", "Controle de disponibilidade", "Publicação e ocultação de produtos"], mockup: <PreviaImagem src={painel} alt="Prévia do painel administrador com lista de produtos e formulário de edição" legenda="Prévia ilustrativa do painel. Os dados são fictícios e mostram as funções propostas; não representam um sistema já implantado." /> },
  ] },
  jornada: {
    eyebrow: "PRAZO DE IMPLANTAÇÃO A COMBINAR", titulo: "Da configuração", tituloDestaque: "ao primeiro atendimento.",
    subtitulo: "O cronograma será definido com a Ugo Celulares após a escolha da opção e o alinhamento dos materiais e acessos necessários.",
    etapas: [
      { numero: 1, titulo: "Alinhamento", descricao: "Definimos o tom de voz, as perguntas iniciais, as informações da loja e as regras de follow-up." },
      { numero: 2, titulo: "Configuração", descricao: "Preparamos o agente no WhatsApp. Na opção 2, também construímos o catálogo e o painel administrador." },
      { numero: 3, titulo: "Validação", descricao: "Testamos mensagens, áudios, retornos e encaminhamento. A loja revisa os fluxos antes da ativação." },
      { numero: 4, titulo: "Ativação", descricao: "Colocamos o escopo aprovado em operação e orientamos a equipe sobre o uso da solução escolhida." },
    ],
  },
  precos: {
    eyebrow: "INVESTIMENTO", titulo: "Escolha como começar.",
    planos: [
      { eyebrow: "OPÇÃO 1", nome: "Agente no WhatsApp", descricao: "Para começar pela recepção e pelo acompanhamento dos leads no Zap.", valor: "R$ 900", periodo: "/mês", rotuloValor: "mensalidade", setupValor: "R$ 1.200", setupCondicoes: "Pode ser parcelado no cartão de crédito.", itens: ["Agente de conversação no WhatsApp", "Recepção e qualificação dos leads", "Compreensão e envio de áudio", "Respostas por texto com informações da loja", "Follow-up conforme regras combinadas", "Encaminhamento para a equipe da loja"], observacao: "O setup é cobrado apenas na implantação e pode ser parcelado no cartão de crédito, além da mensalidade. Esta opção contempla o agente, sem criação de catálogo ou painel administrador." },
      { eyebrow: "OPÇÃO 2", nome: "Agente + catálogo", descricao: "Atendimento no Zap com uma vitrine digital que a própria loja pode atualizar.", valor: "R$ 950", periodo: "/mês", rotuloValor: "mensalidade", setupValor: "R$ 1.600", setupCondicoes: "Pode ser parcelado no cartão de crédito.", destaque: true, itens: ["Tudo da opção 1, incluindo áudio e follow-up", "Criação do catálogo digital para celular", "Produtos com fotos, descrição e preço", "Painel administrador editável", "Gestão de produtos e disponibilidade", "Botão de interesse pelo WhatsApp"], observacao: "O setup é cobrado apenas na implantação e pode ser parcelado no cartão de crédito, além da mensalidade. Inclui a criação do catálogo e do painel. A loja fornece fotos e informações dos produtos." },
    ],
  },
  cta: {
    eyebrow: "PRÓXIMO PASSO", titulo: "Vamos preparar o WhatsApp", tituloDestaque: "da Ugo Celulares?",
    descricao: "Escolha a opção que faz sentido para a loja. Depois, alinhamos o prazo de implantação, as condições de contratação e os materiais para começar.",
    botaoLabel: "Conversar sobre a proposta",
    botaoLink: "https://wa.me/5531972620661?text=" + encodeURIComponent("Olá! Quero conversar sobre a proposta para a Ugo Celulares e alinhar a melhor opção."),
  },
};
