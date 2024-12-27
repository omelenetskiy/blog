import { TypePageSkeleton } from '@/lib/contentful/types';
import { Entry } from 'contentful';

export function pageAdapter(data: Entry<TypePageSkeleton> | null) {
  if (!data) return null;

  return {
    slug: data.fields.slug || '', // EntryFieldTypes.Symbol<string>
    content: data.fields.content, // EntryFieldTypes.EntryLink<TypeHeroBannerSkeleton | TypePageContentSkeleton>
    siteConfigurationEntry: data.fields.siteConfiguration,
  };
}
