# Ocultação reversível da Hero e cartilha — v1.2.3

- Build Astro aprovado com os dois blocos desativados.
- Chromium/Playwright em 320, 390, 767, 768, 1100 e 1440px: Hero e card da cartilha ausentes do DOM, sem overflow horizontal.
- Primeiro bloco visível: identificação, iniciando no topo da página; sem área reservada para a Hero.
- Preservados seis cards de identificação, quatro de método na variante visível e seis de treinamento.
- Um único H1 acessível no documento; nenhuma âncora interna sem destino.
- Console local sem erros ou avisos.
- Capturas mobile e desktop registradas; mobile inspecionado visualmente.
- Reversibilidade testada localmente: as duas flags ativadas restauraram uma Hero, um card da cartilha e o H1 original, sem duplicação.
- Flags retornadas a `false` após o teste; versão final deve ser publicada com ambas desativadas.
- `Hero.astro`, seus assets, a copy e os estilos do card complementar não foram excluídos.

Escopo limitado à visibilidade dos dois blocos. Nenhum redesenho da nova Hero
foi realizado; a cartilha continua fazendo parte da oferta. Testes em
viewports simulados, não em aparelhos físicos.
