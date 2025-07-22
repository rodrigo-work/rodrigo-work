import { fontVariables } from '@/lib/fonts'
import { DesignSystemProvider } from '@repo/design-system'
import { cn } from '@repo/design-system/lib/utils'
import '@repo/design-system/styles/globals.css'
import { getDictionary } from '@repo/internationalization'
import { cookies } from 'next/headers'

const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b'
}

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
  const cookieStore = await cookies()
  const activeThemeValue = cookieStore.get('active_theme')?.value
  const isScaled = activeThemeValue?.endsWith('-scaled')

  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `
          }}
        />
      </head>
      <body
        className={cn(
          'bg-background overflow-hidden-- overscroll-none-- font-sans-- overflow-y-scroll antialiased',
          activeThemeValue ? `theme-${activeThemeValue}` : '',
          isScaled ? 'theme-scaled' : '',
          fontVariables
        )}
      >
        <DesignSystemProvider activeThemeValue={activeThemeValue}>
          {children}
        </DesignSystemProvider>
      </body>
    </html>
  )
}
