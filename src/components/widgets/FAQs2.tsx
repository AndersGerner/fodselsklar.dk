import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import Head from 'next/head';
import { FAQsProps, Item } from '~/shared/types';
import Collapse from '../common/Collapse';
import HeaderWidget from '../common/HeaderWidget';

const FAQs2 = ({ header, items }: FAQsProps) => (
  <>
    <Head>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items?.map((item: Item) => ({
            '@type': 'Question',
            name: item.title,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.description,
            },
          })),
        })}
      </script>
    </Head>
    <section id="faqsTwo">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-4xl" />}
        <Collapse
          items={items as Item[]}
          classCollapseItem="mb-2 rounded-md border border-gray-300 shadow-md md:px-6 py-4 px-5 md:py-5"
          iconUp={<IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
          iconDown={<IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
        />
      </div>
    </section>
  </>
);

export default FAQs2;
