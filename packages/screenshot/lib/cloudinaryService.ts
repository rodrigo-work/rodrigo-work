import { v2 as cloudinary } from 'cloudinary'
import { keys } from '../keys'

cloudinary.config({
  cloud_name: keys().CLOUDINARY_NAME,
  api_key: keys().CLOUDINARY_API_KEY,
  api_secret: keys().CLOUDINARY_API_SECRET
})

export async function getCloudinaryImages() {
  try {
    const res = await cloudinary.api.resources({
      context: 'true',
      type: 'upload',
      prefix: 'rodrigo-work/screenshot',
      max_results: 500
    })

    return res.resources
  } catch (error) {
    console.error('Erro ao buscar imagens no Cloudinary', error)
    return []
  }
}

export async function uploadCloudinaryImages({ name, image }: { name?: string; image?: string }) {
  try {
    const uploadResult = await cloudinary.uploader.upload(
      // `${url}?w=1200&h=630&fit=crop&auto=format&dpr=2&f=webp`,
      `${image}`,
      {
        public_id: `${name}`,
        folder: 'rodrigo-work/screenshot'
      }
    )
    console.log('Image uploaded successfully:', uploadResult)
    // return uploadResult
  } catch (error) {
    console.error('Error uploading image:', error)
    return {
      image,
      name
    }
  }
}
