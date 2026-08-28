# Changelog — Apneia na Prática

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.1.0] - 2026-08-27

### Adicionado
- **Remediação de Acessibilidade W3C/WAI:** Inclusão de Skip-Link para navegação por teclado direta ao conteúdo principal, focus trapping acessível e validação robusta de erros de formulário no `LeadCaptureModal`, e navegação por teclado com setas direcionais no `Faq`.
- **Reorganização Física do Repositório:** Reestruturação das especificações técnicas dividindo a documentação monolítica em pastas dedicadas por área de especialidade (`docs/product/`, `docs/design/`, `docs/engineering/`, `docs/qa/`).
- **Arquivamento de Histórico Externo:** Saneamento de arquivos obsoletos de rascunhos, testes e assets de alta definição brutos salvos externamente fora do repositório Git do projeto.

### Removido
- **Duplicatas de Assets:** Eliminação de 4 duplicatas binárias exatas nas referências do repositório.

---

## [1.0.2] - 2026-08-23

### Modificado
- **Refinamento de UI e CTAs:** Novo componente `CtaBlock.astro` com botão de alta conversão, gradiente verde, microinterações e âncora de preço R$ 47.
- **Fidelidade Visual:** Refinamento tipográfico e alinhamentos nos componentes `Hero`, `Identification`, `Comparison` e `Offer`.
- **Deploy Atualizado:** Publicação da nova compilação no GitHub Pages.

---

## [1.0.1] - 2026-08-22

### Adicionado
- **Deploy no GitHub Pages:** Publicação oficial da Landing Page em [https://ltraina0.github.io/apneia-na-pratica-lp/](https://ltraina0.github.io/apneia-na-pratica-lp/).
- **Configuração de Base URL:** Ajuste em `astro.config.mjs` e nos componentes para suportar caminhos estáticos no GitHub Pages.
- **Suporte a .nojekyll:** Inclusão de `.nojekyll` para permitir o carregamento correto dos assets do Astro (`_astro/`).

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
- **Documentação Centralizada:** Pastas de especificações técnicas, de produto, de design, de engenharia, de qa e referências de ativos.
- **Workflows e Templates:** GitHub Actions CI para validação de build e templates de Pull Request e Issues para agentes e humanos.
