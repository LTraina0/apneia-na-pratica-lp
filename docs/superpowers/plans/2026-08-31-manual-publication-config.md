# Manual Publication Configuration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar uma camada manual, explícita e auditável para checkout, tracking, legal e suporte sem usar `.env`, deixando a implementação previsível para agentes de IA.

**Architecture:** `src/config/publication.ts` será a única fonte manual de valores. Integrações ficam isoladas em `src/integrations/`. Componentes apenas consomem essas APIs. Placeholders `COLE_AQUI_*` permanecem visíveis e uma validação bloqueia somente quando `publication.release.ready` for marcado como `true`.

**Tech Stack:** Astro 5, TypeScript, JavaScript browser APIs, Google Tag Manager.

**Spec:** decisão aprovada em chat em 2026-08-31.

## Global Constraints

- Não usar `.env` para estes valores.
- Não hardcodar IDs/URLs em componentes.
- Não disparar `Purchase` no clique do CTA.
- Não enviar nome, e-mail ou WhatsApp para `dataLayer`, GA4, Meta ou Google Ads.
- Manter o fluxo visual da LP intacto.
- Manter placeholders explícitos até receber dados reais.

---

### Task 1: Fonte manual de publicação

**Files:**
- Create: `src/config/publication.ts`

- [ ] Criar objeto `publication` com checkout, tracking, legal, suporte e release gate.
- [ ] Criar helpers de placeholder e `assertPublicationReady()`.

### Task 2: Integrações isoladas

**Files:**
- Create: `src/integrations/Gtm.astro`
- Create: `src/integrations/checkout.ts`
- Create: `src/integrations/tracking.ts`

- [ ] Encapsular snippet GTM.
- [ ] Encapsular propagação whitelist de UTMs.
- [ ] Encapsular `dataLayer.push` sem PII.

### Task 3: Conectar componentes

**Files:**
- Modify: `src/layouts/Layout.astro`
- Modify: `src/components/Offer.astro`
- Modify: `src/components/LeadCaptureModal.astro`
- Modify: `src/components/Footer.astro`

- [ ] Layout renderiza `Gtm.astro` e executa release gate.
- [ ] Offer usa checkout central.
- [ ] Modal aplica UTM e evento `cta_checkout_click`.
- [ ] Footer usa legal/suporte centralizados.

### Task 4: Manual operacional

**Files:**
- Modify: `MANUAL-DE-INSTALACAO-MASTIGADO.md`

- [ ] Reescrever para orientar edição prioritária de `src/config/publication.ts`.
- [ ] Explicar claramente o que a IA pode e não pode alterar.
- [ ] Manter checklist de QA e integrações externas GTM/GA4/Meta/Ads/Hotmart.

### Task 5: Verificação

- [ ] Inspecionar diff da branch.
- [ ] Verificar que não existem IDs reais ou PII.
- [ ] Confirmar que placeholders permanecem explícitos.
- [ ] Confirmar que `main` não foi alterado.
