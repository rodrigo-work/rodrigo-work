import { config as baseConfig, withAnalyzer } from '@repo/next-config'
// import { withLogging } from '@repo/observability/next-config'
import { createMDX } from 'fumadocs-mdx/next'
import type { NextConfig } from 'next'
import { env } from '@/env'

const withMDX = createMDX()

const transpilePackages = ['@repo/seo', '@repo/next-config', '@repo/typescript-config']

// Base config
let nextConfig: NextConfig = {
  ...baseConfig,

  reactStrictMode: true,

  transpilePackages,
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
      }
    ]
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff'
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY'
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'strict-origin-when-cross-origin'
  //         }
  //       ]
  //     },
  //     {
  //       source: '/service-worker.js',
  //       headers: [
  //         {
  //           key: 'Content-Type',
  //           value: 'application/javascript; charset=utf-8'
  //         },
  //         {
  //           key: 'Cache-Control',
  //           value: 'no-cache, no-store, must-revalidate'
  //         },
  //         {
  //           key: 'Content-Security-Policy',
  //           value: "default-src 'self'; script-src 'self'"
  //         }
  //       ]
  //     }
  //   ]
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'iad.microlink.io'
      }
    ]
  }
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig)
}

// nextConfig = withLogging(nextConfig)

nextConfig = withMDX(nextConfig)

export default nextConfig
