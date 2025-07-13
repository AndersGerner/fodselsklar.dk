import type { Metadata } from 'next';
import Hero3 from '~/components/widgets/Hero3';
import Content from '~/components/widgets/Content';
import Contact from '~/components/widgets/Contact';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas, localBusinessSchema } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doula Birkerød - Camilla Holsted | Mental Ro',
  description: 'Erfaren doula i Birkerød. Personlig fødselshjælp og støtte gennem graviditet, fødsel og barsel. Kun 20 minutter fra Hillerød. Book gratis konsultation i dag.',
  keywords: [
    'doula birkerød', 
    'fødselsforberedelse birkerød', 
    'jordmoder birkerød', 
    'graviditet birkerød', 
    'fødselshjælp birkerød',
    'ammevejledning birkerød',
    'doula nær birkerød',
    'privat jordmoder birkerød'
  ],
  url: 'https://mentalro.vercel.app/doula-birkerød',
  canonical: 'https://mentalro.vercel.app/doula-birkerød',
});

const heroData = {
  tagline: 'Din lokale doula i Birkerød',
  title: 'Professionel Doula i Birkerød - Kun 20 Minutter Væk',
  subtitle: 'Få personlig støtte gennem din graviditet og fødsel med en erfaren, certificeret doula. Jeg betjener Birkerød og omegn fra mit kontor i Hillerød.',
  callToAction: {
    text: 'Book gratis konsultation',
    href: '/kontakt',
  },
  callToAction2: {
    text: 'Ring 22 59 49 03',
    href: 'tel:+4522594903',
  },
  image: {
    src: '/images/doula-birkerød.jpg',
    alt: 'Doula Birkerød - Camilla Holsted',
  },
};

const contentData = {
  header: {
    title: 'Doula Services i Birkerød',
    subtitle: 'Personlig støtte gennem graviditet, fødsel og barsel',
  },
  content: `
    Som certificeret doula betjener jeg hele Birkerød og omegn med professionel støtte til gravide og deres partnere. 
    Fra mit kontor på Frederiksbro Allè i Hillerød er jeg kun 20 minutter væk fra Birkerød centrum.
    
    ## Områder jeg dækker i Birkerød:
    • Birkerød centrum
    • Birkerød Station
    • Nærområder til Birkerød
    • Hele Rudersdal Kommune
    
    ## Hvorfor vælge en lokal doula i Birkerød?
    
    **Lokalt kendskab:** Jeg kender de bedste resurser i Birkerød og omegn, fra gravide-yoga til ammecafeer.
    
    **Kort afstand:** Med kun 20 minutters kørsel er jeg altid tæt på, når du har brug for støtte.
    
    **Hospital kendskab:** Jeg har omfattende erfaring med Nordsjællands Hospital, hvor de fleste fra Birkerød føder.
    
    **Familieorienteret:** Jeg forstår Birkerød-familiernes behov for støtte og fællesskab.
    
    ## Mine services i Birkerød:
    
    ### Fødselsforberedelse
    - Personlig fødselsforberedelse tilpasset Birkerød familier
    - Praktisk vejledning til fødsel på Nordsjællands Hospital
    - Smertelindring og åndedrætstekniker
    - Partner-involvering og støtte
    
    ### Fødselsstøtte
    - Kontinuerlig støtte under hele fødslen
    - Emotional og praktisk hjælp
    - Kommunikation med sundhedspersonalet
    - Dokumentation af fødselsoplevelsen
    
    ### Postpartum støtte
    - Ammevejledning i hjemmet (Birkerød)
    - Barselsstøtte og praktisk hjælp
    - Emotional støtte efter fødslen
    - Vejledning til søvnrutiner
    
    ### Graviditetsstøtte
    - Månedlige opfølgninger gennem graviditeten
    - Guidance til graviditetsgenerne
    - Forberedelse til forældrerolle
    - Netværk til andre gravide i Birkerød
    
    ## Birkerød-specifikke ressourcer:
    
    - **Birkerød Sundhedscenter:** Samarbejde med jordemødre
    - **Birkerød Station:** Let adgang til transport
    - **Lokale apoteker:** Kendskab til specialprodukter
    - **Ammecafeer:** Vejledning til bedste lokale tilbud
    - **Babysvømning:** Anbefalinger til lokale tilbud
    - **Birkerød Gymnasium:** Sundhedstilbud og faciliteter
    - **Lokale parker:** Perfekt til gravide-gåture
    
    ## Priser for Birkerød (2025):
    - **Komplet fødselspakke:** 12.000 kr.
    - **Fødselsforberedelse:** 2.500 kr.
    - **Fødselsstøtte:** 8.000 kr.
    - **Postpartum støtte:** 1.500 kr./besøg
    - **Konsultation:** 750 kr./time
    
    *Særlige pakkepriser for Birkerød-familier tilgængelige*
    
    ## Testimonials fra Birkerød:
    
    > "Camilla var fantastisk! Hun kom til os i Birkerød og var så professionel og støttende. Jeg kan ikke anbefale hende nok." - Sofie, Birkerød
    
    > "Som førstegangsforældre var vi så nervøse, men Camilla guidede os perfekt gennem hele processen." - Anders & Julie, Birkerød
    
    ## Særlige fordele for Birkerød-familier:
    
    **Fællesskabsfokus:** Jeg forstår vigtigheden af community og fællesskab for Birkerød-familier.
    
    **Fleksible mødetider:** Jeg tilbyder flexible konsultationer, der passer til jeres skema.
    
    **Netværk:** Jeg kan hjælpe jer med at finde andre gravide i området til støtte og venskaber.
    
    **Efterfødsel support:** Jeg kender de bedste lokale ressourcer til nye familier i Birkerød.
    
    ## Book din konsultation i Birkerød
    
    Interesseret i professionel doulastøtte i Birkerød? Jeg tilbyder gratis 30 minutters konsultation, hvor vi kan mødes enten i Birkerød eller på mit kontor i Hillerød.
    
    **Kontakt mig i dag:**
    - 📞 Telefon: 22 59 49 03
    - 📧 Email: kontakt@mentalro.nu
    - 🏠 Hjemmebesøg i Birkerød muligt
    - 📍 Kontor: Frederiksbro Allè 104, Hillerød
    `,
  image: {
    src: '/images/doula-birkerød-services.jpg',
    alt: 'Doula services i Birkerød',
  },
  isReversed: false,
};

// Enhanced local business schema for Birkerød
const birkerødBusinessSchema = {
  ...localBusinessSchema,
  '@id': 'https://mentalro.vercel.app/doula-birkerød#localbusiness',
  name: 'Mental Ro - Doula Birkerød',
  description: 'Certificeret Doula i Birkerød. Tilbyder personlig fødselshjælp, fødselsforberedelse og emotional støtte til gravide og deres partnere i Birkerød og omegn.',
  areaServed: {
    '@type': 'City',
    name: 'Birkerød',
    '@id': 'https://www.wikidata.org/wiki/Q2709070'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.8500,
    longitude: 12.4333
  },
  priceRange: '750-12000 DKK',
  url: 'https://mentalro.vercel.app/doula-birkerød',
  sameAs: [
    'https://www.facebook.com/mentalro',
    'https://www.instagram.com/mentalro_dk'
  ]
};

export default function DoulaBirkerødPage() {
  const schemas = generatePageSchemas('service', { 
    localBusiness: birkerødBusinessSchema,
    service: {
      name: 'Doula Services Birkerød',
      description: 'Professionel doulastøtte i Birkerød',
      url: 'https://mentalro.vercel.app/doula-birkerød',
      areaServed: 'Birkerød',
      provider: 'Mental Ro'
    }
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />
      <Hero3 data={heroData} />
      <Content {...contentData} />
      <Contact />
    </>
  );
}