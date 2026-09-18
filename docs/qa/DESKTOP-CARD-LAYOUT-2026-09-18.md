# Correção da composição desktop — v1.2.4

Solicitação confirmada: identificação e treinamento em três cards na primeira
linha e três na segunda; quatro ilustrações do método em uma linha no desktop.

- Build Astro e `git diff --check` aprovados.
- Chromium/Playwright: 320, 360, 390, 480, 767, 768, 820, 1024, 1099, 1100, 1280, 1440, 1692 e 1920px.
- Até 767px: uma coluna; de 768 a 1099px: duas colunas. Mesmas larguras e gaps de v1.2.3.
- De 1100px em diante: identificação e treinamento com duas linhas completas de três; método com uma linha de quatro.
- Em 1440px: todas as grades com 1076px e mesma borda esquerda; cards de identificação/treinamento com 348px, método com 257px; gap de 16px.
- Nenhuma largura testada apresentou overflow horizontal ou títulos/descrições excedendo os cards.
- Capturas em 390px e 1440px; composição desktop das duas grades inspecionada visualmente.
- Console: zero erros e zero avisos.
- Hero e card da cartilha continuam ausentes do DOM, com os originais preservados.
- Texto, imagens, tipografia, padding e estilos de superfície não foram alterados.

O registro anterior de v1.2.2 sobre quatro colunas e par centralizado é histórico
e foi substituído por esta correção. A padronização mantém alinhamento externo
e espaçamentos, não impõe a mesma contagem de colunas a conteúdos diferentes.

Limite: validação em Chromium com viewports simulados, não em aparelhos físicos.
