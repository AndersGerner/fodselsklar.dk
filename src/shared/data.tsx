import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import camillaHolsted1 from '~/assets/images/camilla-holsted1.jpg';
import camillaHolsted2 from '~/assets/images/camilla-holsted2.jpg';
import gasImg from '~/assets/images/gas.jpg';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 13 using the new App Router »',
    href: 'https://nextjs.org/docs/app',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Forside',
      href: '/',
    },
    {
      label: 'Om mig',
      href: '/om-mig',
    },
    {
      label: 'Jeg tilbyder',
      icon: IconChevronDown,
      links: [
        {
          label: 'Doula',
          href: '/ydelser/doula',
        },
        {
          label: 'Fødselsforberedelse',
          href: '/ydelser/foedselsforberedelse',
        },
        {
          label: 'Rebozo',
          href: '/ydelser/rebozo',
        },
        {
          label: 'Fødselsmodning',
          href: '/ydelser/foedselsmodning',
        },
        {
          label: 'Barsels kick-off',
          href: '/ydelser/barsels-kickoff',
        },
        {
          label: 'Amning',
          href: '/ydelser/amning',
        },
        /* {
          label: 'Personlig træning',
          href: '/ydelser/personlig-traening',
        }, */
        {
          label: 'Træning for gravide',
          href: '/ydelser/traening-for-gravide',
        },
        {
          label: 'Udendørs holdtræning',
          href: '/ydelser/udendors-holdtraening',
        },
      ],
    },

    {
      label: 'Mere',
      icon: IconChevronDown,
      links: [
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Spørgsmål og svar',
          href: '/faq',
        },
        {
          label: 'Handelsbetingelser',
          href: '/handelsbetingelser',
        },
      ],
    },
    {
      label: 'Kontakt',
      href: '/kontakt',
    },
  ],
  actions: [
    {
      text: 'Book',
      href: '/book',
      targetBlank: false,
      btnType: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'center',
};

// Hero data
export const heroData: HeroProps = {
  title: 'Mental Ro',
  subtitle: 'Fødselsklar A-Z',
  callToAction: {
    text: 'Kontakt',
    href: '/kontakt',
    icon: IconPhoneCall,
    targetBlank: true,
    btnType: 'primary',
  },

  image: {
    src: camillaHolsted2,
    alt: 'Hero TailNext',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Camilla Holsted, Doula og Personlig træner',
  subtitle:
    'Jeg hedder Camilla Holsted, er født i 1994 og er mor til 2 banditter på hhv. 5 og 8 år. Jeg er opvokset i Hillerød, Nordsjælland, hvor jeg bor i en helt nybygget lejlighed med udsigt over byen og Frederiksborg slot. Jeg har selv formet min karriere gennem tiden og er uddannet personlig træner, Vanecoach, recovery mentor og psykomotorisk terapeut (igangværende). ',
  callToAction: {
    text: 'Kontakt',
    href: '/contact',
    targetBlank: true,
    btnType: 'primary',
  },
  /* callToAction2: {
    text: 'Kontakt',
    href: '/kontakt',
  }, */
  image: {
    src: camillaHolsted1,
    alt: 'Camilla Holsted',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    /* {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    }, */
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'Who we are and what we do?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'What is our experience?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What is our team like?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What do I need to start?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'How to install the NextJS + Tailwind CSS template?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: "What's something that you completely don't understand?",
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: "What's an example of when you changed your mind?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'What is something that you would really like to try again?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'If you could only ask one question to each person you meet, what would that question be?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Ofte Stillede Spørgsmål',
    subtitle: 'Find svar på dine spørgsmål om graviditet, fødselsforberedelse, og doula-tjenester.',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'Graviditet og Træning',
        href: '/tab1',
      },
      items: [
        {
          title: 'Er det sikkert at træne under graviditeten?',
          description: `Ja, det er generelt sikkert at træne under graviditeten, så længe du har fået grønt lys fra din læge og træningen er tilpasset din individuelle situation.`,
        },
        {
          title: 'Hvilke typer træning tilbyder du for gravide?',
          description: `Jeg tilbyder en række træningstyper, herunder styrketræning, konditionstræning, funktionel træning, yoga og pilates.`,
        },
      ],
    },
    {
      link: {
        label: 'Fødselsforberedelse',
        href: '/tab2',
      },
      items: [
        {
          title: 'Hvad inkluderer dit fødselsforberedelsesprogram?',
          description: `Mit program inkluderer både teoretisk og praktisk forberedelse, der dækker alt fra fødslens faser til smertehåndtering og partnerens rolle.`,
        },
        {
          title: 'Er fødselsforberedelse nødvendig?',
          description: `Fødselsforberedelse kan give dig og din partner værdifulde værktøjer til at håndtere fødslen og kan bidrage til en mere positiv oplevelse.`,
        },
      ],
    },
    {
      link: {
        label: 'Doula Tjenester',
        href: '/tab3',
      },
      items: [
        {
          title: 'Hvad er en doula?',
          description: `En doula er en professionel, der tilbyder emotionel, fysisk og informativ støtte under graviditet, fødsel og den tidlige postpartum periode.`,
        },
        {
          title: 'Hvordan kan en doula hjælpe mig?',
          description: `En doula kan tilbyde personlig støtte, hjælpe med smertelindringsteknikker, og fungere som en fortaler for dig under fødslen.`,
        },
      ],
    },
    {
      link: {
        label: 'Handelsbetingelser',
        href: '/tab4',
      },
      items: [
        {
          title: 'Hvordan foregår betalingen?',
          description: `Betalingen foregår via bankoverførsel eller mobile betalingsløsninger. Alle priser er inklusive moms.`,
        },
        {
          title: 'Hvad er din afbestillingspolitik?',
          description: `Afbestilling skal ske senest 24 timer før den planlagte session for at undgå gebyrer. Afbestillinger inden for 24 timer vil blive faktureret fuldt ud.`,
        },
        {
          title: 'Er der nogen garanti for dine tjenester?',
          description: `Mens jeg stræber efter at yde den bedste service, kan resultaterne variere fra person til person. Derfor kan jeg ikke tilbyde en garanti for specifikke resultater.`,
        },
        {
          title: 'Hvordan håndteres personlige oplysninger?',
          description: `Alle personlige oplysninger behandles fortroligt og vil ikke blive delt med tredjeparter uden dit samtykke.`,
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Har du et spørgsmål?',
  subtitle: 'Tag endelig fat i mig og lad os tage en snak',
  callToAction: {
    text: 'Kontkat',
    href: '/kontakt',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">TailNext</span>
      </>
    ),
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.',
    highlight: 'Features',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description:
        'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
      icon: IconBrandTailwind,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Ready-to-use Components',
      description:
        'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
      icon: IconComponents,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Best Practices',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconListCheck,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Excellent Page Speed',
      description:
        'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
      icon: IconRocket,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Open to new ideas and contributions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconBulb,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Min historie',
    highlight: 'Hvorfor mig?',
  },
  content: (
    <>
      <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
        Jeg har et brændende hjerte for at bidrage til, at så mange kvinder og par som muligt, får den bedste
        graviditet, fødsel og start på forældreskabet. Jeg er dybt fascineret af fødslens fysiologi og de forskellige
        faser, den bevæger sig igennem samt de fysiske og mentale forandringer vi gennemgår, når vi er gravide, føder og
        bliver forælder. Generelt er jeg vildt fascineret af, hvad kroppen kan og hvad den gør, når den er gravid og
        føder et barn.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
        Jeg tror på, at når vi næres med ro, omsorg, tryghed og ikke mindst viden, skabes der balance mellem krop og
        sind og det giver os mulighed for at træffe gode beslutninger under graviditet, fødsel og tiden efter. Netop
        dette, har jeg stor interesse i at bidrage med, for dig/jer.{' '}
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
        Der er mange veje til Rom og derfor er der ikke noget rigtigt og forkert - jeg støtter, vejleder og informerer
        dig/jer lige præcis dér, hvor der er brug for det. Alle er velkommen hos mig og jeg skræddersyr hvert enkelt
        forløb, efter hvad der ønskes. Så uanset om du skal føde på hospitalet, hjemme eller har andre, alternative
        ønsker, så er jeg der for dig og din partner. Ønsker du at føde med eller uden medicinsk smertelindring eller
        skal dy føde ved planlagt kejsersnit, så er jeg der og støtter op om dit/jeres valg.
      </p>
    </>
  ),
  items: [
    {
      title: 'Recovery mentor ',
      description: 'v. Region Hovedstadens psykiatri',
      image: { src: 'https://mentalro.nu/wp-content/uploads/2022/10/PEER.jpg', alt: 'Camilla Holsted' },
    },
    {
      title: 'Madmentor',
      description: 'v. Marie Steenberger. Jeg har været mentortræner på uddannelsen 2022.',
    },
    {
      title: 'Kursus og workshop i træning under graviditet og efterfødsel',
      description: 'v. Fitness Institute',
    },
    {
      title: 'VaneCoach',
      description: 'v. Anne Gaardmand og Morten Elsøe. Jeg har tidligere været coachtræner på 2 hold i 2020.',
    },
    {
      title: 'Narrativt kursus',
      description: 'v. Landsforeningen spiseforstyrrelser og selvskade',
    },
    {
      title: 'Personlig træner og kostvejleder (EREPS certificeret)',
      description: 'v. Fitness Institute ',
    },
    {
      title: 'Pilates instruktør',
      description: 'v. PilatesCph ',
    },
  ],
};

export const contentData: ContentProps = {
  header: {
    title: 'Velkommen til Din Rejse mod Forældreskab',
    subtitle: 'Din støtte fra graviditet til forældreskab',
    highlight: 'Forældreskab',
  },
  content:
    'At blive forælder er en livsændrende oplevelse. Vi er her for at støtte dig gennem hele processen, fra graviditet til fødsel og forældreskab.',
  items: [
    {
      title: 'Fødselsforberedelse',
      description: 'Forbered dig mentalt og fysisk til fødslen med vores evidensbaserede metoder.',
    },
    {
      title: 'Doula Service',
      description: 'Få personlig støtte før, under og efter fødslen fra en erfaren doula.',
    },
    {
      title: 'Amning',
      description: 'Få professionel vejledning og støtte til amning for at sikre en sund start for dit barn.',
    },
  ],
  image: {
    src: 'https://source.unsplash.com/random/1024x640/?pregnancy', // Replace with your image link
    alt: 'Gravid kvinde og partner',
  },
  isReversed: false,
  isAfterContent: false,
};
export const content2Data: ContentProps = {
  content:
    'Vi tilbyder en holistisk tilgang til graviditet og forældreskab. Vores metoder er evidensbaserede og tilpasset dine individuelle behov.',
  items: [
    {
      title: 'Evidensbaseret Praksis',
    },
    {
      title: 'Personlig Støtte',
    },
    {
      title: 'Fleksible Planer',
    },
    {
      title: 'Professionel Vejledning',
    },
    {
      title: 'Tillid og Fortrolighed',
    },
  ],
  image: {
    src: 'https://source.unsplash.com/random/1024x640/?pregnancy,support', // Replace with your image link
    alt: 'Doula og gravid kvinde',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: 'Sed ac magna sit amet risus tristique interdum. hac.',
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
      icon: IconCheck,
    },
  ],
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      occupation: 'Marketing Manager',
      comment:
        'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac. Integer ut justo id dolor lobortis pharetra. Integer ultrices leo a nunc ullamcorper commodo. In id nulla et nibh pretium pretium non vel metus. Suspendisse dapibus quis lorem sit amet fermentum. Ut a dapibus justo. In faucibus molestie pretium. Cras eros orci, bibendum fringilla elit at, vehicula maximus eros. Aenean placerat aliquet mi, et pellentesque dolor gravida at.',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Silver Jordan',
      occupation: 'Senior Marketer',
      comment:
        'Mauris semper enim dolor, ac dictum sapien sollicitudin quis. Quisque id pharetra mi. Phasellus eu posuere lectus, vitae rhoncus velit. Nullam imperdiet purus quis dapibus vestibulum. Integer purus ex, hendrerit at elementum non, varius a nibh. Ut eget convallis mi. Morbi mattis, felis sit amet consectetur scelerisque, odio purus ornare sapien, in feugiat lorem tellus et magna. Pellentesque luctus dolor in ornare mattis.',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Kelsey Arden',
      occupation: 'Co-Founder & CEO',
      comment:
        'Sed malesuada rhoncus arcu, sit amet condimentum leo pharetra feugiat. In augue quam, venenatis nec dui in, auctor tempus libero. Aliquam tempus ex id metus viverra blandit. Proin varius venenatis tortor, a pellentesque enim malesuada a. Aliquam lectus magna, interdum eget odio non, consequat imperdiet ipsum.',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      value: 29,
      period: 'per month',
      texts: [
        'Etiam in libero',
        'Aenean ac nunc',
        'Cras scelerisque accumsan libero, et volutpat dolor tristique at',
        'In hac habitasse',
      ],
      callToAction: {
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      value: 69,
      period: 'per month',
      texts: ['Proin vel laoreet', 'Ut efficitur egestas', 'Pellentesque ut nibh', 'Donec fringilla sem'],
      callToAction: {
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      value: 199,
      period: 'per month',
      texts: [
        'Curabitur suscipit risus',
        'Aliquam blandit malesuada',
        'Suspendisse sit amet',
        'Suspendisse auctor dui',
      ],
      callToAction: {
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 1,
      description: 'Nærvær og omsorg',
    },
    {
      title: 2,
      description: 'Tryghed',
    },
    {
      title: 3,
      description: 'Balance krop/sind',
    },
    {
      title: 100,
      description: 'Støtte til dig/jer',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Skal vi tage en snak?',
    subtitle: 'Jeg forsøger altid at vende tilbage inden for 24 timer',
    highlight: 'Kontakt',
  },
  content: 'Jeg glæder mig til at høre fra dig.',
  items: [
    {
      title: 'Email og telefon',
      description: ['kontakt@mentalro.nu', '+45 22 59 49 03'],
      icon: IconPhoneCall,
    },
    {
      title: 'Adresse',
      description: ['Frederiksbro Allè 104, 4. TV', '3400 Hillerød'],
      icon: IconMapPin,
    },
    /* {
      title: 'Telefon',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    }, */
  ],
  form: {
    title: 'Hvordan kan jeg hjælpe dig/jer?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Dit navn',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Din email',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Din besked',
    },
    btn: {
      title: 'Send besked',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Skal vi tage en snak?',
    subtitle: 'Jeg forsøger altid at vende tilbage inden for 24 timer',
    highlight: 'Kontakt',
  },
  content: 'Jeg glæder mig til at høre fra dig.',
  items: [
    {
      title: 'Email og telefon',
      description: ['kontakt@mentalro.nu', '+45 22 59 49 03'],
      icon: IconPhoneCall,
    },
    {
      title: 'Adresse',
      description: ['Frederiksbro Allè 104, 4. TV', '3400 Hillerød'],
      icon: IconMapPin,
    },
    /* {
      title: 'Telefon',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    }, */
  ],
  form: {
    title: 'Hvordan kan jeg hjælpe dig/jer?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Dit navn',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Din email',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Din besked',
    },
    btn: {
      title: 'Send besked',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'Mental Ro - Fødselsklar A-Z',
  links: [
    {
      label: 'Handelsbetingelser',
      href: '/handelsbetingelser',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://instagram.com/mental.ro.nu' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com/Mental.Ro.Nu' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      Udviklet af{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onevo.dk/">
        {' '}
        Onèvo ApS
      </a>{' '}
      · Alle rettigheder forbeholdes.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Handelsbetingelser',
      href: '/handelsbetingelser',
    },
  ],
  columns: [
    {
      title: 'Adresse ',
      texts: ['Frederiksbro Allè 104, 4.TV', '3400 Hillerød'],
    },
    {
      title: 'Telefon',
      texts: ['+45 22 59 49 03'],
    },
    {
      title: 'Email',
      texts: ['kontakt@mentalro.nu'],
    },
  ],
  socials: [
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://instagram.com/mental.ro.nu' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com/Mental.Ro.Nu' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      Udviklet af{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onevo.dk/">
        {' '}
        Onèvo ApS
      </a>{' '}
      · Alle rettigheder forbeholdes.
    </div>
  ),
};
