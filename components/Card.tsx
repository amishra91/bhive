import Button from './Button';
import Image from 'next/image';
import React from 'react';

interface Props {
  space: {
    id: string;
    name: string;
    images: string[];
    day_pass_price: number;
    discountPercentage: number;
  };
}

const Card = ({ space }: Props) => {
  return (
    <div className="drop-shadow bg-white stroke-[#EEE7E7] rounded-lg px-3 py-4">
      <div className="flex justify-between">
        <h4 className="text-heading4 text-brand-primary font-semibold max-w-52 line-clamp-2">
          {space.name}
        </h4>

        <div className="rounded-lg px-3 py-2 bg-brand-background flex flex-col gap-2 items-center mb-4">
          <Image
            src="/assets/icons/direction.svg"
            alt="location"
            width={18}
            height={18}
          />
          <p className="font-medium text-brand-primary/50 text-[8px]">6 Kms</p>
        </div>
      </div>

      <div className="w-full h-[202px]">
        <Image
          src={`/${space.images[0]}`}
          alt="HSR"
          width={346}
          height={202}
          className="rounded-md w-full h-full"
        />
      </div>

      <div className="flex items-center gap-3 mt-6">
        <Button
          className="bg-brand-background border"
          passType="day"
          dayPassPrice={space.day_pass_price}
        />
        <Button
          className="bg-brand-accent border-brand-accent"
          passType="bulk"
          dayPassPrice={space.day_pass_price}
          days={10}
          discountPercentage={space.discountPercentage}
        />
      </div>
    </div>
  );
};

export default Card;
