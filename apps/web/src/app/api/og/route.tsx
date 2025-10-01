/** biome-ignore-all lint/performance/noImgElement: Needed */
import { readFile } from 'node:fs/promises'
import path, { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'
import { settings } from '@/constants'

export const config = { runtime: 'edge' }

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const { searchParams } = new URL(req.url)
    // const isLight = req.headers.get('Sec-CH-Prefers-Color-Scheme') === 'light'

    const hasTitle = searchParams.has('title')
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : settings.site.description

    const file = await readFile(join(__dirname, './fonts/Inter-SemiBold.ttf'))
    const font = Uint8Array.from(file).buffer

    const logoData = await readFile(join(__dirname, './images/logo.png'))
    const logoSrc = Uint8Array.from(logoData).buffer

    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '40px',
          textAlign: 'center',
          // flexWrap: 'nowrap',
          // backgroundImage: `url(data:image/jpeg;base64,${bg})`
          backgroundImage:
            'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
          backgroundSize: '100px 100px'
        }}
      >
        <div
          style={{
            fontFamily: 'Inter',
            fontSize: '48px',
            fontWeight: '600',
            letterSpacing: '-0.04em',
            color: 'black',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            gap: '10px'
          }}
        >
          {/* @ts-expect-error Satori accepts ArrayBuffer/typed arrays for <img src> at runtime */}
          <img alt="Logo" height={96} src={logoSrc} style={{ margin: '0 0px' }} width={96} />
          <span>{`//${settings.site.name}`}</span>{' '}
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#666',
            marginTop: '20px',
            display: 'flex'
          }}
        >
          {title ?? settings.site.description}
        </div>
      </div>,
      {
        width: 1200, // 843,
        height: 630, // 441,
        fonts: [{ name: 'inter', data: font, style: 'normal', weight: 400 }],
        debug: false
      }
    )
  } catch (e) {
    if (!(e instanceof Error)) throw e

    console.log(e.message)
    return new Response(`Failed to generate the image`, { status: 500 })
  }
}
