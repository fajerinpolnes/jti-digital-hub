
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Smart Campus IoT System",
    description: "Implementasi IoT untuk monitoring kehadiran dan efisiensi energi di kampus.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mahasiswa",
    type: "Tugas Akhir"
  },
  {
    id: 2,
    title: "Aplikasi Mobile untuk Virtual Tour Kampus",
    description: "Aplikasi AR/VR untuk memperkenalkan fasilitas kampus kepada calon mahasiswa.",
    image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mahasiswa",
    type: "Kompetisi"
  },
  {
    id: 3,
    title: "Sistem Pendeteksi Kebakaran Hutan",
    description: "Riset untuk pengembangan sistem pendeteksi dini kebakaran hutan menggunakan AI dan drone.",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Dosen",
    type: "Riset"
  },
  {
    id: 4,
    title: "Aplikasi Pemantauan Kualitas Air",
    description: "Pengembangan sistem IoT untuk memantau kualitas air di daerah pesisir Kalimantan.",
    image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    category: "Dosen",
    type: "Riset"
  },
  {
    id: 5,
    title: "Aplikasi Pembelajaran Bahasa Daerah",
    description: "Platform interaktif untuk melestarikan bahasa daerah Kalimantan Timur.",
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mahasiswa",
    type: "Tugas Akhir"
  },
  {
    id: 6,
    title: "Sistem Manajemen Kebencanaan",
    description: "Platform terintegrasi untuk koordinasi dan manajemen bencana alam.",
    image: "https://images.unsplash.com/photo-1590644556410-d322baf2474a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Dosen",
    type: "Kompetisi"
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter || project.type === activeFilter);

  return (
    <section id="projects" className="section-padding bg-light-green">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald mb-4">Karya Mahasiswa & Dosen</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Lihat berbagai proyek inovatif dan penelitian yang dikembangkan oleh mahasiswa dan dosen Jurusan Teknologi Informasi.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto mb-8">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
          <TabsTrigger value="all" onClick={() => setActiveFilter("all")}>Semua</TabsTrigger>
          <TabsTrigger value="Mahasiswa" onClick={() => setActiveFilter("Mahasiswa")}>Mahasiswa</TabsTrigger>
          <TabsTrigger value="Dosen" onClick={() => setActiveFilter("Dosen")}>Dosen</TabsTrigger>
          <TabsTrigger value="Riset" onClick={() => setActiveFilter("Riset")}>Riset</TabsTrigger>
          <TabsTrigger value="Kompetisi" onClick={() => setActiveFilter("Kompetisi")}>Kompetisi</TabsTrigger>
          <TabsTrigger value="Tugas Akhir" onClick={() => setActiveFilter("Tugas Akhir")}>Tugas Akhir</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredProjects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full overflow-hidden card-hover">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald/10 text-emerald">
                          {project.category}
                        </span>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-lime/10 text-lime">
                          {project.type}
                        </span>
                      </div>
                      <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white">
                        View More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </TabsContent>
      </Tabs>
      
      <div className="text-center mt-10">
        <Button size="lg" className="bg-emerald hover:bg-emerald/90" asChild>
          <Link to="/karya">
            Lihat Semua Karya
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
