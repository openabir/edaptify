import { Button } from '@/components/ui/Button';
import {
  BookOpen,
  Users,
  Trophy,
  Target,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { label: 'Students Worldwide', value: '50,000+', icon: Users },
    { label: 'Expert Instructors', value: '200+', icon: BookOpen },
    { label: 'Courses Available', value: '500+', icon: Trophy },
    { label: 'Success Rate', value: '95%', icon: Target },
  ];

  const features = [
    {
      title: 'Expert-Led Content',
      description:
        'Learn from industry professionals with real-world experience.',
      icon: BookOpen,
    },
    {
      title: 'Interactive Learning',
      description: 'Hands-on projects and exercises to reinforce your skills.',
      icon: Target,
    },
    {
      title: 'Community Support',
      description:
        'Connect with fellow learners and get help when you need it.',
      icon: Users,
    },
    {
      title: 'Lifetime Access',
      description:
        'Access your courses anytime, anywhere, for as long as you need.',
      icon: Heart,
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face',
      bio: 'Former Google engineer with 15+ years in tech education.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Curriculum',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Stanford CS professor and author of 5 programming books.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Learning Experience Director',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Educational psychologist specializing in online learning.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 border-b-6 border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Empowering Learners{' '}
              <span className="text-primary-600">Worldwide</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We believe that quality education should be accessible to
              everyone. Our mission is to democratize learning through
              technology and create opportunities for people to grow and
              succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button variant="primary" size="lg">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-6 text-center hover:scale-105 transition-transform duration-200"
                >
                  <div className="w-12 h-12 bg-primary-100 border-3 border-primary-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, LearnHub was born from a simple belief:
                  everyone deserves access to high-quality education, regardless
                  of their background or location. Our founders, a team of
                  educators and technologists, recognized the gap between
                  traditional education and the rapidly evolving digital world.
                </p>
                <p>
                  What started as a small collection of programming tutorials
                  has grown into a comprehensive learning platform serving over
                  50,000 students worldwide. We&apos;ve partnered with industry
                  experts and leading companies to create courses that are not
                  just educational, but practical and immediately applicable.
                </p>
                <p>
                  Today, we&apos;re proud to be at the forefront of online
                  education, continuously innovating to make learning more
                  engaging, accessible, and effective for learners of all
                  levels.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/courses">
                  <Button variant="primary">Start Learning Today</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl border-4 border-gray-800 shadow-thick p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-95 mb-6">
                  To democratize education and empower individuals with the
                  skills they need to thrive in the digital age.
                </p>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">
                    Built with passion for learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose LearnHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re more than just an online learning platform. We&apos;re
              your partner in growth, offering the tools and support you need to
              succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-6 hover:scale-105 transition-transform duration-200"
                >
                  <div className="w-12 h-12 bg-secondary-100 border-3 border-secondary-300 rounded-lg mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of experience in education, technology,
              and learning science to create the best possible learning
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border-4 border-gray-800 shadow-thick overflow-hidden hover:scale-105 transition-transform duration-200"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the
              learning experience we create for our students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Quality First
                </h3>
              </div>
              <p className="text-gray-600">
                We never compromise on the quality of our content. Every course
                is carefully crafted, reviewed, and updated to ensure it meets
                the highest standards.
              </p>
            </div>

            <div className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-8">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Community Driven
                </h3>
              </div>
              <p className="text-gray-600">
                Learning is better together. We foster a supportive community
                where students help each other grow and succeed.
              </p>
            </div>

            <div className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Practical Focus
                </h3>
              </div>
              <p className="text-gray-600">
                Our courses are designed with real-world applications in mind.
                You&apos;ll learn skills that you can immediately apply in your
                career.
              </p>
            </div>

            <div className="bg-white rounded-xl border-4 border-gray-800 shadow-thick p-8">
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Continuous Improvement
                </h3>
              </div>
              <p className="text-gray-600">
                We&apos;re always listening to feedback and evolving our
                platform to better serve our learners&apos; needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white opacity-95 mb-8 max-w-3xl mx-auto">
            Join thousands of learners who have transformed their careers with
            LearnHub. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button variant="secondary" size="lg">
                Sign Up Free
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-primary-600"
              >
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
