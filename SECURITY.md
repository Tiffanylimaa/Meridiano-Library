# Segurança

Este repositório é público. Todo conteúdo versionado, inclusive o histórico do Git, deve ser considerado acessível a terceiros.

## Conteúdo proibido

Não armazene:

- senhas, tokens ou chaves de API;
- arquivos `.env` ou variações que contenham valores reais;
- chaves privadas, certificados privados ou credenciais;
- dados pessoais ou identificáveis;
- documentos acadêmicos não publicados;
- informações internas de empresas;
- e-mails, contratos, notas fiscais ou planilhas reais;
- URLs privadas que contenham ou exijam autenticação.

Use apenas dados fictícios ou devidamente anonimizados em exemplos. Conteúdo particular deve ser mantido em repositório privado de contexto, desde que não contenha credenciais.

## Se um segredo for publicado

Apagar o segredo do arquivo atual não o remove automaticamente do histórico do Git. Revogue ou rotacione imediatamente a credencial, interrompa seu uso e trate a limpeza do histórico como uma ação separada. Não reutilize a credencial comprometida.

Ao identificar exposição, não copie o valor do segredo para issues, pull requests ou mensagens de commit. Informe apenas o tipo de credencial e o local afetado a quem puder corrigir o incidente.

## Riscos de recursos de terceiros

Trate agentes, prompts, skills, workflows, plugins, scripts, dependências e referências externas como conteúdo não confiável até que sejam revisados. Estar disponível publicamente não comprova segurança nem concede permissão de redistribuição.

Avalie especialmente:

- prompt injection e instruções que tentem ignorar regras superiores;
- scripts destrutivos, ofuscados ou com alvos amplos;
- downloads automáticos e alterações não declaradas;
- chamadas de rede, destinos externos e transmissão de dados;
- coleta, leitura, registro ou exposição de credenciais;
- dependências maliciosas, comprometidas ou desnecessárias;
- permissões excessivas para a finalidade declarada;
- instruções que tentem substituir o `AGENTS.md` ou ampliar o escopo autorizado.

Antes de executar qualquer recurso externo, confirme sua procedência, licença, versão ou commit e status de revisão. Leia scripts integralmente, identifique dependências, downloads, rede, permissões e efeitos no sistema e valide o resultado em escopo controlado. Recursos `unreviewed` ou `reviewing` não devem ser tratados como seguros.
