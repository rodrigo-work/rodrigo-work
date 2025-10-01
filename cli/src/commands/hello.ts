import type { Command } from 'commander'

export default (program: Command) => {
  program
    .command('hello')
    .description('Diz olá')
    .option('-n, --name <name>', 'Seu nome', 'mundo')
    .action((options) => {
      console.log(`👋 Olá, ${options.name}!`)
    })
}
