import React from 'react';
import { TimelineItemData } from '../data/eventsData';
import { isPastDate } from '../lib/date';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLast }) => {
  const expired = isPastDate(item.endDateIso);
  const isEven = index % 2 === 0;

  return (
    <div className={`relative w-full ${isLast ? 'mb-0' : 'mb-8 md:mb-12'} ${expired ? 'grayscale opacity-70' : ''}`}>
      {/* Mobile Vertical line connector */}
      {!isLast && (
        <div className="md:hidden absolute top-5 left-4 w-0.5 h-[calc(100%+2rem)] -ml-[1px] bg-[#00f0ff]/30 z-0" />
      )}

      {/* Desktop Central Vertical line connector */}
      {!isLast && (
        <div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+3rem)] -ml-[0.5px] bg-[#00f0ff]/40 border-l border-dashed border-[#00f0ff]/60 z-0" />
      )}

      {/* Container: Flex on mobile, grid/positioned on desktop */}
      <div className="relative flex flex-col md:flex-row md:items-center w-full">
        {/* Circle Icon Badge */}
        {/* Mobile: Left side (left-0). Desktop: Centered on vertical axis (left-1/2) */}
        <div
          className={`absolute left-0 md:left-1/2 top-1 md:top-2 -translate-x-0 md:-translate-x-1/2 z-20 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-mono text-xs font-extrabold shadow-[2px_2px_0px_0px_#000] shrink-0 transition-transform hover:scale-110 ${
            expired
              ? 'bg-gray-700 text-gray-300'
              : 'bg-[#ffe600] text-black'
          }`}
        >
          {expired ? <CheckCircle2 className="w-4 h-4 text-gray-300" /> : index + 1}
        </div>

        {/* Content Card Wrapper */}
        {/* Mobile: Padded left to clear badge (pl-12). Desktop: 50% width alternating left/right */}
        <div
          className={`w-full pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${
            isEven
              ? 'md:mr-auto'
              : 'md:ml-auto'
          }`}
        >
          <div
            className={`p-4 sm:p-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:-translate-y-1 ${
              expired ? 'bg-[#151a24] text-gray-400' : 'bg-[#182030] text-white'
            }`}
          >
            <div className={`flex flex-wrap items-center justify-between gap-2 mb-2 ${
              isEven ? 'md:flex-row-reverse' : ''
            }`}>
              <h4 className={`text-sm sm:text-base font-extrabold ${expired ? 'text-gray-300 line-through' : 'text-white'}`}>
                {item.title}
              </h4>
              <span
                className={`text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 border border-black rounded flex items-center gap-1.5 shrink-0 ${
                  expired
                    ? 'bg-gray-800 text-gray-400'
                    : 'bg-[#00f0ff] text-black shadow-[1px_1px_0px_0px_#000]'
                }`}
              >
                {expired ? <Clock className="w-3 h-3" /> : <Calendar className="w-3 h-3" />}
                {item.dateFormatted}
                {expired && ' (Selesai)'}
              </span>
            </div>
            <p className={`text-xs sm:text-sm text-gray-300 leading-relaxed font-sans ${
              isEven ? 'md:text-right text-left' : 'text-left'
            }`}>
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

