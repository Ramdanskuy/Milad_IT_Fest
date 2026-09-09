import React from 'react';
import { Speaker, speakersData } from '../data/speakersData';
import { UserCheck, Linkedin, Instagram, Twitter, CalendarDays, ShieldCheck } from 'lucide-react';

interface SpeakerProfileCardProps {
  onRegisterClick: () => void;
}

export const SpeakerProfileCard: React.FC<SpeakerProfileCardProps> = ({ onRegisterClick }) => {
  return (
    <div className="bg-[#121723] border-2 border-black shadow-[6px_6px_0px_0px_#00f0ff] rounded-xl p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-gray-800 pb-3">
        <div className="flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-[#ffe600]" />
          <h3 className="text-lg font-black text-white uppercase tracking-tight">
            Keynote Speakers & Pemateri
          </h3>
        </div>
        <span className="neo-badge bg-[#ff007f] text-white border-black">Special Guest</span>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {speakersData.map((sp) => (
          <div
            key={sp.id}
            className="bg-[#182030] border-2 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_#000] flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            {/* Avatar Photo */}
            <div className="relative shrink-0">
              <img
                src={sp.avatarUrl}
                alt={sp.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover border-2 border-black shadow-[3px_3px_0px_0px_#ffe600]"
              />
              <span className="absolute -bottom-2 -right-2 bg-[#00f0ff] text-black font-mono font-bold text-[9px] px-1.5 py-0.5 border border-black uppercase rounded">
                Keynote
              </span>
            </div>

            {/* Info */}
            <div className="space-y-1.5 text-center sm:text-left">
              <h4 className="font-extrabold text-base text-white">{sp.name}</h4>
              <p className="text-xs text-[#ffe600] font-semibold">{sp.roleTitle}</p>
              <p className="text-[11px] text-gray-400 font-mono">{sp.company}</p>
              <div className="bg-[#121723] p-2 rounded border border-gray-800 mt-2">
                <span className="text-[10px] font-mono text-[#00f0ff] uppercase block font-bold">Materi Topik:</span>
                <p className="text-xs text-gray-200 font-medium italic">"{sp.topicTitle}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Agenda & Registration CTA */}
      <div className="bg-[#161d2b] border-2 border-black p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <CalendarDays className="w-8 h-8 text-[#00ff66] shrink-0" />
          <div>
            <h4 className="text-sm font-extrabold text-white">Agenda: Generative AI & Cyber Resilience</h4>
            <p className="text-xs text-gray-400">Jumat, 16 Oktober 2026 | 08.00 WIB - Selesai @ GSG UIR</p>
          </div>
        </div>

        <button
          onClick={onRegisterClick}
          className="neo-btn-primary px-5 py-2.5 text-xs uppercase tracking-wider flex items-center gap-2 rounded-lg shrink-0"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Daftar Seminar</span>
        </button>
      </div>
    </div>
  );
};
