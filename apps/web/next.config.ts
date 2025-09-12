import { env } from '@/env'
import { config, withAnalyzer } from '@repo/next-config'
import { withLogging } from '@repo/observability/next-config'
import { createMDX } from 'fumadocs-mdx/next'
import type { NextConfig } from 'next'

const withMDX = createMDX()
let nextConfig: NextConfig = {}

nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@repo/design-system',
    '@repo/seo',
    '@repo/observability',
    '@repo/next-config'
  ],
  experimental: {
    authInterrupts: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  async redirects() {
    return [
      {
        source: '/health(z)?',
        destination: '/api/health',
        permanent: false
      },
      {
        source: '/og/:slug*',
        destination: '/api/og/:slug*',
        permanent: false
      }
    ]
  },
  ...config
}

nextConfig = withLogging(nextConfig)

// if (env.VERCEL) {
//   nextConfig = withSentry(nextConfig)
// }

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig)
}

export default withMDX(nextConfig)
