# VISUAL REFERENCE PROTOCOL — Apneia na Prática

## Objetivo
Transformar screenshots e referências em **regras visuais explícitas**, evitando dois erros comuns: copiar superficialmente uma referência ou ignorá-la e gerar um template genérico.

## 1. Referência não é template
Uma referência serve como padrão de:
- composição;
- hierarquia;
- proporção;
- densidade;
- ritmo;
- relação texto/imagem;
- comportamento de cards e superfícies.

Ela não autoriza copiar marca, paleta, texto, imagens ou ornamentos proprietários.

## 2. Decodificação obrigatória de cada referência
Para cada screenshot/imagem, registrar:

### A. Registro tonal
- claro / médio / escuro;
- contraste geral;
- quanto do viewport é superfície clara vs. escura.

### B. Hierarquia
- Âncora: o que aparece primeiro;
- Contexto: o que explica;
- Metadado: o que organiza.

### C. Macro-layout
- centralizado, split, assimétrico, grid, painel duplo etc.;
- largura relativa de cada coluna;
- posição da âncora;
- alinhamento predominante.

### D. Densidade
- quantidade de texto;
- quantidade de cards;
- proporção entre conteúdo e espaço negativo.

### E. Sistema de componentes
- cards;
- botões;
- divisores;
- chips/eyebrows;
- ícones;
- offer card;
- foto/mockup.

### F. Tipo de imagem
- produto;
- retrato;
- fotografia editorial;
- ilustração;
- textura;
- ausência deliberada de imagem.

### G. Assinaturas recorrentes
Detalhes que aparecem mais de uma vez e formam consistência: bordas, linhas, pequenas barras, radius, tratamento de ícones, alinhamentos.

## 3. Referências em grid
Se uma imagem contiver vários layouts em grid/moodboard:
- decompor visualmente os exemplos;
- identificar padrões comuns;
- ignorar exceções isoladas;
- usar recorrência como sinal mais forte que um único detalhe.

## 4. Aplicação no projeto

### Dobra 1 — Hero
Usar o esqueleto atual como fonte de verdade. Logo e mockup são ativos reais.

### Dobra 2 — Identificação
Manter grid 3×2 e leitura rápida. Não repetir esse macro-layout na dobra seguinte.

### Dobra 3 — Comparação
Referência principal: dois painéis lado a lado. Modelar estrutura e contraste de estados, mas adaptar cores para a marca. Evitar vermelho/verde literal.

### Dobra 4 — Oferta
Referência principal: composição assimétrica com área editorial + card/ticket de compra. A oferta deve ter uma âncora clara: R$47 + CTA.

### Dobra 5 — Professor
Referência principal: retrato grande + conteúdo lateral. Garantia/suporte entram como trust bar, não como novas dobras.

## 5. Fidelidade tonal
Não aplicar “dark premium” automaticamente.

Regra:
- a página permanece majoritariamente clara;
- a Dobra 4 pode ser escura por função narrativa/comercial;
- as demais superfícies acompanham o registro claro já estabelecido no Figma;
- não escurecer a página além do que a identidade e as referências justificam.

## 6. Fidelidade de imagem
O tema da página não deve ser ilustrado literalmente com clichés médicos.

Preferir:
- produto real;
- professor real;
- ícones simples;
- elementos clínicos abstratos somente quando necessários.

Não usar imagem genérica de pessoa dormindo, ronco ilustrado, estetoscópio, cérebro 3D ou máscara CPAP apenas para “deixar médico”.

## 7. Output interno esperado antes do build
O agente deve produzir mentalmente ou em arquivo temporário:

```text
VISUAL BRIEF
- tonal register:
- anchor/context/metadata:
- macro-layout per section:
- spacing rhythm:
- typography behavior:
- card behavior:
- imagery style:
- recurring details:
- do not copy:
- anti-pattern risks:
```

Só depois implementar.

## 8. Comparação pós-render
Após renderizar desktop e mobile:
- comparar composição com a intenção da referência;
- não comparar pixel a pixel;
- verificar se a função visual foi preservada;
- corrigir hierarquia, densidade e ritmo antes de mexer em ornamento.

## Proveniência
Adaptado de práticas da Human Carroussel — Referências Visuais, Design System e Referências de Qualidade; Human DNA — Layout Composition e Design Director.
