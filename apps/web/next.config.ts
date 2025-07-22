/** @type {import('next').NextConfig} */
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // devIndicators: true,
  // transpilePackages: ['../../packages/*'],
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },

  trailingSlash: false,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/og/:path*',
  //       destination: '/api/og/:path*'
  //     }
  //     //     {
  //     //       source: '/en/docs',
  //     //       destination: 'https://rodrigo-work.mintlify.app'
  //     //     },
  //     //     {
  //     //       source: '/en/docs/:path+',
  //     //       destination: 'https://rodrigo-work.mintlify.app/:path+' // Matched parameters can be used in the destination
  //     //     }
  //   ]
  // },

  async redirects() {
    return [
      {
        source: '/og/:slug*',
        destination: '/api/og/:slug*', // Matched parameters can be used in the destination
        permanent: false
      },
      {
        source: '/osg/:path*',
        destination: 'https://rodrigo-work.mintlify.app/:path*', // Matched parameters can be used in the destination
        permanent: false
      }
    ]
  }
}

export default nextConfig
