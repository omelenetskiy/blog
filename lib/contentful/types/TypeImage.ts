import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeImageFields {
  title?: EntryFieldTypes.Symbol;
  altText?: EntryFieldTypes.Symbol;
  file: EntryFieldTypes.AssetLink;
  alignment?: EntryFieldTypes.Symbol<'center' | 'left' | 'right'>;
  width?: EntryFieldTypes.Integer;
  height?: EntryFieldTypes.Integer;
  objectFit?: EntryFieldTypes.Symbol<
    'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  >;
  backgroundColor?: EntryFieldTypes.Symbol;
  aspectRatio?: EntryFieldTypes.Symbol<
    '1/1' | '16/9' | '3/2' | '4/3' | '4/5' | '5/4' | '9/16' | 'auto'
  >;
  fill?: EntryFieldTypes.Boolean;
  size?: EntryFieldTypes.Symbol<'100%' | '25%' | '33%' | '50%' | '66%' | '75%'>;
}

export type TypeImageSkeleton = EntrySkeletonType<TypeImageFields, 'image'>;
export type TypeImage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeImageSkeleton, Modifiers, Locales>;
