import mql from '@microlink/mql'

type ScreenshotResult = {
  url: string
  image: string | undefined
  prefix: string | undefined
}

export const generateScreenshotFromUrl = async ({
  url,
  prefix
}: {
  url: string
  prefix?: string
}): Promise<ScreenshotResult> => {
  try {
    const { data } = await mql(url, {
      screenshot: true,
      filter: 'screenshot'
    })

    return {
      url: url,
      image: data.screenshot?.url,
      prefix: prefix
    }
  } catch (error) {
    console.error('Erro ao gerar screenshot:', error, 'URL:', url)
    return {
      url: url,
      image: undefined,
      prefix: prefix
    }
  }
}
