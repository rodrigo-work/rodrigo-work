/* eslint-disable react/no-unknown-property */
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || searchParams.get('t') || 'Title'
  const description = searchParams.get('description') || searchParams.get('d') || 'Description'

  return new ImageResponse(
    <div style={{ fontFamily: 'Geist Sans' }} tw="flex h-full w-full bg-black text-white">
      <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 left-16 w-[1px]" />
      <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 right-16 w-[1px]" />
      <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] top-16" />
      <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] bottom-16" />
      <div tw="flex absolute flex-row bottom-24 right-24 text-white">
        <svg
          aria-label="icon-title"
          height={48}
          viewBox="0 0 256 256"
          width={48}
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="icon-title">{''}</title>
          <rect fill="#fff" height="256" rx={16} ry={16} width="256"></rect>
          <line
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            x1="208"
            x2="50"
            y1="50"
            y2="208"
          ></line>
        </svg>
      </div>
      <div tw="flex flex-col absolute w-[896px] justify-center inset-32">
        <div
          style={{
            textWrap: 'balance',
            fontWeight: 600,
            fontSize: title && title.length > 40 ? 48 : 64,
            letterSpacing: '-0.04em'
          }}
          tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1] whitespace-normal"
        >
          {getTextWrap(title, 40)}
        </div>
        <div
          style={{
            fontWeight: 500,
            textWrap: 'balance',
            fontSize: description && description.length > 40 ? 32 : 48
          }}
          tw="leading-[1.5] flex-grow-1 text-stone-400"
        >
          {getTextWrap(description, 40)}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 628
    }
  )
}

const getTextWrap = (text: string, maxLength: number = 20) => {
  if (text && text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`
  }

  return text
}
