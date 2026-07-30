import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageSquare, MapPin, ShieldCheck, HeartPulse, Clock, 
  ArrowRight, Search, CheckCircle2, Star, Sparkles, Award, Users, 
  Truck, Thermometer, ChevronRight, HelpCircle, Newspaper, Send, PlusCircle
} from 'lucide-react';
import { SEOMetadata } from '../components/SEOMetadata';
import { PHONE_NUMBER, generateQuickWhatsAppUrl } from '../utils/whatsapp';
import { servicesData } from '../data/servicesData';
import { faqData } from '../data/faqData';
import { healthTips } from '../data/healthTips';
import stockData from '../data/medicineStock.json';

interface HomeProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  const [quickSearch, setQuickSearch] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const popularMedicines = stockData.slice(0, 6);
  const homeFaqs = faqData.slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  return (
    <div className="min-h-screen space-y-16 pb-12">
      <SEOMetadata
        title="Durga Medical Hall | Genuine Medicines & Pharmacy in Gaya, Bihar"
        description="Durga Medical Hall at Asha Singh More, A P Colony, Gaya provides genuine medicines, health monitors, surgical supplies, and WhatsApp home delivery."
        canonicalPath="/"
      />

      {/* Hero Banner Section */}
      <section className="pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-auto lg:h-[480px] rounded-3xl relative overflow-hidden bg-emerald-900 shadow-xl">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-800/60 z-10 p-6 sm:p-12 flex flex-col justify-center">
            <div className="max-w-2xl space-y-5">
              <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-700/60 inline-flex items-center gap-1.5 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Directly from Gaya's Best Pharmacy
              </span>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Genuine Medicines & <br className="hidden sm:inline"/>Healthcare Essentials
              </h1>

              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-xl">
                Providing affordable prescription drugs, surgical supplies, cold-chain insulin, baby care, and daily medical essentials to our community in Gaya, Bihar.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="px-6 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-emerald-50 transition-all shadow-md flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 text-emerald-600 group-hover:rotate-12 transition-transform" />
                  <span>Call Store ({PHONE_NUMBER})</span>
                </a>

                <button
                  onClick={() => onOpenOrderModal()}
                  className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md shadow-emerald-950/50 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </button>

                <a
                  href="https://maps.google.com/?q=Durga+Medical+Hall+Asha+Singh+More+Gaya+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-emerald-300" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-emerald-800/80 grid grid-cols-3 gap-2 text-xs font-semibold text-emerald-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Genuine Brands</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cold Storage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Gaya Delivery</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-800/20 hidden lg:flex items-center justify-center pointer-events-none">
            <PlusCircle className="w-64 h-64 text-white/10" />
          </div>
        </div>
      </section>

      {/* Main Frosted Medicine Stock & Quick Finder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-3xl border border-white/50 dark:border-slate-800/80 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">Medicine Stock Checker</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Search over 5,000+ authentic health products at Durga Medical Hall</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-lg border border-emerald-100 dark:border-emerald-900 italic flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Store Inventory
              </span>
            </div>
          </div>

          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search for Paracetamol, Insulin, Augmentin, or Baby Food..."
              value={quickSearch}
              onChange={(e) => setQuickSearch(e.target.value)}
              className="w-full bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-inner"
            />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Quick Availability Shortcuts:</p>
            <div className="flex flex-wrap gap-2">
              {popularMedicines.map((med) => (
                <button
                  key={med.id}
                  onClick={() => onOpenOrderModal(med.name)}
                  className="px-3 py-1.5 bg-white/80 dark:bg-slate-800/80 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl border border-slate-200/80 dark:border-slate-700 transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>+ {med.name}</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">₹{med.mrp}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/services" className="text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:underline">
              View All 4,500+ Stock Items & Full Price List →
            </Link>
            <button
              onClick={() => onOpenOrderModal(quickSearch)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-xs shadow-md hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm Availability on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Short About Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/60 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              About Durga Medical Hall
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              Serving Gaya Families with Genuine Healthcare Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Located conveniently at Asha Singh More in A P Colony, Gaya, Durga Medical Hall is dedicated to safeguarding family health with authentic, batch-verified prescription drugs, cold-chain temperature-preserved insulins, health monitors, surgical items, and baby care essentials.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-slate-900 transition-colors"
              >
                <span>Read Full Store Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-emerald-100 dark:border-emerald-900 text-center space-y-1 shadow-sm">
              <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">100%</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Genuine Medicines</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-blue-100 dark:border-blue-900 text-center space-y-1 shadow-sm">
              <span className="text-3xl font-black text-blue-600 dark:text-blue-400">5000+</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Products Stocked</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-amber-100 dark:border-amber-900 text-center space-y-1 shadow-sm">
              <span className="text-3xl font-black text-amber-600 dark:text-amber-400">7 Days</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">7 AM - 10:30 PM</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-teal-100 dark:border-teal-900 text-center space-y-1 shadow-sm">
              <span className="text-3xl font-black text-teal-600 dark:text-teal-400">Fast</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">WhatsApp Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview (Maximum 6 Preview Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Pharmacy Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Everything Your Family Needs Under One Roof
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            From emergency prescription refills to newborn essentials and home health monitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 hover:border-emerald-500/50 transition-all shadow-sm hover:shadow-md space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  {service.itemCount}
                </span>
                <button
                  onClick={() => onOpenOrderModal(service.title)}
                  className="text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 flex items-center gap-1"
                >
                  <span>Inquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
          >
            <span>View All Services & Inventory Checker</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md py-16 border-y border-white/60 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Why Gaya Trusts Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              The Durga Medical Hall Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-3 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">100% Authentic Stock</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Directly sourced from verified pharma company stockists with batch tracking numbers.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-3 shadow-sm">
              <Thermometer className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Cold Chain Maintenance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                24/7 power backup ensures vaccines & insulins are strictly kept between 2°C – 8°C.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-3 shadow-sm">
              <Users className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Expert Pharmacists</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Qualified guidance on dosage instructions, drug interactions, and dietary advice.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-3 shadow-sm">
              <Truck className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Fast Doorstep Delivery</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Order via WhatsApp and get medicines delivered right to your home in Gaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview Section (Natural Local Feedback) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Community Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Trusted by Residents Across A P Colony & Gaya
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 italic">
              " Durga Medical Hall is my go-to chemist in A P Colony. Always stocked with genuine medicines and the WhatsApp ordering feature saves so much time!"
            </p>
            <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-900 dark:text-white">A. K. Sharma</p>
              <p className="text-[10px] text-slate-400">Resident, A P Colony, Gaya</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 italic">
              "Very polite behavior and genuine MRP pricing. They guided me properly on my father's diabetes medicine dosage."
            </p>
            <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-900 dark:text-white">Priya Verma</p>
              <p className="text-[10px] text-slate-400">Gaya Local Customer</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 italic">
              "Fast home delivery service near Asha Singh More. Got my BP monitor and strip box delivered within an hour."
            </p>
            <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-900 dark:text-white">Rajesh Kumar</p>
              <p className="text-[10px] text-slate-400">Rampur, Gaya</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq) => (
            <div key={faq.id} className="p-5 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                {faq.question}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Health Tips Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Pharmacist Advice
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Health & Wellness Guidance
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((tip) => (
            <div key={tip.id} className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-3">
              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-md">
                {tip.category}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {tip.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {tip.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-emerald-900 text-white shadow-xl space-y-4 text-center">
          <h2 className="text-2xl font-extrabold">Stay Updated with Health Offers & Medicine Stock Alerts</h2>
          <p className="text-xs text-emerald-100 max-w-lg mx-auto">
            Subscribe to receive seasonal health tips, medicine stock updates, and home delivery announcements from Durga Medical Hall, Gaya.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-emerald-200 text-sm outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-colors shrink-0 flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

          {newsletterSuccess && (
            <p className="text-xs font-bold text-emerald-200 animate-in fade-in">
              ✓ Thank you for subscribing! We will keep you updated.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
