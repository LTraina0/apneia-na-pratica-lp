# Apneia na Prática — Landing Page Oficial

[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-success.svg)](https://ltraina0.github.io/apneia-na-pratica-lp/)
[![Version](https://img.shields.io/badge/version-1.0.2-blue.svg)](./CHANGELOG.md)
[![Framework](https://img.shields.io/badge/framework-Astro%205.x-orange.svg)](https://astro.build)
[![AI Governance](https://img.shields.io/badge/AI%20Governance-AGENTS.md-purple.svg)](./AGENTS.md)

> 🌐 **URL Oficial da LP (GitHub Pages):** [https://ltraina0.github.io/apneia-na-pratica-lp/](https://ltraina0.github.io/apneia-na-pratica-lp/)

## 🎯 O que é o projeto

Este repositório contém a Landing Page de alta conversão para o treinamento e cartilha prática **"Apneia na Prática"**, ministrado pelo Prof. Dr. Eduardo Rollo. A LP é voltada para cirurgiões-dentistas e foca em ensiná-los a identificar sinais de possíveis distúrbios respiratórios do sono na consulta clínica e estabelecer critérios seguros de encaminhamento.

## 🛠️ Stack Tecnológica

- **Framework:** Astro 5.x (Static site generation)
- **Estilização:** CSS nativo com variáveis CSS (Design Tokens) escopadas por componente
- **Tipografia:** Rubik (primária) e Arial (secundária)
- **Validação & Testes:** Playwright/A11y (auditorias W3C)

---

## 🚀 Como instalar e executar

### Pré-requisitos
- Node.js v20 ou superior
- Gerenciador de pacotes npm

### 1. Instalar as dependências
```bash
npm install
```

### 2. Executar o ambiente de desenvolvimento local
```bash
npm run dev
```
O servidor será iniciado localmente e abrirá a janela do navegador em: `http://localhost:4321/apneia-na-pratica-lp/`

### 3. Fazer o build de produção
Para validar estaticamente o projeto e compilar a versão final de produção:
```bash
npm run build
```
O build de produção será gerado na pasta `dist/`.

### 4. Visualizar o build de produção localmente
```bash
npm run preview
```

---

## 📁 Estrutura de Diretórios

### Componentes (`src/components/`)
Os componentes do Astro representam as dobras e elements interativos da LP:
- [`Hero.astro`](./src/components/Hero.astro): Dobra 1 (promessa, mockup, CTA)
- [`Identification.astro`](./src/components/Identification.astro): Dobra 2 (grid de sinais clínicos)
- [`Comparison.astro`](./src/components/Comparison.astro): Dobra 3 (comparativo de investigações)
- [`TrainingOverview.astro`](./src/components/TrainingOverview.astro): Seção de cards explicativos de aprendizado
- [`Offer.astro`](./src/components/Offer.astro): Dobra 4 (preço, garantia, CTA de compra)
- [`Expert.astro`](./src/components/Expert.astro): Dobra 5 (professor e especialista)
- [`Guarantee.astro`](./src/components/Guarantee.astro): Dobra 5 (garantia de 7 dias)
- [`Faq.astro`](./src/components/Faq.astro): Dobra 5 (perguntas frequentes estruturadas)
- [`Footer.astro`](./src/components/Footer.astro): Aviso clínico legal e créditos do rodapé
- [`LeadCaptureModal.astro`](./src/components/LeadCaptureModal.astro): Modal de captura de dados de lead com focus trap acessível

### Assets (`public/assets/`)
Contém apenas imagens e SVGs utilizados diretamente no runtime da Landing Page:
- `logo.png` e `hero-bg.jpg`
- `mockup.png` e `product-mockup.png`
- `professor-eduardo-rollo.webp` e `7-dias-garantia.webp`
- `identification/` e `learning/` (subdiretórios de ícones e cards)

### Central de Documentação (`docs/`)
Repositório central de especificações ativas e canônicas da página:
- [**docs/product/**](./docs/product/): Contexto comercial ([`PROJECT-CONTEXT.md`](./docs/product/PROJECT-CONTEXT.md)) e cópia definitiva da página ([`COPY.md`](./docs/product/COPY.md)).
- [**docs/design/**](./docs/design/): Diretrizes visuais ([`DESIGN.md`](./docs/design/DESIGN.md)), paletas de cores ([`DESIGN-TOKENS.json`](./docs/design/DESIGN-TOKENS.json)) e padrões aceitos ([`ANTI-PATTERNS.md`](./docs/design/ANTI-PATTERNS.md)).
- [**docs/engineering/**](./docs/engineering/): Configurações de checkout ([`PUBLICATION-CONFIG.md`](./docs/engineering/PUBLICATION-CONFIG.md)), tracking ([`TRACKING-ANALYTICS.md`](./docs/engineering/TRACKING-ANALYTICS.md)) e integrações técnicas.
- [**docs/qa/**](./docs/qa/): Lista de verificação técnica ([`QA.md`](./docs/qa/QA.md)) e régua de qualidade ([`QUALITY-BAR.md`](./docs/qa/QUALITY-BAR.md)).
- [**docs/references/**](./docs/references/): Referências visuais do layout e manifesto de ativos ([`ASSET-MANIFEST.md`](./docs/references/ASSET-MANIFEST.md)).

---

## 🌐 Publicação (Deploy)

A publicação da Landing Page é automatizada e servida diretamente pelo **GitHub Pages**.
O deploy final atualiza a branch `gh-pages` a partir do resultado do comando `npm run build` executado na branch `main`.

Acesse o histórico de versões em [`CHANGELOG.md`](./CHANGELOG.md) e regras de versionamento em [`VERSIONING.md`](./VERSIONING.md).
Para regras e diretrizes de agentes de IA, consulte [`AGENTS.md`](./AGENTS.md).
