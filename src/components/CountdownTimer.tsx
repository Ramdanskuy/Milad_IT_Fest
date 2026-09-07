import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface CountdownTimerProps {
  targetDateIso: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateIso }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDateIso) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateIso]);

  const items = [
    { label: 'HARI', value: timeLeft.days, color: 'bg-[#ffe600] text-black shadow-[4px_4px_0px_0px_#000]' },
    { label: 'JAM', value: timeLeft.hours, color: 'bg-[#00f0ff] text-black shadow-[4px_4px_0px_0px_#000]' },
    { label: 'MENIT', value: timeLeft.minutes, color: 'bg-[#ff007f] text-white shadow-[4px_4px_0px_0px_#000]' },
    { label: 'DETIK', value: timeLeft.seconds, color: 'bg-[#00ff66] text-black shadow-[4px_4px_0px_0px_#000]' },
  ];

  return (
    <div className="flex flex-col items-center gap-3 my-6">
      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00f0ff] uppercase tracking-widest bg-[#181f2e] px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
        <Timer className="w-4 h-4 text-[#ffe600] animate-spin" style={{ animationDuration: '4s' }} />
        Hitung Mundur Main Event (1 Desember 2026)
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg w-full">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`border-2 border-black ${item.color} p-2 sm:p-4 text-center rounded-lg flex flex-col justify-center items-center`}
          >
            <span className="text-2xl sm:text-4xl font-extrabold font-mono leading-none">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider mt-1 opacity-90 font-sans">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
