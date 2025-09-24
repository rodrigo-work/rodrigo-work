import { readFile, stat, writeFile } from 'node:fs/promises'
import { getCloudinaryImages } from './cloudinaryService'
import { getImagesFilePath } from './utils'

async function fileExists(filePath: string): Promise<boolean> {
  try {
    const stats = await stat(filePath)
    return stats.isFile()
  } catch {
    return false
  }
}

export async function loadOrInitializeImageFile() {
  const filePath = getImagesFilePath()

  if (!(await fileExists(filePath))) {
    const images = await getCloudinaryImages()
    const content = { images }
    await writeFile(filePath, JSON.stringify(content, null, 2), 'utf-8')
    console.warn('Arquivo images.json criado.')
  } else {
    console.warn('Arquivo images.json já existia.')
  }

  const raw = await readFile(filePath, 'utf-8')
  // biome-ignore lint/suspicious/noExplicitAny: No explicit any
  const parsed = JSON.parse(raw) as { images: any[] }
  return parsed.images
}
