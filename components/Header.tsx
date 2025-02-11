import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="w-full bg-white p-5 md:py-6 md:px-28">
      <div className="w-full flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={125}
            height={40}
          />
        </Link>

        <Link
          href="/"
          className="w-[42px] h-[42px] rounded-md shadow-md border-2 border-button-secondary flex items-center justify-center"
        >
          <Image
            src="/assets/images/call.svg"
            alt="Logo"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  );
};
