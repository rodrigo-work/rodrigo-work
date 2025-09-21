export const cookiesName = {
  theme_layout: {
    name: 'active_theme_layout',
    value: 'disabled'
  },
  idToken: 'id_token',
  accessToken: 'access_token',
  refreshToken: 'refresh_token'
} as const

export const languages = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Chinese', value: 'zh' }
] as const

export const links = [
  {
    name: 'Heath Check',
    desc: 'Check if the application is up and running',
    href: '/health'
  },
  {
    name: 'Terms of Use',
    desc: 'Read our terms of use',
    href: '/terms'
  },
  {
    name: 'Privacy Policy',
    desc: 'Read our privacy policy',
    href: '/privacy'
  },
  {
    name: 'Icon Generator',
    desc: 'Generate your custom icon',
    href: '/icon'
  },
  {
    name: 'OG Image Generator',
    desc: 'Generate your custom og image',
    href: '/og'
  }
] as const

export const settings = {
  docs: {
    github: {
      owner: 'rodrigo-work',
      repo: 'rodrigo-work',
      branch: 'develop'
    }
  },
  PRIVACY_POLICY_AND_TERMS_OF_USE: {
    NAME: 'RODRIGO.WORK',
    EMAIL: 'me@rodrigo.work',
    CONTACT_NAME: 'Rodrigo Ribeiro',
    ADDRESS: {
      CITY: 'São José dos Campos',
      STATE: 'SP',
      COUNTRY: 'Brazil'
    },
    PRODUCTS: ['Auth Platform', 'API Platform', 'Serverless Platform'],
    LAST_UPDATED: '1984-02-23'
  },
  name: 'RODRIGO.WORK',
  title: 'Auth Platform',
  description: 'Advanced Authentication Platform with Amazon Cognito'
}
