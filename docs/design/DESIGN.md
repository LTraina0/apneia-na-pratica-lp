# DESIGN — Apneia na Prática

## 1. Direção criativa

Landing page curta para produto educacional low ticket na área odontológica.

A estética deve combinar:

**clínica + educacional + digital + comercial**, sem parecer hospitalar e sem parecer uma página agressiva de infoproduto.

A página deve transmitir:
- confiança;
- clareza;
- organização;
- critério;
- modernidade;
- profissionalismo;
- leveza.

### Conceito visual

**“Clareza clínica em camadas.”**

O visual deve traduzir a ideia de organizar sinais dispersos até chegar a um próximo passo mais claro. A assinatura recorrente pode usar linhas finas, contornos e transições azul → ciano, derivados da própria logo.

## 2. Princípios obrigatórios

Antes de estilizar qualquer dobra, decidir nesta ordem:

1. mensagem;
2. hierarquia;
3. estrutura;
4. composição;
5. acabamento.

Cada dobra precisa ter:
- um ponto de entrada dominante;
- um objetivo claro;
- uma ação principal quando houver CTA;
- três níveis de leitura: âncora, contexto e metadado;
- grid e alinhamentos deliberados.

Não repetir o mesmo macro-layout em seções consecutivas.

Ritmo:

**Hero respirado → grid denso → comparação → oferta assimétrica → autoridade/fechamento.**



## 2.1. Doutrina visual — regras de direção de arte

Estas regras são obrigatórias e servem para impedir que a implementação regrida para uma landing page genérica de IA.

### Hierarquia em 3 níveis
Cada dobra deve ter exatamente três níveis claros de leitura:

1. **Âncora** — o primeiro elemento que o olho percebe: headline, preço, foto, mockup ou painel dominante.
2. **Contexto** — explica a âncora: subtítulo, body, lista, comparação.
3. **Metadado** — organiza sem competir: eyebrow, microcopy, selo funcional, aviso.

Se dois elementos competem pelo mesmo peso visual, a composição está errada. Resolver por escala, peso, contraste ou espaço — não adicionando mais decoração.

### Restrição como linguagem de marca
- Preferir menos componentes, usados com consistência.
- Máximo recomendado de 5 cores funcionais por viewport; neutros não contam como acentos independentes.
- No máximo 2 famílias tipográficas quando a tipografia final for definida.
- Não criar um novo estilo de card, botão ou ícone para cada dobra.
- Repetição deve acontecer no **sistema**, não no macro-layout.

### Espaço negativo é conteúdo
O vazio serve para separar hierarquia, dar importância e reduzir carga cognitiva. Não preencher uma área apenas porque “parece vazia”.

### Contraste em três escalas
Toda dobra precisa ter:
- contraste **macro** entre a seção e a anterior;
- contraste **médio** entre título e conteúdo;
- contraste **micro** entre texto normal, ênfases e metadados.

### Cor é relacional
Nunca decidir cor isoladamente. Validar sempre no contexto real de fundo, texto, CTA e elementos próximos. O Cyan e o Yellow não devem ser espalhados apenas porque existem na logo.

### Tipografia antes do ornamento
A personalidade deve vir primeiro de escala, peso, composição e espaçamento. Não usar efeitos para compensar tipografia fraca.

### Um componente visual dominante por argumento
Quando uma dobra já tem um mecanismo visual forte — grid, comparação, offer card, retrato — evitar adicionar uma segunda metáfora visual competindo com ele.


## 3. Paleta da marca

Paleta baseada na logo fornecida. Usar como referência funcional:

- Deep Navy: `#041141`
- Navy principal: `#0C2658`
- Blue: `#21789F`
- Teal: `#0982A2`
- Cyan: `#18B5C8`
- Yellow accent: `#FFC81B`
- White: `#FFFFFF`
- Off-white: `#F7F8FA`
- Light blue-gray: `#EEF3F8`
- Border: `#DCE6F0`
- Dark text: `#14253F`
- Muted text: `#5C6F86`

### Uso

- Navy = autoridade, títulos e superfícies escuras.
- Blue = ação e elementos institucionais.
- Cyan = energia, ícones, checks e destaque.
- Yellow = acento raro; usar em pequenos rótulos ou detalhes, nunca como grande superfície.
- Neutros = aproximadamente 90% da página.
- Cor de ação deve ser preservada para CTA/links e não desperdiçada em decoração.

## 4. Grid

### Desktop
- viewport de referência: 1440px;
- container máximo: 1160px;
- grid: 12 colunas;
- gap: 24px;
- margens laterais mínimas: 32px.

### Tablet
- 8 colunas;
- container `calc(100% - 64px)`;
- gap 20px.

### Mobile
- projetar a partir de 360px;
- 1 coluna;
- margens laterais de 20px;
- sem scroll horizontal.

## 5. Espaçamento

Usar escala múltipla de 8 sempre que possível.

- seção desktop: 80–112px vertical;
- seção mobile: 48–64px;
- eyebrow → título: 12–16px;
- título → subtítulo: 20–24px;
- subtítulo → conteúdo: 40–56px;
- conteúdo → CTA: 36–48px;
- CTA → microcopy: 12–16px.

Espaço vazio deve parecer intencional. Não deixar áreas “abandonadas”.

## 6. Tipografia

A tipografia está **travada** para este projeto e não deve ser reinterpretada pelo agente.

### Família principal — Rubik
Usar **Rubik** como fonte principal da landing page.

Aplicações:
- H1;
- H2;
- H3;
- eyebrow;
- botões;
- preços;
- labels de destaque;
- títulos de cards;
- elementos de navegação/ação, se existirem.

A Rubik deve carregar a personalidade principal da interface: contemporânea, limpa, digital e profissional.

### Família secundária — Arial
Usar **Arial** como fonte secundária.

Aplicações preferenciais:
- body text;
- microcopy;
- textos auxiliares;
- observações de pagamento;
- rodapé;
- textos longos em cards quando a leitura ganhar com maior neutralidade.

### Hierarquia de referência
- H1 desktop: 48–56px; mobile: 34–38px; Rubik 700–800; line-height 1.0–1.08.
- H2 desktop: 36–44px; mobile: 28–32px; Rubik 700.
- H3/card title: 20–24px; Rubik 600–700.
- eyebrow: 12–14px; Rubik 600–700; uppercase; tracking moderado.
- body: 16–18px; Arial 400–700 conforme ênfase; line-height ~1.5.
- microcopy: 12–13px; Arial 400.
- corpo textual: máximo ~65ch.
- usar `text-wrap: balance` em títulos e `text-wrap: pretty` em parágrafos quando suportado.

### Regra de consistência
- não substituir Rubik por Inter, Manrope, DM Sans, Poppins ou qualquer “fonte parecida”;
- não introduzir terceira família;
- não variar tipografia entre dobras;
- se Rubik precisar ser carregada externamente, usar fonte web oficial/Google Fonts com `font-display: swap`;
- Arial deve usar a stack `Arial, Helvetica, sans-serif`.

## 7. Botões

CTA primário:
- 56–64px de altura;
- 14–18px de radius;
- 320–420px quando centralizado;
- 100% no mobile quando fizer sentido;
- fundo preferencial em gradiente suave `#21789F → #18B5C8`;
- texto branco;
- peso 700;
- hover com pequena elevação/luminosidade;
- foco de teclado claramente visível;
- área de toque mínima 44px.

Evitar:
- glow forte;
- animação pulsante;
- pills exageradas.

## 8. Cards

- radius: 16–20px;
- border 1px `#DCE6F0`;
- fundo branco ou `#EEF3F8`;
- padding: 28–34px desktop / 22–26px mobile;
- sombra mínima;
- ícones outline, coerentes entre si;
- não usar ilustrações 3D genéricas.

---

# DOBRA 1 — HERO

## Função
Compreensão da oferta em até 5 segundos.

## Anatomia
Logo → H1 → subheadline → mockup → CTA → microcopy.

## Composição
- centralizada;
- fundo `#F7F8FA` ou branco;
- container textual 760–820px;
- logo 140–180px;
- mockup 500–620px;
- H1 máximo visual de 3 linhas;
- subheadline máximo 700px.

## Direção
O mockup é prova de produto, não decoração. Não adicionar navbar, badges, contadores ou elementos laterais.

CTA deve estar visualmente conectado ao mockup.

---

# DOBRA 2 — IDENTIFICAÇÃO

## Função
Reconhecimento rápido de situações clínicas cotidianas.

## Anatomia
Eyebrow → H2 → intro → grid 3×2 → CTA.

## Desktop
- 3 colunas × 2 linhas;
- gap 18–22px;
- cards de altura visual equivalente, ~180–210px.

## Cards
- ícone no topo;
- texto centralizado;
- ícones em cyan/blue;
- títulos/textos em navy/dark;
- fundo branco;
- borda suave;
- sem ilustrações adicionais.

A seção já é densa. Não colocar grandes elementos decorativos.

---

# DOBRA 3 — COMPARAÇÃO

## Função
Mostrar a mudança de raciocínio.

## Anatomia
H2 → subtítulo → dois painéis → conclusão → process strip → CTA.

## Desktop
- dois painéis equivalentes;
- gap 24px;
- 480–540px por painel.

### Painel esquerdo
“Quando a investigação fica solta”
- superfície neutra `#EEF3F8`;
- menor contraste;
- ícones azul-acinzentados;
- sem vermelho forte.

### Painel direito
“Quando você organiza a investigação”
- tint suave de azul/ciano;
- border em Blue/Cyan;
- checks em Cyan;
- contraste ligeiramente superior.

## Itens
Ícone à esquerda + texto à direita + divisores muito sutis.

## Process strip
`PERGUNTAR → OBSERVAR → ORGANIZAR → DECIDIR O PRÓXIMO PASSO`

Usar linha conectada, círculos numerados ou labels. Não criar 4 cards grandes.

## Mobile
Painel esquerdo → painel direito → process strip em 2×2 ou vertical.

---

# DOBRA 4 — PRODUTO + OFERTA

## Função
Transformar valor percebido em decisão de compra.

## Direção
Usar fundo Navy `#0C2658` para criar pausa tonal.

## Desktop
- conteúdo: 7/12;
- offer card: 5/12;
- gap 56–72px.

### Coluna de conteúdo
- eyebrow amarelo apenas como pequeno acento;
- H2 branco;
- body em branco suave/blue-gray;
- lista com checks Cyan;
- não criar um card para cada item.

### Offer card
- 400–440px;
- fundo branco;
- radius 22–28px;
- padding 36–44px;
- sombra elegante;
- preço 52–64px;
- CTA full width;
- nome do produto em Navy.

Ordem:
produto → bundle → divisor → investimento → R$47 → CTA → microcopy.

---

# DOBRA 5 — PROFESSOR + TRUST + FECHAMENTO

## Função
Construir confiança e remover fricção.

## Professor
Desktop:
- foto 5/12;
- copy 7/12.

Foto:
- proporção 4:5 ou 3:4;
- radius 20–28px;
- nunca circular;
- evitar crop que comprometa rosto/gesto.

Texto:
- eyebrow;
- nome;
- máximo 2 parágrafos.

## Trust bar
3 cards:
- 7 dias de garantia;
- pagamento seguro;
- suporte.

Cards pequenos, bordas suaves, ícones Cyan/Blue.

## Fechamento
Bloco central de 880–960px, padding 48–64px, radius 24px.

Conteúdo:
headline → produto → bundle → preço → CTA.

Pode usar versão clara ou Navy, mantendo o CTA em azul/ciano.

---

# RODAPÉ

Minimalista.
- 120–180px;
- 12–13px;
- aviso clínico;
- política;
- termos;
- copyright.

Não transformar o rodapé em nova dobra.

---

## 9. Movimento

Zero animação por padrão.

Se houver:
- fade/translate curto e discreto;
- hover suave;
- respeitar `prefers-reduced-motion`.

Não usar animação como distração ou prova de modernidade.

## 10. Regras de responsividade

- mobile-first;
- tipografia fluida com `clamp()`;
- nenhum scroll horizontal;
- nenhuma fonte menor que o necessário para legibilidade;
- CTAs fáceis de tocar;
- imagens com proporção preservada;
- não “encolher o desktop”: recompor a hierarquia.

## 11. Anti-patterns

Não adicionar:
- navbar complexa;
- FAQ na V1;
- carrossel;
- popup;
- countdown;
- escassez;
- prova social falsa;
- estrelas;
- badges artificiais;
- fundos com gradientes aleatórios;
- glassmorphism sem função;
- ilustrações médicas genéricas;
- excesso de sombras;
- cards em todas as seções.


## 12. Protocolo de referências visuais

As imagens de referência são **âncoras de qualidade e composição, não templates para copiar**.

O agente deve observar em cada referência:
- registro tonal: claro, médio ou escuro;
- largura e posição do conteúdo;
- relação entre imagem e texto;
- hierarquia tipográfica;
- densidade de informação;
- bordas, divisores e radius;
- uso de sombra;
- tipo de imagem: editorial, produto, retrato, ilustração ou textura;
- detalhes recorrentes que formam assinatura visual.

Se uma referência for um grid/moodboard, decompor mentalmente os exemplos e identificar padrões recorrentes, em vez de tratar o grid inteiro como uma única composição.

### O que pode ser modelado das referências
- proporção;
- hierarquia;
- arquitetura espacial;
- ritmo;
- relação entre blocos;
- tratamento de cards;
- densidade;
- comportamento responsivo inferível.

### O que não deve ser copiado
- cores de outra marca;
- logotipos;
- imagens proprietárias;
- textos;
- ornamentação específica sem função;
- elementos que conflitem com a identidade do Apneia na Prática.

### Fidelidade tonal
Não escurecer automaticamente o projeto por associação com “premium”. Se as referências aprovadas forem predominantemente claras, manter o registro claro. Se houver uma seção escura, ela deve ter função narrativa — especialmente a oferta — e não ser um default estético.

Consultar também `VISUAL-REFERENCE-PROTOCOL.md`.

## 13. Typography lock

A tipografia final está aprovada e **travada**: Rubik como principal e Arial como secundária. O agente não pode trocar as famílias entre dobras nem reinterpretar “uma fonte parecida”.

Aplicação obrigatória:
- usar somente uma das famílias permitidas no token atual;
- não misturar famílias por iniciativa própria;
- não introduzir serif ou display experimental sem aprovação.

## 14. Teste de genericidade visual

Antes da aprovação, fazer o teste:

> Se eu retirar a logo e trocar o nome do produto por outra oferta médica/educacional, esta página ainda pareceria exatamente igual?

Se sim, a identidade está genérica. Corrigir com decisões específicas da marca: paleta real, uso da logo, mockup real, ritmo próprio, copy real e composição conectada ao tema de investigação clínica.
