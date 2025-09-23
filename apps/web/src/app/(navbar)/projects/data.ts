import type { StaticImageData } from 'next/image'

interface ShowcaseObject {
  image?: StaticImageData | string
  name: string
  url: string
}

export const showcases: ShowcaseObject[] = [
  {
    image:
      'https://iad.microlink.io/w_AdetG7K8P_XxL7rDHz1sZSkHZ3BgtAxaR4kOZ-4o1lcpaCX6Jg1jUkBBZGmrcXVb0q2xue5RbzuRtfhTIEmQ.png',
    name: 'Million',
    url: 'https://million.dev'
  },
  {
    image:
      'https://iad.microlink.io/vhYqFf3pjAQE04opZ73va-7Xf7wNVuAhD70u2JJQSGY_LeRNrB9ijE1FqfF9VIpcWWIMxcd9QdCWfq2qW3pcrA.png',
    name: 'shadcn/ui',
    url: 'https://ui.shadcn.com'
  },

  {
    image:
      'https://iad.microlink.io/iY8ZCqCHELnpfZ7pXuRNFdbw4cJn2Xm5eB19SksAGbos_ocvVy3KfFNSnjBLDlqxLrWOCSMhgahQCTp2JGuzig.png',
    name: 'c15t',
    url: 'https://c15t.com'
  },
  {
    name: 'Rehooks',
    url: 'https://rehooks.pyr33x.ir'
  },
  {
    name: 'Sherif',
    url: 'https://eslint-config-sherif.dev'
  },
  {
    name: 'Swellchain',
    url: 'https://build.swellnetwork.io'
  },
  {
    name: 'ESLint React',
    url: 'https://eslint-react.xyz'
  },
  {
    name: 'Llamaindex',
    url: 'https://ts.llamaindex.ai'
  },

  {
    name: 'Clojure Stack Lite',
    url: 'https://stack.bogoyavlensky.com'
  },
  {
    name: 'BProgress',
    url: 'https://bprogress.vercel.app'
  },
  {
    name: 'nextjs i18n docs',
    url: 'https://nextjs.im'
  },
  {
    name: 'Yeecord',
    url: 'https://yeecord.com'
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
