# Manual de Deploy, Tracking e Checkout — Apneia na Prática

> Guia operacional direto para publicação comercial da Landing Page.
>
> Este arquivo existe para responder à pergunta: **“qual dado eu recebo, onde eu coloco e o que preciso testar?”**
>
> A documentação técnica completa continua em `docs/engineering/`, mas para o deploy e instalação de rastreamento siga este arquivo.

---

## 1. Objetivo

Antes de liberar tráfego comercial, a pessoa responsável pelo deploy deve configurar:

- URL final da Landing Page;
- checkout final da Hotmart;
- Google Tag Manager (GTM);
- Google Analytics 4 (GA4);
- Meta Pixel;
- Google Ads / Conversion Tracking;
- integrações de conversão da Hotmart;
- propagação de UTMs da LP até o checkout;
- Política de Privacidade e Termos;
- canal de suporte;
- consentimento/cookies compatível com os trackers ativados;
- QA final de tracking e conversão.

Não inventar valores. Se algum ID, URL ou dado comercial ainda não existir, ele continua pendente.

---

# 2. Resumo: pegue X e coloque em Y

| Você recebe | Exemplo de formato | Onde colocar / configurar |
|---|---|---|
| URL final da LP | `https://dominio.com/` | `src/config/site.ts` → `siteUrl` e configuração de domínio/deploy |
| Checkout Hotmart | `https://pay.hotmart.com/...` | `src/config/site.ts` → `checkoutUrl` |
| GTM | `GTM-XXXXXXX` | `src/config/site.ts` → `gtmId`; carregar globalmente em `src/layouts/Layout.astro` |
| GA4 | `G-XXXXXXXXXX` | `src/config/site.ts` → `ga4Id`; configurar dentro do GTM |
| Meta Pixel | ID numérico | `src/config/site.ts` → `metaPixelId`; configurar dentro do GTM |
| Google Ads | `AW-XXXXXXXXX` | `src/config/site.ts` → `googleAdsId`; configurar dentro do GTM |
| Conversion Label do Google Ads | valor fornecido pelo Google Ads | configurar na respectiva conversão dentro do GTM |
| Hotmart Analytics / integrações | código/IDs fornecidos pela operação | `src/config/site.ts` quando aplicável + configurações nativas da Hotmart |
| Política de Privacidade | URL publicada | `src/config/site.ts` → `privacyUrl` e `Footer.astro` |
| Termos de Uso | URL publicada | `src/config/site.ts` → `termsUrl` e `Footer.astro` |
| E-mail de suporte | `suporte@...` | `src/config/site.ts` → `supportEmail` |
| WhatsApp de suporte | número internacional | `src/config/site.ts` → `supportWhatsapp` |
| Página de suporte | URL publicada | `src/config/site.ts` → `supportPageUrl` |
| CMP / consentimento | ferramenta e estratégia adotadas | GTM + `Layout.astro`, conforme arquitetura escolhida |

---

# 3. Primeiro passo obrigatório: criar a configuração central

Criar o arquivo:

```txt
src/config/site.ts
```

Estrutura recomendada:

```ts
export const siteConfig = {
  siteUrl: '',
  checkoutUrl: '',

  privacyUrl: '',
  termsUrl: '',

  supportEmail: '',
  supportWhatsapp: '',
  supportPageUrl: '',

  gtmId: '',
  ga4Id: '',
  metaPixelId: '',
  googleAdsId: '',
  hotmartAnalyticsCode: '',

  consentPlatform: '',
  consentMode: '',
};
```

## Regra

A página deve consumir esses valores a partir de uma única fonte.

Não espalhar pelo projeto:

```astro
href="https://pay.hotmart.com/..."
```

ou IDs como:

```txt
GTM-XXXXXXX
G-XXXXXXXXXX
AW-XXXXXXXXX
```

em vários componentes.

---

# 4. Checkout Hotmart

## Dado necessário

Receber a URL definitiva do checkout da Hotmart.

Exemplo:

```txt
https://pay.hotmart.com/XXXXXXXX
```

## Onde colocar

```txt
src/config/site.ts → checkoutUrl
```

## Onde conectar

O componente de compra principal está em:

```txt
src/components/Offer.astro
```

No código atual, o CTA da oferta ainda utiliza a URL genérica:

```astro
href="https://pay.hotmart.com"
```

Substituir por uma referência à configuração central, por exemplo:

```astro
---
import { siteConfig } from '../config/site';
---

<CtaBlock
  ...
  href={siteConfig.checkoutUrl}
/>
```

## Regra para os demais CTAs

O componente mestre dos botões é:

```txt
src/components/CtaBlock.astro
```

Atualmente alguns CTAs intermediários levam para `#oferta`. Isso pode ser mantido caso o fluxo comercial seja:

```txt
CTA intermediário → seção de oferta → modal → checkout
```

Se a decisão comercial for transformar algum CTA em compra direta, ele deve usar a mesma `checkoutUrl` centralizada.

---

# 5. Google Tag Manager — GTM

## Dado necessário

```txt
GTM-XXXXXXX
```

## Onde colocar

```txt
src/config/site.ts → gtmId
```

## Onde carregar na página

Arquivo global:

```txt
src/layouts/Layout.astro
```

Instalar o snippet oficial do GTM:

1. parte `<script>` dentro de `<head>`;
2. parte `<noscript>` imediatamente após a abertura de `<body>`.

Não instalar o GTM dentro de `Hero.astro`, `Offer.astro`, `Footer.astro` ou outros componentes isolados.

## Arquitetura adotada neste manual

Usar o **GTM como camada principal de gerenciamento de tags**:

```txt
Landing Page
    ↓
   GTM
 ┌──┼─────────┐
 ↓  ↓         ↓
GA4 Meta   Google Ads
```

Assim, alterações futuras de tracking podem ser feitas no GTM sem espalhar scripts pela aplicação.

---

# 6. GA4

## Dado necessário

```txt
G-XXXXXXXXXX
```

## Onde colocar

```txt
src/config/site.ts → ga4Id
```

## Onde instalar

Configurar uma Google Tag / GA4 dentro do GTM usando o Measurement ID real.

### Não fazer

Não instalar o mesmo GA4 diretamente no HTML e também pelo GTM sem uma decisão explícita.

Isso pode duplicar `page_view` e outros eventos.

---

# 7. Meta Pixel

## Dado necessário

ID real do Pixel da Meta.

Exemplo conceitual:

```txt
123456789012345
```

## Onde colocar

```txt
src/config/site.ts → metaPixelId
```

## Onde instalar

Configurar pelo GTM.

Não espalhar chamadas `fbq()` pelos componentes Astro quando o GTM for a arquitetura escolhida.

## Eventos

Na Landing Page podem existir eventos como:

```txt
PageView
ViewContent
InitiateCheckout
```

O mapeamento final deve seguir a estratégia de mídia.

### Regra crítica

**Nunca disparar `Purchase` apenas porque o usuário clicou no CTA.**

`Purchase` deve representar uma compra confirmada.

---

# 8. Google Ads / Conversion Tracking

O chamado informalmente de “pixel do Google” deve ser tratado como a infraestrutura de tag/conversão do Google Ads.

## Dados necessários

Normalmente:

```txt
AW-XXXXXXXXX
```

E, dependendo da conversão:

```txt
Conversion Label
```

## Onde colocar

```txt
src/config/site.ts → googleAdsId
```

## Onde instalar

Configurar no GTM.

Não confundir:

```txt
GA4 = analytics e comportamento
Google Ads = mídia e conversões de campanha
```

---

# 9. Eventos mínimos da Landing Page

Taxonomia mínima recomendada:

```txt
page_view
cta_checkout_click
support_click
```

Opcional:

```txt
legal_link_click
```

## Evento de CTA

Ao clicar em um CTA que efetivamente leva ao checkout, enviar algo semelhante a:

```js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'cta_checkout_click',
  cta_location: 'offer',
  cta_text: 'QUERO ACESSAR AGORA',
  page_path: window.location.pathname,
});
```

Valores possíveis de `cta_location`:

```txt
hero
identification
comparison
offer
final
```

## Não enviar dados pessoais

Nunca enviar ao `dataLayer`, GA4, Meta ou Google Ads:

- nome;
- e-mail;
- WhatsApp;
- informação clínica;
- qualquer outro dado pessoal desnecessário.

---

# 10. Modal de Lead

Arquivo:

```txt
src/components/LeadCaptureModal.astro
```

O modal atual já captura:

```txt
name
email
whatsapp
```

E dispara o evento interno:

```txt
apneia:lead-submit
```

O evento também fornece a função:

```txt
continueToCheckout
```

## Importante

Hoje o modal **não persiste o lead sozinho em CRM, banco, planilha ou webhook**.

Se a operação quiser armazenar esses leads, deve conectar um listener ao evento `apneia:lead-submit` e enviar os dados para o destino definido pela operação.

Fluxo sugerido:

```txt
Usuário preenche modal
        ↓
apneia:lead-submit
        ↓
CRM / webhook / automação
        ↓
continueToCheckout()
        ↓
Hotmart
```

Não usar GTM/GA4/Meta como banco de dados de leads.

---

# 11. UTMs e atribuição

Preservar, quando presentes:

```txt
utm_source
utm_medium
utm_campaign
utm_term
utm_content
```

Fluxo esperado:

```txt
Anúncio
  ↓
Landing Page
?utm_source=meta&utm_campaign=...
  ↓
Checkout Hotmart
?utm_source=meta&utm_campaign=...
```

## Implementação

Criar uma função pequena e isolada que:

1. leia os parâmetros da URL atual;
2. aceite somente as UTMs aprovadas;
3. crie a URL a partir de `siteConfig.checkoutUrl`;
4. use `URL` e `URLSearchParams`;
5. preserve parâmetros que já existam no checkout;
6. retorne a URL final com as UTMs;
7. em caso de erro, utilize a `checkoutUrl` original.

Exemplo conceitual:

```ts
const allowedParams = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

const checkout = new URL(siteConfig.checkoutUrl);
const current = new URL(window.location.href);

allowedParams.forEach((key) => {
  const value = current.searchParams.get(key);
  if (value) checkout.searchParams.set(key, value);
});

const checkoutUrlWithAttribution = checkout.toString();
```

Não concatenar query strings manualmente com `?` e `&`.

---

# 12. Hotmart + eventos de conversão

A Hotmart deve ser configurada separadamente da Landing Page.

Quando os IDs estiverem disponíveis, revisar dentro da própria Hotmart as integrações usadas pela operação:

- GA4;
- Meta Pixel;
- Google Ads;
- eventos de checkout;
- eventos de venda;
- opções Web/API disponíveis.

## Fronteira correta do funil

```txt
LANDING PAGE
PageView
CTA click
      ↓
HOTMART
Checkout / begin_checkout
Purchase confirmado
```

A LP sabe com segurança que houve visualização e clique.

A Hotmart é a fonte mais adequada para confirmar checkout e venda.

## Deduplicação

Se uma compra for enviada por mais de uma origem, por exemplo:

```txt
Meta browser pixel
+
Hotmart / API
```

implementar estratégia de deduplicação para não registrar duas compras para uma venda real.

---

# 13. Política de Privacidade, Termos e Suporte

## Dados necessários

```txt
privacyUrl
termsUrl
supportEmail
supportWhatsapp
supportPageUrl
```

## Onde colocar

```txt
src/config/site.ts
```

## Onde conectar

Arquivo:

```txt
src/components/Footer.astro
```

Hoje o Footer contém os textos:

```txt
Política de privacidade
Termos de uso
Suporte
```

como elementos visuais, ainda sem links finais.

Transformar em links reais consumindo a configuração central.

Exemplo conceitual:

```astro
<a href={siteConfig.privacyUrl}>Política de privacidade</a>
<a href={siteConfig.termsUrl}>Termos de uso</a>
```

Para suporte, exibir apenas o canal realmente adotado.

Não publicar `#`, link fictício, e-mail inventado ou WhatsApp de teste.

---

# 14. Consentimento e cookies

Antes de ativar trackers em produção, definir a estratégia de consentimento.

Se existir CMP/banner de cookies, ele precisa controlar efetivamente as tags.

Não fazer:

```txt
Banner aparece
+
GA4 / Meta / Ads carregam tudo antes da escolha
```

Quando Google tags forem utilizadas, preparar implementação compatível com Consent Mode quando aplicável.

Estados relevantes podem incluir:

```txt
analytics_storage
ad_storage
ad_user_data
ad_personalization
```

A decisão jurídica sobre consentimento, base legal e política de privacidade deve vir da operação responsável.

---

# 15. Ordem recomendada de implementação

Executar nesta ordem:

```txt
1. Receber todos os IDs e URLs reais
2. Criar src/config/site.ts
3. Inserir SITE_URL / checkout / legal / suporte
4. Conectar checkout ao Offer.astro
5. Conectar links ao Footer.astro
6. Instalar GTM globalmente em Layout.astro
7. Configurar GA4 no GTM
8. Configurar Meta Pixel no GTM
9. Configurar Google Ads no GTM
10. Implementar eventos da LP
11. Implementar propagação de UTMs
12. Configurar integrações da Hotmart
13. Configurar consentimento/CMP
14. Executar QA completo
15. Somente depois liberar tráfego comercial
```

---

# 16. Checklist final de QA

Antes de considerar a página pronta para campanha:

```txt
[ ] URL final da LP configurada
[ ] Checkout Hotmart definitivo configurado
[ ] Nenhum CTA de compra aponta para URL genérica ou placeholder
[ ] Todos os CTAs relevantes testados
[ ] GTM instalado uma única vez
[ ] GTM Preview / Tag Assistant funcionando
[ ] GA4 recebendo page_view
[ ] GA4 sem page_view duplicado
[ ] Meta Pixel detectado
[ ] Meta Events Manager recebendo eventos esperados
[ ] Google Ads tag detectada
[ ] cta_checkout_click dispara uma única vez
[ ] cta_checkout_click contém somente parâmetros permitidos
[ ] Nenhum dado pessoal aparece no dataLayer
[ ] UTMs chegam corretamente ao checkout
[ ] URLs com UTMs e sem UTMs funcionam
[ ] LeadCaptureModal funciona
[ ] Integração de CRM/webhook funciona, se adotada
[ ] Purchase NÃO dispara no clique do CTA
[ ] Compra de teste confirma Purchase corretamente
[ ] Purchase não está duplicado entre browser/API/Hotmart
[ ] Política de Privacidade abre corretamente
[ ] Termos de Uso abrem corretamente
[ ] Canal de suporte funciona
[ ] Consentimento aceito testado
[ ] Consentimento negado testado
[ ] Navegação anônima testada
[ ] Ad blocker testado
[ ] Desktop testado
[ ] Mobile testado
[ ] DevTools Network revisado
[ ] Performance revisada após ativação dos scripts de terceiros
```

---

# 17. O que NÃO fazer

Não fazer nenhuma das seguintes coisas:

```txt
❌ inventar IDs de tracking
❌ colocar URL de checkout diferente em cada botão
❌ instalar GA4 direto e pelo GTM sem saber que está duplicando
❌ disparar Purchase no clique do CTA
❌ mandar nome/e-mail/WhatsApp para dataLayer ou analytics
❌ concatenar UTMs manualmente com strings
❌ instalar Meta/Google em vários componentes Astro
❌ publicar links legais como #
❌ criar banner de cookies que não controla as tags
❌ liberar tráfego antes do QA
```

---

# 18. Arquivos que a pessoa do deploy realmente precisa conhecer

Para esta etapa, os arquivos principais são:

```txt
README-DEPLOY-TRACKING.md        ← este manual
src/config/site.ts               ← criar / configuração central
src/layouts/Layout.astro         ← GTM e infraestrutura global
src/components/CtaBlock.astro    ← componente mestre de CTA
src/components/Offer.astro       ← checkout final
src/components/LeadCaptureModal.astro ← captura de lead / saída para checkout
src/components/Footer.astro      ← legal + suporte
```

Documentação de referência, caso seja necessário aprofundar:

```txt
docs/engineering/PUBLICATION-CONFIG.md
docs/engineering/TRACKING-ANALYTICS.md
docs/engineering/CHECKOUT-SUPPORT.md
docs/engineering/LEGAL-PRIVACY-TERMS.md
```

---

# 19. Relatório de entrega esperado

Ao concluir, responder com:

```txt
Arquitetura escolhida: GTM como gerenciador principal de tags

SITE_URL:
CHECKOUT_URL:

GTM instalado:
GA4 instalado:
Meta Pixel instalado:
Google Ads instalado:
Hotmart configurada:

Eventos da LP:
Eventos delegados à Hotmart:

Propagação de UTMs:
Integração do LeadCaptureModal:
Estratégia de consentimento:

Política de Privacidade:
Termos:
Suporte:

Testes realizados:
Pendências restantes:
```

---

## Regra final

A página pode estar tecnicamente online e ainda **não estar pronta para publicação comercial**.

Só liberar tráfego depois que checkout, tracking, consentimento, links legais e QA estiverem concluídos e validados.
