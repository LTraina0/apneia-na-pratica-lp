# Hero desktop — comparação Figma e implementação

## Referência e escopo

- [Desktop 1440 × 679](https://www.figma.com/design/HSptW2QgO7uso9TRcJFMIA/Apneia-Na-Pratica?node-id=378-99&m=dev).
- [Notebook 1707.333 × 734.958](https://www.figma.com/design/HSptW2QgO7uso9TRcJFMIA/Apneia-Na-Pratica?node-id=611-348&m=dev), com escopo restrito ao Hero Content `611:368`.
- [Desktop Wide 1920 × 828](https://www.figma.com/design/HSptW2QgO7uso9TRcJFMIA/Apneia-Na-Pratica?node-id=378-102&m=dev).
- [QHD 2560px](https://www.figma.com/design/HSptW2QgO7uso9TRcJFMIA/Apneia-Na-Pratica?node-id=295-10&m=dev), [Ultrawide 3440px](https://www.figma.com/design/HSptW2QgO7uso9TRcJFMIA/Apneia-Na-Pratica?node-id=295-11&m=dev) e [Super Ultrawide 5120px](https://www.figma.com/design/HSptW2QgO7uso9TRcJFMIA/Apneia-Na-Pratica?node-id=295-12&m=dev).
- Ajuste exclusivamente visual da Hero desktop, solicitado em 18/09/2026. Mobile/tablet e demais seções aprovados devem permanecer intactos.

## Implementação

- Um componente semântico Astro, com Body/Copy em fluxo flexível; wrappers usam `display: contents` abaixo de 1024px para preservar a composição anterior.
- Logo centralizada; paddings e gaps extraídos do Figma. Título Inter 700 e textos/CTA Arimo já disponíveis no projeto.
- Destaque continua sendo `mark` inline, acompanhando quebra de texto; não foram criados retângulos absolutos por linha.
- Foto original reutilizada, com viewport de recorte e imagem interna em 103.06% × 106.39%, sem deformação ou crop destrutivo.
- Sombra baseada no alpha do retrato; glow e ícone SVG extraídos do Figma. Os SVGs são decorativos, sem foco ou anúncios ao leitor de tela.
- Background e logoform existentes reutilizados: exports já incorporam o recorte/opacity. Não aplicar novamente o crop da imagem-fonte às logos renderizadas.
- Mantida a altura fluida entre 1680 e 1920px introduzida na versão anterior.
- Hero Content interpolado pelos três pontos aprovados de 1440px, 1707.333px e 1920px; a composição da direita preserva sua art direction independente.
- Acima de 2560px, a composição passa a usar o canvas de 1080px dos frames extra-wide, centralizando conteúdo e visual enquanto o espaço lateral cresce.

## Verificação

- Build Astro de produção aprovado.
- Comparação visual em Chromium contra screenshots nativos dos seis frames, com fontes e imagens carregadas.
- Posição do conteúdo: x200/y98.18/w404 em 1440px; x253/y115/w457 em 1707px; x350/y118.85/w476 em 1920px; x479/y181/w648 em 2560px, deslocando-se pelo centro em 3440px e 5120px.
- Testadas 21 larguras, incluindo 320, 390, 768, 1024, 1366, 1440, 1707, 1920, 2560, 3440 e 5120px. Sem overflow horizontal, imagens quebradas ou corte do conteúdo da Hero.
- Mockup da oferta validado com o novo PNG de 1465 × 1074, transparência preservada e sem alteração no CTA/formulário.
- Botão da Hero continua navegando para a seção de oferta existente.
- Grades visíveis preservadas: identificação/conteúdo 3×2 no desktop; método 4×1; tablet em duas colunas e celular em uma.
- Capturas da Hero em 390, 768 e 1023px idênticas pixel a pixel ao baseline local anterior. Em 320px, a pequena diferença ficou restrita à rasterização da logo; não houve alteração de regra ou asset mobile.

## Limites

Validação em Chromium com viewports simulados, não em dispositivos físicos. Figma e navegador apresentam pequenas diferenças de rasterização de fontes/imagens; não se declara identidade binária dos screenshots. Copy comercial, checkout e conformidade clínica não foram revalidados nesta alteração visual.
