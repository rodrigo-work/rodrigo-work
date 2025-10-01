import { setTimeout } from 'node:timers/promises'
import * as p from '@clack/prompts'
import { cancel, isCancel, select } from '@clack/prompts'
import type { Command } from 'commander'
import pc from 'picocolors'
import { generateOptionsData } from './data/data'
import { favicons } from './favicons'
import { secret } from './secretkey'

async function generate() {
  console.clear()

  await setTimeout(500)

  p.updateSettings({
    aliases: {
      w: 'up',
      s: 'down',
      a: 'left',
      d: 'right'
    }
  })

  p.intro(`${pc.bgCyan(pc.black(' generate '))}`)

  const opts = await generateOptions()

  if (opts === 'generate-secretkey') {
    await secret()
  }

  if (opts === 'generate-favicons') {
    await favicons()
  }
}

const generateOptions = async () => {
  const value = await select({
    message: `O que você deseja gerar?`,
    options: generateOptionsData.map((choice) => ({
      label: choice.label,
      value: choice.value,
      hint: choice.hint
    })),
    maxItems: 5,
    initialValue: 'generate-favicons'
  })
  if (isCancel(value)) {
    cancel('Operação cancelada.')
    process.exit(0)
  }
  return value as string
}

export default (program: Command) => {
  program
    .command('generate')
    .description(pc.magenta('Gera uma string aleatória e adiciona no .env'))
    .helpOption('-h, --help', pc.magenta('Mostra ajuda personalizada da CLI 📘'))
    .action(async () => {
      await generate().catch(console.error)
    })
}
