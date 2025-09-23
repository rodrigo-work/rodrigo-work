import ServiceWorkerRegister from '@/components/_internal/ServiceWorkerRegister'
import '@/styles/global.css'
import { AnalyticsProvider } from '@repo/analytics'
import { RootProvider } from 'fumadocs-ui/provider'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

const inter = Inter({
  subsets: ['latin']
})

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html className={inter.className} lang="en" suppressHydrationWarning>
      <body className="min-h-svh flex flex-col overflow-y-scroll antialiased">
        <NextTopLoader color="purple" height={1} showSpinner={false} />
        <ServiceWorkerRegister />
        <RootProvider>
          {/* <AnalyticsProvider> */}
          {children}
          {/* </AnalyticsProvider> */}
        </RootProvider>
      </body>
    </html>
  )
}
