# Agente genérico

Um cliente de IA compatível com leitura de arquivos pode usar o Meridiano Library mesmo sem integração nativa.

## Protocolo mínimo

1. Ler `ai-resources.json` na raiz.
2. Carregar o arquivo indicado em `instructions`.
3. Ler `.agents/skills/use-meridiano-library/SKILL.md`.
4. Selecionar um item em `CATALOG.md`.
5. Aplicar a política `trust_policy` antes de buscar ou executar conteúdo.

Se o cliente não consegue ler arquivos do repositório, forneça manualmente o guia, a skill e o recurso selecionado no contexto da conversa.
