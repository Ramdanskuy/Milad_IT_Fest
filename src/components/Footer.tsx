import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { Instagram, Mail, Phone, MapPin, ArrowUpRight, Heart } from 'lucide-react';
import { eventsData } from '../data/eventsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0e17] text-gray-300 border-t-4 border-black relative overflow-hidden pt-12 pb-8">
      {/* Decorative top strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ffe600] via-[#00f0ff] to-[#ff007f]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ffe600] border-2 border-black shadow-[2px_2px_0px_0px_#000000] flex items-center justify-center font-extrabold text-black text-xl font-mono">
                IT
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                MILAD IT FEST <span className="text-[#00f0ff] font-mono text-sm">2026</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Perayaan Milad Teknik Informatika UIR ke-19 & Technofest UIR Vol. 2. Wadah inovasi, kompetisi teknologi, dan silaturahmi civitas akademika.
            </p>
            <div className="inline-block bg-[#181f2e] border-2 border-black shadow-[2px_2px_0px_0px_#000] px-3 py-1 text-[11px] font-mono text-[#00f0ff]">
              #TeknikInformatikaUIR19 #TechnofestUIR
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold uppercase font-mono text-[#ffe600] tracking-wider border-b border-gray-800 pb-1">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link to="/" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1">
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1">
                  <span>Tentang Milad & Visi</span>
                </Link>
              </li>
              <li>
                <Link to="/sponsor" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1">
                  <span>Sponsor & Media Partner</span>
                </Link>
              </li>
              <li>
                <a href="#pendaftaran" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1">
                  <span>Pendaftaran Acara</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Events Menu */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold uppercase font-mono text-[#00f0ff] tracking-wider border-b border-gray-800 pb-1">
              Menu Acara
            </h3>
            <ul className="space-y-1.5 text-xs font-semibold">
              {eventsData.map((ev) => (
                <li key={ev.id}>
                  <Link
                    to={`/acara/${ev.slug}`}
                    className="hover:text-[#ffe600] transition-colors flex items-center justify-between"
                  >
                    <span>{ev.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold uppercase font-mono text-[#ff007f] tracking-wider border-b border-gray-800 pb-1">
              Kontak Panitia
            </h3>
            <ul className="space-y-2.5 text-xs font-medium text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ffe600] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#ff007f] shrink-0" />
                <a
                  href="https://instagram.com/himatif_uir"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-white font-mono"
                >
                  {siteConfig.contact.instagram}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00ff66] shrink-0" />
                <span className="font-mono">{siteConfig.contact.whatsapp}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span className="font-mono text-gray-300">{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© 2026 MILAD IT FEST — HIMATIF Teknik Informatika Universitas Islam Riau.</p>
          <p className="flex items-center gap-1 text-gray-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#ff007f] fill-[#ff007f]" /> for Milad TI UIR #19
          </p>
        </div>
      </div>
    </footer>
  );
};
