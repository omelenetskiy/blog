import { TypePageSkeleton } from './types';
import contentfulClient from './client';
import { pageAdapter } from '@/adapters/page/adapter';

export async function fetchPages(preview: boolean = false) {
  const contentful = contentfulClient({ preview });

  const pagesResult = await contentful.getEntries<TypePageSkeleton>({
    content_type: 'page',
    limit: 10,
    include: 10,
  });

  return pagesResult ? pagesResult.items.map(pageAdapter) : [];
}

export async function fetchPageBySlug(slug: string, preview: boolean = false) {
  const contentful = contentfulClient({ preview });

  const pagesResult = await contentful.getEntries<TypePageSkeleton>({
    content_type: 'page',
    'fields.slug': slug,
    limit: 10,
    include: 10,
  });

  const page = pagesResult.items[0];

  return page ? pageAdapter(page) : null;
}
