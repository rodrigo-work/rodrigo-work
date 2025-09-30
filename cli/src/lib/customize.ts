import pc from 'picocolors'

export const beforeAllHelp = pc.bold(
  pc.magenta(`
╭──────────────────────────────────────────────╮
│        Rodrigo.Work CLI - Ajuda Rápida       │
╰──────────────────────────────────────────────╯
`)
)

export const afterAllHelp = pc.italic(`
Exemplos:
  $ rodrigo secret --copy
  $ rodrigo secret --raw

Documentação oficial: https://rodrigo.work/docs/cli
`)
