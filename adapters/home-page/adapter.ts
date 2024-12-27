import { Entry } from 'contentful';
import { TypeHomePageSkeleton } from '@/lib/contentful/types';

export function homePageAdapter(data: Entry<TypeHomePageSkeleton> | null) {
  if (!data) return null;

  return {
    internalName: data.fields.internalName,
    heroBanner: data.fields.heroBanner,
    sections: data.fields.sections,
  };
}
