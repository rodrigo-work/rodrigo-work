#!/usr/bin/env node

/** biome-ignore-all lint/suspicious/noExplicitAny: No explicit any */

import { Command } from 'commander'
import { default as pc, default as picocolors } from 'picocolors'
import packageJson from '../package.json' with { type: 'json' }
import { add } from './add.js'
import { init, secret } from './commands/index.js'

const program = new Command()

// program.command('help', { hidden: true })

const { name, description, version } = packageJson

program.exitOverride()

program.configureOutput({
  outputError: () => {}
})

program
  .name(name)
  .usage('[command] [options]')
  .description(
    description.replace('rodrigo.work', picocolors.magenta(picocolors.bold('rodrigo.work')))
  )
  .version(version, '-v, --version', pc.cyan('Mostra a versão do CLI 📘'))
  .helpOption('-h, --help', pc.cyan('Mostra ajuda personalizada da CLI 📘'))

program
  .command('add')
  .description('Adiciona um pacote ao projeto')
  .option('-n, --name <name>', 'Nome do app a ser adicionado')
  .action(async (options) => {
    await add({ name: options.name })
  })

program
  .command('init')
  .description('Inicializa um novo projeto')
  .option('-n, --name <name>', 'Nome do app a ser adicionado')
  .action(async (options) => {
    await init({ name: options.name })
  })

program
  .command('secret')
  .usage(picocolors.bold('[raw|copy]'))
  .arguments('[raw|copy]')
  .description(pc.magenta('Gera uma string aleatória e adiciona no .env'))
  // .summary(pc.magenta('Gera uma string aleatória e adiciona no .env'))
  .helpOption('-h, --help', pc.magenta('Mostra ajuda personalizada da CLI 📘'))
  .action(async (args) => {
    if (!args || (args !== 'raw' && args !== 'copy')) {
      program.outputHelp()
      // console.error(pc.red('Opção inválida! Use "raw" ou "copy".'))
      process.exit(0)
    }

    // Monta o objeto options esperado pela função secret
    const options = {
      raw: args === 'raw',
      copy: args === 'copy'
    }

    await secret({ options })
  })

program.configureHelp({
  // Customiza a linha de uso
  // commandUsage: (cmd) => `${pc.bold('Uso:')} rodrigo ${cmd.name()} ${pc.dim('[opções]')}`,

  // Muda cor das opções
  optionTerm: (option) => pc.yellow(option.flags),

  // Muda cor dos argumentos
  argumentTerm: (arg) => pc.magenta(arg.name())

  // Muda como os comandos aparecem
  // subcommandTerm: (cmd) => pc.blue(cmd.name())

  // Substitui a seção "Commands:"
})

// program.addHelpText('beforeAll', beforeAllHelp)
// program.addHelpText('afterAll', afterAllHelp)

try {
  program.parse(process.argv)
} catch (err: any) {
  // console.log(JSON.stringify(err))
  switch (err.code) {
    case 'commander.unknownOption':
      program.outputHelp()
      console.error(
        picocolors.bgCyanBright(
          picocolors.bold(`\nErro: opção desconhecida. \t$JSON.stringify(err)`)
        )
      )
      break

    case 'commander.unknownCommand':
      console.error(`\nErro: comando desconhecido: \t$JSON.stringify(err)`)
      program.outputHelp()
      break

    case 'commander.invalidOptionArgument':
      console.error(`\nErro: argumento inválido.\t$JSON.stringify(err)`)
      program.outputHelp()
      break

    case 'commander.optionMissingArgument':
      console.error(`\nErro: argumento da opção inválido.\t$JSON.stringify(err)`)
      program.outputHelp()
      break

    default:
      process.exit(0)
    // console.error(`\nErro desconhecido: \t$JSON.stringify(err)`)
  }

  process.exit(0)
}
