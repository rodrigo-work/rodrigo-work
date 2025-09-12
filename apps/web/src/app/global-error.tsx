// 'use client'

// import { Button } from '@repo/design-system/components/ui/button'
// import { fonts } from '@repo/design-system/lib/fonts'
// import { captureException } from '@sentry/nextjs'
// import type NextError from 'next/error'
// import { useEffect } from 'react'

// type GlobalErrorProperties = {
//   readonly error: NextError & { digest?: string }
//   readonly reset: () => void
// }

// const GlobalError = ({ error, reset }: GlobalErrorProperties) => {
//   useEffect(() => {
//     captureException(error)
//   }, [error])

//   return (
//     <html lang="en" className={fonts}>
//       <body>
//         <h1>Oops, something went wrong</h1>
//         <Button onClick={() => reset()}>Try again</Button>
//       </body>
//     </html>
//   )
// }

// export default GlobalError
'use client' // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
