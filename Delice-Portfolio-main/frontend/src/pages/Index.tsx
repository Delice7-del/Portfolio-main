import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import SkillsSection from '@/components/SkillsSection';

import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <CertificationsSection />
      <SkillsSection />

      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
