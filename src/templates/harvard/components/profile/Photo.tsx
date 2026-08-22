import { cx } from '@/helper'

export type VariantPhoto = 'square' | 'circular'

interface PhotoProps {
  url: string
  alt: string
  variant?: VariantPhoto
}

export const Photo = ({
  url,
  alt,
  variant = 'square'
}: PhotoProps) => {
  return (
    <figure className={cx(
      'photo',
      `photo--${variant}`
    )}>
      <img
        className="photo__image"
        src={url}
        alt={alt}
      />
    </figure>
  )
}