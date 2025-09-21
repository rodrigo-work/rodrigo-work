import Link from 'next/link'

export default function Forbidden() {
  return (
    <div className="min-h-screen flex gap-2 flex-col justify-center items-center">
      <h2>403 - Forbidden</h2>
      <p>You are not authorized to access this resource.</p>
      <span className="mt-4">
        <Link className="text-fd-foreground underline text-fd-xs" href="/">
          return home
        </Link>
      </span>
    </div>
  )
}
