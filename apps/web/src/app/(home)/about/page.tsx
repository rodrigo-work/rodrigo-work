import { buttonVariants } from '@repo/design-system/components/ui/button'
import { cn } from '@repo/design-system/lib/utils'
import { Status } from '@repo/observability/status'
import { createMetadata } from '@repo/seo'
import { Building2, LibraryIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'

export const generateMetadata = async (): Promise<Metadata> => {
  return createMetadata({
    title: 'About',
    description: 'A list of beautiful open-source projects with their docs powered by rodrigo.work.'
  })
}

export default function About() {
  return (
    <main className="px-4 py-12 z-2 w-full max-w-[1400px] mx-auto [--color-fd-border:color-mix(in_oklab,var(--color-fd-primary)_30%,transparent)]">
      <div className="relative overflow-hidden border border-dashed p-6">
        <h1 className="mb-4 text-xl font-medium">The docs framework designed with care.</h1>
        <p className="text-fd-muted-foreground">
          A list of beautiful open-source projects with their docs powered by Fumadocs.
        </p>
      </div>

      <h2 className="text-xl font-medium mt-12 px-4">Fumadocs can power your blog, too.</h2>
      <div className="mt-6 grid gap-2.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Status />
      </div>
    </main>
  )
}

function ShowcaseItem({ name, url, image }: any) {
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

function DocsPage2() {
  return (
    <main className="container flex flex-col items-center py-16 text-center z-2">
      <div className="absolute inset-0 z-[-1] overflow-hidden duration-1000 animate-in fade-in [perspective:2000px]">
        <div
          className="absolute bottom-[20%] left-1/2 size-[1200px] origin-bottom bg-fd-primary/30 opacity-30"
          style={{
            transform: 'rotateX(75deg) translate(-50%, 400px)',
            backgroundImage:
              'radial-gradient(50% 50% at center,transparent,var(--color-fd-background)), repeating-linear-gradient(to right,var(--color-fd-primary),var(--color-fd-primary) 1px,transparent 2px,transparent 100px), repeating-linear-gradient(to bottom,var(--color-fd-primary),var(--color-fd-primary) 2px,transparent 3px,transparent 100px)'
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-1] select-none overflow-hidden opacity-30">
        {/* <Image
          alt="spot"
          className="size-full min-w-[800px] max-w-fd-container"
          priority
          sizes="100vw"
          src={'Spot'}
        /> */}
      </div>
      <h1 className="mb-4 text-4xl font-semibold md:text-5xl">Getting Started</h1>
      <p className="text-fd-muted-foreground">
        You can start with Fumadocs, or just use the core library.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <a
          className={cn(buttonVariants({ size: 'lg' }))}
          href="https://github.com/fuma-nama/fumadocs"
          rel="noreferrer noopener"
        >
          Github
        </a>
        <Link className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))} href="/showcase">
          Showcase
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
        <Item href="/docs/ui">
          <Icon>
            <Building2 className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Fumadocs</h2>
          <p className="text-sm text-fd-muted-foreground">
            The full-powered documentation framework with an excellent UI.
          </p>
        </Item>
        <Item href="/docs/headless">
          <Icon>
            <LibraryIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Fumadocs Core</h2>
          <p className="text-sm text-fd-muted-foreground">The core library of Fumadocs.</p>
        </Item>
      </div>
    </main>
  )
}

function Icon({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <div
      className="mb-2 size-9 rounded-lg border p-1.5 shadow-fd-primary/30"
      style={{
        boxShadow: 'inset 0px 8px 8px 0px var(--tw-shadow-color)'
      }}
    >
      {children}
    </div>
  )
}

function Item(props: LinkProps & { children: React.ReactNode }): React.ReactElement {
  return (
    <Link
      {...props}
      className="rounded-2xl border border-transparent p-6 shadow-lg"
      style={{
        backgroundImage:
          'linear-gradient(to right bottom, var(--color-fd-background) 10%, var(--color-fd-accent), var(--color-fd-background) 60%),' +
          'linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box'
      }}
    >
      {props.children}
    </Link>
  )
}
