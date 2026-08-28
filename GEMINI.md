# GEMINI.md — Contexto para Gemini CLI e Antigravity

Consulte `AGENTS.md` para o guia mestre de governança.

## Comportamento Obrigatório
- Seguir as regras de design tokens em `src/styles/global.css` e `docs/design/DESIGN-TOKENS.json`.
- Respeitar estritamente os guardrails clínicos e éticos de `docs/product/PROJECT-CONTEXT.md`.
- Usar Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`).
- Não criar componentes redundantes; manter a arquitetura de 5 dobras principais:
  1. `Hero.astro`
  2. `Identification.astro`
  3. `Comparison.astro`
  4. `Offer.astro`
  5. `ProfessorClosing.astro`
