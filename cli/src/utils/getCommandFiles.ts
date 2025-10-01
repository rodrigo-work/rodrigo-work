import { readdir } from 'node:fs/promises'
import path from 'node:path'

export async function getCommandFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })

  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const subFiles = await getCommandFiles(fullPath)
      files.push(...subFiles)
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.js'))) {
      files.push(fullPath)
    }
  }

  return files
}
