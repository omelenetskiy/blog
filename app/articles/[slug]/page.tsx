import { notFound } from 'next/navigation';
import { fetchPageBySlug, fetchPages } from '@/lib/contentful/getPages';
import { Compose, ComposeProps } from '@/adapters/compose';

export async function generateStaticParams() {
  const posts = await fetchPages();

  return posts?.map((post) => ({
    slug: post?.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const { content } = page;

  return <Compose {...(content as ComposeProps)} />;
}
