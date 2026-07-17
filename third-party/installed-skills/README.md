# Skills externas instaladas

Esta área contém 137 skills importadas de 11 repositórios e carregáveis sob demanda pela skill [`use-meridiano-library`](../../.agents/skills/use-meridiano-library/SKILL.md). Consulte [`SOURCES.json`](SOURCES.json) para procedência, commit, licença, quantidade, revisões de scripts e adaptações.

## Critério da importação

- licença permissiva confirmada;
- `SKILL.md` presente;
- nenhum script, executável ou manifesto de dependência, exceto quando a skill e cada script estiverem explicitamente listados como revisados em `SOURCES.json`;
- origem fixada por commit;
- licença original preservada no pacote ou dentro de cada skill.

## Estado de confiança

As skills estão instaladas para leitura, mas continuam sendo conteúdo externo. Antes de aplicar uma skill, o agente deve ler seu `SKILL.md`, conferir as ferramentas e ações solicitadas e respeitar `AGENTS.md`. Instalação não autoriza rede, credenciais, publicação, exclusão, execução de comandos ou outras mudanças externas. A skill `superpowers/subagent-driven-development` contém três scripts Bash revisados e armazenados, mas nenhum deles pode ser executado automaticamente.

## Itens não importados

Ficaram de fora skills com scripts ou executáveis ainda não revisados, repositórios sem licença clara, plugins que exigem runtime próprio e projetos que não são habilidades de agente. Consulte a [lista de itens bloqueados](BLOCKED.md); eles permanecem no catálogo como `reference-only` até revisão específica.

Dez skills receberam adaptação mínima de front matter para o padrão validado; nenhuma instrução operacional foi modificada. As diferenças estão listadas em `SOURCES.json`.
