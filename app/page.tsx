import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Contact from '~/components/widgets/Contact';
import Content from '~/components/widgets/Content';
import Hero3 from '~/components/widgets/Hero3';
import { content2Data, contentData, heroData } from '~/shared/data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
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
