import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { log, note, outro, spinner } from '@clack/prompts'
import pc from 'picocolors'
import { exec, execSyncOpts, tempDirName } from '@/constants'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
const cwd = process.cwd()

const generateFavicons = async ({ image }: { image: string }) => {
  const command = [
    `npx realfavicon generate`,
    `${join(cwd, image)}`,
    `${join(cwd, 'src', 'commands', 'generate', 'data', 'favicon-settings.json')}`,
    `${join(cwd, tempDirName, '.tmp', 'output-data.json')}`,
    `${join(cwd, tempDirName, 'favicons')}`
  ]

  await exec(command.join(' '), execSyncOpts)
}

export const favicons = async () => {
  try {
    const s = spinner({ indicator: 'dots' })

    s.start(`Initializing...`)
    await new Promise((r) => setTimeout(r, 2000))

    s.message('Generating favicons...')
    await new Promise((r) => setTimeout(r, 2000))
    await generateFavicons({ image: 'logo.svg' })

    s.message('Finalizing...')
    await new Promise((r) => setTimeout(r, 2000))
    const files = await readdir(join(cwd, tempDirName, 'favicons'))

    s.stop('Done!')

    const nextSteps = `${pc.bold('Favicons generated')}\n\n${files.join('\n')}`
    note(nextSteps, 'Next steps.')

    outro(`Problems? ${pc.underline(pc.cyan('https://rodrigo.work/docs/cli#generate'))}`)
  } catch (error) {
    const message =
      error instanceof Error ? error.message : `Failed to initialize project: ${error}`

    log.error(message)
    process.exit(0)
  }
}
