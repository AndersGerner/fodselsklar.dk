'use client';

// ImageModal.tsx
import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';

interface ModalProps {
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

const ImageModal: FC<ModalProps> = ({ imageSrc, imageAlt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Image Thumbnail */}
      <div onClick={toggleModal} className="cursor-pointer">
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative bg-white rounded-lg p-6 shadow-lg flex items-center justify-center max-w-2xl max-h-480">
            <button onClick={toggleModal} className="absolute top-0 right-0 p-2">
              <span className="text-xl font-bold">&times;</span>
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <Image src={imageSrc} alt={imageAlt} width={640} height={480} objectFit="contain" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
