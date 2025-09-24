import path from 'node:path'
import { fileURLToPath } from 'node:url'

export function getImagesFilePath(): string {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  return path.resolve(__dirname, '..', '..', 'screenshot', 'images.json')
}

export function strToHash(str: string): string {
  return Buffer.from(str).toString('base64url')
}

export function hashToStr(hash: string): string {
  return Buffer.from(hash, 'base64url').toString()
}

export function calculateDaysDifference(dateString: string): number {
  const today = new Date() // Data atual
  const targetDate = new Date(dateString) // Data fornecida

  // Zerando a hora da data atual e da data fornecida para comparar apenas as datas
  today.setHours(0, 0, 0, 0)
  targetDate.setHours(0, 0, 0, 0)

  // Calculando a diferença em milissegundos
  const differenceInMilliseconds = today.getTime() - targetDate.getTime()

  // Convertendo a diferença de milissegundos para dias
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 3600 * 24))

  return differenceInDays
}

const units = ['B', 'KB', 'MB', 'GB', 'TB']

export function convertBytes(bytes: number): string {
  const index = Math.floor(Math.log(bytes) / Math.log(1024)) // Calculate the index for the unit
  const size = (bytes / 1024 ** index).toFixed(2) // Convert bytes to the appropriate unit
  return `${size} ${units[index]}`
}
