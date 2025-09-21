import '@/app/global.css'
import { cookiesName } from '@/constants'
import ActiveThemeLayoutProvider from '@/providers/active-theme'
import { cn } from '@repo/design-system/lib/utils'
import { RootProvider } from 'fumadocs-ui/provider'
import { Geist, Geist_Mono } from 'next/font/google'
import { cookies } from 'next/headers'
import type { ReactNode } from 'react'

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin']
})

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin']
})

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies()
  const activeThemeLayoutValue = cookieStore.get(cookiesName.theme_layout.name)?.value

  return (
    <html
      className={`${geist.variable} ${mono.variable} overflow-x-scroll-- antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          'flex flex-col min-h-screen',
          activeThemeLayoutValue === 'enabled' ? `theme-layout-width` : ''
        )}
      >
        <RootProvider>
          <ActiveThemeLayoutProvider activeThemeLayoutValue={activeThemeLayoutValue as 'disabled'}>
            {children}
          </ActiveThemeLayoutProvider>
        </RootProvider>
      </body>
    </html>
  )
}
