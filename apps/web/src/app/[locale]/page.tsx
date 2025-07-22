import { RodrigoWorkLogo } from '@repo/about'
import { getDictionary } from '@repo/internationalization'
import { createMetadata } from '@repo/seo/metadata'
import Link from 'next/link'
// import { MyLogo } from '@repo/my-logo'
import { redirect } from 'next/navigation'

export const metadata = createMetadata({
  title: 'rodrigo.work',
  description: 'rodrigo.work description',
  image: `${process.env.NEXT_PUBLIC_WEB_URL}/api/og?title=rodrigo.work&description=rodrigo.work description`
})

type HomePageProps = {
  readonly params: Promise<{
    locale: string
  }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <>
      {process.env.NODE_ENV === 'development' ? redirect('/home') : ''}

      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Link href={'/home'}>
            <RodrigoWorkLogo />
          </Link>
        </div>
      </div>
    </>
  )
}
