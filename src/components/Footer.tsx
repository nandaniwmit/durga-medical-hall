import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUpRight, PlusCircle, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER, RAW_WHATSAPP_NUMBER } from '../utils/whatsapp';

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Global Tracker Hook integrated as required by instructions
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(err => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <PlusCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">DURGA MEDICAL</span>
                <p className="text-xs text-emerald-400 font-medium uppercase">Hall & Pharmacy</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted neighborhood pharmacy in A P Colony, Gaya, Bihar. Dedicated to providing 100% genuine medicines, healthcare devices, and surgical supplies with doorstep delivery.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" /> Licensed & Registered Pharmacy
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase text-xs text-emerald-400">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  About Our Store
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  Pharmacy Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  Contact & Map Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase text-xs text-emerald-400">
              Store Location & Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>QXQM+3W5 ASHA SINGH MORE, A P Colony, Gaya, Bihar 823001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-emerald-400 font-medium text-white">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${RAW_WHATSAPP_NUMBER}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 text-emerald-300 font-medium"
                >
                  Order on WhatsApp: {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-xs pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open 7 Days: 7:00 AM – 10:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Map Quick View */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase text-xs text-emerald-400">
              Find Us On Google Maps
            </h3>
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-32 relative group">
              <iframe 
                title="Durga Medical Hall Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.78921827402!2d84.992812!3d24.787625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ3JzE1LjUiTiA4NMK1NTknMzQuMSJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all border-0 pointer-events-none"
                loading="lazy"
              ></iframe>
              <a
                href="https://maps.google.com/?q=Durga+Medical+Hall+Asha+Singh+More+Gaya+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-slate-900/40 hover:bg-transparent flex items-center justify-center text-xs font-semibold text-white gap-1 transition-all"
              >
                <span>Get Driving Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-xs text-slate-400">
              Near Asha Singh More landmark in A P Colony, Gaya.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>&copy; {new Date().getFullYear()} Durga Medical Hall. All rights reserved.</p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLegalModal('privacy')} 
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => setLegalModal('terms')} 
              className="hover:text-emerald-400 transition-colors"
            >
              Terms of Use
            </button>
            <span>•</span>
            <button 
              onClick={() => setLegalModal('disclaimer')} 
              className="hover:text-emerald-400 transition-colors"
            >
              Medical Disclaimer
            </button>
          </div>

          {/* WMIT Developer Link as required */}
          <div className="flex items-center gap-1">
            <span></span>
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 text-slate-200 border border-slate-800 rounded-2xl max-w-xl w-full p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white capitalize">
                {legalModal === 'privacy' && 'Privacy Policy'}
                {legalModal === 'terms' && 'Terms of Service'}
                {legalModal === 'disclaimer' && 'Medical Disclaimer'}
              </h3>
              <button 
                onClick={() => setLegalModal(null)}
                className="text-slate-400 hover:text-white text-sm font-semibold"
              >
                Close
              </button>
            </div>
            
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              {legalModal === 'privacy' && (
                <>
                  <p>Durga Medical Hall is committed to protecting customer privacy. Customer contact numbers and addresses shared for WhatsApp order fulfillment in Gaya, Bihar are strictly used for delivery purposes only and are never shared with third parties.</p>
                  <p>All prescription images uploaded for order verification are processed confidentially by registered pharmacists.</p>
                </>
              )}
              {legalModal === 'terms' && (
                <>
                  <p>By placing an order with Durga Medical Hall, you acknowledge that prescription medicines require a valid doctor's prescription upon delivery.</p>
                  <p>All product prices are as per Government MRP guidelines. Payment is accepted upon delivery or through verified digital payment methods.</p>
                </>
              )}
              {legalModal === 'disclaimer' && (
                <>
                  <p>Information provided on this website is for informational purposes only and does not substitute professional medical advice, diagnosis, or treatment.</p>
                  <p>Always consult with a qualified doctor or physician regarding any medical condition or prescription medication.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
