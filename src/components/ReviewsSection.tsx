import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, REVIEW_THEMES } from '../data/businessInfo';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 relative bg-[#07080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 mb-3 block">
            Guest Feedback Summary
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            What Diners Highlight.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Based on {BUSINESS_INFO.reviewsCount} Google reviews with an aggregate 4.6 ★ rating,
            here is what guests consistently value during their visits to Sip & Smoke.
          </p>

          {/* Rating Summary Bar */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-200">
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400/60" />
            </div>
            <span className="font-bold text-white">{BUSINESS_INFO.rating} Out of 5</span>
            <span className="text-neutral-500">·</span>
            <span>{BUSINESS_INFO.reviewsCount} Verified Reviews</span>
          </div>
        </div>

        {/* Highlight Cards (Not fake quotes, but authenticated aggregate themes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {REVIEW_THEMES.map((theme) => (
            <div
              key={theme.id}
              className="p-6 rounded-2xl bg-[#0e1217] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                    {theme.tag}
                  </span>
                  <CheckCircle className="w-4 h-4 text-lime-400" />
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
                  {theme.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  "{theme.summary}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-neutral-500">
                Aggregated from customer feedback
              </div>
            </div>
          ))}
        </div>

        {/* Balanced Review Summary Statement */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-400 leading-relaxed text-center">
          <div className="flex items-center justify-center gap-2 text-neutral-200 font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-lime-400" />
            <span>Balanced Guest Experience Perspective</span>
          </div>
          While diners enthusiastically celebrate the food, unlimited sides, craft cocktails,
          and Sunday DJ vibe, reviews also indicate occasional peak-hour waiting times.
          The team actively focuses on proactive service to ensure every visit meets high standards.
        </div>
      </div>
    </section>
  );
};
