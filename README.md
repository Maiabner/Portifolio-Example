# Portfolio - Abner Maia Albanez

Site de portfolio pessoal em React 18 + TypeScript + Vite 5 + Tailwind 3, com framer-motion para animacoes e lucide-react para icones. Baseado no template do portfolio de Rafael Kosteczka, com conteudo e identidade proprios.

## Estrutura da pagina

A ordem atual das secoes e:

1. Hero
2. Ticker
3. Bio
4. Linha do tempo
5. Metodo
6. Cases
7. Resumo
8. Contato

## Onde editar o conteudo

Todo o texto principal do site vive em **`src/dados.ts`**: perfil, hero, narrativa, trajetoria, cases, resumo e dados de contato.

Para alteracoes pontuais sem reler o projeto inteiro, use o mapa em **`CONTEXTO-PROJETO.md`**.

Imagens dos cases entram em **`public/imagens/`** e sao referenciadas no campo `imagem.arquivo` de cada case em `src/dados.ts`.

## Rodar localmente

```powershell
npm install
npm run dev       # http://localhost:5173
npm run build     # gera dist/
```

Ou de duplo clique em `ABRIR-SITE.bat` apos o `npm install`.

## Deploy (Vercel)

1. `npm i -g vercel` e `vercel login`
2. Na pasta do projeto: `vercel` para preview ou `vercel --prod` para producao
3. Alternativa: subir para o GitHub e importar no dashboard da Vercel

O `vercel.json` ja trata o rewrite de SPA.