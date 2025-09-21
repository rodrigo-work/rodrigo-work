/** biome-ignore-all lint/suspicious/noExplicitAny: No explicit any */

import { log } from '@clack/prompts'
import { type ExecSyncOptions, exec as execRaw } from 'node:child_process'
import { readFile, writeFile } from 'node:fs/promises'
import { promisify } from 'node:util'
import picocolors from 'picocolors'

export const url = 'https://github.com/rodrigo-work/rodrigo-work'

export const tempDirName = `.rodrigo-work`

export let existingPackages: string[] = []
export const existingPackagesFile = './existing-projects.json'

export const execSyncOpts: ExecSyncOptions = { stdio: 'ignore' }

export const exec = promisify(execRaw)

const BRANCH = 'develop'

// const baseUrl = 'http://localhost:3000/api/fake'
const baseUrl = `https://api.github.com/repos/rodrigo-work/rodrigo-work/contents`

export const getFetch = async (path: string) => {
  try {
    const url = `${baseUrl}/${path}?ref=${BRANCH}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
      throw new Error(`Error parsing existing packages: ${JSON.stringify(data)}`)
    }

    return data
  } catch (error) {
    console.error('Error fetching existing packages: ', error)
    return []
  }
}

export const getExistingPackages = async () => {
  try {
    const fileContent = await readFile(existingPackagesFile, 'utf-8')

    if (fileContent) {
      existingPackages = JSON.parse(fileContent)
      return existingPackages
    }
  } catch {
    log.info(picocolors.red(`${existingPackagesFile} not found, fetching existing packages...`))
  }

  try {
    let apps = (await getFetch('apps')) as any
    let packages = (await getFetch('packages')) as any

    apps = apps.filter((item: any) => item.type === 'dir').map((item: any) => item.path)

    packages = packages.filter((item: any) => item.type === 'dir').map((item: any) => item.path)

    existingPackages = [...apps, ...packages]
    await writeFile(existingPackagesFile, JSON.stringify(existingPackages, null, 2), 'utf-8')

    return existingPackages
  } catch (error) {
    console.error('Error fetching existing packages: ', error)
    return []
  }
}
