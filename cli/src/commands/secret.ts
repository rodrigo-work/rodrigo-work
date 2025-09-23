import { intro, log, outro, spinner } from '@clack/prompts'
import picocolors from 'picocolors'

const configEnvFiles = async () => {
  const branch = 'develop'

  const command = [
    `git clone --filter=blob:none --no-checkout git@github.com:rodrigo-work/rodrigo-work.git ${cloneDir} &&`,
    `cd ${cloneDir} &&`,
    `git checkout ${branch} &&`,
    'git sparse-checkout init --no-cone &&',
    `git sparse-checkout set ${name} &&`,
    `git config core.sparseCheckout true`
  ]

  await exec(command.join(' '), execSyncOpts)
}

function generateRandomBase64({ url = false, size = 32 }: { url?: boolean; size?: number } = {}) {
  const bytes = crypto.getRandomValues(new Uint8Array(size))
  return Buffer.from(bytes).toString(`${url ? 'base64url' : 'base64'}`)
}

export const secret = async ({ options }: { options: { copy?: boolean; raw?: boolean } }) => {
  try {
    const cwd = process.cwd()
    const token = generateRandomBase64({ url: false, size: 32 })

    intro(
      picocolors.bold(picocolors.green(picocolors.italic('Bem vindo, ao CLI do rodrigo.work! 🚀')))
    )

    // const getProject = options.name || (await getPackages())

    // if (!existingPackages.find((item) => item === getProject)) {
    //   log.error(`App "${getProject}" não encontrado.`)
    //   outro('Para mais informações, acesse: https://rodrigo.work/docs/cli')
    //   process.exit(0)
    // }

    const s = spinner({ indicator: 'dots' })

    s.start(`Preparing to download from ${cwd}...`)
    await new Promise((r) => setTimeout(r, 1000))

    if (options.copy === true) {
      log.info(`\n${picocolors.bold(`Secret Key:\n${picocolors.green(token)}`)}\n`)
    }

    if (options.raw === true) {
      log.info(`\n${picocolors.bold(`Secret Key:\n${picocolors.green(token)}`)}\n`)
    }

    // s.message(picocolors.green('Creating temporary directory...'))
    // await new Promise((r) => setTimeout(r, 3000))
    // await createTemporaryDirectory(tempDirName)

    // s.message(picocolors.green(`Adicionando o pacote ${getProject}...`))
    // await new Promise((r) => setTimeout(r, 3000))
    // await cloneRodrigoWorkPackage({ name: getProject, cloneDir: tempDirName })

    // s.message(`Movendo o pacote...`)
    // await new Promise((r) => setTimeout(r, 3000))
    // await rename(`${tempDirName}/${getProject}`, getProject.replace(/^(apps\/|packages\/)/, ''))

    // s.message(`Removendo diretório temporário...`)
    // await new Promise((r) => setTimeout(r, 3000))
    // await rm(tempDirName, { recursive: true, force: true })

    s.stop('Projeto adicionado com sucesso!')

    outro('Para mais informações, acesse: https://rodrigo.work/docs/cli')
  } catch (error) {
    const message =
      error instanceof Error ? error.message : `Failed to initialize project: ${error}`

    log.error(message)
    process.exit(1)
  }
}
