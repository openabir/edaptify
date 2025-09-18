'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { PageLoading } from '@/components/ui/Loading';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeft,
  PlayCircle,
  Clock,
  Users,
  Star,
  BookOpen,
  CheckCircle,
  Lock,
  Download,
  Share2,
  Heart,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number;
  video_url?: string;
  content: string;
  order_number: number;
  is_preview: boolean;
  completed?: boolean;
}

interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
  instructor_name: string;
  rating: number;
  students_count: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessons: Lesson[];
  isEnrolled?: boolean;
  progress?: number;
}

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    // Mock course data - in a real app, this would come from Supabase
    const mockCourse: Course = {
      id: params.id as string,
      title: 'Complete Web Development Bootcamp',
      description:
        'Learn to build websites and web applications from scratch using HTML, CSS, JavaScript, React, Node.js, and more. This comprehensive course covers everything you need to become a full-stack web developer.',
      image_url:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop&crop=center',
      price: 99.99,
      instructor_name: 'John Doe',
      rating: 4.8,
      students_count: 2150,
      duration: '12 weeks',
      level: 'Intermediate',
      isEnrolled: user ? Math.random() > 0.5 : false,
      progress: user ? Math.floor(Math.random() * 100) : 0,
      lessons: [
        {
          id: '1',
          title: 'Introduction to Web Development',
          description: 'Overview of web development, tools, and technologies',
          duration: 15,
          order_number: 1,
          is_preview: true,
          content: 'Welcome to the course!',
          completed: true,
        },
        {
          id: '2',
          title: 'HTML Fundamentals',
          description: 'Learn the building blocks of web pages',
          duration: 45,
          order_number: 2,
          is_preview: true,
          content: 'HTML basics and semantic markup',
          completed: true,
        },
        {
          id: '3',
          title: 'CSS Styling',
          description: 'Style your web pages with CSS',
          duration: 60,
          order_number: 3,
          is_preview: false,
          content: 'CSS selectors, properties, and layouts',
          completed: false,
        },
        {
          id: '4',
          title: 'JavaScript Basics',
          description: 'Programming fundamentals with JavaScript',
          duration: 90,
          order_number: 4,
          is_preview: false,
          content: 'Variables, functions, and DOM manipulation',
          completed: false,
        },
        {
          id: '5',
          title: 'React Introduction',
          description: 'Build interactive UIs with React',
          duration: 120,
          order_number: 5,
          is_preview: false,
          content: 'Components, props, and state management',
          completed: false,
        },
      ],
    };

    setCourse(mockCourse);
    setLoading(false);
  }, [params.id, user]);

  const handleEnroll = async () => {
    if (!user) {
      router.push('/auth/signin');
      return;
    }

    setEnrolling(true);
    // Simulate enrollment API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (course) {
      setCourse({
        ...course,
        isEnrolled: true,
        progress: 0,
      });
    }
    setEnrolling(false);
  };

  const handleLessonClick = (lesson: Lesson) => {
    if (!course?.isEnrolled && !lesson.is_preview) {
      // Show enrollment prompt
      return;
    }
    // Navigate to lesson view
    router.push(`/courses/${course?.id}/lessons/${lesson.id}`);
  };

  if (loading) {
    return <PageLoading />;
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Course not found
          </h1>
          <Link href="/courses">
            <Button variant="primary">Browse Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const totalDuration = course.lessons.reduce(
    (acc, lesson) => acc + lesson.duration,
    0
  );
  const completedLessons = course.lessons.filter(
    (lesson) => lesson.completed
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b-4 border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/courses"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-1" />
                  <span>{course.students_count.toLocaleString()} students</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>
                    {Math.floor(totalDuration / 60)}h {totalDuration % 60}m
                    total
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <BookOpen className="w-5 h-5 mr-1" />
                  <span>{course.lessons.length} lessons</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 border-2 border-primary-300 rounded-lg font-medium">
                  {course.level}
                </span>
                <span className="px-3 py-1 bg-secondary-100 text-secondary-800 border-2 border-secondary-300 rounded-lg font-medium">
                  {course.duration}
                </span>
              </div>

              <div className="text-gray-600 mb-4">
                <span className="font-medium">Instructor:</span>{' '}
                {course.instructor_name}
              </div>

              {course.isEnrolled && (
                <div className="bg-primary-50 border-3 border-primary-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-primary-900">
                      Your Progress
                    </span>
                    <span className="text-primary-700">
                      {completedLessons}/{course.lessons.length} lessons
                      completed
                    </span>
                  </div>
                  <div className="w-full bg-primary-200 rounded-full h-3 border-2 border-primary-300">
                    <div
                      className="bg-primary-600 h-full rounded-full border border-primary-700 transition-all duration-300"
                      style={{
                        width: `${(completedLessons / course.lessons.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Course Image and Enroll */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border-4 border-gray-800 shadow-thick overflow-hidden sticky top-8">
                <div className="relative h-48">
                  <Image
                    src={course.image_url}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  {course.isEnrolled ? (
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-green-50 border-3 border-green-200 rounded-lg">
                        <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <p className="text-green-800 font-medium">
                          You&apos;re enrolled!
                        </p>
                      </div>
                      <Button variant="primary" size="lg" className="w-full">
                        Continue Learning
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          ${course.price}
                        </div>
                        <p className="text-gray-600">One-time payment</p>
                      </div>
                      <Button
                        variant="primary"
                        size="lg"
                        className="w-full"
                        onClick={handleEnroll}
                        disabled={enrolling}
                      >
                        {enrolling ? 'Enrolling...' : 'Enroll Now'}
                      </Button>
                    </div>
                  )}

                  <div className="flex justify-between mt-4 pt-4 border-t-3 border-gray-200">
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lessons List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Course Content
            </h2>

            <div className="bg-white rounded-xl border-4 border-gray-800 shadow-thick overflow-hidden">
              {course.lessons.map((lesson) => {
                const canAccess = course.isEnrolled || lesson.is_preview;

                return (
                  <div
                    key={lesson.id}
                    className={`
                      border-b-3 border-gray-200 last:border-b-0 p-6 
                      ${canAccess ? 'hover:bg-gray-50 cursor-pointer' : 'bg-gray-50'}
                      transition-colors duration-200
                    `}
                    onClick={() => canAccess && handleLessonClick(lesson)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`
                          w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm font-medium
                          ${
                            lesson.completed
                              ? 'bg-green-500 border-green-600 text-white'
                              : canAccess
                                ? 'bg-primary-100 border-primary-300 text-primary-700'
                                : 'bg-gray-200 border-gray-300 text-gray-500'
                          }
                        `}
                        >
                          {lesson.completed ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : canAccess ? (
                            <PlayCircle className="w-4 h-4" />
                          ) : (
                            <Lock className="w-4 h-4" />
                          )}
                        </div>

                        <div>
                          <h3
                            className={`font-medium ${canAccess ? 'text-gray-900' : 'text-gray-500'}`}
                          >
                            {lesson.title}
                            {lesson.is_preview && (
                              <span className="ml-2 text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded border border-accent-300">
                                Preview
                              </span>
                            )}
                          </h3>
                          <p
                            className={`text-sm ${canAccess ? 'text-gray-600' : 'text-gray-400'}`}
                          >
                            {lesson.description}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div
                          className={`text-sm ${canAccess ? 'text-gray-600' : 'text-gray-400'}`}
                        >
                          {lesson.duration} min
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Course Features */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              This course includes
            </h3>

            <div className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PlayCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">
                    {Math.floor(totalDuration / 60)} hours of video content
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Download className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Downloadable resources</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">
                    {course.lessons.length} lessons
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">
                    Certificate of completion
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Lifetime access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
