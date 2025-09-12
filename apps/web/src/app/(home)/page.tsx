import { Icons } from '@/components/icons'
import { createMetadata } from '@repo/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const generateMetadata = async (): Promise<Metadata> => {
  return createMetadata({
    title: 'Home',
    description: 'Personal website and documentation for rodrigo.work'
  })
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <Icons.rw className="mx-auto mb-4 w-[220px]" />
      {process.env.NODE_ENV === 'development' && (
        <span className="flex flex-col gap-4">
          <p className="text-fd-muted-foreground text-sm">
            Você pode abrir{' '}
            <Link className="text-fd-foreground font-semibold underline" href="/docs">
              /docs
            </Link>{' '}
            para vizualizar a documentação.
          </p>
        </span>
      )}
    </main>
  )
}
