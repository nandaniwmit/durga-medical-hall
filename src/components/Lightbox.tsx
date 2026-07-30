import React from 'react';
import { X, ZoomIn, ZoomOut, MessageSquare } from 'lucide-react';
import { GalleryItem } from '../data/galleryData';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onOrderClick: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onOrderClick }) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white transition-colors"
          aria-label="Close photo view"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="relative w-full h-[60vh] max-h-[500px] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Caption & Actions */}
        <div className="p-6 bg-slate-900 space-y-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800">
              {item.category}
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400">
              {item.caption}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOrderClick();
            }}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Order Medicine via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
