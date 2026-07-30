import React, { useState, useMemo } from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Lightbox } from '../components/Lightbox';
import { galleryData, GalleryItem } from '../data/galleryData';
import { Filter, Eye, MessageSquare, ZoomIn } from 'lucide-react';

interface GalleryProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(galleryData.map(g => g.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return galleryData;
    return galleryData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen space-y-12 py-10 pb-16">
      <SEOMetadata
        title="Store Photo Gallery | Durga Medical Hall Gaya, Bihar"
        description="View photos of Durga Medical Hall in Asha Singh More, A P Colony, Gaya: Medicine shelves, health devices, cold storage, and clean pharmacy interior."
        canonicalPath="/gallery"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-700">
            Store Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Durga Medical Hall Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Take a virtual tour of our clean, well-organized pharmacy store located at Asha Singh More, A P Colony, Gaya.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-md text-slate-700 dark:text-slate-300 border border-white/50 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/50 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  {item.category}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onOrderClick={() => onOpenOrderModal()}
      />
    </div>
  );
};
