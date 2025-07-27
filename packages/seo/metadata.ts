import merge from 'lodash.merge'
import type { Metadata } from 'next'

const productionUrl = process.env.NEXT_PUBLIC_WEB_URL || 'example.com'
const applicationName = 'rodrigo.work'
const author: Metadata['authors'] = {
  name: 'Rodrigo Ribeiro',
  url: 'https://rodrigo.work'
}
const publisher = 'rodrigo.work'
const twitterUser = '@rodrigo-work'
const opengraphImage = '/opengraph-image.png'

type MetadataGenerator = Omit<Metadata, 'description' | 'title'> & {
  title: string
  description: string
  image?: string
}

export const createMetadata = ({
  title,
  description,
  image = opengraphImage,
  ...properties
}: MetadataGenerator): Metadata => {
  const parsedTitle = `${title} | ${applicationName}`

  const defaultMetadata: Metadata = {
    title: parsedTitle,
    description,
    applicationName,
    openGraph: {
      title: parsedTitle,
      description,
      url: productionUrl,
      siteName: applicationName,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: parsedTitle,
      description,
      creator: twitterUser
    },
    metadataBase: new URL(`${productionUrl}`),
    robots: {
      index: true,
      follow: true
    },
    authors: [author],
    creator: author.name,
    publisher
  }

  const metadata: Metadata = merge(defaultMetadata, properties)

  if (image && metadata.openGraph) {
    metadata.openGraph.images = [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: parsedTitle
      }
    ]
  }

  return metadata
}
