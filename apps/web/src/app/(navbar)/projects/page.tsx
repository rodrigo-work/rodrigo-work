import { PlusIcon } from 'lucide-react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { blogs, showcases, vercel } from './data'
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

      <div className="flex gap-4 border border-dashed p-6 mt-6">
        <svg
          aria-label="Vercel logomark"
          className="size-6 mt-1"
          height="64"
          role="img"
          viewBox="0 0 74 64"
        >
          <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="currentColor" />
        </svg>
        <div>
          <h2 className="text-sm font-medium mb-2">
            Fumadocs powers the docs of Vercel open source SDKs.
          </h2>
          <div className="flex items-center gap-2 -mx-1.5">
            {vercel.map((item) => (
              <Link
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'sm'
                  }),
                  'text-fd-muted-foreground'
                )}
                href={item.url}
                key={item.url}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-6 grid gap-2.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showcases.map((showcase) => (
          <ShowcaseItem key={showcase.url} {...showcase} />
        ))}
        <div className="absolute text-center bottom-0 inset-x-0 pt-4 bg-gradient-to-t from-fd-background">
          <Link
            className={cn(
              buttonVariants({
                size: 'sm',
                variant: 'outline'
              })
            )}
            href="https://github.com/fuma-nama/fumadocs/discussions/30"
          >
            See all of our showcases.
          </Link>
        </div>
      </div>
      <h2 className="text-xl font-medium mt-12 px-4">Fumadocs can power your blog, too.</h2>
      <div className="mt-6 grid gap-2.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((showcase) => (
          <ShowcaseItem key={showcase.url} {...showcase} />
        ))}
      </div>
    </main>
  )
}

function ShowcaseItem({
  name,
  url,
  image
}: {
  name: string
  url: string
  image?: string | StaticImageData
}) {
  if (image) {
    return (
      <a
        className="group relative aspect-[1.91/1] border border-dashed"
        href={url}
        key={name}
        rel="noreferrer noopener"
        target="_blank"
      >
        <Image
          alt="Preview"
          className="object-cover transition-all group-hover:brightness-150"
          fill
          sizes="100vw, (min-width: 750px) 500px"
          src={image}
        />
        <p className="absolute bottom-0 inset-x-0 z-2 bg-fd-background px-4 py-2 text-sm font-medium">
          {name}
        </p>
      </a>
    )
  }

  return (
    <a
      className="flex aspect-[1.91/1] flex-col border border-dashed p-4 transition-all hover:bg-fd-accent"
      href={url}
      rel="noreferrer noopener"
      target="_blank"
    >
      <p className="font-mono text-xs mb-2 text-fd-muted-foreground">{new URL(url).hostname}</p>
      <p className="text-xl font-medium">{name}</p>
    </a>
  )
}
