import { FC } from 'react';
import { Compose } from '@/adapters/compose';
import { Entry } from 'contentful';
import {
  TypeHeroBannerSkeleton,
  TypeSectionSkeleton,
} from '@/lib/contentful/types';

interface HomePageProps {
  heroBanner: Entry<TypeHeroBannerSkeleton>;
  sections: Entry<TypeSectionSkeleton>[];
}

export const HomePage: FC<HomePageProps> = (content) => {
  return (
    <main className="flex-1">
      <Compose {...content.heroBanner} />
      {Object.values(content.sections).map((section, index) => (
        <Compose {...section} key={index} />
      ))}
    </main>
  );
};
