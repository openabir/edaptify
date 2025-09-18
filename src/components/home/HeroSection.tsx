import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="gradient-hero py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Learn Without{' '}
          <span className="text-white drop-shadow-lg">Limits</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Join thousands of learners worldwide and unlock your potential with
          our comprehensive online courses. Learn at your own pace with expert
          instructors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/courses">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white text-primary-500 border-white hover:bg-neutral-100"
            >
              Browse Courses <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white/10"
            >
              Start Free Trial <PlayCircle className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="space-y-3">
          {[
            'Access to 200+ courses',
            'Learn from industry experts',
            'Lifetime access',
            'Certificate of completion',
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 justify-center"
            >
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
