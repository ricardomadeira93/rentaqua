'use client';
import React from 'react';

import { useRouter } from 'next/navigation';

import Image from 'next/image';

const Logo = () => {
  const route = useRouter();
  return (
    <Image
      className='hidden md:block cursor-pointer'
       src='/images/logotipo2.png'
      width={150}
      height={100}
      alt='Logo'
    />
  );
};

export default Logo;
