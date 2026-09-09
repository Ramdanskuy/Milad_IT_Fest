import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { X, Lock, Bell, CalendarClock, MessageCircle } from "lucide-react";

interface RegistrationClosedModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle?: string;
}

export const RegistrationClosedModal: React.FC<RegistrationClosedModalProps> = ({
  isOpen,
  onClose,
  eventTitle,
}) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reg-closed-title"
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      >
        <div
          className="relative w-full max-w-md bg-[#0f1520] border-4 border-black shadow-[10px_10px_0px_0px_#ffe600] rounded-2xl overflow-hidden"
          style={{ animation: "regModalIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top rainbow accent bar */}
          <div className="h-2 w-full bg-gradient-to-r from-[#ffe600] via-[#ff007f] to-[#00f0ff]" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#182030] border-2 border-black rounded-lg text-gray-400 hover:text-white hover:bg-[#ff007f] hover:border-[#ff007f] transition-all duration-200 shadow-[2px_2px_0px_0px_#000]"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="px-6 pt-8 pb-7 space-y-5 text-center">
            {/* Lock icon with live ping dot */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-[#182030] border-4 border-black shadow-[5px_5px_0px_0px_#ffe600] flex items-center justify-center">
                  <Lock className="w-10 h-10 text-[#ffe600]" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff007f] opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff007f] border-2 border-black" />
                </span>
              </div>
            </div>

            {/* Title & description */}
            <div className="space-y-2">
              <h2
                id="reg-closed-title"
                className="text-2xl font-black text-white uppercase tracking-tight leading-tight"
              >
                Pendaftaran Belum Dibuka
              </h2>
              {eventTitle && (
                <span className="inline-block text-xs font-mono font-bold text-black bg-[#ffe600] px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] rounded">
                  {eventTitle}
                </span>
              )}
              <p className="text-sm text-gray-300 leading-relaxed font-sans pt-1">
                Pendaftaran untuk lomba ini{" "}
                <span className="text-[#ffe600] font-bold">belum dibuka</span> saat ini.
                Pantau terus informasi terbaru agar kamu tidak ketinggalan!
              </p>
            </div>

            {/* Info pill */}
            <div className="flex items-center justify-center gap-2 bg-[#182030] border-2 border-black rounded-lg px-4 py-3 shadow-[3px_3px_0px_0px_#000]">
              <CalendarClock className="w-4 h-4 text-[#00f0ff] shrink-0" />
              <p className="text-xs font-mono text-gray-300">
                Segera diumumkan melalui akun resmi{" "}
                <span className="text-[#00f0ff] font-bold">@miladituir</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="https://www.instagram.com/miladtiuir?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#e1306c] to-[#833ab4] text-white font-extrabold text-xs uppercase tracking-wider px-4 py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 hover:shadow-[3px_5px_0px_0px_#000] transition-all duration-200"
              >
                <Bell className="w-4 h-4" />
                <span>Follow Instagram</span>
              </a>
              <a
                href="https://wa.link/i5whk8"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#00c853] text-black font-extrabold text-xs uppercase tracking-wider px-4 py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-y-0.5 hover:shadow-[3px_5px_0px_0px_#000] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi Panitia</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-gray-500 hover:text-gray-300 font-mono underline transition-colors"
            >
              Tutup Notifikasi
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes regModalIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};
