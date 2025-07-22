import { getDictionary } from '@repo/internationalization'
import { createMetadata } from '@repo/seo/metadata'
import type { Metadata } from 'next'
import { Hero } from './components/hero'

type HomePageProps = {
  params: Promise<{
    locale: string
  }>
}

export const generateMetadata = async ({
  params
}: HomePageProps): Promise<Metadata> => {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return createMetadata(dictionary.web.home.meta)
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <>
      {/* <ThemeSelector /> */}
      <Hero dictionary={dictionary} />
      {/* <Sheet>
        <SheetTrigger asChild>
          <>
            <address className="text-center">
          dfdfgfdgfg

            </address>
          </>
        </SheetTrigger>
        <SheetContent side="top" className="h-72-- p-8--">
          <SheetHeader>
            <SheetTitle>
              <Header dictionary={dictionary} />
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet> */}
    </>
  )
}
