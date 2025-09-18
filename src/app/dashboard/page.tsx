'use client';

import { useAuth } from '@/contexts/AuthContext';
import { Sidebar } from '@/components/Sidebar';
import { PageLoading } from '@/components/ui/Loading';
import { Button } from '@/components/ui/Button';
import { CourseCard } from '@/components/CourseCard';
import {
  BookOpen,
  Trophy,
  Calendar,
  TrendingUp,
  Clock,
  Star,
  PlayCircle,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [dashboardLoading, setDashboardLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin');
    } else if (!loading && user) {
      setDashboardLoading(false);
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  // Mock data for enrolled courses
  const enrolledCourses = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js, and more.',
      image_url:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&crop=center',
      price: 99.99,
      instructor_name: 'John Doe',
      rating: 4.8,
      students_count: 2150,
      duration: '12 weeks',
      level: 'Intermediate' as const,
      progress: 65,
      isEnrolled: true,
    },
    {
      id: '2',
      title: 'Python for Data Science',
      description:
        'Master Python programming for data analysis and machine learning.',
      image_url:
        'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=500&h=300&fit=crop&crop=center',
      price: 149.99,
      instructor_name: 'Jane Smith',
      rating: 4.9,
      students_count: 1890,
      duration: '10 weeks',
      level: 'Intermediate' as const,
      progress: 30,
      isEnrolled: true,
    },
  ];

  const stats = [
    {
      icon: BookOpen,
      label: 'Courses Enrolled',
      value: '3',
      change: '+1 this month',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Trophy,
      label: 'Completed',
      value: '1',
      change: 'Great progress!',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-100',
    },
    {
      icon: Clock,
      label: 'Hours Learned',
      value: '47',
      change: '+12 this week',
      color: 'text-accent-600',
      bgColor: 'bg-accent-100',
    },
    {
      icon: TrendingUp,
      label: 'Streak',
      value: '7 days',
      change: 'Keep it up!',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  if (loading || dashboardLoading) {
    return <PageLoading />;
  }

  if (!user) {
    return null; // This will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar onSignOut={handleSignOut} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b-4 border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back,{' '}
                {user.user_metadata?.full_name || user.email?.split('@')[0]}! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                Ready to continue your learning journey?
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Today&apos;s goal</div>
              <div className="text-2xl font-bold text-primary-600">2 hours</div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="p-6 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-6 hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 ${stat.bgColor} rounded-lg border-3 border-gray-600 flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.change}</div>
                </div>
              );
            })}
          </div>

          {/* Continue Learning Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Continue Learning
              </h2>
              <Button variant="outline" size="sm">
                View All Courses
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="relative">
                  <CourseCard {...course} />
                  <div className="absolute top-4 right-4 bg-white border-3 border-gray-800 rounded-lg px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <PlayCircle className="w-4 h-4 text-primary-600" />
                      <span className="text-sm font-bold text-gray-900">
                        {course.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Recent Activity
            </h2>
            <div className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-primary-50 border-3 border-primary-200 rounded-lg">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg border-3 border-primary-700 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">
                      Completed: JavaScript Fundamentals
                    </h3>
                    <p className="text-sm text-gray-600">
                      Web Development Bootcamp • 2 hours ago
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">+50 XP</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-secondary-50 border-3 border-secondary-200 rounded-lg">
                  <div className="w-10 h-10 bg-secondary-500 rounded-lg border-3 border-secondary-700 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">
                      Achievement Unlocked: Week Warrior
                    </h3>
                    <p className="text-sm text-gray-600">
                      Learned for 7 consecutive days • 1 day ago
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">+100 XP</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-accent-50 border-3 border-accent-200 rounded-lg">
                  <div className="w-10 h-10 bg-accent-500 rounded-lg border-3 border-accent-700 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">
                      Started: Python Data Structures
                    </h3>
                    <p className="text-sm text-gray-600">
                      Python for Data Science • 3 days ago
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">+25 XP</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Quick Actions
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="primary" className="h-16 flex-col space-y-2">
                <BookOpen className="w-6 h-6" />
                <span>Browse Courses</span>
              </Button>
              <Button variant="secondary" className="h-16 flex-col space-y-2">
                <Trophy className="w-6 h-6" />
                <span>View Achievements</span>
              </Button>
              <Button variant="accent" className="h-16 flex-col space-y-2">
                <Calendar className="w-6 h-6" />
                <span>Schedule Learning</span>
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
