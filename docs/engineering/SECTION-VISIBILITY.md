# Substituição da Hero e remoção da cartilha ilustrada

## Estado atual — v1.3.2

Por solicitação explícita do usuário em 18/09/2026, a Hero antiga e o card
ilustrado da cartilha foram excluídos do código ativo, não apenas ocultados.
A cartilha continua fazendo parte da oferta e das menções comerciais.

- `Hero.astro` contém somente a nova Hero de [HeroLP-testing](https://github.com/LTraina0/HeroLP-testing), commit `22e69a4b31bf0cf8a25ddcc848af34e96d326dd1`.
- `TrainingOverview.astro` contém apenas os seis tópicos aprovados.
- As flags `pageSections`, a prop `showBooklet` e o H1 provisório foram removidos.
- `public/assets/hero-bg.jpg` e `public/assets/mockup.png` eram exclusivos da Hero anterior e foram removidos. Logo e mockup da oferta permanecem.

## Integração

- Composição, imagens e textos da Hero fornecida pelo usuário preservados.
- CSS e tokens limitados ao componente Astro; desktop refinado pelos frames Figma 378:99 e 378:102, com Inter no título e Arimo no corpo/CTA. Mobile/tablet preservados da integração original.
- Botão adaptado de `#comprar` (sem destino no projeto de origem) para `#oferta`, preservando o fluxo da landing page. Não foram criados links de checkout.
- Quatro retratos PNG idênticos da origem consolidados em `src/assets/hero/expert.png`; Astro gera WebP responsivo sem mudar a composição.
- Bases de assets derivadas de `import.meta.env.BASE_URL`, sem depender de caminhos do repositório de teste.
- Área mínima do CTA de 44px, foco visível e movimento reduzido preservados.
- Layouts das grades, hover do método, modal, FAQ e demais seções não foram alterados.
- Configuração comercial/checkout pendente é preexistente; esta integração não representa validação para lançamento de campanhas.

## Histórico

As versões antigas podem ser recuperadas pelo Git (tag `v1.2.5` para o
código oculto, `v1.2.2` para a página com os dois blocos visíveis).
O relatório de ocultação em `docs/qa/SECTION-VISIBILITY-2026-09-18.md`
é histórico; suas instruções de restauração por flag não se aplicam mais.
