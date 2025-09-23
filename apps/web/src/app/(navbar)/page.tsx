import { createMetadata } from '@repo/seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { LogoRodrigoWork } from '@/components/_internal/logo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createMetadata({
    title: '',
    description: 's'
  })
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center">
      {/* <h1 className="-mb-8 text-[40px] font-bold -mr-8">👋</h1> */}
      <LogoRodrigoWork alt="rodrigo.work logo" className="w-[220px]" />
      <p className="text-fd-muted-foreground hidden md:hidden">
        You can open
        <Link className="text-fd-foreground font-semibold underline" href="/docs">
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  )
}
