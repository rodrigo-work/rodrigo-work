import { NextResponse } from 'next/server'
import { links } from './data'

export const revalidate = false

// export async function getCommandFiles(dir: string): Promise<string[]> {
//   const entries = await readdir(dir, { withFileTypes: true })

//   const files: string[] = []

//   for (const entry of entries) {
//     const fullPath = path.join(dir, entry.name)

//     if (entry.isDirectory()) {
//       const subFiles = await getCommandFiles(fullPath)
//       files.push(...subFiles)
//     } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.js'))) {
//       files.push(fullPath)
//     }
//   }

//   return files
// }

const url =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://rodrigo.work'

export async function GET(): Promise<NextResponse> {
  const urls = links.map((item) => ({
    name: item.name,
    desc: item.desc,
    href: `${url}${item.href}`
  }))

  return NextResponse.json({ links: urls })
}
