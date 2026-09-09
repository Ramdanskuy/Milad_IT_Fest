import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EventData } from '../data/eventsData';
import { RegistrationClosedModal } from './RegistrationClosedModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface EventRegistrationCardProps {
  event: EventData;
  /** Index untuk efek stagger (0-based) */
  index?: number;
}

export const EventRegistrationCard: React.FC<EventRegistrationCardProps> = ({ event, index = 0 }) => {
  // Ensure max 3 highlights as specified in PRD FR-01
  const displayHighlights = event.highlights.slice(0, 3);
  const [showModal, setShowModal] = useState(false);

  // Scroll-reveal animation
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  // Stagger delay: tiap card muncul 80ms setelah card sebelumnya
  const staggerDelay = `${index * 80}ms`;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: staggerDelay }}
      className={`bg-[#121723] border-2 border-black shadow-[6px_6px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#ffe600] hover:-translate-y-1 transition-all duration-500 rounded-xl p-5 sm:p-6 flex flex-col justify-between group
        ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }
      `}
    >
      <div>
        {/* Top Tag & Category */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="neo-badge bg-[#00f0ff] text-black border-black shadow-[2px_2px_0px_0px_#000]">
            {event.categoryTag}
          </span>
          <span className="text-[11px] font-mono text-[#ffe600] bg-[#1a2130] px-2 py-0.5 border border-black rounded">
            {event.prizepool}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-white group-hover:text-[#ffe600] transition-colors mb-2">
          {event.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-gray-400 mb-5 leading-relaxed font-sans">
          {event.shortDescription}
        </p>

        {/* Max 3 Highlight Benefit/Prizepool points */}
        <div className="space-y-2 mb-6 bg-[#181f2e] border-2 border-black p-3.5 rounded-lg shadow-[2px_2px_0px_0px_#000]">
          <span className="text-[10px] font-mono uppercase text-[#00f0ff] font-bold block mb-1">
            Benefit & Detail Utama:
          </span>
          {displayHighlights.map((hl, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0 mt-0.5" />
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons: "Daftar Sekarang" & "Lihat Detail Acara" */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-gray-800">
        <button
          onClick={() => setShowModal(true)}
          className="neo-btn-primary py-2.5 px-3 text-xs flex items-center justify-center gap-1.5 rounded-lg text-center"
        >
          <span>Daftar Sekarang</span>
        </button>

        <Link
          to={`/acara/${event.slug}`}
          className="neo-btn-cyan py-2.5 px-3 text-xs flex items-center justify-center gap-1.5 rounded-lg text-center"
        >
          <span>Lihat Detail</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Registration Closed Popup */}
      <RegistrationClosedModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        eventTitle={event.title}
      />
    </div>
  );
};
