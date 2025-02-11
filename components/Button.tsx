import Badge from './Badge';
import Image from 'next/image';
import React from 'react';

interface Props {
  className: string;
  passType: 'day' | 'bulk';
  dayPassPrice: number;
  days?: number;
  discountPercentage?: number;
}

const Button = ({
  className,
  passType,
  dayPassPrice,
  days,
  discountPercentage,
}: Props) => {
  const totalPrice = dayPassPrice * (days ?? 1);
  const discountAmount = discountPercentage
    ? (totalPrice * discountPercentage) / 100
    : 0;
  const discountedPrice = totalPrice - discountAmount;

  const priceText: React.ReactNode = (
    <span className="font-semibold text-brand-primary text-heading4">
      ₹ {passType === 'bulk' ? discountedPrice : dayPassPrice}{' '}
      <span className="text-brand-primary/70 text-[12px]">
        / {passType === 'bulk' ? `${days} Days` : 'Day'}
      </span>
    </span>
  );

  return (
    <button
      className={`${className} cursor-pointer flex flex-col rounded-md py-3 pb-2 px-3 flex-1 border border-brand-primary/20 relative`}
    >
      {discountAmount > 0 && <Badge discountPercentage={discountPercentage} />}

      <span className="capitalize text-brand-primary/50 font-medium text-heading7">
        {passType} Pass
      </span>
      <span className="self-end">
        <Image
          src="/assets/icons/btn-arrow.svg"
          alt="Arrow"
          width={20}
          height={12}
        />
      </span>

      {priceText}
    </button>
  );
};

export default Button;

{
  /* <span className="text-brand-primary/70 text-[12px]">
          {passType === 'bulk' && days ? `/ Days` : `/ Day`}
        </span> */
}
