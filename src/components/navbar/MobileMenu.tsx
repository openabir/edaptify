'use client';

import { NavItem, NavLinks } from './NavLinks';
import { AuthButtons } from './AuthButtons';

interface MobileMenuProps {
  isOpen: boolean;
  navigationItems: NavItem[];
  isSignedIn: boolean;
  onSignOut: () => Promise<void>;
  onItemClick: () => void;
}

export function MobileMenu({
  isOpen,
  navigationItems,
  isSignedIn,
  onSignOut,
  onItemClick,
}: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="space-y-4">
          {/* Mobile Navigation Links */}
          <NavLinks
            items={navigationItems}
            isMobile
            onItemClick={onItemClick}
          />

          {/* Mobile Auth Buttons */}
          <div className="border-t border-gray-100 pt-4 mt-4">
            <AuthButtons
              isSignedIn={isSignedIn}
              isMobile
              onSignOut={onSignOut}
              onItemClick={onItemClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
