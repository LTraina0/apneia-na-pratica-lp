# PUBLICATION CONFIG — Apneia na Prática

> Fonte única de configuração operacional para publicação.
> Não inventar valores. Enquanto um campo estiver como `__PENDENTE__`, ele deve ser tratado como bloqueio de publicação, não como licença para o agente preencher sozinho.

## 1. URLs principais

```txt
SITE_URL=__PENDENTE__
CHECKOUT_URL=__PENDENTE__
PRIVACY_URL=__PENDENTE__
TERMS_URL=__PENDENTE__
```

### Regras

- `SITE_URL` deve ser a URL canônica final da landing page, com HTTPS.
- `CHECKOUT_URL` deve ser a URL definitiva do checkout da Hotmart.
- Todos os CTAs de compra devem derivar de `CHECKOUT_URL`.
- Não espalhar URLs de checkout hardcoded em vários componentes.
- `PRIVACY_URL` e `TERMS_URL` devem aparecer no rodapé e apontar para páginas reais/publicadas.
- Não publicar com `#`, `javascript:void(0)`, URL fictícia ou `__PENDENTE__` nos links legais ou de checkout.

---

## 2. Suporte

Preencher somente o canal realmente adotado.

```txt
SUPPORT_EMAIL=__PENDENTE__
SUPPORT_WHATSAPP=__PENDENTE__
SUPPORT_PAGE_URL=__PENDENTE__
```

### Prioridade sugerida

1. página de suporte, se existir;
2. e-mail oficial;
3. WhatsApp oficial.

A landing page deve exibir apenas canais confirmados.

### Regras

- Nunca inventar e-mail.
- Nunca inventar número de WhatsApp.
- Se o canal de suporte ainda não estiver definido, manter o bloco visual preparado, mas não publicar um link falso.
- Se o WhatsApp for usado, gerar link a partir do número confirmado, em formato internacional.
- Não colocar dados pessoais desnecessários no HTML.

---

## 3. SEO / domínio

```txt
SEO_TITLE=Apneia na Prática | Treinamento para Dentistas
SEO_DESCRIPTION=Aprenda a reconhecer sinais de possível apneia, estruturar perguntas e entender quando a investigação do sono merece avançar. Treinamento para dentistas.
OG_IMAGE_URL=__PENDENTE__
FAVICON_URL=__PENDENTE__
```

Os textos acima são rascunhos técnicos. Revisar antes da publicação final.

Quando `SITE_URL` estiver definido:

```txt
CANONICAL_URL=${SITE_URL}/
ROBOTS_INDEX=true
```

Em ambiente de preview/staging:

```txt
ROBOTS_INDEX=false
```

Nunca indexar staging por acidente.

---

## 4. Analytics e mídia

Preencher apenas integrações realmente usadas.

```txt
GA4_MEASUREMENT_ID=__PENDENTE__
GTM_CONTAINER_ID=__PENDENTE__
GOOGLE_ADS_CONVERSION_ID=__PENDENTE__
META_PIXEL_ID=__PENDENTE__
HOTMART_ANALYTICS_CODE=__PENDENTE__
```

### Regra crítica

Não instalar GA4 direto e, ao mesmo tempo, uma segunda configuração equivalente via GTM sem decisão explícita. Isso pode duplicar pageviews e eventos.

Escolher uma arquitetura de medição e documentá-la.

---

## 5. Consentimento / cookies

```txt
CONSENT_PLATFORM=__PENDENTE__
CONSENT_MODE=__PENDENTE__
```

Opções possíveis dependem da estratégia jurídica e técnica.

Nenhuma ferramenta de tracking deve ser implantada ignorando Política de Privacidade, cookies, consentimento e legislação aplicável.

---

## 6. Dados estruturados

```txt
BUSINESS_NAME=__PENDENTE__
BUSINESS_URL=__PENDENTE__
BUSINESS_LOGO_URL=__PENDENTE__
PROFESSOR_IMAGE_URL=__PENDENTE__
```

Não preencher `Organization`, `Person`, `sameAs`, credenciais, avaliações ou redes sociais sem dados confirmados.

---

## 7. Regra de implementação

Criar uma única fonte de configuração no projeto, por exemplo:

```txt
src/config/site.ts
```

ou equivalente na stack atual.

Os componentes devem consumir essa configuração.

Evitar:

```html
<a href="https://checkout-exemplo...">
```

repetido em vários arquivos.

Preferir uma constante única:

```ts
export const CHECKOUT_URL = "...";
```

---

## 8. Gate de publicação

O deploy de produção não deve ser considerado pronto enquanto estes campos obrigatórios estiverem pendentes:

- `SITE_URL`
- `CHECKOUT_URL`
- `PRIVACY_URL`
- `TERMS_URL`
- pelo menos um canal de suporte confirmado
- favicon
- OG image, se a página for compartilhada em campanhas
- IDs de tracking, somente se a operação decidir utilizá-los
- política de consentimento compatível com os trackers ativados

Em preview, placeholders estruturais são aceitos.
Em produção, placeholders não são aceitos.
