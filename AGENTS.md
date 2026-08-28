# AGENTS.md — Regras Mestres de Inteligência Artificial & Governança

> Este documento é a **fonte de verdade primária** para qualquer agente autônomo de IA (Claude, Gemini, ChatGPT, Cursor, Copilot, Antigravity) que trabalhe neste repositório.

---

## 1. Visão do Projeto e Negócio

- **Produto:** *Apneia na Prática*
- **Público-alvo:** Cirurgiões-Dentistas (clínicos gerais e especialistas)
- **Oferta comercial:** R$ 47,00 (Low Ticket)
- **Entregáveis:** Treinamento online em vídeo + Cartilha Prática de Consulta
- **Garantia:** 7 dias incondicionais
- **Especialista:** Prof. Dr. Eduardo Rollo
- **Stack Tecnológica:** Astro 5.x, CSS Nativo Modular / Design Tokens, TypeScript

---

## 2. Guardrails Clínicos e Comerciais Inegociáveis

Qualquer agente que gerar código, copy, metadados ou testes **DEVE** respeitar estritamente as proibições abaixo:

### 🚫 Estritamente Proibido:
1. **Diagnóstico Autônomo:** NUNCA afirmar ou sugerir que a consulta odontológica ou questionários fecham diagnóstico de apneia obstrutiva do sono. O diagnóstico padrão-ouro permanece médico / polissonográfico.
2. **Promessas de Cura/Tratamento:** NUNCA prometer cura, tratamentos milagrosos ou resultados clínicos garantidos.
3. **Invenção de Dados/Estudos:** NUNCA inventar estatísticas, artigos acadêmicos fictícios ou correlações clínicas inexistentes.
4. **Invenção de Provas Sociais:** NUNCA inventar número de alunos, depoimentos, avaliações ou logos de faculdades/associações sem autorização explícita.
5. **Invenção de Escassez/Preço:** NUNCA criar falsos cronômetros, falsos preços anteriores ("de R$ 497 por R$ 47") ou parcelamentos inexistentes.
6. **Invenção de Links:** NUNCA inventar URLs de checkout ou canais de suporte fictícios (utilizar sempre as constantes de configuração em `docs/engineering/PUBLICATION-CONFIG.md`).

---

## 3. Ordem de Precedência em Caso de Conflito

Se houver divergência entre arquivos de documentação, siga rigorosamente esta hierarquia:

1. `docs/product/COPY.md` (Copy comercial travada)
2. `docs/product/PROJECT-CONTEXT.md` (Contexto do produto e diretrizes estratégicas)
3. `docs/design/DESIGN.md` (Diretrizes de layout e UI)
4. `docs/design/DESIGN-TOKENS.json` (Variáveis de estilo e cores)
5. `docs/references/` (Ativos e referências visuais aprovadas)
6. Histórico de conversas ou outros arquivos.

---

## 4. Stack Técnica & Comandos de Execução

- **Framework:** Astro 5 (`.astro` components)
- **Estilização:** CSS Tokens centralizados em `src/styles/global.css` e CSS com escopo por componente.
- **Tipografia Travada:** `Rubik` (primária) e `Arial` (secundária).

### Comandos de Terminal
```bash
# Desenvolvimento local (abre navegador automaticamente)
npm run dev

# Build de produção (validação estática)
npm run build

# Preview da build local
npm run preview
```

---

## 5. Catálogo de Papéis de IA (Agent Personas)

Ao iniciar uma tarefa, adote o papel correspondente e consulte o prompt detalhado em `.ai/prompts/`:

| Papel | Responsabilidade Principal | Prompt Dedicado |
|---|---|---|
| **Frontend Developer Agent** | Implementação de UI, componentes Astro, responsividade e fidelidade aos tokens. | `.ai/prompts/01-frontend-developer.md` |
| **Copy & Compliance Agent** | Redação, ajustes de texto, validação de conformidade ética e guardrails clínicos. | `.ai/prompts/02-copy-and-compliance.md` |
| **QA & Auditor Agent** | Checklist de qualidade, acessibilidade, links quebrados, validação de build e performance. | `.ai/prompts/03-qa-and-audit.md` |
| **SEO & Tracking Agent** | Metatags, OpenGraph, Schema.org (JSON-LD), GA4 e Meta Pixel scripts. | `.ai/prompts/04-seo-and-tracking.md` |
| **Release Manager Agent** | SemVer, atualização de `CHANGELOG.md`, criação de tags de versão e governança Git. | `.ai/prompts/05-release-manager.md` |

---

## 6. Padrão de Branching & Commits para Agentes

- **Branch format:**
  - `agent/frontend-<descricao>` (para mudanças de UI)
  - `agent/copy-<descricao>` (para ajustes de copy)
  - `agent/qa-<descricao>` (para testes e correções)
  - `agent/release-vX.Y.Z` (para preparação de releases)
- **Padrão de Commit:** Conventional Commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`).
- Sempre verificar se `npm run build` passa sem erros antes de concluir qualquer tarefa.
