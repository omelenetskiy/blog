import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeButtonFields {
  label?: EntryFieldTypes.Text;
  link?: EntryFieldTypes.Symbol;
  icon?: EntryFieldTypes.Symbol;
  variant?: EntryFieldTypes.Symbol<
    'default' | 'destructive' | 'ghost' | 'outline' | 'secondary'
  >;
  size?: EntryFieldTypes.Symbol<'default' | 'icon' | 'lg' | 'sm'>;
}

export type TypeButtonSkeleton = EntrySkeletonType<TypeButtonFields, 'button'>;
export type TypeButton<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeButtonSkeleton, Modifiers, Locales>;
