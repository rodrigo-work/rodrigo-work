import { WidthLayoutTrigger } from '@/components/width-layout-trigger'
import { baseOptions, linkItems } from '@/lib/layout.shared'
import { source } from '@/lib/source'
import { DocsLayout } from 'fumadocs-ui/layouts/notebook'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Navbar mode="top" /> */}
      <DocsLayout
        {...baseOptions()}
        containerProps={{
          className: '',
          style: {
            '--fd-sidebar-width': '280px',
            '--fd-page-width': '100%'
          } as object
        }}
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
            text: 'Showcase',
            url: '/showcase',
            active: 'url'
          },
          {
            type: 'custom',
            children: <WidthLayoutTrigger />,
            secondary: false
          },
          {
            type: 'button',
            text: 'SignIn',
            url: 'https://github.com/rodrigo-work/rodrigo-work',
            external: true
          },
          ...linkItems.filter((item) => item.type === 'icon')
        ]}
        nav={{ ...baseOptions().nav, mode: 'top' }}
        sidebar={{
          collapsible: false,
          tabs: [
            {
              title: 'Documentation',
              url: '/docs'
            },
            {
              title: 'Packages',
              url: '/docs/packages'
            }
          ]
        }}
        tabMode="navbar"
        tree={source.pageTree}
      >
        {children}
      </DocsLayout>
    </>
  )
}
