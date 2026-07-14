# Contexto do Projeto

Este arquivo e o mapa rapido para fazer alteracoes pontuais no portfolio sem reler todos os arquivos.

## Visao geral

Portfolio pessoal de Abner Maia Albanez em React 18 + TypeScript + Vite + Tailwind.

O site e uma pagina unica. A ordem das secoes fica em `src/App.tsx`:

```tsx
<Nav />
<Hero />
<Ticker />
<Bio />
<Timeline />
<Metodo />
<Cases />
<Stats />
<Contato />
```

Quase todo o conteudo editavel fica em `src/dados.ts`. Os componentes em `src/components/` pegam esses dados e montam a interface.

## Regra pratica

Para mudar texto, numeros, cases, contatos, formacao, resumo ou imagens de cases, comece em `src/dados.ts`.

Para mudar layout, ordem, comportamento, botoes, animacoes, titulos fixos de secao ou responsividade, va ao componente correspondente em `src/components/`.

Para mudar cores, fontes, sombras, fundo, animacoes globais e tokens visuais, va em `src/index.css`.

## Pontos de edicao rapida

| Quero alterar | Arquivo | Procurar por |
| --- | --- | --- |
| Ordem das secoes | `src/App.tsx` | `export default function App` |
| Nome, cargo, cidade, email, LinkedIn, WhatsApp, foto | `src/dados.ts` | `export const PERFIL` |
| Frase de apoio do hero | `src/dados.ts` | `export const HEADLINE` |
| Headline grande do hero | `src/components/Hero.tsx` | `Construo a` |
| Palavras que alternam no hero | `src/dados.ts` | `export const PAPEIS` |
| Habilidades da faixa rolante | `src/dados.ts` | `export const TICKER` |
| Icones da faixa de habilidades | `src/components/Ticker.tsx` | `TICKER_ICONS` |
| Texto da bio | `src/dados.ts` | `export const BIO` |
| Foto da bio | `public/abner.png` e `src/dados.ts` | `foto` |
| Formacao e experiencia | `src/dados.ts` | `export const TRAJETORIA` |
| Texto da secao Metodo | `src/components/Competencias.tsx` | `export function Metodo` |
| Etapas do metodo | `src/components/Competencias.tsx` | `ETAPAS` |
| Textos dos 5 cases | `src/dados.ts` | `export const CASES` |
| Estrutura visual/interacao dos cases | `src/components/Cases.tsx` | `function PainelCaso` |
| Imagens dos cases | `public/imagens/` e `src/dados.ts` | `imagem: { arquivo` |
| Placeholder/zoom das imagens | `src/components/ImagemCaso.tsx` | `const src =` |
| Resumo em cards | `src/dados.ts` | `export const RESUMO_PONTOS` |
| Icones dos cards de resumo | `src/components/Stats.tsx` | `const ICONES` |
| Texto e botoes de contato | `src/components/Contato.tsx` e `src/dados.ts` | `export function Contato` |
| Marca no topo | `src/components/Marca.tsx` | `MarcaLockup` |
| Links do menu | `src/components/Nav.tsx` | `const LINKS` |
| Cores e fontes | `src/index.css` | `TOKENS:START` |
| Animacoes globais | `src/index.css` | `@keyframes` |

## Mapa dos dados

`src/dados.ts` exporta:

- `PERFIL`: dados pessoais e links.
- `PAPEIS`: pares de palavras que ciclam no hero.
- `TICKER`: habilidades exibidas na faixa abaixo do hero.
- `ASSINATURA`: palavras gigantes antes do contato.
- `VALORES`: faixa de valores usada nas referencias internas do site.
- `HEADLINE`: frase e apoio do hero.
- `BIO`: paragrafos da secao "Quem sou".
- `TRAJETORIA`: formacao e experiencia. O campo `tipo` precisa ser `"formacao"` ou `"experiencia"`.
- `RESUMO_PONTOS`: quatro cards da secao "Resumo".
- `COMPETENCIAS`: bloco de metodo e raciocinio guardado como conteudo auxiliar.
- `CASES`: os cinco cases completos.

## Estrutura de cada case

Cada item de `CASES` segue este formato:

```ts
{
  id: "motor-de-decisao",
  numero: "01",
  titulo: "Titulo curto do card",
  tituloCompleto: "Titulo do caso completo",
  card: {
    problema: "...",
    solucao: "...",
    resultado: "..."
  },
  contexto: [...],
  problema: [...],
  oQueFiz: [...],
  resultado: [...],
  comoMedi: [...],
  stack: ["Python", "HTML"],
  imagem: {
    arquivo: "case-01-farol.png",
    proporcao: "16 / 10",
    legenda: "..."
  }
}
```

Os blocos de texto aceitam dois tipos:

```ts
{ tipo: "p", texto: "Paragrafo normal." }
{ tipo: "lista", ancora: "Frase antes da lista:", itens: ["Item 1", "Item 2"] }
```

## Imagens

O componente `ImagemCaso` monta o caminho assim:

```ts
const src = `/imagens/${arquivo}`;
```

Logo, imagens de cases devem ficar em:

```text
public/imagens/
```

Se a imagem ainda nao existir, o site mostra um placeholder com o nome do arquivo esperado. Ao clicar em uma imagem existente, abre o lightbox.

Arquivos esperados atualmente em `src/dados.ts`:

- `case-01-farol.png`
- `case-02-html.png`
- `case-03-matriz.svg`
- `case-04-promessa-clausula.svg`
- `case-05-sistema.png`

## Componentes

### `src/components/Nav.tsx`

Menu fixo no topo, barra de progresso de leitura e links ancora. Os links sao internos no componente, em `LINKS`.

Anchors atuais:

- `#inicio`
- `#trajetoria`
- `#metodo`
- `#casos`
- `#resumo`
- `#contato`

### `src/components/Hero.tsx`

Primeira dobra do site. Usa:

- `PERFIL.cargo`
- `PERFIL.cidade`
- `HEADLINE.apoio`
- `PAPEIS`

A headline principal esta hardcoded no componente. Se quiser que ela venha de `dados.ts`, trocar o texto do `<h1>` para usar `HEADLINE.frase`.

### `src/components/Ticker.tsx`

Tem tres faixas:

- `Ticker`: habilidades abaixo do hero, usando `TICKER`.
- `FaixaValores`: valores dentro de competencias, usando `VALORES`.
- `MarqueeAssinatura`: palavras gigantes antes do contato, usando `ASSINATURA`.

Os icones das habilidades ficam no objeto `TICKER_ICONS`. Se adicionar uma habilidade nova e quiser icone especifico, incluir ali.

### `src/components/Bio.tsx`

Secao "Quem sou". Usa `BIO` e a foto de `PERFIL.foto`.

### `src/components/Timeline.tsx`

Secao "Trajetoria". Usa `TRAJETORIA` e separa automaticamente por `tipo`.

Os nomes dos grupos estao dentro do componente:

- `Formacao academica`
- `Experiencia profissional`

### `src/components/Competencias.tsx`

Secao "Metodo". As quatro etapas estao em `ETAPAS` dentro do componente.

### `src/components/Cases.tsx`

Secao dos cases. Usa `CASES`.

Partes importantes:

- `Blocos`: renderiza paragrafo ou lista.
- `SecaoCaso`: titulo pequeno + blocos.
- `PainelCaso`: card resumido, botao de abrir caso completo, imagem, "Como medi" e stack.
- `Cases`: tabs dos cinco casos, navegacao anterior/proximo e painel ativo.

### `src/components/ImagemCaso.tsx`

Renderiza imagem do case, placeholder quando o arquivo falta e lightbox ao clicar.

### `src/components/Lightbox.tsx`

Modal de imagem com `Esc` para fechar. Suporta varias imagens, embora hoje `ImagemCaso` envie uma imagem por vez.

### `src/components/Stats.tsx`

Secao "Resumo". Usa `RESUMO_PONTOS`.

Os icones sao posicionais:

```ts
const ICONES = [Network, Bot, Database, ScrollText];
```

Se mudar a quantidade ou ordem dos cards, revisar esse array.

### `src/components/Contato.tsx`

Rodape/contato. Usa `PERFIL.email`, `PERFIL.linkedin`, `PERFIL.whatsapp`, `PERFIL.whatsappBonito`, `PERFIL.nome` e `PERFIL.cidade`.

O ano `2026` esta hardcoded no rodape.

### `src/components/Marca.tsx`

Marca visual do topo. O monograma e SVG inline. O nome "Abner Maia Albanez" esta hardcoded no lockup.

## Estilos globais

`src/index.css` concentra:

- tokens de cor, fontes e radius em `:root`;
- import das fontes do Google;
- estilos globais de fundo;
- classes auxiliares de sombra;
- animacoes de entrada e marquee;
- comportamento para `prefers-reduced-motion`.

Marcadores uteis:

- `TOKENS:START` e `TOKENS:END`: paleta, fontes e tokens.
- `.site-bg`: fundo global.
- `.ticker-track` e `.ticker-mask`: faixas rolantes.
- `.marquee-giant`: assinatura gigante.
- `@media (prefers-reduced-motion: reduce)`: acessibilidade de movimento.

## Comandos

Na pasta `site`:

```powershell
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

O projeto tem `vercel.json` para rewrite de SPA. Build esperado:

```powershell
npm run build
```

Saida gerada em:

```text
dist/
```

## Cuidados antes de editar

- Evite mexer em layout para uma alteracao que e apenas de texto: prefira `src/dados.ts`.
- Ao adicionar case novo, revisar tabs, navegacao e quantidade de icones/cards se necessario.
- Ao renomear imagem, atualizar `imagem.arquivo` em `src/dados.ts` e colocar o arquivo em `public/imagens/`.
- Ao adicionar item em `TICKER`, opcionalmente adicionar icone em `TICKER_ICONS`.
- Ao mudar cores, altere primeiro os tokens em `:root`; isso propaga pelo site.
- Se mudar anchors de secao, atualizar `LINKS` em `Nav.tsx`.