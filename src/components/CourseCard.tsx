'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Clock, Users, Star, DollarSign } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  price: number;
  instructor_name?: string;
  rating?: number;
  students_count?: number;
  duration?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  isEnrolled?: boolean;
  onEnroll?: (courseId: string) => void;
}

export function CourseCard({
  id,
  title,
  description,
  image_url,
  price,
  instructor_name = 'Expert Instructor',
  rating = 4.8,
  students_count = 1234,
  duration = '8 weeks',
  level = 'Intermediate',
  isEnrolled = false,
  onEnroll,
}: CourseCardProps) {
  const handleEnrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onEnroll?.(id);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-success-100 text-success-800 border-success-300';
      case 'Intermediate':
        return 'bg-accent-100 text-accent-800 border-accent-300';
      case 'Advanced':
        return 'bg-primary-100 text-primary-800 border-primary-300';
      default:
        return 'bg-neutral-200 text-neutral-800 border-neutral-400';
    }
  };

  return (
    <Link href={`/courses/${id}`}>
      <div className="bg-neutral-100 rounded-xl border-5 border-border shadow-thick hover:shadow-thick-primary hover:border-primary-500 transition-all duration-300 hover:scale-105 overflow-hidden group">
        {/* Course Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image_url || '/placeholder-course.jpg'}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-bold border-2 ${getLevelColor(level)}`}
            >
              {level}
            </span>
          </div>
          <div className="absolute top-4 right-4 bg-neutral-100 border-3 border-border rounded-lg px-3 py-1">
            <div className="flex items-center space-x-1">
              <DollarSign className="w-4 h-4 text-primary-500" />
              <span className="font-bold text-neutral-800">
                {price === 0 ? 'Free' : `$${price}`}
              </span>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-primary-500 transition-colors duration-200 line-clamp-2">
            {title}
          </h3>

          {/* Instructor */}
          <p className="text-sm text-neutral-600 mb-3">
            by{' '}
            <span className="font-medium text-primary-500">
              {instructor_name}
            </span>
          </p>

          {/* Description */}
          <p className="text-neutral-700 text-sm mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-6 text-sm text-neutral-600">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-secondary-500 fill-current" />
              <span className="font-medium">{rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{students_count.toLocaleString()} students</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex space-x-3">
            {isEnrolled ? (
              <Button variant="success" className="flex-1" size="sm">
                Continue Learning
              </Button>
            ) : (
              <>
                <Button
                  variant="primary"
                  className="flex-1"
                  size="sm"
                  onClick={handleEnrollClick}
                >
                  Enroll Now
                </Button>
                <Button variant="accent" size="sm">
                  Preview
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Progress Bar (if enrolled) */}
        {isEnrolled && (
          <div className="px-6 pb-4">
            <div className="w-full bg-neutral-300 rounded-full h-3 border-2 border-border">
              <div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-full rounded-full border-2 border-primary-500"
                style={{ width: '65%' }} // This would come from props in real implementation
              ></div>
            </div>
            <p className="text-xs text-neutral-600 mt-2">65% Complete</p>
          </div>
        )}
      </div>
    </Link>
  );
}
