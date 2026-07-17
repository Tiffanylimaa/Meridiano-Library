# Itens não instalados

Esta lista registra o que permaneceu fora da importação automática e por quê.

## Skills com código executável

Foram bloqueadas 32 skills que contêm scripts, executáveis, manifestos de dependência ou instaladores remotos de alto risco: 20 de `openai/skills`, 4 de `obra/superpowers`, 5 de `nextlevelbuilder/ui-ux-pro-max-skill`, 1 de `pbakaus/impeccable` e 2 de `Wirasm/PRPs-agentic-eng`.

As skills `sentry` e `render-deploy` foram removidas do conjunto inicialmente filtrado porque instruíam o uso de `curl | bash`.

A skill `subagent-driven-development` foi removida porque continha scripts Bash sem extensão dentro da pasta `scripts/`.

Elas exigem leitura integral dos scripts, revisão de dependências, efeitos, rede e permissões antes de uma importação separada.

## Licença insuficiente para redistribuição

- `Wirasm/worktree-manager-skill`, `Jakubantalik/transitions.dev` e `vercel-labs/agent-skills`: nenhuma licença permissiva foi confirmada no inventário.
- `anthropics/skills`: várias skills usam termos vinculados aos serviços Anthropic, em vez de uma licença permissiva geral para redistribuição.

Esses recursos continuam como `reference-only`.

## Plugins e aplicações com runtime próprio

- `jarrodwatts/claude-hud` e `thedotmack/claude-mem` dependem de instalação, hooks ou serviços específicos do Claude.
- `openai/codex-action` exige configuração de GitHub Actions e credenciais próprias do usuário.
- GPT Researcher, Context7 e PRPs foram importados somente pelas skills de instrução selecionadas; aplicações, servidores, plugins e scripts associados não foram copiados.

## Bibliotecas de software

Bootstrap, Streamlit, Animate.css, Flag Icons, Colors, Astryx e Git Sweep não são habilidades de agente. Permanecem como referências de software no catálogo.

Nenhum item desta lista deve ser instalado ou executado sem uma revisão específica e uma autorização correspondente.
