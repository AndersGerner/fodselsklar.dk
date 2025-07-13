import type { Metadata } from 'next';
import Hero3 from '~/components/widgets/Hero3';
import Content from '~/components/widgets/Content';
import Contact from '~/components/widgets/Contact';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas, localBusinessSchema } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doula Fredensborg - Camilla Holsted | Mental Ro',
  description: 'Erfaren doula i Fredensborg. Personlig fødselshjælp og støtte gennem graviditet, fødsel og barsel. Kun 15 minutter fra Hillerød. Book gratis konsultation i dag.',
  keywords: [
    'doula fredensborg', 
    'fødselsforberedelse fredensborg', 
    'jordmoder fredensborg', 
    'graviditet fredensborg', 
    'fødselshjælp fredensborg',
    'ammevejledning fredensborg',
    'doula nær fredensborg',
    'privat jordmoder fredensborg'
  ],
  url: 'https://mentalro.vercel.app/doula-fredensborg',
  canonical: 'https://mentalro.vercel.app/doula-fredensborg',
});

const heroData = {
  tagline: 'Din lokale doula i Fredensborg',
  title: 'Professionel Doula i Fredensborg - Kun 15 Minutter Væk',
  subtitle: 'Få personlig støtte gennem din graviditet og fødsel med en erfaren, certificeret doula. Jeg betjener Fredensborg og omegn fra mit kontor i Hillerød.',
  callToAction: {
    text: 'Book gratis konsultation',
    href: '/kontakt',
  },
  callToAction2: {
    text: 'Ring 22 59 49 03',
    href: 'tel:+4522594903',
  },
  image: {
    src: '/images/doula-fredensborg.jpg',
    alt: 'Doula Fredensborg - Camilla Holsted',
  },
};

const contentData = {
  header: {
    title: 'Doula Services i Fredensborg',
    subtitle: 'Personlig støtte gennem graviditet, fødsel og barsel',
  },
  content: `
    Som certificeret doula betjener jeg hele Fredensborg kommune med professionel støtte til gravide og deres partnere. 
    Fra mit kontor på Frederiksbro Allè i Hillerød er jeg kun 15 minutter væk fra Fredensborg.
    
    ## Områder jeg dækker i Fredensborg:
    • Fredensborg centrum
    • Humlebæk
    • Nivå
    • Kokkedal
    • Alle områder i Fredensborg Kommune
    
    ## Hvorfor vælge en lokal doula i Fredensborg?
    
    **Lokalt kendskab:** Jeg kender de bedste resurser i Fredensborg og omegn, fra gravide-yoga til ammecafeer.
    
    **Kort afstand:** Med kun 15 minutters kørsel er jeg altid tæt på, når du har brug for støtte.
    
    **Hospital kendskab:** Jeg har omfattende erfaring med Nordsjællands Hospital, hvor de fleste fra Fredensborg føder.
    
    **Flexible services:** Jeg tilbyder hjemmebesøg i Fredensborg eller konsultationer på mit kontor i Hillerød.
    
    ## Mine services i Fredensborg:
    
    ### Fødselsforberedelse
    - Personlig fødselsforberedelse tilpasset Fredensborg familier
    - Praktisk vejledning til fødsel på Nordsjællands Hospital
    - Smertelindring og åndedrætstekniker
    - Partner-involvering og støtte
    
    ### Fødselsstøtte
    - Kontinuerlig støtte under hele fødslen
    - Emotional og praktisk hjælp
    - Kommunikation med sundhedspersonalet
    - Dokumentation af fødselsoplevelsen
    
    ### Postpartum støtte
    - Ammevejledning i hjemmet (Fredensborg)
    - Barselsstøtte og praktisk hjælp
    - Emotional støtte efter fødslen
    - Vejledning til søvnrutiner
    
    ### Graviditetsstøtte
    - Månedlige opfølgninger gennem graviditeten
    - Guidance til graviditetsgenerne
    - Forberedelse til forældrerolle
    - Netværk til andre gravide i Fredensborg
    
    ## Fredensborg-specifikke ressourcer:
    
    - **Fredensborg Sundhedscenter:** Samarbejde med jordemødre
    - **Louisiana Museum:** Gravide-arrangementer og kulturelle oplevelser
    - **Lokalapoteker:** Kendskab til specialprodukter
    - **Ammecafeer:** Vejledning til bedste lokale tilbud
    - **Babysvømning:** Anbefalinger til lokale tilbud
    - **Fredensborg Slotshave:** Perfekt til gravide-gåture
    
    ## Priser for Fredensborg (2025):
    - **Komplet fødselspakke:** 12.000 kr.
    - **Fødselsforberedelse:** 2.500 kr.
    - **Fødselsstøtte:** 8.000 kr.
    - **Postpartum støtte:** 1.500 kr./besøg
    - **Konsultation:** 750 kr./time
    
    *Særlige pakkepriser for Fredensborg-familier tilgængelige*
    
    ## Testimonials fra Fredensborg:
    
    > "Camilla var utrolig professionel og varm. Hun kom til os i Humlebæk og gjorde hele fødselsoplevelsen så positiv. Jeg kan varmt anbefale hende!" - Anna, Humlebæk
    
    > "Som par var vi utrolig nervøse for vores første fødsel. Camilla guidede os perfekt og var der hver gang, vi havde brug for hende." - Lars & Mette, Fredensborg
    
    ## Særlige fordele for Fredensborg-familier:
    
    **Kulturel forståelse:** Jeg forstår den unikke kultur i Fredensborg med både internationale og danske familier.
    
    **Fleksible mødetider:** Jeg tilbyder flexible konsultationer, der passer til dit skema.
    
    **Netværk:** Jeg kan hjælpe dig med at finde andre gravide i området til støtte og venskaber.
    
    **Efterfødsel support:** Jeg kender de bedste lokale ressourcer til nye familier.
    
    ## Book din konsultation i Fredensborg
    
    Interesseret i professionel doulastøtte i Fredensborg? Jeg tilbyder gratis 30 minutters konsultation, hvor vi kan mødes enten i Fredensborg eller på mit kontor i Hillerød.
    
    **Kontakt mig i dag:**
    - 📞 Telefon: 22 59 49 03
    - 📧 Email: kontakt@mentalro.nu
    - 🏠 Hjemmebesøg i Fredensborg muligt
    - 📍 Kontor: Frederiksbro Allè 104, Hillerød
    `,
  image: {
    src: '/images/doula-fredensborg-services.jpg',
    alt: 'Doula services i Fredensborg',
  },
  isReversed: false,
};

// Enhanced local business schema for Fredensborg
const fredensborgBusinessSchema = {
  ...localBusinessSchema,
  '@id': 'https://mentalro.vercel.app/doula-fredensborg#localbusiness',
  name: 'Mental Ro - Doula Fredensborg',
  description: 'Certificeret Doula i Fredensborg. Tilbyder personlig fødselshjælp, fødselsforberedelse og emotional støtte til gravide og deres partnere i Fredensborg og omegn.',
  areaServed: {
    '@type': 'City',
    name: 'Fredensborg',
    '@id': 'https://www.wikidata.org/wiki/Q26886'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.9742,
    longitude: 12.4058
  },
  priceRange: '750-12000 DKK',
  url: 'https://mentalro.vercel.app/doula-fredensborg',
  sameAs: [
    'https://www.facebook.com/mentalro',
    'https://www.instagram.com/mentalro_dk'
  ]
};

export default function DoulaFredensborgPage() {
  const schemas = generatePageSchemas('service', { 
    localBusiness: fredensborgBusinessSchema,
    service: {
      name: 'Doula Services Fredensborg',
      description: 'Professionel doulastøtte i Fredensborg',
      url: 'https://mentalro.vercel.app/doula-fredensborg',
      areaServed: 'Fredensborg',
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