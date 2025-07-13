import type { Metadata } from 'next';
import Hero3 from '~/components/widgets/Hero3';
import Content from '~/components/widgets/Content';
import Contact from '~/components/widgets/Contact';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas, localBusinessSchema } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Doula Hornbæk - Camilla Holsted | Mental Ro',
  description: 'Erfaren doula i Hornbæk. Personlig fødselshjælp og støtte gennem graviditet, fødsel og barsel. Kun 30 minutter fra Hillerød. Book gratis konsultation i dag.',
  keywords: [
    'doula hornbæk', 
    'fødselsforberedelse hornbæk', 
    'jordmoder hornbæk', 
    'graviditet hornbæk', 
    'fødselshjælp hornbæk',
    'ammevejledning hornbæk',
    'doula nær hornbæk',
    'privat jordmoder hornbæk',
    'doula kystby',
    'fødsel hornbæk'
  ],
  url: 'https://mentalro.vercel.app/doula-hornbæk',
  canonical: 'https://mentalro.vercel.app/doula-hornbæk',
});

const heroData = {
  tagline: 'Din lokale doula i Hornbæk',
  title: 'Professionel Doula i Hornbæk - Kystby Ro og Harmoni',
  subtitle: 'Få personlig støtte gennem din graviditet og fødsel med en erfaren, certificeret doula. Jeg betjener Hornbæk og omegn fra mit kontor i Hillerød.',
  callToAction: {
    text: 'Book gratis konsultation',
    href: '/kontakt',
  },
  callToAction2: {
    text: 'Ring 22 59 49 03',
    href: 'tel:+4522594903',
  },
  image: {
    src: '/images/doula-hornbæk.jpg',
    alt: 'Doula Hornbæk - Camilla Holsted',
  },
};

const contentData = {
  header: {
    title: 'Doula Services i Hornbæk',
    subtitle: 'Professionel støtte i Danmarks smukke kystby',
  },
  content: `
    Som certificeret doula betjener jeg hele Hornbæk og omegn med professionel støtte til gravide og deres partnere. 
    Fra mit kontor på Frederiksbro Allè i Hillerød er jeg kun 30 minutter væk fra Hornbæk centrum.
    
    ## Områder jeg dækker i Hornbæk:
    • Hornbæk centrum
    • Hornbæk Havn
    • Dronningmølle
    • Hornbæk Plantage
    • Hele Hornbæk område
    
    ## Hvorfor vælge en doula i Hornbæk?
    
    **Kystby ro:** Hornbæks smukke kystlinje og rolige atmosfære er perfekt for gravide.
    
    **Naturens helbredende kraft:** Skov og strand giver den perfekte ramme for en harmonisk graviditet.
    
    **Tæt-knyttet community:** Hornbæk har en varm, støttende atmosfære mellem beboere.
    
    **Sæsonbevidst omsorg:** Jeg forstår de unikke aspekter ved at være gravid i en kystby.
    
    ## Mine services i Hornbæk:
    
    ### Fødselsforberedelse
    - Personlig fødselsforberedelse tilpasset Hornbæk familier
    - Praktisk vejledning til fødsel på Nordsjællands Hospital
    - Natur-baseret fødselsforberedelse ved stranden
    - Smertelindring og åndedrætstekniker
    - Partner-involvering og støtte
    
    ### Fødselsstøtte
    - Kontinuerlig støtte under hele fødslen
    - Transport-planlægning til hospital
    - Emotional og praktisk hjælp
    - Kommunikation med sundhedspersonalet
    - Dokumentation af fødselsoplevelsen
    
    ### Postpartum støtte
    - Ammevejledning i hjemmet (Hornbæk)
    - Barselsstøtte og praktisk hjælp
    - Emotional støtte efter fødslen
    - Vejledning til søvnrutiner
    - Hjælp til etablering af rutiner
    
    ### Graviditetsstøtte
    - Månedlige opfølgninger gennem graviditeten
    - Guidance til graviditetsgenerne
    - Forberedelse til forældrerolle
    - Netværk til andre gravide i Hornbæk
    - Sæsonbevidst graviditetsstøtte
    
    ## Hornbæk-specifikke ressourcer:
    
    - **Hornbæk Lægepraksis:** Lokale læger med graviditetstjek
    - **Hornbæk Apotek:** Specialiseret graviditets-rådgivning
    - **Hornbæk Strand:** Perfekt til gravide-gåture og meditation
    - **Hornbæk Plantage:** Smukke skovgåture for gravide
    - **Hornbæk Kulturhus:** Aktiviteter for gravide og familier
    - **Lokale cafeer:** Hyggelige mødesteder for gravide
    
    ## Kystby-fordele for gravide:
    
    ### Naturlig afslapning
    - **Strand-meditation:** Guidede sessioner ved havet
    - **Skov-gåture:** Styrkende træning i Hornbæk Plantage
    - **Frisk luft:** Daglige gåture langs kysten
    
    ### Sæsonbevidst omsorg
    - **Sommer:** Særlige tilbud for sommerhuse-familier
    - **Vinter:** Hyggelige hjemme-konsultationer
    - **Forår/Efterår:** Perfekt til udendørs aktiviteter
    
    ## Priser for Hornbæk (2025):
    - **Komplet fødselspakke:** 12.000 kr.
    - **Fødselsforberedelse:** 2.500 kr.
    - **Fødselsstøtte:** 8.000 kr.
    - **Postpartum støtte:** 1.500 kr./besøg
    - **Konsultation:** 750 kr./time
    - **Transport-tillæg:** Inkluderet for Hornbæk
    
    *Særlige pakkepriser for Hornbæk-familier tilgængelige*
    
    ## Testimonials fra Hornbæk:
    
    > "Camilla forstod perfekt vores ønske om en naturlig fødsel. Hendes vejledning ved havet var så inspirerende." - Anne & Lars, Hornbæk
    
    > "Som sommerhus-familie var vi nervøse, men Camilla gjorde os trygge og var fleksibel med mødetider." - Emma & Jonas, Hornbæk
    
    ## Særlige fordele for Hornbæk-familier:
    
    **Naturlig tilgang:** Jeg integrerer Hornbæks naturlige skønhed i fødselsforberedelsen.
    
    **Fleksible mødetider:** Jeg tilbyder flexible konsultationer, der passer til kystby-rytmen.
    
    **Sæsonbevidst:** Jeg forstår de unikke behov for gravide i en kystby.
    
    **Sommerhus-erfaring:** Erfaring med både permanente og sæsonbeboere.
    
    **Ro og harmoni:** Jeg bruger Hornbæks rolige atmosfære til at skabe tryghed.
    
    ## Hornbæk Graviditetstips:
    
    **Strand-gåture:** Daglige gåture langs Hornbæk Strand styrker både krop og sind.
    
    **Plantage-træning:** Hornbæk Plantage er perfekt til gravide-yoga og meditation.
    
    **Havluft:** Frisk havluft er gavnligt for både mor og baby.
    
    **Hygge-kultur:** Hornbæks afslappede stemning er perfekt for gravide.
    
    ## Book din konsultation i Hornbæk
    
    Interesseret i professionel doulastøtte i Hornbæk? Jeg tilbyder gratis 30 minutters konsultation, hvor vi kan mødes enten i Hornbæk eller på mit kontor i Hillerød.
    
    **Kontakt mig i dag:**
    - 📞 Telefon: 22 59 49 03
    - 📧 Email: kontakt@mentalro.nu
    - 🏠 Hjemmebesøg i Hornbæk muligt
    - 📍 Kontor: Frederiksbro Allè 104, Hillerød
    - 🚗 Kun 30 minutters kørsel til Hornbæk
    
    ## Særlige tilbud for Hornbæk:
    - **Gratis konsultation** for alle nye klienter
    - **Pakkepriser** for lokale familier
    - **Sæsonfleksible** betalingsplaner
    - **Hjemmebesøg** inkluderet i prisen
    - **Strand-sessioner** efter aftale
    `,
  image: {
    src: '/images/doula-hornbæk-services.jpg',
    alt: 'Doula services i Hornbæk',
  },
  isReversed: false,
};

// Enhanced local business schema for Hornbæk
const hornbækBusinessSchema = {
  ...localBusinessSchema,
  '@id': 'https://mentalro.vercel.app/doula-hornbæk#localbusiness',
  name: 'Mental Ro - Doula Hornbæk',
  description: 'Certificeret Doula i Hornbæk. Tilbyder personlig fødselshjælp, fødselsforberedelse og emotional støtte til gravide og deres partnere i Hornbæk og omegn.',
  areaServed: {
    '@type': 'City',
    name: 'Hornbæk',
    '@id': 'https://www.wikidata.org/wiki/Q2709070'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 56.0958,
    longitude: 12.4628
  },
  priceRange: '750-12000 DKK',
  url: 'https://mentalro.vercel.app/doula-hornbæk',
  sameAs: [
    'https://www.facebook.com/mentalro',
    'https://www.instagram.com/mentalro_dk'
  ]
};

export default function DoulaHornbækPage() {
  const schemas = generatePageSchemas('service', { 
    localBusiness: hornbækBusinessSchema,
    service: {
      name: 'Doula Services Hornbæk',
      description: 'Professionel doulastøtte i Hornbæk',
      url: 'https://mentalro.vercel.app/doula-hornbæk',
      areaServed: 'Hornbæk',
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