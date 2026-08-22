# Guia de Versionamento & Estratégia Git — Apneia na Prática

Este repositório adota o padrão de **Versionamento Semântico 2.0.0 (SemVer)** e uma estratégia de branches otimizada para colaboração contínua entre desenvolvedores humanos e **agentes autônomos de IA**.

---

## 1. Padrão SemVer (`MAJOR.MINOR.PATCH`)

As versões do projeto seguem a sintaxe `vX.Y.Z`:

- **MAJOR (`X.0.0`)**: 
  - Mudanças arquiteturais ou de stack (ex.: migração de framework).
  - Remodelação completa do funil ou lançamento de uma nova oferta principal.
  - Mudanças que quebram contratos de API ou URLs de publicação.
- **MINOR (`0.Y.0`)**:
  - Adição de novas dobras/seções à Landing Page (ex.: inclusão de seção de FAQ, depoimentos adicionais validados).
  - Integração de novos recursos de tracking, analytics ou ferramentas de checkout.
  - Grandes melhorias em componentes visuais existentes sem quebra de compatibilidade.
- **PATCH (`0.0.Z`)**:
  - Ajustes finos de copy e correções ortográficas.
  - Correção de bugs de CSS, alinhamento ou responsividade mobile.
  - Atualização de dependências ou correções de segurança.

---

## 2. Estratégia de Branches (Git Flow com Suporte a IA)

| Branch | Propósito | Regra de Merge |
|---|---|---|
| `main` | Código em produção e releases oficiais. | Apenas via Pull Request com CI aprovado. |
| `develop` (opcional) | Linha de integração para o próximo ciclo de release. | Base para novas features. |
| `agent/<agent>-<tarefa>` | Branches criadas por Agentes de IA para execução de tarefas. | PR revisado com checklist. |
| `feature/<nome>` | Novas funcionalidades criadas por humanos ou times mistos. | PR para `main`/`develop`. |
| `hotfix/<nome>` | Correções emergenciais em produção. | Merge direto em `main` com bump de PATCH. |

### Exemplos de Branches de Agentes:
- `agent/frontend-hero-redesign`
- `agent/copy-update-guarantee-text`
- `agent/qa-accessibility-fixes`
- `agent/seo-schema-org-integration`

---

## 3. Padrão de Mensagens de Commit (Conventional Commits)

Todos os commits devem seguir a convenção:

```text
<tipo>(<escopo>): <descrição no imperativo e em minúsculas>

[corpo opcional detalhando o motivo da mudança]

[rodapé opcional com referências a issues ou breaking changes]
```

### Tipos Permitidos:
- `feat`: Nova funcionalidade ou nova seção de página.
- `fix`: Correção de bug visual, script quebrado ou erro de layout.
- `docs`: Alterações exclusivamente em arquivos de documentação (`docs/`, `README.md`, etc.).
- `style`: Formatação, espaçamento ou ajustes de CSS que não alteram lógica de negócio.
- `refactor`: Refatoração de código Astro/JS/CSS sem mudança visual ou de comportamento.
- `perf`: Melhoria de performance (Core Web Vitals, otimização de imagens).
- `chore`: Atualização de dependências, configurações de build ou versionamento (`chore(release): v1.0.0`).

---

## 4. Procedimento de Lançamento de Release (Checklist)

Ao fechar um ciclo de versão:

1. Executar a suíte de validação: `npm run build`.
2. Atualizar o `"version"` no `package.json`.
3. Registrar as mudanças no `CHANGELOG.md` na seção da respectiva versão.
4. Fazer commit de lançamento: `git commit -m "chore(release): v1.0.0"`.
5. Criar tag anotada: `git tag -a v1.0.0 -m "Release v1.0.0 — Apneia na Prática"`.
6. Enviar para o repositório remoto: `git push origin main --tags`.
7. Criar a Release no GitHub com as notas do changelog.
