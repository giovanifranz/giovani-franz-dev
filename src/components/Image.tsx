import Image, { ImageProps, StaticImageData } from 'next/image'

const normalizeSrc = (src: StaticImageData['src']) => {
  return src.startsWith('/') ? src.slice(1) : src
}

type CloudflareLoaderProps = Pick<ImageProps, 'width' | 'quality'> & {
  src: StaticImageData['src']
}

const CloudflareLoader = ({ src, width, quality }: CloudflareLoaderProps) => {
  if (process.env.NODE_ENV === 'development') {
    return src
  }

  const params = [`width=${width}`]
  if (quality) {
    params.push(`quality=${quality}`)
  }
  const paramsString = params.join(',')
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`
}

type MyImageProps = Pick<ImageProps, 'src' | 'alt'>

const CloudflareImage = ({ alt, src }: MyImageProps) => {
  return (
    <Image
      loader={CloudflareLoader}
      src={src}
      alt={alt}
      width={330}
      height={400}
      priority
    />
  )
}

export { CloudflareImage as Image }
