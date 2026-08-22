# PROMPT — Revisão técnica final para publicação

Use este prompt no Antigravity **depois que o layout e a copy da landing page estiverem aprovados**.

---

Mantenha exatamente o layout e a direção visual já construídos para a landing page **Apneia na Prática** e faça uma revisão técnica completa para deixá-la pronta para publicação.

## REGRA PRINCIPAL

Esta é uma etapa de engenharia, otimização e integração.

NÃO é uma etapa de redesign.

Não altere:

- macro-layout;
- ordem das 5 dobras;
- copy aprovada;
- identidade visual;
- Rubik como tipografia principal;
- Arial como tipografia secundária;
- paleta;
- composição aprovada das Dobras 1 e 2;
- responsividade já validada;

a menos que exista um problema técnico real de acessibilidade, performance ou quebra de layout. Nesse caso, faça a menor correção possível e documente.

Antes de alterar código, leia:

1. `PROJECT-CONTEXT.md`
2. `COPY.md`
3. `PUBLICATION-CONFIG.md`
4. `CHECKOUT-SUPPORT.md`
5. `LEGAL-PRIVACY-TERMS.md`
6. `SEO-AEO-GEO.md`
7. `TRACKING-ANALYTICS.md`
8. `LLMS-TXT-SPEC.md`
9. `SECURITY-PERFORMANCE.md`
10. `QA.md`

Não invente valores que estejam como `__PENDENTE__`.

---

# 1. CONFIGURAÇÃO CENTRAL

Crie ou revise uma única fonte de configuração para:

- URL pública;
- checkout;
- Política de Privacidade;
- Termos;
- suporte;
- IDs de tracking;
- metadata;
- OG image.

Evite valores hardcoded espalhados pelos componentes.

Se algum campo obrigatório continuar pendente, mantenha-o claramente marcado no ambiente de desenvolvimento e liste-o como bloqueio de produção.

---

# 2. CHECKOUT

Todos os CTAs de compra devem apontar para:

`CHECKOUT_URL` definido em `PUBLICATION-CONFIG.md`.

Não invente a URL.

Garanta que todos os CTAs usem a mesma fonte de configuração.

Se o projeto precisar preservar UTMs recebidas pela landing page, implemente a menor quantidade possível de JavaScript para transportar apenas parâmetros aprovados até a URL da Hotmart usando `URL` e `URLSearchParams`.

Não concatenar query strings manualmente.

Teste checkout com:

- URL limpa;
- UTMs;
- checkout que já possua query params;
- desktop;
- mobile.

---

# 3. SUPORTE E LINKS LEGAIS

Conectar no rodapé e nos blocos pertinentes:

- Política de Privacidade;
- Termos;
- suporte.

Usar somente URLs/canais reais definidos em `PUBLICATION-CONFIG.md`.

Não publicar links `#`, canais fictícios ou placeholders.

---

# 4. SEO TÉCNICO

Revisar/aplicar:

- HTML semântico;
- apenas um H1;
- hierarquia correta de headings;
- `<title>`;
- meta description;
- meta robots;
- canonical;
- favicon;
- Open Graph;
- Twitter Card;
- alt text adequado;
- sitemap;
- robots.txt;
- URL canônica;
- `lang="pt-BR"`.

Produção deve ser indexável apenas quando a URL oficial estiver definida.

Preview/staging deve permanecer `noindex`.

Não inserir keyword stuffing.

Não mudar a copy para “otimizar SEO”.

---

# 5. AEO / GEO

O HTML deve facilitar compreensão por mecanismos de busca e sistemas de IA.

Preservar explicitamente e de forma consistente:

- nome: Apneia na Prática;
- público: dentistas;
- preço: R$47;
- entrega: treinamento + cartilha prática;
- proposta educacional;
- limites clínicos.

Não inventar FAQ visual.

Não repetir blocos apenas para incluir keywords.

Manter informações centrais como texto HTML rastreável, não somente em imagens.

---

# 6. DADOS ESTRUTURADOS

Criar JSON-LD semanticamente correto, utilizando somente dados confirmados.

Avaliar:

- `WebPage`;
- `Course`;
- `Offer`;
- `Person`, apenas se os dados do professor estiverem confirmados;
- `Organization`, apenas se os dados institucionais estiverem confirmados.

Para a oferta confirmada:

- name: Apneia na Prática;
- price: 47.00;
- priceCurrency: BRL;
- url: URL real apropriada;
- audience: dentistas;
- inLanguage: pt-BR.

Não inventar:

- reviews;
- aggregateRating;
- número de alunos;
- duração;
- certificado;
- SKU;
- credenciais;
- associações;
- disponibilidade artificial.

Validar o JSON-LD.

Não afirmar que structured data garante rich result.

---

# 7. LLMS.TXT

Gerar:

```txt
public/llms.txt
```

seguindo `LLMS-TXT-SPEC.md`.

O arquivo deve incluir:

- nome da oferta;
- resumo;
- público;
- proposta;
- benefícios/objetivos educacionais confirmados;
- o que está incluso;
- preço;
- limites clínicos;
- FAQ resumido;
- suporte;
- landing page;
- CTA/checkout;
- Política;
- Termos.

Não publicar placeholders.

Tratar `llms.txt` como recurso complementar/experimental, não como fator garantido de GEO.

---

# 8. ANALYTICS / PIXELS

Ler `TRACKING-ANALYTICS.md`.

Instalar apenas IDs realmente fornecidos.

Não usar IDs fictícios.

Não duplicar GA4 via implementação direta + GTM sem intenção explícita.

Taxonomia mínima da landing page:

- page_view;
- cta_checkout_click;
- support_click, se aplicável.

O clique no checkout NÃO é `purchase`.

Delegar checkout real e venda para integrações confiáveis da Hotmart quando configuradas.

Quando GA4/Meta/Google Ads forem utilizados, revisar também a integração oficial disponível na Hotmart.

---

# 9. CONSENTIMENTO E PRIVACIDADE

Se trackers/cookies exigirem consentimento segundo a estratégia adotada, implementar CMP/banner funcional.

Não criar banner que apenas aparece visualmente mas deixa tags dispararem antes da escolha.

Se Google tags forem usadas e a estratégia exigir, preparar Consent Mode de maneira coerente.

A Política de Privacidade deve refletir os trackers efetivamente instalados.

Não decidir base legal no código.

---

# 10. PERFORMANCE

Preservar o princípio:

**zero JavaScript por padrão.**

JavaScript só deve existir para:

- tracking aprovado;
- consentimento;
- propagação de UTM;
- interação real necessária.

Revisar:

- CSS morto;
- dependências;
- JS;
- imagens;
- fontes;
- cache;
- LCP;
- CLS;
- INP.

Hero:

- não lazy-load da imagem LCP;
- dimensões explícitas;
- priorizar recurso realmente crítico.

Abaixo da dobra:

- lazy loading quando apropriado.

Rubik:

- carregar apenas pesos usados;
- `font-display: swap`;
- evitar carregar famílias adicionais.

Arial:

- usar stack de sistema.

---

# 11. ACESSIBILIDADE

Validar:

- semântica;
- headings;
- alt;
- foco;
- contraste;
- teclado;
- touch targets;
- links;
- aria apenas quando necessário;
- `prefers-reduced-motion`;
- ordem de leitura;
- estados de foco visíveis.

Não adicionar ARIA redundante a elementos nativos que já possuem semântica correta.

---

# 12. SEGURANÇA

Mesmo sendo LP estática:

Revisar:

- HTTPS;
- links externos;
- dependências;
- mixed content;
- scripts terceiros;
- integridade da navegação.

Para links externos em nova aba:

```html
rel="noopener noreferrer"
```

Checkout preferencialmente na mesma aba.

---

# 13. HEADERS DE HOSPEDAGEM

Entregar uma seção separada de recomendações para servidor/hospedagem.

Incluir:

```txt
Content-Security-Policy
Content-Security-Policy-Report-Only durante rollout
Referrer-Policy
X-Content-Type-Options
Permissions-Policy
Strict-Transport-Security quando apropriado
```

Não ativar uma CSP genérica sem testar.

Primeiro mapear origens reais de:

- Google Fonts, se usado;
- GA/GTM;
- Meta;
- Hotmart;
- outros terceiros.

Começar CSP em Report-Only, validar, depois aplicar enforcement.

Se o provedor de hospedagem já estiver definido, entregar configuração específica para ele.

Se ainda não estiver, entregar cabeçalhos e regras agnósticas de plataforma.

---

# 14. TESTES

Executar no mínimo:

### Build
- build sem erros;
- console sem erros.

### Responsividade
- 360;
- 390;
- 768;
- 1024;
- 1440.

### SEO
- metadata;
- canonical;
- robots;
- sitemap;
- structured data;
- Open Graph;
- llms.txt.

### Conversão
- todos os CTAs;
- checkout;
- UTM;
- suporte;
- links legais.

### Analytics
quando instalados:
- eventos;
- sem duplicação;
- consentimento aceito;
- consentimento negado.

### Performance
- Lighthouse mobile;
- LCP;
- CLS;
- INP;
- Network.

### Segurança
- headers;
- CSP Report-Only;
- HTTPS;
- mixed content.

---

# 15. NÃO FAZER

Não:

- redesenhar;
- mudar copy;
- adicionar FAQ visual;
- criar popups;
- adicionar countdown;
- criar urgência;
- inventar prova social;
- inventar dados jurídicos;
- inventar tracking IDs;
- inventar checkout;
- disparar Purchase no clique;
- adicionar pacotes sem necessidade;
- sacrificar Core Web Vitals para analytics.

---

# 16. ENTREGA FINAL

Entregue:

## 1. CÓDIGO FINAL

Liste arquivos alterados e o motivo.

## 2. CONFIGURAÇÃO

Informe quais variáveis foram preenchidas e quais continuam pendentes.

## 3. SEO / AEO / GEO

Resuma metadata, semantic HTML, structured data, sitemap, robots e llms.txt.

## 4. TRACKING

Informe:

- arquitetura;
- IDs;
- eventos;
- consentimento;
- integrações delegadas à Hotmart.

## 5. SEGURANÇA / SERVIDOR

Bloco separado com headers e configuração necessária na hospedagem.

## 6. PERFORMANCE

Resultados e principais otimizações.

## 7. QA

Checklist executado, com PASS/FAIL.

## 8. BLOQUEIOS DE PRODUÇÃO

Liste qualquer `__PENDENTE__` que impeça publicação.

Não declare a LP pronta para produção enquanto existir bloqueio obrigatório.
