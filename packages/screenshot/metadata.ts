import { url } from '../../cli/src/lib/utils'
import { uploadCloudinaryImages } from './lib/cloudinaryService'
import { loadOrInitializeImageFile } from './lib/fileService'
import { generateScreenshotFromUrl } from './lib/microlinkService'
import { strToHash } from './lib/utils'

type ScreenshotProps = {
  url: string
  name: string
  prefix?: string
  image?: string
}

type ScreenshotResult = {
  url: string
  image: string | undefined
  prefix: string
}

export const Screenshot = async ({ urls }: { urls: ScreenshotProps[] }) => {
  if (!urls || !Array.isArray(urls)) {
    return 'Invalid input'
  }
  const existingImages = await loadOrInitializeImageFile()

  const sites = urls.map((item) => ({
    url: item.url,
    name: item.name,
    prefix: strToHash(item.url)
  }))

  const missing = sites.filter((site) => {
    return !existingImages.some((img) => img.public_id.endsWith(`/${site.prefix}`))
  })

  // const promiseScreenshot = missing.map((ps) =>
  //   generateScreenshotFromUrl({ url: ps.url, prefix: ps.prefix })
  // )
  // const resultsScreenshot = await Promise.all(promiseScreenshot)

  // const promiseUpload = resultsScreenshot.map((s) =>
  //   uploadCloudinaryImages({ name: s.prefix, image: s.image })
  // )
  // const resultsUpload = await Promise.all(promiseUpload)

  // Filtra nulos
  // const successful = results.filter(
  //   (r): r is { name: string; image: string } => r !== null && r.image !== undefined
  // )

  return { existingImages, missing }
}
