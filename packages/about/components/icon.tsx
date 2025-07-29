'use client'

import * as React from 'react'

const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="4"
    viewBox="0 0 144 144"
    {...props}
  >
    <path d="m108.411 31.03-3.492 3.493c-17.99 17.99-47.159 17.99-65.15 0l-3.491-3.492a3.71 3.71 0 0 0-5.247 5.246l3.492 3.492c17.99 17.991 17.99 47.16 0 65.15l-3.492 3.492a3.71 3.71 0 1 0 5.247 5.246l3.492-3.492c17.99-17.99 47.158-17.99 65.149 0l3.492 3.492a3.71 3.71 0 0 0 5.247-5.246l-3.493-3.492c-17.99-17.99-17.99-47.159 0-65.15l3.493-3.492a3.711 3.711 0 0 0-5.247-5.246Z" />
    <style>
      {`
        @media (prefers-color-scheme: dark) {
          svg {
            fill: #fff;
            stroke: #fff;
          }
        }
      `}
    </style>
  </svg>
)

export type RodrigoWorkIconProps = {
  size?: 'sm' | 'md' | 'lg'
}

export const RodrigoWorkIcon = ({ size = 'md' }: RodrigoWorkIconProps) => {
  return (
    <>
      {size === 'sm' && (
        <>
          <Icon width={48} height={48} />
        </>
      )}
      {size === 'md' && (
        <>
          <Icon width={144} height={144} />
        </>
      )}
      {size === 'lg' && (
        <>
          <Icon width={512} height={512} />
        </>
      )}
    </>
  )
}
