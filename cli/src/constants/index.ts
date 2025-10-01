import { type ExecSyncOptions, exec as execRaw } from 'node:child_process'
import { promisify } from 'node:util'
export const url = 'https://github.com/rodrigo-work/rodrigo-work'

export const tempDirName = `.rodrigo-work`

export const existingPackages: string[] = []
export const existingPackagesFile = './existing-projects.json'

export const execSyncOpts: ExecSyncOptions = { stdio: 'ignore' }

export const exec = promisify(execRaw)
