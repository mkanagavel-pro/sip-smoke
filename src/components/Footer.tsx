import React from 'react';
import { SipSmokeLogo } from './SipSmokeLogo';
import { MapPin, Clock, ArrowUp, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface FooterProps {
  onOpenDirections: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDirections }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Experience', href: '#experience' },
    { label: 'Menu', href: '#menu' },
    { label: 'Cocktails', href: '#cocktails' },
    { label: 'Nightlife', href: '#nightlife' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#location' },
  ];

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SipSmokeLogo size="md" />
              <div>
                <span className="font-serif-luxury text-xl font-bold text-white tracking-wider block">
                  SIP & SMOKE
                </span>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">
                  The Resto Bar
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Salem's premier resto-bar destination uniting crafted cocktails,
              culinary pairings, and vibrant nightlife ambience after sunset.
            </p>

            <div className="text-xs text-neutral-400 space-y-1 pt-2">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>Seerangapalayam, Salem, Tamil Nadu 636007</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400 pl-5">
                <span>Google Plus Code:</span>
                <span className="text-lime-300 font-mono font-medium">{BUSINESS_INFO.address.plusCode}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white mb-2">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-lime-300 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Hours & Directions */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-white mb-2">
              Listed Hours
            </div>
            <div className="text-xs text-neutral-300 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Until 11:30 PM</span>
              </div>
              <div className="text-[11px] text-neutral-500">
                Holiday hours may vary
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDirections}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-wider uppercase text-neutral-900 bg-lime-400 hover:bg-lime-300 rounded-lg shadow-sm transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        </div>

        {/* Concept Demo Disclaimer (Section 28 Mandatory) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="text-center md:text-left">
            <p className="font-medium text-neutral-400">
              Concept Website Demo by KEAGROW — Not the official website of Sip & Smoke (The Resto Bar).
            </p>
            <p className="text-[11px] text-neutral-600 mt-0.5">
              Designed for presentation to business leadership. All trademarks remain property of their respective owners.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors text-xs shrink-0 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
