import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeRichTextFields {
  internalName?: EntryFieldTypes.Symbol;
  content?: EntryFieldTypes.RichText;
}

export type TypeRichTextSkeleton = EntrySkeletonType<
  TypeRichTextFields,
  'richText'
>;
export type TypeRichText<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeRichTextSkeleton, Modifiers, Locales>;
