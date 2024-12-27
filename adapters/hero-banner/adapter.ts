import { TypeHeroBannerSkeleton } from '@/lib/contentful/types';
import { Entry, type Asset } from 'contentful';

export function heroBannerAdapter(data: Entry<TypeHeroBannerSkeleton> | null) {
  if (!data) return null;
  const backgroundImage = (data.fields.backgroundImage as Asset)?.fields?.file
    ?.url;

  return {
    title: data.fields.title,
    subheadline: data.fields.subheadline,
    imagePosition: data.fields.imagePosition,
    isPaddedImage: data.fields.isPaddedImage,
    image: data.fields.media,
    cta: data.fields.callToAction,
    backgroundColor: data.fields.backgroundColor,
    backgroundImage,
  };
}
