import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Rotas públicas — acessíveis sem redirecionamento
// const publicPaths = ['/about', '/privacy', '/terms', '/login']

export default function middleware(_request: NextRequest) {
  // const { pathname } = request.nextUrl

  // Se a rota for pública, permite continuar
  // if (!publicPaths.includes(pathname)) {
  return NextResponse.next()
  // }

  // Se for rota protegida, redireciona para /login
  // return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|manifest.*|favicon.ico|icon.svg|apple-icon.png|sw.js).*)'
  ]
}
