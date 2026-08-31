# Manual de Instalação Mastigado — Apneia na Prática

> Este projeto **não usa `.env` para publicação e tracking**.
>
> Existe um único arquivo manual para preencher. As integrações ficam separadas para reduzir erro de IA.

---

# REGRA PRINCIPAL

A IA responsável pelo deploy deve começar por este arquivo:

```txt
src/config/publication.ts
```

Ela deve substituir somente valores que começam com:

```txt
COLE_AQUI_
```

Não colocar IDs, URLs, e-mails ou telefones diretamente em componentes.

---

# PASSO 1 — ABRA O ARQUIVO DE CONFIGURAÇÃO

Abra:

```txt
src/config/publication.ts
```

Você verá algo parecido com:

```ts
export const publication = {
  release: {
    ready: false,
  },

  site: {
    url: 'COLE_AQUI_SITE_URL',
  },

  checkout: {
    url: 'COLE_AQUI_CHECKOUT_HOTMART',
  },

  tracking: {
    gtm: 'COLE_AQUI_GTM_ID',
    ga4: 'COLE_AQUI_GA4_ID',
    metaPixel: 'COLE_AQUI_META_PIXEL_ID',
    googleAds: 'COLE_AQUI_GOOGLE_ADS_ID',
    googleAdsConversionLabel: 'COLE_AQUI_GOOGLE_ADS_CONVERSION_LABEL',
    hotmartAnalyticsCode: 'COLE_AQUI_HOTMART_ANALYTICS_CODE',
  },

  legal: {
    privacy: 'COLE_AQUI_PRIVACY_URL',
    terms: 'COLE_AQUI_TERMS_URL',
  },

  support: {
    email: 'COLE_AQUI_SUPPORT_EMAIL',
    whatsapp: 'COLE_AQUI_SUPPORT_WHATSAPP',
    pageUrl: 'COLE_AQUI_SUPPORT_PAGE_URL',
  },
} as const;
```

---

# PASSO 2 — PREENCHA SOMENTE OS VALORES

Exemplo:

```ts
checkout: {
  url: 'https://pay.hotmart.com/XXXXXXXX',
},
```

Exemplo GTM:

```ts
tracking: {
  gtm: 'GTM-XXXXXXX',
```

Exemplo Meta:

```ts
metaPixel: '123456789012345',
```

Exemplo Google Ads:

```ts
googleAds: 'AW-XXXXXXXXX',
googleAdsConversionLabel: 'XXXXXXXXXXXX',
```

Se alguma integração não for usada, escreva:

```txt
NAO_USADO
```

Não invente valores.

---

# PASSO 3 — NÃO MEXA NAS INTEGRAÇÕES SEM NECESSIDADE

Os arquivos abaixo já existem para isolar responsabilidades:

```txt
src/integrations/Gtm.astro
src/integrations/CheckoutBridge.astro
src/integrations/checkout.ts
src/integrations/tracking.ts
```

Função de cada um:

```txt
Gtm.astro
→ carrega GTM no head e o noscript no body

CheckoutBridge.astro
→ conecta checkout configurado aos CTAs
→ preserva UTMs
→ dispara cta_checkout_click

checkout.ts
→ lógica whitelist de UTM

tracking.ts
→ única função de push para dataLayer
```

Se o deploy normal funcionar, **não edite esses arquivos**.

---

# PASSO 4 — CHECKOUT

O checkout vem de:

```txt
src/config/publication.ts
→ publication.checkout.url
```

O `CheckoutBridge.astro` substitui o destino do CTA de compra em runtime antes do modal continuar para pagamento.

Teste com:

```txt
?utm_source=meta&utm_medium=cpc&utm_campaign=teste&utm_content=criativo01
```

Resultado esperado no checkout:

```txt
utm_source=meta
utm_medium=cpc
utm_campaign=teste
utm_content=criativo01
```

---

# PASSO 5 — GTM

Preencha:

```ts
gtm: 'GTM-XXXXXXX',
```

O arquivo:

```txt
src/integrations/Gtm.astro
```

já está conectado globalmente em:

```txt
src/layouts/Layout.astro
```

Não instalar outro snippet GTM manualmente em componentes.

Teste com:

```txt
Google Tag Manager → Preview / Tag Assistant
```

Esperado:

```txt
1 container conectado
```

---

# PASSO 6 — GA4

Preencha no código:

```ts
ga4: 'G-XXXXXXXXXX',
```

Esse ID fica documentado/centralizado no projeto.

No GTM:

```txt
Tags
→ New
→ Google tag
→ Tag ID = G-XXXXXXXXXX
→ Trigger = Initialization - All Pages
```

Não instalar o mesmo GA4 diretamente no Astro e novamente no GTM.

Teste:

```txt
GA4 → DebugView
```

Esperado:

```txt
1 page_view por carregamento normal
```

---

# PASSO 7 — META PIXEL

Preencha:

```ts
metaPixel: 'SEU_ID_META',
```

No GTM, configure o pixel da Meta usando esse mesmo ID.

Evento de página:

```txt
PageView
```

Evento de checkout pode ser:

```txt
InitiateCheckout
```

mas apenas se essa for a estratégia da operação.

Nunca:

```txt
Purchase no clique do CTA
```

Compra deve ser confirmada pela Hotmart / fluxo de venda.

---

# PASSO 8 — GOOGLE ADS

Preencha:

```ts
googleAds: 'AW-XXXXXXXXX',
googleAdsConversionLabel: 'SEU_LABEL',
```

Configure no GTM a Google Tag correspondente.

Se o Conversion Label for de compra, ele deve disparar somente na compra confirmada.

---

# PASSO 9 — EVENTO DA LP

O projeto já possui o evento:

```txt
cta_checkout_click
```

O payload permitido é:

```txt
cta_location
cta_text
page_path
```

Não enviar para `dataLayer`:

```txt
nome
e-mail
WhatsApp
telefone
dados clínicos
```

---

# PASSO 10 — PRIVACIDADE, TERMOS E SUPORTE

Preencha em `publication.ts`:

```ts
legal: {
  privacy: 'URL_REAL',
  terms: 'URL_REAL',
},

support: {
  email: 'EMAIL_REAL',
  whatsapp: 'WHATSAPP_REAL',
  pageUrl: 'URL_SUPORTE_REAL',
},
```

O `Footer.astro` já consome esses dados.

Prioridade de suporte:

```txt
1. support.pageUrl
2. support.email
3. support.whatsapp
```

Se o valor ainda não existe, não invente.

---

# PASSO 11 — HOTMART

A Hotmart continua sendo responsável pela parte do funil que confirma checkout e venda.

Fluxo:

```txt
LANDING PAGE
page_view
cta_checkout_click
↓
HOTMART
checkout / begin_checkout
purchase confirmado
```

Revisar dentro da Hotmart:

```txt
[ ] GA4
[ ] Meta Pixel
[ ] Google Ads
[ ] eventos de checkout
[ ] evento de venda/purchase
[ ] integração Web/API se usada
```

Evitar duplicação de `Purchase` entre browser, GTM e Hotmart/API.

---

# PASSO 12 — RELEASE GATE

Enquanto estiver configurando, deixe:

```ts
release: {
  ready: false,
},
```

Depois que os dados obrigatórios estiverem reais e testados, altere para:

```ts
release: {
  ready: true,
},
```

Quando `ready: true`, o projeto valida os campos obrigatórios.

Se algum ainda estiver com `COLE_AQUI_*`, o build será bloqueado com mensagem de publicação incompleta.

---

# PASSO 13 — TESTE

Rode:

```bash
npm install
npm run build
npm run preview
```

Depois confira:

```txt
[ ] página abre
[ ] CTA abre modal
[ ] checkout final é o real
[ ] UTMs chegam ao checkout
[ ] GTM conecta 1 vez
[ ] GA4 recebe 1 page_view
[ ] Meta recebe PageView
[ ] cta_checkout_click dispara 1 vez
[ ] dataLayer não contém PII
[ ] Google Ads está presente
[ ] Política abre
[ ] Termos abre
[ ] Suporte abre
[ ] Purchase não dispara no clique
[ ] compra real registra Purchase no fluxo correto
[ ] desktop testado
[ ] mobile testado
```

---

# PASSO 14 — O QUE A IA PODE EDITAR

Normalmente:

```txt
src/config/publication.ts
```

Só altere implementação se algum teste falhar e houver evidência do problema.

Não espalhe valores por:

```txt
Hero.astro
Offer.astro
Footer.astro
Layout.astro
outros componentes
```

---

# RESUMO DE 20 SEGUNDOS

```txt
1. abra src/config/publication.ts
2. troque COLE_AQUI_* pelos valores reais
3. configure GA4/Meta/Ads dentro do GTM
4. configure Hotmart
5. rode npm run build
6. teste GTM/GA4/Meta/UTM/checkout
7. quando tudo estiver validado, mude release.ready para true
8. rode build novamente
9. só então libere tráfego
```

Documentação técnica complementar:

```txt
docs/engineering/PUBLICATION-CONFIG.md
docs/engineering/TRACKING-ANALYTICS.md
docs/engineering/CHECKOUT-SUPPORT.md
docs/engineering/LEGAL-PRIVACY-TERMS.md
```
