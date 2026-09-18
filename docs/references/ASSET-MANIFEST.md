# ASSET MANIFEST — Apneia na Prática

## Status
Atualização v1.3.0: a Hero atual vem de HeroLP-testing por solicitação do usuário.
Os conceitos e o mockup da Hero anterior descritos abaixo são referências históricas.

## Ativos da Hero atual

- Origem: https://github.com/LTraina0/HeroLP-testing, commit 22e69a4b31bf0cf8a25ddcc848af34e96d326dd1.
- Fundos, marcas e logoforms responsivos em `public/assets/hero/`, copiados sem alteração.
- Retrato em `src/assets/hero/expert.png`: original único, idêntico aos quatro PNGs da origem; WebP responsivo gerado pelo Astro.
- Nenhuma imagem gerada, recolorida ou substituída; composição original preservada.
- `public/assets/hero-bg.jpg` e `public/assets/mockup.png` removidos por serem exclusivos da Hero antiga.
- Logo compartilhada e `product-mockup.png` da oferta permanecem.

## Ativos disponíveis

### `Frame 3200.png`
**Papel:** logo oficial fornecida para esta página.  
**Status:** disponível e verificada visualmente.  
**Uso principal:** Hero e, opcionalmente, assinatura discreta no fechamento/rodapé.  
**Regras:** preservar proporção, transparência e cores; não distorcer, rotacionar, recolorir ou aplicar efeitos.

### `mockup.png`
**Papel:** mockup de produto com notebook, tablet e smartphone.  
**Status:** disponível e verificado visualmente.  
**Características:** PNG transparente, telas neutras.  
**Uso principal:** Hero.  
**Regras:** preservar transparência e proporção; não substituir por stock mockup; conteúdo futuro das telas só deve ser inserido se houver material aprovado.


### `Dobra 1 - conceito aprovado.png`
**Papel:** referência visual aprovada da primeira dobra/Hero.  
**Status:** fonte de verdade para composição da Dobra 1.  
**Uso:** preservar a estrutura e o ritmo visual do conceito: logo central, headline centralizada, subheadline curta, mockup central, CTA largo e microcopy.  
**Regra:** pode refinar responsividade, espaçamento e acabamento, mas não deve reinventar o macro-layout sem solicitação.

### `Dobra 2 - conceito aprovado.png`
**Papel:** referência visual aprovada da segunda dobra/identificação.  
**Status:** fonte de verdade para composição da Dobra 2.  
**Uso:** preservar o cabeçalho centralizado, grid 3×2 de seis cards, CTA central e hierarquia geral.  
**Regra:** ícones e acabamento cromático podem ser evoluídos conforme `DESIGN.md`, mas o macro-layout deve permanecer reconhecível.

## Ativos pendentes

- foto final do Prof. Dr. Eduardo Rollo;
- favicon;
- imagem Open Graph;
- eventualmente versões SVG da logo, se disponibilizadas;
- screenshots/conteúdo real para preencher telas do mockup, se desejado.

## Dados externos pendentes

- checkout Hotmart;
- suporte;
- domínio;
- Política de Privacidade;
- Termos;
- Analytics/Pixel;
- confirmação operacional final da garantia.

## Regra para placeholders
Quando um ativo pendente não existir:
1. preservar o espaço estrutural;
2. usar placeholder neutro claramente marcado apenas em desenvolvimento;
3. nunca buscar stock/genérico por conta própria;
4. nunca apresentar placeholder como produção final.
