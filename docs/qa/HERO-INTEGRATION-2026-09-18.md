# QA — integração da Hero — v1.3.0

## Referências

- Hero: HeroLP-testing, commit `22e69a4b31bf0cf8a25ddcc848af34e96d326dd1`.
- Regressão: página publicada v1.2.5, antes desta integração.
- Execução: Chromium desktop com viewports emulados; não substitui testes em aparelhos físicos.

## Resultado

- `npm run build`: PASS.
- `git diff --check`: PASS.
- Hashes de todos os assets importados em `public/assets/hero` idênticos aos da origem.
- Comparação de 10 elementos da Hero: seção, conteúdo, marca, H1, descrição, ações, CTA, microcopy, retrato e logoform.
- Larguras: 319, 320, 359, 360, 390, 430, 480, 767, 768, 1023, 1024, 1099, 1100, 1440, 1679, 1680 e 1920px.
- Mesmas posições e dimensões da referência em 15 larguras. Em 319/320px, apenas a altura mínima acessível do CTA (44px) acrescenta, respectivamente, 0,40625/0,265625px.
- Fontes declaradas, tamanhos, cores e textos comparados: iguais à referência nas 17 larguras.
- Grades de identificação, método e treinamento: mesmas dimensões, colunas, intervalos, alturas de cards, fontes, cores e textos da versão anterior em todas as larguras.
- Sem overflow horizontal; um H1; nenhum card ilustrado da cartilha no DOM; nenhuma âncora interna sem destino.
- CTA ativado por Enter navega para `#oferta`; foco visível presente; sem role de botão indevido em link.
- Animação do ícone desativada com `prefers-reduced-motion`.
- Inspeção visual das capturas desktop/mobile: composição da origem mantida.

## Adaptações intencionais

- CSS/tokens com escopo Astro e fonte Inter restrita à Hero.
- CTA integrado à oferta existente, sem inventar checkout.
- Um original de retrato em vez de quatro arquivos idênticos; WebP responsivo gerado pelo Astro (aproximadamente 22–189 KiB nas variantes).
- Hero antiga, duas imagens exclusivas, card da cartilha e controles de ocultação removidos por solicitação explícita; recuperáveis no Git.

## Limites

- Configuração comercial/legal pendente é preexistente; esta validação é da integração visual e funcional, não do lançamento de campanhas ou processamento de compras.
- Não houve alteração de textos, estilos ou lógica das demais seções, exceto remoção do bloco ilustrado já oculto da cartilha.
