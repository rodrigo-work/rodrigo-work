import { links } from '@/constants'
import { NextResponse } from 'next/server'

export const revalidate = false

const url =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://rodrigo.work'

export async function GET(): Promise<NextResponse> {
  const urls = links.map((item) => ({
    name: item.name,
    desc: item.desc,
    href: `${url}${item.href}`
  }))

  return NextResponse.json({ links: urls })
}
