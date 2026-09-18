# QA — altura da Hero — v1.3.1

Correção pontual da faixa marcada pelo usuário no desktop largo.

- Causa: Hero fixa em 828px com composição de altura fluida entre 723px e 828px.
- Solução: variável compartilhada de altura, `height:auto` e `min-height` na Hero, mantendo a composição independente; apenas breakpoint ≥1680px.
- Em 1692px: altura de 828px para 728,25px; sobra de aproximadamente 100,89px para 1,14px de arredondamento/composição original.
- Nenhuma mudança na posição ou tamanho do retrato, logoform, conteúdo, título, descrição ou botão.
- Espaçamento superior da identificação permanece em 68px na largura do print.
- Regressão Chromium em 320, 390, 768, 1024, 1100, 1280, 1440, 1679, 1680, 1692, 1728, 1800, 1920 e 2560px.
- Geometria dos elementos da Hero e das grades, colunas, intervalos e padding seguinte idênticos à v1.3.0 em todas as larguras.
- Sem overflow horizontal, imagens quebradas ou corte da microcopy nas larguras verificadas.
- Build Astro e diff-check aprovados; captura visual em 1692px conferida.
- Teste por emulação de viewport, sem validação em hardware físico.
- Alturas do desktop menor, tablet e celular não foram alteradas; esta correção não redesenha os outros breakpoints.
