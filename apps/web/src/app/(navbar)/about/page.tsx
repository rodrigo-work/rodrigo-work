// import { createMetadata } from '@repo/seo'

import { createMetadata } from '@repo/seo'
import { PlusIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Grid } from '@/components/grid/grid'
import { GridCell } from '@/components/grid/grid-cell'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import Design from './design.png'

export const generateMetadata = async (): Promise<Metadata> => {
  return createMetadata({
    title: 'About',
    description: 'A list of beautiful open-source projects with their docs powered by rodrigo.work.'
  })
}

export default function About() {
  // const data = await Screenshot({ urls: websites })

  return (
    <main className="px-4 py-12 z-2 w-full max-w-screen-xl mx-auto [--color-fd-border:color-mix(in_oklab,var(--color-fd-primary)_30%,transparent)]">
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

      <Grid
        className="relative border border-gray-400 mt-24"
        columns={{
          sm: 2,
          md: 2
        }}
        gap="medium"
      >
        <GridCell className="border-0 h-fit col-span-2-- px-6 py-14 xs:px-6 xs:py-10 md:px-9 lg:px-12 border border-red-400">
          <h2 className="mb-1 text-[32px] font-semibold tracking-tighter">Scale your workflows</h2>
          <p className="max-w-prose text-balance text-gray-900 text-base">
            Optimize your local and CI tasks to save years of engineering time and compute.
          </p>
          <div className="my-8 grid h-fit gap-y-12 md:grid-cols-3 md:gap-x-8">ddd</div>
        </GridCell>

        <GridCell className="border-0 h-fit col-span-2-- px-6 py-14 xs:px-6 xs:py-10 md:px-9 lg:px-12 border border-blue-400">
          <h2 className="mb-1 text-[32px] font-semibold tracking-tighter">Scale your workflows</h2>
          <p className="max-w-prose text-balance text-gray-900 text-base">
            Optimize your local and CI tasks to save years of engineering time and compute.
          </p>
          <div className="my-8 grid h-fit gap-y-12 md:grid-cols-3 md:gap-x-8">ddd</div>
        </GridCell>

        <GridCell className="col-span-2 px-6 py-14 xs:px-6 xs:py-10 md:px-9 lg:px-12 border border-green-400 mt-12">
          <div className="flex flex-col items-start gap-y-6 md:flex-row md:items-center md:justify-between md:gap-x-6">
            <h2 className="text-[32px] font-semibold tracking-tighter md:text-[40px]">
              Deploy your Turborepo today.
            </h2>
            <div className="flex flex-wrap gap-3 justify-start md:justify-end items-center">
              {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="text-sm sm:h-12 sm:text-base">
                <Link href="/docs">Get started</Link>
              </button>
              {/* <Snippet
                className="flex h-fit min-w-[160px] max-w-[180px] xs:w-auto sm:h-12 items-center border border-[var(--ds-gray-alpha-400)] justify-start font-mono bg-[var(--ds-background-100)]"
                code="npm i turbo"
              /> */}
            </div>
          </div>
        </GridCell>
      </Grid>
    </main>
  )
}
