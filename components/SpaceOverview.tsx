'use client';

import Card from './Card';
import Image from 'next/image';
import Link from 'next/link';
import { useSpaces } from '@/context/SpacesContext';

const SpaceOverview = () => {
  const { spaces } = useSpaces();

  return (
    <section className="w-full p-5 md:py-20 md:px-28">
      <h2 className="font-bold text-brand-primary text-heading3 sm:text-heading2 mb-10 flex items-center justify-between">
        Our Space Overview
        <Link href="/" className="md:hidden">
          <Image
            src="/assets/icons/right-arrow.svg"
            alt="arrow"
            width={24}
            height={10}
          />
        </Link>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-11">
        {spaces.map((space) => (
          <Card key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
};

export default SpaceOverview;
