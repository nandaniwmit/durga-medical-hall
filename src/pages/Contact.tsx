import React, { useState } from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { MapPin, Phone, MessageSquare, Clock, Mail, Send, CheckCircle2, Navigation, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER, RAW_WHATSAPP_NUMBER, generateQuickWhatsAppUrl } from '../utils/whatsapp';

interface ContactProps {
  onOpenOrderModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenOrderModal }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('General Medicine Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const text = `Hello Durga Medical Hall,
Inquiry from website:
• Name: ${formName}
• Phone: ${formPhone}
• Subject: ${formSubject}
• Message: ${formMessage}`;
      window.open(`https://wa.me/${RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormMessage('');
    }, 1000);
  };

  return (
    <div className="min-h-screen space-y-16 py-10 pb-16">
      <SEOMetadata
        title="Contact Durga Medical Hall | Asha Singh More, Gaya, Bihar"
        description="Contact Durga Medical Hall at Asha Singh More, A P Colony, Gaya, Bihar 823001. Phone: 09430070043. Get Google Map directions or WhatsApp medicine orders."
        canonicalPath="/contact"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-700">
            Contact & Directions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            We Are Here to Help You in Gaya
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Visit our store at Asha Singh More, A P Colony, or reach out via call or WhatsApp for quick medicine confirmation.
          </p>
        </div>
      </section>

      {/* Main Info Grid & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column - Business Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-3xl p-8 border border-white/50 dark:border-slate-800 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white border-b border-slate-200/50 dark:border-slate-800 pb-4">
                Store Location Details
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/80 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Address:</strong>
                    <p className="text-slate-600 dark:text-slate-300">
                      QXQM+3W5 ASHA SINGH MORE, A P Colony, Gaya, Bihar 823001
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Landmark: Asha Singh More Circle</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/80 dark:bg-blue-950 text-blue-600 flex items-center justify-center shrink-0 font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Phone & Call Support:</strong>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100/80 dark:bg-teal-950 text-teal-600 flex items-center justify-center shrink-0 font-bold">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">WhatsApp Order & Inquiry:</strong>
                    <a 
                      href={`https://wa.me/${RAW_WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/80 dark:bg-amber-950 text-amber-600 flex items-center justify-center shrink-0 font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Working Hours:</strong>
                    <p className="text-slate-600 dark:text-slate-300">
                      Open 7 Days a Week: 7:00 AM – 10:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800 space-y-2.5">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full py-3 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm hover:bg-emerald-600 dark:hover:bg-emerald-400 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>Call Store Directly</span>
                </a>

                <button
                  onClick={onOpenOrderModal}
                  className="w-full py-3 rounded-full bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Medicine Order</span>
                </button>

                <a
                  href="https://maps.google.com/?q=Durga+Medical+Hall+Asha+Singh+More+Gaya+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-100/50 dark:hover:bg-slate-800/50 flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-emerald-600" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-3xl p-8 border border-white/50 dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Send a Quick Store Inquiry
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Have a question about medicine stock or prescription availability? Fill out the form below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-full border border-slate-300/80 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 94300XXXXX"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-full border border-slate-300/80 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. email@gmail.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-full border border-slate-300/80 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-full border border-slate-300/80 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                      <option value="Prescription Stock Check">Prescription Stock Check</option>
                      <option value="Health Device Price">Health Device Price & Availability</option>
                      <option value="Home Delivery Request">Home Delivery Request in Gaya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Required Items *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="List the medicines or ask your question here..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-3xl border border-slate-300/80 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-200 animate-bounce" />
                      <span>Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry via WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Find Us on Google Maps
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Asha Singh More, A P Colony, Gaya, Bihar 823001
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl h-96 bg-slate-900">
          <iframe
            title="Durga Medical Hall Interactive Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.78921827402!2d84.992812!3d24.787625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ3JzE1LjUiTiA4NMK1NTknMzQuMSJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};
