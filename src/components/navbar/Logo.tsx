'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  href?: string;
}

export function Logo({
  src = '/images/logo.svg',
  width = 150,
  height = 40,
  alt = 'Logo',
  href = '/',
}: LogoProps) {
  return (
    <Link
      href={href}
      className="flex items-center py-2 transform hover:scale-105 transition-transform duration-200"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </Link>
  );
}
