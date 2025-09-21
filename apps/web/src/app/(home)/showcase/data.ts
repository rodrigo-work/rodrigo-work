import type { StaticImageData } from 'next/image'

export interface ShowcaseObject {
  image?: StaticImageData | string
  name: string
  url: string
}

export const showcases: ShowcaseObject[] = [
  {
    image: '/showcases/codehike.png',
    name: 'codehike',
    url: 'https://ui.shadcn.com'
  },
  {
    image: '/showcases/nemo.png',
    name: 'nemo',
    url: 'https://ui.shadcn.com'
  },
  {
    image: '/showcases/next-faq.png',
    name: 'next-faq',
    url: 'https://ui.shadcn.com'
  },
  {
    image: '/showcases/openpanel.png',
    name: 'openpanel',
    url: 'https://ui.shadcn.com'
  },
  {
    image: '/showcases/turbostarter.png',
    name: 'turbostarter',
    url: 'https://ui.shadcn.com'
  },
  {
    image: '/showcases/shadcn.png',
    name: 'shadcn/ui',
    url: 'https://ui.shadcn.com'
  },
  {
    image: '/showcases/zod.png',
    name: 'Zod',
    url: 'https://zod.dev'
  }
]

export const blogs: ShowcaseObject[] = [
  {
    name: "RUNFUNRUN's Blog",
    url: 'https://runfunrun.dev'
  },
  {
    name: 'xlog.systems',
    url: 'https://www.xlog.systems'
  },
  {
    name: 'stutuer',
    url: 'https://www.stutuer.tech'
  }
]

export const vercel = [
  {
    name: 'Turbo',
    url: 'https://turbo.build'
  },
  {
    name: 'Flags SDK',
    url: 'https://flags-sdk.dev'
  },
  {
    name: 'Chat SDK',
    url: 'https://chat-sdk.dev'
  }
]
