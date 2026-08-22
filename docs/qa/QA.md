# QA — Apneia na Prática

> Executar antes de considerar a landing page pronta.

## 1. Conteúdo e compliance

- [ ] O nome visível do produto é “Apneia na Prática”.
- [ ] O preço exibido é R$ 47,00.
- [ ] A cartilha é descrita apenas como cartilha prática para uso no consultório, sem conteúdo inventado.
- [ ] Nenhum sinal isolado é apresentado como diagnóstico.
- [ ] Questionários não são apresentados como diagnóstico isolado.
- [ ] A página não promete cura, tratamento ou resultado clínico.
- [ ] A consulta é descrita como parte da investigação/organização do próximo passo.
- [ ] A polissonografia/avaliação adequada permanece vinculada à definição objetiva quando indicada.
- [ ] Nenhuma credencial do professor foi inventada.
- [ ] Nenhuma estatística, número de alunos ou depoimento foi inventado.
- [ ] Nenhuma condição de parcelamento/desconto/escassez foi inventada.
- [ ] Garantia de 7 dias revisada e confirmada antes da publicação.

## 2. Copy

- [ ] A copy vem de `COPY.md`.
- [ ] O agente não reescreveu headlines ou CTAs sem autorização.
- [ ] Não há lorem ipsum.
- [ ] Não há texto histórico contradizendo os overrides atuais.
- [ ] Um único H1 está presente.
- [ ] Hierarquia H1 → H2 → H3 está correta.

## 3. Conversão

- [ ] Promessa principal compreensível sem rolagem no desktop.
- [ ] Uma ação primária por dobra.
- [ ] Todos os CTAs usam o destino correto.
- [ ] CTA final existe antes do rodapé.
- [ ] Preço e entregáveis aparecem juntos na seção de oferta.
- [ ] Garantia, pagamento e suporte aparecem como redução de fricção, não como dobras independentes.

## 4. Design

- [ ] Dobra 1 mantém o macro-layout do arquivo `Dobra 1 - conceito aprovado.png`.
- [ ] Dobra 2 mantém o macro-layout do arquivo `Dobra 2 - conceito aprovado.png`.
- [ ] Rubik é a família principal em headings, CTAs, preços e labels.
- [ ] Arial é a família secundária em body, microcopy e rodapé.
- [ ] Nenhuma terceira família tipográfica foi introduzida.
- [ ] Paleta deriva da logo.
- [ ] Navy/Blue/Cyan são usados de forma consistente.
- [ ] Yellow é apenas acento raro.
- [ ] Não existem três seções consecutivas com o mesmo macro-layout.
- [ ] Hero é respirado.
- [ ] Dobra 2 usa grid.
- [ ] Dobra 3 usa comparação de dois painéis.
- [ ] Dobra 4 usa composição assimétrica + offer card.
- [ ] Dobra 5 usa foto + texto + trust bar.
- [ ] Espaço vazio é intencional.
- [ ] Textos não parecem markdown bruto.
- [ ] Cards não contêm texto excessivo.
- [ ] Ícones são consistentes.

## 5. Responsividade

- [ ] Testado em 360px.
- [ ] Testado em 390px.
- [ ] Testado em 768px.
- [ ] Testado em 1024px.
- [ ] Testado em 1440px.
- [ ] Testado em ultrawide.
- [ ] Zero scroll horizontal.
- [ ] CTAs têm área de toque mínima de 44px.
- [ ] Offer card não estoura o viewport.
- [ ] Comparação empilha corretamente no mobile.
- [ ] Grid da dobra 2 empilha sem comprometer leitura.
- [ ] Foto do professor preserva rosto e crop.

## 6. Acessibilidade

- [ ] Contraste de texto normal ≥ AA.
- [ ] Contraste de texto grande ≥ AA.
- [ ] Foco de teclado visível.
- [ ] Todos os links e botões são navegáveis por teclado.
- [ ] Imagens têm `alt` significativo ou `alt=""` quando decorativas.
- [ ] Não há informação transmitida apenas por cor.
- [ ] `prefers-reduced-motion` é respeitado.
- [ ] `lang="pt-BR"`.

## 7. Performance / Astro

- [ ] `npm run build` passa sem erros.
- [ ] Zero JavaScript por padrão.
- [ ] JS só existe se uma interação real exigir.
- [ ] Nenhuma dependência foi adicionada sem necessidade.
- [ ] Imagens passam por otimização.
- [ ] Imagens têm width/height para evitar CLS.
- [ ] WebP/AVIF quando adequado.
- [ ] Fontes usam `font-display: swap` se forem externas.
- [ ] CSS não bloqueia renderização desnecessariamente.
- [ ] Sem erros no console.

## 8. SEO e metadados

- [ ] `<title>` definido.
- [ ] Meta description definida.
- [ ] Canonical definido quando o domínio existir.
- [ ] Favicon presente.
- [ ] OG title definido.
- [ ] OG description definida.
- [ ] OG image definida.
- [ ] robots.txt coerente.
- [ ] Links de Política de Privacidade e Termos configurados.

## 9. Integrações

- [ ] Checkout Hotmart definitivo conectado.
- [ ] Link/canal de suporte definitivo conectado.
- [ ] Analytics configurado apenas se fornecido.
- [ ] Pixel configurado apenas se fornecido.
- [ ] Eventos de clique do CTA verificados, se houver analytics.

## 10. Revisão visual agêntica

Antes de entregar:

1. iniciar servidor local;
2. renderizar a página;
3. capturar screenshot desktop;
4. capturar screenshot mobile;
5. comparar com `DESIGN.md`;
6. revisar alinhamento, spacing, quebras e contraste;
7. corrigir;
8. repetir até não haver falhas visuais óbvias.

Só considerar concluído após a revisão visual e este checklist.


## 11. Quality gate objetivo

Antes do checklist binário final, executar `QUALITY-BAR.md`.

- [ ] Cada critério recebeu score + justificativa objetiva.
- [ ] Nenhum critério crítico ficou abaixo do mínimo.
- [ ] Feedback bloqueante está separado de sugestão não bloqueante.
- [ ] Toda falha apontada tem correção concreta.
- [ ] A página passou no teste de genericidade visual.
- [ ] A página passou no teste de promessa cumprida: tudo que a headline/oferta promete aparece de forma coerente no conteúdo.
- [ ] O resultado foi comparado às referências como padrão de qualidade, não como template literal.

## 12. Testes anti-pattern

- [ ] Não parece um template SaaS azul genérico.
- [ ] Não há gradient roxo/azul genérico de IA.
- [ ] Não há stock photo identificável.
- [ ] Não há cliché médico genérico como estetoscópio, cruz, moléculas ou cérebro 3D sem função.
- [ ] Não há card dentro de card sem necessidade.
- [ ] Não há dois elementos dominantes competindo na mesma dobra.
- [ ] Não há mais de um componente visual principal por argumento.
- [ ] Não há CTA pulsando, confete, glow ou parallax pesado.
- [ ] Não há falsas provas, selos ou números decorativos.
- [ ] Não há linguagem de “segredo”, “transforme sua vida” ou promessa clínica inflada.
