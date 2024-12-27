import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeSiteFields {
  internalName?: EntryFieldTypes.Symbol;
  header?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  footer?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  gtmId?: EntryFieldTypes.Symbol;
}

export type TypeSiteSkeleton = EntrySkeletonType<TypeSiteFields, 'site'>;
export type TypeSite<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSiteSkeleton, Modifiers, Locales>;
