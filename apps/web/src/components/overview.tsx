import { Card, Cards } from 'fumadocs-ui/components/card'
import matter from 'gray-matter'
import fs from 'node:fs'
import { join } from 'node:path'

function parseDocInfo(file: string): any {
  const fileName = file.endsWith('.mdx') ? file : file.concat('/index.mdx')

  try {
    const fileContent = fs.readFileSync(fileName, 'utf-8')
    const { data } = matter(fileContent)

    return {
      title: data.title || 'No title',
      description: data.description || 'No description available'
    }
    // biome-ignore lint/correctness/noUnusedVariables: <No description available>
  } catch (error) {
    return 'No description available'
  }
}

export function OverviewDocs(docs: { docs: string }): any {
  const cwd = process.cwd()
  const tempDir = join(cwd, `./content/docs/${docs.docs}/`)

  const allFolders = fs.readdirSync(tempDir, {
    withFileTypes: true
  })

  const defaultPrefixes = ['_', '(', 'index', 'meta']
  const allIgnoredPrefixes = defaultPrefixes || []

  const getFiles = allFolders
    .filter(
      (item) => item.isFile() && !allIgnoredPrefixes.some((prefix) => item.name.startsWith(prefix))
    )
    .map((item) => {
      const { title, description } = parseDocInfo(`${item.parentPath}${item.name}`)

      return (
        <Card
          description={`${description}`}
          href={`/docs/${docs.docs}/${item.name.replace('.mdx', '')}`}
          key={item.name}
          title={`${title}`}
        />
      )
    })

  const getFolders = allFolders
    .filter(
      (item) =>
        item.isDirectory() && !allIgnoredPrefixes.some((prefix) => item.name.startsWith(prefix))
    )
    .map((item) => {
      const { title, description } = parseDocInfo(`${item.parentPath}${item.name}`)

      return (
        <Card
          description={`${description}`}
          href={`/docs/${docs.docs}/${item.name}`}
          key={item.name}
          title={`${title}`}
        />
      )
    })

  return (
    <Cards>
      {getFiles} {getFolders}
    </Cards>
  )
}
