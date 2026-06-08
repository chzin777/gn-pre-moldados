# GN Pré-moldados — Landing Page

Landing page **mobile-first** para a **GN Pré-moldados**, empresa de pré-moldados de concreto (lajes treliçadas, blocos EPS, pingadeiras, blocos de concreto, canaletas e postes).

> **Qualidade que sustenta, confiança que constrói.**

A página traz visualização **3D interativa** das peças (gire, aproxime e explore), galeria de obras, depoimentos, normas técnicas, área de atuação e contato direto via WhatsApp.

---

## ✨ Funcionalidades

- **Visualizador 3D** das peças, modeladas proceduralmente com Three.js (sem precisar de arquivos externos) — pronto para receber modelos `.glb` reais.
- **Mobile-first** e responsivo, com paleta navy `#061a37` + branco.
- **Hero animado** com efeito de raios em WebGL (`ogl`).
- **Galeria de obras** com suporte a carrossel de imagens por obra.
- **Depoimentos** com foto e avaliação em estrelas.
- **CTA via WhatsApp** (botão flutuante + botões nas seções), com mensagem pré-preenchida por produto.
- **SEO completo**: metadata Open Graph/Twitter, dados estruturados JSON-LD (`GeneralContractor`), `sitemap.xml`, `robots.txt` e imagem de compartilhamento gerada dinamicamente.
- Acessibilidade e `prefers-reduced-motion` respeitados (animações e autoplay pausam).

## 🧱 Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- [ogl](https://github.com/oframe/ogl) (fundo animado do hero)

## 🚀 Rodando localmente

Requisitos: **Node.js 20.9+**.

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build && npm start
```

A aplicação sobe em `http://localhost:3000` (ou na próxima porta livre).

## 📁 Estrutura

```
app/
  layout.tsx            # metadata global + SEO + JSON-LD
  page.tsx              # composição das seções
  opengraph-image.tsx   # imagem de compartilhamento (next/og)
  robots.ts / sitemap.ts
  globals.css           # tema (paleta) e utilitários
components/
  sections/             # Header, Hero, Products, Obras, Depoimentos, FAQ, Footer, ...
  three/                # Models (geometria 3D) + ModelViewer (canvas)
  ui/                   # Logo, Reveal, ...
lib/
  site.ts               # dados centrais (empresa, produtos, obras, depoimentos, FAQ)
```

## ⚙️ Configuração

Quase tudo é editável em **`lib/site.ts`**:

| O quê | Onde | Observação |
|------|------|------------|
| WhatsApp | `site.whatsapp.number` | formato `55DDDNÚMERO` (só dígitos) |
| Domínio | env `NEXT_PUBLIC_SITE_URL` | usado em SEO/sitemap/canonical; tem fallback |
| Produtos | `products` | nome, descrição, features e modelo 3D |
| Obras | `obras` | use `image` (uma foto) ou `images` (carrossel) |
| Depoimentos | `depoimentos` | texto, autor, foto e nota |
| Cidades atendidas | `atuacao` | base e raio de entrega |

> Imagens externas precisam ter o host liberado em `next.config.ts` (`images.remotePatterns`).

### Modelos 3D reais

O `ModelViewer` aceita a prop `modelUrl` apontando para um `.glb` em `/public`. Quando informado, ele carrega o modelo real no lugar da geometria procedural.

## ☁️ Deploy

Otimizado para [Vercel](https://vercel.com/). Após o deploy, defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` com a URL pública e cadastre o site no Google Search Console enviando `/sitemap.xml`.

## 📄 Licença

[MIT](./LICENSE).
