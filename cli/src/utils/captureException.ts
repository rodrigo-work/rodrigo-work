import { log } from '@clack/prompts'
import type { Command } from 'commander'
import pc from 'picocolors'

export const captureException = async (error: unknown, program?: Command): Promise<void> => {
  if (error instanceof Error) {
    // biome-ignore lint/suspicious/noExplicitAny: No explicit any
    const code = (error as any).code

    switch (code) {
      case 'commander.unknownCommand': {
        if (program) program.outputHelp()

        const input = error.message.match(/'(.+)'/)?.[1] || 'command not found'
        log.warn(pc.italic(pc.dim(`[Error]: Comando "${input}" não encontrado`)))
        break
      }

      case 'commander.unknownOption':
        console.error(pc.bgRed(pc.white(`\n  ❌ Erro: Opção desconhecida → ${error.message}\n`)))
        break

      case 'commander.invalidOptionArgument':
        console.error(pc.bgYellow(pc.black(`\n  ❌ Erro: Argumento inválido → ${error.message}\n`)))
        if (program) program.outputHelp()
        break

      // default:
      // console.error(pc.red(`\n[Erro] ${error.message}\n`))
    }
  } else {
    console.error(pc.red(`\n[Erro inesperado] ${String(error)}\n`))
  }

  process.exit(0)
}
