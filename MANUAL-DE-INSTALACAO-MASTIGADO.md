# Manual de Instalação Mastigado — Apneia na Prática

> Este arquivo foi feito para execução **Ctrl C + Ctrl V**.
>
> A ideia aqui é simples: **abra o arquivo indicado, procure o trecho indicado, cole o bloco indicado e teste exatamente o que está descrito.**
>
> Não precisa ler o restante da documentação para fazer o deploy e instalar tracking. Se surgir dúvida técnica específica, os documentos completos continuam em `docs/engineering/`.

---

# PASSO 0 — ANTES DE COMEÇAR, PEGUE ESTES DADOS

Não comece a instalação sem ter os dados reais abaixo.

Copie esta lista, preencha e deixe aberta do lado:

```txt
SITE_URL=
CHECKOUT_URL=

GTM_ID=
GA4_ID=
META_PIXEL_ID=
GOOGLE_ADS_ID=
GOOGLE_ADS_CONVERSION_LABEL=
HOTMART_ANALYTICS_CODE=

PRIVACY_URL=
TERMS_URL=

SUPPORT_EMAIL=
SUPPORT_WHATSAPP=
SUPPORT_PAGE_URL=

LEAD_WEBHOOK_URL=

CONSENT_PLATFORM=
CONSENT_MODE=
```

Se algum campo não for utilizado pela operação, deixe identificado como `NAO_USADO`.

Se algum campo ainda não foi fornecido, pare naquele ponto e peça o dado real. **Não invente ID, URL, telefone ou e-mail.**

---

# PASSO 1 — CRIAR O ARQUIVO CENTRAL DE CONFIGURAÇÃO

## 1.1 Crie esta pasta se ainda não existir

```txt
src/config/
```

## 1.2 Dentro dela, crie este arquivo

```txt
src/config/site.ts
```

## 1.3 Copie e cole o arquivo inteiro abaixo

```ts
export const siteConfig = {
  siteUrl: 'COLE_AQUI_SITE_URL',
  checkoutUrl: 'COLE_AQUI_CHECKOUT_URL',

  privacyUrl: 'COLE_AQUI_PRIVACY_URL',
  termsUrl: 'COLE_AQUI_TERMS_URL',

  supportEmail: 'COLE_AQUI_SUPPORT_EMAIL',
  supportWhatsapp: 'COLE_AQUI_SUPPORT_WHATSAPP',
  supportPageUrl: 'COLE_AQUI_SUPPORT_PAGE_URL',

  gtmId: 'COLE_AQUI_GTM_ID',
  ga4Id: 'COLE_AQUI_GA4_ID',
  metaPixelId: 'COLE_AQUI_META_PIXEL_ID',
  googleAdsId: 'COLE_AQUI_GOOGLE_ADS_ID',
  googleAdsConversionLabel: 'COLE_AQUI_GOOGLE_ADS_CONVERSION_LABEL',
  hotmartAnalyticsCode: 'COLE_AQUI_HOTMART_ANALYTICS_CODE',

  leadWebhookUrl: 'COLE_AQUI_LEAD_WEBHOOK_URL',

  consentPlatform: 'COLE_AQUI_CONSENT_PLATFORM',
  consentMode: 'COLE_AQUI_CONSENT_MODE',
} as const;
```

## 1.4 Agora faça Ctrl H neste arquivo e substitua

```txt
COLE_AQUI_SITE_URL
```

pelo valor de:

```txt
SITE_URL
```

Depois faça o mesmo para todos os demais `COLE_AQUI_...`.

## 1.5 Resultado esperado

O arquivo deve ficar parecido com isto:

```ts
export const siteConfig = {
  siteUrl: 'https://seudominio.com.br',
  checkoutUrl: 'https://pay.hotmart.com/XXXXXXXX',

  privacyUrl: 'https://seudominio.com.br/privacidade',
  termsUrl: 'https://seudominio.com.br/termos',

  supportEmail: 'suporte@seudominio.com.br',
  supportWhatsapp: '5514999999999',
  supportPageUrl: '',

  gtmId: 'GTM-XXXXXXX',
  ga4Id: 'G-XXXXXXXXXX',
  metaPixelId: '123456789012345',
  googleAdsId: 'AW-XXXXXXXXX',
  googleAdsConversionLabel: 'XXXXXXXXXXXX',
  hotmartAnalyticsCode: '',

  leadWebhookUrl: '',

  consentPlatform: '',
  consentMode: '',
} as const;
```

Não use os valores acima como valores reais. São só exemplos de formato.

---

# PASSO 2 — COLOCAR O CHECKOUT REAL DA HOTMART

## 2.1 Abra

```txt
src/components/Offer.astro
```

## 2.2 No topo do arquivo, procure

```astro
---
import CtaBlock from './CtaBlock.astro';

const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/');
---
```

## 2.3 Substitua por

```astro
---
import CtaBlock from './CtaBlock.astro';
import { siteConfig } from '../config/site';

const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/');
---
```

## 2.4 Ainda em `Offer.astro`, procure exatamente

```astro
href="https://pay.hotmart.com"
```

## 2.5 Apague e cole

```astro
href={siteConfig.checkoutUrl}
```

## 2.6 O bloco final do CTA deve ficar parecido com

```astro
<CtaBlock
  showPrice={true}
  text="QUERO ACESSAR AGORA"
  href={siteConfig.checkoutUrl}
  target="_blank"
  leadCapture={true}
  showIcon={true}
  microcopy="Pagamento 100% seguro processado via Hotmart. Seus dados estão protegidos."
  className="offer-figma-cta reveal reveal-cta delay-5"
/>
```

## 2.7 Teste agora

Rode:

```bash
npm run dev
```

Abra a LP, vá até a oferta e clique no CTA.

Resultado esperado:

```txt
CTA abre o modal de lead.
Após enviar o modal, o fluxo continua para o CHECKOUT_URL configurado.
```

Se ainda abrir `https://pay.hotmart.com` sem o código do produto, volte ao passo 2.4.

---

# PASSO 3 — INSTALAR O GTM GLOBALMENTE

## 3.1 Abra

```txt
src/layouts/Layout.astro
```

## 3.2 No topo do arquivo, procure

```astro
---
import '../styles/global.css';
```

## 3.3 Logo abaixo, cole

```astro
import { siteConfig } from '../config/site';
```

O começo do arquivo deve ficar assim:

```astro
---
import '../styles/global.css';
import { siteConfig } from '../config/site';
```

## 3.4 Agora procure a abertura de `<head>`

```html
<head>
```

## 3.5 Imediatamente depois de `<head>`, cole este bloco inteiro

```astro
{siteConfig.gtmId && siteConfig.gtmId !== 'NAO_USADO' && (
  <script is:inline define:vars={{ gtmId: siteConfig.gtmId }}>
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),
          dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',gtmId);
  </script>
)}
```

## 3.6 Agora procure

```html
<body>
```

## 3.7 Imediatamente depois de `<body>`, cole

```astro
{siteConfig.gtmId && siteConfig.gtmId !== 'NAO_USADO' && (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
      height="0"
      width="0"
      style="display:none;visibility:hidden"
    ></iframe>
  </noscript>
)}
```

## 3.8 Não coloque GTM em nenhum outro arquivo

Não instalar novamente em:

```txt
Hero.astro
Offer.astro
Footer.astro
index.astro
LeadCaptureModal.astro
```

GTM entra **uma única vez** no `Layout.astro`.

## 3.9 Teste

Rode:

```bash
npm run build
npm run preview
```

Depois abra o GTM → Preview / Tag Assistant e informe a URL da página.

Resultado esperado:

```txt
O container GTM deve conectar uma única vez.
```

---

# PASSO 4 — CONFIGURAR GA4 DENTRO DO GTM

Não coloque `gtag.js` manualmente na LP se o GA4 for gerenciado pelo GTM.

## 4.1 Abra o Google Tag Manager

Entre no container correspondente ao:

```txt
GTM_ID
```

## 4.2 Clique

```txt
Tags
→ New
→ Tag Configuration
→ Google tag
```

## 4.3 No campo Tag ID, cole

```txt
GA4_ID
```

Formato esperado:

```txt
G-XXXXXXXXXX
```

## 4.4 Trigger

Escolha:

```txt
Initialization - All Pages
```

ou, se a operação já tiver um padrão de consentimento configurado:

```txt
o trigger de inicialização aprovado pela operação
```

## 4.5 Salve com o nome

```txt
GA4 - Google Tag - All Pages
```

## 4.6 Não faça isto

```txt
❌ GA4 direto no Layout.astro
+
❌ mesmo GA4 novamente no GTM
```

Isso pode duplicar pageviews.

## 4.7 Teste

No GTM Preview, abra a página.

Depois abra GA4 → DebugView.

Resultado esperado:

```txt
1 page_view por carregamento normal de página.
```

---

# PASSO 5 — CONFIGURAR META PIXEL DENTRO DO GTM

## 5.1 No GTM clique

```txt
Tags
→ New
→ Tag Configuration
→ Custom HTML
```

## 5.2 Cole este bloco inteiro

```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', 'COLE_AQUI_META_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 5.3 Dentro do bloco acima, substitua

```txt
COLE_AQUI_META_PIXEL_ID
```

pelo valor real de:

```txt
META_PIXEL_ID
```

## 5.4 Trigger

Use:

```txt
All Pages
```

ou o trigger equivalente condicionado ao consentimento da operação.

## 5.5 Nome da tag

```txt
META - Pixel Base - PageView
```

## 5.6 Não configure Purchase aqui

Não crie:

```js
fbq('track', 'Purchase')
```

no clique do botão da LP.

A compra deve ser confirmada no checkout / Hotmart.

## 5.7 Teste

Abra:

```txt
Meta Events Manager
```

Use a área de eventos de teste e abra a LP.

Resultado esperado:

```txt
PageView aparece uma única vez por carregamento normal.
```

---

# PASSO 6 — CONFIGURAR GOOGLE ADS

## 6.1 No GTM clique

```txt
Tags
→ New
→ Tag Configuration
→ Google tag
```

## 6.2 No Tag ID cole

```txt
GOOGLE_ADS_ID
```

Formato esperado:

```txt
AW-XXXXXXXXX
```

## 6.3 Trigger

```txt
All Pages
```

ou o trigger condicionado ao consentimento da operação.

## 6.4 Salve como

```txt
GOOGLE ADS - Google Tag - All Pages
```

## 6.5 Sobre Conversion Label

Se a operação forneceu:

```txt
GOOGLE_ADS_CONVERSION_LABEL
```

não associe automaticamente esse label ao clique do CTA como se fosse compra.

Se o label for de compra, configure a conversão no fluxo Hotmart / página de confirmação / integração de venda.

Se o label for explicitamente de clique ou início de checkout, use o evento correspondente definido no passo 8.

## 6.6 Regra simples

```txt
GA4 = comportamento/analytics
Google Ads = mídia/conversão
Purchase = só quando houver compra real
```

---

# PASSO 7 — INSTALAR UTM AUTOMÁTICA NO CHECKOUT

O objetivo é fazer isto:

```txt
Anúncio
↓
LP com ?utm_source=meta&utm_campaign=teste
↓
Checkout Hotmart recebe as mesmas UTMs
```

## 7.1 Abra

```txt
src/components/LeadCaptureModal.astro
```

## 7.2 Procure a função

```ts
const initializeLeadModal = () => {
```

## 7.3 Dentro dessa função, depois da validação inicial dos elementos, procure esta linha

```ts
if (!dialog || !form || !closeButton || !nameInput || !emailInput || !phoneInput || !nameError || !emailError || !phoneError || !formStatus) return;
```

## 7.4 Imediatamente abaixo dela, cole

```ts
const allowedUtmParams = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

const applyUtmToCheckoutLinks = () => {
  try {
    const currentUrl = new URL(window.location.href);

    document
      .querySelectorAll<HTMLAnchorElement>('[data-lead-capture="true"]')
      .forEach((link) => {
        const checkoutUrl = new URL(link.href);

        allowedUtmParams.forEach((key) => {
          const value = currentUrl.searchParams.get(key);
          if (value) checkoutUrl.searchParams.set(key, value);
        });

        link.href = checkoutUrl.toString();
      });
  } catch (error) {
    console.warn('Não foi possível propagar UTMs para o checkout.', error);
  }
};

applyUtmToCheckoutLinks();
```

## 7.5 Não faça concatenação manual

Não faça isto:

```ts
checkout + '?utm_source=' + source + '&utm_campaign=' + campaign
```

O bloco acima já usa `URL` e `URLSearchParams`.

## 7.6 Teste

Abra localmente uma URL parecida com:

```txt
http://localhost:4321/apneia-na-pratica-lp/?utm_source=meta&utm_medium=cpc&utm_campaign=teste
```

Clique no CTA, envie o modal e observe a URL do checkout.

Resultado esperado:

```txt
utm_source=meta
utm_medium=cpc
utm_campaign=teste
```

devem aparecer na URL do checkout.

---

# PASSO 8 — DISPARAR `cta_checkout_click` NO DATALAYER

## 8.1 Ainda em

```txt
src/components/LeadCaptureModal.astro
```

## 8.2 Procure este bloco

```ts
document.querySelectorAll<HTMLAnchorElement>('[data-lead-capture="true"]').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    openModal(trigger);
  });
});
```

## 8.3 Substitua o bloco inteiro por

```ts
document.querySelectorAll<HTMLAnchorElement>('[data-lead-capture="true"]').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_checkout_click',
      cta_location: 'offer',
      cta_text: trigger.textContent?.trim() || 'QUERO ACESSAR AGORA',
      page_path: window.location.pathname,
    });

    openModal(trigger);
  });
});
```

## 8.4 Se o TypeScript reclamar que `dataLayer` não existe

Logo antes do bloco, cole:

```ts
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
```

Se o projeto já possuir essa declaração global em outro arquivo, não duplique.

## 8.5 O que este evento pode enviar

Pode enviar:

```txt
cta_location
cta_text
page_path
```

## 8.6 O que NÃO pode enviar

Não envie:

```txt
nome
e-mail
WhatsApp
telefone
dados clínicos
```

para `dataLayer`, GA4, Meta ou Google Ads.

---

# PASSO 9 — CRIAR O EVENTO `cta_checkout_click` NO GA4 VIA GTM

## 9.1 No GTM clique

```txt
Tags
→ New
→ Tag Configuration
→ Google Analytics: GA4 Event
```

Se a interface atual do GTM mostrar o fluxo novo de Google Tag + Event, use a opção equivalente de evento GA4 vinculada à Google Tag criada no passo 4.

## 9.2 Nome do evento

```txt
cta_checkout_click
```

## 9.3 Parâmetros

Adicione:

```txt
cta_location = {{DLV - cta_location}}
cta_text = {{DLV - cta_text}}
page_path = {{DLV - page_path}}
```

## 9.4 Antes, crie as Data Layer Variables

No GTM:

```txt
Variables
→ New
→ Data Layer Variable
```

Crie três:

```txt
DLV - cta_location
Data Layer Variable Name: cta_location
```

```txt
DLV - cta_text
Data Layer Variable Name: cta_text
```

```txt
DLV - page_path
Data Layer Variable Name: page_path
```

## 9.5 Trigger

Crie:

```txt
Triggers
→ New
→ Custom Event
```

Event name:

```txt
cta_checkout_click
```

Nome do trigger:

```txt
CE - cta_checkout_click
```

Associe esse trigger à tag de evento GA4.

## 9.6 Teste

GTM Preview → clique no CTA.

Resultado esperado:

```txt
1 evento cta_checkout_click
```

com:

```txt
cta_location=offer
cta_text=...
page_path=...
```

---

# PASSO 10 — META: MAPEAR CLIQUE DE CHECKOUT, SE A OPERAÇÃO QUISER

Este passo é opcional.

Se a operação quiser considerar o clique de saída como `InitiateCheckout`:

## 10.1 GTM → Tags → New → Custom HTML

Cole:

```html
<script>
  fbq('track', 'InitiateCheckout');
</script>
```

## 10.2 Trigger

Use:

```txt
CE - cta_checkout_click
```

## 10.3 Nome

```txt
META - InitiateCheckout - CTA Checkout Click
```

## 10.4 Importante

Se a operação preferir considerar `InitiateCheckout` somente quando o usuário chegar de fato ao checkout Hotmart, **não crie esta tag na LP**. Deixe o evento para a Hotmart.

Em qualquer cenário:

```txt
NÃO disparar Purchase no clique.
```

---

# PASSO 11 — LEAD DO MODAL: ENVIAR PARA CRM/WEBHOOK

Este passo só deve ser executado se existir um endpoint real e seguro fornecido pela operação.

Se não existir:

```txt
LEAD_WEBHOOK_URL=NAO_USADO
```

E pule este passo.

## 11.1 Abra

```txt
src/components/LeadCaptureModal.astro
```

## 11.2 No final do `<script>`, antes de `</script>`, cole

```ts
document.addEventListener('apneia:lead-submit', async (event) => {
  const leadEvent = event as CustomEvent<{
    lead: {
      name: string;
      email: string;
      whatsapp: string;
    };
    continueToCheckout: () => void;
  }>;

  const webhookUrl = 'COLE_AQUI_LEAD_WEBHOOK_URL';

  if (!webhookUrl || webhookUrl === 'NAO_USADO') return;

  leadEvent.preventDefault();

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadEvent.detail.lead),
    });

    if (!response.ok) {
      throw new Error(`Webhook respondeu ${response.status}`);
    }
  } catch (error) {
    console.error('Falha ao enviar lead para o webhook.', error);
  } finally {
    leadEvent.detail.continueToCheckout();
  }
});
```

## 11.3 Substitua

```txt
COLE_AQUI_LEAD_WEBHOOK_URL
```

pelo endpoint real.

## 11.4 Atenção

Este endpoint precisa aceitar requisição do navegador e estar preparado para receber:

```json
{
  "name": "Nome da pessoa",
  "email": "email@exemplo.com",
  "whatsapp": "14999999999"
}
```

Não use GA4, Meta Pixel ou GTM como armazenamento de lead.

---

# PASSO 12 — INSTALAR LINKS REAIS DE PRIVACIDADE, TERMOS E SUPORTE

## 12.1 Abra

```txt
src/components/Footer.astro
```

## 12.2 No topo do arquivo, procure

```astro
---
const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/');
---
```

## 12.3 Substitua por

```astro
---
import { siteConfig } from '../config/site';

const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/');

const supportHref =
  siteConfig.supportPageUrl && siteConfig.supportPageUrl !== 'NAO_USADO'
    ? siteConfig.supportPageUrl
    : siteConfig.supportEmail && siteConfig.supportEmail !== 'NAO_USADO'
      ? `mailto:${siteConfig.supportEmail}`
      : siteConfig.supportWhatsapp && siteConfig.supportWhatsapp !== 'NAO_USADO'
        ? `https://wa.me/${siteConfig.supportWhatsapp.replace(/\D/g, '')}`
        : '';
---
```

## 12.4 Agora procure este bloco

```astro
<nav class="footer-links reveal reveal-soft delay-3" aria-label="Links institucionais em definição">
  <span>Política de privacidade</span>
  <span>Termos de uso</span>
  <span>Suporte</span>
</nav>
```

## 12.5 Substitua pelo bloco abaixo

```astro
<nav class="footer-links reveal reveal-soft delay-3" aria-label="Links institucionais">
  <a href={siteConfig.privacyUrl}>Política de privacidade</a>
  <a href={siteConfig.termsUrl}>Termos de uso</a>
  {supportHref && <a href={supportHref}>Suporte</a>}
</nav>
```

## 12.6 Como o CSS atual estiliza `span`, acrescente também estas regras

Procure:

```css
.footer-links span {
```

Troque por:

```css
.footer-links a {
```

Depois procure:

```css
.footer-links span + span::before {
```

Troque por:

```css
.footer-links a + a::before {
```

E dentro do bloco `.footer-links a`, adicione:

```css
color: inherit;
text-decoration: none;
```

## 12.7 Teste

Clique em:

```txt
Política de privacidade
Termos de uso
Suporte
```

Resultado esperado:

```txt
Nenhum link abre #.
Nenhum link abre docs internos do GitHub.
Todos apontam para URLs/canais reais.
```

---

# PASSO 13 — CONFIGURAR HOTMART

Este passo é dentro da Hotmart, não no Astro.

Na área de ferramentas/rastreamento do produto/checkout, configure somente integrações reais adotadas pela operação.

Confirme:

```txt
[ ] GA4
[ ] Meta Pixel
[ ] Google Ads
[ ] eventos de checkout
[ ] evento de venda/purchase
[ ] integrações Web/API, se usadas
```

## Regra do funil

Na Landing Page:

```txt
page_view
cta_checkout_click
```

No checkout/Hotmart:

```txt
checkout / begin_checkout
purchase
```

## Não faça

```txt
❌ Purchase no clique da LP
❌ Purchase via GTM da LP + Purchase Hotmart sem deduplicação
❌ dois pixels Meta iguais disparando Purchase para a mesma venda
```

---

# PASSO 14 — CONSENTIMENTO / COOKIES

Se Google/Meta/Ads estiverem ativos, a estratégia de consentimento precisa estar definida pela operação.

Se existir CMP/banner de cookies:

```txt
O banner PRECISA controlar as tags.
```

Não basta mostrar um botão "Aceitar" enquanto os pixels já carregaram antes.

Para Google, os estados normalmente relevantes são:

```txt
analytics_storage
ad_storage
ad_user_data
ad_personalization
```

No GTM, condicione as tags aos estados de consentimento adotados pela operação.

Se ainda não existe uma decisão jurídica/técnica sobre consentimento:

```txt
NÃO marque o projeto como liberado para tráfego comercial.
```

---

# PASSO 15 — TESTE COPY/PASTE: UM POR UM

Execute exatamente nesta ordem.

## 15.1 Build

```bash
npm install
npm run build
```

Esperado:

```txt
build termina sem erro
```

## 15.2 Preview

```bash
npm run preview
```

Abra a URL mostrada no terminal.

## 15.3 GTM

Abra GTM Preview / Tag Assistant.

Esperado:

```txt
container conectado
1 carregamento do GTM
```

## 15.4 GA4

Abra GA4 DebugView.

Recarregue a LP uma vez.

Esperado:

```txt
1 page_view
```

Clique no CTA uma vez.

Esperado:

```txt
1 cta_checkout_click
```

## 15.5 Meta

Abra Meta Events Manager → Test Events.

Recarregue a LP.

Esperado:

```txt
1 PageView
```

Clique no CTA.

Se o passo 10 foi adotado:

```txt
1 InitiateCheckout
```

Se o passo 10 NÃO foi adotado:

```txt
nenhum InitiateCheckout na LP
```

## 15.6 UTM

Abra:

```txt
SUA_URL?utm_source=meta&utm_medium=cpc&utm_campaign=teste&utm_content=criativo01
```

Clique no CTA, envie o modal e confira a URL da Hotmart.

Esperado:

```txt
utm_source=meta
utm_medium=cpc
utm_campaign=teste
utm_content=criativo01
```

## 15.7 Purchase

Faça uma compra de teste real no checkout.

Esperado:

```txt
Purchase aparece somente após a compra confirmada.
```

Não deve aparecer Purchase apenas por clicar no CTA.

## 15.8 Footer

Clique nos três links.

Esperado:

```txt
Política abre
Termos abre
Suporte abre
```

## 15.9 Lead

Se webhook/CRM estiver configurado:

Preencha o modal.

Esperado:

```txt
lead chega ao destino
checkout abre depois
```

Se webhook/CRM NÃO estiver configurado:

Esperado:

```txt
modal valida os campos
checkout abre normalmente
```

---

# PASSO 16 — CHECKLIST FINAL. NÃO PULE NENHUM

Copie esta lista para a entrega e marque item por item:

```txt
[ ] SITE_URL real configurada
[ ] CHECKOUT_URL Hotmart real configurada
[ ] src/config/site.ts criado
[ ] Offer.astro usa siteConfig.checkoutUrl
[ ] nenhum CTA de compra usa https://pay.hotmart.com genérico

[ ] GTM instalado em Layout.astro
[ ] GTM não está duplicado
[ ] Tag Assistant conecta

[ ] GA4 configurado pelo GTM
[ ] GA4 recebe 1 page_view
[ ] GA4 não duplica page_view

[ ] Meta Pixel configurado
[ ] Meta recebe PageView
[ ] InitiateCheckout definido conforme estratégia
[ ] Purchase NÃO dispara no clique

[ ] Google Ads base tag configurada
[ ] Conversion Label usado somente na conversão correta

[ ] cta_checkout_click configurado
[ ] cta_checkout_click dispara 1 vez por clique
[ ] dataLayer NÃO contém nome
[ ] dataLayer NÃO contém e-mail
[ ] dataLayer NÃO contém WhatsApp

[ ] UTMs são preservadas até a Hotmart
[ ] URL com UTM funciona
[ ] URL sem UTM funciona

[ ] Hotmart configurada com integrações reais
[ ] Purchase testado com compra real
[ ] Purchase não está duplicado

[ ] Política de Privacidade funciona
[ ] Termos funcionam
[ ] Suporte funciona

[ ] Lead modal funciona
[ ] CRM/webhook funciona, se adotado

[ ] Consentimento aceito testado
[ ] Consentimento negado testado

[ ] Desktop testado
[ ] Mobile testado
[ ] Navegação anônima testada
[ ] DevTools Network revisado

[ ] npm run build passa
[ ] produção só será liberada depois de todos os itens obrigatórios acima
```

---

# PASSO 17 — RESPOSTA QUE A PESSOA DO DEPLOY DEVE ENTREGAR NO FINAL

Copie e preencha:

```txt
DEPLOY / TRACKING — RELATÓRIO FINAL

SITE_URL:
CHECKOUT_URL:

GTM_ID:
Status GTM:

GA4_ID:
Status GA4:

META_PIXEL_ID:
Status Meta:

GOOGLE_ADS_ID:
Status Google Ads:

Eventos da LP instalados:
- page_view:
- cta_checkout_click:
- support_click:

Eventos deixados para Hotmart:
- begin_checkout:
- purchase:

UTM chegando ao checkout: SIM / NÃO

LeadCaptureModal integrado a CRM/Webhook: SIM / NÃO / NÃO UTILIZADO

Política de Privacidade: OK / PENDENTE
Termos: OK / PENDENTE
Suporte: OK / PENDENTE

Consentimento/CMP:

Teste GTM Preview: OK / ERRO
Teste GA4 DebugView: OK / ERRO
Teste Meta Events Manager: OK / ERRO
Teste checkout: OK / ERRO
Teste compra real: OK / ERRO
Teste mobile: OK / ERRO

Pendências restantes:
- 
```

---

# NÃO INVENTE. NÃO IMPROVISE. NÃO DUPLIQUE.

Resumo de 10 segundos:

```txt
1. preenche site.ts
2. liga checkout no Offer.astro
3. instala GTM no Layout.astro
4. coloca GA4 dentro do GTM
5. coloca Meta dentro do GTM
6. coloca Google Ads dentro do GTM
7. propaga UTM
8. cria cta_checkout_click
9. configura Hotmart para checkout/purchase
10. liga legal/suporte no Footer
11. testa tudo
12. só então libera tráfego
```

Documentação técnica completa, caso precise aprofundar:

```txt
docs/engineering/PUBLICATION-CONFIG.md
docs/engineering/TRACKING-ANALYTICS.md
docs/engineering/CHECKOUT-SUPPORT.md
docs/engineering/LEGAL-PRIVACY-TERMS.md
```
