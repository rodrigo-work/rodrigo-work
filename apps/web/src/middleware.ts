import { internationalizationMiddleware } from '@repo/internationalization/middleware'
import { NextRequest } from 'next/server'

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|manifest.webmanifest).*)'
  ]
}

export default function middleware(req: NextRequest) {
  const i18nResponse = internationalizationMiddleware(
    req as unknown as NextRequest
  )
  if (i18nResponse) {
    return i18nResponse
  }
}
