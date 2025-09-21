// edit-readme.ts
import * as fs from 'fs/promises'
import * as path from 'path'

async function updateReadmePlaceholders(replacements: Record<string, string>) {
  const filePath = path.resolve(__dirname, 'README.md')

  try {
    let content = await fs.readFile(filePath, 'utf-8')

    // Substitui todos os placeholders do tipo {chave}
    for (const [key, value] of Object.entries(replacements)) {
      const regex = new RegExp(`\\{${key}\\}`, 'g')
      content = content.replace(regex, value)
    }

    await fs.writeFile(filePath, content, 'utf-8')

    console.log('✅ README.md atualizado com sucesso.')
  } catch (error) {
    console.error('❌ Erro ao atualizar o README.md:', error)
  }
}

// ✅ Chaves devem corresponder ao que está entre chaves no README.md
updateReadmePlaceholders({
  title: '@rodrigo-work/cli',
  description: 'CLI for rodrigo.work'
})
