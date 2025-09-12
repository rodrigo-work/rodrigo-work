'use client'

import { baseOptions, linkItems } from '@/lib/layout.shared'
import { Header, HomeLayout } from 'fumadocs-ui/layouts/home'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

function isSimpleLayout(path: string): boolean {
  if (process.env.NODE_ENV === 'production') {
    if (path === '/') return true
    return /^\/(privacy|terms|\/)(\/|$)/.test(path)
  }

  return false
}

export default function Layout({ children }: { children: ReactNode }) {
  const path = usePathname()

  if (isSimpleLayout(path)) {
    return (
      <div className="min-h-screen mx-auto container max-w-3xl flex justify-center">{children}</div>
    )
  }

  return (
    <>
      <Header />
      <HomeLayout
        {...baseOptions()}
        className=""
        links={[
          {
            text: 'Home',
            url: '/',
            active: 'url'
          },
          {
            text: 'About',
            url: '/about',
            active: 'url'
          },
          {
            text: 'Docs',
            url: '/docs',
            active: 'url'
          },
          ...linkItems
        ]}
        searchToggle={{
          enabled: false
        }}
        style={
          {
            // '--spacing-fd-container': '1120px'
          } as object
        }
        themeSwitch={{
          mode: 'light-dark-system'
        }}
      >
        {children}
      </HomeLayout>
    </>
  )
}
