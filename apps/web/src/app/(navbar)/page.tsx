import { createMetadata } from '@repo/seo'
import { Building2, LibraryIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link, { type LinkProps } from 'next/link'
import { LogoRodrigoWork } from '@/components/_internal/logo'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/cn'

export const generateMetadata = async (): Promise<Metadata> => {
  return createMetadata({
    title: '',
    description: 's'
  })
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center">
      <h1 className="-mb-8 text-[40px] font-bold -mr-8">👋</h1>
      <p className="text-fd-muted-foreground md:hidden">
        You can open
        <Link className="text-fd-foreground font-semibold underline" href="/docs">
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  )
}
