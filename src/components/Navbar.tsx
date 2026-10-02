import React, { useState, useEffect } from 'react';
import { SipSmokeLogo } from './SipSmokeLogo';
import { MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface NavbarProps {
  onOpenDirections: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDirections }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'MENU', href: '#menu' },
    { label: 'COCKTAILS', href: '#cocktails' },
    { label: 'NIGHTLIFE', href: '#nightlife' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'VISIT', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07080a]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark with Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-lg p-1"
            >
              <SipSmokeLogo size="sm" />
              <div className="flex flex-col">
                <span className="font-serif-luxury text-lg sm:text-xl font-bold tracking-wider text-neutral-100 group-hover:text-lime-300 transition-colors">
                  SIP & SMOKE
                </span>
                <span className="text-[10px] tracking-widest uppercase text-amber-400/90 font-medium">
                  The Resto Bar
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Clean text with hover effect) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-wider text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-lime-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-lime-400 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenDirections}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-neutral-900 bg-gradient-to-r from-lime-400 to-amber-300 hover:from-lime-300 hover:to-amber-200 rounded-lg shadow-md hover:shadow-lime-500/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenDirections}
                className="sm:hidden inline-flex items-center justify-center p-2 text-lime-400 bg-white/5 border border-white/10 rounded-lg text-xs"
                title="Directions"
              >
                <MapPin className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-300 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-72 bg-[#0c0e12] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="space-y-6 pt-16">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <SipSmokeLogo size="sm" />
                <div>
                  <div className="font-serif-luxury font-bold text-white text-base">SIP & SMOKE</div>
                  <div className="text-[10px] text-amber-400 uppercase tracking-widest">Salem, Tamil Nadu</div>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-semibold tracking-wider text-neutral-300 hover:text-lime-300 py-2 border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDirections();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold tracking-wider uppercase text-neutral-900 bg-gradient-to-r from-lime-400 to-amber-300 rounded-lg shadow-lg active:scale-95 transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </button>
              <div className="text-center text-[11px] text-neutral-400">
                {BUSINESS_INFO.hours.note}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
