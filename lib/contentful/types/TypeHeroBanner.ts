import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeButtonSkeleton } from './TypeButton';
import type { TypeImageSkeleton } from './TypeImage';

export interface TypeHeroBannerFields {
  internalName: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  subheadline?: EntryFieldTypes.Symbol;
  media?: EntryFieldTypes.EntryLink<TypeImageSkeleton>;
  backgroundImage?: EntryFieldTypes.AssetLink;
  backgroundColor?: EntryFieldTypes.Symbol;
  imagePosition?: EntryFieldTypes.Symbol<'left' | 'right'>;
  isPaddedImage?: EntryFieldTypes.Boolean;
  callToAction?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
}

export type TypeHeroBannerSkeleton = EntrySkeletonType<
  TypeHeroBannerFields,
  'heroBanner'
>;
export type TypeHeroBanner<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHeroBannerSkeleton, Modifiers, Locales>;
