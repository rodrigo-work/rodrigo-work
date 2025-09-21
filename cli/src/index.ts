#!/usr/bin/env node

/** biome-ignore-all lint/suspicious/noExplicitAny: No explicit any */

import { program } from 'commander'
import packageJson from '../package.json' with { type: "json" }
import { add } from './add.js'
import { init } from './commands/init.js'

program.exitOverride()

program.configureOutput({
  outputError: () => {}
})

program
  .command('add')
  .description('Adiciona um pacote ao projeto')
  .option('-n, --name <name>', 'Nome do app a ser adicionado')
  .action((options) => {
    add({ name: options.name })
  })

program
  .command('init')
  .description('Inicializa um novo projeto')
  .version(packageJson.version)
  .option('-n, --name <name>', 'Nome do app a ser adicionado')
  .action((options) => {
    init({ name: options.name })
  })

try {
  program.parse(process.argv)
} catch (err: any) {
  switch (err.code) {
    case 'commander.unknownOption':
      console.error(`\nErro: opção desconhecida. \t${JSON.stringify(err)}`)
      program.outputHelp()
      break

    case 'commander.unknownCommand':
      console.error(`\nErro: comando desconhecido: \t${JSON.stringify(err)}`)
      program.outputHelp()
      break

    case 'commander.invalidOptionArgument':
      console.error(`\nErro: argumento inválido.\t${JSON.stringify(err)}`)
      program.outputHelp()
      break

    case 'commander.optionMissingArgument':
      console.error(`\nErro: argumento da opção inválido.\t${JSON.stringify(err)}`)
      program.outputHelp()
      break

    default:
      process.exit(0)
    // console.error(`\nErro desconhecido: \t${JSON.stringify(err)}`)
  }

  process.exit(0)
}
