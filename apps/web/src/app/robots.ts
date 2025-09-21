import { env } from '@/env'
import type { MetadataRoute } from 'next'

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    host: env.NEXT_PUBLIC_WEB_URL,
    rules: {
      userAgent: '*',
      allow: '/'
      // disallow: '/private/'
    },
    sitemap: `${env.NEXT_PUBLIC_WEB_URL}/sitemap.xml`
  }
}
