export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://mentalro.vercel.app/#organization',
  name: 'Mental Ro',
  url: 'https://mentalro.vercel.app',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://mentalro.vercel.app/#logo',
    url: 'https://mentalro.vercel.app/logo.png',
    width: '512',
    height: '512',
    caption: 'Mental Ro Logo'
  },
  image: {
    '@id': 'https://mentalro.vercel.app/#logo'
  },
  sameAs: [
    'https://www.facebook.com/mentalro',
    'https://www.instagram.com/mentalro_dk',
    'https://www.linkedin.com/company/mentalro'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+45 22 59 49 03',
    contactType: 'customer service',
    areaServed: 'DK',
    availableLanguage: ['Danish', 'English']
  }
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mentalro.vercel.app/#localbusiness',
  name: 'Mental Ro - Camilla Holsted',
  description: 'Certificeret Doula i Danmark. Tilbyder personlig fødselshjælp, smertelindring og følelsesmæssig støtte til gravide og deres partnere.',
  url: 'https://mentalro.vercel.app',
  telephone: '+45 22 59 49 03',
  email: 'kontakt@mentalro.nu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Frederiksbro Allè 104, 4. TV',
    addressLocality: 'Hillerød',
    postalCode: '3400',
    addressCountry: 'DK'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.9297,
    longitude: 12.3086
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:00',
      closes: '12:00'
    }
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 55.9297,
      longitude: 12.3086
    },
    geoRadius: '50000'
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mentalro.vercel.app/kontakt',
      inLanguage: 'da',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform'
      ]
    },
    result: {
      '@type': 'Reservation',
      name: 'Book en konsultation'
    }
  }
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://mentalro.vercel.app/#person',
  name: 'Camilla Holsted',
  givenName: 'Camilla',
  familyName: 'Holsted',
  jobTitle: 'Certificeret Doula',
  description: 'Erfaren doula og fødselshjælper med speciale i mental forberedelse til fødsel',
  url: 'https://mentalro.vercel.app/om-mig',
  email: 'kontakt@mentalro.nu',
  telephone: '+45 22 59 49 03',
  image: 'https://mentalro.vercel.app/camilla-holsted.jpg',
  worksFor: {
    '@id': 'https://mentalro.vercel.app/#organization'
  },
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Region Hovedstadens psykiatri'
    },
    {
      '@type': 'Organization',
      name: 'Fitness Institute'
    }
  ],
  knowsAbout: [
    'Doula services',
    'Graviditet',
    'Fødselsforberedelse',
    'Ammevejledning',
    'Mental sundhed under graviditet',
    'Partner support',
    'Rebozo teknik',
    'Smertelindring under fødsel'
  ]
};

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  duration?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  name: service.name,
  description: service.description,
  url: service.url,
  provider: {
    '@id': 'https://mentalro.vercel.app/#person'
  },
  areaServed: {
    '@type': 'State',
    name: 'Danmark'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Doula Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description
        },
        price: service.price || 'Contact for pricing',
        priceCurrency: 'DKK'
      }
    ]
  }
});

export const faqSchema = (faqs: Array<{question: string; answer: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const breadcrumbSchema = (items: Array<{name: string; url: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const webPageSchema = (page: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{name: string; url: string}>;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${page.url}#webpage`,
  url: page.url,
  name: page.name,
  description: page.description,
  isPartOf: {
    '@id': 'https://mentalro.vercel.app/#website'
  },
  about: {
    '@id': 'https://mentalro.vercel.app/#person'
  },
  ...(page.breadcrumbs && {
    breadcrumb: breadcrumbSchema(page.breadcrumbs)
  })
});

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://mentalro.vercel.app/#website',
  url: 'https://mentalro.vercel.app',
  name: 'Mental Ro - Fødselsklar A-Z',
  description: 'Certificeret Doula i Danmark. Tilbyder personlig fødselshjælp, smertelindring og følelsesmæssig støtte.',
  publisher: {
    '@id': 'https://mentalro.vercel.app/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mentalro.vercel.app/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  },
  inLanguage: 'da-DK'
};

export const reviewSchema = (review: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  author: {
    '@type': 'Person',
    name: review.author
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: review.rating,
    bestRating: '5',
    worstRating: '1'
  },
  reviewBody: review.reviewBody,
  datePublished: review.datePublished,
  itemReviewed: {
    '@id': 'https://mentalro.vercel.app/#localbusiness'
  }
});

export const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  ratingValue: '4.9',
  reviewCount: '47',
  bestRating: '5',
  worstRating: '1'
};

export const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Fødselsforberedelse - Fødselsklar A-Z',
  description: 'Komplet fødselsforberedelseskursus der forbereder dig mentalt og fysisk til fødslen',
  provider: {
    '@id': 'https://mentalro.vercel.app/#person'
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    name: 'Fødselsforberedelse - Forår 2025',
    description: 'Intensive fødselsforberedelseskursus over 6 uger',
    courseMode: 'Blended',
    duration: 'P6W',
    inLanguage: 'da',
    instructor: {
      '@id': 'https://mentalro.vercel.app/#person'
    }
  }
};

// Helper function to generate all schemas for a page
export function generatePageSchemas(type: 'home' | 'about' | 'service' | 'blog' | 'contact', additionalData?: any) {
  const schemas: any[] = [websiteSchema, organizationSchema, localBusinessSchema, personSchema];
  
  switch (type) {
    case 'home':
      schemas.push(aggregateRatingSchema, courseSchema);
      break;
    case 'about':
      // Person schema is already included
      break;
    case 'service':
      if (additionalData) {
        schemas.push(serviceSchema(additionalData));
      }
      break;
    case 'blog':
      // Article schema handled separately in blog pages
      break;
    case 'contact':
      schemas.push({
        ...localBusinessSchema,
        '@type': ['LocalBusiness', 'MedicalBusiness'],
        medicalSpecialty: 'Pregnancy and Childbirth Support'
      } as any);
      break;
  }
  
  return schemas;
}