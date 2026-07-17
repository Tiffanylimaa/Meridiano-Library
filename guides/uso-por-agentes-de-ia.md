# Uso por agentes de IA

## Objetivo

Permitir que diferentes agentes descubram e apliquem recursos do Meridiano Library com uma política comum de confiança. O manifesto [`ai-resources.json`](../ai-resources.json) é a entrada legível por máquina; [`CATALOG.md`](../CATALOG.md) é o índice humano.

## Início rápido

Forneça ao agente acesso ao repositório e use este pedido:

> Leia `AGENTS.md`, `ai-resources.json` e `.agents/skills/use-meridiano-library/SKILL.md`. Localize no catálogo o melhor recurso para minha tarefa, verifique seu status e aplique somente o que estiver autorizado pelas regras de confiança.

Consulte o adaptador da plataforma: [Codex](../platforms/codex.md), [Claude Code](../platforms/claude-code.md), [ChatGPT](../platforms/chatgpt.md) ou [agente genérico](../platforms/agente-generico.md).

## O que funciona agora

- Codex pode descobrir automaticamente a skill de entrada em `.agents/skills` quando trabalha neste repositório.
- Outros agentes podem carregar a mesma skill explicitamente por caminho.
- Qualquer agente pode analisar `ai-resources.json` para encontrar catálogos, pastas e política de confiança.
- Agentes, prompts, workflows, skills próprias e guias aprovados podem ser aplicados conforme seu status.
- As 136 skills em `third-party/installed-skills/` podem ser carregadas sob demanda após leitura integral do `SKILL.md` selecionado.

## Limite das referências externas

Os arquivos em `third-party/` são fichas de procedência, não cópias instaladas. Itens `reference-only` podem ser encontrados e recomendados, mas não devem ser executados. Para torná-los utilizáveis, revise licença e segurança, fixe a versão de origem e publique uma adaptação aprovada ou um procedimento de instalação separado.

A exceção é `third-party/installed-skills/`, que contém apenas pacotes de instrução importados segundo a política descrita em seu README. Essa disponibilidade não concede permissões para ferramentas, rede, credenciais ou ações externas.

Nenhum arquivo consegue obrigar toda IA existente a carregar o repositório automaticamente. O cliente precisa ter acesso aos arquivos e capacidade para seguir Markdown ou o manifesto JSON.
