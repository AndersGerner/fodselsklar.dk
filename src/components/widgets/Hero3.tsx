// Hero3.tsx
import Image from 'next/image';
import { FC } from 'react';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero3: FC<{ data: HeroProps }> = ({ data }) => {
  const { title, subtitle, callToAction, callToAction2, image } = data;

  return (
    <section className="relative h-[70vh]">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative h-full flex flex-col justify-between">
        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Title and Description */}
        <div className="p-8 text-right">
          {title && (
            <h1 className="text-5xl font-bold text-white">
              {typeof title === 'string' ? title : <title.type {...title.props} />}
            </h1>
          )}
          {subtitle && (
            <p className="mt-4 text-xl text-white">
              {typeof subtitle === 'string' ? subtitle : <subtitle.type {...subtitle.props} />}
            </p>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-end p-8">
          {callToAction && <CTA data={callToAction} />}
          {callToAction2 && <CTA data={callToAction2} />}
        </div>
      </div>
    </section>
  );
};

export default Hero3;
