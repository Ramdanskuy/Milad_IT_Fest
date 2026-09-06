import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import { TournamentRuleCard } from '../components/TournamentRuleCard';
import { PrizePoolCard } from '../components/PrizePoolCard';
import { SpeakerProfileCard } from '../components/SpeakerProfileCard';
import { TimelineItem } from '../components/TimelineItem';
import { FAQAccordion } from '../components/FAQAccordion';
import { ExternalLink, FileText, ArrowLeft, Calendar, Award, ShieldCheck } from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    return <Navigate to="/" replace />;
  }

  const isSeminar = event.type === 'seminar';
  // FR-03 Requirement: UI/UX Design & Hackathon MUST have 2 side-by-side buttons: "Guidebook" and "Daftar Sekarang"
  const isUiUxOrHackathon = event.type === 'design' || event.type === 'hackathon';

  return (
    <div className="min-h-screen pt-28 pb-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-[#ffe600] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      {/* Header Section (FR-02, FR-03, FR-04) */}
      <div className="space-y-6 text-center max-w-4xl mx-auto py-2">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="neo-badge bg-[#ffe600] text-black border-black">
            {event.categoryTag}
          </span>
          <span className="text-xs font-mono text-[#00f0ff] bg-[#182030] px-3 py-1 border border-black rounded shadow-[2px_2px_0px_0px_#000]">
            Prizepool: {event.prizepool}
          </span>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {event.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            {event.fullDescription}
          </p>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {/* If UI/UX or Hackathon (FR-03), render Guidebook & Daftar Sekarang side-by-side compulsory */}
          {isUiUxOrHackathon && event.guidebookLink && (
            <a
              href={event.guidebookLink}
              target="_blank"
              rel="noreferrer"
              className="neo-btn-cyan px-6 py-3 text-xs uppercase tracking-wider flex items-center gap-2 rounded-xl text-black font-extrabold"
            >
              <FileText className="w-4 h-4" />
              <span>Guidebook</span>
            </a>
          )}

          {/* Registration Button */}
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noreferrer"
            className="neo-btn-primary px-6 py-3 text-xs uppercase tracking-wider flex items-center gap-2 rounded-xl text-black font-extrabold"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Daftar Sekarang</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Guidebook button for other event types if available */}
          {!isUiUxOrHackathon && event.guidebookLink && (
            <a
              href={event.guidebookLink}
              target="_blank"
              rel="noreferrer"
              className="neo-btn-cyan px-6 py-3 text-xs uppercase tracking-wider flex items-center gap-2 rounded-xl text-black font-extrabold"
            >
              <FileText className="w-4 h-4" />
              <span>Guidebook</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Details Section */}
      {isSeminar ? (
        /* FR-04: Replaces Rule Card with Speaker Profile Card */
        <SpeakerProfileCard registrationLink={event.registrationLink} />
      ) : (
        /* FR-02: Rule Card + Prize Pool Card */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <TournamentRuleCard
              rules={event.rules}
              contactPersons={event.contactPersons}
              registrationLink={event.registrationLink}
            />
          </div>
          <div className="lg:col-span-5">
            <PrizePoolCard
              prizepool={event.prizepool}
              registrationFee={event.registrationFee}
            />
          </div>
        </div>
      )}

      {/* Timeline Section (FR-02, FR-04) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center space-y-2 mb-10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-[#ffe600]" />
            <span className="neo-badge bg-[#ffe600] text-black border-black">
              Schedule & Agenda
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Timeline Kegiatan {event.shortTitle}
          </h3>
          <p className="text-xs text-gray-400 font-mono">
            Rangkaian tanggal penting dan tahapan pelaksanaan {event.title}
          </p>
        </div>

        <div className="py-4">
          {event.timeline.map((item, idx) => (
            <TimelineItem
              key={idx}
              item={item}
              index={idx}
              isLast={idx === event.timeline.length - 1}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {event.faqs && event.faqs.length > 0 && (
        <div className="bg-[#121723] border-2 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-6 sm:p-8">
          <FAQAccordion
            items={event.faqs.map((f, i) => ({
              id: `event-faq-${i}`,
              question: f.question,
              answer: f.answer,
              category: 'umum',
            }))}
            title={`FAQ Spesifik ${event.shortTitle}`}
          />
        </div>
      )}
    </div>
  );
};
