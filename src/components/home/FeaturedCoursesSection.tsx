import Link from 'next/link';
import { CourseCard } from '@/components/CourseCard';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function FeaturedCoursesSection() {
  const featuredCourses = [
    {
      id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      title: 'Complete Web Development Bootcamp',
      description:
        'Learn HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive web development course.',
      image_url:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&crop=center',
      price: 99.99,
      instructor_name: 'John Doe',
      rating: 4.8,
      students_count: 2150,
      duration: '12 weeks',
      level: 'Intermediate' as const,
    },
    {
      id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
      title: 'Python for Data Science',
      description:
        'Master Python programming for data analysis, visualization, and machine learning.',
      image_url:
        'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=500&h=300&fit=crop&crop=center',
      price: 149.99,
      instructor_name: 'Jane Smith',
      rating: 4.9,
      students_count: 1890,
      duration: '10 weeks',
      level: 'Intermediate' as const,
    },
    {
      id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
      title: 'UI/UX Design Fundamentals',
      description:
        'Learn the principles of user interface and user experience design.',
      image_url:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop&crop=center',
      price: 79.99,
      instructor_name: 'Alice Johnson',
      rating: 4.7,
      students_count: 1234,
      duration: '8 weeks',
      level: 'Beginner' as const,
    },
  ];

  return (
    <section className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            Featured <span className="text-primary-500">Courses</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover our most popular courses designed to help you master
            in-demand skills
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/courses">
            <Button variant="primary" size="lg">
              View All Courses <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
