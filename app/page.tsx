import { fetchPageBySlug } from '@/lib/contentful/getPages';
import { HOME_PAGE_SLUG } from '@/lib/contentful/constants';
import { Compose, ComposeProps } from '@/adapters/compose';
import { notFound } from 'next/navigation';

export default async function Home() {
  const page = await fetchPageBySlug(HOME_PAGE_SLUG);

  if (!page) {
    notFound();
  }

  const { content } = page;

  return <Compose {...(content as ComposeProps)} />;
}
