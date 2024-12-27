import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MapPin, Calendar } from 'lucide-react';
import { Compose } from '@/adapters/compose';
import {
  TypeButtonSkeleton,
  TypeImageSkeleton,
  TypeRichTextSkeleton,
} from '@/lib/contentful/types';
import { Entry } from 'contentful';
import { formatArticleDate } from '@/lib/utils';
import Link from 'next/link';

export interface ArticleCardProps {
  title?: string;
  slug: string;
  description?: Entry<TypeRichTextSkeleton>;
  dateCreated: string;
  location: string;
  cardImage: Entry<TypeImageSkeleton>;
  isFeatured?: boolean;
  cta?: Entry<TypeButtonSkeleton>;
}

export function ArticleCard({
  title,
  slug,
  description,
  location,
  dateCreated,
  cardImage,
  isFeatured = false,
  cta,
}: ArticleCardProps) {
  const date = formatArticleDate(dateCreated);

  return (
    <Card className={isFeatured ? 'mx-auto w-full max-w-4xl' : ''}>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && (
          <CardDescription>
            <Compose {...description} />
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className={`relative mb-4 w-full`}>
          <Link href={slug}>
            <Compose {...cardImage} />
          </Link>
        </div>
        <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            {location}
          </div>
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            {date}
          </div>
        </div>
      </CardContent>
      {cta && (
        <CardFooter>
          <Compose {...cta} href={slug} />
        </CardFooter>
      )}
    </Card>
  );
}
