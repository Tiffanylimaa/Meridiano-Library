---
title: React Bits — ScrollExpand
slug: react-bits-scrollexpand
type: resource
origin: third-party
record_type: reference-only
author: desconhecido (React Bits)
source_url: https://reactbits.dev
source_version: desconhecida
source_commit: desconhecido
license: desconhecida
review_status: unreviewed
reviewed_on: null
modified: false
compatible_with: []
status: evaluating
tags: ["design", "ui", "scroll", "react"]
---

# React Bits — ScrollExpand

## Descrição

Componente citado pelo nome `@react-bits/ScrollExpand-JS-CSS` (instalável, segundo o pedido original, via `npx shadcn@latest add`). É um padrão de mídia (imagem/vídeo) que começa pequena e expande conforme a página (ou um container interno) rola. A API de props foi parcialmente confirmada pelo usuário, que colou dois trechos reais de código usando o componente — ver "Fonte original" e "Limitações".

Props confirmadas por esses exemplos de uso (não pelo código-fonte): `src`, `alt`, `title`, `scrollHint`, `useWindowScroll`, `mediaZoom`, `startWidth`, `startHeight`, `startRadius`, `endRadius`, `scrollDistance`, `holdDistance`, `smoothing`, `overlayScrim`, `enabled`, `children`.

## Motivo da inclusão

Solicitado como referência para uso no Projeto Meridiano. Catalogado aqui como registro de procedência antes de qualquer adaptação.

## Fonte original

- URL: `https://reactbits.dev` (domínio do projeto React Bits; a página exata do componente não foi confirmada)
- Registro do componente: `@react-bits/ScrollExpand-JS-CSS`
- Data de acesso: **não foi possível acessar** o site/registry — ver Limitações.
- Em 2026-08-10, o usuário colou dois trechos de código JSX usando o componente real (fora deste ambiente), o que confirma a API pública de props sem revelar a implementação, autoria ou licença.

## Autoria

Não confirmada nesta sessão. Preserve a atribuição ao projeto React Bits e consulte a fonte antes de qualquer reutilização real.

## Licença

Licença detectada: `desconhecida`. Este registro é somente uma referência. A redistribuição não foi autorizada nem revisada por esta catalogação.

## Versão ou commit avaliado

Nenhum. Não houve acesso ao código-fonte real do componente.

## Compatibilidade

Não avaliada.

## Arquivos incluídos

Nenhum. `record_type: reference-only` — nenhum código do React Bits foi copiado, porque nenhum código do React Bits foi de fato lido.

## Alterações locais

Nenhuma. `modified: false`.

## Revisão de segurança

- [ ] Scripts foram lidos integralmente.
- [ ] Não há comandos destrutivos ocultos.
- [ ] Não há coleta ou exposição de credenciais.
- [ ] Downloads e chamadas externas foram identificados.
- [ ] Dependências foram revisadas.
- [ ] Permissões solicitadas são compatíveis com a finalidade.
- [ ] Exemplos não contêm dados pessoais.
- [ ] A licença permite o tipo de uso registrado.

Nenhum script foi executado. A tentativa de instalação via `npx shadcn@latest add @react-bits/ScrollExpand-JS-CSS` falhou porque o ambiente de execução usado nesta catalogação bloqueia acesso de rede a domínios fora de uma lista liberada (`ui.shadcn.com` não está nela) — o próprio registry do shadcn não pôde ser consultado, então nem os metadados do componente foram vistos, só o nome informado pelo solicitante.

## Limitações

Ainda não há confirmação de autoria, licença, versão, código-fonte ou comportamento visual exato (easing, timing) do componente. O que existe além do nome do pacote é a API pública de props, confirmada por dois trechos de uso reais colados pelo usuário — suficiente pra recriar o comportamento de forma compatível, insuficiente pra qualquer alegação de fidelidade ao componente original ou pra saber se a redistribuição seria permitida. Trate como não verificado até que alguém com acesso de rede a `reactbits.dev`/`ui.shadcn.com` confirme fonte, licença e código-fonte real.

## Instruções de instalação ou uso

Não instale. Consulte `https://reactbits.dev` diretamente (fora deste ambiente) para obter o código real antes de qualquer uso.

## Decisão de curadoria

- **Decisão:** avaliando.
- **Justificativa:** Solicitado para uso, mas o ambiente de execução não teve acesso de rede para verificar fonte, licença ou conteúdo.
- **Próxima ação:** revisão manual com acesso de rede real antes de copiar, adaptar ou instalar o componente de verdade. Uma recriação própria, compatível com a API de props confirmada mas não uma cópia do código-fonte, foi publicada em [`examples/ui-patterns/ScrollExpand.jsx`](../../examples/ui-patterns/ScrollExpand.jsx) (React), [`examples/ui-patterns/scroll-expand-hero.html`](../../examples/ui-patterns/scroll-expand-hero.html) (vanilla) e [`guides/scroll-expand-hero.md`](../../guides/scroll-expand-hero.md).

## Histórico de atualização

| Data | Versão ou commit | Alteração | Revisão |
| --- | --- | --- | --- |
| 2026-08-04 | — | Registro inicial; acesso à fonte bloqueado neste ambiente | `unreviewed` |
| 2026-08-10 | — | Usuário colou 2 exemplos reais de uso (props); API pública documentada, código-fonte/licença seguem não verificados | `unreviewed` |
