# Skills

Esta pasta reúne skills próprias, criadas ou adaptadas pela responsável pelo Meridiano Library. Skills são pacotes reutilizáveis que podem combinar instruções, scripts, referências, templates, exemplos e arquivos auxiliares para executar uma capacidade específica.

## Tipos de recurso

| Tipo | Finalidade |
| --- | --- |
| Agente | Papel persistente com objetivo, processo e limites. |
| Prompt | Instrução para tarefa pontual. |
| Workflow | Processo com múltiplas etapas. |
| Skill | Pacote reutilizável com instruções e recursos auxiliares. |
| Plugin | Pacote mais amplo, que pode reunir skills, ferramentas, conectores e configurações. |

## Estrutura possível

```text
skills/
└── nome-da-skill/
    ├── SKILL.md
    ├── references/
    ├── scripts/
    ├── templates/
    └── examples/
```

`SKILL.md` é o arquivo principal e obrigatório de cada skill. As pastas auxiliares são opcionais e só devem ser criadas quando tiverem conteúdo necessário.

## Regras

- Declare no `SKILL.md` o objetivo, os gatilhos de uso e as situações em que a skill não deve ser usada.
- Registre as plataformas compatíveis no front matter.
- Mantenha instruções gerais na skill e diferenças reais de instalação ou estrutura em [`platforms/`](../platforms/README.md).
- Documente a finalidade de cada script, inspecione-o antes da execução e forneça uma forma segura de validar seus resultados.
- Não inclua credenciais, dados pessoais ou contexto confidencial.
- Comece pelo [template oficial de skill](../templates/skill-template.md).
- Atualize o [catálogo principal](../CATALOG.md) no mesmo commit ao criar, mover, adaptar, descontinuar ou arquivar uma skill.

Skills externas pertencem à área separada de [recursos de terceiros](../third-party/README.md).
