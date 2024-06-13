import Image from "next/image"

type ImageProps = {
  src: string
  alt: string
  heightClasses: string
  widthClasses: string
  imageClass?: string
}
const ResponsiveImage = ({
  src,
  alt,
  heightClasses,
  widthClasses,
  imageClass,
}: ImageProps) => {
  return (
    <div className={`relative ${heightClasses} ${widthClasses}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={imageClass}
      />
    </div>
  )
}

export default ResponsiveImage
