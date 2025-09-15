import { cancel, intro, isCancel, log, outro, select, spinner } from '@clack/prompts'
import { mkdir, rename, rm } from 'node:fs/promises'
import picocolors from 'picocolors'
import {
  exec,
  execSyncOpts,
  existingPackages,
  getExistingPackages,
  tempDirName
} from '../../lib/utils.js'

type cloneRodrigoWorkPackageProps = {
  name: string
  cloneDir: string
}

const cloneRodrigoWorkPackage = async ({ name, cloneDir }: cloneRodrigoWorkPackageProps) => {
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

const createTemporaryDirectory = async (tempDir: string) => {
  await rm(tempDir, { recursive: true, force: true })
  await mkdir(tempDir, { recursive: true })
}

export const getPackages = async () => {
  const value = await select({
    message: 'Selecione o pacote que deseja adicionar:',
    options: existingPackages.map((choice) => ({
      value: choice,
      label: choice
    })),
    initialValue: 'packages/about'
  })
  if (isCancel(value)) {
    cancel('Operação cancelada.')
    process.exit(0)
  }
  return value as string
}

export const init = async (options: { name?: string }) => {
  try {
    const cwd = process.cwd()

    intro(
      picocolors.bold(picocolors.green(picocolors.italic('Bem vindo, ao CLI do rodrigo.work! 🚀')))
    )
    await getExistingPackages()

    const getProject = options.name || (await getPackages())

    if (!existingPackages.find((item) => item === getProject)) {
      log.error(`App "${getProject}" não encontrado.`)
      outro('Para mais informações, acesse: https://rodrigo.work/docs/cli')
      process.exit(0)
    }

    const s = spinner({ indicator: 'dots' })

    s.start(`Preparing to download from ${getProject}...`)
    await new Promise((r) => setTimeout(r, 3000))

    s.message(picocolors.green('Creating temporary directory...'))
    await new Promise((r) => setTimeout(r, 3000))
    await createTemporaryDirectory(tempDirName)

    s.message(picocolors.green(`Adicionando o pacote ${getProject}...`))
    await new Promise((r) => setTimeout(r, 3000))
    await cloneRodrigoWorkPackage({ name: getProject, cloneDir: tempDirName })

    s.message(`Movendo o pacote...`)
    await new Promise((r) => setTimeout(r, 3000))
    await rename(`${tempDirName}/${getProject}`, getProject.replace(/^(apps\/|packages\/)/, ''))

    s.message(`Removendo diretório temporário...`)
    await new Promise((r) => setTimeout(r, 3000))
    await rm(tempDirName, { recursive: true, force: true })

    s.stop('Projeto adicionado com sucesso!')

    outro('Para mais informações, acesse: https://rodrigo.work/docs/cli')
  } catch (error) {
    const message =
      error instanceof Error ? error.message : `Failed to initialize project: ${error}`

    log.error(message)
    process.exit(1)
  }
}
