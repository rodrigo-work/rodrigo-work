import { getDictionary } from '@repo/internationalization'
import { createMetadata } from '@repo/seo/metadata'
import type { Metadata } from 'next'
import { Features } from './components/features'

type ProjectsPageProps = {
  params: Promise<{
    locale: string
  }>
}

export const generateMetadata = async ({
  params
}: ProjectsPageProps): Promise<Metadata> => {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return createMetadata(dictionary.web.home.meta)
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <>
      <Features dictionary={dictionary} />
    </>
  )
}
