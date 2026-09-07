import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Calendar, Flame, Sparkles } from 'lucide-react';
import { eventsData } from '../data/eventsData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isAcaraActive = location.pathname.startsWith('/acara');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-xl transition-all duration-300 border-2 border-black ${isScrolled
          ? 'bg-[#121723]/95 backdrop-blur-md shadow-[4px_4px_0px_0px_#ffe600]'
          : 'bg-[#121723] shadow-[4px_4px_0px_0px_#000000]'
          } px-4 sm:px-6 py-3 flex items-center justify-between`}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#ffe600] border-2 border-black shadow-[2px_2px_0px_0px_#000000] flex items-center justify-center font-extrabold text-black text-xl font-mono group-hover:rotate-6 transition-transform">
            IT
          </div>
          <div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5 font-sans">
              MILAD IT FEST <span className="text-[#00f0ff] font-mono text-sm border border-black bg-black px-1.5 py-0.5 rounded">2026</span>
            </span>
            <p className="text-[10px] text-gray-400 font-mono tracking-wider">TEKNIK INFORMATIKA UIR #19</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded transition-all ${isActive('/')
              ? 'bg-[#ffe600] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
          >
            Beranda
          </Link>

          <Link
            to="/about"
            className={`px-3 py-1.5 rounded transition-all ${isActive('/about')
              ? 'bg-[#ffe600] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
          >
            About Us
          </Link>

          {/* Acara Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all ${isAcaraActive
                ? 'bg-[#00f0ff] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
            >
              <Flame className="w-4 h-4 text-[#ff007f]" />
              <span>Acara</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu Box — always rendered, animated via CSS */}
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-[#181f2e] border-2 border-black shadow-[6px_6px_0px_0px_#000] rounded-lg p-2 z-50
                transition-all duration-200 ease-out origin-top
                ${dropdownOpen
                  ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }`}
            >
              <div className="divide-y divide-gray-800">
                {eventsData.map((ev) => (
                  <Link
                    key={ev.id}
                    to={`/acara/${ev.slug}`}
                    className="block px-3 py-2.5 text-sm text-gray-200 hover:bg-[#ffe600] hover:text-black font-medium transition-colors rounded group"
                  >
                    <span>{ev.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/sponsor"
            className={`px-3 py-1.5 rounded transition-all ${isActive('/sponsor')
              ? 'bg-[#ffe600] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
          >
            Sponsor
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#pendaftaran"
            className="neo-btn-primary px-4 py-2 text-xs flex items-center gap-2 uppercase tracking-wide"
          >
            <Sparkles className="w-4 h-4 fill-black" />
            Daftar Sekarang
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white bg-[#1a2130] border-2 border-black shadow-[2px_2px_0px_0px_#000]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-[#121723] border-2 border-black shadow-[6px_6px_0px_0px_#ffe600] rounded-xl p-4 space-y-3 z-50">
          <Link
            to="/"
            className={`block px-4 py-2.5 rounded font-bold text-sm border-2 border-black ${isActive('/') ? 'bg-[#ffe600] text-black' : 'bg-[#181f2e] text-white'
              }`}
          >
            Beranda
          </Link>
          <Link
            to="/about"
            className={`block px-4 py-2.5 rounded font-bold text-sm border-2 border-black ${isActive('/about') ? 'bg-[#ffe600] text-black' : 'bg-[#181f2e] text-white'
              }`}
          >
            About Us
          </Link>

          {/* Acara Submenu Mobile */}
          <div className="bg-[#181f2e] border-2 border-black rounded-lg p-3 space-y-2">
            <div className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider font-bold flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#ff007f]" /> Menu Acara
            </div>
            <div className="grid grid-cols-1 gap-1">
              {eventsData.map((ev) => (
                <Link
                  key={ev.id}
                  to={`/acara/${ev.slug}`}
                  className="px-3 py-2 rounded text-xs font-semibold text-gray-200 bg-[#121723] hover:bg-[#ffe600] hover:text-black border border-gray-700 flex items-center justify-between"
                >
                  <span>{ev.title}</span>
                  <span className="text-[10px] text-[#00f0ff] font-mono">{ev.shortTitle}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/sponsor"
            className={`block px-4 py-2.5 rounded font-bold text-sm border-2 border-black ${isActive('/sponsor') ? 'bg-[#ffe600] text-black' : 'bg-[#181f2e] text-white'
              }`}
          >
            Sponsor
          </Link>

          <a
            href="#pendaftaran"
            className="block text-center neo-btn-cyan py-3 text-sm uppercase tracking-wider"
          >
            Daftar Sekarang
          </a>
        </div>
      )}
    </header>
  );
};
