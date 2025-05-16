
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    id: 1,
    name: "D4 Teknik Rekayasa Komputer",
    description: "Program studi yang fokus pada pengembangan embedded systems, Internet of Things (IoT), dan teknologi otomasi.",
    highlights: ["Embedded Systems", "Internet of Things", "Automation"],
    icon: "📟",
  },
  {
    id: 2,
    name: "D4 Teknik Informatika Multimedia",
    description: "Program studi yang mengkhususkan pada teknologi multimedia, pengembangan web, dan komputasi kreatif.",
    highlights: ["Multimedia Technology", "Web Development", "Creative Computing"],
    icon: "🎨",
  },
  {
    id: 3,
    name: "D3 Teknik Informatika",
    description: "Program studi yang menekankan pada pengembangan perangkat lunak praktis, basis data, dan jaringan.",
    highlights: ["Software Development", "Databases", "Networks"],
    icon: "💻",
  },
  {
    id: 4,
    name: "D3 Teknik Komputer",
    description: "Program studi yang berfokus pada arsitektur komputer, sistem, dan integrasi hardware-software.",
    highlights: ["Computer Architecture", "Systems", "HW-SW Integration"],
    icon: "🖥️",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald mb-4">Program Studi</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Jurusan Teknologi Informasi menawarkan empat program studi unggulan yang dirancang untuk mempersiapkan mahasiswa menghadapi tantangan industri digital.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {programs.map((program, index) => (
          <Card key={program.id} className="card-hover opacity-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
            <CardHeader>
              <div className="text-4xl mb-4">{program.icon}</div>
              <CardTitle className="text-xl font-bold">{program.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                {program.description}
              </CardDescription>
              <div className="space-y-2">
                {program.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-lime mr-2"></div>
                    <span className="text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald hover:bg-emerald/90 mt-2" asChild>
                <Link to="/program-studi">
                  Lihat Detail
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
