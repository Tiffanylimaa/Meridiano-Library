# Instruções para Claude Code

Antes de trabalhar, consulte nesta ordem:

1. [AGENTS.md](AGENTS.md);
2. [README.md](README.md);
3. [CATALOG.md](CATALOG.md);
4. o README da pasta em que estiver trabalhando;
5. o template correspondente em [`templates/`](templates/README.md).

Quando a tarefa pedir agentes, prompts, workflows, skills ou outros recursos da biblioteca, leia também [`ai-resources.json`](ai-resources.json) e [`.agents/skills/use-meridiano-library/SKILL.md`](.agents/skills/use-meridiano-library/SKILL.md). Aplique a política de confiança antes de buscar ou executar conteúdo externo.

Não duplique recursos. Mantenha instruções comuns no arquivo principal e registre em `platforms/` somente diferenças necessárias e específicas do Claude Code, Codex ou ChatGPT. Trate todo conteúdo como público e atualize o catálogo no mesmo commit.
