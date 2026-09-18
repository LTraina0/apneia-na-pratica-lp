# Visibilidade temporária de seções

A pedido do usuário, a partir de v1.2.3, a Hero original e o card da cartilha
não são renderizados na página. Não há espaço vazio, elementos focáveis
ocultos nem exclusão do material original.

## Controle

Arquivo: `src/config/page-sections.ts`.

- `hero: false`: mantém `Hero.astro` e seus assets intactos, mas não monta a primeira dobra.
- `booklet: false`: passa `showBooklet={false}` para `TrainingOverview.astro`, omitindo somente o card complementar. Os seis tópicos do treinamento permanecem.
- Para restaurar qualquer bloco, alterar apenas sua flag para `true`, validar e publicar novamente.

A página mantém um H1 acessível com o nome do produto enquanto a Hero está
desativada. Ao reativá-la, esse H1 de apoio deixa de ser renderizado,
preservando um único H1.

## Limites

- A ocultação da cartilha é visual/editorial: não remove a cartilha dos entregáveis ou das menções à oferta.
- Não alterar a grade compartilhada ou as demais seções durante a troca da Hero.
- A nova Hero deve ser um componente independente; manter a original até haver uma decisão explícita de descarte.
- O estado anterior completo permanece registrado na tag `v1.2.2`.
