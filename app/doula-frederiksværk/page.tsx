import type { Metadata } from 'next';
import Hero3 from '~/components/widgets/Hero3';
import Content from '~/components/widgets/Content';
import Contact from '~/components/widgets/Contact';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas, localBusinessSchema } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doula Frederiksværk - Camilla Holsted | Mental Ro',
  description: 'Erfaren doula i Frederiksværk. Personlig fødselshjælp og støtte gennem graviditet, fødsel og barsel. Kun 30 minutter fra Hillerød. Book gratis konsultation i dag.',
  keywords: [
    'doula frederiksværk', 
    'fødselsforberedelse frederiksværk', 
    'jordmoder frederiksværk', 
    'graviditet frederiksværk', 
    'fødselshjælp frederiksværk',
    'ammevejledning frederiksværk',
    'doula nær frederiksværk',
    'privat jordmoder frederiksværk',
    'doula industri',
    'fødsel frederiksværk'
  ],
  url: 'https://mentalro.vercel.app/doula-frederiksværk',
  canonical: 'https://mentalro.vercel.app/doula-frederiksværk',
});

const heroData = {
  tagline: 'Din lokale doula i Frederiksværk',
  title: 'Professionel Doula i Frederiksværk - Industriby med Hjertevarme',
  subtitle: 'Få personlig støtte gennem din graviditet og fødsel med en erfaren, certificeret doula. Jeg betjener Frederiksværk og omegn fra mit kontor i Hillerød.',
  callToAction: {
    text: 'Book gratis konsultation',
    href: '/kontakt',
  },
  callToAction2: {
    text: 'Ring 22 59 49 03',
    href: 'tel:+4522594903',
  },
  image: {
    src: '/images/doula-frederiksværk.jpg',
    alt: 'Doula Frederiksværk - Camilla Holsted',
  },
};

const contentData = {
  header: {
    title: 'Doula Services i Frederiksværk',
    subtitle: 'Professionel støtte i Nordsjællands industribys familier',
  },
  content: `
    Som certificeret doula betjener jeg hele Frederiksværk og omegn med professionel støtte til gravide og deres partnere. 
    Fra mit kontor på Frederiksbro Allè i Hillerød er jeg kun 30 minutter væk fra Frederiksværk centrum.
    
    ## Områder jeg dækker i Frederiksværk:
    • Frederiksværk centrum
    • Frederiksværk Nordstrand
    • Kregme
    • Liseleje (grænseområde)
    • Hele Halsnæs Kommune
    
    ## Hvorfor vælge en doula i Frederiksværk?
    
    **Arbejderfamilier:** Jeg forstår arbejderfamiliernes behov og praktiske udfordringer.
    
    **Stærk solidaritet:** Frederiksværk har en tradition for at støtte hinanden.
    
    **Familiefokus:** Industriby-kulturen sætter familien i centrum.
    
    **Praktisk tilgang:** Jeg tilbyder pragmatisk støtte, der passer til arbejdende familier.
    
    ## Mine services i Frederiksværk:
    
    ### Fødselsforberedelse
    - Personlig fødselsforberedelse tilpasset Frederiksværk familier
    - Praktisk vejledning til fødsel på Nordsjællands Hospital
    - Fleksible mødetider for skiftarbejdere
    - Smertelindring og åndedrætstekniker
    - Partner-involvering og støtte
    
    ### Fødselsstøtte
    - Kontinuerlig støtte under hele fødslen
    - Transport-planlægning til hospital
    - Emotional og praktisk hjælp
    - Kommunikation med sundhedspersonalet
    - Dokumentation af fødselsoplevelsen
    
    ### Postpartum støtte
    - Ammevejledning i hjemmet (Frederiksværk)
    - Barselsstøtte og praktisk hjælp
    - Emotional støtte efter fødslen
    - Vejledning til søvnrutiner
    - Hjælp til etablering af rutiner
    
    ### Graviditetsstøtte
    - Månedlige opfølgninger gennem graviditeten
    - Guidance til graviditetsgenerne
    - Forberedelse til forældrerolle
    - Netværk til andre gravide i Frederiksværk
    - Arbejdsliv-bevidst graviditetsstøtte
    
    ## Frederiksværk-specifikke ressourcer:
    
    - **Frederiksværk Sygehus:** Lokalt hospital med graviditetstjek
    - **Frederiksværk Sundhedscenter:** Jordemoder konsultationer
    - **Frederiksværk Apotek:** Specialiseret graviditets-rådgivning
    - **Arresø:** Smukke gåture ved Danmarks største sø
    - **Frederiksværk Bibliotek:** Gravide-arrangementer og ressourcer
    - **Lokale cafeer:** Hyggelige mødesteder for gravide
    
    ## Arbejderfamilie-fordele:
    
    ### Praktisk tilgang
    - **Fleksible mødetider:** Tilpasset skiftarbejde og arbejdstider
    - **Realistiske forventninger:** Praktisk tilgang til fødselsforberedelse
    - **Økonomisk bevidst:** Forståelse for økonomiske begrænsninger
    
    ### Fællesskabsfokus
    - **Solidaritet:** Stærke bånd mellem arbejderfamilier
    - **Støtte:** Gensidig hjælp i lokalsamfundet
    - **Tradition:** Respekt for industriby-kulturen
    
    ## Priser for Frederiksværk (2025):
    - **Komplet fødselspakke:** 12.000 kr.
    - **Fødselsforberedelse:** 2.500 kr.
    - **Fødselsstøtte:** 8.000 kr.
    - **Postpartum støtte:** 1.500 kr./besøg
    - **Konsultation:** 750 kr./time
    - **Transport-tillæg:** Inkluderet for Frederiksværk
    
    *Særlige pakkepriser og betalingsplaner for Frederiksværk-familier*
    
    ## Testimonials fra Frederiksværk:
    
    > "Camilla forstod perfekt vores behov som arbejderfamilie. Hun var fleksibel og tilpassede sig vores arbejdstider." - Maja & Henrik, Frederiksværk
    
    > "Som førstegangsfødende var vi nervøse, men Camilla var så jordnær og praktisk. Hun gjorde os trygge." - Line & Michael, Frederiksværk
    
    ## Særlige fordele for Frederiksværk-familier:
    
    **Arbejdsliv-forståelse:** Jeg forstår udfordringerne ved skiftarbejde og fysisk arbejde.
    
    **Fleksible mødetider:** Jeg tilpasser mig jeres arbejdstider og behov.
    
    **Praktisk tilgang:** Jeg fokuserer på praktiske løsninger og realistiske forventninger.
    
    **Økonomisk bevidst:** Jeg tilbyder betalingsplaner og pakkepriser.
    
    **Solidaritetsforståelse:** Jeg værdsætter Frederiksværks tradition for at støtte hinanden.
    
    ## Frederiksværk Graviditetstips:
    
    **Arresø-gåture:** Daglige gåture ved Danmarks største sø styrker både krop og sind.
    
    **Arbejdstilpasning:** Vejledning om graviditet og fysisk arbejde.
    
    **Fællesskab:** Deltag i lokale gravide-grupper og få støtte.
    
    **Praktisk forberedelse:** Fokus på praktiske aspekter af fødselsforberedelse.
    
    ## Book din konsultation i Frederiksværk
    
    Interesseret i professionel doulastøtte i Frederiksværk? Jeg tilbyder gratis 30 minutters konsultation, hvor vi kan mødes enten i Frederiksværk eller på mit kontor i Hillerød.
    
    **Kontakt mig i dag:**
    - 📞 Telefon: 22 59 49 03
    - 📧 Email: kontakt@mentalro.nu
    - 🏠 Hjemmebesøg i Frederiksværk muligt
    - 📍 Kontor: Frederiksbro Allè 104, Hillerød
    - 🚗 Kun 30 minutters kørsel til Frederiksværk
    
    ## Særlige tilbud for Frederiksværk:
    - **Gratis konsultation** for alle nye klienter
    - **Pakkepriser** for lokale familier
    - **Fleksible betalingsplaner** for arbejderfamilier
    - **Hjemmebesøg** inkluderet i prisen
    - **Aften- og weekend-møder** efter aftale
    `,
  image: {
    src: '/images/doula-frederiksværk-services.jpg',
    alt: 'Doula services i Frederiksværk',
  },
  isReversed: false,
};

// Enhanced local business schema for Frederiksværk
const frederiksværkBusinessSchema = {
  ...localBusinessSchema,
  '@id': 'https://mentalro.vercel.app/doula-frederiksværk#localbusiness',
  name: 'Mental Ro - Doula Frederiksværk',
  description: 'Certificeret Doula i Frederiksværk. Tilbyder personlig fødselshjælp, fødselsforberedelse og emotional støtte til gravide og deres partnere i Frederiksværk og omegn.',
  areaServed: {
    '@type': 'City',
    name: 'Frederiksværk',
    '@id': 'https://www.wikidata.org/wiki/Q2709070'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.9719,
    longitude: 12.0211
  },
  priceRange: '750-12000 DKK',
  url: 'https://mentalro.vercel.app/doula-frederiksværk',
  sameAs: [
    'https://www.facebook.com/mentalro',
    'https://www.instagram.com/mentalro_dk'
  ]
};

export default function DoulaFrederiksværkPage() {
  const schemas = generatePageSchemas('service', { 
    localBusiness: frederiksværkBusinessSchema,
    service: {
      name: 'Doula Services Frederiksværk',
      description: 'Professionel doulastøtte i Frederiksværk',
      url: 'https://mentalro.vercel.app/doula-frederiksværk',
      areaServed: 'Frederiksværk',
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