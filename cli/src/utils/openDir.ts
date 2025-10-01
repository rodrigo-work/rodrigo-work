import { exec } from 'node:child_process'

export function openDir(dirPath?: string) {
  if (!dirPath) dirPath = process.cwd()
  const command =
    process.platform === 'win32'
      ? `start "" "${dirPath}"`
      : process.platform === 'darwin'
        ? `open "${dirPath}"`
        : `xdg-open "${dirPath}"`

  exec(command, (err) => {
    if (err) console.error('Erro ao abrir diretório:', err)
  })
}
