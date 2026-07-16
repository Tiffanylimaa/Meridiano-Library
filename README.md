# Meridiano Library

Biblioteca pública e reutilizável de agentes de IA, prompts, workflows, templates, guias, exemplos e adaptações para Codex, Claude Code e ChatGPT.

Os recursos serão adicionados gradualmente. Consulte o [catálogo central](CATALOG.md) para acompanhar o conteúdo disponível e seu status.

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
| [`agents/`](agents/README.md) | Papéis persistentes de agentes, com objetivos, limites e processos. |
| [`prompts/`](prompts/README.md) | Instruções para tarefas pontuais com entradas e saídas definidas. |
| [`workflows/`](workflows/README.md) | Processos de várias etapas, incluindo aprovações e validação. |
| [`platforms/`](platforms/README.md) | Adaptações específicas para Codex, Claude Code ou ChatGPT. |
| [`templates/`](templates/README.md) | Modelos oficiais para criar e documentar recursos. |
| [`guides/`](guides/README.md) | Guias de adoção, uso e manutenção. |
| [`examples/`](examples/README.md) | Exemplos exclusivamente fictícios ou anonimizados. |
| [`archive/`](archive/README.md) | Recursos descontinuados e seu histórico de substituição. |

## Como usar

1. Consulte o [CATALOG.md](CATALOG.md) para localizar um recurso.
2. Leia o README da pasta correspondente.
3. Copie o recurso para seu contexto ou adapte-o sem inserir informações privadas neste repositório.
4. Ao contribuir, comece pelo modelo adequado em [`templates/`](templates/README.md).
5. Valide links e exemplos e atualize o catálogo no mesmo commit.

## Convenções

- Idioma padrão: português do Brasil.
- Formato: Markdown, com caminhos e links relativos.
- Arquivos: nomes em minúsculas, separados por hífens.
- Organização: um recurso principal por arquivo, na pasta que representa sua função.
- Versões: use o histórico do Git; não crie nomes como `final-v2`.
- Plataformas: mantenha o conteúdo comum no recurso principal e registre apenas diferenças reais em `platforms/`.
- Catálogo: toda criação, movimentação, descontinuação ou arquivamento exige atualização do [CATALOG.md](CATALOG.md) no mesmo commit.

Leia também as regras para agentes em [AGENTS.md](AGENTS.md) e as práticas de segurança em [SECURITY.md](SECURITY.md).
