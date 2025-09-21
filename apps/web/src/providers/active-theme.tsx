'use client'

import { ActiveThemeLayoutProvider as ThemeProvider } from '@/hooks/use-active-theme'

export default function ActiveThemeLayoutProvider({
  activeThemeLayoutValue,
  children
}: {
  activeThemeLayoutValue?: 'enabled' | 'disabled'
  children: React.ReactNode
}) {
  return <ThemeProvider initialThemeLayout={activeThemeLayoutValue}>{children}</ThemeProvider>
}
