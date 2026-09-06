import React from 'react';
import { Trophy, Award, Gift, CheckCircle } from 'lucide-react';

interface PrizePoolCardProps {
  prizepool: string;
  registrationFee: string;
}

export const PrizePoolCard: React.FC<PrizePoolCardProps> = ({ prizepool, registrationFee }) => {
  return (
    <div className="bg-[#121723] border-2 border-black shadow-[6px_6px_0px_0px_#ffe600] rounded-xl p-6 flex flex-col justify-between space-y-6">
      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffe600] text-black font-extrabold border-2 border-black shadow-[2px_2px_0px_0px_#000] text-xs uppercase tracking-wider">
          <Trophy className="w-4 h-4 fill-black" /> Total Hadiah / Reward
        </div>

        <div>
          <span className="text-3xl sm:text-4xl font-extrabold text-[#00f0ff] font-mono block tracking-tight">
            {prizepool}
          </span>
          <p className="text-xs text-gray-400 font-mono mt-1">
            Biaya Registrasi: <span className="text-white font-bold">{registrationFee}</span>
          </p>
        </div>
      </div>

      {/* Benefits & E-Certificate Badge */}
      <div className="space-y-3 pt-4 border-t border-gray-800">
        <div className="bg-[#182030] border-2 border-black p-4 rounded-lg flex items-center gap-3.5 shadow-[3px_3px_0px_0px_#000]">
          <div className="w-10 h-10 bg-[#00ff66] border-2 border-black flex items-center justify-center text-black shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="neo-badge bg-[#00ff66] text-black border-black text-[10px] mb-0.5">
              Fasilitas Peserta
            </span>
            <h4 className="text-sm font-extrabold text-white">E-Certificate Resmi</h4>
            <p className="text-[11px] text-gray-400">
              Setiap peserta terdaftar akan memperoleh sertifikat elektronik ber-SK HIMATIF UIR.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-300">
          <div className="bg-[#141a28] p-2.5 rounded border border-gray-800 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#ffe600]" />
            <span>Trophy / Medali</span>
          </div>
          <div className="bg-[#141a28] p-2.5 rounded border border-gray-800 flex items-center gap-2">
            <Gift className="w-4 h-4 text-[#ff007f]" />
            <span>Merchandise Event</span>
          </div>
        </div>
      </div>
    </div>
  );
};
