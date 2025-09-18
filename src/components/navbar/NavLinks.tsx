'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  icon?: LucideIcon;
}

interface NavLinksProps {
  items: NavItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function NavLinks({
  items,
  isMobile = false,
  onItemClick = () => {},
}: NavLinksProps) {
  if (isMobile) {
    return (
      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all duration-200"
              onClick={onItemClick}
            >
              {Icon && <Icon className="w-5 h-5 text-primary-500" />}
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            href={item.href}
            className="group flex flex-col items-center relative px-3 py-2 text-gray-600 hover:text-primary-500 transition-colors duration-200"
          >
            <div className="flex items-center space-x-1">
              {Icon && <Icon className="w-4 h-4" />}
              <span className="font-medium">{item.name}</span>
            </div>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        );
      })}
    </div>
  );
}
