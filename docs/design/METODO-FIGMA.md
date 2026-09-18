# Método — atualização desktop e mobile

Design fornecido pelo usuário em 18/09/2026. Estas referências substituem as orientações históricas de composição da seção de método, somente nesta seção.

- [Desktop — 598:678](https://www.figma.com/design/HSptW2QgO7uso9TRcJFMIA/Apneia-Na-Pratica?node-id=598-678): frame de 1920 × 660, conteúdo de 1076px, quatro cards em linha, sem CTA.
- [Mobile — 599:1009](https://www.figma.com/design/HSptW2QgO7uso9TRcJFMIA/Apneia-Na-Pratica?node-id=599-1009): frame de 390 × 1732, margens de 20px, quatro cards em coluna, CTA de 260 × 51px e microcopy.

Registro claro, título navy como âncora, introdução e ilustrações como contexto, etapas numeradas como orientação. Cards com gradiente azul claro, borda cyan discreta e sombra suave. Rubik nos títulos, Arial nas descrições e Arimo no CTA já existente.

## Implementação

`src/components/Comparison.astro` contém as duas apresentações, geradas a partir de uma única lista de textos/imagens. `display: none` oculta a apresentação inativa também da árvore de acessibilidade. Mobile abaixo de 768px; transição em duas colunas entre 768 e 1099px; quatro colunas a partir de 1100px. Alturas dos cards mobile acompanham o conteúdo, sem corte de texto em telas menores ou com zoom.

As imagens decorativas usam `alt=""`, pois as etapas já têm títulos e descrições completos. Os PNGs originais exportados do Figma estão em `src/assets/metodo/`; o Astro gera WebP em 330, 660 e 900px, com carregamento adiado. Os recortes seguem as proporções de cada frame.

O CTA mobile reutiliza `CtaBlock`, com estilos limitados a `#metodomobile`, link para `#oferta` e foco de teclado visível. Os demais componentes e estilos globais permanecem intactos.
