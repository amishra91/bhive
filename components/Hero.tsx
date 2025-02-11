import Image from 'next/image';
import React from 'react';

interface Props {
  heading: string;
  price: string;
  imageSrc: string;
}

const Hero = ({ heading, price, imageSrc }: Props) => {
  return (
    <section className="w-full bg-heroPattern p-5 md:py-20 md:px-28 bg-no-repeat bg-cover bg-bottom mix-blend-multiply">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <h1 className="md:text-heading1 text-heading4 text-center md:text-left text-brand-primary font-bold max-w-2xl">
          {heading} <span className="text-button-secondary">₹{price}/-!</span>
        </h1>
        <div>
          <Image
            className="mix-blend-multiply"
            src={imageSrc}
            alt="Video"
            width={388}
            height={388}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
