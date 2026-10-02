import React from 'react';
import { ASSETS } from '../data/assets';

interface SipSmokeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
  animated?: boolean;
}

export const SipSmokeLogo: React.FC<SipSmokeLogoProps> = ({
  className = '',
  size = 'md',
  animated = false,
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
    hero: 'w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72',
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}>
      {/* Outer subtle glow ring */}
      <div
        className={`absolute inset-0 rounded-full bg-lime-500/20 blur-md pointer-events-none transition-opacity duration-500 ${
          animated ? 'animate-pulse' : 'opacity-80 group-hover:opacity-100'
        }`}
      />

      {/* High-res generated authentic neon sign asset */}
      <div
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-2 border-lime-400/80 shadow-[0_0_15px_rgba(163,230,53,0.4)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(163,230,53,0.65)] group-hover:scale-[1.02] bg-[#0c100e]`}
      >
        <img
          src={ASSETS.logo}
          alt="Sip & Smoke - The Resto Bar Logo"
          className="w-full h-full object-cover object-center select-none"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Subtle glass reflection highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
      </div>
    </div>
  );
};
