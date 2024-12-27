import { TypeSectionSkeleton } from '@/lib/contentful/types';
import { Entry } from 'contentful';

export const sectionAdapter = (data: Entry<TypeSectionSkeleton> | null) => {
  if (!data) return null;

  return {
    headline: data.fields.headline,
    headlineAlignment: data.fields.headlineAlignment,
    description: data.fields.description,
    content: data.fields.content || [],
    desktopColumns: data.fields.desktopColumns,
    tabletColumns: data.fields.tabletColumns,
    mobileColumns: data.fields.mobileColumns,
    columnReverse: data.fields.columnReverse,
    backgroundImage: data.fields.backgroundImage,
    backgroundColor: data.fields.backgroundColor,
    carousel: data.fields.carousel,
    carouselLoop: data.fields.carouselLoop,
    carouselAlignment: data.fields.carouselAlignment,
  };
};
