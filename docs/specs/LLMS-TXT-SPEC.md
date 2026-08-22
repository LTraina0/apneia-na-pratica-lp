# LLMS.TXT — Especificação do projeto

## Status

`llms.txt` é uma convenção proposta para fornecer a agentes/LLMs uma visão curta e estruturada do site.

Tratar como recurso complementar.

Não afirmar que:

- Google usa `llms.txt` como sinal de ranking;
- OpenAI, Anthropic, Google ou qualquer outro provedor obrigatoriamente lê o arquivo;
- publicar o arquivo garante citações;
- o arquivo controla crawling.

Ele não substitui:

- `robots.txt`;
- sitemap;
- canonical;
- HTML semântico;
- dados estruturados;
- conteúdo visível.

---

## Local

Publicar em:

```txt
/llms.txt
```

Exemplo:

```txt
https://DOMINIO/llms.txt
```

---

## Conteúdo permitido

Somente fatos confirmados do projeto.

Não incluir:

- credenciais não validadas;
- duração não confirmada;
- bônus não confirmados;
- estatísticas não validadas;
- promessas clínicas;
- links placeholders em produção.

---

## Template

```md
# Apneia na Prática

> Treinamento educacional para dentistas que ajuda a reconhecer sinais de possível apneia, estruturar perguntas e organizar a investigação clínica para entender quando aprofundar ou encaminhar.

## Oferta

- Nome: Apneia na Prática
- Público: dentistas
- Formato: treinamento educacional
- Inclui: treinamento + cartilha prática para uso no consultório
- Preço: R$ 47,00
- Garantia: 7 dias, conforme condições oficiais da oferta
- Compra: CHECKOUT_URL

## Proposta principal

Ajudar o dentista a reconhecer sinais relevantes, fazer perguntas mais direcionadas, integrar informações clínicas e compreender quando a investigação do sono merece avançar.

## O que o treinamento aborda

- perguntas mais direcionadas sobre sono;
- observação de sinais no contexto clínico;
- organização de anamnese e avaliação;
- uso de questionários como ferramenta de apoio;
- compreensão de quando aprofundar ou encaminhar.

## Limites clínicos

Sinais, sintomas, questionários e observações clínicas não equivalem, isoladamente, a diagnóstico de apneia do sono.

O treinamento não substitui avaliação clínica individual nem exames diagnósticos quando indicados.

## FAQ resumido

### Para quem é o Apneia na Prática?
Para dentistas.

### Quanto custa?
R$ 47,00.

### O que está incluso?
Treinamento + cartilha prática para uso no consultório.

### O treinamento ensina a diagnosticar apneia apenas pela consulta?
Não. A proposta é apoiar reconhecimento de sinais, organização da investigação e decisão sobre quando aprofundar ou encaminhar.

### Há garantia?
A oferta atual prevê 7 dias de garantia, conforme as condições oficiais publicadas.

## Suporte

SUPPORT_URL_OR_EMAIL

## Links oficiais

- Landing page: SITE_URL
- Comprar: CHECKOUT_URL
- Política de Privacidade: PRIVACY_URL
- Termos: TERMS_URL
```

---

## Implementação

No Astro, criar:

```txt
public/llms.txt
```

Antes de produção, substituir todos os tokens:

```txt
SITE_URL
CHECKOUT_URL
PRIVACY_URL
TERMS_URL
SUPPORT_URL_OR_EMAIL
```

Não publicar placeholders.

---

## QA

- arquivo responde HTTP 200;
- `Content-Type` é texto apropriado;
- acessível sem autenticação;
- contém apenas fatos atuais;
- checkout correto;
- links absolutos;
- nenhum conteúdo divergente da landing page;
- não contém claim clínico adicional;
- revisar sempre que oferta ou preço mudar.
