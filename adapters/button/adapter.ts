import { TypeButtonSkeleton } from '@/lib/contentful/types';
import { Entry } from 'contentful';

export const buttonAdapter = (data: Entry<TypeButtonSkeleton> | null) => {
  if (!data) return null;

  return {
    label: data.fields.label,
    href: data.fields.link,
    variant: data.fields.variant,
    size: data.fields.size,
  };
};
