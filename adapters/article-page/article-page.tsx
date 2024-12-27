import { FC } from 'react';
import { Compose } from '@/adapters/compose';
import { Entry } from 'contentful';
import {
  TypeHeroBannerSkeleton,
  TypeSectionSkeleton,
} from '@/lib/contentful/types';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'lucide-react';

interface ArticlePageProps {
  heroBanner: Entry<TypeHeroBannerSkeleton>;
  sections: Entry<TypeSectionSkeleton>[];
}

const article = {
  title: 'Exploring the Hidden Gems of Bali',
  description: 'Discover the lesser-known wonders of this Indonesian paradise',
  author: 'Jane Doe',
  authorImage: 'https://placehold.co/200x200/png?text=Jane+Doe',
  date: 'June 15, 2023',
  readTime: '8 min read',
  content: `
      <p>Bali, the Island of the Gods, is renowned for its lush landscapes, vibrant culture, and stunning beaches. While popular destinations like Ubud and Seminyak attract millions of tourists each year, there's a whole world of hidden gems waiting to be discovered off the beaten path.</p>
      
      <h2>1. Tibumana Waterfall</h2>
      <p>Nestled in the heart of Bali's jungle, Tibumana Waterfall is a breathtaking natural wonder that remains relatively unknown to most tourists. The journey to reach this cascading beauty is an adventure in itself, winding through lush rice paddies and dense forests.</p>
      
      <h2>2. Sidemen Valley</h2>
      <p>For those seeking to experience the traditional Balinese way of life, Sidemen Valley offers a glimpse into a world untouched by mass tourism. This picturesque region is characterized by terraced rice fields, traditional villages, and Mount Agung looming in the distance.</p>
      
      <h2>3. Nyang Nyang Beach</h2>
      <p>Hidden behind towering cliffs and accessible only by a steep path, Nyang Nyang Beach is a pristine stretch of white sand that feels worlds away from the crowded shores of Kuta. The effort to reach this secluded paradise is rewarded with crystal-clear waters and often, the entire beach to yourself.</p>
    `,
  imageSrc: 'https://placehold.co/1200x400/png?text=Bali+Landscape',
};

export const ArticlePage: FC<ArticlePageProps> = (content) => {
  return (
    <main className="flex-1">
      <Compose {...content.heroBanner} />
      <div className="container flex flex-col gap-8 px-4 py-12 md:px-6 lg:flex-row">
        <main className="lg:w-2/3">
          {Object.values(content.sections).map((section, index) => (
            <Compose {...section} key={index} />
          ))}
        </main>
        <aside className="space-y-6 lg:w-1/3">
          <div className="rounded-lg bg-muted p-6">
            <h3 className="mb-4 text-lg font-bold">About the Author</h3>
            <div className="mb-4 flex items-center space-x-4">
              <div>
                <p className="font-semibold">{article.author}</p>
                <p className="text-sm text-gray-500">Travel Writer</p>
              </div>
            </div>
            <p className="text-sm">
              Jane Doe is a travel enthusiast and writer with over 10 years of
              experience exploring the hidden corners of the world. She
              specializes in off-the-beaten-path destinations and cultural
              immersion experiences.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <h3 className="mb-4 text-lg font-bold">Follow the Author</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};
