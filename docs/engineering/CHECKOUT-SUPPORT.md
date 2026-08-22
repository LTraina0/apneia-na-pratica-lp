# CHECKOUT + SUPPORT — Especificação de integração

## Objetivo

Garantir que todos os caminhos de conversão da landing page apontem para o checkout correto da Hotmart e que o suporte use apenas canais oficiais.

---

## 1. Checkout

A URL final será definida em:

```txt
PUBLICATION-CONFIG.md → CHECKOUT_URL
```

Todos os CTAs de compra devem utilizar essa única configuração.

### CTAs contemplados

No mínimo:

- CTA do Hero;
- CTA após identificação;
- CTA após comparação;
- CTA do bloco de oferta;
- CTA final.

Não criar destinos diferentes sem motivo comercial explícito.

---

## 2. Comportamento do clique

Preferência para checkout:

- abrir na mesma aba;
- preservar comportamento normal do navegador;
- não usar popup;
- não usar redirecionamento enganoso;
- não impedir `Ctrl/Cmd + click`.

Se, por decisão comercial, o checkout abrir em nova aba:

```html
target="_blank"
rel="noopener noreferrer"
```

---

## 3. UTMs e atribuição

A Hotmart aceita parâmetros UTM para rastreamento de campanhas.

Se a landing page receber UTMs e for necessário propagá-las para o checkout, preservar apenas parâmetros de atribuição aprovados, por exemplo:

```txt
utm_source
utm_medium
utm_campaign
utm_term
utm_content
```

Também avaliar parâmetros específicos usados pela operação da Hotmart, somente após confirmação.

### Implementação

Como a página é estática, a propagação dinâmica de query params pode justificar um JavaScript pequeno e isolado.

Esse script deve:

1. ler apenas os parâmetros explicitamente permitidos;
2. usar `URL` e `URLSearchParams`;
3. acrescentá-los à `CHECKOUT_URL`;
4. respeitar parâmetros que já existam no checkout;
5. atualizar todos os CTAs de compra;
6. não coletar nem armazenar dados pessoais;
7. falhar de forma segura: se houver erro, usar a `CHECKOUT_URL` original.

Não concatenar query string manualmente com `?` e `&`.

---

## 4. Evento de clique

Registrar um evento de intenção antes da saída, se analytics estiver habilitado.

Nome recomendado:

```txt
cta_checkout_click
```

Parâmetros úteis:

```txt
cta_location
cta_text
page_path
```

Exemplos de `cta_location`:

```txt
hero
identification
comparison
offer
final
```

O evento representa clique/intenção, não compra.

Nunca registrar `purchase` na landing page só porque o usuário clicou no CTA.

A compra deve ser confirmada pelo checkout/Hotmart ou por uma etapa de confirmação confiável.

---

## 5. Integração com Hotmart

A configuração de conversões da Hotmart deve ser tratada separadamente da landing page.

Quando os IDs existirem, revisar na Hotmart:

- GA4;
- Meta Pixel;
- Google Ads, se usado;
- eventos de checkout;
- eventos de venda;
- opções Web/API disponíveis.

Evitar disparar `Purchase` simultaneamente de múltiplas origens sem estratégia de deduplicação.

---

## 6. Suporte

Fonte:

```txt
PUBLICATION-CONFIG.md
```

O bloco “Precisa de ajuda?” deve apontar apenas para canal confirmado.

### E-mail

```html
<a href="mailto:SUPPORT_EMAIL">...</a>
```

### WhatsApp

Usar número oficial e URL validada.

Não inserir mensagem com dados sensíveis.

### Página de suporte

Preferível quando existir uma central com orientações de:

- acesso;
- pagamento;
- reembolso;
- dificuldades técnicas.

---

## 7. QA de conversão

Antes da publicação:

- clicar em todos os CTAs;
- confirmar que todos chegam ao mesmo checkout aprovado;
- testar URL com e sem UTM;
- testar query string quando checkout já contém parâmetros;
- testar mobile;
- testar clique com teclado;
- confirmar que nenhum CTA ainda aponta para placeholder;
- confirmar canal de suporte;
- verificar que `Purchase` não dispara no clique;
- validar atribuição na Hotmart e nas ferramentas escolhidas.
