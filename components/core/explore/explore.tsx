'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Typography } from '@/components/ui/typography';

interface Country {
  name: string;
  image: string;
  href: string;
}

const countries: Country[] = [
  {
    name: 'Italy',
    image: 'https://placehold.co/400x400/png?text=Italy',
    href: '/destinations/italy',
  },
  {
    name: 'France',
    image: 'https://placehold.co/400x400/png?text=France',
    href: '/destinations/france',
  },
  {
    name: 'England',
    image: 'https://placehold.co/400x400/png?text=England',
    href: '/destinations/england',
  },
  {
    name: 'Morocco',
    image: 'https://placehold.co/400x400/png?text=Morocco',
    href: '/destinations/morocco',
  },
  {
    name: 'Spain',
    image: 'https://placehold.co/400x400/png?text=Spain',
    href: '/destinations/spain',
  },
];

export function ExploreCountries() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="mx-auto w-full max-w-sm md:max-w-4xl"
    >
      <CarouselContent>
        {countries.map((country) => (
          <CarouselItem
            key={country.name}
            className="md:basis-1/3 lg:basis-1/4"
          >
            <div className="p-1">
              <Card className="border-0 shadow-none">
                <CardContent className="flex flex-col items-center p-6">
                  <Link href={country.href} className="group">
                    <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full">
                      <Image
                        src={country.image}
                        alt={`Explore ${country.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <Typography variant="h3" className="text-center">
                      {country.name}
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
