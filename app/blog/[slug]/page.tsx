import md from 'markdown-it';
import Head from 'next/head';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { findContentBySlug, findLatestPosts } from '~/utils/posts';

export const dynamicParams = false;

const getFormattedDate = (date: string) => date;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await findContentBySlug(params.slug, 'blog');
  if (!post) {
    return notFound();
  }
  return {
    title: post.title,
    description: post.description,
    authors: post.authors,
    keywords: post.keywords,
    category: post.category,
  };
}

export async function generateStaticParams() {
  return (await findLatestPosts()).map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await findContentBySlug(params.slug, 'blog');

  if (!post) {
    return notFound();
  }
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'Service',
    name: post.title,
    description: post.description,
    image: post.image,
    provider: {
      '@type': 'Person',
      name: 'Camilla Holsted',
    },
  };
  return (
    <section className="mx-auto py-8 sm:py-16 lg:py-20">
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <article>
        <header className={post.image ? 'text-center' : ''}>
          <p className="mx-auto max-w-3xl px-4 sm:px-6">
            <time dateTime={post.publishDate}>{getFormattedDate(post.publishDate)}</time> ~{' '}
            {/* {Math.ceil(post.readingTime)} min read */}
          </p>
          <h1 className="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            {post.title}
          </h1>
          {post.image ? (
            <Image
              src={post.image}
              className="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
              sizes="(max-width: 900px) 400px, 900px"
              alt={post.description}
              loading="eager"
              priority
              width={900}
              height={480}
            />
          ) : (
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <div className="border-t dark:border-slate-700" />
            </div>
          )}
        </header>
        <div
          className="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
          dangerouslySetInnerHTML={{
            __html: md({
              html: true,
            }).render(post.content),
          }}
        />
      </article>
    </section>
  );
}
