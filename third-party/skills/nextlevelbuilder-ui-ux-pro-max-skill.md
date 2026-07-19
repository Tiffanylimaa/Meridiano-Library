---
title: UI UX Pro Max Skill
slug: nextlevelbuilder-ui-ux-pro-max-skill
type: skill
origin: third-party
record_type: vendored-reviewed
author: nextlevelbuilder
source_url: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
source_version: "branch: main"
source_commit: f8ac5e1266dba8354ea96e19994d9f4345e7ec31
license: MIT
review_status: reviewed
reviewed_on: 2026-07-19
modified: false
compatible_with: ["Claude Code", "React + Vite + Tailwind + shadcn/ui projects"]
status: installed
tags: ["skill", "ui", "ux"]
---

# UI UX Pro Max Skill

## Descrição

Skill de inteligência de design para criação de interfaces em múltiplas plataformas.

## Motivo da inclusão

Repositório marcado com estrela e catalogado para avaliação futura, sem importar ou executar seu conteúdo.

## Fonte original

- URL: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Branch avaliada: `main`
- Data de acesso: `2026-07-17`

## Autoria

- Autor ou organização: nextlevelbuilder
- Preserve a atribuição e consulte a fonte antes de qualquer reutilização.

## Licença

Licença detectada: `MIT`. Este registro é somente uma referência. A redistribuição não foi autorizada nem revisada por esta catalogação.

## Versão ou commit avaliado

- Branch: `main`
- Commit: `f8ac5e1266dba8354ea96e19994d9f4345e7ec31`
- Data da avaliação: `2026-07-17`

## Compatibilidade

Não avaliada. Consulte a documentação original e registre testes futuros antes de alterar `compatible_with`.

## Arquivos incluídos

O repositório contém 3 skills sob `.claude/skills/`. `banner-design` e `slides` (sem scripts) já haviam sido importadas em 17/07/2026 no pacote de 137 skills. Em 19/07/2026, a skill principal `ui-ux-pro-max` foi revisada e importada também, elevando o pacote para 138 skills:

- `SKILL.md`
- `scripts/search.py`, `scripts/core.py`, `scripts/design_system.py`
- `data/*.csv` (12 arquivos de domínio: styles, colors, charts, landing, products, ux-guidelines, typography, icons, motion, react-performance, app-interface, google-fonts) + `data/ui-reasoning.csv`
- `data/stacks/*.csv` (21 arquivos: react, nextjs, vue, svelte, astro, swiftui, react-native, flutter, nuxtjs, nuxt-ui, html-tailwind, shadcn, jetpack-compose, threejs, angular, laravel, javafx, wpf, winui, avalonia, uno, uwp)
- `references/quick-reference.md`, `references/pro-rules.md`

Cópia preservada em `installed-skills/ui-ux-pro-max-skill/ui-ux-pro-max/`. A árvore completa do repositório não foi enumerada de forma exaustiva (API do GitHub e `codeload.github.com` bloqueados nesta sessão para repositórios fora do escopo); os caminhos foram confirmados individualmente via `raw.githubusercontent.com` a partir do `plugin.json` e das 3 skills já conhecidas.

## Alterações locais

Nenhuma alteração de conteúdo. `modified: false`. (As skills-irmãs `banner-design`/`slides`, importadas antes, tiveram front matter mínimo normalizado — ver `installed-skills/SOURCES.json`.)

## Revisão de segurança

- [x] Scripts foram lidos integralmente (`search.py`, `core.py`, `design_system.py`).
- [x] Não há comandos destrutivos ocultos — nenhum `subprocess`, `os.system`, `eval`, `exec`.
- [x] Não há coleta ou exposição de credenciais — nenhum acesso a variáveis de ambiente, tokens ou segredos.
- [x] Downloads e chamadas externas foram identificados — nenhum (`requests`/`urllib`/`socket` ausentes; apenas stdlib: `csv`, `re`, `pathlib`, `math`, `collections`, `json`, `os`).
- [x] Dependências foram revisadas — nenhuma dependência externa; apenas biblioteca padrão do Python 3.
- [x] Permissões solicitadas são compatíveis com a finalidade — leitura de CSVs no próprio diretório `data/`; escrita apenas com `--persist` explícito, sob o `--output-dir` informado, e não sobrescreve `MASTER.md` existente sem `--force`.
- [x] Exemplos não contêm dados pessoais.
- [x] A licença (MIT) permite o tipo de uso registrado.

Execução de fumaça realizada nesta sessão: `python3 search.py "SaaS landing page hero dark modern" --design-system -p "Test"` (sem `--persist`) — rodou sem erros e sem escrever nada fora do stdout.

## Limitações

Licença e segurança foram revisadas; compatibilidade de conteúdo (qualidade das recomendações de design) não foi avaliada com uso extensivo. O commit registrado é o ponto de origem catalogado — mudanças futuras no repositório exigem nova revisão (`needs-update`).

## Instruções de instalação ou uso

Já instalada em `installed-skills/ui-ux-pro-max-skill/ui-ux-pro-max/`. Invocar via:

```bash
python3 "installed-skills/ui-ux-pro-max-skill/ui-ux-pro-max/scripts/search.py" "<query>" --domain <domain>
python3 "installed-skills/ui-ux-pro-max-skill/ui-ux-pro-max/scripts/search.py" "<query>" --design-system -p "Nome do Projeto"
```

O caminho upstream usa `${CLAUDE_PLUGIN_ROOT}` (assume instalação como plugin ativo); ao usar a partir desta biblioteca, substitua pelo caminho local acima. Para persistir um design system em um projeto, sempre passe `--output-dir` apontando para a raiz do projeto-alvo.

## Decisão de curadoria

- **Decisão:** instalado (skill principal `ui-ux-pro-max`; `banner-design` e `slides` já estavam instaladas).
- **Justificativa:** scripts lidos integralmente, sem rede/subprocess/credenciais, licença MIT confirmada, execução de fumaça bem-sucedida. Autorizado por Tiffany em 19/07/2026 para uso no projeto O Meridiano.
- **Próxima ação:** nenhuma pendente. Reavaliar apenas se o commit de origem avançar (`needs-update`).

## Histórico de atualização

| Data | Versão ou commit | Alteração | Revisão |
| --- | --- | --- | --- |
| 2026-07-17 | `f8ac5e1266db` | Registro inicial como referência externa (`banner-design`/`slides` já importadas sem scripts) | `unreviewed` |
| 2026-07-19 | `f8ac5e1266db` | Skill `ui-ux-pro-max` revisada (scripts lidos + execução de fumaça) e importada; pacote passa de 137 para 138 skills | `reviewed` |
