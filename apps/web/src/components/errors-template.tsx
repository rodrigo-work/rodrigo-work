import Link from 'next/link'

const ErrorsTypes = [
  {
    name: '404',
    info: {
      title: '404 - Not Found',
      desc: 'Could not find requested resource.'
    }
  },
  {
    name: '401',
    info: {
      title: '401 - Unauthorized',
      desc: 'Please log in to access this page.'
    }
  },
  {
    name: '403',
    info: {
      title: '403 - Forbidden',
      desc: 'You do not have permission to access this page.'
    }
  },
  {
    name: '500',
    info: {
      title: '500 - Internal Server Error',
      desc: 'Internal Server Error'
    }
  }
]

export const ErrorsTemplate = ({ name }: { name?: string }) => {
  const error = ErrorsTypes.find((item) => item.name === name)

  if (!error) {
    return 'null'
  }

  return (
    <div className="min-h-screen flex gap-2 flex-col justify-center items-center">
      <h2>{error.info.title}</h2>
      <p>{error.info.desc}</p>

      {name && name === '404' && (
        <span className="mt-4">
          <Link className="text-fd-foreground underline text-fd-xs" href="/">
            return home
          </Link>
        </span>
      )}

      {name && name === '401' && (
        <span className="mt-4">
          <Link className="text-fd-foreground underline text-fd-xs" href="/login">
            {/* <Login /> */}
            Login
          </Link>
        </span>
      )}

      {name && name === '403' && (
        <span className="mt-4">
          <Link className="text-fd-foreground underline text-fd-xs" href="/">
            return home
          </Link>
        </span>
      )}
    </div>
  )
}
