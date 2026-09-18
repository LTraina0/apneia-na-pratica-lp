# Changelog — Apneia na Prática

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.3.2] - 2026-09-18

### Corrigido
- Hero desktop alinhada aos frames Figma 378:99 (1440px) e 378:102 (1920px): logo centralizada, padding, agrupamento e espaçamento do conteúdo.
- Título Inter 700; descrição, CTA e segurança em Arimo, com quebras e destaque inline correspondentes à referência.
- Retrato com recorte não destrutivo, proporção original e sombras alpha; glow e ícone do botão provenientes do Figma.

### Preservado
- Hero mobile/tablet, copy, destino do CTA, demais seções, grades e hover aprovados.
- Ajuste anterior da altura em desktop largo, sem retornar a faixa excedente.

## [1.3.1] - 2026-09-18

### Corrigido
- Altura da Hero em desktop largo acompanha a composição, removendo a faixa de fundo excedente abaixo da foto entre 1680px e 1919px.
- Foto, textos, botão, demais breakpoints e espaçamento da seção seguinte preservados.

## [1.3.0] - 2026-09-18

### Modificado
- Hero substituída pela implementação fornecida em HeroLP-testing, preservando composição, textos, imagens, Inter e breakpoints da referência.
- Estilos e tokens da nova Hero isolados no componente Astro; botão conectado à oferta existente.
- Retrato consolidado em um único original com WebP responsivo gerado pelo Astro.

### Removido
- Hero anterior, suas duas imagens exclusivas e card ilustrado da cartilha, conforme autorização explícita.
- Flags de ocultação, prop da cartilha e H1 provisório. Histórico anterior permanece no Git.

### Preservado
- Entregável cartilha, oferta, modal, FAQ e demais seções.
- Grades desktop 3×2 e método 4×1, duas colunas no tablet, uma no celular e hover aprovado do método.

## [1.2.5] - 2026-09-18

### Modificado
- Cards de método recebem o mesmo hover da identificação: elevação de 3px, sombra e borda realçadas, imagem ampliada em 5% e transição compartilhada.
- Efeito limitado a dispositivos com hover e ponteiro preciso; movimento desativado quando o usuário prefere movimento reduzido.
- Layout, dimensões em repouso, copy, imagens e demais seções preservados.

## [1.2.4] - 2026-09-18

### Corrigido
- Grades de identificação e treinamento voltam a três colunas e duas linhas no desktop, eliminando a distribuição de quatro cards mais dois.
- `CardGrid` aceita três ou quatro colunas no desktop, preservando margens, espaçamentos e comportamento mobile/tablet compartilhados.
- Método mantém quatro colunas; Hero e cartilha continuam ocultas e preservadas.

## [1.2.3] - 2026-09-18

### Modificado
- Hero original e card da cartilha temporariamente ocultos por configuração, sem exclusão de componentes, estilos ou imagens.
- Página começa na seção de identificação enquanto a nova Hero não é implementada; título principal acessível mantido sem criar uma substituição visual.
- Demais seções, cards aprovados e conteúdo comercial da oferta preservados.

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
