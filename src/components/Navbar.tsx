'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

type NavLink = {
  name: string;
  href: string;
};

type NavbarProps = {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  links?: NavLink[];
  brandName?: string;
  className?: string;
  theme?: {
    primaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    hoverColor?: string;
  };
};

const Navbar = ({
  logo = {
    src: '/images/edaptify.svg',
    alt: 'Logo',
    width: 32,
    height: 32,
  },
  links = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ],
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtBottom = window.innerHeight + Math.ceil(window.scrollY) >= document.documentElement.scrollHeight - 1;
      
      // If at bottom of page, hide navbar
      if (isAtBottom) {
        setIsVisible(false);
      } 
      // If scrolling up, show navbar
      else if (currentScrollY < prevScrollY.current) {
        setIsVisible(true);
      }
      // If scrolling down and not at bottom, keep navbar visible
      else if (currentScrollY > prevScrollY.current) {
        setIsVisible(true);
      }
      
      prevScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 bg-[#1e1e1e] shadow-md z-50 rounded-lg mt-4 mb-8 w-[calc(100%-2.5rem)] max-w-7xl transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-auto">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 32}
                  height={logo.height || 32}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-[var(--primary-color)] hover:border-b-2"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-[var(--primary-color)] hover:text-[var(--hover-color)] transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--primary-color)] hover:bg-[var(--hover-color)] transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="space-y-1">
                <Link
                  href="/login"
                  className="block w-full text-left px-4 py-2 text-base font-medium text-[var(--primary-color)] hover:bg-[#f0f9fc]"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="block w-full text-left px-4 py-2 text-base font-medium text-white bg-[var(--primary-color)] hover:bg-[var(--hover-color)]"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
