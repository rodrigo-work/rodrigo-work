const { writeFile } = require('node:fs/promises')
const path = require('node:path')

// Função para ler informações do package.json
function getPackageInfo() {
  const packageJsonPath = path.resolve(__dirname, 'package.json')
  const packageJson = require(packageJsonPath)
  return {
    name: packageJson.name || 'Projeto sem nome',
    version: packageJson.version || '1.0.0',
    description: packageJson.description || 'Sem descrição fornecida.',
    dependencies: packageJson.dependencies ? Object.keys(packageJson.dependencies) : [],
    devDependencies: packageJson.devDependencies ? Object.keys(packageJson.devDependencies) : [],
    scripts: packageJson.scripts || {}
  }
}

// Função para gerar o conteúdo do README
function generateReadme() {
  const { name, version, description, dependencies, devDependencies, scripts } = getPackageInfo()

  const readmeContent = `# ${name} (v${version})

## Descrição
${description}

## Dependências
- ${dependencies.length > 0 ? dependencies.join('\n- ') : 'Nenhuma dependência instalada.'}

## Dependências de Desenvolvimento
- ${devDependencies.length > 0 ? devDependencies.join('\n- ') : 'Nenhuma dependência de desenvolvimento instalada.'}

## Comandos
${
  Object.keys(scripts).length > 0
    ? Object.keys(scripts)
        .map((script) => `- \`${script}\`: ${scripts[script]}`)
        .join('\n')
    : 'Nenhum comando configurado.'
}

---

Gerado automaticamente pelo script.
`

  return readmeContent
}

// Função para salvar o arquivo README.md
async function saveReadme() {
  const readmeContent = generateReadme()
  await writeFile('22.md', readmeContent, 'utf8')
  console.log('README.md gerado com sucesso!')
}

saveReadme()
