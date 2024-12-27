import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeArticleSkeleton } from './TypeArticle';
import type { TypeButtonSkeleton } from './TypeButton';
import type { TypeImageSkeleton } from './TypeImage';
import type { TypeRichTextSkeleton } from './TypeRichText';

export interface TypeSectionFields {
  internalName?: EntryFieldTypes.Symbol;
  headline?: EntryFieldTypes.Symbol;
  headlineAlignment?: EntryFieldTypes.Symbol<'center' | 'left' | 'right'>;
  description?: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>;
  content?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeArticleSkeleton
      | TypeButtonSkeleton
      | TypeImageSkeleton
      | TypeRichTextSkeleton
    >
  >;
  desktopColumns?: EntryFieldTypes.Integer<1 | 2 | 3 | 4>;
  tabletColumns?: EntryFieldTypes.Integer<1 | 2 | 3 | 4>;
  mobileColumns?: EntryFieldTypes.Integer<1 | 2 | 3 | 4>;
  columnReverse?: EntryFieldTypes.Boolean;
  backgroundImage?: EntryFieldTypes.AssetLink;
  backgroundColor?: EntryFieldTypes.Symbol;
  carousel?: EntryFieldTypes.Boolean;
  carouselLoop?: EntryFieldTypes.Boolean;
  carouselAlignment?: EntryFieldTypes.Symbol<'center' | 'end' | 'start'>;
}

export type TypeSectionSkeleton = EntrySkeletonType<
  TypeSectionFields,
  'section'
>;
export type TypeSection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSectionSkeleton, Modifiers, Locales>;
