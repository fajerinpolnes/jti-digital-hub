
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Youtube, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-emerald text-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>Jl. Dr. Cipto Mangunkusumo, Kota Samarinda, Kalimantan Timur, Indonesia 75131</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+62 541 260588</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info.ti@polnes.ac.id</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Beranda</Link></li>
              <li><Link to="/program-studi" className="hover:underline">Program Studi</Link></li>
              <li><Link to="/karya" className="hover:underline">Karya</Link></li>
              <li><Link to="/#about" className="hover:underline">Tentang Jurusan</Link></li>
              <li><Link to="/" className="hover:underline">Fasilitas</Link></li>
              <li><Link to="/" className="hover:underline">Berita & Acara</Link></li>
            </ul>
          </div>

          {/* Program Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Program Studi</h3>
            <ul className="space-y-2">
              <li><Link to="/program-studi" className="hover:underline">D4 Teknik Rekayasa Komputer</Link></li>
              <li><Link to="/program-studi" className="hover:underline">D4 Teknik Informatika Multimedia</Link></li>
              <li><Link to="/program-studi" className="hover:underline">D3 Teknik Informatika</Link></li>
              <li><Link to="/program-studi" className="hover:underline">D3 Teknik Komputer</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Media Sosial</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-white text-emerald p-2 rounded-full hover:bg-opacity-90 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white text-emerald p-2 rounded-full hover:bg-opacity-90 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>

            <h3 className="text-xl font-bold mb-4">Jam Layanan</h3>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Senin - Jumat: 08.00 - 16.00 WITA</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Jurusan Teknologi Informasi - Politeknik Negeri Samarinda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
