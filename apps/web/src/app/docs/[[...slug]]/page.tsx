import { settings } from '@/constants'
import { source } from '@/lib/source'
import { getMDXComponents } from '@/mdx-components'
import { createMetadata } from '@repo/seo'
import { getTableOfContents } from 'fumadocs-core/server'
import { createRelativeLink } from 'fumadocs-ui/mdx'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    notFound()
  }

  const { body: MDXContent, toc, lastModified, full, title } = page.data
  const toc2 = getTableOfContents('## markdown content')

  return (
    <DocsPage
      breadcrumb={{
        enabled: true
      }}
      container={
        {
          // enabled: true
        }
      }
      editOnGithub={{
        owner: settings.docs.github.owner,
        repo: settings.docs.github.repo,
        sha: settings.docs.github.branch,
        path: `apps/web/content/docs/${page.path}`
      }}
      footer={{
        enabled: true
      }}
      full={full}
      lastUpdate={lastModified ? new Date(lastModified) : undefined}
      // tableOfContent={{
      //   enabled: true,
      //   footer: 'qqq',
      //   style: 'normal'
      // }}
      // tableOfContentPopover={{
      //   enabled: false
      // }}
      toc={toc}
    >
      {/* <InlineTOC items={toc} /> */}

      <DocsTitle>{title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page)
          })}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    notFound()
  }

  return createMetadata({
    title: page.data.title || settings.title,
    description: page.data.description || settings.description
  })
}
