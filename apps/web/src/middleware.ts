import { NextResponse } from 'next/server'

export default function middleware() {
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|manifest.*|favicon.ico|icon.svg|apple-icon.png).*)']
}
