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

export const settings = {
  navbar: {},
  site: {
    name: 'rodrigo.work',
    short_name: 'rodrigo-work',
    description: 'website, docs, packages, examples, solutions and others',
    url: 'https://rodrigo.work',
    email: 'me@rodrigo.work'
  },
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
  title: ` rodrigo.work `,
  description: 'website, docs, packages, examples, solutions and others'
}
