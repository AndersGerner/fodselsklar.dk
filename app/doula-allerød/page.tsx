import type { Metadata } from 'next';
import Hero3 from '~/components/widgets/Hero3';
import Content from '~/components/widgets/Content';
import Contact from '~/components/widgets/Contact';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas, localBusinessSchema } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doula Allerød - Camilla Holsted | Mental Ro',
  description: 'Erfaren doula i Allerød. Personlig fødselshjælp og støtte gennem graviditet, fødsel og barsel. Kun 12 minutter fra Hillerød. Book gratis konsultation i dag.',
  keywords: [
    'doula allerød', 
    'fødselsforberedelse allerød', 
    'jordmoder allerød', 
    'graviditet allerød', 
    'fødselshjælp allerød',
    'ammevejledning allerød',
    'doula nær allerød',
    'privat jordmoder allerød'
  ],
  url: 'https://mentalro.vercel.app/doula-allerød',
  canonical: 'https://mentalro.vercel.app/doula-allerød',
});

const heroData = {
  tagline: 'Din lokale doula i Allerød',
  title: 'Professionel Doula i Allerød - Kun 12 Minutter Væk',
  subtitle: 'Få personlig støtte gennem din graviditet og fødsel med en erfaren, certificeret doula. Jeg betjener Allerød og omegn fra mit kontor i Hillerød.',
  callToAction: {
    text: 'Book gratis konsultation',
    href: '/kontakt',
  },
  callToAction2: {
    text: 'Ring 22 59 49 03',
    href: 'tel:+4522594903',
  },
  image: {
    src: '/images/doula-allerød.jpg',
    alt: 'Doula Allerød - Camilla Holsted',
  },
};

const contentData = {
  header: {
    title: 'Doula Services i Allerød',
    subtitle: 'Personlig støtte gennem graviditet, fødsel og barsel',
  },
  content: `
    Som certificeret doula betjener jeg hele Allerød kommune med professionel støtte til gravide og deres partnere. 
    Fra mit kontor på Frederiksbro Allè i Hillerød er jeg kun 12 minutter væk fra Allerød centrum.
    
    ## Områder jeg dækker i Allerød:
    • Allerød centrum
    • Lynge
    • Blovstrød
    • Farum Midtpunkt (grænseområde)
    • Alle områder i Allerød Kommune
    
    ## Hvorfor vælge en lokal doula i Allerød?
    
    **Lokalt kendskab:** Jeg kender de bedste resurser i Allerød og omegn, fra gravide-yoga til ammecafeer.
    
    **Kort afstand:** Med kun 12 minutters kørsel er jeg altid tæt på, når du har brug for støtte.
    
    **Hospital kendskab:** Jeg har omfattende erfaring med Nordsjællands Hospital, hvor de fleste fra Allerød føder.
    
    **Flexible services:** Jeg tilbyder hjemmebesøg i Allerød eller konsultationer på mit kontor i Hillerød.
    
    ## Mine services i Allerød:
    
    ### Fødselsforberedelse
    - Personlig fødselsforberedelse tilpasset Allerød familier
    - Praktisk vejledning til fødsel på Nordsjællands Hospital
    - Smertelindring og åndedrætstekniker
    - Partner-involvering og støtte
    
    ### Fødselsstøtte
    - Kontinuerlig støtte under hele fødslen
    - Emotional og praktisk hjælp
    - Kommunikation med sundhedspersonalet
    - Dokumentation af fødselsoplevelsen
    
    ### Postpartum støtte
    - Ammevejledning i hjemmet (Allerød)
    - Barselsstøtte og praktisk hjælp
    - Emotional støtte efter fødslen
    - Vejledning til søvnrutiner
    
    ### Graviditetsstøtte
    - Månedlige opfølgninger gennem graviditeten
    - Guidance til graviditetsgenerne
    - Forberedelse til forældrerolle
    - Netværk til andre gravide i Allerød
    
    ## Allerød-specifikke ressourcer:
    
    - **Allerød Sundhedscenter:** Samarbejde med jordemødre
    - **Allerød Bibliotek:** Gravide-arrangementer og ressourcer
    - **Lokale apoteker:** Kendskab til specialprodukter
    - **Ammecafeer:** Vejledning til bedste lokale tilbud
    - **Babysvømning:** Anbefalinger til lokale tilbud
    
    ## Priser for Allerød (2025):
    - **Komplet fødselspakke:** 12.000 kr.
    - **Fødselsforberedelse:** 2.500 kr.
    - **Fødselsstøtte:** 8.000 kr.
    - **Postpartum støtte:** 1.500 kr./besøg
    - **Konsultation:** 750 kr./time
    
    *Særlige pakkepriser for Allerød-familier tilgængelige*
    
    ## Testimonials fra Allerød:
    
    > "Camilla var fantastisk! Hun kom til os i Allerød og gjorde hele oplevelsen så meget nemmere. Hendes lokale kendskab gjorde en stor forskel." - Marie, Allerød
    
    > "Som førstegangsfødende var jeg så nervøs, men Camilla guidede os perfekt. Hun kendte alt til Nordsjællands Hospital og var der hele vejen." - Thomas & Emma, Lynge
    
    ## Book din konsultation i Allerød
    
    Interesseret i professionel doulastøtte i Allerød? Jeg tilbyder gratis 30 minutters konsultation, hvor vi kan mødes enten i Allerød eller på mit kontor i Hillerød.
    
    **Kontakt mig i dag:**
    - 📞 Telefon: 22 59 49 03
    - 📧 Email: kontakt@mentalro.nu
    - 🏠 Hjemmebesøg i Allerød muligt
    - 📍 Kontor: Frederiksbro Allè 104, Hillerød
    `,
  image: {
    src: '/images/doula-allerød-services.jpg',
    alt: 'Doula services i Allerød',
  },
  isReversed: false,
};

// Enhanced local business schema for Allerød
const allerødBusinessSchema = {
  ...localBusinessSchema,
  '@id': 'https://mentalro.vercel.app/doula-allerød#localbusiness',
  name: 'Mental Ro - Doula Allerød',
  description: 'Certificeret Doula i Allerød. Tilbyder personlig fødselshjælp, fødselsforberedelse og emotional støtte til gravide og deres partnere i Allerød og omegn.',
  areaServed: {
    '@type': 'City',
    name: 'Allerød',
    '@id': 'https://www.wikidata.org/wiki/Q26787'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.8672,
    longitude: 12.3581
  },
  priceRange: '750-12000 DKK',
  url: 'https://mentalro.vercel.app/doula-allerød',
  sameAs: [
    'https://www.facebook.com/mentalro',
    'https://www.instagram.com/mentalro_dk'
  ]
};

export default function DoulaAllerødPage() {
  const schemas = generatePageSchemas('service', { 
    localBusiness: allerødBusinessSchema,
    service: {
      name: 'Doula Services Allerød',
      description: 'Professionel doulastøtte i Allerød',
      url: 'https://mentalro.vercel.app/doula-allerød',
      areaServed: 'Allerød',
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