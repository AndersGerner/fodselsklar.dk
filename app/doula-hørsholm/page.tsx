import type { Metadata } from 'next';
import Hero3 from '~/components/widgets/Hero3';
import Content from '~/components/widgets/Content';
import Contact from '~/components/widgets/Contact';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas, localBusinessSchema } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doula Hørsholm - Camilla Holsted | Mental Ro',
  description: 'Erfaren doula i Hørsholm. Personlig fødselshjælp og støtte gennem graviditet, fødsel og barsel. Kun 18 minutter fra Hillerød. Book gratis konsultation i dag.',
  keywords: [
    'doula hørsholm', 
    'fødselsforberedelse hørsholm', 
    'jordmoder hørsholm', 
    'graviditet hørsholm', 
    'fødselshjælp hørsholm',
    'ammevejledning hørsholm',
    'doula nær hørsholm',
    'privat jordmoder hørsholm'
  ],
  url: 'https://mentalro.vercel.app/doula-hørsholm',
  canonical: 'https://mentalro.vercel.app/doula-hørsholm',
});

const heroData = {
  tagline: 'Din lokale doula i Hørsholm',
  title: 'Professionel Doula i Hørsholm - Kun 18 Minutter Væk',
  subtitle: 'Få personlig støtte gennem din graviditet og fødsel med en erfaren, certificeret doula. Jeg betjener Hørsholm og omegn fra mit kontor i Hillerød.',
  callToAction: {
    text: 'Book gratis konsultation',
    href: '/kontakt',
  },
  callToAction2: {
    text: 'Ring 22 59 49 03',
    href: 'tel:+4522594903',
  },
  image: {
    src: '/images/doula-hørsholm.jpg',
    alt: 'Doula Hørsholm - Camilla Holsted',
  },
};

const contentData = {
  header: {
    title: 'Doula Services i Hørsholm',
    subtitle: 'Personlig støtte gennem graviditet, fødsel og barsel',
  },
  content: `
    Som certificeret doula betjener jeg hele Hørsholm kommune med professionel støtte til gravide og deres partnere. 
    Fra mit kontor på Frederiksbro Allè i Hillerød er jeg kun 18 minutter væk fra Hørsholm centrum.
    
    ## Områder jeg dækker i Hørsholm:
    • Hørsholm centrum
    • Rungsted Kyst
    • Rungsted Stationsby
    • Vedbæk
    • Alle områder i Hørsholm Kommune
    
    ## Hvorfor vælge en lokal doula i Hørsholm?
    
    **Lokalt kendskab:** Jeg kender de bedste resurser i Hørsholm og omegn, fra gravide-yoga til ammecafeer.
    
    **Kort afstand:** Med kun 18 minutters kørsel er jeg altid tæt på, når du har brug for støtte.
    
    **Hospital kendskab:** Jeg har omfattende erfaring med Nordsjællands Hospital, hvor de fleste fra Hørsholm føder.
    
    **Højkvalitet område:** Jeg forstår Hørsholm-familiernes behov for premium service og personlig omsorg.
    
    ## Mine services i Hørsholm:
    
    ### Fødselsforberedelse
    - Personlig fødselsforberedelse tilpasset Hørsholm familier
    - Praktisk vejledning til fødsel på Nordsjællands Hospital
    - Smertelindring og åndedrætstekniker
    - Partner-involvering og støtte
    
    ### Fødselsstøtte
    - Kontinuerlig støtte under hele fødslen
    - Emotional og praktisk hjælp
    - Kommunikation med sundhedspersonalet
    - Dokumentation af fødselsoplevelsen
    
    ### Postpartum støtte
    - Ammevejledning i hjemmet (Hørsholm)
    - Barselsstøtte og praktisk hjælp
    - Emotional støtte efter fødslen
    - Vejledning til søvnrutiner
    
    ### Graviditetsstøtte
    - Månedlige opfølgninger gennem graviditeten
    - Guidance til graviditetsgenerne
    - Forberedelse til forældrerolle
    - Netværk til andre gravide i Hørsholm
    
    ## Hørsholm-specifikke ressourcer:
    
    - **Hørsholm Sundhedscenter:** Samarbejde med jordemødre
    - **Hørsholm Hospital:** Lokalt sundhedstilbud
    - **Rungsted Havn:** Smukke gravide-gåture
    - **Lokale apoteker:** Kendskab til specialprodukter
    - **Ammecafeer:** Vejledning til bedste lokale tilbud
    - **Babysvømning:** Anbefalinger til lokale tilbud
    - **Hørsholm Midtpunkt:** Praktisk shopping for babying
    
    ## Priser for Hørsholm (2025):
    - **Komplet fødselspakke:** 12.000 kr.
    - **Fødselsforberedelse:** 2.500 kr.
    - **Fødselsstøtte:** 8.000 kr.
    - **Postpartum støtte:** 1.500 kr./besøg
    - **Konsultation:** 750 kr./time
    
    *Særlige pakkepriser for Hørsholm-familier tilgængelige*
    
    ## Testimonials fra Hørsholm:
    
    > "Camilla var utrolig professionel og forstod perfekt vores behov som førstegangsfødende. Hendes erfaring med Nordsjællands Hospital var uvurderlig." - Karen, Hørsholm
    
    > "Vi følte os så trygge med Camilla ved vores side. Hun var der hver gang, vi havde brug for hende." - Michael & Lene, Rungsted Kyst
    
    ## Særlige fordele for Hørsholm-familier:
    
    **Premium service:** Jeg forstår Hørsholm-familiernes forventninger til høj kvalitet og personlig service.
    
    **Fleksible mødetider:** Jeg tilbyder flexible konsultationer, der passer til jeres travle skema.
    
    **Netværk:** Jeg kan hjælpe jer med at finde andre gravide i området til støtte og venskaber.
    
    **Efterfødsel support:** Jeg kender de bedste lokale ressourcer til nye familier i Hørsholm.
    
    ## Book din konsultation i Hørsholm
    
    Interesseret i professionel doulastøtte i Hørsholm? Jeg tilbyder gratis 30 minutters konsultation, hvor vi kan mødes enten i Hørsholm eller på mit kontor i Hillerød.
    
    **Kontakt mig i dag:**
    - 📞 Telefon: 22 59 49 03
    - 📧 Email: kontakt@mentalro.nu
    - 🏠 Hjemmebesøg i Hørsholm muligt
    - 📍 Kontor: Frederiksbro Allè 104, Hillerød
    `,
  image: {
    src: '/images/doula-hørsholm-services.jpg',
    alt: 'Doula services i Hørsholm',
  },
  isReversed: false,
};

// Enhanced local business schema for Hørsholm
const hørsholmBusinessSchema = {
  ...localBusinessSchema,
  '@id': 'https://mentalro.vercel.app/doula-hørsholm#localbusiness',
  name: 'Mental Ro - Doula Hørsholm',
  description: 'Certificeret Doula i Hørsholm. Tilbyder personlig fødselshjælp, fødselsforberedelse og emotional støtte til gravide og deres partnere i Hørsholm og omegn.',
  areaServed: {
    '@type': 'City',
    name: 'Hørsholm',
    '@id': 'https://www.wikidata.org/wiki/Q26985'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.8847,
    longitude: 12.4994
  },
  priceRange: '750-12000 DKK',
  url: 'https://mentalro.vercel.app/doula-hørsholm',
  sameAs: [
    'https://www.facebook.com/mentalro',
    'https://www.instagram.com/mentalro_dk'
  ]
};

export default function DoulaHørsholmPage() {
  const schemas = generatePageSchemas('service', { 
    localBusiness: hørsholmBusinessSchema,
    service: {
      name: 'Doula Services Hørsholm',
      description: 'Professionel doulastøtte i Hørsholm',
      url: 'https://mentalro.vercel.app/doula-hørsholm',
      areaServed: 'Hørsholm',
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