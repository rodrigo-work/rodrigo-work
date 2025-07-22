import { getDictionary } from '@repo/internationalization'
import { createMetadata } from '@repo/seo/metadata'
import type { Metadata } from 'next'
import { ContactForm } from './components/contact-form'

type ContactPageProps = {
  params: Promise<{
    locale: string
  }>
}

export const generateMetadata = async ({
  params
}: ContactPageProps): Promise<Metadata> => {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return createMetadata(dictionary.web.contact.meta)
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return <ContactForm dictionary={dictionary} />
}
