# Hover dos cards de método — v1.2.5

- Build Astro aprovado.
- Hover comparado no Chromium entre identificação e método: elevação de -3px, escala da imagem/ícone de 1.05, mesma sombra, mesma borda e mesma transição de 180ms com cubic-bezier(0.16, 1, 0.3, 1).
- Card de método em 1440px permanece com 257×318,25px antes/depois do hover; sem deslocamento dos vizinhos.
- Captura desktop inspecionada.
- Geometria em repouso preservada em 320, 390, 768, 820, 1100 e 1440px; nenhum overflow horizontal.
- Preferência por movimento reduzido: card e ilustração sem transformação.
- Contexto mobile com toque emulado: após tocar no card, hover inativo e nenhuma transformação.
- Console local sem erros ou avisos.
- Nenhuma alteração de copy, layout de grade, assets ou demais seções.

Validação em Chromium e toque emulado, não em aparelhos físicos.
