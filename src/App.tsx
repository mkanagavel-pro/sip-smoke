/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfo } from './components/QuickInfo';
import { ExperienceSection } from './components/ExperienceSection';
import { FoodSection } from './components/FoodSection';
import { CocktailSection } from './components/CocktailSection';
import { NightlifeSection } from './components/NightlifeSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { Gallery } from './components/Gallery';
import { ReviewsSection } from './components/ReviewsSection';
import { WhySipSmoke } from './components/WhySipSmoke';
import { LocationSection } from './components/LocationSection';
import { ContactCTA } from './components/ContactCTA';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DirectionsModal } from './components/DirectionsModal';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'directions' | 'save';
  }>({
    isOpen: false,
    mode: 'directions',
  });

  const handleOpenDirections = () => {
    setModalState({ isOpen: true, mode: 'directions' });
  };

  const handleSaveLocation = () => {
    setModalState({ isOpen: true, mode: 'save' });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-neutral-100 flex flex-col font-sans selection:bg-lime-500/30 selection:text-lime-200">
      {/* Sticky Top Navbar */}
      <Navbar onOpenDirections={handleOpenDirections} />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onOpenDirections={handleOpenDirections}
          onExploreExperience={() => scrollToElement('experience')}
        />

        {/* Quick Business Information Bar */}
        <QuickInfo />

        {/* 4 Pillars Experience */}
        <ExperienceSection />

        {/* Culinary & Food Showcase */}
        <FoodSection />

        {/* Cocktail Showcase & Interactive Glass Experience */}
        <CocktailSection />

        {/* Nightlife & Sunday DJ Sessions */}
        <NightlifeSection />

        {/* Atmospheric Sensory Experience */}
        <AtmosphereSection />

        {/* Responsive Gallery with Lightbox */}
        <Gallery />

        {/* Authentic Customer Feedback & Highlights */}
        <ReviewsSection />

        {/* Why Sip & Smoke Distinctives */}
        <WhySipSmoke />

        {/* Location & Business Hours with Interactive Map */}
        <LocationSection
          onOpenDirections={handleOpenDirections}
          onSaveLocation={handleSaveLocation}
        />

        {/* Contact Call to Action */}
        <ContactCTA
          onOpenDirections={handleOpenDirections}
          onSaveLocation={handleSaveLocation}
        />

        {/* Final Conversion CTA */}
        <FinalCTA
          onOpenDirections={handleOpenDirections}
          onExploreMenu={() => scrollToElement('menu')}
        />
      </main>

      {/* Footer with Concept Disclaimer */}
      <Footer onOpenDirections={handleOpenDirections} />

      {/* Directions & Save Location Modal */}
      <DirectionsModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        mode={modalState.mode}
      />
    </div>
  );
}
