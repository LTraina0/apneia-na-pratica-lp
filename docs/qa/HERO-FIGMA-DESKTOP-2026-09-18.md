# Hero desktop — comparação Figma e implementação

## Referência e escopo

- [Desktop 1440 × 679](https://www.figma.com/design/HSptW2QgO7uso9TRcJFMIA/Apneia-Na-Pratica?node-id=378-99&m=dev).
- [Desktop Wide 1920 × 828](https://www.figma.com/design/HSptW2QgO7uso9TRcJFMIA/Apneia-Na-Pratica?node-id=378-102&m=dev).
- Ajuste exclusivamente visual da Hero desktop, solicitado em 18/09/2026. Mobile/tablet e demais seções aprovados devem permanecer intactos.

## Implementação

- Um componente semântico Astro, com Body/Copy em fluxo flexível; wrappers usam `display: contents` abaixo de 1024px para preservar a composição anterior.
- Logo centralizada; paddings e gaps extraídos do Figma. Título Inter 700 e textos/CTA Arimo já disponíveis no projeto.
- Destaque continua sendo `mark` inline, acompanhando quebra de texto; não foram criados retângulos absolutos por linha.
- Foto original reutilizada, com viewport de recorte e imagem interna em 103.06% × 106.39%, sem deformação ou crop destrutivo.
- Sombra baseada no alpha do retrato; glow e ícone SVG extraídos do Figma. Os SVGs são decorativos, sem foco ou anúncios ao leitor de tela.
- Background e logoform existentes reutilizados: exports já incorporam o recorte/opacity. Não aplicar novamente o crop da imagem-fonte às logos renderizadas.
- Mantida a altura fluida entre 1680 e 1920px introduzida na versão anterior.

## Verificação

- Build Astro de produção aprovado.
- Comparação visual em Chromium contra screenshots nativos dos dois frames, com fontes e imagens carregadas.
- Posição do conteúdo: x200/y98.18/w404 no desktop; x350/y118.85/w476 no wide. H1 inicia aproximadamente em x206.52/y154.2 e x357.69/y184.88, respectivamente.
- Testadas 18 larguras: 320, 359, 360, 390, 480, 767, 768, 1023, 1024, 1100, 1280, 1366, 1440, 1679, 1680, 1692, 1920 e 2560px. Sem overflow horizontal ou corte do conteúdo da Hero.
- Botão da Hero continua navegando para a seção de oferta existente.
- Grades visíveis preservadas: identificação/conteúdo 3×2 no desktop; método 4×1; tablet em duas colunas e celular em uma.
- Capturas da Hero em 390, 768 e 1023px idênticas pixel a pixel ao baseline local anterior. Em 320px, a pequena diferença ficou restrita à rasterização da logo; não houve alteração de regra ou asset mobile.

## Limites

Validação em Chromium com viewports simulados, não em dispositivos físicos. Figma e navegador apresentam pequenas diferenças de rasterização de fontes/imagens; não se declara identidade binária dos screenshots. Copy comercial, checkout e conformidade clínica não foram revalidados nesta alteração visual.
