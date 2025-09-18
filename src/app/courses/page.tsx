'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Loading } from '@/components/ui/Loading';
import { supabase } from '@/lib/supabase';
import { Search, Filter } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  price: number;
  instructor_id: string;
  created_at: string;
  updated_at: string;
  published: boolean;
  instructor_name?: string;
  rating?: number;
  students_count?: number;
  duration?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching courses:', error);
      } else {
        setCourses(data || []);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Mock data for when database is empty
  const mockCourses = [
    {
      id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      title: 'Complete Web Development Bootcamp',
      description:
        'Learn HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive web development course. Perfect for beginners and intermediate developers looking to advance their skills.',
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
        'Master Python programming for data analysis, visualization, and machine learning. Includes pandas, numpy, matplotlib, and scikit-learn.',
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
        'Learn the principles of user interface and user experience design. Create beautiful, functional designs using modern design tools and methodologies.',
      image_url:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop&crop=center',
      price: 79.99,
      instructor_name: 'Alice Johnson',
      rating: 4.7,
      students_count: 1234,
      duration: '8 weeks',
      level: 'Beginner' as const,
    },
    {
      id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',
      title: 'Mobile App Development with React Native',
      description:
        'Build cross-platform mobile applications using React Native. Learn to create apps for both iOS and Android platforms.',
      image_url:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&crop=center',
      price: 129.99,
      instructor_name: 'Michael Brown',
      rating: 4.6,
      students_count: 987,
      duration: '14 weeks',
      level: 'Advanced' as const,
    },
    {
      id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15',
      title: 'Digital Marketing Mastery',
      description:
        'Complete guide to digital marketing including SEO, social media marketing, email marketing, and paid advertising strategies.',
      image_url:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
      price: 89.99,
      instructor_name: 'Sarah Wilson',
      rating: 4.5,
      students_count: 1567,
      duration: '6 weeks',
      level: 'Beginner' as const,
    },
    {
      id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16',
      title: 'Blockchain and Cryptocurrency',
      description:
        'Understand blockchain technology, cryptocurrencies, and smart contract development. Learn to build decentralized applications.',
      image_url:
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop&crop=center',
      price: 199.99,
      instructor_name: 'David Lee',
      rating: 4.8,
      students_count: 756,
      duration: '16 weeks',
      level: 'Advanced' as const,
    },
  ];

  const displayCourses = courses.length > 0 ? courses : mockCourses;

  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'programming', label: 'Programming' },
    { value: 'design', label: 'Design' },
    { value: 'business', label: 'Business' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'data-science', label: 'Data Science' },
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const filteredCourses = displayCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loading size="lg" text="Loading courses..." />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-primary-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover a wide range of courses designed to help you master new
              skills and advance your career
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl border-6 border-gray-800 shadow-thick p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="md:col-span-1">
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon={<Search className="w-5 h-5 text-gray-500" />}
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border-4 border-gray-800 rounded-lg bg-white text-gray-900 focus:border-primary-500 focus:outline-none transition-colors duration-200 shadow-thick"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border-4 border-gray-800 rounded-lg bg-white text-gray-900 focus:border-primary-500 focus:outline-none transition-colors duration-200 shadow-thick"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-100 border-4 border-gray-800 rounded-xl p-12 max-w-md mx-auto">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters to find what
                  you&apos;re looking for.
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredCourses.length} Course
                  {filteredCourses.length !== 1 ? 's' : ''} Found
                </h2>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Filter className="w-5 h-5" />
                  <span className="text-sm">
                    {searchTerm && `Search: "${searchTerm}"`}
                    {selectedCategory !== 'all' &&
                      ` • Category: ${categories.find((c) => c.value === selectedCategory)?.label}`}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    image_url={course.image_url}
                    price={course.price}
                    instructor_name={
                      course.instructor_name || 'Expert Instructor'
                    }
                    rating={course.rating || 4.7}
                    students_count={course.students_count || 1234}
                    duration={course.duration || '8 weeks'}
                    level={course.level || 'Intermediate'}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
