import type { Metadata } from 'next';

import Contact2 from '~/components/widgets/Contact2';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = () => {
  return (
    <>
      <Contact2 />
      {/* <Features2 {...featuresData2} /> */}
    </>
  );
};

export default Page;
