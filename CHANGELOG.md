# Changelog — Apneia na Prática

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.2.2] - 2026-09-18

### Corrigido
- Larguras, intervalos e breakpoints dos cards de identificação, método e conteúdo unificados pelo componente `CardGrid`, usando o método aprovado como referência.
- Cards de identificação sem largura máxima isolada ou altura fixa que limite o conteúdo; alturas acompanham o texto e se igualam por linha.
- Seções com seis cards usam quatro colunas no desktop com o último par centralizado, mantendo a mesma largura dos cards de método.
- Padding e cantos compartilhados; cards de treinamento preservam as fotos e reservam espaço para elas mesmo quando o texto cresce.

### Preservado
- Dimensões, proporções, espaçamento interno e conteúdo dos cards ilustrados aprovados em v1.2.1.
- Copy, oferta, CTAs e demais seções fora do escopo.

## [1.2.1] - 2026-09-18

### Corrigido
- Refinamento responsivo dos cards de método: imagens na proporção original 4:3, sem esticamento ou recortes diferentes por etapa, largura máxima de 280px e intervalo uniforme de 18px até o título.
- Títulos alinhados no desktop/tablet, descrições em 14px/21px e padding consistente; altura acompanha o conteúdo sem empurrar títulos para cima.
- Grid de duas colunas limitado a 760px no tablet e coluna mobile limitada a 400px, evitando cards excessivamente largos.

## [1.2.0] - 2026-09-18

### Modificado
- Seções `#metodo` (desktop) e `#metodomobile` (mobile) implementadas a partir dos frames Figma `598:678` e `599:1009`: quatro cards ilustrados, nova composição, espaçamento e tipografia.
- CTA de método exibido no mobile conforme o frame aprovado, mantendo a navegação para `#oferta` e reutilizando `CtaBlock` sem alterar os demais CTAs.

### Adicionado
- Quatro imagens originais do Figma em `src/assets/metodo`, com versões WebP responsivas geradas pelo Astro no build.
- Workflow de build em `.github/workflows/ci.yml`, ativando a validação de Pull Requests já prevista em `VERSIONING.md`.

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
