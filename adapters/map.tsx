import { buttonAdapter } from '@/adapters/button/adapter';
import { imageAdapter } from '@/adapters/image/adapter';
import { richTextAdapter } from '@/adapters/rich-text/adapter';
import { sectionAdapter } from '@/adapters/section/adapter';
import { heroBannerAdapter } from '@/adapters/hero-banner/adapter';
import { homePageAdapter } from '@/adapters/home-page/adapter';
import { articlePageAdapter } from '@/adapters/article-page/adapter';
import { articleAdapter } from '@/adapters/article-card/adapter';

import { HeroBanner } from '@/adapters/hero-banner/hero-banner';
import { ButtonLink } from '@/adapters/button/button-link';
import { Section } from '@/adapters/section/section';
import { RichText } from '@/adapters/rich-text/rich-text';
import { ContentfulImage } from '@/adapters/image/image';
import { HomePage } from '@/adapters/home-page/home-page';
import { ArticlePage } from '@/adapters/article-page/article-page';
import { ArticleCard } from '@/adapters/article-card/article-card';

export const adapterMap: Record<string, any> = {
  article: articleAdapter,
  heroBanner: heroBannerAdapter,
  image: imageAdapter,
  button: buttonAdapter,
  richText: richTextAdapter,
  section: sectionAdapter,
  homePage: homePageAdapter,
  articlePage: articlePageAdapter,
};

export const componentMap: Record<string, any> = {
  heroBanner: HeroBanner,
  image: ContentfulImage,
  button: ButtonLink,
  richText: RichText,
  section: Section,
  homePage: HomePage,
  articlePage: ArticlePage,
  article: ArticleCard,
};
