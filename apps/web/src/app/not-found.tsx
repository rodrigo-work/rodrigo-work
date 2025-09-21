import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex gap-2 flex-col justify-center items-center">
      <h2>404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <span className="mt-4">
        <Link className="text-fd-foreground underline text-fd-xs" href="/">
          return home
        </Link>
      </span>
    </div>
  )
}
