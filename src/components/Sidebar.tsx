'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  BookOpen,
  User,
  Settings,
  LogOut,
  Trophy,
  Calendar,
  MessageCircle,
  Heart,
} from 'lucide-react';

interface SidebarProps {
  onSignOut?: () => void;
}

export function Sidebar({ onSignOut }: SidebarProps) {
  const pathname = usePathname();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
      borderColor: 'border-primary-300',
    },
    {
      name: 'My Courses',
      href: '/dashboard/courses',
      icon: BookOpen,
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-100',
      borderColor: 'border-secondary-300',
    },
    {
      name: 'Achievements',
      href: '/dashboard/achievements',
      icon: Trophy,
      color: 'text-accent-600',
      bgColor: 'bg-accent-100',
      borderColor: 'border-accent-300',
    },
    {
      name: 'Schedule',
      href: '/dashboard/schedule',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-300',
    },
    {
      name: 'Messages',
      href: '/dashboard/messages',
      icon: MessageCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
    },
    {
      name: 'Favorites',
      href: '/dashboard/favorites',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300',
    },
    {
      name: 'Profile',
      href: '/dashboard/profile',
      icon: User,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      borderColor: 'border-indigo-300',
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: Settings,
      color: 'text-gray-600',
      bgColor: 'bg-gray-100',
      borderColor: 'border-gray-300',
    },
  ];

  return (
    <aside className="w-64 bg-white border-r-6 border-gray-800 h-full flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6 border-b-4 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">
          Student <span className="text-primary-600">Portal</span>
        </h2>
        <p className="text-sm text-gray-600 mt-1">Welcome back! 👋</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-4 py-3 rounded-lg border-3 transition-all duration-200 group hover:scale-105',
                isActive
                  ? `${item.bgColor} ${item.borderColor} ${item.color} shadow-thick font-medium`
                  : 'border-transparent hover:bg-gray-50 hover:border-gray-300 text-gray-700 hover:text-gray-900'
              )}
            >
              <Icon
                className={cn(
                  'w-5 h-5 transition-colors duration-200',
                  isActive
                    ? item.color
                    : 'text-gray-500 group-hover:text-gray-700'
                )}
              />
              <span className="font-medium">{item.name}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-primary-500 rounded-full"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t-4 border-gray-200">
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg border-4 border-gray-800 p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-90">
                  Courses Completed
                </p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Trophy className="w-8 h-8 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent-500 to-danger-500 rounded-lg border-4 border-gray-800 p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-90">Study Streak</p>
                <p className="text-2xl font-bold">7 days</p>
              </div>
              <Calendar className="w-8 h-8 opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t-4 border-gray-200">
        <button
          onClick={onSignOut}
          className="w-full flex items-center space-x-3 px-4 py-3 text-danger-600 hover:bg-danger-50 hover:border-danger-300 border-3 border-transparent rounded-lg transition-all duration-200 group hover:scale-105"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
