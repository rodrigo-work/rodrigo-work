import { settings } from '@/constants'
import type { MetadataRoute } from 'next'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: settings.title,
    short_name: settings.name,
    description: settings.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff'
    // icons: [
    //   {
    //     src: '/favicon.ico',
    //     sizes: 'any',
    //     type: 'image/x-icon'
    //   }
    // ]
  }
}
