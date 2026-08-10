# Scroll expand hero

## Objetivo

Explicar e disponibilizar um padrão de hero onde uma caixa de mídia (imagem ou vídeo) começa pequena e expande até preencher o espaço disponível conforme a página (ou um container interno) rola — recriação própria a partir da API de props observada em exemplos reais de uso de `@react-bits/ScrollExpand-JS-CSS`. **Não é cópia nem adaptação do código-fonte desse componente** — ver nota de proveniência abaixo.

## Público

Quem estiver montando uma landing page, hero de produto, ou um card/seção de portfólio que precise de um momento de impacto visual na primeira rolagem, com ou sem depender do scroll da página inteira.

## Pré-requisitos

- O componente React (`ScrollExpand.jsx`) não tem dependência além de `react`.
- O exemplo HTML (`scroll-expand-hero.html`) é HTML/CSS/JS puro.
- Mesma base técnica dos outros guias de scroll da biblioteca: um wrapper alto cria distância de scroll, um filho `position:sticky` prende a cena, e o progresso vira interpolação de estilo via JS.

## Os exemplos

- [`examples/ui-patterns/ScrollExpand.jsx`](../examples/ui-patterns/ScrollExpand.jsx) — componente React com a API de props confirmada (ver tabela abaixo). Testado via SSR (`renderToStaticMarkup`) e num navegador real (Playwright) nos dois modos, incluindo a correção de um bug real de dimensionamento no modo cápsula (ver "Bug encontrado e corrigido").
- [`examples/ui-patterns/scroll-expand-hero.html`](../examples/ui-patterns/scroll-expand-hero.html) — versão vanilla (sem React) do mesmo princípio, mais simples, só o modo "rola a página inteira".

## API de props (confirmada pelo usuário via exemplos de uso reais)

| Prop | Confirmado por | Efeito |
| --- | --- | --- |
| `src`, `alt` | uso real | Imagem exibida dentro do frame. |
| `title` | uso real | Rótulo fixo no canto superior esquerdo do frame. |
| `scrollHint` | uso real | Texto (ex. "Scroll inside the frame") visível só no início, some conforme expande. |
| `useWindowScroll` | uso real | Presente = acompanha o scroll da página inteira (modo hero). Ausente = o próprio componente vira uma "cápsula" com scroll interno, do tamanho que o pai definir (`<div style={{height:'520px'}}>`). |
| `mediaZoom` | uso real | Zoom estático aplicado à imagem (`transform:scale()`), evita vazios nas bordas durante a expansão. |
| `startWidth`, `startHeight` | uso real | Tamanho inicial do frame, em % do espaço disponível. |
| `startRadius`, `endRadius` | uso real | Raio de borda inicial/final — cai a 0 conforme expande. |
| `scrollDistance` | uso real | Quantas "telas" de scroll são necessárias pra completar a expansão. |
| `holdDistance` | uso real | Scroll extra, além do necessário pra expandir, em que o frame fica parado 100% expandido antes de liberar o resto da página. |
| `smoothing` | uso real | `1` = acompanha o scroll direto; `<1` = suaviza (lerp por frame) — implementado aqui via `requestAnimationFrame` + interpolação linear a cada tick. |
| `overlayScrim` | uso real | Opacidade de um véu escuro sobre a mídia quando expandida, pra legibilidade do `children`. |
| `enabled` | uso real | Liga/desliga o efeito (usado aqui como fallback de acessibilidade/reduced motion). |
| `children` | uso real | Conteúdo (título/parágrafo) sobreposto na mídia, com fade-in perto do fim da expansão — **posição exata do fade e do layout do `children` é inferência minha**, não confirmada pelos exemplos. |

Tudo marcado "uso real" veio de dois trechos de código colados pelo usuário (chamadas do componente com essas props em uso), não do código-fonte do componente em si — então o comportamento visual exato (curva de easing, timing preciso do fade, layout interno) é minha implementação, não uma cópia.

## Bug encontrado e corrigido

Na primeira versão, o modo cápsula (sem `useWindowScroll`) dava a `height:'100%'` ao filho `position:sticky` — mas esse `100%` resolve contra o *spacer* interno alto (o que cria a distância de scroll), não contra a caixa visível do componente. Resultado: o frame ficava gigante (ex. 1774px de altura dentro de uma caixa de 520px) e o título saía da área visível. Corrigido medindo a altura real do container via `ResizeObserver` e aplicando essa altura em `px` ao invés de `%`. Testado com Playwright antes e depois da correção — ver captura do bug e da correção no histórico do commit.

## Nota de proveniência

Este código não é uma cópia ou adaptação do componente `@react-bits/ScrollExpand-JS-CSS`. A tentativa de instalar esse componente (`npx shadcn@latest add @react-bits/ScrollExpand-JS-CSS`) falhou por bloqueio de rede no ambiente usado — ver [`third-party/resources/react-bits-scrollexpand.md`](../third-party/resources/react-bits-scrollexpand.md). O usuário depois colou dois trechos reais de uso do componente (chamadas JSX com props), o que deu uma confirmação parcial e genuína da API pública — mas não do código-fonte, autoria ou licença. Trate este `ScrollExpand.jsx` como uma implementação própria compatível com essa API, não como o componente original.
