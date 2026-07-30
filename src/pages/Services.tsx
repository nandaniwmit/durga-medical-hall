import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { servicesData } from '../data/servicesData';
import { Pill, Stethoscope, Activity, ShieldAlert, Baby, Sparkles, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER } from '../utils/whatsapp';

interface ServicesProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="min-h-screen space-y-16 py-10 pb-16">
      <SEOMetadata
        title="Pharmacy Services & Medicine Stock Checker | Durga Medical Hall Gaya"
        description="Explore Durga Medical Hall's full services in Gaya: Prescription medicines, OTC drugs, health monitors, surgical supplies, baby care, and live stock availability checker."
        canonicalPath="/services"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-700">
            Comprehensive Pharmacy Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Healthcare Products & Medicine Inventory
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Search live store stock or explore our full range of certified medical supplies available at Durga Medical Hall, A P Colony, Gaya.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Medicine Stock Checker Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker 
          onOrderMedicine={(medName) => onOpenOrderModal(medName)}
          title="Search Medicine Stock & Pricing"
          subtitle="Real-time availability status for prescription drugs, health devices, and OTC products at our Gaya store."
        />
      </section>

      {/* Full Category Services Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Service Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Detailed Pharmacy Offerings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200/50 dark:border-emerald-800">
                    {svc.itemCount}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {svc.fullDesc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/50 dark:border-slate-800">
                  <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
                    Popular Items in Stock:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                    {svc.popularItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  100% Genuine Certified Stock
                </span>

                <button
                  onClick={() => onOpenOrderModal(svc.title)}
                  className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order Category via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Consultation CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-emerald-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">Have a specific prescription or query?</h3>
            <p className="text-xs text-emerald-100">Call our pharmacist directly at Asha Singh More, Gaya store.</p>
          </div>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md shrink-0 flex items-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call {PHONE_NUMBER}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
