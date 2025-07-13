import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateSEOMetadata } from '~/utils/metadata';

interface Story {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  pages: Array<{
    image: string;
    title: string;
    content: string;
  }>;
}

// Example stories data (in production, fetch from CMS)
const stories: Story[] = [
  {
    slug: 'forbered-dig-til-fodslen',
    title: '5 Tips til at Forberede Dig til Fødslen',
    description: 'Få de bedste tips til mental og fysisk forberedelse før fødslen',
    coverImage: '/stories/birth-prep-cover.jpg',
    pages: [
      {
        image: '/stories/birth-prep-1.jpg',
        title: 'Tip 1: Start tidligt',
        content: 'Begynd din forberedelse allerede i 2. trimester for bedste resultater.',
      },
      {
        image: '/stories/birth-prep-2.jpg',
        title: 'Tip 2: Involver din partner',
        content: 'Fødselsforberedelse er en fælles rejse - tag din partner med.',
      },
      {
        image: '/stories/birth-prep-3.jpg',
        title: 'Tip 3: Øv åndedræt',
        content: 'Daglige åndedrætsøvelser hjælper dig gennem veerne.',
      },
      {
        image: '/stories/birth-prep-4.jpg',
        title: 'Tip 4: Hold dig aktiv',
        content: 'Let motion og yoga styrker din krop til fødslen.',
      },
      {
        image: '/stories/birth-prep-5.jpg',
        title: 'Tip 5: Book en doula',
        content: 'Professionel støtte gør hele forskellen. Kontakt mig i dag!',
      },
    ],
  },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const story = stories.find(s => s.slug === params.slug);
  
  if (!story) {
    return {};
  }

  return generateSEOMetadata({
    title: story.title,
    description: story.description,
    image: story.coverImage,
    url: `https://mentalro.vercel.app/stories/${story.slug}`,
    type: 'article',
  });
}

export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default function WebStoryPage({ params }: { params: { slug: string } }) {
  const story = stories.find(s => s.slug === params.slug);

  if (!story) {
    return notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: story.title,
    description: story.description,
    image: story.coverImage,
    datePublished: new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: 'Camilla Holsted',
      url: 'https://mentalro.vercel.app/om-mig',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mental Ro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mentalro.vercel.app/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="web-story max-w-screen-sm mx-auto">
        {/* Story Header */}
        <header className="story-header p-4 bg-gradient-to-b from-black/50 to-transparent absolute top-0 left-0 right-0 z-10">
          <div className="flex items-center justify-between text-white">
            <h1 className="text-lg font-bold">{story.title}</h1>
            <button className="p-2" aria-label="Close story">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        {/* Story Pages */}
        <div className="story-pages relative h-screen overflow-hidden">
          {story.pages.map((page, index) => (
            <section
              key={index}
              className="story-page absolute inset-0 flex flex-col justify-end"
              style={{
                backgroundImage: `url(${page.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="story-content bg-gradient-to-t from-black/80 to-transparent p-8 pt-20">
                <h2 className="text-2xl font-bold text-white mb-3">{page.title}</h2>
                <p className="text-white text-lg">{page.content}</p>
              </div>
              
              {/* Page Progress */}
              <div className="absolute top-16 left-4 right-4 flex gap-1">
                {story.pages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i <= index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Navigation */}
        <div className="story-navigation absolute inset-0 flex">
          <button className="flex-1" aria-label="Previous page" />
          <button className="flex-1" aria-label="Next page" />
        </div>

        {/* Call to Action */}
        <div className="story-cta absolute bottom-20 left-4 right-4">
          <a
            href="/kontakt"
            className="block bg-primary-600 text-white text-center py-3 px-6 rounded-full font-semibold"
          >
            Book Gratis Konsultation
          </a>
        </div>
      </article>

      <style jsx>{`
        .web-story {
          position: relative;
          touch-action: manipulation;
        }

        .story-page {
          opacity: 0;
          animation: fadeIn 0.3s forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @media (min-width: 640px) {
          .web-story {
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </>
  );
}