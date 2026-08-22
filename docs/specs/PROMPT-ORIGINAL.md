# PROMPT DE BUILD — Apneia na Prática

Você é responsável por implementar uma landing page curta, premium e de alta clareza para o produto **Apneia na Prática**.

Atue simultaneamente como:
- diretor criativo;
- product designer;
- engenheiro frontend sênior;
- revisor de acessibilidade;
- revisor de conversão.

Seu trabalho não é “inventar uma landing page”. Seu trabalho é **materializar fielmente a estratégia, a copy e o sistema visual fornecidos nos arquivos deste projeto**.

## 1. Ordem obrigatória de leitura

Antes de editar código, leia integralmente:

1. `PROJECT-CONTEXT.md`
2. `COPY.md`
3. `ASSET-MANIFEST.md`
4. `DESIGN.md`
5. `DESIGN-TOKENS.json`
6. `VISUAL-REFERENCE-PROTOCOL.md`
7. `ANTI-PATTERNS.md`
8. `Dobra 1 - conceito aprovado.png` e `Dobra 2 - conceito aprovado.png`
9. demais referências visuais disponíveis
10. código/base existente
11. `QUALITY-BAR.md`
12. `QA.md`

Não comece pelo código.

## 2. Regra de precedência

Se houver conflito entre arquivos, seguir:

1. `COPY.md`
2. `PROJECT-CONTEXT.md`
3. `ASSET-MANIFEST.md`
4. `DESIGN.md`
5. `DESIGN-TOKENS.json`
6. `VISUAL-REFERENCE-PROTOCOL.md`
7. `ANTI-PATTERNS.md`
8. referências visuais
9. documentação histórica / código legado

Nunca sobrescreva o estado atual com informação histórica.

## 3. Antes de construir

Produza internamente um plano curto contendo:

- conceito visual;
- arquitetura das 5 dobras;
- componentes necessários;
- tokens que serão usados;
- ativos disponíveis;
- ativos faltantes;
- pontos que exigem placeholder temporário.

Não invente conteúdo para preencher lacunas.

## 4. Stack

Se esta pasta estiver dentro da base Astro fornecida:
- mantenha Astro;
- não reinvente o setup;
- use `Layout.astro`;
- use componentes `.astro` por seção;
- use CSS scoped por componente;
- zero JS por padrão;
- use ilhas apenas se existir interação real.

Não imponha Tailwind ou outro framework CSS se a base atual não utilizar.

## 5. Componentização recomendada

Criar algo equivalente a:

- `Hero.astro`
- `Identification.astro`
- `Comparison.astro`
- `Offer.astro`
- `ProfessorClosing.astro`
- `Footer.astro`

Pode ajustar nomes, mas manter responsabilidade por seção.

## 6. Copy

`COPY.md` é fonte de verdade.

PROIBIDO:
- reescrever headline;
- resumir parágrafos;
- inventar “melhores” CTAs;
- adicionar gatilhos;
- criar FAQ;
- criar depoimentos;
- criar estatísticas;
- criar bônus;
- criar credenciais;
- criar urgência.

Se algum texto não couber bem, **redesenhe o componente antes de cortar a copy**.

## 7. Design

Seguir `DESIGN.md` e `DESIGN-TOKENS.json`.

A página deve ter ritmo visual:

**Hero centralizado → grid de identificação → comparação → produto/oferta assimétrica → professor/trust/fechamento.**

Não transformar todas as dobras em grids de cards.

Manter:
- base neutra predominante;
- Navy como autoridade;
- Blue/Cyan para ação;
- Yellow apenas como acento raro;
- bastante respiração;
- bordas suaves;
- sombras discretas.

## 8. Referências visuais

Referências enviadas servem para:
- macro-layout;
- hierarquia;
- proporção;
- distribuição espacial;
- ritmo;
- tratamento de cards;
- relação entre blocos.

Não copiar:
- marca;
- paleta;
- textos;
- ornamentos;
- assets;
- estética não pertencente ao Apneia na Prática.



## 8.1. Decodificação visual obrigatória

Não use as referências apenas como “vibe”. Antes da implementação, produza internamente um visual brief com:
- registro tonal;
- hierarquia em 3 níveis;
- macro-layout;
- grid e alinhamentos;
- densidade;
- tipografia observada;
- tratamento de cards;
- uso de imagem;
- assinatura visual recorrente;
- elementos a NÃO copiar.

Seguir `VISUAL-REFERENCE-PROTOCOL.md`.

## 8.2. Anti-regressão à média

Antes de finalizar cada dobra, confronte o resultado com `ANTI-PATTERNS.md`.

Falhas como “SaaS genérico”, excesso de cards, gradiente decorativo, stock photo, cliché médico, texto espremido, hierarchy break ou CTA inventado são bloqueantes.

## 8.3. Quality gate

Depois da primeira implementação completa, avaliar o resultado usando `QUALITY-BAR.md`.

Não basta “estar funcionando”. Se a página não atingir o mínimo definido no rubric, corrigir antes de rodar o QA final.



## 8.1. Conceitos visuais aprovados — Dobras 1 e 2

As imagens `Dobra 1 - conceito aprovado.png` e `Dobra 2 - conceito aprovado.png` são **fontes de verdade do macro-layout**.

Para a Dobra 1, preservar:
- logo centralizada no topo;
- headline central com forte dominância;
- subheadline imediatamente abaixo;
- mockup como principal prova visual;
- CTA largo centralizado;
- microcopy abaixo do CTA;
- grande quantidade de espaço negativo.

Para a Dobra 2, preservar:
- eyebrow e headline centralizados;
- introdução central;
- grid 3×2 com seis cards no desktop;
- cards de mesma família visual;
- CTA centralizado no fechamento.

Você pode aperfeiçoar cores, ícones, spacing, responsividade e acabamento segundo o design system, mas **não redesenhe essas duas dobras do zero**.

## 8.2. Tipografia travada

A tipografia final já está definida:

- **Rubik = família principal** — H1, H2, H3, eyebrows, botões, preços, labels e títulos de cards.
- **Arial = família secundária** — body, microcopy, textos auxiliares e rodapé.

Não substituir por Inter, Manrope, Poppins, DM Sans ou outra família.
Não usar terceira fonte.

## 9. Responsividade

Mobile-first.

Verificar no mínimo:
- 360px;
- 390px;
- 768px;
- 1024px;
- 1440px.

A versão mobile deve ser recomposta, não apenas encolhida.

## 10. Performance

Performance é parte do design.

- zero JS por padrão;
- imagens otimizadas;
- width/height explícitos;
- WebP/AVIF quando adequado;
- evitar CLS;
- sem dependências desnecessárias;
- fontes eficientes;
- sem animações pesadas.

## 11. Acessibilidade

- HTML semântico;
- um H1;
- contraste AA+;
- foco visível;
- teclado;
- `lang="pt-BR"`;
- alt adequado;
- touch targets ≥ 44px;
- `prefers-reduced-motion`.

## 12. Assets faltantes

Se um ativo final não existir:
- não procure substituto genérico automaticamente;
- use placeholder claramente identificável ou preserve área estrutural;
- registre no relatório final como pendência.

Especialmente:
- foto do professor;
- checkout;
- suporte;
- links legais.

## 13. Processo de implementação

Executar nesta ordem:

1. ler contexto;
2. mapear componentes;
3. definir tokens;
4. implementar mobile;
5. expandir para desktop;
6. inserir assets reais disponíveis;
7. iniciar servidor local;
8. abrir no navegador;
9. capturar/revisar desktop;
10. capturar/revisar mobile;
11. corrigir falhas visuais;
12. rodar build;
13. executar `QA.md`.

Não considerar concluído antes da etapa 13.

## 14. Revisão visual

Ao revisar screenshots, verificar:

- o olho sabe onde começar?
- existe um elemento dominante por dobra?
- a hierarquia parece deliberada?
- há excesso de cards?
- existe repetição de macro-layout?
- há espaços vazios acidentais?
- algum texto está pequeno demais?
- algum texto foi espremido para caber?
- cards têm alturas incoerentes?
- os CTAs chamam atenção sem parecer agressivos?
- a oferta de R$47 está imediatamente compreensível?
- a página parece coerente com a logo?

Corrija estruturalmente, não com patches aleatórios.

## 15. Definição de pronto

Entregue apenas quando:
- build estiver limpo;
- desktop e mobile estiverem visualmente revisados;
- QA estiver concluído;
- nenhuma informação tiver sido inventada;
- as pendências externas estiverem listadas.

No relatório final, separar:
1. implementado;
2. decisões de design;
3. pendências para publicação;
4. testes executados.
