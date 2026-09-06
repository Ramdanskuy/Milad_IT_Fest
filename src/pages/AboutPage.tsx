import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Award, Flame, Users, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="bg-[#121723] border-2 border-black shadow-[8px_8px_0px_0px_#ffe600] rounded-2xl p-8 sm:p-12 text-center space-y-4">
        <span className="neo-badge bg-[#00f0ff] text-black border-black">
          Official Event Page
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Tentang Milad IT Fest 2026
        </h1>
        <p className="text-sm sm:text-base font-mono text-[#ffe600] max-w-3xl mx-auto">
          {siteConfig.subTitle} — {siteConfig.edition}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: History & Background */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#121723] border-2 border-black shadow-[6px_6px_0px_0px_#000] rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-[#ffe600]" />
              Sejarah & Latar Belakang
            </h2>
            <div className="space-y-3 text-sm text-gray-300 leading-relaxed font-sans">
              <p>
                Program Studi Teknik Informatika Universitas Islam Riau (UIR) didirikan untuk melahirkan insan akademis yang unggul, profesional, dan mampu bersaing di industri teknologi global.
              </p>
              <p>
                Dalam rangka merayakan usia ke-19 tahun, Himpunan Mahasiswa Teknik Informatika (HIMATIF) menyelenggarakan <strong>MILAD IT FEST 2026</strong> yang berkolaborasi dengan <strong>Technofest UIR Vol. 2</strong>.
              </p>
              <p>
                Event ini dirancang sebagai ajang unjuk kebolehan talenta muda Indonesia di bidang E-Sports, Olahraga, Desain Antarmuka, Pemrograman (Hackathon), serta ajang pertukaran wawasan melalui Seminar Nasional.
              </p>
            </div>
          </div>

          <div className="bg-[#121723] border-2 border-black shadow-[6px_6px_0px_0px_#000] rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#00f0ff]" />
              Visi & Tujuan Strategis
            </h2>
            <p className="text-xs text-gray-200 leading-relaxed italic border-l-2 border-[#00f0ff] pl-3">
              "{siteConfig.about.visionText}"
            </p>
            <div className="space-y-2 pt-2">
              {siteConfig.about.missionPoints.map((m, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Organizer & Location Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#182030] border-2 border-black shadow-[6px_6px_0px_0px_#ff007f] rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-black text-[#ffe600] uppercase tracking-tight flex items-center gap-2">
              <Users className="w-5 h-5 text-[#ff007f]" />
              Penyelenggara Event
            </h3>
            <div className="space-y-2 text-xs text-gray-300">
              <p>
                <strong className="text-white">Penyelenggara:</strong> {siteConfig.organizer}
              </p>
              <p>
                <strong className="text-white">Instansi:</strong> Program Studi Teknik Informatika, Fakultas Teknik, Universitas Islam Riau.
              </p>
              <p>
                <strong className="text-white">Email Humas:</strong> {siteConfig.contact.email}
              </p>
              <p>
                <strong className="text-white">Instagram:</strong> {siteConfig.contact.instagram}
              </p>
            </div>
          </div>

          <div className="bg-[#182030] border-2 border-black shadow-[6px_6px_0px_0px_#00ff66] rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-black text-[#00ff66] uppercase tracking-tight flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ffe600]" />
              Waktu & Lokasi
            </h3>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00f0ff]" />
                <span>{siteConfig.eventDateFormatted}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff007f] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
