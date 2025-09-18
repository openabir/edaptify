'use client';

import { useState } from 'react';
import { BookOpen, Home, Mail, Menu, Users, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { AuthButtons } from './AuthButtons';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Logo />

          {/* Navigation Links Section */}
          <NavLinks items={navigationItems} />

          {/* Auth Buttons Section */}
          <AuthButtons isSignedIn={!!user} onSignOut={handleSignOut} />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              className="text-primary-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          navigationItems={navigationItems}
          isSignedIn={!!user}
          onSignOut={handleSignOut}
          onItemClick={handleMenuItemClick}
        />
      </div>
    </nav>
  );
}
