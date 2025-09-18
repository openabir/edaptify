import { Users, BookOpen, Award, Clock } from 'lucide-react';

export function StatsSection() {
  const stats = [
    { icon: Users, label: 'Students', value: '50,000+' },
    { icon: BookOpen, label: 'Courses', value: '200+' },
    { icon: Award, label: 'Certificates', value: '15,000+' },
    { icon: Clock, label: 'Hours of Content', value: '1,000+' },
  ];

  return (
    <section className="py-16 bg-neutral-100 border-y-6 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl border-4 border-border hover:shadow-thick-primary transition-all duration-300 hover:scale-105"
            >
              <Icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-neutral-800 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
