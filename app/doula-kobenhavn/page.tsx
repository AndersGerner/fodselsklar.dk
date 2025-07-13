import type { Metadata } from 'next';
import Hero3 from '~/components/widgets/Hero3';
import Content from '~/components/widgets/Content';
import Contact from '~/components/widgets/Contact';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas, localBusinessSchema } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doula København - Camilla Holsted | Mental Ro',
  description: 'Erfaren doula i København og Hovedstadsområdet. Professionel fødselshjælp og støtte. Samarbejder med Rigshospitalet og Hvidovre Hospital. Book gratis konsultation.',
  keywords: ['doula københavn', 'fødselsforberedelse københavn', 'jordmoder københavn', 'graviditet københavn', 'fødselshjælp hovedstaden'],
  url: 'https://mentalro.vercel.app/doula-kobenhavn',
  canonical: 'https://mentalro.vercel.app/doula-kobenhavn',
});

const heroData = {
  tagline: 'Din doula i København',
  title: 'Certificeret Doula i København og Hovedstadsområdet',
  subtitle: 'Professionel støtte gennem graviditet og fødsel. Jeg dækker hele København og samarbejder med Rigshospitalet, Hvidovre Hospital og Herlev Hospital.',
  callToAction: {
    text: 'Book gratis konsultation',
    href: '/kontakt',
  },
  callToAction2: {
    text: 'Ring 22 59 49 03',
    href: 'tel:+4522594903',
  },
  image: {
    src: '/images/doula-kobenhavn.jpg',
    alt: 'Doula København - Camilla Holsted',
  },
};

const contentData = {
  header: {
    title: 'Doula Services i København',
    subtitle: 'Erfaren støtte til din graviditet og fødsel',
  },
  content: `
    Som certificeret doula tilbyder jeg mine services i hele København og Hovedstadsområdet. 
    Jeg har erfaring med fødsler på alle Københavns hospitaler:
    
    • Rigshospitalet
    • Hvidovre Hospital
    • Herlev Hospital
    • Bispebjerg Hospital
    • Nordsjællands Hospital
    
    Områder jeg dækker:
    • København K, V, N, S, Ø
    • Frederiksberg
    • Gentofte
    • Lyngby-Taarbæk
    • Gladsaxe
    • Hele Storkøbenhavn
  `,
  items: [
    {
      title: 'Online fødselsforberedelse',
      description: 'Fleksible online kurser perfekt for travle københavnere. Deltag hjemmefra.',
    },
    {
      title: 'Fødselshjælp København',
      description: 'Støtte på dit valgte hospital eller ved hjemmefødsel i København.',
    },
    {
      title: 'Efterfødselsbesøg',
      description: 'Hjemmebesøg i hele København med fokus på din recovery og barnets trivsel.',
    },
  ],
};

export default function DoulaKobenhavnPage() {
  const localSchema = {
    ...localBusinessSchema,
    name: 'Mental Ro - Doula København',
    '@id': 'https://mentalro.vercel.app/doula-kobenhavn#localbusiness',
    areaServed: [
      {
        '@type': 'City',
        name: 'København',
        '@id': 'https://www.wikidata.org/wiki/Q1748',
      },
      {
        '@type': 'State',
        name: 'Hovedstadsområdet',
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
          <h2 className="mb-4 text-3xl font-bold">Hvorfor vælge Mental Ro som din doula i København?</h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Med base i Nordsjælland og fleksibel dækning af hele hovedstadsområdet, 
            tilbyder jeg personlig og professionel doula-støtte tilpasset dit behov.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold">Erfaring med KBH hospitaler</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Kender alle fødesteder i København og deres procedurer grundigt.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold">Fleksible mødetider</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tilpasser mig dit skema - aften og weekend konsultationer muligt.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold">Online muligheder</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Virtuelle konsultationer og online fødselsforberedelse tilgængelig.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}