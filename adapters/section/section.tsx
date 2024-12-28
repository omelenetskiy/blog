import { CSSProperties, FC, ReactNode } from 'react';
import { cn, columnVariants } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import { Entry } from 'contentful';
import { Compose } from '@/adapters/compose';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import * as React from 'react';
import { TypeRichTextSkeleton } from '@/lib/contentful/types';

interface SectionProps {
  headline?: string;
  description?: Entry<TypeRichTextSkeleton>;
  content?: Entry[];
  headlineAlignment?: 'center' | 'left' | 'right';
  children?: ReactNode;
  mobileColumns?: 1 | 2;
  tabletColumns?: 1 | 2 | 3 | 4;
  desktopColumns?: 1 | 2 | 3 | 4;
  columnReverse?: boolean;
  backgroundImage?: string;
  backgroundColor?: string;
  carousel?: boolean;
  carouselLoop?: boolean;
  carouselAlignment?: 'start' | 'center' | 'end';
}

export const Section: FC<SectionProps> = ({
  headline,
  description,
  headlineAlignment = 'left',
  mobileColumns = 1,
  tabletColumns = 1,
  desktopColumns = 1,
  columnReverse = false,
  backgroundImage,
  backgroundColor,
  content = [],
  carousel = false,
  carouselLoop = true,
  carouselAlignment = 'center',
}) => {
  const headlineStyles = cn('mb-4', 'text-2xl', 'font-bold', {
    'text-center': headlineAlignment === 'center',
    'text-left': headlineAlignment === 'left',
    'text-right': headlineAlignment === 'right',
  });

  const mobileColumnClass = columnVariants.mobile[mobileColumns];
  const tabletColumnClass = columnVariants.tablet[tabletColumns];
  const desktopColumnClass = columnVariants.desktop[desktopColumns];

  const gridClass = cn(
    'grid gap-4',
    mobileColumnClass,
    tabletColumnClass,
    desktopColumnClass,
    {
      'flex-row-reverse': columnReverse,
    },
  );

  const sectionStyles: CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundColor: backgroundColor || undefined,
    backgroundSize: backgroundImage ? 'cover' : undefined,
    backgroundPosition: backgroundImage ? 'center' : undefined,
  };

  return (
    <section style={sectionStyles} className="w-full py-6 md:py-10">
      <div className="container mx-auto px-4">
        {headline && (
          <Typography variant="h2" component="h2" className={headlineStyles}>
            {headline}
          </Typography>
        )}
        {description ? (
          <div className="pb-2">
            <Compose {...description} />
          </div>
        ) : null}
        {carousel ? (
          <Carousel
            opts={{
              align: carouselAlignment,
              loop: carouselLoop,
            }}
            // orientation="vertical"
            className="mx-auto w-full"
          >
            <CarouselPrevious />
            <CarouselContent className="-mt-1">
              {content.map((entry, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Compose key={index} {...entry} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        ) : (
          <div className={gridClass}>
            {content.length
              ? content.map((entry, index) => (
                  <Compose key={index} {...entry} />
                ))
              : null}
          </div>
        )}
      </div>
    </section>
  );
};
