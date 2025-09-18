import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Learning?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join thousands of students who are already learning with LearnHub.
          Start your journey today with our free trial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/signup">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-primary-500 border-white hover:bg-neutral-100"
            >
              Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/courses">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Browse Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
