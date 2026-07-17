# Meridiano Library

Biblioteca pública e reutilizável de agentes de IA, prompts, workflows, skills, templates, guias, exemplos e adaptações para Codex, Claude Code e ChatGPT.

Os recursos serão adicionados gradualmente. Consulte o [catálogo central](CATALOG.md) para acompanhar o conteúdo disponível e seu status.

Agentes de IA podem começar pelo manifesto [`ai-resources.json`](ai-resources.json) e pela skill portátil [`use-meridiano-library`](.agents/skills/use-meridiano-library/SKILL.md). Consulte o [guia de uso por agentes](guides/uso-por-agentes-de-ia.md) para Codex, Claude Code, ChatGPT e clientes genéricos.

## O que pertence à biblioteca

- recursos genéricos, reutilizáveis e seguros para publicação;
- instruções operacionais para agentes e tarefas de IA;
- processos documentados com validações e aprovações humanas;
- modelos reutilizáveis, guias e exemplos fictícios ou anonimizados;
- adaptações necessárias para diferenças reais entre plataformas.

## O que não pode ser publicado

Não publique dados pessoais, contexto acadêmico individual, processos profissionais ou empresariais internos, documentos privados, informações confidenciais, credenciais, tokens, chaves de API ou URLs privadas. Conteúdo particular deve permanecer em um repositório privado de contexto; credenciais não devem ser armazenadas em repositório algum. Consulte [SECURITY.md](SECURITY.md).

## Estrutura

| Caminho | Finalidade |
| --- | --- |
| [`.agents/skills/`](.agents/skills/use-meridiano-library/SKILL.md) | Skills no padrão aberto, descobertas automaticamente pelo Codex e carregáveis por outros agentes. |
| [`agents/`](agents/README.md) | Papéis persistentes de agentes, com objetivos, limites e processos. |
| [`prompts/`](prompts/README.md) | Instruções para tarefas pontuais com entradas e saídas definidas. |
| [`workflows/`](workflows/README.md) | Processos de várias etapas, incluindo aprovações e validação. |
| [`skills/`](skills/README.md) | Skills próprias com instruções e recursos auxiliares reutilizáveis. |
| [`platforms/`](platforms/README.md) | Adaptações específicas para Codex, Claude Code ou ChatGPT. |
| [`templates/`](templates/README.md) | Modelos oficiais para criar e documentar recursos. |
| [`guides/`](guides/README.md) | Guias de adoção, uso e manutenção. |
| [`examples/`](examples/README.md) | Exemplos exclusivamente fictícios ou anonimizados. |
| [`third-party/`](third-party/README.md) | Curadoria separada de recursos externos, com procedência, licença e revisão. |
| [`archive/`](archive/README.md) | Recursos descontinuados e seu histórico de substituição. |

## Recursos próprios e de terceiros

Recursos próprios ou adaptados pela responsável pelo repositório ficam nas pastas principais, incluindo [`skills/`](skills/README.md), e são registrados no [catálogo central](CATALOG.md). Recursos externos permanecem separados em [`third-party/`](third-party/README.md) e usam um [catálogo específico](third-party/CATALOG.md).

Antes de usar um recurso externo, confira autoria, fonte, licença, tipo de registro e status de revisão. Um link público não garante permissão para copiar ou redistribuir o conteúdo, e materiais não revisados devem ser tratados como não confiáveis.

## Como usar

1. Consulte o [CATALOG.md](CATALOG.md) para localizar um recurso.
2. Leia o README da pasta correspondente.
3. Confirme a origem do recurso; para materiais externos, consulte também o [catálogo de terceiros](third-party/CATALOG.md).
4. Copie o recurso para seu contexto ou adapte-o sem inserir informações privadas neste repositório.
5. Ao contribuir, comece pelo modelo adequado em [`templates/`](templates/README.md).
6. Valide links e exemplos e atualize o catálogo no mesmo commit.

Para uso por uma IA, forneça acesso ao repositório e peça que leia `AGENTS.md`, `ai-resources.json` e a skill `use-meridiano-library`. Referências `third-party` continuam indisponíveis para execução até revisão e aprovação.

## Convenções

- Idioma padrão: português do Brasil.
- Formato: Markdown, com caminhos e links relativos.
- Arquivos: nomes em minúsculas, separados por hífens.
- Organização: um recurso principal por arquivo, na pasta que representa sua função.
- Versões: use o histórico do Git; não crie nomes como `final-v2`.
- Plataformas: mantenha o conteúdo comum no recurso principal e registre apenas diferenças reais em `platforms/`.
- Catálogo: toda criação, movimentação, descontinuação ou arquivamento exige atualização do [CATALOG.md](CATALOG.md) no mesmo commit.

Leia também as regras para agentes em [AGENTS.md](AGENTS.md) e as práticas de segurança em [SECURITY.md](SECURITY.md).
