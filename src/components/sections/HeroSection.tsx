
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const handleScrollDown = () => {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald/90 to-lime/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg">
          Jurusan Teknologi Informasi
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 drop-shadow-lg">
          Politeknik Negeri Samarinda
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 md:mb-10 drop-shadow-md">
          Tempat Berkembangnya Inovasi Digital dan Talenta Teknologi Masa Depan
        </p>
        <Button 
          variant="outline" 
          size="lg" 
          className="font-medium text-white border-white hover:bg-white/20 hover:text-white"
          onClick={handleScrollDown}
        >
          Jelajahi Jurusan
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-10 w-10 text-white opacity-80" />
      </div>
    </section>
  );
};

export default HeroSection;
