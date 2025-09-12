import { createEnv } from '@t3-oss/env-nextjs'
import { keys as core } from '../../../packages/next-config/keys'
import { keys as observability } from '../../../packages/observability/keys'

export const env = createEnv({
  extends: [observability(), core()],
  server: {},
  client: {},
  runtimeEnv: {}
})
