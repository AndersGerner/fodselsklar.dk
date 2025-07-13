import { Metadata } from 'next';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  alternateLocales?: string[];
  noindex?: boolean;
  canonical?: string;
}

const defaultKeywords = [
  'doula',
  'doula danmark',
  'fødselsforberedelse',
  'graviditet',
  'fødsel',
  'ammevejledning',
  'mental ro',
  'camilla holsted',
  'fødselsklar',
  'nordsjælland doula',
  'københavn doula',
  'fødselshjælp',
  'graviditetstræning',
  'smertelindring fødsel',
  'fødselsangst',
  'partner fødselsforberedelse',
  'rebozo',
  'postpartum støtte',
  'barselsstøtte',
  'hillerød doula'
];

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = 'https://mentalro.vercel.app/og-image.jpg',
  url = 'https://mentalro.vercel.app',
  type = 'website',
  author = 'Camilla Holsted',
  publishedTime,
  modifiedTime,
  locale = 'da_DK',
  alternateLocales = ['en_US', 'sv_SE'],
  noindex = false,
  canonical
}: SEOProps): Metadata {
  const siteName = 'Mental Ro - Fødselsklar A-Z';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const combinedKeywords = [...defaultKeywords, ...keywords];

  const metadata: Metadata = {
    metadataBase: new URL('https://mentalro.vercel.app'),
    title: {
      default: fullTitle,
      template: '%s | Mental Ro - Fødselsklar A-Z',
      absolute: fullTitle,
    },
    description,
    keywords: combinedKeywords,
    authors: [{ name: author, url: 'https://mentalro.vercel.app/om-mig' }],
    creator: author,
    publisher: 'Mental Ro',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      nocache: false,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonical || url,
      languages: {
        'da-DK': 'https://mentalro.vercel.app',
        'en-US': 'https://mentalro.vercel.app/en',
        'sv-SE': 'https://mentalro.vercel.app/sv',
      },
    },
    openGraph: {
      type: type as any,
      locale,
      alternateLocale: alternateLocales,
      url,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Mental Ro`,
          type: 'image/jpeg',
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: [author],
        tags: keywords,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@mentalro_dk',
      site: '@mentalro_dk',
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    ],
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
      ],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: 'Mental Ro',
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      bing: 'your-bing-verification-code',
    },
    category: 'health',
    classification: 'Pregnancy & Childbirth Services',
  };

  return metadata;
}

// Helper function for article/blog metadata
export function generateArticleMetadata(article: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishDate: string;
  modifiedDate?: string;
  author?: string;
  keywords?: string[];
}): Metadata {
  // Generate dynamic OG image URL
  const ogImageUrl = `https://mentalro.vercel.app/api/og?title=${encodeURIComponent(article.title)}&subtitle=${encodeURIComponent(article.description.substring(0, 100))}&author=${encodeURIComponent(article.author || 'Camilla Holsted')}&type=blog`;
  
  return generateSEOMetadata({
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    image: article.image || ogImageUrl,
    url: `https://mentalro.vercel.app/blog/${article.slug}`,
    type: 'article',
    author: article.author,
    publishedTime: article.publishDate,
    modifiedTime: article.modifiedDate || article.publishDate,
  });
}

// Helper function for service pages
export function generateServiceMetadata(service: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  // Generate dynamic OG image URL
  const ogImageUrl = `https://mentalro.vercel.app/api/og?title=${encodeURIComponent(service.title)}&subtitle=${encodeURIComponent(service.description.substring(0, 100))}&type=service`;
  
  return generateSEOMetadata({
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    image: service.image || ogImageUrl,
    url: `https://mentalro.vercel.app/ydelser/${service.slug}`,
    type: 'product',
  });
}