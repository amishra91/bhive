import React from 'react';

interface Props {
  discountPercentage?: number;
}
const Badge = ({ discountPercentage }: Props) => {
  return (
    <span className="bg-[#263238] text-white text-center rounded-[3px] px-2 py-1 text-[8px] absolute top-[-8px] left-[50%] translate-x-[-50%]">
      {discountPercentage}% Discount
    </span>
  );
};

export default Badge;
