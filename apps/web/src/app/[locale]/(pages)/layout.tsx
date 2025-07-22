import { Header } from '@/components/header'
import { getDictionary } from '@repo/internationalization'

type RootLayoutProps = {
  readonly children: React.ReactNode
  readonly params: Promise<{
    locale: string
  }>
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <>
      <Header dictionary={dictionary} />
      {children}
    </>
  )
}
