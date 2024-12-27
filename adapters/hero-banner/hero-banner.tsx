import { Typography } from '@/components/ui/typography';
import { Compose } from '@/adapters/compose';
import { Entry } from 'contentful';
import { TypeButtonSkeleton, TypeImageSkeleton } from '@/lib/contentful/types';
import { cn } from '@/lib/utils';

export interface HeroBannerProps {
  title: string;
  backgroundImage?: string;
  backgroundColor?: string;
  image?: Entry<TypeImageSkeleton>;
  imagePosition?: 'left' | 'right';
  isPaddedImage?: boolean;
  subheadline?: string;
  cta?: Entry<TypeButtonSkeleton>;
}

export function HeroBanner({
  backgroundImage,
  backgroundColor,
  image,
  imagePosition = 'right',
  isPaddedImage = false,
  title,
  subheadline,
  cta,
}: HeroBannerProps) {
  const containerStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  const imagePositionClass = cn(
    'flex-col',
    imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row',
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" style={containerStyle}>
      <div className={`container px-4 md:px-6`}>
        <div
          className={`${backgroundImage ? 'rounded-lg bg-black/50 p-6 text-white' : ''}`}
        >
          <div className={`flex items-center gap-8 ${imagePositionClass}`}>
            {image && (
              <div
                className={`w-full ${isPaddedImage ? 'rounded-lg bg-white p-4 dark:bg-gray-800' : ''} ${image ? 'lg:w-1/2' : 'w-full'} order-first lg:order-none`}
              >
                <Compose {...image} />
              </div>
            )}
            <div
              className={`flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left ${image ? 'lg:w-1/2' : 'w-full'}`}
            >
              <Typography variant="h1" component="h1">
                {title}
              </Typography>
              {subheadline && (
                <Typography
                  variant="subtitle1"
                  className={`max-w-[700px] ${backgroundImage ? 'text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  {subheadline}
                </Typography>
              )}
              {cta && <Compose {...cta} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
