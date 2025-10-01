import type { MetadataRoute } from 'next'
import { settings } from '@/constants'

// https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/

// https://github.com/MicrosoftEdge/Demos/tree/main/pwa-getting-started

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: settings.site.name,
    short_name: settings.site.name,
    description: settings.site.description,
    id: '/?homescreen=1',
    start_url: '/?homescreen=1',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    orientation: 'any',
    display_override: ['window-controls-overlay'],
    icons: [
      {
        src: '/images/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/images/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    protocol_handlers: [
      {
        protocol: 'web+minhapwa',
        url: '/handle-protocol?url=%s'
      }
    ],
    screenshots: [
      // {
      //     src: '/icons/dark/web-app-manifest-512x512.png',
      //     sizes: '512x512',
      //     type: 'image/png',
      //     form_factor: 'narrow'
      //   },
      {
        src: '/images/opengraph-image.png',
        sizes: '1600x630',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: '/api/og?title=Home',
        sizes: '1600x630',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: '/images/opengraph-image.png',
        sizes: '1600x630',
        type: 'image/png',
        form_factor: 'wide'
      }
    ]
  }
}
