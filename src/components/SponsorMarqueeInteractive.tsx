import React, { useState } from 'react';
import { Sponsor, sponsorsData } from '../data/sponsorsData';
import { ExternalLink, Sparkles, Building2, Megaphone, Info } from 'lucide-react';

interface SponsorLogoProps {
  logoUrl?: string;
  name: string;
  FallbackIcon: React.ComponentType<{ className?: string }>;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({ logoUrl, name, FallbackIcon }) => {
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

  return <FallbackIcon className="w-10 h-10 sm:w-12 sm:h-12" />;
};

export const SponsorMarqueeInteractive: React.FC = () => {
  const [activeSponsor, setActiveSponsor] = useState<Sponsor | null>(null);
  const [hoveredItemKey, setHoveredItemKey] = useState<string | null>(null);

  const sponsorsOnly = sponsorsData.filter((s) => s.tier !== 'media-partner');
  const mediaPartnersOnly = sponsorsData.filter((s) => s.tier === 'media-partner');

  // Duplicate items sufficiently for seamless infinite scroll loops
  const marqueeSponsors = Array(6).fill(sponsorsOnly).flat();
  const marqueeMedia = Array(10).fill(mediaPartnersOnly).flat();

  return (
    <div className="py-12 bg-[#0c101a] border-y-4 border-black relative space-y-8">
      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider font-bold">
          <Sparkles className="w-4 h-4 text-[#ffe600]" /> Supported & Partnered By
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Sponsor & Media Partner Resmi
        </h2>
        <p className="text-xs text-gray-400 font-mono inline-flex items-center justify-center gap-1.5 bg-[#181f2e] px-3 py-1.5 border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] mt-1">
          <Info className="w-4 h-4 text-[#ffe600]" /> Arahkan kursor / Tap logo untuk melihat info detail
        </p>
      </div>

      {/* TRACK 1: SPONSOR RESMI (Animasi Ke Kiri) */}
      <div className="space-y-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center flex justify-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#ffe600] uppercase tracking-wider bg-[#182030] px-3 py-1 border border-black rounded shadow-[2px_2px_0px_0px_#000]">
            <Building2 className="w-3.5 h-3.5 text-[#ffe600]" /> Sponsor Resmi
          </div>
        </div>

        <div className="relative overflow-hidden w-full group py-4">
          {/* Left & Right gradient fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0c101a] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0c101a] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused] gap-10 items-center px-4">
            {marqueeSponsors.map((sponsor, index) => {
              const itemKey = `sponsor-${sponsor.id}-${index}`;
              const isHovered = hoveredItemKey === itemKey;

              return (
                <div
                  key={itemKey}
                  onMouseEnter={() => {
                    setHoveredItemKey(itemKey);
                    setActiveSponsor(sponsor);
                  }}
                  onMouseLeave={() => setHoveredItemKey(null)}
                  onClick={() => setActiveSponsor(sponsor)}
                  className={`cursor-pointer flex flex-col items-center justify-center text-center p-2 transition-all duration-300 ${
                    isHovered
                      ? 'grayscale-0 opacity-100 scale-110 z-20'
                      : 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110'
                  }`}
                >
                  {/* LOGO (TOP) */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-2 transition-all duration-300">
                    <SponsorLogo logoUrl={sponsor.logoUrl} name={sponsor.name} FallbackIcon={Building2} />
                  </div>

                  {/* NAME (MIDDLE) */}
                  <h4
                    className={`font-extrabold text-xs sm:text-sm tracking-tight mb-1 whitespace-nowrap transition-colors ${
                      isHovered ? 'text-[#ffe600]' : 'text-gray-300'
                    }`}
                  >
                    {sponsor.name}
                  </h4>

                  {/* TIER (BOTTOM) */}
                  <span
                    className={`text-[9px] sm:text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold border transition-all ${
                      isHovered
                        ? 'bg-[#00f0ff] text-black border-black shadow-[1px_1px_0px_0px_#000]'
                        : 'bg-gray-800/80 text-gray-400 border-gray-700'
                    }`}
                  >
                    {sponsor.tierLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* TRACK 2: MEDIA PARTNER RESMI (Animasi Ke Kanan) */}
      <div className="space-y-3 pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center flex justify-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00f0ff] uppercase tracking-wider bg-[#182030] px-3 py-1 border border-black rounded shadow-[2px_2px_0px_0px_#000]">
            <Megaphone className="w-3.5 h-3.5 text-[#00f0ff]" /> Official Media Partner
          </div>
        </div>

        <div className="relative overflow-hidden w-full group py-4">
          {/* Left & Right gradient fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0c101a] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0c101a] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused] gap-10 items-center px-4">
            {marqueeMedia.map((media, index) => {
              const itemKey = `media-${media.id}-${index}`;
              const isHovered = hoveredItemKey === itemKey;

              return (
                <div
                  key={itemKey}
                  onMouseEnter={() => {
                    setHoveredItemKey(itemKey);
                    setActiveSponsor(media);
                  }}
                  onMouseLeave={() => setHoveredItemKey(null)}
                  onClick={() => setActiveSponsor(media)}
                  className={`cursor-pointer flex flex-col items-center justify-center text-center p-2 transition-all duration-300 ${
                    isHovered
                      ? 'grayscale-0 opacity-100 scale-110 z-20'
                      : 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110'
                  }`}
                >
                  {/* LOGO (TOP) */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-2 transition-all duration-300">
                    <SponsorLogo logoUrl={media.logoUrl} name={media.name} FallbackIcon={Megaphone} />
                  </div>

                  {/* NAME (MIDDLE) */}
                  <h4
                    className={`font-extrabold text-xs sm:text-sm tracking-tight mb-1 whitespace-nowrap transition-colors ${
                      isHovered ? 'text-[#00f0ff]' : 'text-gray-300'
                    }`}
                  >
                    {media.name}
                  </h4>

                  {/* TIER (BOTTOM) */}
                  <span
                    className={`text-[9px] sm:text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold border transition-all ${
                      isHovered
                        ? 'bg-[#ffe600] text-black border-black shadow-[1px_1px_0px_0px_#000]'
                        : 'bg-gray-800/80 text-gray-400 border-gray-700'
                    }`}
                  >
                    {media.tierLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Sponsor Info Modal / Drawer Banner */}
      {activeSponsor && (
        <div className="max-w-4xl mx-auto mt-6 px-4">
          <div className="bg-[#182030] border-2 border-black shadow-[6px_6px_0px_0px_#ffe600] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="neo-badge bg-[#ffe600] text-black border-black">
                  {activeSponsor.tierLabel}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-white">{activeSponsor.name}</h3>
              <p className="text-xs text-gray-300 max-w-2xl leading-relaxed">
                {activeSponsor.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href={activeSponsor.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="neo-btn-cyan px-4 py-2 text-xs flex items-center gap-2"
              >
                <span>Kunjungi Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setActiveSponsor(null)}
                className="text-xs text-gray-400 hover:text-white px-2 py-1 underline font-mono"
              >
                Tutup Info
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

