import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { FeaturedCoursesSection } from '@/components/home/FeaturedCoursesSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturedCoursesSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
