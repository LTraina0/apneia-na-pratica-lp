# Changelog — Apneia na Prática

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.0.0] - 2026-08-22

### Adicionado
- **Arquitetura Base da Landing Page:** Projeto construído com Astro 5, componentes isolados e estilização modular.
- **5 Dobras Principais:**
  - `Hero.astro`: Promessa centralizada, CTA de conversão e mockup multidispositivos do produto.
  - `Identification.astro`: Grid de 6 situações e sinais clínicos observados no consultório.
  - `Comparison.astro`: Comparativo estruturado (*Investigação solta × Investigação estruturada*).
  - `Offer.astro`: Apresentação da oferta de R$ 47,00, entregáveis e garantia incondicional de 7 dias.
  - `ProfessorClosing.astro`: Apresentação do especialista Prof. Dr. Eduardo Rollo, canal de suporte e CTA final.
  - `Footer.astro`: Rodapé legal com links institucionais e direitos reservados.
- **Sistema de Design e Tokens:** `DESIGN-TOKENS.json` e `src/styles/global.css` com tipografia Rubik/Arial e paleta de alto contraste.
- **Governança Multi-Agentes:** Sistema completo de regras (`AGENTS.md`, `.ai/`, `CLAUDE.md`, `GEMINI.md`, `.cursorrules`) com 5 personas especializadas.
- **Documentação Centralizada:** Pastas `docs/specs/`, `docs/engineering/`, `docs/qa/` e `docs/references/` contendo todas as 17 especificações técnicas e de compliance.
- **Workflows e Templates:** GitHub Actions CI para validação de build e templates de Pull Request e Issues para agentes e humanos.
