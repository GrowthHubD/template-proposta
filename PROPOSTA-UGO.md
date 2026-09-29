# Proposta comercial: Ugo Celulares

Proposta criada a partir de https://github.com/GrowthHubD/template-proposta.

| Opção | Setup (implantação) | Mensalidade |
| --- | --- | --- |
| Agente no WhatsApp | R$ 1.200 | R$ 900 |
| Agente + catálogo digital e painel administrador | R$ 1.600 | R$ 950 |

O setup das duas opções pode ser parcelado no cartão de crédito. Quantidade de parcelas e condições não foram definidas nesta proposta.

As duas opções incluem recepção e qualificação de leads, texto, compreensão e envio de áudio, follow-up e encaminhamento para a equipe. Prazo de implantação: a combinar. Contato: +55 31 97262-0661.

## Abrir e editar

- Executar `npm run dev` e abrir http://localhost:8080.
- Conteúdo: `src/modules/proposta/data/proposta.config.tsx`.
- Imagens: `src/assets/previa-catalogo.png` e `src/assets/previa-painel.png`.
- Fontes das prévias: `docs/previas/`. São representações ilustrativas, não aplicações funcionais. Preços e produtos nessas imagens são fictícios.
- Logo fornecida pelo usuário: `src/assets/ugo-celulares.png`. Identidade visual com preto, amarelo e detalhes em vermelho.
- Build estático: `npm run build`, saída em `dist/`.
- Não foi realizado deploy público nem envio ao cliente.

## Verificação em 29/09/2026

- Build de produção: aprovado.
- TypeScript (`tsc --noEmit -p tsconfig.app.json`): aprovado.
- Navegação em 375, 768 e 1440 px: sem erros de execução ou rolagem horizontal; todas as imagens carregadas.
- Botão de comparação: leva à seção de investimento.
- Botão de contato: endereço do WhatsApp validado sem enviar mensagem.
- Valores das duas opções conferidos; dados do cliente anterior removidos da página.
- ESLint dos arquivos alterados: zero erros; três avisos de Fast Refresh decorrentes dos mockups no arquivo de configuração, conforme a arquitetura do template.
- O lint global apresenta três erros já existentes no repositório original: interfaces vazias em `command.tsx` e `textarea.tsx`, e importação `require` em `tailwind.config.ts`.
- A instalação apontou 25 alertas no audit das dependências herdadas (2 baixos, 5 moderados, 17 altos e 1 crítico). Não foram feitas atualizações de versões nesta personalização.
