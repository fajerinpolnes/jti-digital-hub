
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import FooterSection from '@/components/sections/FooterSection';

const programs = [
  {
    id: 1,
    name: "D4 Teknik Rekayasa Komputer",
    description: "Program studi yang fokus pada pengembangan embedded systems, Internet of Things (IoT), dan teknologi otomasi.",
    highlights: ["Embedded Systems", "Internet of Things", "Automation"],
    icon: "📟",
    detailDescription: "Program studi ini mempersiapkan mahasiswa untuk memiliki keahlian dalam merancang, mengembangkan, dan mengimplementasikan sistem komputer terintegrasi. Kurikulum mencakup pemrograman mikrokontroler, desain sistem tertanam, jaringan sensor nirkabel, dan teknologi IoT untuk aplikasi industri dan komersial.",
    careers: ["IoT Developer", "Embedded Systems Engineer", "Automation Specialist", "Hardware Designer", "Firmware Engineer"],
    courses: ["Sistem Tertanam", "Jaringan Sensor Nirkabel", "Pemrograman Mikrokontroler", "Sistem Otomasi Industri", "Desain PCB", "Keamanan IoT"]
  },
  {
    id: 2,
    name: "D4 Teknik Informatika Multimedia",
    description: "Program studi yang mengkhususkan pada teknologi multimedia, pengembangan web, dan komputasi kreatif.",
    highlights: ["Multimedia Technology", "Web Development", "Creative Computing"],
    icon: "🎨",
    detailDescription: "Program studi ini berfokus pada pengembangan aplikasi multimedia dan web yang inovatif. Mahasiswa akan mempelajari berbagai aspek pengembangan web modern, desain antarmuka, pengolahan gambar dan video, serta integrasi teknologi kreatif seperti AR/VR dalam aplikasi multimedia.",
    careers: ["UI/UX Designer", "Web Developer", "Multimedia Programmer", "Game Developer", "Digital Media Specialist"],
    courses: ["Desain Antarmuka Pengguna", "Pengembangan Web Full-Stack", "Pengolahan Citra Digital", "Animasi 3D", "Pengembangan Game", "Realitas Virtual & Augmented"]
  },
  {
    id: 3,
    name: "D3 Teknik Informatika",
    description: "Program studi yang menekankan pada pengembangan perangkat lunak praktis, basis data, dan jaringan.",
    highlights: ["Software Development", "Databases", "Networks"],
    icon: "💻",
    detailDescription: "Program studi ini menyediakan dasar-dasar yang kuat dalam pengembangan perangkat lunak dan sistem informasi. Mahasiswa akan mendapatkan keterampilan praktis dalam pemrograman, manajemen basis data, analisis sistem, dan jaringan komputer untuk mempersiapkan karir di berbagai sektor industri teknologi informasi.",
    careers: ["Software Developer", "Database Administrator", "System Analyst", "Network Administrator", "IT Support Specialist"],
    courses: ["Pemrograman Berorientasi Objek", "Manajemen Basis Data", "Analisis & Desain Sistem", "Jaringan Komputer", "Keamanan Sistem Informasi", "Pengujian Perangkat Lunak"]
  },
  {
    id: 4,
    name: "D3 Teknik Komputer",
    description: "Program studi yang berfokus pada arsitektur komputer, sistem, dan integrasi hardware-software.",
    highlights: ["Computer Architecture", "Systems", "HW-SW Integration"],
    icon: "🖥️",
    detailDescription: "Program studi ini memberikan pengetahuan mendalam tentang struktur dan fungsi sistem komputer. Kurikulum mencakup dasar-dasar arsitektur komputer, sistem operasi, perangkat keras komputer, serta integrasi antara perangkat keras dan perangkat lunak untuk menghasilkan solusi sistem yang optimal.",
    careers: ["Computer Technician", "Hardware Engineer", "System Builder", "IT Infrastructure Specialist", "Technical Support Engineer"],
    courses: ["Arsitektur Komputer", "Sistem Operasi", "Perakitan Komputer", "Troubleshooting Perangkat Keras", "Administrasi Server", "Teknologi Jaringan"]
  },
];

const ProgramStudi = () => {
  return (
    <div className="min-h-screen bg-light-green">
      <Navbar />
      
      {/* Header Banner */}
      <section className="relative py-20 bg-emerald text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald to-lime opacity-80"></div>
        <div className="relative z-10 section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Program Studi</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Jurusan Teknologi Informasi Politeknik Negeri Samarinda menawarkan empat program studi unggulan 
            yang dirancang untuk mempersiapkan mahasiswa menghadapi tantangan industri digital.
          </p>
        </div>
      </section>
      
      {/* Programs Detail */}
      <section className="section-padding bg-white">
        <div className="grid grid-cols-1 gap-10">
          {programs.map((program, index) => (
            <div key={program.id} className="card-hover animate-fade-in bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-3 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Program Info */}
                <div className="p-6 lg:p-8 col-span-1">
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h2 className="text-2xl font-bold text-emerald mb-4">{program.name}</h2>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h3 className="font-semibold">Fokus Utama:</h3>
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-lime mr-2"></div>
                        <span className="text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Program Details */}
                <div className="bg-gray-50 p-6 lg:p-8 col-span-2">
                  <p className="text-gray-700 mb-6">{program.detailDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Career Opportunities */}
                    <div>
                      <h3 className="text-lg font-semibold text-emerald mb-3">Peluang Karir</h3>
                      <ul className="space-y-2">
                        {program.careers.map((career, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-lime mr-2"></div>
                            <span>{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Key Courses */}
                    <div>
                      <h3 className="text-lg font-semibold text-emerald mb-3">Mata Kuliah Utama</h3>
                      <ul className="space-y-2">
                        {program.courses.map((course, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-lime mr-2"></div>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button className="bg-emerald hover:bg-emerald/90">
                      Lihat Kurikulum Lengkap
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Apply Now Section */}
      <section className="section-padding bg-emerald/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-emerald mb-4">Tertarik Bergabung?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Jadilah bagian dari komunitas teknologi yang dinamis dan inovatif. 
            Mulai perjalanan pendidikan Anda di Jurusan Teknologi Informasi Politeknik Negeri Samarinda.
          </p>
          <Button size="lg" className="bg-emerald hover:bg-emerald/90">
            Daftar Sekarang
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default ProgramStudi;
