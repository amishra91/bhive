'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSpaces } from '@/context/SpacesContext';

const Facilities = () => {
  const { facilities } = useSpaces();

  return (
    <section className="w-full p-5 md:py-20 md:px-28">
      <h2 className="font-bold text-brand-primary text-heading3 md:text-heading2 mb-10 flex items-center justify-between">
        Why Choose Us?
        <Link href="/" className="md:hidden">
          <Image
            src="/assets/icons/right-arrow.svg"
            alt="arrow"
            width={24}
            height={10}
          />
        </Link>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
        {facilities.map((facility, index) => (
          <div
            key={facility.label}
            className={`bg-white md:bg-transparent rounded-lg drop-shadow md:drop-shadow-none md:shadow-none md:rounded-none flex flex-col sm:flex-row items-center gap-4 sm:p-7 p-3 sm:border-b 
            ${index % 4 !== 0 ? 'md:border-l ' : ''} 
            ${
              index >= facilities.length - (facilities.length % 4 || 4)
                ? 'md:border-b-0'
                : ''
            }`}
          >
            <Image
              className="h-8 sm:h-auto"
              src={facility.icon}
              alt={facility.label}
              width={30}
              height={30}
            />
            <p className="font-medium text-brand-primary sm:text-heading5 text-heading7">
              {facility.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
