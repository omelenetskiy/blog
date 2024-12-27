import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeButtonSkeleton } from './TypeButton';
import type { TypeHeroBannerSkeleton } from './TypeHeroBanner';
import type { TypeImageSkeleton } from './TypeImage';
import type { TypeRichTextSkeleton } from './TypeRichText';
import type { TypeSectionSkeleton } from './TypeSection';

export interface TypeArticleFields {
  internalName?: EntryFieldTypes.Symbol;
  title?: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  heroBanner?: EntryFieldTypes.EntryLink<TypeHeroBannerSkeleton>;
  cardImage?: EntryFieldTypes.EntryLink<TypeImageSkeleton>;
  cardDescription?: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>;
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeSectionSkeleton>
  >;
  cta?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
  dateCreated?: EntryFieldTypes.Date;
  location?: EntryFieldTypes.Symbol;
}

export type TypeArticleSkeleton = EntrySkeletonType<
  TypeArticleFields,
  'article'
>;
export type TypeArticle<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeArticleSkeleton, Modifiers, Locales>;
