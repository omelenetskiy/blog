import { TypeArticlePageSkeleton } from '@/lib/contentful/types';
import { Entry } from 'contentful';

export function articlePageAdapter(
  data: Entry<TypeArticlePageSkeleton> | null,
) {
  if (!data) return null;

  return {
    internalName: data.fields.internalName,
    heroBanner: data.fields.heroBanner,
    sections: data.fields.sections,
  };
}
