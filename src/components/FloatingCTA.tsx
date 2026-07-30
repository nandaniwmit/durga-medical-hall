import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Plus } from 'lucide-react';
import { PHONE_NUMBER, RAW_WHATSAPP_NUMBER, generateQuickWhatsAppUrl } from '../utils/whatsapp';

interface FloatingCTAProps {
  onOpenOrderModal: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop & Tablet Floating Buttons (Right Side) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3 rounded-full bg-slate-900/90 dark:bg-slate-100/90 hover:bg-slate-900 dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110"
            title="Back to top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Phone Call Button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="pointer-events-auto p-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          title={`Call ${PHONE_NUMBER}`}
          aria-label="Call Store"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold">
            Call Store
          </span>
        </a>

        {/* Floating WhatsApp Order Button */}
        <button
          onClick={onOpenOrderModal}
          className="pointer-events-auto p-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/40 transition-all duration-300 hover:scale-110 flex items-center justify-center relative group"
          title="Order Medicine on WhatsApp"
          aria-label="WhatsApp Medicine Order"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold">
            WhatsApp Order
          </span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 flex items-center justify-around gap-2 shadow-2xl">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-blue-600" />
          <span>Call Store</span>
        </a>

        <button
          onClick={onOpenOrderModal}
          className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Order</span>
        </button>
      </div>
    </>
  );
};
