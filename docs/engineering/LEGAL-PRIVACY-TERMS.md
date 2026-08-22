# LEGAL + PRIVACY + TERMS — Integração da landing page

> Este arquivo define requisitos técnicos de publicação. Não substitui revisão jurídica e não autoriza o agente a inventar Política de Privacidade ou Termos de Uso.

## 1. Links obrigatórios na interface

A versão de produção deve possuir no rodapé:

- Política de Privacidade;
- Termos de Uso/Termos e Condições;
- canal de suporte.

URLs vêm exclusivamente de `PUBLICATION-CONFIG.md`.

Não publicar links vazios, `#` ou documentos inexistentes.

---

## 2. Política de Privacidade

A política real deve ser coerente com o que o site efetivamente coleta e compartilha.

Antes da publicação, mapear:

- Analytics instalado;
- pixels de mídia;
- Hotmart;
- cookies;
- consentimento;
- dados enviados em formulários, se futuramente existirem;
- suporte;
- logs da hospedagem;
- eventuais processadores/terceiros.

Se a LP não possui formulário, não afirmar que coleta dados por formulário.

Se possui trackers, não afirmar que “não coleta nenhum dado”.

---

## 3. Termos

Os Termos devem refletir a operação real, incluindo, quando aplicável:

- natureza educacional do produto;
- público;
- preço;
- forma de acesso;
- garantia/reembolso;
- limitações apropriadas;
- propriedade intelectual;
- uso permitido do conteúdo;
- suporte;
- legislação aplicável.

Não inventar cláusulas comerciais.

A redação final deve ser validada pelo responsável jurídico/comercial.

---

## 4. Cookies e trackers

Se ferramentas que armazenem/leiam identificadores forem ativadas, revisar a necessidade de:

- banner/CMP;
- preferências granulares;
- registro de consentimento;
- possibilidade de revogação;
- integração com tags.

A estratégia depende das ferramentas e da legislação aplicável.

Não criar banner “decorativo” que não controle os scripts.

---

## 5. LGPD e outras normas

O projeto é direcionado ao mercado brasileiro, portanto a operação deve avaliar a LGPD e demais regras aplicáveis.

O agente de código não decide sozinho:

- base legal;
- prazo de retenção;
- controlador/operador;
- direitos do titular;
- DPO/encarregado;
- transferência internacional.

Esses dados precisam vir da operação/jurídico.

---

## 6. Dados sensíveis

A landing page é sobre um tema de saúde, mas não deve coletar dados clínicos de pacientes.

Nunca criar:

- formulário de sintomas de paciente;
- campo para diagnóstico;
- envio de informação clínica;
- identificação de pacientes;

sem novo briefing, revisão jurídica, segurança e necessidade explícita.

---

## 7. Links externos

Para links externos que abram em nova aba:

```html
rel="noopener noreferrer"
```

Para checkout, preferir mesma aba salvo decisão diferente.

---

## 8. Rodapé de produção

Estrutura mínima:

```txt
Aviso educacional/clínico
Política de Privacidade
Termos de Uso
Suporte
Copyright
```

Preservar o aviso clínico já definido no projeto.

---

## 9. Gate de publicação

Bloquear publicação se:

- Política não existir;
- Termos não existirem;
- links do rodapé forem falsos;
- trackers ativos não forem refletidos na política;
- banner de consentimento for necessário mas não controlar as tags;
- canal de suporte não estiver confirmado.
