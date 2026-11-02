import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './sections/AboutSection';
import { LearningSection } from './sections/LearningSection';
import { AnalyticsSection } from './sections/AnalyticsSection';
import { AccessibilitySection } from './sections/AccessibilitySection';
import { PaddlitSection } from './sections/PaddlitSection';
import { EWasteSection } from './sections/EWasteSection';
import { BlogSection } from './sections/BlogSection';
import { BusinessSection } from './sections/BusinessSection';
import { VideoSection } from './sections/VideoSection';
import { GithubSection } from './sections/GithubSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-white py-4 md:py-8 px-2 md:px-6">
      {/* 
        PREMIUM OUTER FRAME: 
        As specified in design reference: Deep black background with large rounded 
        rectangular outer frame, subtle geometric background, and vibrant orange accents.
      */}
      <div className="portfolio-outer-frame shadow-2xl relative">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <LearningSection />
          <AnalyticsSection />
          <AccessibilitySection />
          <PaddlitSection />
          <EWasteSection />
          <BlogSection />
          <BusinessSection />
          <VideoSection />
          <GithubSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;

