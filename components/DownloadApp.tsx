import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DownloadApp = () => {
  return (
    <section className="w-full p-5 md:py-20 md:px-28 md:flex md:flex-col">
      <h2 className="font-bold text-brand-primary text-heading3 md:text-heading2 mb-10 md:pl-10 flex items-center justify-between">
        Download our app now
        <Link href="/" className="md:hidden">
          <Image
            src="/assets/icons/right-arrow.svg"
            alt="arrow"
            width={24}
            height={10}
          />
        </Link>
      </h2>
      <div className="relative md:pt-28 bg-white md:bg-transparent rounded-lg p-5 pt-7 md:p-0">
        <Image
          className="md:absolute bottom-0 z-10 md:left-10"
          src="/assets/images/app.png"
          alt="App"
          width={400}
          height={470}
        />
        <div className="flex items-center bg-transparent md:bg-white drop-shadow rounded-lg md:py-16 md:px-10 mt-4 md:mt-0">
          <div className="md:ml-auto flex flex-col gap-10 w-full md:w-auto">
            <p className="hidden md:flex max-w-[586px] font-medium text-[#605F5F] text-heading4">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>

            <div className="flex md:gap-6 w-full justify-between md:justify-start">
              <Link href="/">
                <Image
                  src="/assets/images/playstore.svg"
                  alt="Playstore"
                  width={132}
                  height={45}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/images/appstore.svg"
                  alt="Appstore"
                  width={132}
                  height={45}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
