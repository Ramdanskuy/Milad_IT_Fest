import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { SponsorPage } from './pages/SponsorPage';
import { EventDetailPage } from './pages/EventDetailPage';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-gray-100 font-sans flex flex-col justify-between selection:bg-[#ffe600] selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sponsor" element={<SponsorPage />} />
          <Route path="/acara/:slug" element={<EventDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
