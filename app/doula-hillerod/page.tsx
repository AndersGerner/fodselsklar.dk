import type { Metadata } from 'next';
import Hero3 from '~/components/widgets/Hero3';
import Content from '~/components/widgets/Content';
import Contact from '~/components/widgets/Contact';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas, localBusinessSchema } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doula Hillerød - Camilla Holsted | Mental Ro',
  description: 'Erfaren doula i Hillerød. Personlig fødselshjælp og støtte gennem graviditet, fødsel og barsel. Book gratis konsultation i dag. Dækker hele Nordsjælland.',
  keywords: ['doula hillerød', 'fødselsforberedelse hillerød', 'jordmoder hillerød', 'graviditet hillerød', 'fødselshjælp nordsjælland'],
  url: 'https://mentalro.vercel.app/doula-hillerod',
  canonical: 'https://mentalro.vercel.app/doula-hillerod',
});

const heroData = {
  tagline: 'Din lokale doula i Hillerød',
  title: 'Professionel Doula i Hillerød og Nordsjælland',
  subtitle: 'Få personlig støtte gennem din graviditet og fødsel med en erfaren, certificeret doula. Jeg dækker Hillerød, Frederikssund, Helsingør og hele Nordsjælland.',
  callToAction: {
    text: 'Book gratis konsultation',
    href: '/kontakt',
  },
  callToAction2: {
    text: 'Ring 22 59 49 03',
    href: 'tel:+4522594903',
  },
  image: {
    src: '/images/doula-hillerod.jpg',
    alt: 'Doula Hillerød - Camilla Holsted',
  },
};

const contentData = {
  header: {
    title: 'Doula Services i Hillerød',
    subtitle: 'Personlig støtte gennem graviditet, fødsel og barsel',
  },
  content: `
    Som certificeret doula i Hillerød tilbyder jeg professionel støtte til gravide og deres partnere. 
    Med base på Frederiksbro Allè i Hillerød, dækker jeg hele Nordsjælland inklusiv:
    
    • Hillerød og omegn
    • Frederikssund
    • Helsingør
    • Fredensborg
    • Hørsholm
    • Allerød
    • Hele Region Hovedstaden
    
    Jeg samarbejder tæt med Nordsjællands Hospital og lokale jordemødre for at sikre dig den bedste oplevelse.
  `,
  items: [
    {
      title: 'Fødselsforberedelse i Hillerød',
      description: 'Intensive kurser der forbereder dig mentalt og fysisk til fødslen. Hold i Hillerød centrum.',
    },
    {
      title: 'Støtte under fødslen',
      description: 'Kontinuerlig støtte på Nordsjællands Hospital eller hjemmefødsel i Nordsjælland.',
    },
    {
      title: 'Efterfødselshjælp',
      description: 'Hjemmebesøg i Hillerød og omegn med fokus på amning og trivsel.',
    },
  ],
};

export default function DoulaHillerodPage() {
  const localSchema = {
    ...localBusinessSchema,
    name: 'Mental Ro - Doula Hillerød',
    '@id': 'https://mentalro.vercel.app/doula-hillerod#localbusiness',
    areaServed: [
      {
        '@type': 'City',
        name: 'Hillerød',
        '@id': 'https://www.wikidata.org/wiki/Q21168',
      },
      {
        '@type': 'State',
        name: 'Nordsjælland',
      },
    ],
  };

  const schemas = [...generatePageSchemas('service'), localSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Hero3 data={heroData} />
      <Content {...contentData} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Hvorfor vælge en lokal doula i Hillerød?</h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Som lokal doula i Hillerød kender jeg området, hospitalerne og de lokale ressourcer. 
            Jeg kan hurtigt være hos dig, når du har brug for det.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold">Lokal ekspertise</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tæt samarbejde med Nordsjællands Hospital og lokale sundhedsprofessionelle.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold">Hurtig respons</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Kort afstand betyder jeg hurtigt kan være hos dig i Hillerød og omegn.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold">Fleksible mødesteder</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Konsultationer i Hillerød centrum eller hjemmebesøg efter ønske.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}