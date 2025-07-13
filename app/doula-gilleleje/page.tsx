import type { Metadata } from 'next';
import Hero3 from '~/components/widgets/Hero3';
import Content from '~/components/widgets/Content';
import Contact from '~/components/widgets/Contact';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas, localBusinessSchema } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doula Gilleleje - Camilla Holsted | Mental Ro',
  description: 'Erfaren doula i Gilleleje. Personlig fødselshjælp og støtte gennem graviditet, fødsel og barsel. Kun 35 minutter fra Hillerød. Book gratis konsultation i dag.',
  keywords: [
    'doula gilleleje', 
    'fødselsforberedelse gilleleje', 
    'jordmoder gilleleje', 
    'graviditet gilleleje', 
    'fødselshjælp gilleleje',
    'ammevejledning gilleleje',
    'doula nær gilleleje',
    'privat jordmoder gilleleje',
    'doula fiskeri',
    'fødsel gilleleje'
  ],
  url: 'https://mentalro.vercel.app/doula-gilleleje',
  canonical: 'https://mentalro.vercel.app/doula-gilleleje',
});

const heroData = {
  tagline: 'Din lokale doula i Gilleleje',
  title: 'Professionel Doula i Gilleleje - Fiskeriby Tradition og Moderne Omsorg',
  subtitle: 'Få personlig støtte gennem din graviditet og fødsel med en erfaren, certificeret doula. Jeg betjener Gilleleje og omegn fra mit kontor i Hillerød.',
  callToAction: {
    text: 'Book gratis konsultation',
    href: '/kontakt',
  },
  callToAction2: {
    text: 'Ring 22 59 49 03',
    href: 'tel:+4522594903',
  },
  image: {
    src: '/images/doula-gilleleje.jpg',
    alt: 'Doula Gilleleje - Camilla Holsted',
  },
};

const contentData = {
  header: {
    title: 'Doula Services i Gilleleje',
    subtitle: 'Professionel støtte i Danmarks autentiske fiskeriby',
  },
  content: `
    Som certificeret doula betjener jeg hele Gilleleje og omegn med professionel støtte til gravide og deres partnere. 
    Fra mit kontor på Frederiksbro Allè i Hillerød er jeg kun 35 minutter væk fra Gilleleje centrum.
    
    ## Områder jeg dækker i Gilleleje:
    • Gilleleje centrum
    • Gilleleje Havn
    • Tisvildeleje (grænseområde)
    • Rågeleje (grænseområde)
    • Hele Gilleleje område
    
    ## Hvorfor vælge en doula i Gilleleje?
    
    **Autentisk fiskeriby:** Gilleleje har en ægte atmosfære, der giver ro og jordforbindelse.
    
    **Stærke traditioner:** Fiskeriby-kulturen fremmer fællesskab og indbyrdes støtte.
    
    **Havets kraft:** Nærheden til havet giver mental ro og helbredende energi.
    
    **Tæt-knyttet community:** Gilleleje har en varm, støttende atmosfære mellem beboere.
    
    ## Mine services i Gilleleje:
    
    ### Fødselsforberedelse
    - Personlig fødselsforberedelse tilpasset Gilleleje familier
    - Praktisk vejledning til fødsel på Nordsjællands Hospital
    - Hav-inspireret fødselsforberedelse ved stranden
    - Smertelindring og åndedrætstekniker
    - Partner-involvering og støtte
    
    ### Fødselsstøtte
    - Kontinuerlig støtte under hele fødslen
    - Transport-planlægning til hospital
    - Emotional og praktisk hjælp
    - Kommunikation med sundhedspersonalet
    - Dokumentation af fødselsoplevelsen
    
    ### Postpartum støtte
    - Ammevejledning i hjemmet (Gilleleje)
    - Barselsstøtte og praktisk hjælp
    - Emotional støtte efter fødslen
    - Vejledning til søvnrutiner
    - Hjælp til etablering af rutiner
    
    ### Graviditetsstøtte
    - Månedlige opfølgninger gennem graviditeten
    - Guidance til graviditetsgenerne
    - Forberedelse til forældrerolle
    - Netværk til andre gravide i Gilleleje
    - Fiskeriby-bevidst graviditetsstøtte
    
    ## Gilleleje-specifikke ressourcer:
    
    - **Gilleleje Lægepraksis:** Lokale læger med graviditetstjek
    - **Gilleleje Apotek:** Specialiseret graviditets-rådgivning
    - **Gilleleje Strand:** Perfekt til gravide-gåture og meditation
    - **Gilleleje Havn:** Rolige gåture mellem fiskerobåde
    - **Gilleleje Museum:** Kulturelle aktiviteter for gravide
    - **Lokale cafeer:** Hyggelige mødesteder for gravide
    
    ## Fiskeriby-fordele for gravide:
    
    ### Naturlig ro
    - **Havn-meditation:** Guidede sessioner ved fiskerihavnen
    - **Strand-gåture:** Styrkende træning langs kysten
    - **Frisk havluft:** Daglige gåture langs stranden
    
    ### Autentisk atmosfære
    - **Traditionsrig:** Fiskeriby-kulturen giver stabilitet
    - **Fællesskab:** Stærke bånd mellem beboere
    - **Jordnært:** Forbindelse til naturen og traditionen
    
    ## Priser for Gilleleje (2025):
    - **Komplet fødselspakke:** 12.000 kr.
    - **Fødselsforberedelse:** 2.500 kr.
    - **Fødselsstøtte:** 8.000 kr.
    - **Postpartum støtte:** 1.500 kr./besøg
    - **Konsultation:** 750 kr./time
    - **Transport-tillæg:** Inkluderet for Gilleleje
    
    *Særlige pakkepriser for Gilleleje-familier tilgængelige*
    
    ## Testimonials fra Gilleleje:
    
    > "Camilla forstod perfekt vores ønske om en rolig fødsel. Hendes vejledning ved havnen var så beroligende." - Lise & Morten, Gilleleje
    
    > "Som fiskerfamilie var vi nervøse for første gang, men Camilla gjorde os trygge og var så professionel." - Karen & Søren, Gilleleje
    
    ## Særlige fordele for Gilleleje-familier:
    
    **Traditonsforståelse:** Jeg respekterer og integrerer Gilleleje's fiskeriby-kultur.
    
    **Fleksible mødetider:** Jeg tilbyder flexible konsultationer, der passer til fiskeribyen.
    
    **Naturlig tilgang:** Jeg bruger havets ro til at skabe tryghed.
    
    **Fællesskabsfokus:** Jeg forstår vigtigheden af community i små kystbyer.
    
    **Autentisk omsorg:** Jeg værdsætter Gilleleje's ægte atmosfære.
    
    ## Gilleleje Graviditetstips:
    
    **Havn-gåture:** Daglige gåture på Gilleleje Havn styrker både krop og sind.
    
    **Strand-meditation:** Gilleleje Strand er perfekt til gravide-yoga og meditation.
    
    **Frisk fisk:** Lokal fisk er perfekt ernæring for gravide.
    
    **Fiskeriby-ro:** Gillelejes autentiske atmosfære er perfekt for gravide.
    
    ## Book din konsultation i Gilleleje
    
    Interesseret i professionel doulastøtte i Gilleleje? Jeg tilbyder gratis 30 minutters konsultation, hvor vi kan mødes enten i Gilleleje eller på mit kontor i Hillerød.
    
    **Kontakt mig i dag:**
    - 📞 Telefon: 22 59 49 03
    - 📧 Email: kontakt@mentalro.nu
    - 🏠 Hjemmebesøg i Gilleleje muligt
    - 📍 Kontor: Frederiksbro Allè 104, Hillerød
    - 🚗 Kun 35 minutters kørsel til Gilleleje
    
    ## Særlige tilbud for Gilleleje:
    - **Gratis konsultation** for alle nye klienter
    - **Pakkepriser** for lokale familier
    - **Traditonsbevidste** betalingsplaner
    - **Hjemmebesøg** inkluderet i prisen
    - **Havn-sessioner** efter aftale
    `,
  image: {
    src: '/images/doula-gilleleje-services.jpg',
    alt: 'Doula services i Gilleleje',
  },
  isReversed: false,
};

// Enhanced local business schema for Gilleleje
const gillelejeBusinessSchema = {
  ...localBusinessSchema,
  '@id': 'https://mentalro.vercel.app/doula-gilleleje#localbusiness',
  name: 'Mental Ro - Doula Gilleleje',
  description: 'Certificeret Doula i Gilleleje. Tilbyder personlig fødselshjælp, fødselsforberedelse og emotional støtte til gravide og deres partnere i Gilleleje og omegn.',
  areaServed: {
    '@type': 'City',
    name: 'Gilleleje',
    '@id': 'https://www.wikidata.org/wiki/Q2709070'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 56.1239,
    longitude: 12.3103
  },
  priceRange: '750-12000 DKK',
  url: 'https://mentalro.vercel.app/doula-gilleleje',
  sameAs: [
    'https://www.facebook.com/mentalro',
    'https://www.instagram.com/mentalro_dk'
  ]
};

export default function DoulaGillelejePage() {
  const schemas = generatePageSchemas('service', { 
    localBusiness: gillelejeBusinessSchema,
    service: {
      name: 'Doula Services Gilleleje',
      description: 'Professionel doulastøtte i Gilleleje',
      url: 'https://mentalro.vercel.app/doula-gilleleje',
      areaServed: 'Gilleleje',
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