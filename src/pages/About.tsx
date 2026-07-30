import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { ShieldCheck, Award, Heart, Users, MapPin, Clock, Phone, MessageSquare, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { PHONE_NUMBER } from '../utils/whatsapp';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="min-h-screen space-y-16 py-10 pb-16">
      <SEOMetadata
        title="About Durga Medical Hall | Trusted Chemist in Gaya, Bihar"
        description="Learn about Durga Medical Hall's history, mission, licensed pharmacists, cold-chain storage standards, and commitment to genuine medicines in A P Colony, Gaya."
        canonicalPath="/about"
      />

      {/* Page Header Header */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-700">
            About Durga Medical Hall
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Dedicated to Your Family's Health & Wellbeing
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Your neighborhood pharmacy at Asha Singh More, A P Colony, Gaya, Bihar. Providing 100% authentic pharmaceuticals and compassionate patient care.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Our Business Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Legacy of Trust & Quality Healthcare in Gaya
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Established with the core belief that genuine healthcare should be accessible, transparent, and dependable, <strong>Durga Medical Hall</strong> has grown into one of the most respected medical stores in A P Colony, Gaya, Bihar.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              From everyday OTC cold medicines to specialized life-saving oncology and diabetic prescriptions, every product in our store is batch-verified and procured exclusively through authorized stockists and licensed pharmaceutical distributors.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Genuine Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Cold Chain Preservation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Qualified Pharmacist Assistance</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80"
                alt="Durga Medical Hall Store Front Gaya"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <p className="font-bold text-base">Durga Medical Hall</p>
                  <p className="text-xs text-emerald-300">QXQM+3W5 Asha Singh More, A P Colony, Gaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md py-16 border-y border-white/60 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Our Mission, Vision & Values
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Guided by strict ethical standards and patient health priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold text-xl">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                To provide authentic, affordable, and timely medical supplies and healthcare advice to every household in Gaya, ensuring patient safety and peace of mind.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-100/80 dark:bg-blue-950 text-blue-600 flex items-center justify-center font-bold text-xl">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                To be Gaya's most reliable and technologically accessible medical hub, bridging traditional local trust with convenient digital WhatsApp ordering and doorstep delivery.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-100/80 dark:bg-amber-950 text-amber-600 flex items-center justify-center font-bold text-xl">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Core Values</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
                <li>• <strong>Authenticity:</strong> Zero compromise on drug genuine quality.</li>
                <li>• <strong>Compassion:</strong> Caring for patients with empathy.</li>
                <li>• <strong>Integrity:</strong> Honest MRP pricing without hidden fees.</li>
                <li>• <strong>Promptness:</strong> Fast processing for urgent medicines.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Management Message */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 shadow-sm space-y-4 relative overflow-hidden">
          <div className="flex items-center gap-4 border-b border-slate-200/50 dark:border-slate-800 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Pharmacist & Store Overview</h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Durga Medical Hall • Gaya, Bihar</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
            "At Durga Medical Hall, we understand that when someone walks into a pharmacy or orders a prescription, health and family are on the line. We take this responsibility with utmost seriousness. Every tablet, syrup, and medical device on our shelves is checked for batch authenticity and expiration validity before reaching your hands."
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>📍 Asha Singh More, A P Colony, Gaya</span>
            <span>📞 Call Store: {PHONE_NUMBER}</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="p-8 rounded-3xl bg-emerald-900 text-white space-y-4 shadow-xl">
          <h2 className="text-2xl font-bold">Need Medicines Delivered in Gaya?</h2>
          <p className="text-xs text-emerald-100 max-w-xl mx-auto">
            Order your prescription or daily health items on WhatsApp in seconds. Our pharmacist will verify your order immediately.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all"
            >
              Order via WhatsApp
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="px-6 py-3 rounded-full border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all"
            >
              Call Store ({PHONE_NUMBER})
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
