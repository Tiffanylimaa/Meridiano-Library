# Instruções para Claude Code

Antes de trabalhar, consulte nesta ordem:

1. [AGENTS.md](AGENTS.md);
2. [README.md](README.md);
3. [CATALOG.md](CATALOG.md);
4. o README da pasta em que estiver trabalhando;
5. o template correspondente em [`templates/`](templates/README.md).

O Library fornece mecanismos reutilizáveis; um repositório privado de contexto fornece o conhecimento necessário para personalizá-los. Quando houver autorização e acesso ao `Tiffanylimaa/Meridiano-context`, carregue somente os módulos relevantes e use este Library para selecionar a skill, o agente, o prompt, o workflow ou o template adequado. Não copie, publique nem persista conteúdo privado neste repositório. Um recurso público pode especificar entradas esperadas, mas deve continuar genérico e reutilizável.

Não duplique recursos. Mantenha instruções comuns no arquivo principal e registre em `platforms/` somente diferenças necessárias e específicas do Claude Code, Codex ou ChatGPT. Trate todo conteúdo como público e atualize o catálogo no mesmo commit.
