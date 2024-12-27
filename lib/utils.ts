import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatArticleDate = (isoDate: string): string => {
  const date = new Date(isoDate);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format');
  }

  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const SIZE_CLASSES: Record<string, string> = {
  '25%': 'w-1/4',
  '33%': 'w-1/3',
  '50%': 'w-1/2',
  '66%': 'w-2/3',
  '75%': 'w-3/4',
  '100%': 'w-full',
};

export const columnVariants = {
  mobile: {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  },
  tablet: {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  },
  desktop: {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  },
};
