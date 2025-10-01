# Rodrigo.work CLI
<!-- https://github.com/liduchuan/cron/blob/main/PUBLISH.md -->
**CLI utilitário para importação seletiva de pacotes de um monorepo Git via `sparse-checkout`.**

Projetado para ambientes modulares e monorepos, este CLI executa operações precisas e eficientes de clonagem parcial, evitando a cópia completa do repositório. Ideal para automações, scaffolding de projetos e pipelines.

---

## 🧩 Objetivo

- Reduzir o custo de clone de repositórios grandes
- Importar pacotes isolados (ex: `packages/cli`) de forma segmentada
- Automatizar o fluxo de scaffolding em ambientes de desenvolvimento ou CI/CD
- Eliminar código boilerplate para integração modular

---

## ⚙️ Arquitetura e Fluxo de Execução

### 🔁 Passo a passo

1. Verificação do pacote a ser clonado
2. Criação de um diretório temporário
3. Execução de `git sparse-checkout` com `blob:none` (sem blobs)
4. Checkout da branch de desenvolvimento (hardcoded: `develop`)
5. Movimentação do pacote para o diretório atual
6. Exclusão do diretório temporário
7. Feedback visual no terminal

### 🧠 Internamente:

- **Node.js** com `fs/promises`, `child_process`, e `path`
- Git CLI: `clone`, `checkout`, `sparse-checkout`, `config`
- Interface via [`@clack/prompts`](https://github.com/natemoo-re/clack)
- Projeto escrito em **TypeScript**, tipado de ponta a ponta

---

## 📦 Estrutura Esperada do Repositório Remoto

O repositório de origem deve possuir estrutura modular padrão de monorepo:

## 📦 Visão Geral

- Seleção interativa de pacotes disponíveis (`packages/*`)
- Clonagem inteligente com `--filter=blob:none` e sparse-checkout
- Operações atômicas: clone, move e limpeza
- Evita o clone completo do repositório
- Interfaces limpas via `@clack/prompts`
- Estrutura pensada para automação, escalabilidade e CI/CD

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) v16 ou superior
- [Git](https://git-scm.com/) v2.25+
- Acesso ao repositório Git via SSH (`git@github.com:<org>/<repo>.git`)

---

## 🚀 Instalação e Uso

### Interativo (default)

```bash
npx @rodrigo.work/cli
```
