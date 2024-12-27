import { TypeRichTextSkeleton } from '@/lib/contentful/types';
import { Entry } from 'contentful';

export function richTextAdapter(data: Entry<TypeRichTextSkeleton> | null) {
  if (!data) return null;

  return data.fields.content;
}
