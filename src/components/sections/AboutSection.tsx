
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Building2, FileText } from "lucide-react";

const stats = [
  {
    id: 1,
    value: '1000+',
    label: 'Alumni',
    icon: Users,
  },
  {
    id: 2,
    value: '25+',
    label: 'Penghargaan',
    icon: Award,
  },
  {
    id: 3,
    value: '15+',
    label: 'Kerjasama Industri',
    icon: Building2,
  },
  {
    id: 4,
    value: '50+',
    label: 'Publikasi Ilmiah',
    icon: FileText,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={stat.id} className="p-6 text-center opacity-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-0">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-emerald" />
                  <div className="text-3xl font-bold text-emerald mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald mb-6">Tentang Jurusan</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Jurusan Teknologi Informasi Politeknik Negeri Samarinda didirikan untuk menjawab kebutuhan tenaga profesional IT di Indonesia, khususnya di Kalimantan Timur. Dengan fokus pada pendidikan vokasi, jurusan ini membekali mahasiswa dengan keterampilan praktis dan pengetahuan teoritis yang seimbang.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Visi</h3>
              <p className="text-gray-700">
                Menjadi pusat unggulan pendidikan vokasi di bidang Teknologi Informasi yang menghasilkan lulusan berdaya saing tinggi dan berkontribusi pada pembangunan ekonomi digital Indonesia.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Misi</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Menyelenggarakan pendidikan vokasi berkualitas tinggi di bidang Teknologi Informasi</li>
                <li>Mengembangkan penelitian terapan yang berkontribusi pada solusi masalah industri dan masyarakat</li>
                <li>Melaksanakan pengabdian kepada masyarakat melalui transfer teknologi</li>
                <li>Membangun kemitraan yang kuat dengan industri dan institusi pendidikan dalam dan luar negeri</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
