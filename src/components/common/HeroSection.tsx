'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/img_group_4113.png"
          alt="Background"
          width={1440}
          height={969}
          className="w-full lg:h-[130%] h-full "
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 my-20 ">
        <Image
          className=" sm:w-28 w-24 md:w-32 lg:w-[250px] object-cover object-center"
          src="/images/img_group_3565.png"
          alt="3D Graphics"
          width={250}
          height={581}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-10 pt-16">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-4xl font-semibold  mb-6">Nomoar Cloud</h1>
          <p className="text-sm md:text-sm text-white    mx-auto  mb-8">
            Cloud infrastructure is easy to manage and cost-
            <span className="hidden lg:block lg:-mt-3">
              <br />
            </span>
            <span className=" inline-block">effective</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="primary"
              className="bg-white hover:bg-white py-2 rounded-lg -mt-4 px-10 text-sm text-blue-900"
            >
              Order{' '}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
