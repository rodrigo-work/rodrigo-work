import { openapi } from '@/lib/openapi'
import * as OpenAPI from 'fumadocs-openapi'
import { NextResponse } from 'next/server'

const out = './content/docs/openapi/(generated)'

export async function GET() {
  // clean generated files
  // await rimraf(out, {
  //   filter(v) {
  //     return !v.endsWith('meta.json')
  //   }
  // })

  const result = await OpenAPI.generateFiles({
    input: openapi,
    output: out
  })

  return NextResponse.json({
    status: result
  })
}
