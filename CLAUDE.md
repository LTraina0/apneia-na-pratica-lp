# CLAUDE.md — Diretrizes Rápidas para Claude Code / Anthropic

Consulte `AGENTS.md` para o conjunto completo de regras de governança e guardrails.

## Comandos Rápidos
- `npm run dev` : Inicia servidor de desenvolvimento local
- `npm run build` : Executa build de validação estática
- `npm run preview` : Visualiza o build de produção localmente

## Arquitetura & Diretórios
- Código: `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`
- Especificações: `docs/specs/`
- Engenharia/SEO: `docs/engineering/`
- QA/Auditoria: `docs/qa/`
- Ativos: `public/assets/` e `docs/references/`

## Regras Críticas
1. Não inventar dados de saúde, promessas de cura ou diagnóstico definitivo na consulta.
2. Manter precedência: `docs/specs/COPY.md` > `docs/specs/PROJECT-CONTEXT.md` > `docs/specs/DESIGN.md`.
3. Validar sempre com `npm run build` antes de finalizar.
