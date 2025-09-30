// import { createMetadata } from '@repo/seo'

import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import Design from './design.png'

// export const generateMetadata = async (): Promise<Metadata> => {
//   return createMetadata({
//     title: 'About',
//     description: 'A list of beautiful open-source projects with their docs powered by rodrigo.work.'
//   })
// }

export default function Showcase() {
  // const data = await Screenshot({ urls: websites })

  return (
    <main className="px-4 py-12 z-2 w-full max-w-[1400px] mx-auto [--color-fd-border:color-mix(in_oklab,var(--color-fd-primary)_30%,transparent)]">
      <div className="relative overflow-hidden border border-dashed p-6">
        <h1 className="mb-4 text-xl font-medium">The docs framework designed with care.</h1>
        <p className="text-fd-muted-foreground">
          A list of beautiful open-source projects with their docs powered by Fumadocs.
        </p>
        <div className="mt-6">
          <a
            className={cn(
              buttonVariants({
                variant: 'outline'
              })
            )}
            href="https://github.com/fuma-nama/fumadocs/discussions/30"
            rel="noreferrer noopener"
            target="_blank"
          >
            <PlusIcon className="me-2 size-4" />
            Suggest Yours
          </a>
        </div>
        <span className="absolute text-xs left-6 bottom-6 text-fd-muted-foreground font-mono">
          Showcases
        </span>
        <Image
          alt="preview"
          className="ml-auto w-[600px] min-w-[600px] -mt-12 -mb-18 pointer-events-none select-none"
          priority
          src={Design}
        />
      </div>
    </main>
  )
}
