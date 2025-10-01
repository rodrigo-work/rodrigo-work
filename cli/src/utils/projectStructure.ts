import * as fs from 'node:fs'
import * as path from 'node:path'
import { tempDirName } from '@/constants'

const projectConfig = {
  path: '.rodrigo-work',
  folders: ['config', '.tmp', 'favicons'],
  files: ['README.md']
}

export const startProjectStructure = async (): Promise<void> => {
  const { path: ss, folders = [], files = [] } = projectConfig

  const basePath = tempDirName

  // Cria o diretório base, se necessário
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true })
    // console.log(`📁 Diretório criado: ${basePath}`)
  } else {
    // console.log(`✅ Diretório já existe: ${basePath}`)
  }

  // Cria subpastas
  for (const folder of folders) {
    const folderPath = path.join(basePath, folder)
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true })
      // console.log(`📁 Pasta criada: ${folderPath}`)
    }
  }

  // Cria arquivos vazios
  for (const file of files) {
    const filePath = path.join(basePath, file)
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '')
      // console.log(`📄 Arquivo criado: ${filePath}`)
    }
  }
}
