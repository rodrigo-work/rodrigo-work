import { createOpenAPI } from 'fumadocs-openapi/server'

export const openapi = createOpenAPI({
  input: ['./openapi.json'],

  shikiOptions: {
    themes: {
      dark: 'vesper',
      light: 'vitesse-light'
    }
  }
})
