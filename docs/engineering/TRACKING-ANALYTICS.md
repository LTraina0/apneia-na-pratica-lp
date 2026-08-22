# TRACKING + ANALYTICS — Apneia na Prática

## Objetivo

Medir o funil sem duplicar eventos, degradar performance ou ignorar privacidade.

A landing page deve continuar funcional mesmo com tracking bloqueado.

---

## 1. Arquitetura de medição

Antes de inserir scripts, escolher UMA arquitetura principal.

### Opção A — Google Tag Manager

Adequada quando haverá:

- GA4;
- Google Ads;
- Meta;
- eventos customizados;
- consentimento centralizado;
- futuras alterações frequentes.

### Opção B — integração direta

Adequada quando a operação for mínima.

Exemplo:

- apenas GA4 direto;
- Meta instalado separadamente;
- Hotmart configurada nas ferramentas nativas.

Não misturar arquiteturas sem documentação.

---

## 2. IDs

Todos os IDs ficam em `PUBLICATION-CONFIG.md`.

Nunca inventar:

```txt
G-XXXXXXXXXX
GTM-XXXXXXX
AW-XXXXXXXXX
123456789012345
```

Se o ID não foi fornecido, não inserir script fictício.

---

## 3. Taxonomia mínima de eventos na LP

### page_view

Pode ser automático pela ferramenta escolhida.

### cta_checkout_click

Disparar quando o usuário clicar em um CTA que leva ao checkout.

Parâmetros:

```json
{
  "cta_location": "hero|identification|comparison|offer|final",
  "cta_text": "texto visível do CTA"
}
```

### support_click

Se existir suporte clicável.

Parâmetros:

```json
{
  "support_channel": "email|whatsapp|page"
}
```

### legal_link_click

Opcional. Não é KPI principal.

Não criar dezenas de eventos irrelevantes.

---

## 4. Funil

Modelo conceitual:

```txt
Landing page view
→ CTA click
→ Hotmart checkout view / begin_checkout
→ Purchase confirmado pela Hotmart
```

A landing page conhece com segurança:

- visualização;
- clique no CTA.

A Hotmart conhece melhor:

- entrada no checkout;
- venda concluída.

Não falsificar a fronteira.

---

## 5. GA4 + Hotmart

Quando GA4 for utilizado:

- usar o mesmo Measurement ID na estratégia de LP/checkout quando fizer sentido para o funil;
- configurar a integração oficial da Hotmart para os eventos suportados;
- verificar `begin_checkout` e `purchase`;
- validar se existe duplicação entre eventos enviados pela Hotmart e eventos configurados manualmente.

`purchase` precisa representar uma compra real.

---

## 6. Meta Pixel + Hotmart

Se Meta for utilizada:

- instalar o Pixel na landing page apenas com o ID real;
- configurar o mesmo ecossistema de medição na Hotmart conforme a estratégia;
- revisar eventos Web/API disponibilizados pela Hotmart;
- planejar deduplicação se browser + API enviarem o mesmo evento;
- nunca disparar `Purchase` no clique do CTA.

Na LP, eventos típicos podem ser:

```txt
PageView
ViewContent
InitiateCheckout
```

Mas o mapeamento exato deve ser decidido antes da implementação.

Se `InitiateCheckout` for usado na LP, documentar que ele representa o clique de saída para checkout; se a operação preferir considerar apenas a chegada efetiva ao checkout, deixar o evento para a Hotmart.

---

## 7. Consentimento

Tracking não deve ignorar a estratégia de consentimento.

Se Google tags forem usadas, preparar implementação compatível com Google Consent Mode quando aplicável.

Estados relevantes podem incluir:

```txt
analytics_storage
ad_storage
ad_user_data
ad_personalization
```

A configuração jurídica e regional deve ser confirmada antes do deploy.

Não assumir consentimento como `granted` apenas para melhorar métricas.

---

## 8. Performance

Scripts de tracking são terceiros e podem afetar Core Web Vitals.

Regras:

- carregar apenas integrações usadas;
- evitar múltiplos containers;
- evitar scripts duplicados;
- não bloquear o render principal;
- revisar Network e Performance após ativação;
- medir antes/depois.

---

## 9. Privacidade

A Política de Privacidade deve refletir os rastreadores realmente usados.

Se Meta, Google ou Hotmart coletarem dados na jornada, isso não pode ser omitido da documentação jurídica.

Não colocar IDs, e-mails de usuários ou dados pessoais em:

- parâmetros de eventos;
- query strings;
- dataLayer;
- logs client-side.

---

## 10. UTM

Preservar:

```txt
utm_source
utm_medium
utm_campaign
utm_term
utm_content
```

quando a operação precisar transportar atribuição até o checkout.

Usar APIs de URL do navegador.

Não concatenar strings de URL manualmente.

---

## 11. Debug

Antes de publicar:

- GA4 DebugView, quando utilizado;
- Tag Assistant, quando utilizado;
- Meta Pixel Helper / Events Manager, quando utilizado;
- DevTools Network;
- navegação anônima;
- teste mobile;
- teste com consentimento aceito;
- teste com consentimento negado;
- teste com ad blocker;
- teste do checkout Hotmart;
- confirmação de que `purchase` só ocorre em compra real.

---

## 12. Relatório final

O agente deve informar:

```txt
Arquitetura escolhida:
IDs instalados:
Eventos da LP:
Eventos delegados à Hotmart:
Estratégia de consentimento:
Propagação de UTMs:
Testes realizados:
Pendências:
```
