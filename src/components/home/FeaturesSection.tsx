import { Code, Users, Palette, Brain, Target, Award } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Code,
      title: 'Learn by Doing',
      description:
        'Hands-on projects and coding exercises to reinforce your learning.',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description:
        'Learn from industry professionals with years of real-world experience.',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-100',
    },
    {
      icon: Palette,
      title: 'Interactive Content',
      description:
        'Engaging videos, quizzes, and interactive exercises to keep you motivated.',
      color: 'text-accent-600',
      bgColor: 'bg-accent-100',
    },
    {
      icon: Brain,
      title: 'Personalized Learning',
      description:
        'Adaptive learning paths that adjust to your pace and skill level.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Award,
      title: 'Certificates',
      description:
        'Earn recognized certificates upon successful completion of courses.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Target,
      title: 'Career Support',
      description:
        'Job placement assistance and career guidance to help you succeed.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="p-8 bg-neutral-100 rounded-xl border-4 border-border shadow-thick hover:shadow-thick-primary hover:border-primary-500 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-xl border-3 border-border flex items-center justify-center mb-6`}
              >
                <Icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
