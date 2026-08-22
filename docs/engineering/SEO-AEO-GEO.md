# SEO + AEO + GEO + CRO — Apneia na Prática

## Objetivo

Melhorar rastreabilidade, compreensão semântica, leitura por mecanismos de busca e sistemas de IA, sem modificar a copy aprovada ou transformar a landing page em conteúdo artificialmente otimizado.

### Termos usados

- **SEO**: Search Engine Optimization.
- **AEO**: Answer Engine Optimization — tornar respostas e entidades fáceis de extrair.
- **GEO**: Generative Engine Optimization — aumentar clareza e citabilidade para sistemas generativos.
- **CRO**: Conversion Rate Optimization — reduzir fricção de conversão sem inventar gatilhos.

Não existe garantia de ranking, citação ou resposta por IA.

---

## 1. HTML semântico

Estrutura sugerida:

```html
<header>
<main>
  <section aria-labelledby="...">
  ...
</main>
<footer>
```

Regras:

- um único `<h1>`;
- H2 para dobras principais;
- H3 apenas quando subordinado;
- não usar heading apenas para tamanho visual;
- CTA deve ser `<a>` quando navega para checkout;
- usar `<button>` apenas para ação que ocorre na página.

---

## 2. Head

Implementar:

```txt
title
meta description
meta robots
canonical
viewport
theme-color, se apropriado
favicon
Open Graph
Twitter Card
```

### Title inicial

```txt
Apneia na Prática | Treinamento para Dentistas
```

### Meta description inicial

```txt
Aprenda a reconhecer sinais de possível apneia, estruturar perguntas e entender quando a investigação do sono merece avançar. Treinamento para dentistas.
```

Revisar com domínio e posicionamento final.

---

## 3. Robots e canonical

Produção:

```html
<meta name="robots" content="index,follow">
```

Staging/preview:

```html
<meta name="robots" content="noindex,nofollow">
```

Canonical deve apontar para a URL pública final, não para staging.

`robots.txt` não deve ser usado como substituto de `noindex`.

---

## 4. Open Graph

Usar valores reais:

```txt
og:type=website
og:title
og:description
og:url
og:image
og:locale=pt_BR
```

Não gerar `og:image` definitiva enquanto o ativo não estiver aprovado.

Twitter Card:

```txt
twitter:card=summary_large_image
twitter:title
twitter:description
twitter:image
```

---

## 5. Imagens

- logo com alt coerente;
- mockup com alt descritivo e curto;
- imagens puramente decorativas com `alt=""`;
- não repetir keywords no alt;
- width/height conhecidos;
- imagem crítica do Hero não deve receber lazy loading se isso prejudicar LCP;
- imagens abaixo da dobra podem usar `loading="lazy"`;
- `decoding="async"` quando apropriado;
- usar formatos otimizados quando não comprometer transparência/qualidade.

---

## 6. Dados estruturados

Usar JSON-LD somente com dados reais visíveis/confirmados.

Tipos semanticamente úteis a avaliar:

```txt
WebPage
Course
Offer
Organization
Person
```

### Curso/oferta

É aceitável representar semanticamente o treinamento como `Course` e sua oferta com `Offer` quando os dados correspondem ao conteúdo visível.

Dados possíveis:

```txt
name: Apneia na Prática
description: baseada na oferta real
inLanguage: pt-BR
audience: dentistas
offers.price: 47.00
offers.priceCurrency: BRL
offers.url: CHECKOUT_URL
```

Não inventar:

- rating;
- review;
- aggregateRating;
- SKU;
- availability;
- número de alunos;
- duração;
- credential;
- certificado.

### Professor

Adicionar `Person` apenas com dados confirmados.

Não adicionar credenciais que ainda aguardam validação.

### Organização

Adicionar apenas quando nome jurídico/comercial, URL e logo estiverem confirmados.

Validar o JSON-LD após implementação.

Dados estruturados não garantem rich result.

---

## 7. AEO / resposta direta

A estrutura deve permitir que mecanismos entendam rapidamente:

```txt
O que é?
Para quem é?
O que ensina?
O que inclui?
Quanto custa?
Qual é o limite clínico da proposta?
Como comprar?
```

Essas respostas já existem na copy.

Não criar blocos redundantes só para SEO.

Não adicionar FAQ visual à LP sem aprovação.

---

## 8. GEO

Princípios:

- entidade do produto consistente: “Apneia na Prática”;
- público consistente: dentistas;
- preço consistente: R$47;
- entrega consistente: treinamento + cartilha prática;
- evitar sinônimos que mudem a promessa;
- manter claims clínicos contidos;
- texto importante em HTML, não apenas dentro de imagens;
- estrutura semântica clara;
- canonical correto;
- informações comerciais atualizadas;
- professor e organização com entidades explícitas somente quando confirmadas.

GEO é consequência de clareza e consistência, não de keyword stuffing.

---

## 9. llms.txt

Criar `/llms.txt` como camada complementar e experimental.

Importante:

- `llms.txt` é uma proposta/convenção emergente;
- não substitui HTML semântico;
- não substitui sitemap;
- não substitui robots.txt;
- não garante ranking ou citação em IA;
- não é mecanismo de permissão de crawler.

Consultar `LLMS-TXT-SPEC.md`.

---

## 10. Sitemap

Para uma LP pública:

- incluir a URL canônica no sitemap;
- evitar URLs de preview;
- usar HTTPS;
- atualizar `lastmod` somente quando houver mudança real, se a implementação utilizar esse campo.

---

## 11. Conteúdo renderizado

As informações principais precisam existir no HTML inicial.

Evitar depender de JS para renderizar:

- headline;
- preço;
- produto;
- benefícios;
- professor;
- aviso clínico.

Uma LP Astro estática é adequada a esse objetivo.

---

## 12. CRO sem manipulação

Melhorias permitidas:

- CTA visível;
- coerência entre CTA e checkout;
- redução de distrações;
- preço claro;
- segurança do pagamento;
- suporte claro;
- garantia corretamente apresentada;
- mobile rápido;
- hierarquia forte.

Não adicionar:

- countdown;
- vagas falsas;
- escassez;
- preço riscado inventado;
- reviews falsos;
- popups agressivos.

---

## 13. Validação

Antes da publicação:

- HTML validator;
- heading outline;
- canonical;
- robots;
- Rich Results Test quando aplicável;
- Search Console após domínio;
- Lighthouse;
- mobile;
- visualização sem JS;
- Open Graph preview;
- sitemap;
- `/llms.txt`;
- ausência de metadata de staging.
