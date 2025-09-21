import Link from 'next/link'

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex gap-2 flex-col justify-center items-center">
      <h1>401 - Unauthorized</h1>
      <p>Please log in to access this page.</p>
      {/* <Login /> */}
      <span className="mt-4">
        <Link className="text-fd-foreground underline text-fd-xs" href="/">
          Login
        </Link>
      </span>
    </div>
  )
}
