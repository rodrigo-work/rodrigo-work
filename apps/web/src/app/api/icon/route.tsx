/* eslint-disable react/no-unknown-property */
import { ImageResponse } from 'next/og'

export async function GET() {
  return new ImageResponse(
    <div tw="flex h-full w-full items-center justify-center bg-black">
      <svg
        aria-label="icon-title"
        height={256}
        viewBox="0 0 256 256"
        width={256}
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
    </div>,
    {
      width: 256,
      height: 256
    }
  )
}
