import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeHeroBannerSkeleton } from './TypeHeroBanner';
import type { TypeSectionSkeleton } from './TypeSection';

export interface TypeHomePageFields {
  internalName: EntryFieldTypes.Symbol;
  heroBanner?: EntryFieldTypes.EntryLink<TypeHeroBannerSkeleton>;
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeSectionSkeleton>
  >;
}

export type TypeHomePageSkeleton = EntrySkeletonType<
  TypeHomePageFields,
  'homePage'
>;
export type TypeHomePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHomePageSkeleton, Modifiers, Locales>;
