import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Contact from '~/components/widgets/Contact';
import Content from '~/components/widgets/Content';
import Hero3 from '~/components/widgets/Hero3';
import { content2Data, contentData, heroData } from '~/shared/data';
import { generateSEOMetadata } from '~/utils/metadata';
import { generatePageSchemas } from '~/utils/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Mental Ro - Fødselsklar A-Z med Camilla Holsted',
  description: 'Certificeret Doula i Danmark. Tilbyder personlig fødselshjælp, smertelindring og følelsesmæssig støtte til gravide og deres partnere. Book en konsultation i dag!',
  keywords: ['certificeret doula', 'fødselshjælp danmark', 'graviditetsstøtte', 'fødselsforberedelse hillerød'],
  canonical: 'https://mentalro.vercel.app',
});

export default function Page() {
  const schemas = generatePageSchemas('home');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Hero3 data={heroData} />
      {/* <SocialProof {...socialProofData} /> */}
      {/* <Features3 {...featuresData} /> */}
      <Content {...contentData} />
      <Content {...content2Data} />
      {/* <Steps /> */}
      {/* <Testimonial /> */}
      {/* <FAQs2 {...faqsData2} /> */}
      {/* <Pricing {...pricingData} /> */}
      {/* <Team /> */}
      <Contact />
      {/* <CallToAction2 {...callToActionData} /> */}
    </>
  );
}
