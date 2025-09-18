'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PageLoading } from '@/components/ui/Loading';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeft,
  ArrowRight,
  PlayCircle,
  PauseCircle,
  CheckCircle,
  BookOpen,
  FileText,
  Download,
  Volume2,
} from 'lucide-react';
import Link from 'next/link';

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
  lessons: Lesson[];
}

export default function LessonPage() {
  const params = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Mock data - in a real app, this would come from Supabase
    const mockCourse: Course = {
      id: params.id as string,
      title: 'Complete Web Development Bootcamp',
      lessons: [
        {
          id: '1',
          title: 'Introduction to Web Development',
          description:
            'Overview of web development, tools, and technologies we&apos;ll be using throughout this course.',
          duration: 15,
          order_number: 1,
          is_preview: true,
          content: `
            <h2>Welcome to Web Development!</h2>
            <p>In this course, you&apos;ll learn everything you need to know to become a full-stack web developer.</p>
            
            <h3>What we&apos;ll cover:</h3>
            <ul>
              <li>HTML - The structure of web pages</li>
              <li>CSS - Styling and layout</li>
              <li>JavaScript - Programming and interactivity</li>
              <li>React - Modern frontend framework</li>
              <li>Node.js - Server-side development</li>
              <li>Databases - Storing and managing data</li>
            </ul>
            
            <h3>Prerequisites</h3>
            <p>No prior programming experience required! We&apos;ll start from the very basics.</p>
            
            <h3>Course Structure</h3>
            <p>Each lesson includes video content, written materials, and hands-on exercises to reinforce your learning.</p>
          `,
          completed: false,
        },
        {
          id: '2',
          title: 'HTML Fundamentals',
          description: 'Learn the building blocks of web pages with HTML',
          duration: 45,
          order_number: 2,
          is_preview: true,
          content: `
            <h2>HTML Fundamentals</h2>
            <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
            
            <h3>Basic Structure</h3>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            
            <h3>Common Elements</h3>
            <ul>
              <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Headings</li>
              <li><code>&lt;p&gt;</code> - Paragraphs</li>
              <li><code>&lt;a&gt;</code> - Links</li>
              <li><code>&lt;img&gt;</code> - Images</li>
              <li><code>&lt;div&gt;</code> - Containers</li>
              <li><code>&lt;span&gt;</code> - Inline containers</li>
            </ul>
          `,
          completed: false,
        },
      ],
    };

    const lesson = mockCourse.lessons.find((l) => l.id === params.lessonId);

    setCourse(mockCourse);
    setCurrentLesson(lesson || null);
    setLoading(false);
  }, [params.id, params.lessonId]);

  const handleMarkComplete = () => {
    if (currentLesson) {
      setCurrentLesson({
        ...currentLesson,
        completed: true,
      });
    }
  };

  const getNextLesson = () => {
    if (!course || !currentLesson) return null;
    const currentIndex = course.lessons.findIndex(
      (l) => l.id === currentLesson.id
    );
    return currentIndex < course.lessons.length - 1
      ? course.lessons[currentIndex + 1]
      : null;
  };

  const getPreviousLesson = () => {
    if (!course || !currentLesson) return null;
    const currentIndex = course.lessons.findIndex(
      (l) => l.id === currentLesson.id
    );
    return currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  };

  const nextLesson = getNextLesson();
  const previousLesson = getPreviousLesson();

  if (loading) {
    return <PageLoading />;
  }

  if (!course || !currentLesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Lesson not found
          </h1>
          <Link href="/courses">
            <Button variant="primary">Browse Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b-4 border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={`/courses/${course.id}`}
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Course
            </Link>

            <div className="text-center">
              <h1 className="text-lg font-bold text-gray-900">
                {course.title}
              </h1>
              <p className="text-sm text-gray-600">
                Lesson {currentLesson.order_number}: {currentLesson.title}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              {!currentLesson.completed && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleMarkComplete}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Mark Complete
                </Button>
              )}
              {currentLesson.completed && (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Completed</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Video/Content Area */}
          <div className="lg:col-span-3">
            {/* Video Player */}
            <div className="bg-gray-900 rounded-xl border-4 border-gray-800 shadow-thick overflow-hidden mb-8">
              <div className="aspect-video relative bg-gray-800 flex items-center justify-center">
                {/* Mock Video Player */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full border-3 border-white border-opacity-50 flex items-center justify-center mb-4 mx-auto">
                    {isPlaying ? (
                      <PauseCircle
                        className="w-10 h-10 text-white cursor-pointer"
                        onClick={() => setIsPlaying(false)}
                      />
                    ) : (
                      <PlayCircle
                        className="w-10 h-10 text-white cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                      />
                    )}
                  </div>
                  <p className="text-white text-sm">
                    {isPlaying ? 'Video is playing...' : 'Click to play video'}
                  </p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="bg-gray-900 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm">
                    {Math.floor((progress * currentLesson.duration) / 100)}:
                    {String(
                      Math.floor(
                        (((progress * currentLesson.duration) / 100) % 1) * 60
                      )
                    ).padStart(2, '0')}
                  </span>
                  <span className="text-white text-sm">
                    {currentLesson.duration}:00
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-gray-900"
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-gray-900"
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                  >
                    Speed: 1x
                  </Button>
                </div>
              </div>
            </div>

            {/* Lesson Content */}
            <div className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  {currentLesson.title}
                </h1>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Resources
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Notes
                  </Button>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                {currentLesson.description}
              </p>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: currentLesson.content }}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div>
                {previousLesson && (
                  <Link
                    href={`/courses/${course.id}/lessons/${previousLesson.id}`}
                  >
                    <Button variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous: {previousLesson.title}
                    </Button>
                  </Link>
                )}
              </div>

              <div>
                {nextLesson && (
                  <Link href={`/courses/${course.id}/lessons/${nextLesson.id}`}>
                    <Button variant="primary">
                      Next: {nextLesson.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Course Content
              </h3>

              <div className="space-y-2">
                {course.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/courses/${course.id}/lessons/${lesson.id}`}
                    className={`
                      block p-3 rounded-lg border-2 transition-colors duration-200
                      ${
                        lesson.id === currentLesson.id
                          ? 'bg-primary-50 border-primary-300 text-primary-900'
                          : 'border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`
                          w-6 h-6 rounded border flex items-center justify-center text-xs
                          ${
                            lesson.completed
                              ? 'bg-green-500 border-green-600 text-white'
                              : lesson.id === currentLesson.id
                                ? 'bg-primary-500 border-primary-600 text-white'
                                : 'bg-gray-200 border-gray-300 text-gray-600'
                          }
                        `}
                        >
                          {lesson.completed ? (
                            <CheckCircle className="w-3 h-3" />
                          ) : (
                            lesson.order_number
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-sm">
                            {lesson.title}
                          </div>
                          <div className="text-xs opacity-75">
                            {lesson.duration} min
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
