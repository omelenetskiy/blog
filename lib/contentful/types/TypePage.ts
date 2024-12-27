import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeArticlePageSkeleton } from './TypeArticlePage';
import type { TypeHomePageSkeleton } from './TypeHomePage';
import type { TypeSiteSkeleton } from './TypeSite';

export interface TypePageFields {
  internalName: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  content?: EntryFieldTypes.EntryLink<
    TypeArticlePageSkeleton | TypeHomePageSkeleton
  >;
  siteConfiguration: EntryFieldTypes.EntryLink<TypeSiteSkeleton>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>;
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePageSkeleton, Modifiers, Locales>;
