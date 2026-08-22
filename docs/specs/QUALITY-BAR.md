# QUALITY BAR — Apneia na Prática

Este rubric é executado após o primeiro build completo e antes do QA binário.

## Regra de decisão
Pontuar cada critério de 1 a 10 com uma justificativa concreta.

- **APPROVE:** média >= 8 e nenhum critério crítico abaixo de 7.
- **CONDITIONAL:** média >= 7,5 e apenas falhas não críticas entre 6–7.
- **REJECT:** média < 7,5 ou qualquer critério crítico < 7.

Critérios críticos estão marcados com **[CRÍTICO]**.

## Critérios

### 1. Clareza da proposta [CRÍTICO]
O visitante entende em poucos segundos:
- o que é;
- para quem é;
- o que aprende;
- quanto custa.

### 2. Fidelidade à copy [CRÍTICO]
Nenhuma promessa, CTA ou entregável foi alterado/inventado.

### 3. Segurança clínica/compliance [CRÍTICO]
A página mantém separação clara entre sinais, investigação e diagnóstico objetivo.

### 4. Hierarquia visual [CRÍTICO]
Cada dobra tem âncora, contexto e metadado claros. Nenhuma competição grave de peso visual.

### 5. Identidade de marca
A página parece Apneia na Prática, não um template genérico.

### 6. Ritmo entre dobras
Macro-layouts variam de forma funcional:
Hero → Grid → Comparação → Oferta assimétrica → Professor/Trust.

### 7. Uso de espaço negativo
A página respira sem parecer vazia e sem tentar preencher tudo.

### 8. Tipografia
Escala, peso, largura de linha e quebras suportam leitura. Sem texto espremido para caber.

### 9. Cor e contraste [CRÍTICO]
Paleta real usada com disciplina. CTA perceptível. Contraste acessível.

### 10. Oferta e conversão [CRÍTICO]
R$47, entregáveis, CTA e redução de risco estão inequívocos sem manipulação artificial.

### 11. Responsividade [CRÍTICO]
Mobile é recomposição real. Não há clipping, overflow ou perda de hierarquia.

### 12. Qualidade de implementação
Sem dependências gratuitas, estilos ad-hoc, JS desnecessário ou layout frágil.

### 13. Fidelidade às referências
O build captura princípios de composição/densidade/ritmo sem copiar identidade alheia.

### 14. Anti-genericidade
Se remover a logo, ainda existem decisões específicas conectadas ao produto e à marca.

## Formato de review

```text
VERDICT: APPROVE | CONDITIONAL | REJECT
REVISION: X/3

| Critério | Score | Justificativa |
|---|---:|---|
| ... | ... | ... |

MÉDIA: X.X/10

Strength:
...

Required change:
...

Suggestion (non-blocking):
...
```

## Limite de revisão
Após 3 ciclos com o mesmo problema recorrente, parar a auto-iteracão e escalar a decisão ao responsável do projeto.

## Proveniência
Adaptado da metodologia de Review da Human Team e do conceito de referências como padrão mínimo de qualidade da Human Carroussel.
