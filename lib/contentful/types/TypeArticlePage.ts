import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeHeroBannerSkeleton } from './TypeHeroBanner';
import type { TypeSectionSkeleton } from './TypeSection';

export interface TypeArticlePageFields {
  internalName: EntryFieldTypes.Symbol;
  heroBanner?: EntryFieldTypes.EntryLink<TypeHeroBannerSkeleton>;
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeSectionSkeleton>
  >;
}

export type TypeArticlePageSkeleton = EntrySkeletonType<
  TypeArticlePageFields,
  'articlePage'
>;
export type TypeArticlePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeArticlePageSkeleton, Modifiers, Locales>;
