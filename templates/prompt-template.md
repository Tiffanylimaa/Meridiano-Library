---
title: Nome do prompt
slug: nome-do-prompt
type: prompt
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

# Nome do prompt

## Objetivo

Explique a tarefa e o resultado esperado.

## Quando usar

Descreva os cenários adequados e as principais limitações.

## Entradas

- `{{entrada_obrigatoria}}`: descrição e formato.
- `{{entrada_opcional}}`: descrição, formato e valor padrão.

## Prompt completo

```text
Execute a tarefa descrita em {{entrada_obrigatoria}}.

Considere também {{entrada_opcional}} quando esse valor estiver disponível.
Use apenas as informações fornecidas, sinalize lacunas relevantes e siga o formato de saída definido abaixo.
```

## Formato de saída

Defina seções, campos, extensão, tom e critérios de qualidade.

## Checklist

- [ ] Todas as entradas obrigatórias foram fornecidas.
- [ ] A saída segue o formato solicitado.
- [ ] Afirmações e exemplos foram verificados.
- [ ] Nenhum dado pessoal, confidencial ou credencial foi incluído.

## Exemplo fictício

**Entradas:** `{{entrada_obrigatoria}} = "resumir um manual fictício"`.

**Saída:** resumo curto construído somente com informações inventadas.
