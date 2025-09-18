'use client';

import Link from 'next/link';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface AuthButtonsProps {
  isSignedIn: boolean;
  isMobile?: boolean;
  onSignOut: () => Promise<void>;
  onItemClick?: () => void;
}

export function AuthButtons({
  isSignedIn,
  isMobile = false,
  onSignOut,
  onItemClick = () => {},
}: AuthButtonsProps) {
  if (isMobile) {
    if (isSignedIn) {
      return (
        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all duration-200"
            onClick={onItemClick}
          >
            <User className="w-5 h-5 text-primary-500" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <div className="px-4">
            <Button
              variant="danger"
              size="sm"
              className="w-full rounded-xl"
              onClick={onSignOut}
            >
              Sign Out
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-3 px-4">
        <Link href="/auth/signin" onClick={onItemClick}>
          <Button variant="outline" size="sm" className="w-full rounded-xl">
            Sign In
          </Button>
        </Link>
        <Link href="/auth/signup" onClick={onItemClick}>
          <Button variant="primary" size="sm" className="w-full rounded-xl">
            Sign Up
          </Button>
        </Link>
      </div>
    );
  }

  if (isSignedIn) {
    return (
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/dashboard">
          <Button variant="outline" size="sm" className="rounded-xl border-2">
            <User className="w-4 h-4 mr-2 text-primary-500" />
            Dashboard
          </Button>
        </Link>
        <Button
          variant="danger"
          size="sm"
          className="rounded-xl border-2"
          onClick={onSignOut}
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-3">
      <Link href="/auth/signin">
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl border-2 text-gray-700 hover:text-primary-500 hover:border-primary-500"
        >
          Sign In
        </Button>
      </Link>
      <Link href="/auth/signup">
        <Button variant="primary" size="sm" className="rounded-xl border-2">
          Sign Up
        </Button>
      </Link>
    </div>
  );
}
