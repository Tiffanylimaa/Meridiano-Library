# Scroll expand hero

## Objetivo

Explicar e disponibilizar um padrão de hero onde uma caixa de mídia (imagem ou vídeo) começa pequena e centralizada e expande até preencher a tela conforme a página rola — recriação própria e independente do comportamento geral conhecido como "scroll expand" (o nome foi citado a partir do componente `@react-bits/ScrollExpand-JS-CSS`, mas este código não copia nem foi adaptado dele — ver nota de proveniência abaixo).

## Público

Quem estiver montando uma landing page, hero de produto ou abertura de site que precise de um momento de impacto visual logo na primeira rolagem, sem depender de vídeo de fundo pesado.

## Pré-requisitos

- Nenhuma dependência externa: HTML/CSS/JS puro.
- Troque a `.media` (hoje um gradiente placeholder) por uma `<img>` ou `<video>` real — o container já cresce, só posicione a mídia com `object-fit:cover` dentro dele.
- Mesma base técnica do guia [Scroll stack de cards em loop](scroll-stack-cards-loop.md): um wrapper alto cria distância de scroll, um filho `position:sticky` prende a cena na tela, e o progresso (`getBoundingClientRect`) vira interpolação de estilo via JS.

## O exemplo

[`examples/ui-patterns/scroll-expand-hero.html`](../examples/ui-patterns/scroll-expand-hero.html) — arquivo único, abra direto no navegador.

## Como funciona

1. **Distância de scroll**: `.hero` recebe altura fixa maior que `100vh` (aqui `220vh`) — o excesso é o espaço que o usuário rola enquanto a cena fica presa na tela.
2. **Cena presa**: `.hero-sticky` (`position:sticky; top:0; height:100vh`) mantém título e mídia visíveis durante toda a rolagem.
3. **Progresso contínuo**: a cada frame de scroll, `p = distância rolada dentro do wrapper / distância total disponível`, sempre entre 0 e 1.
4. **Interpolação de estilo**: `p` é usado para interpolar linearmente largura, altura e raio de borda da `.media` (de pequena/arredondada para tela-cheia/reta), além da opacidade e deslocamento do texto acima, que desaparece suavemente.
5. **Sem dependência de biblioteca de scroll**: o cálculo usa só `getBoundingClientRect()` e `requestAnimationFrame` — dá pra trocar por Framer Motion (`useScroll` + `useTransform`) ou GSAP ScrollTrigger sem mudar a lógica, só a forma de aplicar os valores.

## Parâmetros pra ajustar

| Constante | Efeito |
| --- | --- |
| `START_W` / `START_H` | Tamanho inicial da mídia, em fração da largura/altura da viewport. |
| `END_W` / `END_H` | Tamanho final (`1` = 100% da largura/altura da viewport). |
| `START_RADIUS` / `END_RADIUS` | Raio de borda inicial/final — controla se a mídia "abre" de um cartão pra tela cheia. |
| Altura de `.hero` (`220vh`) | Quanto maior, mais lenta/gradual a expansão em relação à velocidade de rolagem. |

## Nota de proveniência

Este código **não é** uma cópia ou adaptação do componente `@react-bits/ScrollExpand-JS-CSS`. A tentativa de instalar esse componente (`npx shadcn@latest add @react-bits/ScrollExpand-JS-CSS`) falhou por bloqueio de rede no ambiente usado — ver o registro em [`third-party/resources/react-bits-scrollexpand.md`](../third-party/resources/react-bits-scrollexpand.md). O que existe aqui é uma implementação própria e independente do padrão geral "mídia que expande no scroll", escrita sem acesso ao código-fonte real do React Bits. Se precisar do componente original (com a autoria, licença e comportamento exatos do React Bits), acesse `reactbits.dev` fora deste ambiente e revise antes de usar.
