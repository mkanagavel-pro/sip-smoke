import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/assets';
import { X, ZoomIn, Info, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'FOOD & DRINK' | 'VIBE' | 'MENU'>('ALL');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories: Array<'ALL' | 'FOOD & DRINK' | 'VIBE' | 'MENU'> = [
    'ALL',
    'FOOD & DRINK',
    'VIBE',
    'MENU',
  ];

  const filteredItems =
    selectedCategory === 'ALL'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 relative bg-[#090b0e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-lime-400 mb-3 block">
            Visual Journal
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Moments At Sip & Smoke.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            A visual glimpse into our cocktails, night-time ambience, and energetic lounge spaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-lime-400 text-neutral-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`group relative rounded-2xl overflow-hidden bg-[#11141a] border border-white/10 hover:border-lime-400/50 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg ${
                index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim & Hover info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-lime-400" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-lime-400 mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-8 text-center text-xs text-neutral-500 flex items-center justify-center gap-1.5">
          <Info className="w-3.5 h-3.5" />
          <span>
            Curated concept imagery for demonstration. Production release will feature approved on-site photography.
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
          <div
            className="fixed inset-0"
            onClick={() => setActiveItem(null)}
          />

          <div className="relative z-10 max-w-4xl w-full bg-[#0d1015] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:text-lime-400 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-auto max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-[#0d1015] border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-lime-400 mb-1 block">
                {activeItem.category}
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                {activeItem.title}
              </h3>
              <p className="text-sm text-neutral-300">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
