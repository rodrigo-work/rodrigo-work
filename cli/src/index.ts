#!/usr/bin/env node

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Command } from 'commander'
import { captureException, getCommandFiles } from '@/utils'
import pkg from '../package.json' with { type: 'json' }

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const program = new Command()

program
  .name(pkg.name)
  .description(pkg.description)
  .usage('[command] [options]')
  .version(pkg.version, '-v, --version', 'Mostra a versão do CLI')
  .helpOption('-h, --help', 'Mostra ajuda da CLI')

program.configureOutput({
  writeErr: (str) => {
    if (str.startsWith('error:')) {
      return
    }
    process.stderr.write(str)
  },
  outputError: (_str, _write) => {}
})

program.exitOverride((error) => {
  throw error
})

const commandsDir = path.join(__dirname, 'commands')
const files = await getCommandFiles(commandsDir)

for (const file of files) {
  const commandModule = await import(file)
  if (typeof commandModule.default === 'function') {
    commandModule.default(program)
  }
}

try {
  await program.parseAsync(process.argv)
} catch (error) {
  await captureException(error, program)
}
