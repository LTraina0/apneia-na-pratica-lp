# Apneia na Prática — Landing Page Oficial

[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-success.svg)](https://ltraina0.github.io/apneia-na-pratica-lp/)
[![Version](https://img.shields.io/badge/version-1.0.2-blue.svg)](./CHANGELOG.md)
[![Framework](https://img.shields.io/badge/framework-Astro%205.x-orange.svg)](https://astro.build)
[![Multi-AI](https://img.shields.io/badge/AI%20Governance-AGENTS.md-purple.svg)](./AGENTS.md)
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](#)

> 🌐 **Deploy em Produção (GitHub Pages):** [https://ltraina0.github.io/apneia-na-pratica-lp/](https://ltraina0.github.io/apneia-na-pratica-lp/)

Repositório oficial da Landing Page de alta conversão para o treinamento e cartilha prática **"Apneia na Prática"**, voltado para cirurgiões-dentistas que desejam identificar sinais de distúrbios respiratórios do sono na consulta clínica e estabelecer critérios seguros de encaminhamento.

---

## 🧭 Sumário

- [Visão Geral & Proposta de Valor](#-visão-geral--proposta-de-valor)
- [Arquitetura do Repositório](#-arquitetura-do-repositório)
- [Colaboração com Agentes de IA](#-colaboração-com-agentes-de-ia)
- [Controle de Versão & SemVer](#-controle-de-versão--semver)
- [Guia de Início Rápido](#-guia-de-início-rápido)
- [Central de Documentação (`docs/`)](#-central-de-documentação-docs)
- [Guardrails Clínicos e Comerciais](#-guardrails-clínicos-e-comerciais)

---

## 🎯 Visão Geral & Proposta de Valor

- **Produto:** Treinamento online em vídeo + Cartilha Prática de Consulta Odontológica.
- **Público:** Dentistas (clínicos e especialistas).
- **Oferta:** R$ 47,00 (Low ticket).
- **Especialista:** Prof. Dr. Eduardo Rollo.
- **Garantia:** 7 dias incondicionais.
- **Mecanismo Central:** *Perguntar → Observar → Organizar → Decidir o próximo passo*.

---

## 📁 Arquitetura do Repositório

```text
├── .ai/                       # Configurações e Prompts por papel de IA
│   ├── AGENTS.md              # Índice de governança para IA
│   ├── CLAUDE.md              # Instruções rápidas para Claude Code
│   ├── GEMINI.md              # Instruções rápidas para Gemini/Antigravity
│   ├── .cursorrules           # Configuração de contexto para Cursor IDE
│   └── prompts/               # 5 prompts de personas autônomas
├── .github/                   # CI/CD, Workflows e Templates de Colaboração
│   ├── ISSUE_TEMPLATE/        # Templates para tarefas de IA, bugs e features
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/ci.yml       # Validação automatizada via GitHub Actions
├── docs/                      # Central de Documentação do Projeto
│   ├── specs/                 # Copy, Design Tokens, Contexto e Anti-Patterns
│   ├── engineering/           # Segurança, Tracking, SEO e Configurações
│   ├── qa/                    # Checklists de Auditoria e Testes
│   └── references/            # Manifesto de Ativos e Referências Visuais
├── public/                    # Ativos estáticos públicos (logos, mockups, imagens)
├── src/                       # Código-fonte Astro
│   ├── components/            # Componentes modulares das 5 dobras
│   ├── layouts/               # Layout base com SEO e OpenGraph
│   ├── pages/                 # Rotas da aplicação (index.astro)
│   └── styles/                # CSS global e variáveis de design
├── AGENTS.md                  # Regras mestres de IA na raiz
├── CHANGELOG.md               # Histórico de alterações por versão
├── README.md                  # Documento principal
└── VERSIONING.md              # Guia de SemVer e estratégias de branch
```

---

## 🤖 Colaboração com Agentes de IA

Este repositório foi arquitetado especificamente para trabalho contínuo com múltiplos agentes autônomos de Inteligência Artificial.

Cada agente possui um papel restrito e especializado:

| Agente | Responsabilidade | Documento de Referência |
|---|---|---|
| **Frontend Agent** | Construção de componentes Astro, fidelidade de UI e CSS | [Prompt](./.ai/prompts/01-frontend-developer.md) |
| **Copy & Compliance Agent** | Redação, tom de voz clínico e alinhamento ético | [Prompt](./.ai/prompts/02-copy-and-compliance.md) |
| **QA & Auditor Agent** | Validação de links, responsividade e build check | [Prompt](./.ai/prompts/03-qa-and-audit.md) |
| **SEO & Tracking Agent** | Metatags, Schema.org, Meta Pixel e GA4 | [Prompt](./.ai/prompts/04-seo-and-tracking.md) |
| **Release Manager Agent** | Governança de versões SemVer e Changelog | [Prompt](./.ai/prompts/05-release-manager.md) |

Consulte o arquivo [`AGENTS.md`](./AGENTS.md) antes de qualquer sessão de trabalho com IA.

---

## 🏷️ Controle de Versão & SemVer

Adotamos o padrão **Semantic Versioning 2.0.0** (`vMAJOR.MINOR.PATCH`):
- `MAJOR`: Mudanças estruturais na oferta ou redesign total.
- `MINOR`: Adição de novas seções, bônus ou integrações sem quebra.
- `PATCH`: Ajustes finos de CSS, correções ortográficas e melhorias de performance.

Para detalhes completos de branching e commits, consulte [`VERSIONING.md`](./VERSIONING.md).

---

## 🚀 Guia de Início Rápido

### Pré-requisitos
- Node.js 20+ instalado
- Git configurado

### Instalação & Execução Local

```bash
# 1. Clone o repositório
git clone https://github.com/LTraina0/apneia-na-pratica-lp.git
cd apneia-na-pratica-lp

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento local
npm run dev

# 4. Compile para produção
npm run build
```

---

## 📚 Central de Documentação (`docs/`)

- [`docs/specs/PROJECT-CONTEXT.md`](./docs/specs/PROJECT-CONTEXT.md) — Visão estratégica e transformação educacional.
- [`docs/specs/COPY.md`](./docs/specs/COPY.md) — Textos oficiais travados de todas as 5 dobras.
- [`docs/specs/DESIGN.md`](./docs/specs/DESIGN.md) — Diretrizes visuais, grids, hierarquia e espaçamentos.
- [`docs/specs/DESIGN-TOKENS.json`](./docs/specs/DESIGN-TOKENS.json) — Tokens de cor, tipografia e sombras.
- [`docs/engineering/PUBLICATION-CONFIG.md`](./docs/engineering/PUBLICATION-CONFIG.md) — URLs de checkout, suporte e domínios.
- [`docs/engineering/TRACKING-ANALYTICS.md`](./docs/engineering/TRACKING-ANALYTICS.md) — Configurações de Pixel, GA4 e GTM.
- [`docs/qa/QA.md`](./docs/qa/QA.md) — Checklist de auditoria antes da publicação.

---

## 🛡️ Guardrails Clínicos e Comerciais

> **AVISO OBRIGATÓRIO:** É expressamente proibido alterar o posicionamento da página para prometer diagnóstico autônomo na consulta, cura de distúrbios respiratórios ou inventar estatísticas/depoimentos não validados pelo especialista.
