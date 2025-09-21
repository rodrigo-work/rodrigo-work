'use client'

import { cookiesName } from '@/constants'
import { createContext, type ReactNode, useContext, useEffect, useState } from 'react'

function setThemeLayoutCookie(theme: string) {
  if (typeof window === 'undefined') return

  // biome-ignore lint/suspicious/noDocumentCookie: No document.cookie
  document.cookie = `${cookiesName.theme_layout.name}=${theme}; path=/; max-age=31536000; SameSite=Lax; ${window.location.protocol === 'https:' ? 'Secure;' : ''}`
}

type ThemeLayoutContextType = {
  activeThemeLayout: string
  setActiveThemeLayout: (theme: string) => void
}

const ThemeLayoutContext = createContext<ThemeLayoutContextType | undefined>(undefined)

export function ActiveThemeLayoutProvider({
  children,
  initialThemeLayout
}: {
  children: ReactNode
  initialThemeLayout?: string
}) {
  const [activeThemeLayout, setActiveThemeLayout] = useState<string>(
    () => initialThemeLayout || cookiesName.theme_layout.value
  )

  useEffect(() => {
    setThemeLayoutCookie(activeThemeLayout)

    if (activeThemeLayout === 'disabled') {
      Array.from(document.body.classList)
        .filter((className) => className.includes('theme-layout-width'))
        .forEach((className) => {
          document.body.classList.remove(className)
        })
      return
    }

    document.body.classList.add(`theme-layout-width`)
  }, [activeThemeLayout])

  return (
    <ThemeLayoutContext.Provider value={{ activeThemeLayout, setActiveThemeLayout }}>
      {children}
    </ThemeLayoutContext.Provider>
  )
}

export function useThemeLayoutConfig() {
  const context = useContext(ThemeLayoutContext)
  if (context === undefined) {
    throw new Error('useThemeLayoutConfig must be used within an ActiveThemeLayoutProvider')
  }
  return context
}
