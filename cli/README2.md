# CLI - Rodrigo Work

Este repositório contém um CLI (Command Line Interface) desenvolvido para facilitar as interações com o sistema **rodrigo.work**. O objetivo principal do CLI é permitir que os desenvolvedores interajam com a aplicação de forma eficiente e rápida através de comandos no terminal.

## Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
  - [Comandos Disponíveis](#comandos-disponíveis)
  - [Exemplos de Uso](#exemplos-de-uso)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## Visão Geral

Este projeto oferece uma interface de linha de comando (CLI) que visa simplificar a interação com as funcionalidades do sistema Rodrigo Work, permitindo que os usuários executem tarefas rapidamente via terminal, com um conjunto de comandos bem definidos.

## Pré-requisitos

Antes de instalar ou utilizar a CLI, verifique se você possui os seguintes requisitos instalados:

- **Node.js**: A CLI foi construída utilizando Node.js. Recomendamos a versão `>= 14.x.x` para garantir a compatibilidade.
- **npm**: O gerenciador de pacotes do Node.js.
- **Git**: Para clonar o repositório e gerenciar versões.

Para verificar se você tem o Node.js instalado, execute o seguinte comando no terminal:

```bash
node -v           # Verifica a versão do Node.js
```

Se o Node.js não estiver instalado, você pode baixá-lo aqui.

## Instalação

1. Clone o repositório:

    Clone o repositório do GitHub para a sua máquina local:

    ```bash
    git clone https://github.com/rodrigo-work/rodrigo-work.git
    ```

2. Instale as dependências:

    Navegue até o diretório cli e instale as dependências necessárias:

    ```bash
    cd rodrigo-work/cli

    npm install
    ```

## Uso

### Comandos Disponíveis

A CLI oferece um conjunto de comandos para realizar diversas operações. Alguns dos principais comandos incluem:

- `cli start`: Inicia a aplicação no ambiente local.
- `cli build`: Compila os arquivos para produção.
- `cli help`: Exibe informações sobre o comando ou lista todos os comandos disponíveis.

### Exemplos de Uso

1. Iniciar a aplicação no vários ambientes:

    ```bash
    npx @rodrigo-work/cli             # usando pnm

    pnpm dlx @rodrigo-work/cli        # usando pnpm
    ```

    Ao inicilizar o cli  e não enviar __comando__/__opções__ retornará o seguinte:

    ```sh
    # return
    Usage: index [options] [command]
    Options:
      -h, --help      display help for command
    Commands:
      add [options]   Adiciona um app ou package ao projeto
      help [command]  display help for command
    ```

    Este comando inicia a aplicação e retorna os aplicativos e pacotes  disponíveis no sistema [rodrigo.work](https://github.com/rodrigo-work/rodrigo-work).

2. Compilar a aplicação para produção:

    ```bash
    cli build
    ```

    Este comando realiza a compilação dos arquivos, otimizando-os para o ambiente de produção.

## Estrutura de Diretórios

A estrutura de diretórios do projeto é a seguinte:


```bash
cli/
├── bin/
│   └── cli.js              # Script de inicialização do CLI
├── commands/               # Contém os comandos principais da CLI
│   ├── start.js            # Comando para iniciar a aplicação
│   ├── build.js            # Comando para compilar a aplicação
│   ├── deploy.js           # Comando para realizar o deploy
│   └── status.js           # Comando para verificar o status
├── config/                 # Arquivos de configuração
│   └── config.json         # Configurações globais do projeto
├── package.json            # Gerenciador de dependências do projeto
└── README.md               # Este arquivo de documentação
```

## Contribuindo

Contribuições são bem-vindas! Caso queira contribuir com melhorias ou correções de bugs, siga os passos abaixo:

1. Faça um **fork** deste repositório.
2. Crie uma branch para sua feature ou correção: git checkout -b minha-feature.

Faça suas alterações e realize o commit: git commit -m 'Adicionando uma nova feature'.

Envie suas alterações para o repositório remoto: git push origin minha-feature.

Abra um pull request explicando as mudanças feitas.

Certifique-se de que suas alterações sejam compatíveis com as diretrizes do projeto, e que todos os testes necessários sejam executados antes de enviar o pull request.

## Licença

Este projeto é licenciado sob a Licença MIT
.

## Observações Finais

A CLI foi construída para ser uma ferramenta simples e eficiente, mas também extensível para futuros desenvolvimentos. Caso tenha sugestões ou precise de suporte, não hesite em abrir uma **issue** no repositório.
