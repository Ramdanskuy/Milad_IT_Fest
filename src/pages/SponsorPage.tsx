import React, { useState } from 'react';
import { sponsorsData } from '../data/sponsorsData';
import { siteConfig } from '../data/siteConfig';
import { Building2, ExternalLink, Mail, Phone, Handshake, Megaphone } from 'lucide-react';

interface SponsorLogoCardProps {
  logoUrl?: string;
  name: string;
  FallbackIcon: React.ComponentType<{ className?: string }>;
}

const SponsorLogoCard: React.FC<SponsorLogoCardProps> = ({ logoUrl, name, FallbackIcon }) => {
  const [imgError, setImgError] = useState(false);

  if (logoUrl && !imgError) {
    return (
      <img
        src={logoUrl}
        alt={name}
        onError={() => setImgError(true)}
        className="w-full h-full object-contain p-1"
      />
    );
  }

  return <FallbackIcon className="w-16 h-16 sm:w-20 sm:h-20 text-[#00f0ff]" />;
};

export const SponsorPage: React.FC = () => {
  const sponsorsOnly = sponsorsData.filter((s) => s.tier !== 'media-partner');
  const mediaPartnersOnly = sponsorsData.filter((s) => s.tier === 'media-partner');

  return (
    <div className="min-h-screen pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-4xl mx-auto py-2">
        <span className="neo-badge bg-[#ffe600] text-black border-black">
          Official Partners
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Sponsor & Media Partner
        </h1>
        <p className="text-sm font-mono text-gray-300 max-w-2xl mx-auto">
          Terima kasih kepada seluruh instansi, perusahaan, dan media partner yang telah mendukung terselenggaranya MILAD IT FEST 2026.
        </p>
      </div>

      {/* SECTION 1: SPONSOR RESMI */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-3 border-b-2 border-gray-800 pb-3 text-center">
          <Building2 className="w-6 h-6 text-[#ffe600]" />
          <h2 className="text-2xl font-black text-white tracking-tight uppercase">
            Sponsor Resmi
          </h2>
          <span className="text-xs font-mono text-gray-400 bg-[#182030] px-2.5 py-0.5 border border-black rounded">
            Platinum, Gold, Silver & Bronze
          </span>
        </div>

        {/* Tier Row Layout: Row 1 = Platinum, Row 2 = Gold, Row 3 = Silver & Bronze */}
        {(() => {
          const platinums = sponsorsOnly.filter((s) => s.tier === 'platinum');
          const golds = sponsorsOnly.filter((s) => s.tier === 'gold');
          const silversAndBronzes = sponsorsOnly.filter((s) => s.tier === 'silver' || s.tier === 'bronze');

          const renderSponsorItem = (sponsor: typeof sponsorsOnly[0], logoSizeClass: string) => (
            <a
              key={sponsor.id}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="relative p-2 sm:p-3 flex flex-col items-center text-center group cursor-pointer grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 space-y-1.5"
            >
              {/* 1. LOGO */}
              <div className={`${logoSizeClass} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}>
                <SponsorLogoCard logoUrl={sponsor.logoUrl} name={sponsor.name} FallbackIcon={Building2} />
              </div>

              {/* 2. NAME */}
              <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#ffe600] transition-colors leading-tight">
                {sponsor.name}
              </h3>

              {/* 3. TIER LABEL */}
              <span
                className={`neo-badge border-black ${
                  sponsor.tier === 'platinum'
                    ? 'bg-[#ff007f] text-white'
                    : sponsor.tier === 'gold'
                    ? 'bg-[#ffe600] text-black'
                    : 'bg-[#00f0ff] text-black'
                }`}
              >
                {sponsor.tierLabel}
              </span>

              {/* BUBBLE MESSAGE TOOLTIP FOR DESCRIPTION (HOVER ONLY) */}
              {sponsor.description && (
                <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-56 sm:w-64 p-3 bg-[#182030] text-gray-200 text-xs rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#ffe600] opacity-0 group-hover:opacity-100 transition-all duration-200 z-30 group-hover:-translate-y-1">
                  <p className="leading-relaxed font-sans">{sponsor.description}</p>
                  {/* Bubble tail arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black" />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px] w-0 h-0 border-x-[7px] border-x-transparent border-t-[7px] border-t-[#182030]" />
                </div>
              )}
            </a>
          );

          return (
            <div className="space-y-6">
              {/* Row 1: Platinum Sponsors */}
              {platinums.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {platinums.map((sponsor) =>
                    renderSponsorItem(sponsor, 'w-32 h-32 sm:w-44 sm:h-44')
                  )}
                </div>
              )}

              {/* Row 2: Gold Sponsors */}
              {golds.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {golds.map((sponsor) =>
                    renderSponsorItem(sponsor, 'w-24 h-24 sm:w-32 sm:h-32')
                  )}
                </div>
              )}

              {/* Row 3: Silver & Bronze Sponsors */}
              {silversAndBronzes.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {silversAndBronzes.map((sponsor) =>
                    renderSponsorItem(sponsor, 'w-16 h-16 sm:w-20 sm:h-20')
                  )}
                </div>
              )}
            </div>
          );
        })()}
      </div>

      {/* SECTION 2: MEDIA PARTNER RESMI */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-wrap items-center justify-center gap-3 border-b-2 border-gray-800 pb-3 text-center">
          <Megaphone className="w-6 h-6 text-[#00f0ff]" />
          <h2 className="text-2xl font-black text-white tracking-tight uppercase">
            Official Media Partner
          </h2>
          <span className="text-xs font-mono text-gray-400 bg-[#182030] px-2.5 py-0.5 border border-black rounded">
            Publikasi & Liputan Event
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {mediaPartnersOnly.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-3 flex flex-col items-center text-center group cursor-pointer grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 space-y-1.5"
            >
              {/* LOGO */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                <SponsorLogoCard logoUrl={sponsor.logoUrl} name={sponsor.name} FallbackIcon={Megaphone} />
              </div>
              {/* NAME ONLY (NO TIER LABEL) */}
              <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#00f0ff] transition-colors leading-tight">
                {sponsor.name}
              </h3>
            </a>
          ))}
        </div>
      </div>

      {/* CTA Besar "Hubungi Panitia" (FR-05) */}
      <div className="bg-[#182030] border-4 border-black shadow-[10px_10px_0px_0px_#ffe600] rounded-2xl p-8 sm:p-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-[#ffe600] text-black font-extrabold px-4 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_#000] text-xs uppercase tracking-wider">
          <Handshake className="w-4 h-4 fill-black" /> Peluang Kerjasama Sponsorship
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Tertarik Menjadi Sponsor / Media Partner Kami?
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
          Jangkau ribuan mahasiswa, pelajar, dan komunitas IT se-Riau dan Indonesia melalui paket sponsorship eksklusif Milad IT Fest 2026.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="neo-btn-primary px-8 py-4 text-sm font-extrabold uppercase tracking-wider flex items-center gap-3 rounded-xl"
          >
            <Phone className="w-5 h-5 text-black" />
            <span>Hubungi Panitia (WhatsApp)</span>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="neo-btn-cyan px-8 py-4 text-sm font-extrabold uppercase tracking-wider flex items-center gap-3 rounded-xl"
          >
            <Mail className="w-5 h-5 text-black" />
            <span>Kirim Proposal (Email)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

