
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-light-green">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <ProjectsSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
