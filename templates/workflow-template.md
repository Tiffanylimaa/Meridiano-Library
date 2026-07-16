---
title: Nome do workflow
slug: nome-do-workflow
type: workflow
category: general
status: draft
language: pt-BR
compatible_with:
  - codex
  - claude-code
  - chatgpt
version: 0.1.0
updated: YYYY-MM-DD
tags: []
---

# Nome do workflow

## Resultado esperado

Descreva o estado final verificável.

## Gatilho

Indique o evento ou a condição que inicia o workflow.

## Pré-requisitos

- Liste acessos, decisões e materiais necessários.

## Entradas

- `entrada`: descrição, formato, origem e obrigatoriedade.

## Etapas

1. Validar pré-requisitos e entradas.
2. Executar a primeira atividade e registrar o resultado.
3. Prosseguir somente após as aprovações aplicáveis.
4. Validar e entregar as saídas.

## Pontos de aprovação humana

- **Momento:** etapa em que a aprovação ocorre.
- **Responsável:** papel que decide.
- **Critério:** condições objetivas para aprovar ou rejeitar.

## Tratamento de erros

| Situação | Resposta | Escalonamento |
| --- | --- | --- |
| Entrada ausente ou inválida | Interromper e solicitar correção | Responsável pela entrada |
| Validação reprovada | Registrar falha e não publicar | Responsável pela aprovação |

## Validação

- [ ] Todas as etapas foram concluídas na ordem prevista.
- [ ] Aprovações humanas foram registradas.
- [ ] Links, exemplos e saídas foram verificados.
- [ ] Nenhum dado proibido foi incluído.

## Saídas

Liste cada artefato, seu formato e o destino autorizado.
