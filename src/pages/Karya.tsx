
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import FooterSection from '@/components/sections/FooterSection';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Smart Campus IoT System",
    description: "Implementasi IoT untuk monitoring kehadiran dan efisiensi energi di kampus.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mahasiswa",
    type: "Tugas Akhir",
    author: "Anindya Putri",
    year: "2024"
  },
  {
    id: 2,
    title: "Aplikasi Mobile untuk Virtual Tour Kampus",
    description: "Aplikasi AR/VR untuk memperkenalkan fasilitas kampus kepada calon mahasiswa.",
    image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mahasiswa",
    type: "Kompetisi",
    author: "Budi Santoso",
    year: "2023"
  },
  {
    id: 3,
    title: "Sistem Pendeteksi Kebakaran Hutan",
    description: "Riset untuk pengembangan sistem pendeteksi dini kebakaran hutan menggunakan AI dan drone.",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Dosen",
    type: "Riset",
    author: "Dr. Ahmad Faisal",
    year: "2024"
  },
  {
    id: 4,
    title: "Aplikasi Pemantauan Kualitas Air",
    description: "Pengembangan sistem IoT untuk memantau kualitas air di daerah pesisir Kalimantan.",
    image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    category: "Dosen",
    type: "Riset",
    author: "Dr. Siti Aminah",
    year: "2023"
  },
  {
    id: 5,
    title: "Aplikasi Pembelajaran Bahasa Daerah",
    description: "Platform interaktif untuk melestarikan bahasa daerah Kalimantan Timur.",
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mahasiswa",
    type: "Tugas Akhir",
    author: "Dewi Cahaya",
    year: "2023"
  },
  {
    id: 6,
    title: "Sistem Manajemen Kebencanaan",
    description: "Platform terintegrasi untuk koordinasi dan manajemen bencana alam.",
    image: "https://images.unsplash.com/photo-1590644556410-d322baf2474a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Dosen",
    type: "Kompetisi",
    author: "Prof. Hadi Wijaya",
    year: "2024"
  },
  {
    id: 7,
    title: "Smart Agriculture System",
    description: "Sistem cerdas untuk monitoring dan otomasi pertanian menggunakan IoT dan AI.",
    image: "https://images.unsplash.com/photo-1584967918940-a7d51b064268?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mahasiswa",
    type: "Riset",
    author: "Irfan Pratama",
    year: "2022"
  },
  {
    id: 8,
    title: "Digital Healthcare Platform",
    description: "Platform telemedicine untuk daerah terpencil di Kalimantan Timur.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Dosen",
    type: "Riset",
    author: "Dr. Rina Wulandari",
    year: "2022"
  },
  {
    id: 9,
    title: "Garbage Monitoring System",
    description: "Sistem pemantauan sampah cerdas untuk mendukung program smart city.",
    image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mahasiswa",
    type: "Tugas Akhir",
    author: "Andika Nugroho",
    year: "2023"
  },
  {
    id: 10,
    title: "Cultural Heritage Preservation App",
    description: "Aplikasi untuk mendokumentasikan dan melestarikan warisan budaya Dayak.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Dosen",
    type: "Kompetisi",
    author: "Dr. Maya Kartika",
    year: "2022"
  },
  {
    id: 11,
    title: "Traffic Management System",
    description: "Sistem cerdas untuk mengoptimalkan lalu lintas dan mengurangi kemacetan di Samarinda.",
    image: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mahasiswa",
    type: "Riset",
    author: "Reza Mahendra",
    year: "2022"
  },
  {
    id: 12,
    title: "E-Learning Platform for Vocational Skills",
    description: "Platform pembelajaran keterampilan vokasi untuk mendukung pengembangan SDM lokal.",
    image: "https://images.unsplash.com/photo-1610484826917-6f1dc12639b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Dosen",
    type: "Tugas Akhir",
    author: "Dr. Budi Santoso",
    year: "2023"
  },
];

const Karya = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter || project.type === activeFilter);
    
  // Paginate projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="min-h-screen bg-light-green">
      <Navbar />
      
      {/* Header Banner */}
      <section className="relative py-20 bg-emerald text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald to-lime opacity-80"></div>
        <div className="relative z-10 section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Karya Mahasiswa & Dosen</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Lihat berbagai proyek inovatif dan penelitian yang dikembangkan oleh mahasiswa dan dosen Jurusan Teknologi Informasi.
          </p>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="section-padding bg-white">
        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8 bg-emerald/5 p-1">
            <TabsTrigger value="all" onClick={() => {setActiveFilter("all"); setCurrentPage(1);}}>Semua</TabsTrigger>
            <TabsTrigger value="Mahasiswa" onClick={() => {setActiveFilter("Mahasiswa"); setCurrentPage(1);}}>Mahasiswa</TabsTrigger>
            <TabsTrigger value="Dosen" onClick={() => {setActiveFilter("Dosen"); setCurrentPage(1);}}>Dosen</TabsTrigger>
            <TabsTrigger value="Riset" onClick={() => {setActiveFilter("Riset"); setCurrentPage(1);}}>Riset</TabsTrigger>
            <TabsTrigger value="Kompetisi" onClick={() => {setActiveFilter("Kompetisi"); setCurrentPage(1);}}>Kompetisi</TabsTrigger>
            <TabsTrigger value="Tugas Akhir" onClick={() => {setActiveFilter("Tugas Akhir"); setCurrentPage(1);}}>Tugas Akhir</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProjects.map((project) => (
                <Card key={project.id} className="h-full overflow-hidden card-hover">
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
                    <CardDescription className="line-clamp-2 mb-3">{project.description}</CardDescription>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>By: {project.author}</span>
                      <span>{project.year}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white">
                      View Detail <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="mt-10">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-emerald/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-emerald mb-4">Punya Karya Inovatif?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Kami selalu terbuka untuk kolaborasi dan terus mencari karya-karya inovatif untuk ditampilkan. 
            Jika Anda memiliki proyek yang ingin disorot, hubungi kami.
          </p>
          <Button size="lg" className="bg-emerald hover:bg-emerald/90">
            Ajukan Karya Anda
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default Karya;
