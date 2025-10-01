import { randomBytes } from 'node:crypto'
import { writeFile } from 'node:fs/promises'
import { log, note, outro, spinner } from '@clack/prompts'
import pc from 'picocolors'

const randomHex = (nBytes = 32) =>
  new Promise<string>((resolve, reject) => {
    randomBytes(nBytes, (err, buf) => {
      if (err) return reject(err)
      resolve(buf.toString('hex'))
    })
  })

export const secret = async () => {
  try {
    const s = spinner({ indicator: 'dots' })

    s.start(`Generating secret key...`)
    await new Promise((r) => setTimeout(r, 2000))
    const secretKey = await randomHex()

    s.message('Saving secret key...')
    await new Promise((r) => setTimeout(r, 2000))

    const data = `SECRET_KEY=${secretKey}`
    await writeFile('.env.example', data, 'utf-8')

    s.stop('Done!')

    const nextSteps = `${pc.bold('SECRET_KEY')}\n${pc.green(secretKey)}`
    note(nextSteps, 'Next steps.')

    outro(`Problems? ${pc.underline(pc.cyan('https://rodrigo.work/docs/cli#generate'))}`)
  } catch (error) {
    const message =
      error instanceof Error ? error.message : `Failed to initialize project: ${error}`

    log.error(message)
    process.exit(0)
  }
}
