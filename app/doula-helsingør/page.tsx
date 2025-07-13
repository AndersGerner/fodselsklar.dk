import type { Metadata } from 'next';
import Hero3 from '~/components/widgets/Hero3';
import Content from '~/components/widgets/Content';
import Contact from '~/components/widgets/Contact';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas, localBusinessSchema } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doula Helsingør - Camilla Holsted | Mental Ro',
  description: 'Erfaren doula i Helsingør. Personlig fødselshjælp og støtte gennem graviditet, fødsel og barsel. Kun 25 minutter fra Hillerød. Book gratis konsultation i dag.',
  keywords: [
    'doula helsingør', 
    'fødselsforberedelse helsingør', 
    'jordmoder helsingør', 
    'graviditet helsingør', 
    'fødselshjælp helsingør',
    'ammevejledning helsingør',
    'doula nær helsingør',
    'privat jordmoder helsingør',
    'doula kronborg',
    'fødsel helsingør hospital'
  ],
  url: 'https://mentalro.vercel.app/doula-helsingør',
  canonical: 'https://mentalro.vercel.app/doula-helsingør',
});

const heroData = {
  tagline: 'Din lokale doula i Helsingør',
  title: 'Professionel Doula i Helsingør - Historisk By, Moderne Omsorg',
  subtitle: 'Få personlig støtte gennem din graviditet og fødsel med en erfaren, certificeret doula. Jeg betjener Helsingør og omegn fra mit kontor i Hillerød.',
  callToAction: {
    text: 'Book gratis konsultation',
    href: '/kontakt',
  },
  callToAction2: {
    text: 'Ring 22 59 49 03',
    href: 'tel:+4522594903',
  },
  image: {
    src: '/images/doula-helsingør.jpg',
    alt: 'Doula Helsingør - Camilla Holsted',
  },
};

const contentData = {
  header: {
    title: 'Doula Services i Helsingør',
    subtitle: 'Professionel støtte i Danmarks historiske havneby',
  },
  content: `
    Som certificeret doula betjener jeg hele Helsingør kommune med professionel støtte til gravide og deres partnere. 
    Fra mit kontor på Frederiksbro Allè i Hillerød er jeg kun 25 minutter væk fra Helsingør centrum.
    
    ## Områder jeg dækker i Helsingør:
    • Helsingør centrum
    • Helsingør Havn
    • Kvistgård
    • Espergærde (grænseområde)
    • Hele Helsingør Kommune
    
    ## Hvorfor vælge en doula i Helsingør?
    
    **Historisk charm:** Helsingør er en smuk historisk by med en unik atmosfære - perfekt for rolige graviditeter.
    
    **Havneby fordele:** Frisk luft og smukke gåture langs havnen er ideelle for gravide.
    
    **Kulturelt rigt:** Kronborg Slot og kulturelle aktiviteter giver inspiration under graviditeten.
    
    **Stærkt fællesskab:** Helsingør har en tæt-knyttet community, der støtter hinanden.
    
    ## Mine services i Helsingør:
    
    ### Fødselsforberedelse
    - Personlig fødselsforberedelse tilpasset Helsingør familier
    - Praktisk vejledning til fødsel på Nordsjællands Hospital
    - Alternativ: Støtte til fødsel på Hillerød Hospital
    - Smertelindring og åndedrætstekniker
    - Partner-involvering og støtte
    
    ### Fødselsstøtte
    - Kontinuerlig støtte under hele fødslen
    - Transport-planlægning til hospital
    - Emotional og praktisk hjælp
    - Kommunikation med sundhedspersonalet
    - Dokumentation af fødselsoplevelsen
    
    ### Postpartum støtte
    - Ammevejledning i hjemmet (Helsingør)
    - Barselsstøtte og praktisk hjælp
    - Emotional støtte efter fødslen
    - Vejledning til søvnrutiner
    - Hjælp til etablering af rutiner
    
    ### Graviditetsstøtte
    - Månedlige opfølgninger gennem graviditeten
    - Guidance til graviditetsgenerne
    - Forberedelse til forældrerolle
    - Netværk til andre gravide i Helsingør
    - Særlig støtte for internationale familier
    
    ## Helsingør-specifikke ressourcer:
    
    - **Helsingør Sygehus:** Lokalt hospital med fødselsforberedelse
    - **Helsingør Sundhedscenter:** Jordemoder konsultationer
    - **Kronborg Slot:** Smukke gravide-gåture med havudsigt
    - **Helsingør Bibliotek:** Gravide-arrangementer og ressourcer
    - **Havnefront:** Perfekt til meditation og afslapning
    - **Kulturhus Helsingør:** Aktiviteter for gravide
    - **Lokale apoteker:** Specialiseret graviditets-rådgivning
    
    ## Hospital-muligheder for Helsingør:
    
    ### Nordsjællands Hospital (25 min)
    - Primær fødselshospital for området
    - Omfattende fødselsforberedelse
    - Moderne faciliteter
    
    ### Hillerød Hospital (20 min)
    - Alternativ fødselsmulighed
    - Specialiseret graviditets-omsorg
    - Tæt på mit kontor
    
    ## Priser for Helsingør (2025):
    - **Komplet fødselspakke:** 12.000 kr.
    - **Fødselsforberedelse:** 2.500 kr.
    - **Fødselsstøtte:** 8.000 kr.
    - **Postpartum støtte:** 1.500 kr./besøg
    - **Konsultation:** 750 kr./time
    - **Transport-tillæg:** Inkluderet for Helsingør
    
    *Særlige pakkepriser for Helsingør-familier tilgængelige*
    
    ## Testimonials fra Helsingør:
    
    > "Camilla var fantastisk! Hun forstod perfekt vores behov som familie i Helsingør. Hendes vejledning gennem fødslen var uvurderlig." - Marie & Peter, Helsingør
    
    > "Som internationalt par var vi nervøse, men Camilla gjorde os trygge og guidede os perfekt gennem hele processen." - Sarah & Thomas, Helsingør
    
    ## Særlige fordele for Helsingør-familier:
    
    **Kulturel forståelse:** Jeg forstår både danske og internationale familier i Helsingør.
    
    **Fleksible mødetider:** Jeg tilbyder flexible konsultationer, der passer til jeres skema.
    
    **Havneby-kendskab:** Jeg kender de unikke muligheder og udfordringer i en havneby.
    
    **Internationalt fokus:** Erfaring med internationale familier i Helsingør.
    
    **Fællesskab:** Jeg kan hjælpe jer med at finde andre gravide i området.
    
    ## Helsingør Graviditetstips:
    
    **Havnegåture:** Daglige gåture langs havnen styrker både krop og sind.
    
    **Kronborg Park:** Perfekt til gravide-yoga og meditation.
    
    **Kulturelle aktiviteter:** Helsingør Teater og kulturhus tilbyder gravide-venlige arrangementer.
    
    **Svømning:** Helsingør Svømmehal har særlige tilbud for gravide.
    
    ## Book din konsultation i Helsingør
    
    Interesseret i professionel doulastøtte i Helsingør? Jeg tilbyder gratis 30 minutters konsultation, hvor vi kan mødes enten i Helsingør eller på mit kontor i Hillerød.
    
    **Kontakt mig i dag:**
    - 📞 Telefon: 22 59 49 03
    - 📧 Email: kontakt@mentalro.nu
    - 🏠 Hjemmebesøg i Helsingør muligt
    - 📍 Kontor: Frederiksbro Allè 104, Hillerød
    - 🚗 Kun 25 minutters kørsel til Helsingør
    
    ## Særlige tilbud for Helsingør:
    - **Gratis konsultation** for alle nye klienter
    - **Pakkepriser** for lokale familier
    - **Fleksible betalingsplaner**
    - **Hjemmebesøg** inkluderet i prisen
    `,
  image: {
    src: '/images/doula-helsingør-services.jpg',
    alt: 'Doula services i Helsingør',
  },
  isReversed: false,
};

// Enhanced local business schema for Helsingør
const helsingørBusinessSchema = {
  ...localBusinessSchema,
  '@id': 'https://mentalro.vercel.app/doula-helsingør#localbusiness',
  name: 'Mental Ro - Doula Helsingør',
  description: 'Certificeret Doula i Helsingør. Tilbyder personlig fødselshjælp, fødselsforberedelse og emotional støtte til gravide og deres partnere i Helsingør og omegn.',
  areaServed: {
    '@type': 'City',
    name: 'Helsingør',
    '@id': 'https://www.wikidata.org/wiki/Q26960'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 56.0362,
    longitude: 12.6136
  },
  priceRange: '750-12000 DKK',
  url: 'https://mentalro.vercel.app/doula-helsingør',
  sameAs: [
    'https://www.facebook.com/mentalro',
    'https://www.instagram.com/mentalro_dk'
  ]
};

export default function DoulaHelsingørPage() {
  const schemas = generatePageSchemas('service', { 
    localBusiness: helsingørBusinessSchema,
    service: {
      name: 'Doula Services Helsingør',
      description: 'Professionel doulastøtte i Helsingør',
      url: 'https://mentalro.vercel.app/doula-helsingør',
      areaServed: 'Helsingør',
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