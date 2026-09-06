import React from 'react';
import { ContactPerson } from '../data/eventsData';
import { ShieldCheck, PhoneCall, ExternalLink, ScrollText } from 'lucide-react';

interface TournamentRuleCardProps {
  rules?: string[];
  contactPersons: ContactPerson[];
  registrationLink: string;
}

export const TournamentRuleCard: React.FC<TournamentRuleCardProps> = ({
  rules,
  contactPersons,
  registrationLink,
}) => {
  return (
    <div className="bg-[#121723] border-2 border-black shadow-[6px_6px_0px_0px_#000] rounded-xl p-6 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-800 pb-3">
          <ScrollText className="w-5 h-5 text-[#ffe600]" />
          <h3 className="text-lg font-black text-white uppercase tracking-tight">
            Ketentuan & Peraturan Utama
          </h3>
        </div>

        {rules && rules.length > 0 ? (
          <ul className="space-y-2.5 text-xs text-gray-300 leading-relaxed font-sans">
            {rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 bg-[#182030] text-[#00f0ff] font-mono font-bold text-[11px] rounded flex items-center justify-center border border-black shrink-0">
                  {idx + 1}
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-gray-400 italic">
            Ketentuan lengkap dapat dibaca pada guidebook resmi perlombaan.
          </p>
        )}
      </div>

      {/* Contact Person & CTA */}
      <div className="space-y-4 pt-4 border-t border-gray-800">
        <div>
          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider font-bold block mb-2">
            Contact Person Panitia:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {contactPersons.map((cp, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${cp.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#182030] border border-gray-700 hover:border-[#00ff66] p-2.5 rounded-lg flex items-center gap-2.5 transition-colors group"
              >
                <PhoneCall className="w-4 h-4 text-[#00ff66] shrink-0" />
                <div className="text-left overflow-hidden">
                  <p className="text-xs font-bold text-white group-hover:text-[#00ff66] truncate">
                    {cp.name}
                  </p>
                  <p className="text-[10px] text-gray-400 font-mono truncate">{cp.phone} ({cp.role})</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <a
          href={registrationLink}
          target="_blank"
          rel="noreferrer"
          className="neo-btn-primary w-full py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-lg text-center font-extrabold"
        >
          <ShieldCheck className="w-4 h-4" />
          Daftar Sekarang
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
