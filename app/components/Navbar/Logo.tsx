'use client';
import React from 'react';

import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { Router } from 'next/router';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push('/')}
      className='hidden h-auto w-auto md:block cursor-pointer'
      src='/images/logotipo2.png'
      width={150}
      height={150}
      priority
      alt='Logo'
    />
  );
};

export default Logo;
