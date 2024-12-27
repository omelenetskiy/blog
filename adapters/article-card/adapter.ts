import { TypeArticleSkeleton } from '@/lib/contentful/types';
import { Entry } from 'contentful';

export type ArticleCardAdapterProps = Entry<TypeArticleSkeleton> | null;

export const articleAdapter = (data: ArticleCardAdapterProps) => {
  if (!data) return null;

  return {
    title: data.fields.title,
    slug: data.fields.slug,
    description: data.fields.cardDescription,
    cardImage: data.fields.cardImage,
    cta: data.fields.cta,
    dateCreated: data.fields.dateCreated,
    location: data.fields.location,
  };
};
