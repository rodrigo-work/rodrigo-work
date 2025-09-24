import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const keys = () =>
  createEnv({
    server: {
      CLOUDINARY_NAME: z.string(),

      CLOUDINARY_API_KEY: z.string(),
      CLOUDINARY_API_SECRET: z.string()
    },
    client: {},
    runtimeEnv: {
      CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,

      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
    }
  })
