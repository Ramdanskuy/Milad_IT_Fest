import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { eventsData } from '../data/eventsData';
import { generalFaqsData } from '../data/faqData';
import { AutoTypingSlogan } from '../components/AutoTypingSlogan';
import { CountdownTimer } from '../components/CountdownTimer';
import { EventRegistrationCard } from '../components/EventRegistrationCard';
import { SponsorMarqueeInteractive } from '../components/SponsorMarqueeInteractive';
import { FAQAccordion } from '../components/FAQAccordion';
import { TimelineItem } from '../components/TimelineItem';
import {
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Compass,
} from 'lucide-react';

export const Home: React.FC = () => {
  // Overall roadmap timeline items for Home Page (Section 3)
  const homeRoadmapItems = [
    {
      dateFormatted: "01 September 2026",
      endDateIso: "2026-09-01T23:59:59+07:00",
      title: "Pembukaan Pendaftaran Resmi & Launching Web",
      description: "Pendaftaran seluruh cabang kompetisi & seminar nasional dibuka secara serentak."
    },
    {
      dateFormatted: "05 Oktober 2026",
      endDateIso: "2026-10-05T23:59:59+07:00",
      title: "Penutupan Registrasi Gelombang Lomba",
      description: "Batas akhir verifikasi berkas peserta dan penyelesaian administrasi tim."
    },
    {
      dateFormatted: "10 – 11 Oktober 2026",
      endDateIso: "2026-10-11T23:59:59+07:00",
      title: "Technical Meeting & Bracket Drawing",
      description: "Pertemuan teknis panitia dan seluruh peserta secara daring."
    },
    {
      dateFormatted: "12 - 16 Oktober 2026",
      endDateIso: "2026-10-16T23:59:59+07:00",
      title: "Puncak Acara MILAD IT FEST 2026 & Technofest UIR",
      description: "Rangkaian babak final perlombaan, Hackathon 24 jam, Tech Expo, dan Seminar Nasional."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 space-y-20">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[calc(100vh-5rem)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center flex flex-col items-center justify-center">
        {/* Background ambient glow shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ffe600]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#00f0ff]/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Clean Hero Title (FR-01: Judul acara bersih tanpa card di atasnya) */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-none mb-6">
          MILAD IT FEST <span className="text-[#ffe600] drop-shadow-[4px_4px_0px_#000]">2026</span>
        </h1>

        {/* Slogan Auto-Typing Effect (FR-01) */}
        <div className="mb-6 max-w-3xl">
          <AutoTypingSlogan slogans={siteConfig.heroSlogans} />
        </div>

        {/* Date & Location Badges (FR-01) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-xs sm:text-sm font-mono font-bold text-gray-200">
          <div className="bg-[#141a29] border-2 border-black shadow-[2px_2px_0px_0px_#000] px-3.5 py-2 rounded-lg flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#00f0ff]" />
            <span>{siteConfig.eventDateFormatted}</span>
          </div>
          <div className="bg-[#141a29] border-2 border-black shadow-[2px_2px_0px_0px_#000] px-3.5 py-2 rounded-lg flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#ff007f]" />
            <span>{siteConfig.location}</span>
          </div>
        </div>

        {/* Countdown Timer (FR-01) */}
        <CountdownTimer targetDateIso={siteConfig.eventDate} />

        {/* Hero CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="#pendaftaran"
            className="neo-btn-primary px-6 py-3.5 text-sm uppercase tracking-wider flex items-center gap-2 rounded-xl text-black font-extrabold"
          >
            <Rocket className="w-5 h-5" />
            Jelajahi Pendaftaran Lomba
          </a>
          <Link
            to="/about"
            className="neo-btn-cyan px-6 py-3.5 text-sm uppercase tracking-wider flex items-center gap-2 rounded-xl text-black font-extrabold"
          >
            <Compass className="w-5 h-5" />
            Tentang Event
          </Link>
        </div>
      </section>

      {/* SECTION 2: ABOUT & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121723] border-2 border-black shadow-[8px_8px_0px_0px_#000] rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="neo-badge bg-[#ffe600] text-black border-black">
              Informasi Utama
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {siteConfig.about.title}
            </h2>
            <div className="space-y-3 text-sm text-gray-300 leading-relaxed font-sans">
              {siteConfig.about.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00f0ff] hover:underline"
              >
                <span>Baca selengkapnya mengenai Visi & Sejarah 19 Tahun TI UIR</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#182030] border-2 border-black shadow-[4px_4px_0px_0px_#00f0ff] rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-black text-[#ffe600] uppercase tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00ff66]" />
              {siteConfig.about.visionTitle}
            </h3>
            <p className="text-xs text-gray-200 leading-relaxed italic border-l-2 border-[#ffe600] pl-3">
              "{siteConfig.about.visionText}"
            </p>
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono uppercase text-[#00f0ff] font-bold block">
                Misi Penyelenggaraan:
              </span>
              {siteConfig.about.missionPoints.map((m, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ROADMAP EVENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="neo-badge bg-[#00f0ff] text-black border-black">
            Timeline Keseluruhan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Roadmap Event Milad IT Fest 2026
          </h2>
          <p className="text-xs text-gray-400 font-mono">
            Tahapan pendaftaran hingga babak utama perayaan Milad Teknik Informatika UIR
          </p>
        </div>

        <div className="py-4">
          {homeRoadmapItems.map((item, idx) => (
            <TimelineItem
              key={idx}
              item={item}
              index={idx}
              isLast={idx === homeRoadmapItems.length - 1}
            />
          ))}
        </div>
      </section>

      {/* SECTION 4: PENDAFTARAN ACARA (CARDS REGISTRASI) */}
      <section id="pendaftaran" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ffe600] uppercase tracking-wider font-bold mb-1">
              <Sparkles className="w-4 h-4 text-[#00f0ff]" /> Cabang Lomba & Event
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Pendaftaran Acara Milad IT Fest 2026
            </h2>
          </div>
          <p className="text-xs text-gray-400 max-w-md font-sans">
            Pilih cabang kompetisi atau acara yang ingin kamu ikuti dan klik tombol registrasi untuk mengisi form pendaftaran resmi.
          </p>
        </div>

        {/* 6 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map((ev) => (
            <EventRegistrationCard key={ev.id} event={ev} />
          ))}
        </div>
      </section>

      {/* SECTION 5: SPONSOR & MEDIA PARTNER (MARQUEE INTERAKTIF) */}
      <SponsorMarqueeInteractive />

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion items={generalFaqsData} />
      </section>
    </div>
  );
};
