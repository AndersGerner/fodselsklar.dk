import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata } from '~/utils/metadata';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Web Stories - Graviditet & Fødsel Tips',
  description: 'Visuelle historier med tips og råd om graviditet, fødselsforberedelse og forældreskab. Swipe gennem korte, informative guides.',
  keywords: ['web stories', 'graviditet tips', 'fødsel guide', 'doula råd'],
  url: 'https://mentalro.vercel.app/stories',
});

const stories = [
  {
    slug: 'forbered-dig-til-fodslen',
    title: '5 Tips til at Forberede Dig til Fødslen',
    description: 'Mental og fysisk forberedelse',
    coverImage: '/stories/birth-prep-cover.jpg',
    duration: '2 min',
  },
  {
    slug: 'amning-101',
    title: 'Amning 101: Kom Godt Fra Start',
    description: 'Guide til succesfuld amning',
    coverImage: '/stories/breastfeeding-cover.jpg',
    duration: '3 min',
  },
  {
    slug: 'partner-support',
    title: 'Sådan Støtter Partneren Bedst',
    description: 'Guide til fødselssupport',
    coverImage: '/stories/partner-cover.jpg',
    duration: '2 min',
  },
  {
    slug: 'efter-fodslen',
    title: 'De Første Dage Efter Fødslen',
    description: 'Hvad du kan forvente',
    coverImage: '/stories/postpartum-cover.jpg',
    duration: '3 min',
  },
];

export default function StoriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Web Stories - Mental Ro',
    description: 'Samling af visuelle historier om graviditet og fødsel',
    url: 'https://mentalro.vercel.app/stories',
    hasPart: stories.map(story => ({
      '@type': 'NewsArticle',
      headline: story.title,
      description: story.description,
      url: `https://mentalro.vercel.app/stories/${story.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Web Stories
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Swipe gennem korte, visuelle historier med tips og råd om graviditet og fødsel
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
            >
              <div className="aspect-[9/16] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${story.coverImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Story Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm text-white/80">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{story.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {story.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {story.description}
                  </p>
                </div>

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Story Format Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-gray-900">Story</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Har du brug for personlig vejledning?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Book en gratis konsultation og få skræddersyet råd til din situation
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Book Gratis Konsultation
          </Link>
        </div>
      </section>
    </>
  );
}