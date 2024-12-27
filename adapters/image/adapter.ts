import { TypeImageSkeleton } from '@/lib/contentful/types';
import { Entry } from 'contentful';

export interface ImageAsset {
  fields: {
    title: string;
    file: {
      fileName: string;
      contentType: string;
      details: {
        image: {
          width: number;
          height: number;
        };
        size: number;
      };
      url: string;
    };
    description: string;
  };
}

export const imageAdapter = (data: Entry<TypeImageSkeleton> | null) => {
  if (!data) return null;

  const imageSrc = (data.fields.file as ImageAsset)?.fields?.file?.url || '';
  let src = imageSrc.replace(
    /^\/\/images\.ctfassets\.net/,
    'https://images.ctfassets.net',
  );

  if (src) {
    src = `${src}?fm=webp`;
  }

  return {
    src,
    alt: data.fields.altText,
    title: data.fields.title,
    alignment: data.fields.alignment,
    objectFit: data.fields.objectFit,
    width: data.fields.width,
    height: data.fields.height,
    fill: data.fields.fill,
    size: data.fields.size,
    aspectRatio: data.fields.aspectRatio,
    backgroundColor: data.fields.backgroundColor,
  };
};
