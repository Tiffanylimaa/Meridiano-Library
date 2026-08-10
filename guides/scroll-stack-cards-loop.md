# Scroll stack de cards em loop

## Objetivo

Explicar e disponibilizar um padrão de interação onde uma seção rolável ("scrollytelling") empilha cards de conteúdo: cada novo card sobe e cobre quase inteiro o anterior, mas os cards que já ficaram pra trás continuam visíveis em fatias, afundando ao longo de um arco (não em linha reta) conforme mais cards se acumulam à frente deles — como um baralho aberto em leque, em vez de uma pilha reta.

## Público

Quem estiver montando uma seção de portfólio, um "sobre o ecossistema/produto" ou qualquer bloco de 3 a 6 itens que se beneficie de uma transição mais editorial do que uma grade estática.

## Pré-requisitos

- Nenhuma dependência externa: o exemplo é HTML/CSS/JS puro, sem framework.
- Se for portar para React, `will-change`, `position:sticky` e o cálculo de scroll (`getBoundingClientRect`) traduzem bem para um `useEffect` com listener de scroll, ou para uma lib de scroll-linked animation (Framer Motion `useScroll`, GSAP ScrollTrigger).
- Respeita `prefers-reduced-motion` (desliga a animação do fundo); a lógica de posição dos cards em si é instantânea o bastante para não precisar de tratamento extra.

## O exemplo

[`examples/ui-patterns/scroll-stack-cards-loop.html`](../examples/ui-patterns/scroll-stack-cards-loop.html) — arquivo único, abra direto no navegador. Conteúdo e paleta são fictícios (5 etapas genéricas de um processo de produto); troque `CARDS` e `CYCLE` pelos seus.

## Como funciona

1. **Distância de scroll**: um wrapper (`.stage-wrap`) recebe altura `N × 100vh` (N = número de cards), criando espaço de scroll. Dentro dele, `.sticky` (`position:sticky; top:0; height:100vh`) prende a pilha na tela enquanto esse espaço é percorrido.
2. **Profundidade contínua**: a cada frame de scroll, calcula-se `raw = progresso × N` (um número fracionário contínuo) e, para cada card `i`, `D = raw - i`. `D` é a "profundidade" desse card naquele instante: `D < 0` significa que o card ainda não apareceu (entra deslizando de baixo, `translateY(100% → 0)`); `D = 0` é a posição de frente, assentada; `D > 0` significa que o card já foi coberto e está indo pra trás.
3. **Arco em vez de reta**: para `D > 0`, a posição usa um ângulo (`D × 0.42` rad) para calcular deslocamento em X (`sin`) e Y (`cos`), então o card não sobe em linha reta — ele curva pro lado conforme afunda, com escala e (opcionalmente) rotação decrescentes. Isso é o que dá a leitura de "baralho em leque" em vez de pilha reta.
4. **Continuidade**: como `D` é a mesma fórmula (`raw - i`) para todos os cards simultaneamente, o card que acabou de ir pra trás e os que já estavam mais atrás se movem juntos, suavemente, no mesmo gesto — sem saltos por card.
5. **Cor conectada**: `CYCLE` é uma lista de 5 cores; cada card usa uma janela de 4 cores desse ciclo, deslocada uma posição da vizinha (`cycleWindow`), então cards adjacentes compartilham tons e o conjunto lê como um espectro contínuo em vez de paletas isoladas por card.

## Parâmetros pra ajustar

| Constante | Efeito |
| --- | --- |
| `PEEK` | Quanto (em px) cada passo de profundidade desloca o card pra cima. Maior = fatias mais visíveis atrás. |
| `ROTATION` | Liga/desliga a inclinação dos cards no arco. |
| `0.42` (dentro do `angle`) | Curvatura do arco por passo de profundidade. Menor = arco mais suave/reto; maior = leque mais aberto. |
| `4.5` (cap de `D`) | Profundidade máxima considerada — evita que cards muito atrás continuem encolhendo/descendo indefinidamente. |

## Nota sobre o filtro SVG de distorção

O fundo animado de cada card usa `feTurbulence` + `feDisplacementMap` (distorção orgânica tipo "água"). Isso depende só de CSS/SVG padrão e não teve problema de compatibilidade nos testes feitos — qualquer instabilidade visual encontrada ao adaptar esse padrão tende a vir de outros elementos da página (ex.: `backdrop-filter` sticky competindo com a composição), não do filtro em si.

## Alternativas prontas

Se preferir não manter esse código, o [Aceternity UI](https://ui.aceternity.com) tem componentes React em Framer Motion equivalentes ("Card Stack", "Sticky Scroll Reveal"), sob licença MIT. Para inspiração visual sem código, veja o [Codrops](https://tympanus.net/codrops) ou busque "stacking cards scroll" no CodePen.
