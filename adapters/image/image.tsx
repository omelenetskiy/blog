import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ContentfulImageProps {
  altText?: string;
  title?: string;
  src: string;
  height?: number;
  width?: number;
  fill?: boolean;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  backgroundColor?: string;
  size?: '25%' | '33%' | '50%' | '66%' | '75%' | '100%';
  aspectRatio?:
    | '1/1'
    | '16/9'
    | '3/2'
    | '4/3'
    | '4/5'
    | '5/4'
    | '9/16'
    | 'auto';
}

export function ContentfulImage({
  src,
  altText,
  width = 1,
  height = 1,
  fill = false,
  alignment = 'center',
  objectFit = 'cover',
  size = '100%',
  aspectRatio = 'auto',
  className,
  backgroundColor,
  ...rest
}: ContentfulImageProps) {
  const alignmentClass = {
    left: '',
    center: 'mx-auto',
    right: 'ms-auto',
  }[alignment];

  return (
    <Image
      src={src}
      loading="lazy"
      alt={altText || 'Image'}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes="100vw"
      className={cn(alignmentClass, 'h-auto', 'rounded-lg', className)}
      style={{ backgroundColor, objectFit, aspectRatio, width: size }}
      {...rest}
    />
  );
}
