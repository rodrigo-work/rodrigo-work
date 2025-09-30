import merge from 'lodash.merge'
import type { Metadata } from 'next'

const getBaseURL = (): URL => {
  if (process.env.VERCEL_ENV === 'production') {
    return new URL(`https://${process.env.NEXT_PUBLIC_WEB_URL}`)
  }

  if (process.env.VERCEL_ENV === 'preview') {
    return new URL(`https://${process.env.VERCEL_URL}`)
  }

  return new URL(`http://localhost:${process.env.PORT || 3000}`)
}

const createOgImagePath = ({
  title,
  // product,
  canonicalPath
}: {
  title?: string
  // product?: string
  canonicalPath: string
}): URL => {
  const ogURL = new URL(`/api/og`, getBaseURL())

  if (title) {
    ogURL.searchParams.set('title', title)
  }

  // if (product) {
  //   ogURL.searchParams.set('type', product)
  // }

  const isIndex = canonicalPath === '/'
  const isRepoIndex = canonicalPath === '/repo'

  if (isIndex || isRepoIndex) {
    ogURL.searchParams.delete('title')
  }

  return ogURL
}

type MetadataGenerator = Omit<Metadata, 'description' | 'title'> & {
  title?: string
  description?: string
  canonicalPath?: string
  image?: string
}

export const createMetadata = ({
  title,
  description,
  canonicalPath,
  ...properties
}: MetadataGenerator): Metadata => {
  if (!description) {
    // eslint-disable-next-line no-console -- We want to be alerted during a build if this happens
    console.warn(`Warning: ${canonicalPath} does not have a description.`)
  }
  const defaultMetadata: MetadataGenerator & Metadata = {
    metadataBase: getBaseURL(),
    title: title ? `${title} | rodrigo.work` : 'rodrigo.work',
    description,
    openGraph: {
      siteName: 'rodrigo.work',
      images: [
        createOgImagePath({
          title: canonicalPath === '/' ? '' : title,
          canonicalPath: canonicalPath ?? ''
        })
      ],
      url: canonicalPath
    },
    alternates: {
      canonical: canonicalPath
    }
  }
  const metadata: Metadata = merge(defaultMetadata, properties)

  return metadata
}
