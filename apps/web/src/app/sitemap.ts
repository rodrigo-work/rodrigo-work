import fs from 'node:fs'
import type { MetadataRoute } from 'next'
import { env } from '@/env'
import { source } from '@/lib/source'

const url = new URL(`${env.NEXT_PUBLIC_WEB_URL}`)

function getFolders(folder: string, ignoredPrefixes?: string[]): string[] {
  const allFolders = fs.readdirSync(`src/${folder}`, { withFileTypes: true })

  const defaultPrefixes = ['_', '(']
  const allIgnoredPrefixes = defaultPrefixes.concat(ignoredPrefixes || [])

  return allFolders
    .filter(
      (item) =>
        item.isDirectory() && !allIgnoredPrefixes.some((prefix) => item.name.startsWith(prefix))
    )
    .map((item) => item.name)
}

const pages = getFolders('app/(navbar)', ['docs66'])
const legals = getFolders('app')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://rodrigo.work',
      changeFrequency: 'monthly',
      priority: 1
    },

    ...pages.map((page) => ({
      url: `${url.href.concat(page)}`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: new Date()
    })),

    ...legals.map((page) => ({
      url: `${url.href.concat(page)}`,
      priority: 0.8,
      lastModified: new Date()
    })),

    ...source
      .getPages()
      .slice(0, 10)
      .map((page) => {
        const { lastModified } = page.data

        return {
          url: `${url.href.concat(page.url).replace(/([^:]\/)\/+/g, '$1')}`,
          lastModified: lastModified ? new Date(lastModified) : undefined,
          changeFrequency: 'weekly',
          priority: 0.5
        } as MetadataRoute.Sitemap[number]
      })
  ]
}
