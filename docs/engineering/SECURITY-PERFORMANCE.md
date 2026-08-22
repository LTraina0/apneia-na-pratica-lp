# SECURITY + PERFORMANCE — Publicação da landing page

## Objetivo

Fortalecer a landing page estática sem alterar o design e sem adicionar complexidade desnecessária.

---

# PERFORMANCE

## 1. JavaScript

Princípio:

```txt
zero JS por padrão
```

JS só é justificável para:

- tracking realmente utilizado;
- consentimento;
- propagação controlada de UTMs;
- interação que não pode ser feita com HTML/CSS.

Não adicionar bibliotecas para tarefas triviais.

---

## 2. Core Web Vitals

### LCP

- priorizar conteúdo e imagem principal do Hero;
- não aplicar lazy loading à imagem que for o LCP;
- evitar fontes bloqueando render;
- manter HTML inicial leve;
- definir dimensões dos assets.

### CLS

- width/height ou aspect-ratio em imagens;
- reservar espaço para foto do professor;
- não injetar banners tardios deslocando layout;
- fontes com fallback compatível.

### INP

- JS mínimo;
- handlers pequenos;
- scripts de terceiros sob controle;
- não executar tarefas pesadas no main thread.

---

## 3. Fontes

Projeto:

- Rubik principal;
- Arial secundária.

Se Rubik vier de Google Fonts:

- carregar apenas pesos realmente utilizados;
- `font-display: swap`;
- avaliar preconnect;
- evitar múltiplas famílias externas.

Arial não requer download na maioria dos sistemas.

Se possível, considerar self-host de Rubik na etapa de produção, conforme licença e infraestrutura, para reduzir dependência externa.

---

## 4. Imagens

- usar `astro:assets` quando adequado;
- manter SVG/PNG quando necessário;
- gerar WebP/AVIF quando fizer sentido;
- não degradar logo;
- `srcset`/sizes para imagens responsivas quando relevante;
- lazy load abaixo da dobra;
- `fetchpriority="high"` apenas para recurso realmente crítico;
- não abusar de preload.

---

## 5. CSS

- remover estilos mortos;
- evitar duplicação;
- usar tokens;
- evitar CSS framework sem necessidade;
- critical path enxuto;
- não inlinear tudo indiscriminadamente se dificultar cache/manutenção.

---

# SECURITY

## 6. HTTPS

Produção deve usar HTTPS.

Redirecionar HTTP → HTTPS na hospedagem.

Não carregar mixed content.

---

## 7. Content Security Policy

CSP precisa refletir os serviços realmente usados.

Não copiar uma CSP genérica de internet e publicar sem teste.

Fluxo recomendado:

1. mapear todas as origens reais;
2. implementar `Content-Security-Policy-Report-Only`;
3. navegar por toda a LP;
4. testar checkout, analytics e consentimento;
5. corrigir violações legítimas;
6. só então aplicar CSP em enforcement.

Base conceitual para LP simples:

```txt
default-src 'self';
base-uri 'self';
object-src 'none';
frame-ancestors 'none';
img-src 'self' data: https:;
font-src 'self' https:;
style-src 'self' 'unsafe-inline' https:;
script-src 'self' [ORIGENS_REAIS_DE_TRACKING];
connect-src 'self' [ORIGENS_REAIS_DE_ANALYTICS];
form-action 'self' [DESTINOS_REAIS_SE_HOUVER_FORM];
upgrade-insecure-requests;
```

`'unsafe-inline'` deve ser removido/reduzido quando a arquitetura permitir.

Não adivinhar allowlists de terceiros.

---

## 8. Cabeçalhos recomendados

Avaliar na hospedagem:

```http
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Para impedir embedding da LP, preferir CSP:

```txt
frame-ancestors 'none'
```

Também avaliar HSTS após domínio HTTPS estar estável:

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Não ativar `includeSubDomains` se houver subdomínios que ainda dependam de HTTP.

---

## 9. Links externos

Se usar:

```html
target="_blank"
```

também usar:

```html
rel="noopener noreferrer"
```

Checkout preferencialmente na mesma aba.

---

## 10. Formulários

A V1 não deve adicionar formulário sem briefing.

Se futuramente houver:

- validação client-side não substitui validação server-side;
- CSRF quando aplicável;
- rate limit;
- sanitização;
- não enviar dados sensíveis para terceiros desnecessariamente.

---

## 11. Dependências

- manter Astro/dependências atualizados;
- evitar pacotes abandonados;
- não instalar bibliotecas para ícones se SVGs locais bastarem;
- revisar `npm audit` como sinal, não como prova isolada de segurança.

---

## 12. Configuração de servidor/hospedagem

O agente deve entregar instruções específicas depois que o provedor for conhecido.

Possíveis destinos:

```txt
Vercel
Netlify
Cloudflare Pages
Nginx
Apache
outro
```

Não criar configuração específica para um provedor desconhecido.

Enquanto a hospedagem não for definida, entregar:

- headers desejados;
- redirects;
- cache policy;
- HTTPS;
- robots por ambiente;
- custom 404;
- compressão;
- cache de assets versionados.

---

## 13. Cache

Sugestão conceitual:

HTML:

```txt
cache curto / revalidação
```

Assets com hash:

```txt
cache longo + immutable
```

Não aplicar `immutable` a arquivo cujo nome não muda quando o conteúdo muda.

---

## 14. QA de segurança/performance

- Lighthouse mobile;
- DevTools Performance;
- Network waterfall;
- WebPageTest/PageSpeed após domínio;
- CSP Report-Only;
- console sem erros;
- mixed content = zero;
- links externos revisados;
- headers inspecionados;
- scripts de terceiros contabilizados;
- testar LP com JS bloqueado;
- testar com tracker bloqueado;
- testar em conexão móvel simulada.
