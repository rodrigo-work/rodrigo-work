'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const allowedPaths = ['/', '/about', '/privacy', '/terms']

export function WithRedirect() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Verifica se a rota atual está permitida
    const isAllowed = allowedPaths.includes(pathname)

    if (!isAllowed) {
      router.push('/login') // redireciona se não estiver permitido
    }
  }, [pathname, router])

  return null // não renderiza nada
}
