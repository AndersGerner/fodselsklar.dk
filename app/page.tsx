import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import Content from '~/components/widgets/Content';
import FAQs2 from '~/components/widgets/FAQs2';
import Features3 from '~/components/widgets/Features3';
import Hero3 from '~/components/widgets/Hero3';
import Pricing from '~/components/widgets/Pricing';
import Steps from '~/components/widgets/Steps';
import Team from '~/components/widgets/Team';
import Testimonial from '~/components/widgets/Testimonial';
import {
  callToActionData,
  content2Data,
  contentData,
  faqsData2,
  featuresData,
  heroData,
  pricingData,
  socialProofData,
} from '~/shared/data';
import SocialProof from '../src/components/widgets/SocialProof';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero3 data={heroData} />
      <SocialProof {...socialProofData} />
      <Features3 {...featuresData} />
      <Content {...contentData} />
      <Content {...content2Data} />
      <Steps />
      <Testimonial />
      <FAQs2 {...faqsData2} />
      <Pricing {...pricingData} />
      <Team />
      <Contact />
      <CallToAction2 {...callToActionData} />
    </>
  );
}
