import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: `//rodrigo.work`
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: 'Home',
        url: '/',
        active: 'url'
      },
      {
        text: 'Docs',
        url: '/docs',
        active: 'nested-url'
      },
      {
        text: 'Projects',
        url: '/projects',
        active: 'nested-url'
      },
      {
        text: 'About',
        url: '/about',
        active: 'nested-url'
      },
      {
        text: 'Contact',
        url: '/contact',
        active: 'nested-url'
      }
    ]
  }
}
